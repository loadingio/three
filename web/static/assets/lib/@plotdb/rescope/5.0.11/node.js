var semver, fetch, fs;
semver = typeof window != 'undefined' && window !== null
  ? window.semver
  : (typeof module != 'undefined' && module !== null) && (typeof require != 'undefined' && require !== null) ? require("@plotdb/semver") : null;
fetch = typeof window != 'undefined' && window !== null
  ? window.fetch
  : (typeof module != 'undefined' && module !== null) && (typeof require != 'undefined' && require !== null) ? require("node-fetch") : null;
fs = require('fs');var win, doc, _fetch, proxin, ref$, rsp;
_fetch = function(u, c){
  if (rsp.__node && (typeof fs != 'undefined' && fs !== null) && !/^https?:/.exec(u)) {
    return new Promise(function(res, rej){
      return fs.readFile(u, function(e, b){
        if (e) {
          return rej(e);
        } else {
          return res(b.toString());
        }
      });
    });
  }
  return fetch(u, c).then(function(ret){
    var ref$;
    if (ret && ret.ok) {
      return ret.text();
    }
    if (!ret) {
      return Promise.reject((ref$ = new Error("404"), ref$.name = 'lderror', ref$.id = 404, ref$));
    }
    return ret.clone().text().then(function(t){
      var i, e, ref$, j, err;
      i = ret.status || 404;
      e = (ref$ = new Error(i + " " + t), ref$.name = 'lderror', ref$.id = i, ref$.message = t, ref$);
      try {
        if ((j = JSON.parse(t)) && j.name === 'lderror') {
          import$(e, j).json = j;
        }
      } catch (e$) {
        err = e$;
      }
      return Promise.reject(e);
    });
  });
};
proxin = function(o){
  var ifr, ref$, attr, func, this$ = this;
  o == null && (o = {});
  this.lc = o.context || {};
  this.id = Math.random().toString(36).substring(2);
  if (o.iframe) {
    this.iframe = o.iframe;
  } else {
    this.iframe = ifr = doc.createElement('iframe');
    ref$ = ifr.style;
    ref$.position = 'absolute';
    ref$.top = 0;
    ref$.left = 0;
    ref$.width = 0;
    ref$.height = 0;
    ref$.pointerEvents = 'none';
    ref$.opacity = 0;
    ifr.setAttribute('title', "rescope script loader");
    ifr.setAttribute('name', "pdb-proxin-" + this.id);
    ifr.setAttribute('sandbox', 'allow-same-origin allow-scripts');
    doc.body.appendChild(ifr);
  }
  attr = Object.fromEntries(Reflect.ownKeys(this.iframe.contentWindow).map(function(it){
    return [it, true];
  }));
  func = {};
  this._proxy = new Proxy(o.target || win, {
    get: function(t, k, o){
      if (this$.lc[k] != null) {
        return this$.lc[k];
      }
      if (func[k] != null) {
        return func[k];
      }
      if (typeof t[k] === 'function') {
        return func[k] = t[k].bind(t);
      }
      if (attr[k] == null) {
        return undefined;
      }
      return t[k];
    },
    set: function(t, k, v){
      if (attr[k]) {
        t[k] = v;
        return true;
      }
      this$.lc[k] = v;
      return true;
    },
    defineProperty: function(t, k, d){
      Object.defineProperty(this$.lc, k, d);
      return this$._proxy;
    }
  });
  return this;
};
proxin.prototype = (ref$ = Object.create(Object.prototype), ref$.proxy = function(){
  return this._proxy;
}, ref$.ctx = function(){
  return this.lc;
}, ref$);
rsp = function(o){
  var ifr, ref$;
  o == null && (o = {});
  this.id = Math.random().toString(36).substring(2);
  this.iframe = ifr = doc.createElement('iframe');
  this._cache = {};
  this.proxy = new proxin();
  this.registry(o.registry || "/assets/lib/");
  ref$ = ifr.style;
  ref$.position = 'absolute';
  ref$.top = 0;
  ref$.left = 0;
  ref$.width = 0;
  ref$.height = 0;
  ref$.pointerEvents = 'none';
  ref$.opacity = 0;
  ifr.setAttribute('title', "rescope script loader");
  ifr.setAttribute('name', "pdb-rescope-" + this.id);
  ifr.setAttribute('sandbox', 'allow-same-origin allow-scripts');
  doc.body.appendChild(ifr);
  ifr.contentWindow.document.body.innerHTML = (o.preloads || []).map(function(it){
    return "<script type=\"text/javascript\" src=\"" + it + "\"></script>";
  }).join('');
  return this;
};
rsp.env = function(it){
  var ref$;
  return ref$ = [it, it.document], win = ref$[0], doc = ref$[1], ref$;
};
rsp.prop = {
  legacy: {
    webkitStorageInfo: true
  }
};
rsp.id = function(o){
  var path;
  path = o.path || (o.type === 'js'
    ? 'index.min.js'
    : o.type === 'css' ? 'index.min.css' : 'index.html');
  return o.id || o.url || (o.ns ? o.ns + ":" : '') + "" + o.name + "@" + (o.version || 'main') + ":" + path;
};
rsp._cache = {};
rsp._ver = {
  map: {},
  list: {}
};
rsp.cache = function(o){
  var that, k, nv, p, s, ret, n, v, ref$, i$, to$, i, ver;
  if (typeof o === 'string') {
    o = {
      url: o
    };
  }
  if (!o.id) {
    o.id = rsp.id(o);
  }
  if (that = this._cache[o.id]) {
    return that;
  }
  if (o.id && !o.name) {
    k = o.id.split(':');
    if (k.length <= 2) {
      nv = k[0], p = k[1], s = k[2];
    } else {
      s = k[0], nv = k[1], p = k[2];
    }
    if (!(ret = /^(@?[^@]+)(?:@([^:]+))?$/.exec(nv))) {
      ret = ['', o.id, ''];
    }
    n = ret[1];
    v = ret[2];
  } else {
    ref$ = [o.ns, o.name, o.version || '', o.path || ''], s = ref$[0], n = ref$[1], v = ref$[2], p = ref$[3];
  }
  if (/^[0-9.]+$/.exec(v)) {
    if (that = ((ref$ = this._ver.map)[n] || (ref$[n] = {}))[v]) {
      v = that;
    }
    if (that = this._cache[rsp.id({
      ns: s,
      name: n,
      version: v,
      path: p
    })]) {
      return that;
    }
    for (i$ = 0, to$ = ((ref$ = this._ver.list)[n] || (ref$[n] = [])).length; i$ < to$; ++i$) {
      i = i$;
      ver = this._ver.list[n][i];
      if (!semver.fit(ver, v)) {
        continue;
      }
      this._ver.map[n][v] = ver;
      o.id = rsp.id({
        ns: s,
        name: n,
        version: ver,
        path: p
      });
      if (that = this._cache[o.id]) {
        return that;
      }
    }
  }
  if (!in$(v, (ref$ = this._ver.list)[n] || (ref$[n] = []))) {
    this._ver.list[n].push(v);
  }
  return this._cache[o.id] = o;
};
rsp.prototype = (ref$ = Object.create(Object.prototype), ref$.peekScope = function(){
  return false;
}, ref$.init = function(){
  return Promise.resolve();
}, ref$._ref = function(o){
  var r, ref$;
  if (typeof o === 'string') {
    o = {
      url: o
    };
  }
  if (typeof (r = this._reg.url || this._reg) === 'function') {
    o = (ref$ = import$({}, o), ref$.url = r(o), ref$);
  }
  return this._reg.fetch
    ? this._reg.fetch(o)
    : o.url;
}, ref$.registry = function(v){
  if (typeof v === 'string') {
    if (v[v.length - 1] === '/') {
      v = v.substring(0, v.length - 1);
    }
    return this._reg = function(v){
      return function(o){
        return v + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || 'index.min.js');
      };
    }(v);
  } else {
    return this._reg = v;
  }
}, ref$.cache = function(o){
  var that;
  if (typeof o === 'string') {
    o = {
      url: o
    };
  }
  if (!o.id) {
    o.id = rsp.id(o);
  }
  if (that = this._cache[o.id]) {
    return that;
  }
  return this._cache[o.id] = rsp.cache(o);
}, ref$.exports = function(o){
  var ctx, libs, ref$, hash, iw, k, results$ = [];
  o == null && (o = {});
  ctx = o.ctx || {};
  libs = typeof o.libs === 'string'
    ? [o.libs]
    : o.libs || [];
  ref$ = [{}, this.iframe.contentWindow], hash = ref$[0], iw = ref$[1];
  for (k in ctx) {
    hash[k] = iw[k];
    iw[k] = ctx[k];
  }
  this._exports(libs, 0, ctx);
  for (k in hash) {
    results$.push(iw[k] = hash[k]);
  }
  return results$;
}, ref$._exports = function(libs, idx, ctx){
  var lib, ref$, hash, fprop, iw, k, att1, e, att2, results$ = [];
  idx == null && (idx = 0);
  ctx == null && (ctx = {});
  if (!(lib = libs[idx])) {
    return;
  }
  lib = this.cache(lib);
  ref$ = [{}, lib.fprop, this.iframe.contentWindow], hash = ref$[0], fprop = ref$[1], iw = ref$[2];
  if (!fprop) {
    lib.fprop = fprop = {};
    lib.prop = {};
    lib.propIniting = true;
    if (lib.gen) {
      import$(fprop, lib.gen.apply(iw, [iw, iw, iw]));
      lib.prop = Object.fromEntries((function(){
        var results$ = [];
        for (k in fprop) {
          results$.push([k, null]);
        }
        return results$;
      }()));
    } else {
      att1 = Object.fromEntries(Reflect.ownKeys(iw).filter(function(it){
        return !rsp.prop.legacy[it];
      }).map(function(it){
        return [it, true];
      }));
      for (k in att1) {
        hash[k] = iw[k];
      }
      try {
        iw.eval((lib.code || '').replace('"use strict";', ''));
      } catch (e$) {
        e = e$;
        console.error("[@plotdb/rescope] Parse failed", {
          url: lib.url,
          ns: lib.ns,
          name: lib.name,
          version: lib.version,
          path: lib.path
        });
        console.error("[@plotdb/rescope] with this error:", e);
        throw e;
      }
      att2 = Object.fromEntries(Reflect.ownKeys(iw).filter(function(it){
        return !rsp.prop.legacy[it];
      }).map(function(it){
        return [it, true];
      }));
      for (k in att2) {
        if (iw[k] === hash[k] || k === 'NaN') {
          continue;
        }
        fprop[k] = iw[k];
        lib.prop[k] = null;
      }
    }
  } else {
    for (k in fprop) {
      hash[k] = iw[k];
      iw[k] = fprop[k];
    }
  }
  for (k in fprop) {
    ctx[k] = fprop[k];
  }
  this._exports(libs, idx + 1);
  for (k in fprop) {
    results$.push(iw[k] = hash[k]);
  }
  return results$;
}, ref$._wrap = function(o, ctx, opt){
  var prop, code, k;
  o == null && (o = {});
  ctx == null && (ctx = {});
  opt == null && (opt = {});
  prop = o.prop || {};
  code = "var window, global, globalThis, self, __ret = {}; __win = {};\nwindow = global = globalThis = self = window = scope;";
  for (k in prop) {
    code += "var " + k + "; __win['" + k + "'] = win['" + k + "']; win['" + k + "'] = undefined;";
  }
  for (k in ctx) {
    code += "var " + k + " = window['" + k + "'] = ctx['" + k + "'];";
  }
  code += o.code + ";";
  for (k in prop) {
    code += "if(!(" + k + ")) { " + k + " = scope['" + k + "']; }\n__ret['" + k + "'] = " + k + " || window['" + k + "'] || win['" + k + "'] || this['" + k + "'];\nwin['" + k + "'] = __win['" + k + "'];";
  }
  code += "return __ret;";
  if (opt.codeOnly) {
    return "function(scope, ctx, win){" + code + "}";
  }
  return new Function("scope", "ctx", "win", code);
}, ref$.load = function(libs, dctx, forceFetch, onlyFetch){
  var px, ctx, proxy, segs, _, this$ = this;
  dctx == null && (dctx = {});
  forceFetch == null && (forceFetch = false);
  onlyFetch == null && (onlyFetch = false);
  libs = (Array.isArray(libs)
    ? libs
    : [libs]).map(function(o){
    return this$.cache(o);
  });
  px = libs.px
    ? libs.px
    : libs.px = dctx && dctx.p
      ? dctx.p
      : new proxin();
  ctx = px.ctx();
  proxy = px.proxy();
  /*
  # this tries to segment libs based on async flag.
  # however, current implementation batches fetches and then loads by order
  # in this case segment seems to be unnecessary.
  # we will keep the code here for reference.
  [segs, seg] = [[], []]
  for lib in libs =>
    seg.push lib
    if !(lib.async? and !lib.async) => continue
    segs.push seg
    seg = []
  if seg.length => segs.push seg
  */
  segs = [libs];
  _ = function(idx){
    var libs, ps;
    idx == null && (idx = 0);
    if (!(libs = segs[idx])) {
      return Promise.resolve(ctx);
    }
    ps = libs.map(function(lib){
      var ref;
      if ((lib.code || lib.gen) && !forceFetch) {
        return Promise.resolve();
      }
      ref = this$._ref(lib);
      if (ref.then) {
        return ref.then(function(it){
          lib.code = it.content;
          return this$.cache((lib.id = undefined, lib.version = it.version, lib.code = it.content, lib));
        });
      } else {
        return _fetch(ref, {
          method: 'GET'
        }).then(function(it){
          return lib.code = it;
        });
      }
    });
    return Promise.all(ps).then(function(){
      if (onlyFetch) {
        return;
      }
      this$.exports({
        libs: libs,
        ctx: dctx.f
      });
      return libs.map(function(lib){
        if (lib.propIniting) {
          if (!lib.gen) {
            lib.gen = this$._wrap(lib, ctx);
          }
          lib.prop = lib.gen.apply(proxy, [proxy, ctx, win]);
          lib.propIniting = false;
        }
        return import$(ctx, lib.prop);
      });
    }).then(function(){
      return ctx;
    }).then(function(){
      return _(idx + 1);
    });
  };
  return _(0);
}, ref$.context = function(libs, func, px){
  var ref$;
  if (typeof func !== 'function') {
    ref$ = [px, func], func = ref$[0], px = ref$[1];
  }
  return this.load(libs, px).then(function(ctx){
    if (func) {
      return func(ctx);
    } else {
      return ctx;
    }
  });
}, ref$);
rsp.env(typeof self != 'undefined' && self !== null ? self : globalThis);
rsp.proxin = proxin;
rsp.dualContext = function(){
  return {
    p: new proxin(),
    f: {},
    ctx: function(){
      return this.p.ctx();
    }
  };
};
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
function in$(x, xs){
  var i = -1, l = xs.length >>> 0;
  while (++i < l) if (x === xs[i]) return true;
  return false;
}rsp.prototype.bundle = function(libs){
  var hash, res$, k, v, this$ = this;
  libs == null && (libs = {});
  libs = (Array.isArray(libs)
    ? libs
    : [libs]).map(function(o){
    return this$.cache(o);
  });
  hash = {};
  libs.filter(function(it){
    return it && it.id;
  }).map(function(it){
    return hash[it.id] = it;
  });
  res$ = [];
  for (k in hash) {
    v = hash[k];
    res$.push(v);
  }
  libs = res$;
  return this.load(libs, null, true, true).then(function(){
    var codes;
    codes = libs.filter(function(it){
      return it.code;
    }).map(function(o){
      /*
      code = @_wrap o, {}, code-only: true
      """{#{if o.url => "url: '#{o.url}'," else ''}id: '#{o.id}',gen: #code}"""
      */
      return JSON.stringify({
        url: o.url,
        id: o.id,
        ns: o.ns,
        name: o.name,
        version: o.version,
        path: o.path,
        code: o.code
      });
    });
    return Promise.resolve("[" + codes.join(',') + "].forEach(function(o){rescope.cache(o);})");
  });
};rsp.__node = true;
if (typeof module != 'undefined' && module !== null) {
  module.exports = rsp;
} else if (typeof window != 'undefined' && window !== null) {
  window.rescope = rsp;
}