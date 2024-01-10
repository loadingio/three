(function(){
var win, doc, err, _fetch, rid, sanitize, pubsub, block;
err = function(o, id){
  var ref$;
  o == null && (o = "");
  id == null && (id = 404);
  return Promise.reject((ref$ = new Error(o), ref$.name = 'lderror', ref$.id = id, ref$.message = o, ref$));
};
_fetch = function(u, c){
  if (block.__node && (typeof fs != 'undefined' && fs !== null) && !/^https?:/.exec(u)) {
    return new Promise(function(res, rej){
      return fs.stat(u, function(e, s){
        var n;
        if (e) {
          return rej(e);
        }
        n = s.isDirectory() ? u + "/index.html" : u;
        return fs.readFile(n, function(e, b){
          if (e) {
            return rej(e);
          }
          return res(b.toString());
        });
      });
    });
  }
  return fetch(u, c).then(function(ret){
    if (ret && ret.ok) {
      return ret.text();
    }
    if (!ret) {
      return err();
    }
    return ret.clone().text().then(function(t){
      var i, m, e, ref$, j, _e;
      i = ret.status || 404;
      m = i + " " + t;
      e = (ref$ = new Error(m), ref$.name = 'lderror', ref$.id = i, ref$.message = m, ref$);
      try {
        if ((j = JSON.parse(t)) && j.name === 'lderror') {
          import$(e, j).json = j;
        }
      } catch (e$) {
        _e = e$;
      }
      return Promise.reject(e);
    });
  });
};
rid = function(){
  var id;
  for (;;) {
    id = "b-" + Math.random().toString(36).substring(2);
    if (!rid.hash[id]) {
      break;
    }
  }
  rid.hash[id] = true;
  return id;
};
rid.hash = {};
sanitize = function(code){
  return code || '';
};
pubsub = function(){
  this.subs = {};
  return this;
};
pubsub.prototype = import$(Object.create(Object.prototype), {
  fire: function(name){
    var args, res$, i$, to$, ref$;
    res$ = [];
    for (i$ = 1, to$ = arguments.length; i$ < to$; ++i$) {
      res$.push(arguments[i$]);
    }
    args = res$;
    return Promise.all(((ref$ = this.subs)[name] || (ref$[name] = [])).map(function(it){
      return it.apply(null, args);
    }));
  },
  on: function(name, cb){
    var ref$;
    return ((ref$ = this.subs)[name] || (ref$[name] = [])).push(cb);
  }
  /* # sample code for nonblocking message publishing
  pub: (name, ...args) ->
    ps = @subs[][name].map ->
      (res, rej) <- new Promise _
      Promise.resolve!
        .then -> it.apply null, args
        .then -> res!
        .catch -> rej it
    Promise.all ps
  */
});
block = {};
block.id = function(o){
  var path;
  path = o.path || (o.type === 'js'
    ? 'index.min.js'
    : o.type === 'css' ? 'index.min.css' : 'index.html');
  return o.id || o.url || (o.ns ? o.ns + ":" : '') + "" + o.name + "@" + (o.version || 'main') + ":" + path;
};
block.id2obj = function(k){
  var nv, path, ns, ret;
  k = k.split(':');
  if (k.length <= 2) {
    nv = k[0], path = k[1], ns = k[2];
  } else {
    ns = k[0], nv = k[1], path = k[2];
  }
  if (!(ret = /^(@?[^@]+)(?:@([^:]+))?$/.exec(nv))) {
    return null;
  }
  return {
    ns: ns,
    name: ret[1],
    version: ret[2],
    path: path
  };
};
block.env = function(it){
  var ref$;
  ref$ = [it, it.document], win = ref$[0], doc = ref$[1];
  if (rescope.env) {
    rescope.env(win);
  }
  if (rescope.env) {
    return csscope.env(win);
  }
};
block.i18n = {
  module: {
    lng: 'en',
    t: function(v, o){
      var vs, lng, i$, to$, i, t, j, ns, _t, u, ref$, ref1$, j$, to1$, that;
      vs = Array.isArray(v)
        ? v
        : [v];
      lng = this.lng;
      for (i$ = 0, to$ = vs.length; i$ < to$; ++i$) {
        i = i$;
        if (!((t = vs[i]) != null)) {
          continue;
        }
        j = t.indexOf(':');
        ns = t.substring(0, j);
        t = t.substring(j + 1);
        _t = t.split('.');
        u = (ref$ = (ref1$ = this.res)[lng] || (ref1$[lng] = {}))[ns] || (ref$[ns] = {});
        for (j$ = 0, to1$ = _t.length; j$ < to1$; ++j$) {
          j = j$;
          if (!u) {
            break;
          } else {
            u = u[_t[j]];
          }
        }
        if (that = u) {
          return that;
        }
      }
      return t || v[v.length - 1];
    },
    changeLanguage: function(it){
      return this._fire('languageChanged', this.lng = it) || 'en';
    },
    addResourceBundle: function(lng, ns, res, deep, overwrite){
      var ref$;
      return ((ref$ = this.res)[lng] || (ref$[lng] = {}))[ns] = res;
    },
    _evthdr: {},
    on: function(n, cb){
      var this$ = this;
      return (Array.isArray(n)
        ? n
        : [n]).map(function(n){
        var ref$;
        return ((ref$ = this$._evthdr)[n] || (ref$[n] = [])).push(cb);
      });
    },
    off: function(n, cb){
      var this$ = this;
      return (Array.isArray(n)
        ? n
        : [n]).map(function(n){
        var idx, ref$;
        if (~(idx = ((ref$ = this$._evthdr)[n] || (ref$[n] = [])).indexOf(cb))) {
          return this$._evthdr[n].splice(idx, 1);
        }
      });
    },
    _fire: function(n){
      var v, res$, i$, to$, ref$, len$, cb, results$ = [];
      res$ = [];
      for (i$ = 1, to$ = arguments.length; i$ < to$; ++i$) {
        res$.push(arguments[i$]);
      }
      v = res$;
      for (i$ = 0, len$ = (ref$ = this._evthdr[n] || []).length; i$ < len$; ++i$) {
        cb = ref$[i$];
        results$.push(cb.apply(this, v));
      }
      return results$;
    },
    res: {}
  },
  use: function(it){
    return this.module = it;
  },
  addResourceBundle: function(lng, id, resource, deep, overwrite){
    deep == null && (deep = true);
    overwrite == null && (overwrite = true);
    return block.i18n.module.addResourceBundle(lng, id, resource, deep, overwrite);
  },
  changeLanguage: function(it){
    return block.i18n.module.changeLanguage(it);
  }
};
Object.defineProperty(block.i18n, 'language', {
  get: function(){
    return block.i18n.module.lng || block.i18n.module.language;
  }
});
block.global = {
  csscope: {
    hash: {},
    apply: function(ret){
      var this$ = this;
      ret = ret.filter(function(it){
        return !this$.hash[it.id || it.url];
      }).map(function(it){
        return this$.hash[it.id || it.url] = it.scope;
      });
      if (ret.length) {
        return doc.body.classList.add.apply(doc.body.classList, ret);
      }
    }
  }
};
block.init = proxise.once(function(){
  if (block._rescope) {
    return block._rescope.init();
  }
});
block.rescope = function(){
  if (!block._rescope) {
    block._rescope = new rescope({
      global: win != null ? win : global
    });
  }
  return block._rescope;
};
block.csscope = function(){
  if (!block._csscope) {
    block._csscope = new csscope.manager();
  }
  return block._csscope;
};
block.manager = function(opt){
  var this$ = this;
  opt == null && (opt = {});
  this.hash = {};
  this.proxy = {};
  this.running = {};
  this._ver = {
    map: {}
  };
  this._chain = opt.chain || null;
  this.init = proxise.once(function(){
    return this$._init();
  });
  this.rescope = opt.rescope instanceof rescope
    ? opt.rescope
    : block.rescope();
  this.csscope = opt.csscope instanceof csscope
    ? opt.csscope
    : block.csscope();
  if (opt.registry) {
    this.registry(opt.registry);
  }
  this.init();
  return this;
};
block.manager.prototype = import$(Object.create(Object.prototype), {
  _init: function(){
    if (this.rescope === block.rescope()) {
      return block.init();
    } else {
      return this.rescope.init();
    }
  },
  id: block.id,
  id2obj: block.id2obj,
  chain: function(it){
    return this._chain = it;
  },
  registry: function(r){
    var ref$;
    if (((ref$ = typeof r) === 'string' || ref$ === 'function') || r.url || r.fetch) {
      r = {
        lib: r,
        block: r
      };
    }
    if (r.lib != null) {
      if (this.rescope === block.rescope()) {
        this.rescope = new rescope({
          global: win
        });
      }
      if (this.csscope === block.csscope()) {
        this.csscope = new csscope.manager();
      }
      this.rescope.registry(r.lib);
      this.csscope.registry(r.lib);
    }
    if (r.block != null) {
      this._reg = r.block || '';
      if (typeof this._reg === 'string' && this._reg && (ref$ = this._reg)[ref$.length - 1] !== '/') {
        return this._reg += '/';
      }
    }
  },
  set: function(opt){
    var opts, this$ = this;
    opt == null && (opt = {});
    opts = Array.isArray(opt)
      ? opt
      : [opt];
    return Promise.all(opts.map(function(obj){
      var ns, name, version, path, b, ref$, ref1$, ref2$;
      ns = obj.ns, name = obj.name, version = obj.version, path = obj.path;
      if (!ns) {
        ns = '';
      }
      b = obj instanceof block['class']
        ? obj
        : obj.block;
      return ((ref$ = (ref1$ = (ref2$ = this$.hash)[ns] || (ref2$[ns] = {}))[name] || (ref1$[name] = {}))[version] || (ref$[version] = {}))[path || 'index.html'] = b;
    }));
  },
  _getUrl: function(arg$){
    var url, name, version, path, type;
    url = arg$.url, name = arg$.name, version = arg$.version, path = arg$.path, type = arg$.type;
    if (url) {
      return url;
    }
    path = path
      ? path
      : type === 'block'
        ? 'index.html'
        : type === 'js' ? 'index.min.js' : 'index.min.css';
    return (this._reg || '') + "/assets/block/" + name + "/" + (version || 'main') + "/" + path;
  },
  getUrl: function(o){
    var r;
    if (!o.type) {
      o.type = 'block';
    }
    if (typeof (r = this._reg.url || this._reg) === 'function') {
      return r(o);
    } else {
      return this._getUrl(o);
    }
  },
  _ref: function(o){
    var r, ref$;
    if (typeof (r = this._reg.url || this._reg) === 'function') {
      o = (ref$ = import$({}, o), ref$.url = r(o), ref$);
    }
    return this._reg.fetch
      ? this._reg.fetch(o)
      : o.url;
  },
  fetch: function(o){
    var r;
    o.type = 'block';
    r = this._ref(o);
    return r.then
      ? r
      : !r
        ? err(o)
        : _fetch(r, {
          method: 'GET'
        }).then(function(it){
          return {
            content: it
          };
        });
  },
  _get: function(opt){
    var ref$, ns, n, v, p, obj, ref1$, that, key$, ver, c, ref2$, this$ = this;
    ref$ = [opt.ns || '', opt.name, opt.version || 'main', opt.path || 'index.html'], ns = ref$[0], n = ref$[1], v = ref$[2], p = ref$[3];
    obj = {
      ns: ns,
      name: n,
      version: v,
      path: p
    };
    if (!(n && v)) {
      return err("", 1015);
    }
    p = p.replace(/\/(index\.html)?$/, '');
    (ref$ = (ref1$ = this.hash)[ns] || (ref1$[ns] = {}))[n] || (ref$[n] = {});
    if (/[^0-9.]/.exec(v) && !opt.force) {
      if (((ref$ = this._ver.map)[ns] || (ref$[ns] = {}))[n] && this._ver.map[ns][n][v]) {
        if (that = ((ref$ = this.hash[ns][n])[key$ = this._ver.map[ns][n][v]] || (ref$[key$] = {}))[p]) {
          return that;
        }
      }
      for (ver in ref$ = ((ref1$ = this.hash)[ns] || (ref1$[ns] = {}))[n]) {
        c = ref$[ver];
        if (!semver.fit(ver, v)) {
          continue;
        }
        return Promise.resolve(c[p]);
      }
    }
    if (((ref$ = this.hash[ns][n])[v] || (ref$[v] = {}))[p] != null && !opt.force) {
      return Promise.resolve(this.hash[ns][n][v][p]);
    }
    if (((ref$ = (ref1$ = (ref2$ = this.running)[ns] || (ref2$[ns] = {}))[n] || (ref1$[n] = {}))[v] || (ref$[v] = {}))[p] === true) {
      return;
    }
    this.running[ns][n][v][p] = true;
    return this.fetch({
      ns: opt.ns,
      name: opt.name,
      version: opt.version,
      path: opt.path
    }).then(function(it){
      var ref$;
      if (!it) {
        return e404(obj);
      }
      if (it.version) {
        if (obj.version !== it.version) {
          ((ref$ = this$._ver.map[ns])[n] || (ref$[n] = {}))[obj.version] = it.version;
        }
        obj.version = it.version;
      }
      return it.content || it;
    })['catch'](function(e){
      if (!this$._chain) {
        return Promise.reject(e);
      }
      return this$._chain.get(opt);
    }).then(function(ret){
      var b;
      ret == null && (ret = {});
      b = new block['class']((obj.code = ret, obj.manager = this$, obj));
      this$.set((obj.block = b, obj));
      return b;
    }).then(function(it){
      this$.proxy[ns][n][v][p].resolve(it);
      return it;
    })['finally'](function(){
      return this$.running[ns][n][v][p] = false;
    })['catch'](function(e){
      this$.proxy[ns][n][v][p].reject(e);
      return Promise.reject(e);
    });
  },
  from: function(o, p){
    return this.get(o).then(function(b){
      return b.create().then(function(i){
        return i.attach(p).then(function(){
          return i['interface']();
        }).then(function(it){
          return {
            instance: i,
            'interface': it
          };
        });
      });
    });
  },
  get: function(opt){
    var opts, this$ = this;
    opt == null && (opt = {});
    opts = Array.isArray(opt)
      ? opt
      : [opt];
    return Promise.all(opts.map(function(opt){
      var ref$, ns, n, v, p, ref1$, ref2$;
      opt == null && (opt = {});
      if (typeof opt === 'string') {
        opt = block.id2obj(opt);
      }
      ref$ = [opt.ns || '', opt.name, opt.version || 'main', opt.path || 'index.html'], ns = ref$[0], n = ref$[1], v = ref$[2], p = ref$[3];
      p = p.replace(/\/(index\.html)?$/, '');
      if (!((ref$ = (ref1$ = (ref2$ = this$.proxy)[ns] || (ref2$[ns] = {}))[n] || (ref1$[n] = {}))[v] || (ref$[v] = {}))[p]) {
        this$.proxy[ns][n][v][p] = proxise(function(opt){
          return this$._get(opt);
        });
      }
      return this$.proxy[ns][n][v][p](opt);
    })).then(function(it){
      if (Array.isArray(opt)) {
        return it;
      } else {
        return it[0];
      }
    });
  },
  debundle: function(o){
    var ps, this$ = this;
    o == null && (o = {});
    o = Array.isArray(o)
      ? o
      : [o];
    ps = o.map(function(opt){
      return Promise.resolve().then(function(){
        var mgr, lc, p;
        mgr = opt.manager || this$;
        lc = {};
        if (!opt.root) {
          p = opt.url
            ? _fetch(opt.url, {
              method: 'GET'
            })
            : Promise.resolve(opt.code || '');
          p = p.then(function(c){
            var div;
            if (!block.debundleNode) {
              doc.body.appendChild(block.debundleNode = doc.createElement('div'));
            }
            block.debundleNode.style.display = 'none';
            block.debundleNode.appendChild(div = doc.createElement('div'));
            div.innerHTML = c;
            return div.querySelector('template');
          });
        } else {
          p = Promise.resolve(typeof opt.root === 'string'
            ? doc.querySelector(opt.root)
            : opt.root);
        }
        return p.then(function(root){
          var ref$, nodes, classes, s, k, node, ns, name, version, path, bc, results$ = [];
          if (!root) {
            return;
          }
          if (root.content) {
            root = root.content;
          }
          ref$ = [{}, {}], nodes = ref$[0], classes = ref$[1];
          Array.from(root.childNodes).map(function(n){
            var id;
            if (n.nodeType !== doc.ELEMENT_NODE) {
              return;
            }
            if (n.nodeName === 'SCRIPT') {
              return lc.script = n.cloneNode(true);
            } else if (n.nodeName === 'STYLE') {
              return lc.style = n.cloneNode(true);
            } else if (!(id = n.getAttribute('block'))) {} else {
              return nodes[id] = n;
            }
          });
          if (lc.script) {
            s = doc.createElement('script');
            s.textContent = lc.script.textContent;
            lc.script = s;
            lc.script['import'] = function(it){
              return lc.codes = typeof it === 'function' ? it() : it;
            };
            lc.script.setAttribute('type', 'text/javascript');
            doc.body.appendChild(lc.script);
          }
          if (lc.style) {
            lc.style.setAttribute('type', 'text/css');
            doc.body.appendChild(lc.style);
          }
          for (k in nodes) {
            node = nodes[k];
            ref$ = block.id2obj(k), ns = ref$.ns, name = ref$.name, version = ref$.version, path = ref$.path;
            bc = new block['class']({
              manager: mgr,
              ns: ns,
              name: name,
              version: version,
              path: path,
              code: {
                script: lc.codes[k],
                dom: node,
                style: ""
              }
            });
            results$.push(mgr.set(bc));
          }
          return results$;
        });
      });
    });
    return Promise.all(ps);
  }
});
block['class'] = function(opt){
  var code, node, div, dom, i$, to$, i, this$ = this;
  opt == null && (opt = {});
  this.opt = opt;
  this.scope = opt.scope || null;
  this._ctx = {};
  this.csscopes = {
    global: [],
    local: []
  };
  this.ns = opt.ns;
  this.name = opt.name;
  this.version = opt.version;
  this.path = opt.path;
  this.manager = opt.manager;
  if (!opt.ns) {
    opt.ns = '';
  }
  if (!this.manager) {
    console.warn("manager is mandatory when constructing block.class");
  }
  code = opt.code;
  if (opt.root) {
    node = typeof opt.root === 'string'
      ? doc.querySelector(opt.root)
      : opt.root;
  } else {
    if (typeof code === 'function') {
      code = code();
    }
    if (typeof code === 'string') {
      code = sanitize(code);
      div = doc.createElement("div");
      div.innerHTML = (code || '').trim();
      this._templates = Array.from(div.querySelectorAll('template[rel=block]')).map(function(n){
        return n.parentNode.removeChild(n);
      });
      if (div.childNodes.length > 1) {
        console.warn("DOM definition of a block should contain only one root.");
      }
    } else if (typeof code === 'object') {
      this.script = code.script;
      this.style = code.style;
      this.style = code.style;
      this.script = code.script;
      dom = code.dom instanceof Function
        ? code.dom()
        : code.dom;
      if (dom instanceof win.Element) {
        node = dom;
      } else {
        code = sanitize(dom);
        div = doc.createElement("div");
        div.innerHTML = code;
        if (div.childNodes.length > 1) {
          console.warn("DOM definition of a block should contain only one root.");
        }
      }
    }
  }
  ['script', 'style', 'link'].map(function(n){
    var v;
    v = Array.from((node || div).querySelectorAll(n)).map(function(it){
      it.parentNode.removeChild(it);
      return it.textContent;
    }).join('\n');
    return this$[n] = v != null && v
      ? v
      : this$[n] || "";
  });
  if (!node && div) {
    for (i$ = 0, to$ = div.childNodes.length; i$ < to$; ++i$) {
      i = i$;
      if ((node = div.childNodes[i]).nodeType === win.Element.ELEMENT_NODE) {
        break;
      }
    }
  }
  if (!node) {
    node = doc.createElement('div');
  }
  if (node.nodeType !== win.Element.ELEMENT_NODE) {
    console.warn("root of DOM definition of a block should be an Element");
  }
  this.node = node;
  this.init = proxise.once(function(){
    return this$._init();
  });
  return this;
};
block['class'].prototype = import$(Object.create(Object.prototype), {
  _init: function(){
    var this$ = this;
    return block.init().then(function(){
      if (!this$._templates) {
        return;
      }
      return Promise.all(this$._templates.map(function(it){
        return this$.manager.debundle({
          root: it
        });
      }));
    }).then(function(){
      var v, ref$, ret;
      this$['interface'] = this$.script instanceof Function
        ? this$.script()
        : typeof this$.script === 'object'
          ? this$.script
          : (v = eval("(function(module){" + (this$.script || '') + ";return module.exports;})({})")) instanceof Function
            ? v()
            : v || {};
      if (!this$['interface']) {
        this$['interface'] = {};
      }
      (ref$ = this$['interface']).pkg || (ref$.pkg = {});
      if (!this$.name) {
        this$.name = this$['interface'].pkg.name;
      }
      if (!this$.version) {
        this$.version = this$['interface'].pkg.version;
      }
      if (!this$.path) {
        this$.path = this$['interface'].pkg.path;
      }
      this$.id = block.id({
        ns: this$.ns,
        name: this$.name || rid(),
        version: this$.version || rid(),
        path: this$.path
      });
      this$._id_t = this$.id.replace(/:/g, '=');
      if (!this$.scope) {
        this$.scope = csscope.scope(this$);
      }
      if (this$.style) {
        doc.body.appendChild(this$.styleNode = doc.createElement("style"));
        this$.styleNode.setAttribute('type', 'text/css');
        ret = csscope({
          rule: "*[scope~=" + this$.scope + "]",
          name: this$.scope,
          css: this$.style,
          scopeTest: "[scope]"
        });
        ret = ret.replace(/url\("?(?!data:)([^()"]+)"?\)/g, "url(" + this$._path('') + "$1)");
        this$.styleNode.textContent = ret;
      }
      this$.factory = function(i){
        this._instance = i;
        return this;
      };
      return this$.factory.prototype = import$((ref$ = Object.create(Object.prototype), ref$.init = function(){}, ref$.destroy = function(){}, ref$._class = this$, ref$['interface'] = function(){
        if (!this.parent) {
          return;
        }
        if (this.parent['interface'] instanceof Function) {
          return this.parent['interface']();
        } else {
          return this.parent['interface'];
        }
      }, ref$), this$['interface']);
    }).then(function(){
      var ext;
      this$['extends'] = [];
      if (!(ext = this$['interface'].pkg.extend)) {
        return;
      }
      if (!this$.manager) {
        return new Error("no available manager to get extended block");
      }
      if (!(ext.name || ext.url)) {
        ext.ns = this$.ns;
        ext.name = this$.name;
        ext.version = this$.version;
      }
      return this$.manager.get(ext).then(function(it){
        var e;
        this$.extend = it;
        try {
          this$.extend._usedby(this$);
        } catch (e$) {
          e = e$;
          this$.extend = null;
          throw e;
        }
        this$.extendDom = !(ext.dom != null) || ext.dom;
        this$.extendStyle = !(ext.style != null) || ext.style;
        return this$.extend.init();
      }).then(function(){
        return this$['extends'] = [this$.extend].concat(this$.extend['extends']);
      });
    }).then(function(){
      var i18n, lng, res, results$ = [];
      i18n = this$['interface'].pkg.i18n || {};
      for (lng in i18n) {
        res = i18n[lng];
        results$.push(block.i18n.module.addResourceBundle(lng, this$._id_t, res, true, true));
      }
      return results$;
    }).then(function(){
      var k, v;
      this$.dependencies = Array.isArray(this$['interface'].pkg.dependencies)
        ? this$['interface'].pkg.dependencies
        : (function(){
          var ref$, results$ = [];
          for (k in ref$ = this['interface'].pkg.dependencies || {}) {
            v = ref$[k];
            results$.push(v);
          }
          return results$;
        }.call(this$));
      this$.dependencies.map(function(d){
        if (!(d.name || d.url)) {
          d.ns = this$.ns;
          d.name = this$.name;
          d.version = this$.version;
        }
        if (d.type) {
          return;
        }
        if (/\.js$/.exec(d.url || d.path || d)) {
          return d.type = 'js';
        } else if (/\.css$/.exec(d.url || d.path || d)) {
          return d.type = 'css';
        } else {
          return d.type = 'js';
        }
      });
      if (this$.extend) {
        this$._ctx = this$.extend.context();
      } else if (rescope.dualContext) {
        this$._ctx = rescope.dualContext();
      } else if (rescope.proxin) {
        this$._ctx = new rescope.proxin();
      }
      return this$.manager.rescope.load(this$.dependencies.filter(function(it){
        return !it.type || it.type === 'js';
      }), this$._ctx);
    }).then(function(){
      return this$.manager.csscope.load(this$.dependencies.filter(function(it){
        return it.type === 'css' && it.global === true;
      }));
    }).then(function(it){
      this$.csscopes.global = it || [];
      return this$.manager.csscope.load(this$.dependencies.filter(function(it){
        return it.type === 'css' && it.global !== true;
      }));
    }).then(function(it){
      var ref$;
      this$.csscopes.local = it || [];
      if (!this$.extend) {
        return;
      }
      (ref$ = this$.csscopes).global = ref$.global.concat(this$.extend.csscopes.global || []);
      if (this$.extendStyle === true) {
        return (ref$ = this$.csscopes).local = ref$.local.concat(this$.extend.csscopes.local || []);
      } else if (this$.extendDom === 'overwrite') {
        return (ref$ = this$.csscopes).local = ref$.local.concat(this$.extend.csscopes.local.slice(1));
      }
    })['catch'](function(e){
      console.error("[@plotdb/block] init " + block.id(this$), e);
      return this$['interface'] = {}, this$.styleNode = {}, this$.factory = function(){
        return this;
      }, this$.dependencies = [], this$;
    });
  },
  _usedby: function(b){
    var _, this$ = this;
    if (this === b) {
      throw new Error("circular extend");
    }
    (this._users || (this._users = [])).push(b);
    _ = function(l){
      var i$, len$, o, results$ = [];
      l == null && (l = []);
      if (in$(this$, l)) {
        throw new Error("circular extend");
      }
      for (i$ = 0, len$ = l.length; i$ < len$; ++i$) {
        o = l[i$];
        results$.push(_(o._users));
      }
      return results$;
    };
    return _(b._users);
  },
  context: function(){
    return this._ctx;
  },
  dom: function(){
    return this.node;
  },
  _path: function(p){
    p == null && (p = '');
    return this.manager.getUrl({
      ns: this.ns,
      name: this.name,
      version: this.version,
      path: this.path
    }).replace(/\/[^/]*$/, '/') + p;
  },
  i18n: function(t, o){
    var id;
    id = this._id_t;
    return block.i18n.module.t([id + ":" + t].concat(this['extends'].map(function(it){
      return it._id_t + ":" + t;
    }), [t + ""]), o);
  },
  create: function(o){
    var this$ = this;
    o == null && (o = {});
    return this.init().then(function(){
      var r;
      r = new block.instance({
        block: this$,
        ns: this$.ns,
        name: this$.name,
        path: this$.path,
        version: this$.version,
        data: o.data
      });
      return r.init().then(function(){
        if (o.root) {
          return r.attach({
            root: o.root,
            before: o.before,
            autoTransform: o.autoTransform || null
          });
        }
      }).then(function(){
        return r;
      });
    });
  },
  resolvePlugAndCloneNode: function(child, byPass){
    var node;
    byPass == null && (byPass = false);
    if (!byPass) {
      node = this.dom().cloneNode(true);
      if (child) {
        Array.from(node.querySelectorAll('plug')).map(function(it){
          var name, n;
          name = it.getAttribute('name');
          n = child.querySelector(":scope :not([plug]) [plug=" + name + "], :scope > [plug=" + name + "]");
          if (n) {
            return it.replaceWith(n);
          }
        });
      }
    } else {
      node = child;
    }
    return this.extend && this.extendDom !== false ? this.extendDom === 'overwrite'
      ? this.extend.resolvePlugAndCloneNode(node, true)
      : this.extend.resolvePlugAndCloneNode(node) : node;
  }
});
block.instance = function(opt){
  var this$ = this;
  opt == null && (opt = {});
  this.ns = opt.ns;
  this.name = opt.name;
  this.version = opt.version;
  this.path = opt.path;
  this.block = opt.block;
  this.data = opt.data;
  this.init = proxise.once(function(){
    return this$._init();
  });
  return this;
};
block.instance.prototype = import$(Object.create(Object.prototype), {
  _init: function(){
    return this.block.init();
  },
  attach: function(opt){
    var _o, root, node, exts, s, i$, to$, i, es, this$ = this;
    opt == null && (opt = {});
    if (_o = this._defered) {
      if (_o.before) {
        _o.root.insertBefore(_o.node, _o.before);
      } else {
        _o.root.appendChild(_o.node);
      }
      return Promise.resolve();
    }
    if (opt.data) {
      this.data = opt.data;
    }
    root = opt.root;
    root = !root
      ? null
      : typeof root === 'string' ? doc.querySelector(root) : root;
    block.global.csscope.apply(this.block.csscopes.global);
    if (!root) {
      node = null;
    } else {
      node = this.dom(opt.root);
      exts = [this.block].concat(this.block['extends']);
      s = [this.block.scope];
      for (i$ = 0, to$ = exts.length - 1; i$ < to$; ++i$) {
        i = i$;
        es = exts[i].extendStyle;
        if (es === 'overwrite') {
          continue;
        } else if (es === false) {
          break;
        }
        s.push(exts[i + 1].scope);
      }
      node.setAttribute('scope', s.join(' '));
      node.classList.add.apply(node.classList, this.block.csscopes.local.map(function(it){
        return it.scope;
      }).concat(this.block.csscopes.global.map(function(it){
        return it.scope;
      })));
      if (!opt.defer) {
        if (opt.before) {
          root.insertBefore(node, opt.before);
        } else {
          root.appendChild(node);
        }
      } else {
        this._defered = {
          node: node,
          root: root,
          before: opt.before
        };
      }
    }
    if (opt.autoTransform === 'i18n') {
      block.i18n.module.on('languageChanged', this._i18nTransform = function(){
        return this$.transform('i18n');
      });
    }
    return this.run({
      node: node,
      type: 'init'
    });
  },
  detach: function(){
    var node;
    node = this.dom();
    node.parentNode.removeChild(node);
    if (this._i18nTransform) {
      block.i18n.module.off('languageChanged', this._i18nTransform);
      this._i18nTransform = null;
    }
    return this.run({
      node: node,
      type: 'destroy'
    });
  },
  'interface': function(){
    var ref$;
    return (ref$ = this.obj)[ref$.length - 1]['interface']();
  },
  _transform: function(node, tag, func){
    var regex, _, wk;
    regex = new RegExp("^" + tag + "-(.+)$");
    _ = function(n){
      var i$, to$, i, ref$, name, value, ret, v, results$ = [];
      if (n.nodeType === win.Element.TEXT_NODE) {
        n.parentNode.setAttribute(tag, n.textContent);
        return n.parentNode.replaceChild(doc.createTextNode(func(n.textContent)), n);
      } else {
        for (i$ = 0, to$ = n.attributes.length; i$ < to$; ++i$) {
          i = i$;
          ref$ = n.attributes[i], name = ref$.name, value = ref$.value;
          if (!(ret = regex.exec(name))) {
            continue;
          }
          n.setAttribute(ret[1], func(value || ''));
        }
        if (v = n.getAttribute(tag)) {
          return n.textContent = func(v);
        }
        for (i$ = 0, to$ = n.childNodes.length; i$ < to$; ++i$) {
          i = i$;
          results$.push(_(n.childNodes[i]));
        }
        return results$;
      }
    };
    wk = new WeakMap();
    Array.from(node.querySelectorAll(":scope [scope] [" + tag + "]")).map(function(n){
      return wk.set(n, 1);
    });
    Array.from(node.querySelectorAll("[" + tag + "]")).filter(function(n){
      return !wk.get(n);
    }).map(function(n){
      return _(n);
    });
    return node;
  },
  transform: function(n){
    var this$ = this;
    if (!(n === 'i18n' || n === 'path')) {
      return;
    }
    this._transform(this.node, 't', function(it){
      return this$.i18n(it);
    });
    return this._transform(this.node, 'path', function(it){
      return this$._path(it);
    });
  },
  dom: function(child){
    var that;
    if (that = this.node) {
      return that;
    }
    this.node = this.block.resolvePlugAndCloneNode(child);
    this.transform('i18n');
    return this.transform('path');
  },
  _path: function(it){
    return this.block._path(it);
  },
  i18n: function(v, o){
    return this.block.i18n(v, o);
  },
  run: function(arg$){
    var node, type, cs, ps, c, this$ = this;
    node = arg$.node, type = arg$.type;
    cs = [];
    ps = [];
    c = this.block;
    if (!this.obj) {
      this.obj = [];
    }
    if (!this.pubsub) {
      this.pubsub = new pubsub();
    }
    while (c) {
      cs = [c].concat(cs);
      c = c.extend;
    }
    return new Promise(function(res, rej){
      var _;
      _ = function(list, idx, gtx, parent, sync){
        var p, b, ref$;
        list == null && (list = []);
        idx == null && (idx = 0);
        gtx == null && (gtx = {});
        if (list.length <= idx) {
          p = Promise.all(ps).then(function(it){
            return res(it);
          })['catch'](function(it){
            return rej(it);
          });
          return p;
        }
        b = list[idx];
        return function(ctx){
          var payload, o, _p, sync;
          import$(gtx, ctx);
          payload = {
            root: node,
            parent: parent,
            manager: this$.block.manager,
            ctx: gtx,
            context: gtx,
            pubsub: this$.pubsub,
            i18n: {
              getLanguage: function(){
                return block.i18n.language;
              },
              addResourceBundles: function(resources){
                var lng, res, results$ = [];
                resources == null && (resources = {});
                for (lng in resources) {
                  res = resources[lng];
                  results$.push(block.i18n.addResourceBundle(lng, this$.block._id_t, res));
                }
                return results$;
              },
              t: function(v, o){
                return this$.block.i18n(v, o);
              }
            },
            t: function(v, o){
              return this$.block.i18n(v, o);
            },
            path: function(it){
              return this$._path(it);
            },
            data: this$.data
          };
          if (type === 'init') {
            this$.obj.push(o = new b.factory(this$.block === b ? this$ : null));
            o.parent = this$.obj[idx - 1];
          }
          if (o = this$.obj[idx]) {
            ps.push(_p = o[type](payload));
          }
          sync = sync || b['interface'].pkg.syncInit;
          if (!(sync && _p)) {
            return _(list, idx + 1, gtx, o, sync);
          } else {
            return Promise.resolve(_p).then(function(){
              return _(list, idx + 1, gtx, o, sync);
            });
          }
        }(b._ctx.ctx
          ? b._ctx.ctx()
          : (ref$ = b._ctx).local || (ref$.local = {}));
      };
      return _(cs, 0, {});
    });
  }
});
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
function in$(x, xs){
  var i = -1, l = xs.length >>> 0;
  while (++i < l) if (x === xs[i]) return true;
  return false;
}block.env(typeof self != 'undefined' && self !== null ? self : globalThis);
if (typeof module != 'undefined' && module !== null) {
  module.exports = block;
} else if (typeof window != 'undefined' && window !== null) {
  window.block = block;
}}())
