module.exports =
  pkg:
    dependencies: [
      {url: "/assets/lib/three/main/index.min.js"}
    ]
  init: ({ctx}) ->
    console.log ctx
    loader = new ctx.SVGLoader!
    ret = loader.parse """
    <?xml version="1.0"?>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="20" fill="black"/>
    </svg>
    """
    console.log ret
    ret.paths.map (p) ->
      shapes = SVGLoader.createShapes(p)
      console.log "shapes:", shapes
