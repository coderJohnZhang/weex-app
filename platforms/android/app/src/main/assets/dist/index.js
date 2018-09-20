// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*global Vue*/

/* weex initialized here, please do not move this line */
var router = __webpack_require__(1);
var App = __webpack_require__(55);
/* eslint-disable no-new */
new Vue(Vue.util.extend({
  el: '#root',
  router: router
}, App));
router.push('/');

/**
 *  路由相关
 */
router.beforeEach(function (to, from, next) {
  console.log("router beforeEach from path = " + from.path + ", to path = " + to.path);
  next();
});

router.afterEach(function (transition) {
  console.log("router afterEach");
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vueRouter = __webpack_require__(2);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _TestAPI = __webpack_require__(3);

var _TestAPI2 = _interopRequireDefault(_TestAPI);

var _Calculator = __webpack_require__(7);

var _Calculator2 = _interopRequireDefault(_Calculator);

var _Banner = __webpack_require__(11);

var _Banner2 = _interopRequireDefault(_Banner);

var _BottomNavigation = __webpack_require__(15);

var _BottomNavigation2 = _interopRequireDefault(_BottomNavigation);

var _Input = __webpack_require__(19);

var _Input2 = _interopRequireDefault(_Input);

var _Animation = __webpack_require__(23);

var _Animation2 = _interopRequireDefault(_Animation);

var _List = __webpack_require__(27);

var _List2 = _interopRequireDefault(_List);

var _Picker = __webpack_require__(31);

var _Picker2 = _interopRequireDefault(_Picker);

var _RecyclerView = __webpack_require__(35);

var _RecyclerView2 = _interopRequireDefault(_RecyclerView);

var _Scroller = __webpack_require__(39);

var _Scroller2 = _interopRequireDefault(_Scroller);

var _Waterfall = __webpack_require__(43);

var _Waterfall2 = _interopRequireDefault(_Waterfall);

var _WebSocket = __webpack_require__(47);

var _WebSocket2 = _interopRequireDefault(_WebSocket);

var _Storage = __webpack_require__(51);

var _Storage2 = _interopRequireDefault(_Storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*global Vue*/
Vue.use(_vueRouter2.default);

module.exports = new _vueRouter2.default({
  routes: [{
    path: '/',
    name: 'test',
    component: _TestAPI2.default
  }, {
    path: '/calculator',
    name: 'calculator',
    component: _Calculator2.default
  }, {
    path: '/banner',
    name: 'banner',
    component: _Banner2.default
  }, {
    path: '/tab',
    name: 'tab',
    component: _BottomNavigation2.default
  }, {
    path: '/input',
    name: 'input',
    component: _Input2.default
  }, {
    path: '/anim',
    name: 'anim',
    component: _Animation2.default
  }, {
    path: '/list',
    name: 'list',
    component: _List2.default
  }, {
    path: '/picker',
    name: 'picker',
    component: _Picker2.default
  }, {
    path: '/recycler',
    name: 'recycler',
    component: _RecyclerView2.default
  }, {
    path: '/scroller',
    name: 'scroller',
    component: _Scroller2.default
  }, {
    path: '/waterfall',
    name: 'waterfall',
    component: _Waterfall2.default
  }, {
    path: '/websocket',
    name: 'websocket',
    component: _WebSocket2.default
  }, {
    path: '/storage',
    name: 'storage',
    component: _Storage2.default
  }]
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
  * vue-router v3.0.1
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (process.env.NODE_ENV !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

function extend (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    process.env.NODE_ENV !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (process.env.NODE_ENV !== 'production') {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (process.env.NODE_ENV !== 'production') {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  window.history.replaceState({ key: getStateKey() }, '');
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (process.env.NODE_ENV !== 'production') {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          process.env.NODE_ENV !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  process.env.NODE_ENV !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.0.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = (VueRouter);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(4)
)

/* script */
__vue_exports__ = __webpack_require__(5)

/* template */
var __vue_template__ = __webpack_require__(6)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Offline\\weex-app\\src\\components\\TestAPI.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7b557848"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {
  "panel": {
    "width": "700",
    "height": "240",
    "marginTop": "25",
    "marginRight": "25",
    "marginBottom": "25",
    "marginLeft": "25",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "rgba(162,217,192,0.2)"
  },
  "button": {
    "width": "350",
    "backgroundColor": "#008cba",
    "border": "4px solid",
    "color": "#FFFFFF",
    "paddingTop": "20",
    "paddingRight": "40",
    "paddingBottom": "20",
    "paddingLeft": "40",
    "marginTop": "20",
    "marginRight": "20",
    "marginBottom": "20",
    "marginLeft": "20",
    "textAlign": "center",
    "textDecoration": "none",
    "display": "inline-block",
    "fontSize": "36"
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methods;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule("modal");
var batteryModule = weex.requireModule("batteryModule");
var globalEvent = weex.requireModule("globalEvent");

exports.default = {
  data: function data() {
    return {
      level: "-1",
      status: "unknown"
    };
  },

  methods: (_methods = {
    toComputer: function toComputer() {
      this.$router.push("calculator");
    },
    toBanner: function toBanner() {
      this.$router.push("banner");
    },
    toTab: function toTab() {
      this.$router.push("tab");
    },
    toLogin: function toLogin() {
      this.$router.push("input");
    }
  }, _defineProperty(_methods, "toLogin", function toLogin() {
    this.$router.push("input");
  }), _defineProperty(_methods, "toScroller", function toScroller() {
    this.$router.push("scroller");
  }), _defineProperty(_methods, "toAnim", function toAnim() {
    this.$router.push("anim");
  }), _defineProperty(_methods, "toList", function toList() {
    this.$router.push("list");
  }), _defineProperty(_methods, "toPicker", function toPicker() {
    this.$router.push("picker");
  }), _defineProperty(_methods, "toRecycler", function toRecycler() {
    this.$router.push("recycler");
  }), _defineProperty(_methods, "toWaterfall", function toWaterfall() {
    this.$router.push("waterfall");
  }), _defineProperty(_methods, "toWebSocket", function toWebSocket() {
    this.$router.push("websocket");
  }), _defineProperty(_methods, "storage", function storage() {
    this.$router.push("storage");
  }), _defineProperty(_methods, "nativeCall", function nativeCall() {
    var self = this;
    batteryModule.getBatteryLevel(function (data) {
      console.log("getBatteryLevel data = " + data);
      if (data == -1) {
        self.level = data;
      } else {
        self.level = data + "%";
        var level2 = batteryModule.getBatteryLevel2();
        if (level2 == -1) {
          self.level = level2;
        } else {
          self.level = level2 + "%";
        }
      }
    });
    console.log("battery level = " + this.level);
  }), _methods),
  created: function created(event) {
    var self = this;
    globalEvent.addEventListener("batteryStatus", function (e) {
      self.status = e.status;
      console.log("battery status = " + e.status);
    });
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', [_c('div', {
    staticClass: ["panel"]
  }, [_c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.toComputer
    }
  }, [_vm._v("计算器")])]), _c('div', {
    staticClass: ["panel"]
  }, [_c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.toBanner
    }
  }, [_vm._v("轮播效果")])]), _c('div', {
    staticClass: ["panel"]
  }, [_c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.toTab
    }
  }, [_vm._v("底部导航")])]), _c('div', {
    staticClass: ["panel"]
  }, [_c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.toLogin
    }
  }, [_vm._v("输入框")])]), _c('div', {
    staticClass: ["panel"]
  }, [_c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.toScroller
    }
  }, [_vm._v("Scroller")])]), _c('div', {
    staticClass: ["panel"]
  }, [_c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.toAnim
    }
  }, [_vm._v("动画")])]), _c('div', {
    staticClass: ["panel"]
  }, [_c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.toList
    }
  }, [_vm._v("列表")])]), _c('div', {
    staticClass: ["panel"]
  }, [_c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.toPicker
    }
  }, [_vm._v("日期选择")])]), _c('div', {
    staticClass: ["panel"]
  }, [_c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.toRecycler
    }
  }, [_vm._v("Recycle-list")])]), _c('div', {
    staticClass: ["panel"]
  }, [_c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.toWaterfall
    }
  }, [_vm._v("瀑布流")])]), _c('div', {
    staticClass: ["panel"]
  }, [_c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.toWebSocket
    }
  }, [_vm._v("WebSocket")])]), _c('div', {
    staticClass: ["panel"]
  }, [_c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.storage
    }
  }, [_vm._v("Storage")])]), _c('div', {
    staticClass: ["panel"]
  }, [_c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.nativeCall
    }
  }, [_vm._v("原生交互")]), _c('text', [_vm._v("当前系统电池电量：" + _vm._s(_vm.level))]), _c('text', [_vm._v("当前系统电池状态：" + _vm._s(_vm.status))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(8)
)

/* script */
__vue_exports__ = __webpack_require__(9)

/* template */
var __vue_template__ = __webpack_require__(10)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Offline\\weex-app\\src\\components\\Calculator.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-aaab03dc"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {
  "wraper": {
    "justifyContent": "center",
    "paddingTop": "5",
    "paddingRight": "5",
    "paddingBottom": "5",
    "paddingLeft": "5",
    "background": "linear-gradient(45deg, rgb(20, 20, 20) 0%, rgb(82, 79, 81) 100%)"
  },
  "row": {
    "flexDirection": "row"
  },
  "result": {
    "textAlign": "right",
    "backgroundColor": "#666666",
    "fontSize": "40",
    "color": "#FFFFFF",
    "height": "120",
    "paddingTop": "35",
    "paddingRight": "35",
    "paddingBottom": "35",
    "paddingLeft": "35",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5"
  },
  "btn": {
    "flex": 1,
    "textAlign": "center",
    "color": "#333333",
    "backgroundColor": "#eeeeee",
    "fontSize": "46",
    "height": "120",
    "paddingTop": "35",
    "paddingRight": "35",
    "paddingBottom": "35",
    "paddingLeft": "35",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5"
  },
  "btn-operator": {
    "backgroundColor": "#666699",
    "fontSize": "50",
    "color": "#FFFFFF"
  }
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var OP = ["+", "-", "*", "/"];
exports.default = {
  data: function data() {
    return {
      shouldClear: true,
      result: "",
      inputs: []
    };
  },

  methods: {
    input: function input(value) {
      if (this.shouldClear) {
        this.clear();
      }
      this.shouldClear = false;
      var inputs = this.inputs;
      var lastOne = inputs.length ? inputs[inputs.length - 1] : "";
      if (OP.indexOf(lastOne) > -1 && OP.indexOf(value) > -1) {
        return;
      }
      inputs.push(value);
      var buf = [];
      var char = "";
      for (var i = 0; i < inputs.length; i++) {
        char = inputs[i];
        if (OP.indexOf(char) > -1) {
          char = " " + char + " ";
        }
        buf.push(char);
      }
      this.result = buf.join("");
    },
    calculate: function calculate() {
      var result = eval(this.result);
      this.inputs = [result];
      this.result = result;
      this.shouldClear = true;
    },
    clear: function clear() {
      this.inputs = [];
      this.result = "";
    }
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wraper"]
  }, [_c('text', {
    staticClass: ["result"]
  }, [_vm._v(_vm._s(_vm.result))]), _c('div', {
    staticClass: ["row"]
  }, [_c('text', {
    staticClass: ["btn"],
    on: {
      "click": function($event) {
        _vm.input(1)
      }
    }
  }, [_vm._v("1")]), _c('text', {
    staticClass: ["btn"],
    on: {
      "click": function($event) {
        _vm.input(2)
      }
    }
  }, [_vm._v("2")]), _c('text', {
    staticClass: ["btn"],
    on: {
      "click": function($event) {
        _vm.input(3)
      }
    }
  }, [_vm._v("3")]), _c('text', {
    staticClass: ["btn", "btn-operator"],
    on: {
      "click": function($event) {
        _vm.input('+')
      }
    }
  }, [_vm._v("+")])]), _c('div', {
    staticClass: ["row"]
  }, [_c('text', {
    staticClass: ["btn"],
    on: {
      "click": function($event) {
        _vm.input(4)
      }
    }
  }, [_vm._v("4")]), _c('text', {
    staticClass: ["btn"],
    on: {
      "click": function($event) {
        _vm.input(5)
      }
    }
  }, [_vm._v("5")]), _c('text', {
    staticClass: ["btn"],
    on: {
      "click": function($event) {
        _vm.input(6)
      }
    }
  }, [_vm._v("6")]), _c('text', {
    staticClass: ["btn", "btn-operator"],
    on: {
      "click": function($event) {
        _vm.input('-')
      }
    }
  }, [_vm._v("-")])]), _c('div', {
    staticClass: ["row"]
  }, [_c('text', {
    staticClass: ["btn"],
    on: {
      "click": function($event) {
        _vm.input(7)
      }
    }
  }, [_vm._v("7")]), _c('text', {
    staticClass: ["btn"],
    on: {
      "click": function($event) {
        _vm.input(8)
      }
    }
  }, [_vm._v("8")]), _c('text', {
    staticClass: ["btn"],
    on: {
      "click": function($event) {
        _vm.input(9)
      }
    }
  }, [_vm._v("9")]), _c('text', {
    staticClass: ["btn", "btn-operator"],
    on: {
      "click": function($event) {
        _vm.input('*')
      }
    }
  }, [_vm._v("*")])]), _c('div', {
    staticClass: ["row"]
  }, [_c('text', {
    staticClass: ["btn"],
    on: {
      "click": function($event) {
        _vm.input(0)
      }
    }
  }, [_vm._v("0")]), _c('text', {
    staticClass: ["btn"],
    on: {
      "click": function($event) {
        _vm.input('.')
      }
    }
  }, [_vm._v(".")]), _c('text', {
    staticClass: ["btn"],
    on: {
      "click": _vm.clear
    }
  }, [_vm._v("AC")]), _c('text', {
    staticClass: ["btn", "btn-operator"],
    on: {
      "click": _vm.calculate
    }
  }, [_vm._v("=")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(12)
)

/* script */
__vue_exports__ = __webpack_require__(13)

/* template */
var __vue_template__ = __webpack_require__(14)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Offline\\weex-app\\src\\components\\Banner.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-ff942d88"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {
  "size": {
    "width": "750",
    "height": "500"
  },
  "slider": {
    "position": "relative"
  },
  "indicator": {
    "position": "absolute",
    "left": 0,
    "right": 0,
    "bottom": 0,
    "height": "60",
    "backgroundColor": "rgba(0,0,0,0.3)",
    "itemColor": "#dddddd",
    "itemSelectedColor": "#ffff00"
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      posters: ["https://gw.alicdn.com/tfs/TB1TKvQk79WBuNjSspeXXaz5VXa-900-1312.jpg", "https://gw.alicdn.com/tfs/TB1nDsrkYSYBuNjSspfXXcZCpXa-1080-1575.jpg", "https://gw.alicdn.com/tfs/TB1MqHJkVuWBuNjSszbXXcS7FXa-1080-1574.jpg", "https://gw.alicdn.com/tfs/TB1u1gjkY1YBuNjSszhXXcUsFXa-1080-1518.jpg"]
    };
  }
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      justifyContent: "center",
      backgroundColor: "rgba(0,50,50,0.7)"
    }
  }, [_c('slider', {
    staticClass: ["slider", "size"],
    attrs: {
      "autoPlay": "true"
    }
  }, [_vm._l((_vm.posters), function(src) {
    return _c('div', [_c('image', {
      staticClass: ["size"],
      attrs: {
        "resize": "cover",
        "src": src
      }
    })])
  }), _c('indicator', {
    staticClass: ["indicator"]
  })], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(16)
)

/* script */
__vue_exports__ = __webpack_require__(17)

/* template */
var __vue_template__ = __webpack_require__(18)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Offline\\weex-app\\src\\components\\BottomNavigation.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6120092f"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {
  "tabbar": {
    "flexDirection": "row",
    "backgroundColor": "#ff4563"
  },
  "tab": {
    "height": "120",
    "width": "150",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "active": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "backgroundColor": "rgb(218,59,85)",
    "transitionProperty": "left",
    "transitionDuration": 200,
    "transitionTimingFunction": "ease-in-out"
  },
  "@TRANSITION": {
    "active": {
      "property": "left",
      "duration": 200,
      "timingFunction": "ease-in-out"
    },
    "tab-panels": {
      "property": "left",
      "duration": 200,
      "timingFunction": "ease-in-out"
    }
  },
  "icon": {
    "width": "45",
    "height": "45"
  },
  "title": {
    "fontSize": "28",
    "color": "#ffffff",
    "marginTop": "10"
  },
  "tab-panels": {
    "position": "relative",
    "width": 3750,
    "flex": 1,
    "flexDirection": "row",
    "alignItems": "stretch",
    "backgroundColor": "#f5f5f5",
    "transitionProperty": "left",
    "transitionDuration": 200,
    "transitionTimingFunction": "ease-in-out"
  },
  "panel": {
    "width": "750",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "content": {
    "fontSize": "100",
    "color": "#707070"
  }
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      activeTab: 0,
      tabs: [{
        title: "首页",
        icon: "//gw.alicdn.com/tfs/TB19YESOVXXXXaNaXXXXXXXXXXX-45-45.png"
      }, {
        title: "耍帅",
        icon: "//gw.alicdn.com/tfs/TB1I2E9OVXXXXbFXVXXXXXXXXXX-45-45.png"
      }, {
        title: "旅行",
        icon: "//gw.alicdn.com/tfs/TB1gUhyPXXXXXX5XXXXXXXXXXXX-45-45.png"
      }, {
        title: "潮玩",
        icon: "//img.alicdn.com/tfs/TB1D4RzQFXXXXcoXpXXXXXXXXXX-45-45.png"
      }, {
        title: "穿搭",
        icon: "//gw.alicdn.com/tfs/TB1N1.6OVXXXXXqaXXXXXXXXXXX-45-45.png"
      }]
    };
  },

  computed: {
    panels: function panels() {
      return this.tabs.map(function (tab) {
        return { content: tab.title };
      });
    }
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: ["tab-panels"],
    style: {
      left: _vm.activeTab * -750 + 'px'
    }
  }, _vm._l((_vm.panels), function(panel, pi) {
    return _c('div', {
      key: pi,
      staticClass: ["panel"]
    }, [_c('text', {
      staticClass: ["content"]
    }, [_vm._v(_vm._s(panel.content))])])
  })), _c('div', {
    staticClass: ["tabbar"]
  }, [_c('div', {
    staticClass: ["tab", "active"],
    style: {
      left: _vm.activeTab * 150 + 'px'
    }
  }), _vm._l((_vm.tabs), function(tab, i) {
    return _c('div', {
      key: i,
      staticClass: ["tab"],
      on: {
        "click": function($event) {
          _vm.activeTab = i
        }
      }
    }, [_c('image', {
      staticClass: ["icon"],
      attrs: {
        "src": tab.icon
      }
    }), _c('text', {
      staticClass: ["title"]
    }, [_vm._v(_vm._s(tab.title))])])
  })], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(20)
)

/* script */
__vue_exports__ = __webpack_require__(21)

/* template */
var __vue_template__ = __webpack_require__(22)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Offline\\weex-app\\src\\components\\Input.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7c5058ea"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {
  "input": {
    "fontSize": "45",
    "width": "600",
    "marginTop": "50",
    "paddingTop": "25",
    "paddingBottom": "25",
    "paddingLeft": "20",
    "paddingRight": "20",
    "color": "#666666",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#0080ff"
  }
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule("modal");
exports.default = {
  methods: {
    oninput: function oninput(event) {
      modal.toast({
        message: "input: " + event.value,
        duration: 0.5
      });
    },
    onchange: function onchange(event) {
      modal.toast({
        message: "change: " + event.value,
        duration: 0.5
      });
    },
    onfocus: function onfocus(event) {
      console.log("focus:", event.value);
      modal.toast({
        message: "focus: " + event.value,
        duration: 0.5
      });
    },
    onblur: function onblur(event) {
      modal.toast({
        message: "blur: " + event.value,
        duration: 0.5
      });
    }
  }
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      justifyContent: "center",
      alignItems: "center"
    }
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "text",
      "placeholder": "text"
    },
    on: {
      "input": _vm.oninput,
      "change": _vm.onchange,
      "focus": _vm.onfocus,
      "blur": _vm.onblur
    }
  }), _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "password",
      "placeholder": "password"
    }
  }), _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "tel",
      "placeholder": "tel"
    }
  }), _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "url",
      "placeholder": "url"
    }
  }), _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "email",
      "placeholder": "email"
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(24)
)

/* script */
__vue_exports__ = __webpack_require__(25)

/* template */
var __vue_template__ = __webpack_require__(26)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Offline\\weex-app\\src\\components\\Animation.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3dc6aba4"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {
  "box": {
    "width": "250",
    "height": "250",
    "backgroundColor": "#dddddd"
  }
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

var animation = weex.requireModule("animation");
var modal = weex.requireModule("modal");

exports.default = {
  methods: {
    move: function move() {
      var testEl = this.$refs.test;
      animation.transition(testEl, {
        styles: {
          color: "#FF0000",
          transform: "translate(250px, 100px)",
          transformOrigin: "center center"
        },
        duration: 800, //ms
        timingFunction: "ease",
        delay: 0 //ms
      }, function () {
        modal.toast({ message: "animation finished." });
      });
    }
  }
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    ref: "test",
    staticClass: ["box"],
    on: {
      "click": _vm.move
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(28)
)

/* script */
__vue_exports__ = __webpack_require__(29)

/* template */
var __vue_template__ = __webpack_require__(30)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Offline\\weex-app\\src\\components\\List.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2473e0a4"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {
  "panel": {
    "width": "600",
    "height": "250",
    "marginLeft": "75",
    "marginTop": "35",
    "marginBottom": "35",
    "flexDirection": "column",
    "justifyContent": "center",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "rgba(162,217,192,0.2)"
  },
  "text": {
    "fontSize": "100",
    "textAlign": "center",
    "color": "#41b883"
  }
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule("modal");
var LOADMORE_COUNT = 4;

exports.default = {
  data: function data() {
    return {
      lists: [1, 2, 3, 4, 5]
    };
  },

  methods: {
    fetch: function fetch(event) {
      var _this = this;

      modal.toast({ message: "loadmore", duration: 1 });

      setTimeout(function () {
        var length = _this.lists.length;
        for (var i = length; i < length + LOADMORE_COUNT; ++i) {
          _this.lists.push(i + 1);
        }
      }, 800);
    }
  }
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    attrs: {
      "loadmoreoffset": "10"
    },
    on: {
      "loadmore": _vm.fetch
    }
  }, _vm._l((_vm.lists), function(num, i) {
    return _c('cell', {
      key: i,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["panel"]
    }, [_c('text', {
      staticClass: ["text"]
    }, [_vm._v(_vm._s(num))])])])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(32)
)

/* script */
__vue_exports__ = __webpack_require__(33)

/* template */
var __vue_template__ = __webpack_require__(34)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Offline\\weex-app\\src\\components\\Picker.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-68fdf19e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "group": {
    "flexDirection": "row",
    "justifyContent": "center",
    "marginBottom": "60",
    "alignItems": "center"
  },
  "label": {
    "fontSize": "40",
    "color": "#888888"
  },
  "title": {
    "fontSize": "80",
    "color": "#41b883"
  },
  "button": {
    "fontSize": "50",
    "width": "280",
    "color": "#41b883",
    "textAlign": "center",
    "paddingTop": "25",
    "paddingBottom": "25",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "rgba(162,217,192,0.2)"
  }
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//

var picker = weex.requireModule("picker");
exports.default = {
  data: function data() {
    return {
      value: ""
    };
  },

  methods: {
    pickDate: function pickDate() {
      var _this = this;

      picker.pickDate({
        value: this.value,
        max: "2029-11-28",
        min: "2005-11-28"
      }, function (event) {
        if (event.result === "success") {
          _this.value = event.data;
        }
      });
    }
  }
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["group"]
  }, [_c('text', {
    staticClass: ["label"]
  }, [_vm._v("Date: ")]), _c('text', {
    staticClass: ["title"]
  }, [_vm._v(_vm._s(_vm.value))])]), _c('div', {
    staticClass: ["group"]
  }, [_c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.pickDate
    }
  }, [_vm._v("Pick Date")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(36)
)

/* script */
__vue_exports__ = __webpack_require__(37)

/* template */
var __vue_template__ = __webpack_require__(38)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Offline\\weex-app\\src\\components\\RecyclerView.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5245db94"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = {
  "list": {
    "width": "750",
    "backgroundColor": "#f5f5f5"
  },
  "floor": {
    "marginBottom": "15",
    "backgroundColor": "#ffffff"
  },
  "title": {
    "fontSize": "40",
    "textAlign": "center",
    "paddingTop": "35",
    "paddingBottom": "25"
  },
  "desc": {
    "lines": 2,
    "color": "#999999",
    "fontSize": "30",
    "paddingLeft": "30",
    "paddingRight": "30"
  },
  "image-section": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "marginTop": "20"
  },
  "image": {
    "width": "245",
    "height": "245"
  },
  "comment": {
    "color": "#52bfe6",
    "fontSize": "32",
    "textAlign": "right",
    "paddingRight": "50",
    "marginTop": "25",
    "marginBottom": "20"
  }
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var dataset = [{
  type: "floor",
  title: "就造专属感，给孩子寻个座椅好玩伴",
  desc: "犹记得儿时的风筝带着斑斓的色彩在天空飘过；那小河里躲迷藏的鱼虾，还待着小伙伴们一起去捕捉，如今的孩童没有了这些简单且纯粹的娱乐项目，生活在高楼城市中的他们，该当怎样度过自己的童年才是美好的？",
  pictures: ["https://gw.alicdn.com/tfscom/i3/48292642/TB29OtIakz_F1JjSZFkXXcCaXXa_!!48292642.jpg_250x250q90s200.jpg", "https://gw.alicdn.com/imgextra/i4/706778912/TB2hvwSXBvBIuJjy1zeXXbGBpXa_!!706778912-0-beehive-scenes.jpg_250x250q90s200.jpg", "https://gw.alicdn.com/imgextra/i3/706778912/TB2wX.fcxz9F1JjSZFsXXaCGVXa_!!706778912-0-beehive-scenes.jpg_250x250q90s200.jpg"],
  count: 237
}, {
  type: "floor",
  title: "睡袍穿不对，脱光也不媚！",
  desc: "“Ihatemynightgown（我讨厌我的睡袍）.”经典电影《罗马假日》中，赫本饰演的安妮公主躺在梦幻的宫廷大床上，抱怨她身上那华丽的大睡袍臃肿不便，为公主的浪漫逃逸埋下伏笔。想象一下，男朋友刚刚",
  pictures: ["https://gw.alicdn.com/imgextra/i3/3044653839/TB2a_nAXgsSMeJjSspdXXXZ4pXa_!!3044653839-0-daren.jpg_250x250q90s200.jpg", "https://gw.alicdn.com/imgextra/i1/3044653839/TB2qrPCXiERMeJjSspiXXbZLFXa_!!3044653839-0-daren.jpg_250x250q90s200.jpg", "https://gw.alicdn.com/imgextra/i1/3044653839/TB2ySjuXgsSMeJjSspeXXa77VXa_!!3044653839-0-beehive-scenes.jpg_250x250q90s200.jpg"],
  count: 876
}, {
  type: "floor",
  title: "上天入海？运动相机帮你搞定",
  desc: "现如今相机好像成为了我们每个人必不可少的装备，不管是专业的相机还是我们可拍照的手机，我们使用到它的频率也越来越高。为了追求更好的拍摄质量，人们似乎也愿意花更多的钱去购买好的拍摄装备",
  pictures: ["https://gw.alicdn.com/tfscom/i3/462856946/TB2VzQswB4lpuFjy1zjXXcAKpXa_!!462856946.jpg_250x250q90s200.jpg", "https://gw.alicdn.com/tfscom/i2/2811920170/TB2rCqHpVXXXXcZXpXXXXXXXXXX_!!2811920170.png_250x250.jpg", "https://gw.alicdn.com/imgextra/i4/836552381/TB2c1q3aZSfF1JjSsplXXbrKFXa_!!836552381-0-beehive-scenes.jpg_250x250q90s200.jpg"],
  count: 59
}, {
  type: "floor",
  title: "关于培根的那些事，教你吃得门清",
  desc: "培根一直被认为是早餐的头盘，早上烤两片面包，平底锅煎一片培根、一个鸡蛋，和生菜一起夹在面包中，有荤有素，就是一顿丰富美味的西式早餐。培根的英文名是“Bacon”，原意是烟熏的猪肋条肉，或烟熏背脊肉",
  pictures: ["https://gw.alicdn.com/imgextra/i2/603964020/TB24zFbarwTMeJjSszfXXXbtFXa_!!603964020-0-daren.jpg_250x250q90s200.jpg", "https://gw.alicdn.com/imgextra/i2/603964020/TB2txtdarsTMeJjy1zcXXXAgXXa_!!603964020-0-daren.jpg_250x250q90s200.jpg", "https://gw.alicdn.com/tfscom/i3/1635378022/TB2plKDbFXXXXaTXpXXXXXXXXXX-1635378022.jpg_250x250q90s200.jpg"],
  count: 3576
}, {
  type: "floor",
  title: "轻奢风来袭，皮艺床打造典雅居室",
  desc: "对于追求生活高品质感的小伙伴来说，皮艺家具是展现其高格调的途径之一。想要营造出奢华质感的卧室环境，大气庄重的皮床当然是不错的选择。特别是简欧风或是美式古典风格的家居环境，如果配以皮艺床简直就是点睛之笔",
  pictures: ["https://gw.alicdn.com/imgextra/i2/787557947/TB2erNKawoQMeJjy0FoXXcShVXa_!!787557947-0-beehive-scenes.jpg_250x250q90s200.jpg", "https://gw.alicdn.com/imgextra/i1/787557947/TB2KANyaBUSMeJjy1zkXXaWmpXa_!!787557947-0-beehive-scenes.jpg_250x250q90s200.jpg", "https://gw.alicdn.com/imgextra/i3/787557947/TB2lwdGayERMeJjy0FcXXc7opXa_!!787557947-0-beehive-scenes.jpg_250x250q90s200.jpg"],
  count: 36
}];
exports.default = {
  data: function data() {
    var N = 10;
    var floors = [];
    while (N--) {
      floors.push.apply(floors, dataset);
    }
    return { floors: floors };
  }
};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('recycle-list', {
    staticClass: ["list"],
    appendAsTree: true,
    attrs: {
      "listData": _vm.floors,
      "bindingExpression": "floors",
      "alias": "item",
      "index": "i",
      "switch": "type",
      "append": "tree"
    }
  }, [_c('cell-slot', {
    key: {
      "@binding": "i"
    },
    appendAsTree: true,
    attrs: {
      "case": "floor",
      "append": "tree"
    }
  }, [_c('div', {
    staticClass: ["floor"]
  }, [_c('text', {
    staticClass: ["title"],
    attrs: {
      "value": {
        "@binding": "item.title"
      }
    }
  }), _c('text', {
    staticClass: ["desc"],
    attrs: {
      "lines": "2",
      "value": {
        "@binding": "item.desc"
      }
    }
  }), _c('div', {
    staticClass: ["image-section"]
  }, [_c('image', {
    key: {
      "@binding": "i"
    },
    staticClass: ["image"],
    attrs: {
      "src": {
        "@binding": "source"
      },
      "[[repeat]]": {
        "@expression": "item.pictures",
        "@alias": "source",
        "@index": "i"
      }
    }
  })]), _c('text', {
    staticClass: ["comment"],
    attrs: {
      "value": [{
        "@binding": "item.count"
      }, " 人说好"]
    }
  })])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(40)
)

/* script */
__vue_exports__ = __webpack_require__(41)

/* template */
var __vue_template__ = __webpack_require__(42)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Offline\\weex-app\\src\\components\\Scroller.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-53a5294a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = {
  "scroller": {
    "width": "700",
    "height": "700",
    "borderWidth": "3",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "marginTop": "100",
    "marginLeft": "25"
  },
  "row": {
    "height": "100",
    "justifyContent": "center",
    "paddingLeft": "30",
    "borderBottomWidth": "2",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#dddddd"
  },
  "text": {
    "fontSize": "45",
    "color": "#666666"
  },
  "btn-group": {
    "flexDirection": "row",
    "justifyContent": "center",
    "marginTop": "60"
  },
  "button": {
    "width": "200",
    "paddingTop": "20",
    "paddingBottom": "20",
    "fontSize": "40",
    "marginLeft": "30",
    "marginRight": "30",
    "textAlign": "center",
    "color": "#41b883",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "rgba(162,217,192,0.2)"
  }
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var dom = weex.requireModule("dom");
exports.default = {
  data: function data() {
    var rows = [];
    for (var i = 0; i < 30; i++) {
      rows.push("row " + i);
    }
    return { rows: rows };
  },

  methods: {
    goto: function goto(index) {
      dom.scrollToElement(this.$refs.item[index], {});
    }
  }
};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('scroller', {
    staticClass: ["scroller"]
  }, _vm._l((_vm.rows), function(name, index) {
    return _c('div', {
      key: index,
      ref: "item",
      refInFor: true,
      staticClass: ["row"]
    }, [_c('text', {
      staticClass: ["text"]
    }, [_vm._v(_vm._s(name))])])
  })), _c('div', {
    staticClass: ["btn-group"]
  }, [_c('text', {
    staticClass: ["button"],
    on: {
      "click": function($event) {
        _vm.goto(10)
      }
    }
  }, [_vm._v("Go to 10")]), _c('text', {
    staticClass: ["button"],
    on: {
      "click": function($event) {
        _vm.goto(20)
      }
    }
  }, [_vm._v("Go to 20")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(44)
)

/* script */
__vue_exports__ = __webpack_require__(45)

/* template */
var __vue_template__ = __webpack_require__(46)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Offline\\weex-app\\src\\components\\Waterfall.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-cb4b5b9c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = {
  "page": {
    "backgroundColor": "#efefef"
  },
  "refresh": {
    "height": 128,
    "width": 750,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "refreshText": {
    "color": "#888888",
    "fontWeight": "bold"
  },
  "indicator": {
    "color": "#888888",
    "height": 40,
    "width": 40,
    "marginRight": 30
  },
  "absolute": {
    "position": "absolute",
    "top": "0",
    "width": 750,
    "height": 377
  },
  "banner": {
    "height": 377,
    "flexDirection": "row"
  },
  "bannerInfo": {
    "width": 270,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "avatar": {
    "width": 148,
    "height": 108,
    "borderRadius": 54,
    "borderWidth": 4,
    "borderColor": "#ffffff",
    "marginBottom": 14
  },
  "name": {
    "fontWeight": "bold",
    "fontSize": 32,
    "color": "#ffffff",
    "lineHeight": 32,
    "textAlign": "center",
    "marginBottom": 16
  },
  "titleWrap": {
    "width": 100,
    "height": 24,
    "marginBottom": 10,
    "backgroundColor": "rgba(255,255,255,0.8)",
    "borderRadius": 12,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "title": {
    "fontSize": 20,
    "color": "#000000"
  },
  "bannerPhotoWrap": {
    "width": 449,
    "height": 305,
    "backgroundColor": "#ffffff",
    "borderRadius": 12,
    "marginTop": 35,
    "paddingTop": 12,
    "paddingRight": 12,
    "paddingBottom": 12,
    "paddingLeft": 12,
    "flexDirection": "row",
    "justifyContent": "space-between",
    "flexWrap": "wrap"
  },
  "bannerPhoto": {
    "width": 137,
    "height": 137,
    "marginBottom": 6
  },
  "stickyHeader": {
    "position": "sticky",
    "height": 94,
    "flexDirection": "row",
    "paddingBottom": 6
  },
  "stickyWrapper": {
    "flexDirection": "row",
    "backgroundColor": "#00cc99",
    "justifyContent": "center",
    "alignItems": "center",
    "flex": 1
  },
  "stickyTextImageWrapper": {
    "flex": 1,
    "justifyContent": "center",
    "alignItems": "center",
    "flexDirection": "row"
  },
  "stickyText": {
    "color": "#ffffff",
    "fontWeight": "bold",
    "fontSize": 32,
    "marginRight": 12
  },
  "stickyImage": {
    "width": 64,
    "height": 64,
    "borderRadius": 32
  },
  "cell": {
    "paddingTop": 6,
    "paddingBottom": 6
  },
  "item": {
    "backgroundColor": "#ffffff",
    "alignItems": "center"
  },
  "itemName": {
    "fontSize": 28,
    "color": "#333333",
    "lineHeight": 42,
    "textAlign": "left",
    "marginTop": 24
  },
  "itemPhoto": {
    "marginTop": 18,
    "width": 220,
    "height": 220,
    "marginBottom": 18
  },
  "itemDesc": {
    "fontSize": 24,
    "marginTop": 12,
    "marginRight": 12,
    "marginBottom": 12,
    "marginLeft": 12,
    "color": "#999999",
    "lineHeight": 36,
    "textAlign": "left"
  },
  "itemClickBehaviour": {
    "fontSize": 36,
    "color": "#00cc99",
    "lineHeight": 36,
    "textAlign": "center",
    "marginTop": 6,
    "marginLeft": 24,
    "marginRight": 24,
    "marginBottom": 30
  },
  "footer": {
    "height": 94,
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#00cc99"
  },
  "fixedItem": {
    "position": "fixed",
    "width": 78,
    "height": 78,
    "backgroundColor": "#00cc99",
    "right": 32,
    "bottom": 32,
    "borderRadius": 39,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "fixedText": {
    "fontSize": 32,
    "color": "#FFFFFF",
    "lineHeight": 32
  }
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    var items = [{
      src: "https://gw.alicdn.com/tps/TB1Jl1CPFXXXXcJXXXXXXXXXXXX-370-370.jpg",
      name: "Thomas Carlyle",
      desc: "Genius only means hard-working all one's life",
      behaviourName: "Change width",
      behaviour: "changeColumnWidth"
    }, {
      src: "https://gw.alicdn.com/tps/TB1Hv1JPFXXXXa3XXXXXXXXXXXX-370-370.jpg",
      desc: 'The man who has made up his mind to win will never say "impossible "',
      behaviourName: "Change gap",
      behaviour: "changeColumnGap"
    }, {
      src: "https://gw.alicdn.com/tps/TB1eNKuPFXXXXc_XpXXXXXXXXXX-370-370.jpg",
      desc: "There is no such thing as a great talent without great will - power",
      behaviourName: "Change count",
      behaviour: "changeColumnCount"
    }, {
      src: "https://gw.alicdn.com/tps/TB1DCh8PFXXXXX7aXXXXXXXXXXX-370-370.jpg",
      name: "Addison",
      desc: "Cease to struggle and you cease to live",
      behaviourName: "Show scrollbar",
      behaviour: "showScrollbar"
    }, {
      src: "https://gw.alicdn.com/tps/TB1ACygPFXXXXXwXVXXXXXXXXXX-370-370.jpg",
      desc: "A strong man will struggle with the storms of fate",
      behaviourName: "Listen appear",
      behaviour: "listenAppear"
    }, {
      src: "https://gw.alicdn.com/tps/TB1IGShPFXXXXaqXVXXXXXXXXXX-370-370.jpg",
      name: "Ruskin",
      desc: "Living without an aim is like sailing without a compass",
      behaviourName: "Set scrollable",
      behaviour: "setScrollable"
    }, {
      src: "https://gw.alicdn.com/tps/TB1xU93PFXXXXXHaXXXXXXXXXXX-240-240.jpg",
      behaviourName: "waterfall padding",
      behaviour: "setPadding"
    }, {
      src: "https://gw.alicdn.com/tps/TB19hu0PFXXXXaXaXXXXXXXXXXX-240-240.jpg",
      name: "Balzac",
      desc: "There is no such thing as a great talent without great will - power",
      behaviourName: "listen scroll",
      behaviour: "listenScroll"
    }, {
      src: "https://gw.alicdn.com/tps/TB1ux2vPFXXXXbkXXXXXXXXXXXX-240-240.jpg",
      behaviourName: "Remove cell",
      behaviour: "removeCell"
    }, {
      src: "https://gw.alicdn.com/tps/TB1tCCWPFXXXXa7aXXXXXXXXXXX-240-240.jpg",
      behaviourName: "Move cell",
      behaviour: "moveCell"
    }];

    var repeatItems = [];
    for (var i = 0; i < 3; i++) {
      repeatItems.push.apply(repeatItems, items);
    }

    return {
      padding: 0,
      refreshing: false,
      refreshText: "↓   pull to refresh...",
      columnCount: 2,
      columnGap: 12,
      columnWidth: "auto",
      contentOffset: "0",
      showHeader: true,
      showScrollbar: false,
      scrollable: true,
      showStickyHeader: false,
      appearImage: null,
      disappearImage: null,
      stickyHeaderType: "none",
      banner: {
        photos: [{
          src: "https://gw.alicdn.com/tps/TB1JyaCPFXXXXc9XXXXXXXXXXXX-140-140.jpg"
        }, {
          src: "https://gw.alicdn.com/tps/TB1MwSFPFXXXXbdXXXXXXXXXXXX-140-140.jpg"
        }, {
          src: "https://gw.alicdn.com/tps/TB1U8avPFXXXXaDXpXXXXXXXXXX-140-140.jpg"
        }, {
          src: "https://gw.alicdn.com/tps/TB17Xh8PFXXXXbkaXXXXXXXXXXX-140-140.jpg"
        }, {
          src: "https://gw.alicdn.com/tps/TB1cTmLPFXXXXXRXXXXXXXXXXXX-140-140.jpg"
        }, {
          src: "https://gw.alicdn.com/tps/TB1oCefPFXXXXbVXVXXXXXXXXXX-140-140.jpg"
        }]
      },
      items: repeatItems
    };
  },

  created: function created() {
    var _this = this;

    var self = this;
    setTimeout(function () {
      weex.requireModule("dom").getComponentRect(_this.$refs.fixed, function (result) {
        var x = result.size.left;
        var y = result.size.top;
        var width = result.size.width;
        var height = result.size.height;
        self.fixedRect = x + "|" + y + "|" + width + "|" + height;
      });
    }, 3000);
  },


  methods: {
    recylerScroll: function recylerScroll(e) {
      this.contentOffset = e.contentOffset.y;
    },
    loadmore: function loadmore(e) {
      console.log("receive loadmore event");
      this.$refs.waterfall.resetLoadmore();
    },
    showOrRemoveHeader: function showOrRemoveHeader() {
      this.showHeader = !this.showHeader;
    },
    onItemclick: function onItemclick(behaviour, index) {
      console.log("click..." + behaviour + " at index " + index);
      switch (behaviour) {
        case "changeColumnCount":
          this.changeColumnCount();
          break;
        case "changeColumnGap":
          this.changeColumnGap();
          break;
        case "changeColumnWidth":
          this.changeColumnWidth();
          break;
        case "showScrollbar":
          this.showOrHideScrollbar();
          break;
        case "listenAppear":
          this.listenAppearAndDisappear();
          break;
        case "setScrollable":
          this.setScrollable();
          break;
        case "setPadding":
          this.setRecyclerPadding();
          break;
        case "listenScroll":
          this.listenScrollEvent();
          break;
        case "removeCell":
          this.removeCell(index);
          break;
        case "moveCell":
          this.moveCell(index);
          break;
      }
    },

    itemAppear: function itemAppear(src) {
      this.appearImage = src;
    },

    itemDisappear: function itemDisappear(src) {
      this.disappearImage = src;
    },

    changeColumnCount: function changeColumnCount() {
      if (this.columnCount === 2) {
        this.columnCount = 3;
      } else {
        this.columnCount = 2;
      }
    },

    changeColumnGap: function changeColumnGap() {
      if (this.columnGap === 12) {
        this.columnGap = "normal";
      } else {
        this.columnGap = 12;
      }
    },

    changeColumnWidth: function changeColumnWidth() {
      if (this.columnWidth === "auto") {
        this.columnWidth = 600;
      } else {
        this.columnWidth = "auto";
      }
    },

    showOrHideScrollbar: function showOrHideScrollbar() {
      this.showScrollbar = !this.showScrollbar;
    },

    setScrollable: function setScrollable() {
      this.scrollable = !this.scrollable;
    },

    listenAppearAndDisappear: function listenAppearAndDisappear() {
      this.stickyHeaderType = this.stickyHeaderType === "appear" ? "none" : "appear";
    },

    listenScrollEvent: function listenScrollEvent() {
      this.stickyHeaderType = this.stickyHeaderType === "scroll" ? "none" : "scroll";
    },

    scrollToNext: function scrollToNext() {
      weex.requireModule("dom").scrollToElement(this.$refs.footer);
    },

    setRecyclerPadding: function setRecyclerPadding() {
      this.padding = this.padding == 0 ? 12 : 0;
    },

    removeCell: function removeCell(index) {
      this.items.splice(index, 1);
    },

    moveCell: function moveCell(index) {
      if (index == 0) {
        this.items.splice(this.items.length - 1, 0, this.items.splice(index, 1)[0]);
      } else {
        this.items.splice(0, 0, this.items.splice(index, 1)[0]);
      }
    },

    onrefresh: function onrefresh(event) {
      var _this2 = this;

      this.refreshing = true;
      this.refreshText = "loading...";
      setTimeout(function () {
        _this2.refreshing = false;
        _this2.refreshText = "↓   pull to refresh...";
      }, 2000);
    },
    onpullingdown: function onpullingdown(event) {
      console.log("${event.pullingDistance}");
      if (event.pullingDistance < -64) {
        this.refreshText = "↑   release to refresh...";
      } else {
        this.refreshText = "↓   pull to refresh...";
      }
    }
  }
};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('waterfall', {
    ref: "waterfall",
    staticClass: ["page"],
    style: {
      padding: _vm.padding
    },
    attrs: {
      "columnWidth": _vm.columnWidth,
      "columnCount": _vm.columnCount,
      "columnGap": _vm.columnGap,
      "showScrollbar": _vm.showScrollbar,
      "scrollable": _vm.scrollable,
      "loadmoreoffset": "3000"
    },
    on: {
      "scroll": _vm.recylerScroll,
      "loadmore": _vm.loadmore
    }
  }, [_c('refresh', {
    staticClass: ["refresh"],
    attrs: {
      "display": _vm.refreshing ? 'show' : 'hide'
    },
    on: {
      "refresh": _vm.onrefresh,
      "pullingdown": _vm.onpullingdown
    }
  }, [_c('loading-indicator', {
    staticClass: ["indicator"]
  }), _c('text', {
    staticClass: ["refreshText"]
  }, [_vm._v(_vm._s(_vm.refreshText))])]), (_vm.showHeader) ? _c('header', {
    ref: "header",
    staticClass: ["header"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', {
    staticClass: ["banner"]
  }, [_c('image', {
    staticClass: ["absolute"],
    attrs: {
      "src": "https://gw.alicdn.com/tps/TB1ESN1PFXXXXX1apXXXXXXXXXX-1000-600.jpg",
      "resize": "cover"
    }
  }), _c('div', {
    staticClass: ["bannerInfo"]
  }, [_c('image', {
    staticClass: ["avatar"],
    attrs: {
      "src": "https://gw.alicdn.com/tps/TB1EP9bPFXXXXbpXVXXXXXXXXXX-150-110.jpg",
      "resize": "cover"
    }
  }), _c('text', {
    staticClass: ["name"]
  }, [_vm._v("Adam Cat")]), _c('div', {
    staticClass: ["titleWrap"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("Genius")])])]), _c('div', {
    staticClass: ["bannerPhotoWrap"]
  }, _vm._l((_vm.banner.photos), function(photo) {
    return _c('image', {
      staticClass: ["bannerPhoto"],
      attrs: {
        "src": photo.src
      }
    })
  }))])]) : _vm._e(), _c('header', {
    staticClass: ["stickyHeader"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [(_vm.stickyHeaderType === 'none') ? _c('div', {
    staticClass: ["stickyWrapper"]
  }, [_c('text', {
    staticClass: ["stickyText"]
  }, [_vm._v("Sticky Header")])]) : _vm._e(), (_vm.stickyHeaderType === 'appear') ? _c('div', {
    staticClass: ["stickyWrapper"]
  }, [_c('div', {
    staticClass: ["stickyTextImageWrapper"]
  }, [_c('text', {
    staticClass: ["stickyText"]
  }, [_vm._v("Last Appear:")]), _c('image', {
    staticClass: ["stickyImage"],
    attrs: {
      "src": _vm.appearImage
    }
  })]), _c('div', {
    staticClass: ["stickyTextImageWrapper"]
  }, [_c('text', {
    staticClass: ["stickyText"]
  }, [_vm._v("Last Disappear:")]), _c('image', {
    staticClass: ["stickyImage"],
    attrs: {
      "src": _vm.disappearImage
    }
  })])]) : _vm._e(), (_vm.stickyHeaderType === 'scroll') ? _c('div', {
    staticClass: ["stickyWrapper"]
  }, [_c('text', {
    staticClass: ["stickyText"]
  }, [_vm._v("Content Offset:" + _vm._s(_vm.contentOffset))])]) : _vm._e()]), _vm._l((_vm.items), function(item, index) {
    return _c('cell', {
      key: item.src,
      ref: "index",
      refInFor: true,
      staticClass: ["cell"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["item"],
      on: {
        "click": function($event) {
          _vm.onItemclick(item.behaviour, index)
        },
        "appear": function($event) {
          _vm.itemAppear(item.src)
        },
        "disappear": function($event) {
          _vm.itemDisappear(item.src)
        }
      }
    }, [(item.name) ? _c('text', {
      staticClass: ["itemName"]
    }, [_vm._v(_vm._s(item.name))]) : _vm._e(), _c('image', {
      staticClass: ["itemPhoto"],
      attrs: {
        "src": item.src
      }
    }), (item.desc) ? _c('text', {
      staticClass: ["itemDesc"]
    }, [_vm._v(_vm._s(item.desc))]) : _vm._e(), (item.behaviourName) ? _c('text', {
      staticClass: ["itemClickBehaviour"]
    }, [_vm._v(" " + _vm._s(item.behaviourName))]) : _vm._e()])])
  }), _c('header', {
    ref: "footer",
    staticClass: ["footer"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', {
    staticClass: ["stickyText"]
  }, [_vm._v("Footer")])]), _c('div', {
    ref: "fixed",
    staticClass: ["fixedItem"],
    on: {
      "click": _vm.scrollToNext
    }
  }, [_c('text', {
    staticClass: ["fixedText"]
  }, [_vm._v("bot")])])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(48)
)

/* script */
__vue_exports__ = __webpack_require__(49)

/* template */
var __vue_template__ = __webpack_require__(50)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Offline\\weex-app\\src\\components\\WebSocket.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-24eeae87"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = {
  "input": {
    "fontSize": "40",
    "height": "80",
    "width": "600"
  },
  "button": {
    "fontSize": "36",
    "width": "150",
    "color": "#41b883",
    "textAlign": "center",
    "paddingTop": "25",
    "paddingBottom": "25",
    "borderWidth": "2",
    "borderStyle": "solid",
    "marginRight": "20",
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "rgba(162,217,192,0.2)"
  }
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var websocket = weex.requireModule("webSocket");
exports.default = {
  data: function data() {
    return {
      connectinfo: "",
      sendinfo: "",
      onopeninfo: "",
      onmessage: "",
      oncloseinfo: "",
      onerrorinfo: "",
      closeinfo: "",
      txtInput: "",
      navBarHeight: 88,
      title: "Navigator",
      dir: "examples",
      baseURL: ""
    };
  },

  methods: {
    connect: function connect() {
      var _this = this;

      websocket.WebSocket("ws://echo.websocket.org", "");
      this.onopeninfo = "connecting...";
      websocket.onopen = function (e) {
        _this.onopeninfo = "websocket open";
      };
      websocket.onmessage = function (e) {
        _this.onmessage = e.data;
      };
      websocket.onerror = function (e) {
        _this.onerrorinfo = e.data;
      };
      websocket.onclose = function (e) {
        _this.onopeninfo = "";
        _this.onerrorinfo = e.code;
      };
    },
    send: function send(e) {
      var input = this.$refs.input;
      input.blur();
      websocket.send(this.txtInput);
      this.sendinfo = this.txtInput;
    },
    oninput: function oninput(event) {
      this.txtInput = event.value;
    },
    close: function close(e) {
      websocket.close();
    }
  }
};

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', [_c('div', [_vm._m(0), _c('input', {
    ref: "input",
    staticClass: ["input"],
    attrs: {
      "type": "text",
      "placeholder": "please input message to send",
      "autofocus": "false",
      "value": ""
    },
    on: {
      "change": _vm.onchange,
      "input": _vm.oninput
    }
  }), _c('div', {
    staticStyle: {
      flexDirection: "row",
      justifyContent: "center"
    }
  }, [_c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.connect
    }
  }, [_vm._v("connect")]), _c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.send
    }
  }, [_vm._v("send")]), _c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.close
    }
  }, [_vm._v("close")])]), _vm._m(1), _c('text', {
    staticStyle: {
      color: "black",
      height: "80px"
    }
  }, [_vm._v(_vm._s(_vm.sendinfo))]), _vm._m(2), _c('text', {
    staticStyle: {
      color: "black",
      height: "80px"
    }
  }, [_vm._v(_vm._s(_vm.onopeninfo))]), _vm._m(3), _c('text', {
    staticStyle: {
      color: "black",
      height: "400px"
    }
  }, [_vm._v(_vm._s(_vm.onmessage))]), _vm._m(4), _c('text', {
    staticStyle: {
      color: "black",
      height: "80px"
    }
  }, [_vm._v(_vm._s(_vm.oncloseinfo))]), _vm._m(5), _c('text', {
    staticStyle: {
      color: "black",
      height: "80px"
    }
  }, [_vm._v(_vm._s(_vm.onerrorinfo))]), _vm._m(6), _c('text', {
    staticStyle: {
      color: "black",
      height: "80px"
    }
  }, [_vm._v(_vm._s(_vm.closeinfo))])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      backgroundColor: "#286090"
    }
  }, [_c('text', {
    staticClass: ["title"],
    staticStyle: {
      height: "80px",
      padding: "20px",
      color: "white"
    }
  }, [_vm._v("websocket")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      backgroundColor: "lightgray"
    }
  }, [_c('text', {
    staticClass: ["title"],
    staticStyle: {
      height: "80px",
      padding: "20px",
      color: "black"
    }
  }, [_vm._v("method = send")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      backgroundColor: "lightgray"
    }
  }, [_c('text', {
    staticClass: ["title"],
    staticStyle: {
      height: "80px",
      padding: "20px",
      color: "black"
    }
  }, [_vm._v("method = onopen")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      backgroundColor: "lightgray"
    }
  }, [_c('text', {
    staticClass: ["title"],
    staticStyle: {
      height: "80px",
      padding: "20px",
      color: "black"
    }
  }, [_vm._v("method = onmessage")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      backgroundColor: "lightgray"
    }
  }, [_c('text', {
    staticClass: ["title"],
    staticStyle: {
      height: "80px",
      padding: "20px",
      color: "black"
    }
  }, [_vm._v("method = onclose")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      backgroundColor: "lightgray"
    }
  }, [_c('text', {
    staticClass: ["title"],
    staticStyle: {
      height: "80px",
      padding: "20px",
      color: "black"
    }
  }, [_vm._v("method = onerror")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      backgroundColor: "lightgray"
    }
  }, [_c('text', {
    staticClass: ["title"],
    staticStyle: {
      height: "80px",
      padding: "20px",
      color: "black"
    }
  }, [_vm._v("method = close")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(52)
)

/* script */
__vue_exports__ = __webpack_require__(53)

/* template */
var __vue_template__ = __webpack_require__(54)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Offline\\weex-app\\src\\components\\Storage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-49087dca"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = {
  "panel": {
    "height": "100",
    "flexDirection": "column",
    "justifyContent": "center",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "rgba(162,217,192,0.2)"
  },
  "group": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "width": "650",
    "marginLeft": "50",
    "marginTop": "50",
    "marginBottom": "50"
  },
  "center": {
    "justifyContent": "center"
  },
  "text": {
    "fontSize": "50",
    "textAlign": "center",
    "paddingLeft": "25",
    "paddingRight": "25",
    "color": "#41b883"
  },
  "small": {
    "fontSize": "32",
    "paddingLeft": "35",
    "paddingRight": "35",
    "color": "#41b883"
  }
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var storage = weex.requireModule("storage");
var modal = weex.requireModule("modal");

exports.default = {
  data: function data() {
    return {
      keys: "[]",
      length: 0,
      state: "----"
    };
  },

  methods: {
    setItem: function setItem() {
      var _this = this;

      storage.setItem("name", "Hanks", function (event) {
        _this.state = "set success";
        console.log("set success");
      });
    },
    getItem: function getItem() {
      var _this2 = this;

      storage.getItem("name", function (event) {
        console.log("get value:", event.data);
        _this2.state = "value: " + event.data;
      });
    },
    removeItem: function removeItem() {
      var _this3 = this;

      storage.removeItem("name", function (event) {
        console.log("delete value:", event.data);
        _this3.state = "deleted";
      });
    },
    getAll: function getAll() {
      storage.getAllKeys(function (event) {
        // modal.toast({ message: event.result })
        if (event.result === "success") {
          modal.toast({
            message: "props: " + event.data.join(", ")
          });
        }
      });
    }
  }
};

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["list"]
  }, [_c('div', {
    staticClass: ["group", "center"]
  }, [_c('div', {
    staticClass: ["panel"]
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v(_vm._s(_vm.state))])])]), _c('div', {
    staticClass: ["group"]
  }, [_c('div', {
    staticClass: ["panel"]
  }, [_c('text', {
    staticClass: ["text"],
    on: {
      "click": _vm.setItem
    }
  }, [_vm._v("set")])]), _c('div', {
    staticClass: ["panel"]
  }, [_c('text', {
    staticClass: ["text"],
    on: {
      "click": _vm.getItem
    }
  }, [_vm._v("get")])]), _c('div', {
    staticClass: ["panel"]
  }, [_c('text', {
    staticClass: ["text"],
    on: {
      "click": _vm.removeItem
    }
  }, [_vm._v("remove")])]), _c('div', {
    staticClass: ["panel"]
  }, [_c('text', {
    staticClass: ["text"],
    on: {
      "click": _vm.getAll
    }
  }, [_vm._v("all")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(56)
)

/* script */
__vue_exports__ = __webpack_require__(57)

/* template */
var __vue_template__ = __webpack_require__(58)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Offline\\weex-app\\src\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1a4d8e3c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = {
  "view": {
    "flex": 1
  }
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  methods: {
    back: function back() {
      this.$router.back();
    }
  }
};

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    on: {
      "androidback": _vm.back
    }
  }, [_c('router-view', {
    staticClass: ["view"]
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);