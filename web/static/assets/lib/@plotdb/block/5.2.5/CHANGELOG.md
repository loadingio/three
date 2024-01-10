# Change Logs

## v5.2.5

 - support `syncInit` option in `pkg` which enable synchronous `init` call in extend chain.


## v5.2.4

 - remove `index.html` from bundle key and proxy hash key to prevent potential key duplication
 - when bundling, check if the given path is a directory and add `index.html` to try again if it is.
 - support debundling of multiple bundles parallelly.


## v5.2.3

 - fix bug: incorrect result from internal i18n translator with empty string


## v5.2.2

 - fix bug: bundler incorrect ignores `http` protocol


## v5.2.1

 - fix bug: default i18n translator may access fields null objects accidentally


## v5.2.0

 - support debundling from packed block with bundle packages.


## v5.1.0

 - support `autoTransform` in `instance.attach`. expected to be default `i18n` in future upgrade.
 - add event handling mechanism in `block.i18n.module` with an expected event `languageChanged`.


## v5.0.8

 - update `@plotdb/rescope` dependency version to `5.0.6`


## v5.0.7

 - upgrade peerDependencies and dependencies


## v5.0.6

 - fix bug: `block.i18n` should keep the original text `t` to return if translation is not found.


## v5.0.5

 - fix bug: fallback i18n transformer doesn't support keySeparator


## v5.0.4

 - init parent field of internal context object right at initialization.
 - fix bug: i18n api should also accept the interpolation object.


## v5.0.3

 - fix bug: will try using `fs` once defined even in browser.


## v5.0.2

 - fix bug: `_ref` pollutes the input bid.
 - upgrade peer dependencies rescope and csscope


## v5.0.1

 - upgrade peer dependencies rescope and csscope


## v5.0.0

 - fix bug: `id()` should generate path depending on the type in bid.
 - fix bug: `document` should be `doc` in debundler
 - support bundling of `block` type files.
 - `registry` should not return Promise now, and should consider `url` parameter now.
 - `registry.fetch` accepts and should consider `url` from `registry.url` now.
 - remove undocumented `fetch` option.
 - fix bug: 2 Promise.rejects are wrapped when fetch fails, and thus one of them is always uncaught
 - add `rel="block"` in the bundled template


## v4.8.0

 - fix bug: `bundle` should not modify input list
 - breaking change of dev feature: return block dependencies and code in `bundle`
 - fix bug: remove `code` from dummy depcss-cache to eliminate redundant bundling 


## v4.7.10

 - fix bug: debundle nothing injects text `undefined` in document.
 - by default don't display the debundle container
 - upgrade package to fix vulnerability in dependency


## v4.7.9

 - fix bug: paths in block css are not transformed correctly when debundling


## v4.7.8

 - fix bug: debundle of nothing should not fail


## v4.7.7

 - properly scope script


## v4.7.6

 - fix bug: css path transformation should not work on data url
 - replace unnecessary `parse-name-string` with `id2obj`
 - fix bug: ns omitted in block id inheritance
 - use error generator function to generate errors
 - restructure code for node / browser and bundler
 - upgrade dependencies


## v4.7.5

 - fix bug: incorrect loop index when getting interface from instance
 - support interface retrieval recursively
 - provide `parent` directly in internal js context object
 - provide `_instance` object only if the corresponding class matches.
 - remove `update` function since it's in TBD state


## v4.7.4

 - fix bug: inferred block feature should not work on identifier with only `url` field.


## v4.7.3

 - rewrite buggy circular extend detection code


## v4.7.2

 - throw exception when circular extend detected
 - remove useless code


## v4.7.1

 - make `bundle.js` a clone of `index.js` with `bundle` function


## v4.7.0

 - upgrade modules
 - separate bundle method into standalone file
 - support inferred block name / version


## v4.6.2

 - also consider `ns` in block.id


## v4.6.1

 - audit fix for vulnerabilities fixing
 - bug fix: fix typo from `console.log warn` to `console.warn`


## v4.6.0

 - pass `path` into instance.
 - support `defer` in `attach`
 - support `language` in `block.i18n`
 - support `getLanguage` in i18n object passed to block js


## v4.5.4

 - bug fix: `id-to-obj` should be `id2obj` in debundle function.


## v4.5.3

 - bug fix: transformation cross block boundary leads unexpected i18n result.


## v4.5.2

 - bug fix: i18n transformation doesn't propagate correctly through base blocks.


## v4.5.1

 - fix bug: `from` failed due to incorrect code parsing.


## v4.5.0

 - add `manager.from` support, shorthand  for block instance generation
 - extend `block.create` function with additional root option for directly attaching


## v4.4.0

 - downgrade `node-fetch` back to `v2.6.7` to make it work in nodejs
 - add `id2obj` function
 - bug fix: `id2obj` parsing may be wrong due to `ns`
 - add `id2obj` test


## v4.3.0

 - provide a method for generating id based on input object.
 - add `ns` ( namespace ) support in block definition. `ns` defaults to ``


## v4.2.0

 - bug fix: remove accidentally added log
 - support path translation in HTML with `path` and `path-*` attribute.
 - support path translation in JS with `path` function.
 - support path translation in style.


## v4.1.2

 - bug fix: translation of non-string value may fail.
   - convert value for translation to string to error in prevent i18n module
 - support dom interpolation from container content


## v4.1.1

 - fix bug: i18n doesn't work due to colon in id. use an alternative `_id_t` without colon for i18n scope.


## v4.1.0

 - default empty in version when building id
 - support semantic versioning with ranges.
 - support custom registry that return content + version directly.
 - use minimized dist file as main / browser default file
 - remove livescript header in generated js
 - upgrade modules
 - patch test code to make it work with upgraded modules
 - remove assets files from git
 - release with compact directory structure



## v4.0.1

 - upgrade `@plotdb/csscope` and `@plotdb/rescope` dependencies
 - add `manager` in payload for block script to use for recursive block loading


## v4.0.0

 - a `module` object is provided to block js, which can be used to export block defition.
 - dedup blocks in bundler
 - fix typo in id generation


## v3.0.3

 - properly wrap js code in bundler to prevent from syntax error
 - still provide cache information in csscope so it won't still fetch CSS from registry
 - upgrade rescope and csscope


## v3.0.2

 - add a dummy `transform` function for (re)transform DOM
 - support re-translate for i18n transformation
 - expose `changeLanguage` in block.i18n for interface abstraction


## v3.0.1

 - fix bug: script in inline bundle doesn't run, because the passed object may be function.
   - fix by running it if it's a function.
 - support rescope.dual-context for multi-phase lib loading bug fixing


## v3.0.0

 - rename `block.js` to `index.js` - remove `block.js` and `block.min.js`


## v2.1.2

 - upgrade proxise for nodejs support


## v2.1.1

 - fix typo "console.log warn" to "console.warn"
 - minimize js file further with `-c -m` option
 - trim block code in case of unwanted text children
 - support constructing block.class based on DOM Node
 - support DOM Node as constructor parameter
 - use base64-ed id as scope name
 - only scope CSS if `@style` is available
 - support nodejs context
 - remove ldquery dependency
 - `main` as default version since latest / main(version in use) are different concept
 - support rescope v3 and v4
 - remove ldquery dependency


## v2.1.0

 - dont use `t-attr` for attribute i18n since it only works for single attribute. use t-xxx instead.
 - use `textContent` for i18n if attribute value for `t` is not available.
 - support recursive i18n transformation


## v2.0.7

 - while giving warning, still try to make multi-root DOM works.
 - give warning when block DOM root is a non-element.


## v2.0.6

 - remove `dompurify` dependency.
 - adopt new csscope spec


## v2.0.5

 - fix bug: `block` overwritten by local variable in `registry`


## v2.0.4

 - fix bug: passing function to block.manager's `registry` doesn't work.


## v2.0.3

 - defer block.class initialization until create since we may not use an added block eventually.


## v2.0.2

 - add `before` parameter in `attach` for insertBefore style attachment.
 - remove useless `index.css` since users can design their own style
 - fix bug: peer dependencies version incorrect


## v2.0.1

 - fix bug: setting registry uses incorrect parameter for updating `_reg`
 - warn when block.class is constructed without `manager`.


## v2.0.0

 - simplify config by replacing `registry` with `registry.block` and `moduleRegistry` with `registry.lib`.
   - if only `registry.lib` is provided, it will be used also for `registry.block`.
 - support `type` in registry by passing type as `block` when requesting block modules.
 - accept additional param `type` in registry function for distinguishing `js`, `css`, `block` and others.
 - rename `setRegistry` to `registry`.
 - rename internal variable `reg` to `_reg`.
 - rename `set-fallback` to `chain`
 - rename internal variable `fallback` to `_chain`.


## v1.7.4

 - fix bug: skip `undefined` when translating 


## v1.7.3

 - fix bug: csscope in block.manager should be `csscope.manager`


## v1.7.2

 - fix dependency loading: detect resource type automatically before resource loading.


## v1.7.1

 - fix csscope upgrade mistake in package.json


## v1.7.0

 - support module style( `{name,version,path}` ) style url
 - support customizing `registry` in rescope and csscope
 - rename `block.class`'s `csscope` to `csscopes` to better distinguish it from `block.manager`s `csscope`.


## v1.6.1

 - fix rescope upgrade mistake in package.json


## v1.6.0

 - upgrade rescope to `2.0.1`


## v1.5.3

 - add `i18n.addResourceBundles` in block.instance for dynamically adding i18n resources.


## v1.5.2

 - show block name/version/path when init fail


## v1.5.1

 - bug fix: add missing `e` in exception handler in manager get function
 - bug fix: in manager, ensure object exist before storing cache data in it


## v1.5.0

 - add concept of `path` in block definition
 - add concept of `fallback` and `fetch` in block.mananger
 - use name and version from constructing instead of from module pkg metadata, so the name/version/path data is consistnent and we don't have to define 


## v1.4.9

 - fix bug: rid.hash is not defined before using.
 - fix bug: global CSS rules from base class are not applied


## v1.4.8

 - fix bug: should by-pass scope which style is not extended


## v1.4.7

 - remove useless `extend` option in `block.class` constructor.
 - add `style` in `extend` similar to `dom` but applied on style.
 - fix bug: block.class.init should also wait for extended class initialization (recursively)


## v1.4.6

 - add `id` for block.class in replace of manual composition of name and version.
 - tweak code flow and remove unnecessary check.
 - add `overwrite` value in {pkg: {extend: {dom}}} for replacing current `false` behavior.
 - add DOM transformer for i18n. transformer design is tentative and will probably be changed in the future.


## v1.4.5

 - fix bug: block should be scoped in base block's scope too.


## v1.4.4

 - add i18n support


## v1.4.3

 - fix bug: incorrect `parent` parameter in `init` function.


## v1.4.2

 - upgrade rescope version to solve scoped / global conflict issue.


## v1.4.1

 - add `block.init` for initialization ( such as rescope.init ) when needed, and init block in block.class since block.class can be used independently to block.manager.


## v1.4.0

 - support headless block.
 - support dom overwrite mode ( don't extend dom ) in block extension.
 - fix bug: interface default `{}` if not provided. 
 - add simple headless block and test case.


## v1.3.0 

 - support global css library
 - upgrade modules


## v1.2.1

 - proxisify block.class `get` to prevent multiple get and multiple scope id for the same block.


## v1.2.0

 - support css library
 - fix bug: create block class with data will fail. 

## v1.1.1

 - get context based on `_ctx` instead of lib urls so base class context can propagate.


## v1.1.0

 - make child block alters and inherits base block's dependencies.


## v1.0.0

 - use `lderror` instead of `ldError`
 - upgrade modules


## v0.0.11

 - access optional data in instance create and attach method. data is also passed to factory methods.


## v0.0.10

 - interface is now get from descendant instead of ancestor, to prevent confusion.


## v0.0.9

 - upgrade proxise and template for bug fixing and vulnerabilites resolving


## v0.0.8

 - return promise in pubsub `fire` function.
 - return promise in block.instance `run` function.
 - separate `init` from the constructor of `factory`.


## v0.0.7

 - support function defined block script.
 - support both function and object as the interface member of block script.


## v0.0.6

 - make `extend` work when defined in `pkg` field.


## v0.0.5

 - update peerDependency version of proxise


## v0.0.4

 - remove postinstall since it's for development.
