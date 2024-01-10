# @plotdb/block

Frontend module manipulation library with following features:

 - HTML-based module definition
 - scoped JS / CSS for vanilla libraries with no bundling required.
 - reuseable, extendable components


## Usage

install `@plotdb/block` along with all necessary js libraries:

    npm install @plotdb/block @plotdb/rescope @plotdb/csscope @plotdb/semver proxise

and include them:

    <script src="path-to-semver/index.min.js"></script>
    <script src="path-to-proxise/index.min.js"></script>
    <script src="path-to-csscope/index.min.js"></script>
    <script src="path-to-rescope/index.min.js"></script>
    <script src="path-to-block/index.min.js"></script>


Load a sample block:

    mgr = new block.manager(...);
    mgr.from({name: 'block name', version: 'x.y.z', path: "index.html"})
      .then ({instance, interface}) -> ...

A sample block may look like this:

    <div>
      <script type="@plotdb/block">
        module.exports = {};
      </script>
      <h1>
        hello world!
      </h1>
    </div>


## Concept

Similar to `web component`, `@plotdb/block` modularizes frontend codes into components called `block`. A block is defined with a plain HTML file, containing following 3 parts ( all parts are optional ):

 - HTML
 - CSS
 - JavaScript

This is an example of a block file:

    <div>
      <h1> Hello World! </h1>
      <style> /* plain CSS ... */ </style>
      <script type="@plotdb/block"> /* plain javascript ... */ </script>
    </div>

Since it's just a valid HTML file, User can use different languages ( Sass, TypeScript, Pug, etc ) and transpile when necessary, once the result file is a plain HTML file.

Following is an example with Pug, LiveScript and Stylus with additional Pug filters ( `:stylus` and `:lsc` ) which can be transpiled directly with `srcbuild-pug` command provided in `@plotdb/srcbuild`:

    div
      h1 Hello World!
      style: :stylus
        h1 { color: #543; }
      script(type="@plotdb/block"): :lsc
        module.export = { init: -> console.log \loaded. };

Script can either be an object described as below, or a function returning that object. Styles will be automatically scoped and limited in this block.


### Block Identifier and File Accessing

To use a block, we need to know how to identify it. Like npm modules, blocks are defined with `name`, `version` and an optional `ns`, where:

 - `ns`: Namespace, such as `npm` or `github`. How this works depends on how registry is implemented.
 - `name`: Block name. Use the naming convention as npm. e.g., `@loadingio/spinner`
 - `version`: Block version in semver format, or labels such as `main`, `latest`.

Additionally, files in a block are identified with `path` and `type fields:

 - `path`: path of the block definition file inside the module `name@version`.
   - if omitted, inferred by `type` field, or decided by block manager.
 - `type`: type of the requested file. if omitted, inferred from `path`, or decided by block manager.

This block identifier can either be an object or a string, such as this object:

    {ns: "local", name: "@plotdb/konfig", version: "1.2.3", path: "index.html"}

with a identical string representation:

    local:@plotdb/konfig@1.2.3:index.html

`@plotdb/block` provides two methods to convert between string and object identifier:

  - `block.id(obj)`: return the corresponding string representation of an identifier object `obj`.
    - see below for more options.
  - `block.id2obj(id)`: return the corresponding object represetnation of an string identifier `id`.


To access a block file identified by a block identifier, we can use `block.manager`:

    manager = new block.manager({
      /* indicating where we can find the file */
      registry: ({ns,name,version,path}) -> "/block/#name/#version/#path/index.html"
    });
    mananger.init!
      .then -> manager.get({name: "my-block", version: "0.1.0"})
      .then (blockClass) -> ...


### Manager, Class and Instance of Block

The resolved object from `manager.get` is a instance of `block.class`, which represents the definition of the given block file. To use it, we have to create an instance of `block.instance` from it, such as:

    manager.get( ... )
      .then (cls) -> cls.create();
      .then (instace) -> ...

A block instance can then be injected into web page:

    instance.attach({root: document.body})
      .then -> ...

Below is a simplified flow of relationship between the above concepts:

 - block file (in HTML)
 - `block.manager`: load, convert and cache block files.
 - `block.class`: Object representation of a block file.
 - `block.instance`: a JS Instance created from `block.class`


## Core modules

As described above, `@plotdb/block` contains following basic elements:

 - `block.manager` - to access, register, get and cache `block.class`
 - `block.class` - representing the definition of a block, and is used to generate `block.instance`.
 - `block.instance` - object for manipulating state / DOM of a given block.

Additionally, `block` itself provides following functions:

 - `block.id(obj)` - return an ID corresponding to input object with following possible fields:
   - `id`: if `id` exists, it will be returned directly.
   - `url`: if `id` is not found abut `url` exists, `url` will be returned instead.
   - `ns`, `name`, `version`, `path`: if none of above is found, use these to generate an ID.
     - `name` is required in this case.
     - `version` default to `main`, `path` default to `index.html` if not provided.
 - `block.id2obj(id)` - reversely convert id into block with `ns`, `name`, `version` and `path` fields.
 - `block.i18n`
   - `use(obj)`: use `obj` to replace `module`.
   - `language`: current used language.
   - `changeLanguage` and `addResourceBundle`: see below in `module`.
     - TODO we may want to remove these, and rely on `module` directly.
   - `module`: default i18n module object, which should support following APIs:
     - `t(..)`: return translated text based on given input.
     - `on(name, cb)`: listen to event `name` with listener `cb`. expected events:
       - `languageChanged`: fired when language changes.
     - `off(name, cb)`: remove listener `cb` from event `name`.
     - `changeLangauge(ns)`: set default language to `ns`.
     - `addResourceBundle(...)`: add resource bundle, with following parameters ( in order ):
       - `lng`: ns for this resource to add.
       - `id`: id if any. default undefined.
       - `resource`: resource to add
       - `deep`: default true.
       - `overwrite`: default true. whether overwrite existing resource or not.

 - `block.env(win)` - set current environment to `win`.


### block.manager

Since a block is just a plain HTML, it can be stored anywhere once a string can be stored. Common places to store a block may be:

 - local in web page: block HTMLs are served directly along the web page.
 - remote in web server: block HTMLs are stored as files and can be accessed via Ajax through specific URL.

either way we have to provide a way to load, register, cache these blocks - that is, to manage them, which can be done with the help of `block.manager`.

#### constructor options

Create a `block.manager` instance with

    mgr = new block.manager(opt);

where the constructor options are as below:

 - `registry`: either function or string, tell `block.manager` where to find remote blocks.
   - `function({ns,url,name,version,path,type})`: return URL for given bid of a block.
     - should respect url or use/transofmr it if provided.
   - `string`: the registry base url. block.manager will look up blocks under this url with this rule:
     - `/assets/block/<name>/<version>/<path>`
   - `object`:
     - either an object with `url` and `fetch` (optional) field, or `lib` and `block` field.
       - `url` and `fetch`:
         - `url({ns,url,name, ...})` will be used to transform given bid to an URL.
         - `fetch({ns,url,...}))` will be used to fetch `url` or bid ir provided.
           - if `url()` is provided, bid will be transformed first.
       - `lib` and `block`:
         - registry set here will be used for both block and libraries. To distinquish them, use:

           registry: {lib: (-> ...), block: (-> ...)}

         - `registry.lib` will be used for querying block if `registry.block` is omitted.

 - `rescope`: optional. should be a `@plotdb/rescope` object if provided.
   - will replace internal rescope object if provided.
 - `csscope`: optional. should be a `@plotdb/csscope` object if provied.
   - will replace internal csscope object if provided.
 - `chain`: optional. fallback manager for chaining block lookup if requested block is not found in current manager.


#### APIs

A `block.manager` instance provides following methods:

 - `registry(v)`: update `registry` dynamically.
   - `v`: can be a function, string or an object, similar to the option in constructor.
 - `set({name,version,path,block}): register a block with `name`, `version` and `path`.
   - `block`: a `block-class` object, explained below.
   - `set` also accepts Array of {name,version,block} object for batching `set`.
 - `getUrl({ns,name,version,path})`: get url for a block corresponding to the given block identifier.
 - `get({ns,name,version,path,force})`: return a `block-class` object corresponding to the given block identifier.
   - `force`: by default, `block.manager` caches result. set `force` to true to force `block.manager` re-fetch data.
   - `get` also accept an array of `{ns,name,version,path,force}` tuples for batching `get`.
      - in this case, `get` returns an array of `block.class`.
 - `from(block-id-obj, attach-opt)`: shorthand for manager.get + class.create + instance.attach + instace.interface
   - return a Promise which resolves to an object `{interface, instance}`:
     - `instance`: created instance
     - `interface`: created interface
   - `block-id-obj`: block identifier object. see `get()` and above description.
   - `attach-opt`: attach options. see `block.instance`'s `attach()` function.
 - `chain(mgr)`: set a fallback manager for chaining lookup of requested block.
 - `rescope`: rescope object, either global one or customized one.
 - `csscope`: csscope object, either global one or customized one.
 - `id`: shortcut for `block.id`
 - `id2obj`: shortcut for `block.id2obj`


### block.class

`block.class` is for generating block instances. It parses the code of a block based on the block specification and convert them into clonable code, preparing for generating `block.instance` objects on demand.

We usually don't have to create a `block.class` instance manually since `block.manager` does this for us, however to manually create one:

    cls = new block.class( ... );


#### constructor options

 - `manager`: default block manager for this class. mandatory
 - `name`: block name. mandatory.
 - `version`: block version. mandatory.
 - `path`: block path. optional. `index.html` if omitted.
 - `code`: use to create DOM / style / internal object. it can be one of following:
   - a function. should return either html code or object; returned value will be parsed by corresponding rules.
   - a string, providing HTML code. structure of HTML should follow the definition of a block.
   - an object, containing `dom`, `style` and `script` members.
     - `dom`: HTML code string, or a function returning HTML code string.
     - `style`: should be string for CSS.
     - `script`: function, object or string of code, for interface of the internal object by:
       - function: return the interface.
       - object: as the interface.
       - string: evaled to the interface, or a function which return the interface.
       - for detail of the "interface", see "interface of the internal object" section below.
 - `root`: optional. root of a DOM tree representing the block HTML code. Overwrite `code`.

#### APIs

 - `create(opt)`: create a `block.instance` based on this object. options:
   - `data`: instance data. defined by user and passed directly to block instance javascript.
   - `root` and `before`: parameters passed to `attach`.
     - instance will and only will be attached automatically if `root` is provided.
 - `context()`: get library context corresponding to this block.
 - `i18n(text)`: return translated text based on the current context.

Additional, here are the private members:

 - `name`: name of this block.
 - `version`: version of this block.
 - `path`: path of this block.
 - `manager`: block manager to use when resolving recursive blocks.
 - `dom`: block DOM tree.
 - `scope`: unique id randomly generated each time when `block.class` is created mainly for scoping purpose.
 - `opt`: raw constructor options.
 - `code`: source code for constructing this block.
 - `script`: source code for this block's script definition.
 - `style`: source code for this block's style definition.
 - `link`: reserved for future use.
 - `styleNode`: node storing parsed / scoped style of this block.
 - `interface`: javascript interface for this block.
   - This will also be used as prototype of the instance object, created by `factory` method below.
 - `factory`: constructor for generating the js context for block script. See below.
 - `id`: unique name for this block.
   - "name@version/path" or randomly generated one if `name` and `version` is not available.
 - `\_ctx`: js context object from `rescope`.
 - `csscopes`
   - `local`: scope list of css for local scope.
   - `global`: scope list of css scope name for global scope.
 - `extend`: extended block, as a `block.class` object.
 - `extendDom`: to extend dom or not.
 - `extends`: array of extended blocks. `extends[0]` is the direct parent class.

To create an instance from a `block.class`:

    instance = aBlockClass.create();

While `block.class` is used to create instance of `block.instance`, JavaScript of a block will be executed when a block class is loaded, in order to prepare for upcoming instance creation. No instance context at this time since we only have the `block.class` object.

To access `block.instance` context, block JavaScript should be implemented based on the factory interface described in the following section. This will be discussed in following section `JS context of block instance`.


### block.instance

`block.instance` is an instance of block created from a `block.class`. It's responsible for maintaining block's state and DOM status.


#### constructor options

 - `block`: `block.class` for this instance.
 - `name`, `ns`, `version`, `path`: as defined in the object identifier.
 - `data`: custom data for this instance. usage and spec of this data is defined by the block file.


#### APIs

 - `attach({root, before, data, autoTransform})`: attach DOM and initialize this instance.
   - block instance is attahed to `root` before `before` if `before` is provided.
   - if a factory interface is exported by block JS, it will be used to create an internal context and be inited.
     - see `Internal JS context of a block` below.
   - return a Promise which resolves with a list of internal object based on inheriance hierarchy after inited.
   - when root is omitted, attach block in headless mode ( for pure script )
   - attach DOM by `appendChild` when `before` is omitted, and by `insertBefore` otherwise.
   - `autoTransform`: default null. set to `i18n` to enable auto i18n transformation based on i18n module event.
     - note: will be by default `i18n` in future release. explicitly set to null if that's what you want.
 - `detach()`: detach DOM. return Promise.
 - `i18n(text)`: return translated text based on the current context.
 - `path(p)`: return url for the given path `p`
 - `dom()`: return DOM corresponding to this block. Create a new one if not yet created.
 - `run({node,type})`: execute `type` API provided by `block` implementation with `node` as root.
 - `transform(cfg)`: (re)transform DOM based on the given `cfg` option, which is:
   - string: name of the transform (e.g., `i18n`) to apply.
 - `update(ops)`: (TBD) update `datadom` based on provided ops ( array of operational transformation ).

Additionally, following are the private members:

 - `obj` - list of JS internal context objects created from the exported factory interface.
   - see below for the detail of the internal context object.
   - it's a list of all objects from the inheritant chain. base block comes first.
   - each item in this list contains block's data and interface.


### Internal JS Context of a block

While `block.instance` represents the block instance itself, block JavaScript is run in a different context to prevent intervention. The interface of this context is as below:

 - `\_class`: the object of `block.class` for this block, filled automatically when creating this context.
 - `\_instance`: the object of `block.instance` for this block, filled automatically when creating this context.
   - Note: currently this is not available in base blocks. use it only for dev / debug purpose.
 - `pkg`: block information
 - `init(opt)`: initialization function of this context.
 - `destroy(opt)`: destroy function of this context.
 - `interface()`: JS interface for block users to access.
 - `parent`: JS Context of parent block, if any.
   - use `parent.interface()` to reach parent interface if needed.


Except `\_class` and `\_instance`, functions in above interface should be implemented by block JavaScript and exported via `module.exports`:

    module.exports = {
      init: (opt) ->
      interface: ->
    };

This interface is used in the factory constructor of `block.class` to create the internal JS Context:

    context = new aBlockClass.factory(instance);

which is the object stored in `obj` member of `block.instance` described in the `block.instance` section.


The detail of the fields of interface is as below:

 - `pkg`: block information, described below. optional.
 - `init(opt)`: initializing a block. optional.
   - return a Promise for asynchronous initialization.
   - `opt` is an object with following fields:
     - `root`: root element
     - `ctx`: dependencies in an object.
     - `context`: deprecated, use `ctx` instead.
     - `parent`: object for the direct base block.
     - `pubsub`: for communication between block in extend chain. `pubsub` is an object with following methods:
        - `on(event, cb(parmas))`: handle event with `cb` callback, params from `fire`.
          - return value will be passed and resolved to the returned promise of `fire`.
        - `fire(event, params): fire `event`. return promise.
     - `data`: data passing to `create`. optional and up to user.
     - `path(p)`: path transformer to convert `p` to a local string based on the identifier of this block.
     - `t(text)`: translation function based on local, base class and global i18n information. shorthand of `i18n.t`.
     - `i18n`: i18n related helpers including:
       - getLanguage()`: return current used language.
       - `t(text)`: as described above.
       - `addResourceBundles(res)`: dynamically adding i18n resources. sample `res`:

          { "zh-TW": {"string", "文字"}, "en-US": {"string": "string"} }

 - `destroy({root, context})`: destroying a block. optional.
 - `interface`: for accessing custom object. optional.
    - either a function returning interface object, or the interface object itself.
    - child block always overwrite parents' interface in an inheritance chain, if available
 - `mod`: reserved for block javascript. future implement update of `@plotdb/block` should not use it.
 - `exports(global)`: (TBD) for sharing block as a JS library. return objects to export. optional
   - user can use a block as a library by adding it in the `dependencies` config, such as:
     - [{name: "some-block", version: "some-vesion", path: "path-to-file"}, ...]

All members are optional thus the minimal definition will be an empty object or even `undefined`:

    {}

Use `module.exports` to explicitly export the desired object:

    module.exports = { .... };


#### Block Information

The `pkg` field of a block interface is defined as:

 - `ns`, `name`, `version`, `path`: from this block's identifier. optional
 - `author`: author name. optional
 - `license`: License. optional.
 - `description`: description of this block. optional
 - `syncInit`: default false.
   - if true, each `init` in extend chain runs only after the returned Promise of the previous method resolves.
   - otherwise, order of init methods are not guaranteed.
 - `extend`: optional. block identifier of block to extend.
   - `ns`, `name`, `version`, `path`: from parent block's identifier. optional
   - `dom`: default true. can be any of following:
     - `true`: use parent's DOM if set true.
     - `false`: completely ignore extended DOM in any ancestor.
     - `"overwrite"`: overwrite parent DOM but extend DOM from grantparent, if any.
   - `style`: default true. can be any of following:
     - `true`: use parent's style if set true.
     - `false`: completely ignore extended style in any ancestor.
     - `"overwrite"`: overwrite parent style but extend style from grantparent, if any.
   - use `plug` ( for html ), `parent` and `pubsub` ( js ) to work with extended block.
     - for more information about `plug`, see `HTML Plugs` section below.
 - `dependencies`: dependencies of this block.
   - list or modules, in case of mutual dependencies:
     ["some-url", {url: "some-url", async: false, dev: true, global: true, type: "css, js or block"}]
   - for now, `block` type dependencies are used for hint of bundling.
   - options in object notation:
     - `async: true to load this module asynchronously. true by default.
     - `global: for CSS. true if the CSS should also work in global scope. ( under body ). default false.
     - `type`: default `js`. either `css` or `js`.
       - (TBD) support `block` type for preloading block / export block library.
     - `url`: path of required module.
       - generated from name + version + path if omitted. ( TODO )
     - `name`: name of required module ( TODO )
     - `version`: version of required module ( TODO )
     - `mode`: use to control when this module should be loaded. ( TODO )
   - dependencies will be additive in inheritance chain.
 - `i18n`: `i18next` style i18n resource. e.g.,

    {
      "zh-TW": { "name": "名字" }
    }


#### Block Events

(TBD) Following are possible events:

 - before insert
 - init
 - after insert
 - before destroy
 - destroy
 - after destroy
 - update


## i18n configuration

use `block.i18n.use(...)` to switch the core i18n module, which should at least implement following API:

 - `addResourceBundle(lng, ns, resource, deep, overwrite)`
 - `changeLanguage(lng)`
 - `t(text)`

These API are intentionally aligned with `i18next`. Check [i18next documentation](https://www.i18next.com/overview/api) for more information about these API.


A sample setup with `i18next` and `@plotdb/block`:

    i18next.init({supportedLng: ["en", "zh-TW"], fallbackLng: "en"})
      .then(function() { i18next.changeLanguage("zh-TW"); })
      .then(function() { block.i18n.use(i18next); })


## HTML Plugs

Base block may provide slots for child block to plug. use `<plug>` tag with `name` attribute:

    <plug name="layout"/>


To plug elements In child block to given slot, use `plug` attribute in child block:

    <div plug="layout"> ... </div>


## Packed Block with Bundled Packages

To ship bundled packages along with a block, simply append the corresponding `<template>` tag at the end of the block:

    <div> ... </div><template rel="block"> ... </template>

Actually, any `template` tag in this block with `rel` attribute set to `block` will be considered a bundle tag for `@plotdb/block`.


## Why block

At first we just want to make web editing easier across expertise, and *block design* ( see [future of web design comes in blocks](https://thecode.co/block-web-design/), [Editor.js](https://editorjs.io/) ) seems to be a trend in web design. It's similar to web components but we will have to do more for making visually editing possible.

While what `@plotdb/block` ( web component & management ) provides is already available in other popular frameworks, `@plotdb/block` is actually designed with following criteria thus makes it different with others:

 * version management
   - blocks are managed with proper versioning.
   - blocks should work even using the same lib with different versions without `import`.
     - popular frameworks use `import` which will have to bundle js within.
     - even if bundle is not necessary, many libs don't support `import` and will need wrapper.
 * framework agnostic
   - prevent from abducted by specific framework
   - while we seem to invent `yet another framework`:
     - `@plotdb/block` is only for components. no state management, no reactive.
     - thus, any js frameworks are expected to work well with `@plotdb/block`.
 * As Simple as Possible
   - making a component is extremely easy. ( KISS principle )
     - there is no new syntax to learn in `@plotdb/block`, only interface.
 * Collaborative
   - `@plotdb/block` is built along with `@plotdb/datadom` for DOM serialization.
     - this makes it by default suitable for serialization, thus also for collaboration
     - editing can be described by concepts such as operational transformation
 * DOM manipulating with UI ( cross expertise editing )
   - this is covered in `@plotdb/editable`.


## Resources

 - Related modules
   - editable: cross-expertise editor interface based on a set of predefined attributes over plain HTML.
   - datadom: DOM in JSON, with extension.
   - registry: block module storage and delivery.


## License

MIT
