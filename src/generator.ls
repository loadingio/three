require! <[template-text path]>
fs = require "fs-extra"

name = process.argv.lsc.1
root = path.resolve(fs.realpathSync path.dirname(__filename))

pathmap = {}
addon-dir = path.join(root, '../web/static/assets/custom/three/main/build/addon')
fs.readdir-sync addon-dir
  .map (d) ->
    subdir = path.join(addon-dir, d)
    if !(fs.stat-sync subdir .is-directory!) => return
    fs.readdir-sync subdir .map ->
      n = it.replace(/\..+$/,'')
      pathmap[n] = d

config = fs.read-file-sync path.join(root, "rollup.cfg") .toString!
ret = template-text(config, {name}, root)
fs.write-file-sync ".built/#name.rollup.config.js", ret

module = fs.read-file-sync path.join(root, "module.ls") .toString!
ret = template-text(module, {name, path: pathmap[name] or '.'}, root)
fs.write-file-sync ".built/#name.ls", ret
