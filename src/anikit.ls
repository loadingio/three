anikit-three-renderer = (kit, node, t, opt = {}) ->
  opt = {} <<< kit.config <<< opt

  if !kit.preset =>
    t = kit.timing t, opt
    values = kit.affine t, opt

  box = new THREE.Box3!setFromObject node
  node.geometry.computeBoundingBox!
  bbox = node.geometry.boundingBox

  if kit.preset =>
    w = (bbox.max.x - bbox.min.x)
    h = (bbox.max.y - bbox.min.y)
    t = t - Math.floor(t)
    values = kit.step t, {width: w, height: h}, \affine
  if !values => return
  if kit.preset =>
    # v1
    [wx,wy,wz] = <[x y z]>
      .map -> bbox.max[it] - bbox.min[it]
      .map (d,i) -> ((opt.origin or values.transform-origin or [0, 0, 0])[i]) * d
  else
    # v0. TODO test if this works correctly
    [wx,wy,wz] = <[x y z]>
      .map -> bbox.max[it] - bbox.min[it]
      .map (d,i) -> ((opt.origin or values.transform-origin or [0.5, 0.5, 0.5])[i] - 0.5) * d / 2
  [nx,ny,nz] = <[x y z]>
    .map -> (bbox.max[it] + bbox.min[it]) * 0.5

  if (nx or ny or nz) and !node.repos =>
    m = new THREE.Matrix4!
    m.set 1,0,0,-nx,0,1,0,-ny,0,0,1,-nz,0,0,0,1
    if node.geometry.applyMatrix => node.geometry.applyMatrix m
    else node.geometry.applyMatrix4 m
    node.repos = if m.invert => m.invert! else m.getInverse(m)

  node.matrixAutoUpdate = false
  mat = values.transform or [1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1]
  [3,7,11].map -> mat[it] = mat[it] / 1 #TODO make to real ratio

  gmat = new THREE.Matrix4!makeTranslation wx, wy, wz
  node.matrix.set.apply( node.matrix, mat)
  node.matrix.multiply gmat
  node.matrix.premultiply(if gmat.invert => gmat.invert! else gmat.getInverse gmat)
  if node.repos => node.matrix.premultiply node.repos

  opacity = if values.opacity? => values.opacity else 1
  if node.material.uniforms and node.material.uniforms.alpha =>
    node.material.uniforms.alpha.value = opacity
  node.material.transparent = true
  node.material.opacity = opacity
