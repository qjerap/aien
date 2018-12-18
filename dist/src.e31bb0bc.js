// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../node_modules/medium-zoom/dist/medium-zoom.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*! medium-zoom 1.0.2 | MIT License | https://github.com/francoischalifour/medium-zoom */
var _extends = Object.assign || function (a) {
  for (var b, c = 1; c < arguments.length; c++) for (var d in b = arguments[c], b) Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);

  return a;
},
    isSupported = function (a) {
  return 'IMG' === a.tagName;
},
    isNodeList = function (a) {
  return NodeList.prototype.isPrototypeOf(a);
},
    isNode = function (a) {
  return a && 1 === a.nodeType;
},
    isSvg = function (a) {
  var b = a.currentSrc || a.src;
  return '.svg' === b.substr(-4).toLowerCase();
},
    getImagesFromSelector = function (a) {
  try {
    return Array.isArray(a) ? a.filter(isSupported) : isNodeList(a) ? [].slice.call(a).filter(isSupported) : isNode(a) ? [a].filter(isSupported) : 'string' == typeof a ? [].slice.call(document.querySelectorAll(a)).filter(isSupported) : [];
  } catch (a) {
    throw new TypeError('The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom');
  }
},
    createOverlay = function (a) {
  var b = document.createElement('div');
  return b.classList.add('medium-zoom-overlay'), b.style.background = a, b;
},
    cloneTarget = function (a) {
  var b = a.getBoundingClientRect(),
      c = b.top,
      d = b.left,
      e = b.width,
      f = b.height,
      g = a.cloneNode(),
      h = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
      i = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
  return g.removeAttribute('id'), g.style.position = 'absolute', g.style.top = c + h + 'px', g.style.left = d + i + 'px', g.style.width = e + 'px', g.style.height = f + 'px', g.style.transform = '', g;
},
    createCustomEvent = function (a, b) {
  var c = _extends({
    bubbles: !1,
    cancelable: !1,
    detail: void 0
  }, b);

  if ('function' == typeof window.CustomEvent) return new CustomEvent(a, c);
  var d = document.createEvent('CustomEvent');
  return d.initCustomEvent(a, c.bubbles, c.cancelable, c.detail), d;
},
    Promise$1 = window.Promise || function (a) {
  function b() {}

  a(b, b);
},
    mediumZoom = function a(b) {
  var c = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {},
      d = function (a) {
    var b = a.target;
    return b === w ? void m() : void (-1 === q.indexOf(b) || n({
      target: b
    }));
  },
      e = function () {
    if (!s && v.original) {
      var a = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      Math.abs(t - a) > u.scrollOffset && setTimeout(m, 150);
    }
  },
      f = function () {
    var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
        b = a;

    if (a.background && (w.style.background = a.background), a.container && a.container instanceof Object && (b.container = _extends({}, u.container, a.container)), a.template) {
      var c = isNode(a.template) ? a.template : document.querySelector(a.template);
      b.template = c;
    }

    return u = _extends({}, u, b), q.forEach(function (a) {
      a.dispatchEvent(createCustomEvent('medium-zoom:update', {
        detail: {
          zoom: x
        }
      }));
    }), x;
  },
      g = function () {
    var b = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {};
    return a(_extends({}, u, b));
  },
      h = function () {
    for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) b[c] = arguments[c];

    var d = b.reduce(function (a, b) {
      return [].concat(a, getImagesFromSelector(b));
    }, []);
    return d.filter(function (a) {
      return -1 === q.indexOf(a);
    }).forEach(function (a) {
      q.push(a), a.classList.add('medium-zoom-image');
    }), r.forEach(function (a) {
      var b = a.type,
          c = a.listener,
          e = a.options;
      d.forEach(function (a) {
        a.addEventListener(b, c, e);
      });
    }), x;
  },
      i = function () {
    for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) b[c] = arguments[c];

    v.zoomed && m();
    var d = 0 < b.length ? b.reduce(function (a, b) {
      return [].concat(a, getImagesFromSelector(b));
    }, []) : q;
    return d.forEach(function (a) {
      a.classList.remove('medium-zoom-image'), a.dispatchEvent(createCustomEvent('medium-zoom:detach', {
        detail: {
          zoom: x
        }
      }));
    }), q = q.filter(function (a) {
      return -1 === d.indexOf(a);
    }), x;
  },
      j = function (a, b) {
    var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
    return q.forEach(function (d) {
      d.addEventListener('medium-zoom:' + a, b, c);
    }), r.push({
      type: 'medium-zoom:' + a,
      listener: b,
      options: c
    }), x;
  },
      k = function (a, b) {
    var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
    return q.forEach(function (d) {
      d.removeEventListener('medium-zoom:' + a, b, c);
    }), r = r.filter(function (c) {
      return c.type !== 'medium-zoom:' + a || c.listener.toString() !== b.toString();
    }), x;
  },
      l = function () {
    var a = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {},
        b = a.target,
        c = function () {
      var a = Math.min,
          b = {
        width: window.innerWidth,
        height: window.innerHeight,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      },
          c = void 0,
          d = void 0;
      if (u.container) if (u.container instanceof Object) b = _extends({}, b, u.container), c = b.width - b.left - b.right - 2 * u.margin, d = b.height - b.top - b.bottom - 2 * u.margin;else {
        var e = isNode(u.container) ? u.container : document.querySelector(u.container),
            f = e.getBoundingClientRect(),
            g = f.width,
            h = f.height,
            i = f.left,
            j = f.top;
        b = _extends({}, b, {
          width: g,
          height: h,
          left: i,
          top: j
        });
      }
      c = c || b.width - 2 * u.margin, d = d || b.height - 2 * u.margin;
      var k = v.zoomedHd || v.original,
          l = isSvg(k) ? c : k.naturalWidth || c,
          m = isSvg(k) ? d : k.naturalHeight || d,
          n = k.getBoundingClientRect(),
          o = n.top,
          p = n.left,
          q = n.width,
          r = n.height,
          s = a(l, c) / q,
          t = a(m, d) / r,
          w = a(s, t),
          x = (-p + (c - q) / 2 + u.margin + b.left) / w,
          y = (-o + (d - r) / 2 + u.margin + b.top) / w,
          z = 'scale(' + w + ') translate3d(' + x + 'px, ' + y + 'px, 0)';
      v.zoomed.style.transform = z, v.zoomedHd && (v.zoomedHd.style.transform = z);
    };

    return new Promise$1(function (a) {
      if (b && -1 === q.indexOf(b)) return void a(x);
      if (v.zoomed) return void a(x);
      if (b) v.original = b;else if (0 < q.length) {
        var d = q;
        v.original = d[0];
      } else return void a(x);

      if (v.original.dispatchEvent(createCustomEvent('medium-zoom:open', {
        detail: {
          zoom: x
        }
      })), t = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, s = !0, v.zoomed = cloneTarget(v.original), document.body.appendChild(w), u.template) {
        var e = isNode(u.template) ? u.template : document.querySelector(u.template);
        v.template = document.createElement('div'), v.template.appendChild(e.content.cloneNode(!0)), document.body.appendChild(v.template);
      }

      if (document.body.appendChild(v.zoomed), window.requestAnimationFrame(function () {
        document.body.classList.add('medium-zoom--opened');
      }), v.original.classList.add('medium-zoom-image--hidden'), v.zoomed.classList.add('medium-zoom-image--opened'), v.zoomed.addEventListener('click', m), v.zoomed.addEventListener('transitionend', function b() {
        s = !1, v.zoomed.removeEventListener('transitionend', b), v.original.dispatchEvent(createCustomEvent('medium-zoom:opened', {
          detail: {
            zoom: x
          }
        })), a(x);
      }), v.original.getAttribute('data-zoom-src')) {
        v.zoomedHd = v.zoomed.cloneNode(), v.zoomedHd.removeAttribute('srcset'), v.zoomedHd.removeAttribute('sizes'), v.zoomedHd.src = v.zoomed.getAttribute('data-zoom-src'), v.zoomedHd.onerror = function () {
          clearInterval(f), console.warn('Unable to reach the zoom image target ' + v.zoomedHd.src), v.zoomedHd = null, c();
        };
        var f = setInterval(function () {
          v.zoomedHd.complete && (clearInterval(f), v.zoomedHd.classList.add('medium-zoom-image--opened'), v.zoomedHd.addEventListener('click', m), document.body.appendChild(v.zoomedHd), c());
        }, 10);
      } else if (v.original.hasAttribute('srcset')) {
        v.zoomedHd = v.zoomed.cloneNode(), v.zoomedHd.removeAttribute('sizes');
        var g = v.zoomedHd.addEventListener('load', function () {
          v.zoomedHd.removeEventListener('load', g), v.zoomedHd.classList.add('medium-zoom-image--opened'), v.zoomedHd.addEventListener('click', m), document.body.appendChild(v.zoomedHd), c();
        });
      } else c();
    });
  },
      m = function () {
    return new Promise$1(function (a) {
      if (s || !v.original) return void a(x);
      s = !0, document.body.classList.remove('medium-zoom--opened'), v.zoomed.style.transform = '', v.zoomedHd && (v.zoomedHd.style.transform = ''), v.template && (v.template.style.transition = 'opacity 150ms', v.template.style.opacity = 0), v.original.dispatchEvent(createCustomEvent('medium-zoom:close', {
        detail: {
          zoom: x
        }
      })), v.zoomed.addEventListener('transitionend', function b() {
        v.original.classList.remove('medium-zoom-image--hidden'), document.body.removeChild(v.zoomed), v.zoomedHd && document.body.removeChild(v.zoomedHd), document.body.removeChild(w), v.zoomed.classList.remove('medium-zoom-image--opened'), v.template && document.body.removeChild(v.template), s = !1, v.zoomed.removeEventListener('transitionend', b), v.original.dispatchEvent(createCustomEvent('medium-zoom:closed', {
          detail: {
            zoom: x
          }
        })), v.original = null, v.zoomed = null, v.zoomedHd = null, v.template = null, a(x);
      });
    });
  },
      n = function () {
    var a = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {},
        b = a.target;
    return v.original ? m() : l({
      target: b
    });
  },
      o = function () {
    return u;
  },
      p = function () {
    return q;
  },
      q = [],
      r = [],
      s = !1,
      t = 0,
      u = c,
      v = {
    original: null,
    zoomed: null,
    zoomedHd: null,
    template: null
  };

  '[object Object]' === Object.prototype.toString.call(b) ? u = b : (b || 'string' == typeof b) && h(b), u = _extends({
    margin: 0,
    background: '#fff',
    scrollOffset: 40,
    container: null,
    template: null
  }, u);
  var w = createOverlay(u.background);
  document.addEventListener('click', d), document.addEventListener('keyup', function (a) {
    27 === (a.keyCode || a.which) && m();
  }), document.addEventListener('scroll', e), window.addEventListener('resize', m);
  var x = {
    open: l,
    close: m,
    toggle: n,
    update: f,
    clone: g,
    attach: h,
    detach: i,
    on: j,
    off: k,
    getOptions: o,
    getImages: p,
    getZoomedImage: function () {
      return v.original;
    }
  };
  return x;
};

function styleInject(a, b) {
  void 0 === b && (b = {});
  var c = b.insertAt;

  if (a && 'undefined' != typeof document) {
    var d = document.head || document.getElementsByTagName('head')[0],
        e = document.createElement('style');
    e.type = 'text/css', 'top' === c ? d.firstChild ? d.insertBefore(e, d.firstChild) : d.appendChild(e) : d.appendChild(e), e.styleSheet ? e.styleSheet.cssText = a : e.appendChild(document.createTextNode(a));
  }
}

var css = '.medium-zoom-overlay{bottom:0;left:0;opacity:0;position:fixed;right:0;top:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{cursor:pointer;cursor:zoom-out;position:relative;will-change:transform}';
styleInject('.medium-zoom-overlay{bottom:0;left:0;opacity:0;position:fixed;right:0;top:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{cursor:pointer;cursor:zoom-out;position:relative;will-change:transform}');
var _default = mediumZoom;
exports.default = _default;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _mediumZoom = _interopRequireDefault(require("medium-zoom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mediumZoom.default)(document.querySelector('#test'));
},{"medium-zoom":"../node_modules/medium-zoom/dist/medium-zoom.esm.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64271" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.map