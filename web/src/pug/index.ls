view = new ldview root: document.body
mgr = new block.manager registry: ({url, name, path}) ->
  if url => return that
  "/block/#name/#{path or 'index.html'}"
mgr.init!
  .then -> mgr.from {name: \sample}, {root: view.get(\root)}
  .then (ret) -> console.log ret
