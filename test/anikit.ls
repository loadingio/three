# 測 anikit-three-renderer 對 anikit 1.x 與 2.x 的 affine 矩陣處理.
# 用法: lsc test/anikit.ls ; anikit dist 預設取自 ../anikit/web/static/assets/lib/anikit/{old,next}/index.js,
# 可用 ANIKIT_OLD / ANIKIT_NEXT 環境變數覆寫.
require! <[assert fs path livescript]>

root = path.join __dirname, \..
dists =
  "1.x": process.env.ANIKIT_OLD or path.join(root, \../anikit/web/static/assets/lib/anikit/old/index.js)
  "2.x": process.env.ANIKIT_NEXT or path.join(root, \../anikit/web/static/assets/lib/anikit/next/index.js)

# 最小的假 THREE: renderer 只用到 Matrix4 的 set / multiply / premultiply / makeTranslation / invert 與 Box3
mm = (a, b) -> [0 til 16].map (n) -> [0 til 4].reduce ((s, k) -> s + a[(n .>>. 2) * 4 + k] * b[k * 4 + (n .&. 3)]), 0
class Matrix4
  -> @e = [1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1]
  set: (...e) -> @e = e; @
  multiply: (m) -> @e = mm(@e, m.e); @
  premultiply: (m) -> @e = mm(m.e, @e); @
  make-translation: (x, y, z) -> @e = [1 0 0 x, 0 1 0 y, 0 0 1 z, 0 0 0 1]; @
  # 只會用在平移矩陣
  invert: -> @e = @e.map((v, i) -> if i in [3 7 11] => -v else v); @
class Box3
  set-from-object: -> @
global.THREE = {Matrix4, Box3}

code = livescript.compile fs.read-file-sync(path.join(root, \src/anikit.ls), \utf8), {bare: true, header: false}
renderer = new Function("#code\nreturn anikitThreeRenderer;")!

apply = (m, [x, y]) -> [m.0 * x + m.1 * y + m.3, m.4 * x + m.5 * y + m.7]

# 100x80 的 mesh, bbox 中心在 (200, 300) ( 未置中的 geometry )
mesh = ->
  geometry:
    bounding-box: {min: {x: 150, y: 260, z: 0}, max: {x: 250, y: 340, z: 0}}
    compute-bounding-box: ->
    apply-matrix: ->
  matrix: new Matrix4!
  material: {}

fail = 0
for ver, file of dists =>
  if !fs.exists-sync file =>
    console.log "skip #ver: #file not found"
    continue
  global.anikit = require file
  # 2.x 另測 compat 1 ( ld3 以此建舊 asset 的 kit, 應拿回 1.0.5 的定義, origin [0 0.6 0] )
  cases = [{name: \bounce, opt: {}}] ++ (if anikit.major >= 2 => [{name: \bounce, opt: {compat: 1}}] else [])
  for c in cases => for t in [0.75 0.86 0.95] =>
    n = mesh!
    kit = new anikit c.name, {}, c.opt
    renderer kit, n, t
    # preset 的 transformOrigin 以 box 中心為原點, 範圍 -1 ~ 1, y 向下 ( 1.x bounce 為 [0 0.6 0], 2.x 為 [0 1 0] 即底部中央 ).
    # geometry 已移到以 bbox 中心 (200, 300) 為原點 ( y 向上 ); origin 點套上 matrix 後應留在原位.
    [ox, oy] = kit.step(t, {width: 100, height: 80}, \affine).transform-origin
    q = [ox * 50, -oy * 40]
    p = apply n.matrix.e, q
    ok = Math.abs(p.0 - (200 + q.0)) < 1e-9 and Math.abs(p.1 - (300 + q.1)) < 1e-9
    if !ok => fail++
    label = c.name + (if c.opt.compat => " (compat #{c.opt.compat})" else "")
    console.log "#{if ok => \ok else \FAIL} anikit #ver (major=#{anikit.major}) #label t=#t origin #q -> #p"
  delete global.anikit
  delete require.cache[require.resolve file]

if fail => process.exit 1
