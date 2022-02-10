// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kEDXg":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "9f63684934544c0f";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"kNx3z":[function(require,module,exports) {
var _hamburger = require("./functions/hamburger");
var _lodges = require("./models/lodges");
var _calender = require("./models/calender");
var _bookings = require("./models/bookings");
window.onload = function() {
    _hamburger.hamburger();
    document.querySelectorAll(".name").forEach((items)=>{
        items.addEventListener("click", (e)=>{
            findIndex(e);
            document.getElementById("modal-container").style.display = "inline-flex";
            document.getElementById("modal-container").style.position = "fixed";
        });
    });
    document.getElementById("submit").addEventListener("click", searchRoom);
    document.getElementById("check-out").addEventListener("click", changeDate);
    document.getElementById("search").addEventListener("click", validate);
};
function findIndex(e) {
    let name = e.path[0].innerHTML;
    let index;
    for(let i = 0; i < _lodges.lodges.length; i++)if (_lodges.lodges[i].name === name) index = i;
    createModal(index);
}
function createModal(index) {
    if (document.getElementById("modal") === null) ;
    else document.getElementById("modal-container").innerHTML = "";
    let modal = document.createElement("div");
    let i = document.createElement("i");
    let image = document.createElement("div");
    let border = document.createElement("div");
    let textContainer = document.createElement("div");
    let h1 = document.createElement("h1");
    let ul = document.createElement("ul");
    let people = document.createElement("li");
    let button = document.createElement("button");
    let adults = document.createElement("p");
    let kids = document.createElement("p");
    for(let i1 = 0; i1 < _lodges.lodges[index].features.length; i1++){
        let li = document.createElement("li");
        li.innerText = `\u{1F418}  ${_lodges.lodges[index].features[i1]}`;
        ul.appendChild(li);
    }
    modal.id = "modal";
    i.className = "fas fa-times";
    i.id = "close-modal";
    image.id = "image";
    border.id = "border";
    textContainer.id = "text-container";
    people.id = "people";
    image.setAttribute("style", `background-image: url(${_lodges.lodges[index].url})`);
    button.innerHTML = "Boka";
    h1.innerHTML = _lodges.lodges[index].name;
    adults.innerHTML = `${_lodges.lodges[index].adults} vuxna`;
    people.appendChild(adults);
    if (_lodges.lodges[index].kids === 0) ;
    else {
        kids.innerHTML = `${_lodges.lodges[index].kids} barn`;
        people.appendChild(kids);
    }
    ul.appendChild(people);
    modal.appendChild(i);
    modal.appendChild(image);
    modal.appendChild(border);
    textContainer.appendChild(h1);
    textContainer.appendChild(ul);
    textContainer.appendChild(button);
    modal.appendChild(textContainer);
    document.getElementById("modal-container").appendChild(modal);
    document.getElementById("close-modal").addEventListener("click", ()=>{
        document.getElementById("modal-container").style.display = "none";
        document.getElementById("modal-container").style.position = "none";
    });
}
function searchRoom() {
    document.querySelector("main").style.display = "none";
    document.getElementById("booking").style.display = "block";
}
function validate() {
    document.getElementById("available-rooms").innerHTML = "";
    document.getElementById("validation-search").innerHTML = "";
    let checkIn = document.getElementById("check-in");
    let checkOut = document.getElementById("check-out");
    let adults = document.getElementById("adults");
    if (checkIn.value == "") {
        document.getElementById("validation-search").innerHTML = "Glöm inte incheckningsdatum";
        if (checkOut.value == "") {
            document.getElementById("validation-search").innerHTML = "Glöm inte incheckningsdatum & utcheckningsdatum";
            if (adults.value == "0") document.getElementById("validation-search").innerHTML = "Glöm inte incheckningsdatum & utcheckningsdatum & antal vuxna";
        } else if (adults.value == "0") document.getElementById("validation-search").innerHTML = "Glöm inte antal vuxna";
    } else if (checkOut.value == "") {
        document.getElementById("validation-search").innerHTML = "Glöm inte utcheckningsdatum";
        if (adults.value == "0") document.getElementById("validation-search").innerHTML = "Glöm inte utcheckningsdatum & antal vuxna";
    } else if (adults.value == "0") document.getElementById("validation-search").innerHTML = "Glöm inte antal vuxna";
    else if (checkIn.value == checkOut.value) document.getElementById("validation-search").innerHTML = "Du måste boka minst en natt!";
    else displayRooms(checkIn, checkOut);
}
function dateRange(startDate, endDate, steps = 1) {
    let dateArray = [];
    let currentDate = new Date(startDate);
    while(currentDate <= new Date(endDate)){
        dateArray.push(new Date(currentDate).getDate());
        // Use UTC date to prevent problems with time zones and DST
        currentDate.setUTCDate(currentDate.getUTCDate() + steps);
    }
    return dateArray;
}
function monthRange(startDate, endDate, steps = 1) {
    let monthArray = [];
    let currentDate = new Date(startDate);
    while(currentDate <= new Date(endDate)){
        monthArray.push(new Date(currentDate).getMonth());
        // Use UTC date to prevent problems with time zones and DST
        currentDate.setUTCDate(currentDate.getUTCDate() + steps);
    }
    return monthArray;
}
function displayRooms(checkIn, checkOut) {
    let checkOutValue = checkOut.value;
    let checkInValue = checkIn.value;
    const date1 = new Date(checkInValue);
    const date2 = new Date(checkOutValue);
    let oneDay = 86400000;
    let diffInTime = date2.getTime() - date1.getTime();
    let diffInDays = Math.round(diffInTime / oneDay);
    let dates = dateRange(checkInValue, checkOutValue);
    let months = monthRange(checkInValue, checkOutValue);
    let adultsSelect = document.getElementById("adults");
    let kidsSelect = document.getElementById("kids");
    for(let d = 0; d < dates.length; d++){
        for(let i = 0; i < _calender.rooms.length; i++){
            if (kidsSelect.value === "2" && _lodges.lodges[i].kids < 2) _calender.rooms[i].available = false;
            else if (kidsSelect.value === "1" && _lodges.lodges[i].kids === 0) _calender.rooms[i].available = false;
            else kidsSelect.value === "1" && _lodges.lodges[i].kids;
            if (months[d] == 0) {
                for(let x = 0; x < _calender.rooms[i].dates.january.length; x++)if (dates[d] == _calender.rooms[i].dates.january[x]) _calender.rooms[i].available = false;
            } else if (months[d] == 1) {
                for(let x = 0; x < _calender.rooms[i].dates.february.length; x++)if (dates[d] == _calender.rooms[i].dates.february[x]) _calender.rooms[i].available = false;
            } else if (months[d] == 2) {
                console.log(_calender.rooms[i].dates.march);
                for(let x = 0; x < _calender.rooms[i].dates.march.length; x++)if (dates[d] === _calender.rooms[i].dates.march[x]) _calender.rooms[i].available = false;
            } else if (months[d] == 3) {
                for(let x = 0; x < _calender.rooms[i].dates.april.length; x++)if (dates[d] === _calender.rooms[i].dates.april[x]) _calender.rooms[i].available = false;
            } else if (months[d] == 4) {
                for(let x = 0; x < _calender.rooms[i].dates.may.length; x++)if (dates[d] === _calender.rooms[i].dates.may[x]) _calender.rooms[i].available = false;
            } else if (months[d] == 5) {
                for(let x = 0; x < _calender.rooms[i].dates.june.length; x++)if (dates[d] === _calender.rooms[i].dates.june[x]) _calender.rooms[i].available = false;
            } else if (months[d] == 6) {
                for(let x = 0; x < _calender.rooms[i].dates.july.length; x++)if (dates[d] === _calender.rooms[i].dates.july[x]) _calender.rooms[i].available = false;
            } else if (months[d] == 7) {
                for(let x = 0; x < _calender.rooms[i].dates.august.length; x++)if (dates[d] === _calender.rooms[i].dates.august[x]) _calender.rooms[i].available = false;
            } else if (months[d] == 8) {
                for(let x = 0; x < _calender.rooms[i].dates.september.length; x++)if (dates[d] === _calender.rooms[i].dates.september[x]) _calender.rooms[i].available = false;
            } else if (months[d] == 9) {
                for(let x = 0; x < _calender.rooms[i].dates.october.length; x++)if (dates[d] === _calender.rooms[i].dates.october[x]) _calender.rooms[i].available = false;
            } else if (months[d] == 10) {
                for(let x = 0; x < _calender.rooms[i].dates.november.length; x++)if (dates[d] === _calender.rooms[i].dates.november[x]) _calender.rooms[i].available = false;
            } else {
                for(let x = 0; x < _calender.rooms[i].dates.december.length; x++)if (dates[d] === _calender.rooms[i].dates.december[x]) _calender.rooms[i].available = false;
            }
        }
        createDisplay(diffInDays, checkInValue, checkOutValue, kidsSelect, adultsSelect);
    }
}
function createDisplay(diffInDays, checkInValue, checkOutValue, kidsSelect, adultsSelect) {
    document.getElementById("available-rooms").innerHTML = "";
    for(let i = 0; i < _calender.rooms.length; i++)//index is same for lodges and rooms
    if (_calender.rooms[i].available === true) {
        let div = document.createElement("div");
        let roomImage = document.createElement("div");
        let roomText = document.createElement("div");
        let h1 = document.createElement("h1");
        let ul = document.createElement("ul");
        let price = document.createElement("div");
        let p = document.createElement("p");
        let button = document.createElement("button");
        let adults = document.createElement("p");
        let people = document.createElement("li");
        for(let x = 0; x < _lodges.lodges[i].features.length; x++){
            let li = document.createElement("li");
            li.innerHTML = _lodges.lodges[i].features[x];
            ul.appendChild(li);
        }
        roomImage.id = "room-image";
        roomText.id = "room-text";
        price.id = "price";
        div.id = "room";
        h1.innerHTML = _lodges.lodges[i].name;
        roomImage.setAttribute("style", `background-image: url(${_lodges.lodges[i].url})`);
        button.innerHTML = "BOKA";
        button.setAttribute("type", "button");
        p.innerHTML = `${_lodges.lodges[i].price * diffInDays} kr`;
        adults.innerHTML = `${_lodges.lodges[i].adults} vuxna`;
        people.id = "adults-kids";
        people.appendChild(adults);
        if (_lodges.lodges[i].kids === 0) ;
        else {
            let kids = document.createElement("p");
            kids.innerHTML = `${_lodges.lodges[i].kids} barn`;
            people.appendChild(kids);
        }
        ul.appendChild(people);
        price.appendChild(p);
        price.appendChild(button);
        roomText.appendChild(h1);
        roomText.appendChild(ul);
        div.appendChild(roomImage);
        div.appendChild(roomText);
        div.appendChild(price);
        document.getElementById("available-rooms").appendChild(div);
        button.addEventListener("click", function(event) {
            let index;
            let text = event.path[2].innerText;
            document.getElementById("booking").style.display = "none";
            document.getElementById("book").style.display = "block";
            if (text.includes(_calender.rooms[i].name)) {
                index = i;
                console.log(index);
            }
            book(index, diffInDays, checkInValue, checkOutValue, kidsSelect, adultsSelect);
        });
    }
}
function changeDate() {
    let checkIn = document.getElementById("check-in");
    document.getElementById("check-out").setAttribute("min", checkIn.value);
}
function book(index, diffInDays, checkInValue, checkOutValue, kidsSelect, adultsSelect) {
    document.getElementById("booking-button").addEventListener("click", ()=>{
        console.log("hje");
        createBooking(index, diffInDays, checkInValue, checkOutValue, kidsSelect, adultsSelect);
    });
    let roomImage = document.createElement("div");
    let roomText = document.createElement("div");
    let h1 = document.createElement("h1");
    let ul = document.createElement("ul");
    let price = document.createElement("div");
    let p = document.createElement("p");
    let adults = document.createElement("p");
    let people = document.createElement("li");
    for(let x = 0; x < _lodges.lodges[index].features.length; x++){
        let li = document.createElement("li");
        li.innerHTML = _lodges.lodges[index].features[x];
        ul.appendChild(li);
    }
    roomImage.id = "room-image";
    roomText.id = "room-text";
    price.id = "price";
    h1.innerHTML = _lodges.lodges[index].name;
    roomImage.setAttribute("style", `background-image: url(${_lodges.lodges[index].url})`);
    p.innerHTML = `${_lodges.lodges[index].price * diffInDays} kr`;
    adults.innerHTML = `${_lodges.lodges[index].adults} vuxna`;
    people.id = "adults-kids";
    people.appendChild(adults);
    if (_lodges.lodges[index].kids === 0) ;
    else {
        let kids = document.createElement("p");
        kids.innerHTML = `${_lodges.lodges[index].kids} barn`;
        people.appendChild(kids);
    }
    ul.appendChild(people);
    price.appendChild(p);
    roomText.appendChild(h1);
    roomText.appendChild(ul);
    document.getElementById("choosen-room").appendChild(roomImage);
    document.getElementById("choosen-room").appendChild(roomText);
    document.getElementById("choosen-room").appendChild(price);
}
function createBooking(index, diffInDays, checkInValue, checkOutValue, kidsSelect, adultsSelect) {
    let firstname = document.getElementById("firstname");
    let surname = document.getElementById("surname");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");
    if (firstname.value == "") {
        document.getElementById("required").innerHTML = "Glöm inte ditt förnamn";
        if (surname.value == "") {
            document.getElementById("required").innerHTML = "Glöm inte ditt förnamn & efternamn";
            if (email.value == "") {
                document.getElementById("required").innerHTML = "Glöm inte ditt förnamn, efternamn & email";
                if (phone.value == "") document.getElementById("required").innerHTML = "Glöm inte ditt förnamn, efternamn, email & telefonnummer";
            }
        } else if (email.value == "") {
            document.getElementById("required").innerHTML = "Glöm inte ditt förnamn & email";
            if (phone.value == "") document.getElementById("required").innerHTML = "Glöm inte ditt förnamnm, email & telefonnummer";
        } else if (phone.value == "") document.getElementById("required").innerHTML = "Glöm inte ditt förnamn & telefonnummer";
    } else if (surname.value == "") {
        document.getElementById("required").innerHTML = "Glöm inte ditt efternamn";
        if (email.value == "") {
            document.getElementById("required").innerHTML = "Glöm inte din efternamn & email";
            if (phone.value == "") document.getElementById("required").innerHTML = "Glöm inte din efternamn, email & telefonnummer";
        }
    } else if (email.value == "") {
        document.getElementById("required").innerHTML = "Glöm inte din email";
        if (phone.value == "") document.getElementById("required").innerHTML = "Glöm inte din email & telefonnummer";
    } else if (phone.value == "") document.getElementById("required").innerHTML = "Glöm inte ditt telefonnummer";
    else {
        let newBook = new _bookings.bookRoom(checkInValue, checkOutValue, diffInDays, adultsSelect.value, kidsSelect.value, firstname.value, surname.value, email.value, phone.value);
        console.log(newBook);
        if (!localStorage.getItem("bookRoomList")) localStorage.setItem("bookRoomList", "[]");
        let bookRoomListArray = localStorage.getItem("bookRoomList");
        let localStorageArray = JSON.parse(bookRoomListArray);
        localStorageArray.push(newBook);
        let localStorageArrayString = JSON.stringify(localStorageArray);
        localStorage.setItem("bookRoomList", localStorageArrayString);
    }
}

},{"./functions/hamburger":"bRI4k","./models/lodges":"bXSug","./models/calender":"1zyHa","./models/bookings":"b36SE"}],"bRI4k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hamburger", ()=>hamburger
);
function hamburger() {
    document.getElementById("bars").addEventListener("click", ()=>{
        document.getElementById("links-container").style.display = "block";
    });
    document.getElementById("close").addEventListener("click", ()=>{
        document.getElementById("links-container").style.display = "none";
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bXSug":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "lodges", ()=>lodges
);
let lodges = [
    {
        name: "Baobabs lodge",
        adults: 2,
        kids: 2,
        features: [
            "Bo på vår resort och ha fler komforter!",
            "Trädkoja",
            "Privat badrum",
            "Stor privat balkong", 
        ],
        url: "https://i.ibb.co/sJCx1YT/room1ok.jpg",
        price: 4500
    },
    {
        name: "Giza lodge",
        adults: 2,
        kids: 0,
        features: [
            "Bo på savannen och se djuren från ditt fönster!",
            "Delat badrum",
            "Privat terass med sittarea", 
        ],
        url: "https://i.ibb.co/HppWLph/room17.jpg",
        price: 2000
    },
    {
        name: "Okavango lodge",
        adults: 2,
        kids: 1,
        features: [
            "Bo på savannen och se djuren från ditt fönster!",
            "Delat badrum",
            "Privat terass", 
        ],
        url: "https://i.ibb.co/h23g5tR/room7.jpg",
        price: 3000
    },
    {
        name: "Tiébélé lodge",
        adults: 2,
        kids: 0,
        features: [
            "Bo på savannen och se djuren från ditt tält!",
            "Privat badrum",
            "Privat terass", 
        ],
        url: "https://i.ibb.co/7Gn2SNJ/room13.jpg",
        price: 2500
    },
    {
        name: "Abuja lodge",
        adults: 2,
        kids: 2,
        features: [
            "Bo på savannen och se djuren från ditt fönster!",
            "Delat badrum",
            "Privat terass i tre riktningar", 
        ],
        url: "https://i.ibb.co/Tm11Sy5/room19.jpg",
        price: 4500
    },
    {
        name: "Kakum lodge",
        adults: 2,
        kids: 2,
        features: [
            "Bo på vår resort i den lyxigaste sviten!",
            "Privat badrum",
            "Stor privat terass i tre riktningar",
            "Privat pool", 
        ],
        url: "https://i.ibb.co/DbGbSR8/room4.jpg",
        price: 5500
    },
    {
        name: "Bo-Kaap lodge",
        adults: 2,
        kids: 0,
        features: [
            "Bo på savannen och se djuren från ditt fönster!",
            "Delat badrum",
            "Privat terass", 
        ],
        url: "https://i.ibb.co/dkrDH6y/room8.jpg",
        price: 2200
    }, 
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1zyHa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rooms", ()=>rooms
);
let rooms = [
    {
        name: "Baobabs lodge",
        available: true,
        dates: {
            january: [
                12,
                13,
                14,
                24,
                25
            ],
            february: [
                1,
                2,
                3,
                27,
                28,
                29
            ],
            march: [
                10,
                11,
                12
            ],
            april: [
                20,
                21,
                22,
                23
            ],
            may: [
                5,
                6,
                7,
                13,
                14,
                24,
                25
            ],
            june: [
                12,
                13,
                14
            ],
            july: [
                3,
                4,
                5,
                20,
                21,
                22
            ],
            august: [
                5,
                6,
                28,
                29,
                30
            ],
            september: [
                4,
                5,
                6,
                23,
                24,
                25
            ],
            october: [
                11,
                12,
                13
            ],
            november: [
                1,
                2,
                3
            ],
            december: [
                20,
                21,
                22
            ]
        }
    },
    {
        name: "Giza lodge",
        available: true,
        dates: {
            january: [
                10,
                11,
                12
            ],
            february: [
                10,
                11,
                13,
                14
            ],
            march: [
                5,
                6,
                7,
                24,
                25
            ],
            april: [
                28,
                29,
                30
            ],
            may: [
                1,
                2,
                3
            ],
            june: [
                1,
                2,
                3,
                27,
                28,
                29
            ],
            july: [
                20,
                21,
                22
            ],
            august: [
                20,
                21,
                22,
                23
            ],
            september: [
                10,
                11,
                12,
                13
            ],
            october: [
                4,
                5,
                6,
                24,
                25
            ],
            november: [
                5,
                6,
                13,
                14,
                24,
                25
            ],
            december: [
                3,
                4,
                5,
                20,
                21
            ]
        }
    },
    {
        name: "Okavango lodge",
        available: true,
        dates: {
            january: [
                10,
                11,
                12,
                13
            ],
            february: [
                5,
                6,
                7,
                13,
                14,
                15
            ],
            march: [
                20,
                21
            ],
            april: [
                1,
                2,
                3
            ],
            may: [
                18,
                19,
                12,
                29,
                30
            ],
            june: [
                1,
                2,
                3
            ],
            july: [
                8,
                9,
                10
            ],
            august: [
                1,
                2,
                29,
                30
            ],
            september: [
                15,
                16,
                23,
                24
            ],
            october: [
                24,
                25
            ],
            november: [
                5,
                6
            ],
            december: [
                30,
                31
            ]
        }
    },
    {
        name: "Tiébélé lodge",
        available: true,
        dates: {
            january: [
                1,
                2,
                3,
                4,
                12,
                13,
                14,
                28,
                29
            ],
            february: [
                6,
                7,
                8
            ],
            march: [
                19,
                20,
                30
            ],
            april: [
                1,
                2,
                26,
                27
            ],
            may: [
                16,
                17,
                18,
                29,
                30
            ],
            june: [
                1,
                2
            ],
            july: [
                5,
                6
            ],
            august: [
                30,
                31
            ],
            september: [
                17,
                18
            ],
            october: [
                19,
                20,
                21
            ],
            november: [
                5,
                6,
                7
            ],
            december: [
                1,
                2,
                3
            ]
        }
    },
    {
        name: "Abuja lodge",
        available: true,
        dates: {
            january: [
                5,
                6,
                7,
                8
            ],
            february: [
                1,
                2,
                3,
                27,
                28,
                29
            ],
            march: [
                1,
                2,
                3
            ],
            april: [
                5,
                6,
                7
            ],
            may: [
                18,
                19,
                20,
                29,
                30
            ],
            june: [
                1,
                2,
                3
            ],
            july: [
                28,
                29,
                30
            ],
            august: [
                16,
                17,
                18,
                31
            ],
            september: [
                1,
                21,
                22
            ],
            october: [
                1,
                2,
                19,
                20
            ],
            november: [
                17,
                18,
                19
            ],
            december: [
                3,
                4
            ]
        }
    },
    {
        name: "Kakum lodge",
        available: true,
        dates: {
            january: [
                10,
                11,
                31
            ],
            february: [
                1,
                17,
                18,
                19
            ],
            march: [
                5,
                6,
                7
            ],
            april: [
                25,
                26,
                27,
                28
            ],
            may: [
                1,
                2,
                3,
                10,
                11
            ],
            june: [],
            july: [
                9,
                10
            ],
            august: [
                3,
                4
            ],
            september: [
                29,
                30
            ],
            october: [
                1,
                2
            ],
            november: [
                14,
                15,
                16
            ],
            december: [
                2,
                3,
                7,
                8
            ]
        }
    },
    {
        name: "Bo-Kaap lodge",
        available: true,
        dates: {
            january: [],
            february: [
                13,
                14
            ],
            march: [
                17,
                18,
                19
            ],
            april: [
                11,
                12,
                13
            ],
            may: [
                3,
                4,
                25,
                26
            ],
            june: [
                1,
                2,
                3
            ],
            july: [
                13,
                14,
                15
            ],
            august: [
                23,
                24
            ],
            september: [
                11,
                12
            ],
            october: [
                4,
                5,
                6
            ],
            november: [
                27,
                28,
                29
            ],
            december: [
                27,
                28
            ]
        }
    }, 
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"b36SE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bookRoom", ()=>bookRoom
);
parcelHelpers.export(exports, "bookActivity", ()=>bookActivity
);
class bookRoom {
    constructor(checkIn, checkOut, numberOfNights, adults, kids, firstname, surname, email, phone){
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.numberOfNights = numberOfNights;
        this.adults = adults;
        this.kids = kids;
        this.firstname = firstname;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}
class bookActivity {
    constructor(date, activity, people){
        this.date = date;
        this.activity = activity;
        this.people = people;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["kEDXg","kNx3z"], "kNx3z", "parcelRequired00e")

//# sourceMappingURL=madeup.34544c0f.js.map
