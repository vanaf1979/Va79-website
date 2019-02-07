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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/themes/vanaf1979/src/js/sw.js":
/*!*******************************************!*\
  !*** ./app/themes/vanaf1979/src/js/sw.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
** Google Workbox.
** Routing and Caching of resources.
** https://developers.google.com/web/tools/workbox
*/
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');
var vaCacheName = 'va79-cache';
var vaRevision = '00001';

if (workbox) {
  /*
  ** PRECACHE:
  */
  workbox.precaching.precacheAndRoute([{
    url: '/wp-content/themes/va79-base-theme/public/js/app.js',
    revision: vaRevision
  }, {
    url: '/wp-content/themes/va79-base-theme/public/css/header.css',
    revision: vaRevision
  }, {
    url: '/wp-content/themes/va79-base-theme/public/css/footer.css',
    revision: vaRevision
  }]);
  /*
  ** ROUTE: Ignore preview and admin areas.
  */

  workbox.routing.registerRoute(new RegExp('/wp-admin(.*)|(.*)preview=true(.*)/'), workbox.strategies.networkOnly());
  /*
  ** ROUTE: All Wordpress pretty urls.
  */

  workbox.routing.registerRoute(new RegExp('^/([\w\/]*(\.html)?)$'), workbox.strategies.staleWhileRevalidate({
    cacheName: vaCacheName + '-pages',
    plugins: [new workbox.expiration.Plugin({
      maxEntries: 100,
      maxAgeSeconds: 7 * 24 * 60 * 60
    })]
  }));
  /*
  ** ROUTE: All Js files.
  */

  workbox.routing.registerRoute(new RegExp('.*\.js'), workbox.strategies.staleWhileRevalidate({
    cacheName: vaCacheName + '-js',
    plugins: [new workbox.expiration.Plugin({
      maxEntries: 100,
      maxAgeSeconds: 7 * 24 * 60 * 60
    })]
  }));
  /*
  ** ROUTE: All Css files.
  */

  workbox.routing.registerRoute(new RegExp('.*\.css'), workbox.strategies.staleWhileRevalidate({
    cacheName: vaCacheName + '-css',
    plugins: [new workbox.expiration.Plugin({
      maxEntries: 100,
      maxAgeSeconds: 7 * 24 * 60 * 60
    })]
  }));
  /*
  ** ROUTE: All Image files.
  */

  workbox.routing.registerRoute(new RegExp('.*\.(?:png|jpg|jpeg|svg|gif)'), workbox.strategies.staleWhileRevalidate({
    cacheName: vaCacheName + '-img',
    plugins: [new workbox.expiration.Plugin({
      maxEntries: 50,
      maxAgeSeconds: 7 * 24 * 60 * 60
    })]
  }));
  /*
  ** ROUTE: Custom fonts.
  */

  workbox.routing.registerRoute(new RegExp('/(.*)\.(?:woff|eot|woff2|ttf|svg)$/'), workbox.strategies.cacheFirst({
    cacheName: vaCacheName + '-fonts',
    cacheExpiration: {
      maxEntries: 20
    },
    cacheableResponse: {
      statuses: [0, 200]
    }
  }));
  /*
  ** ROUTE: All Google fonts.
  */

  workbox.routing.registerRoute(new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'), workbox.strategies.cacheFirst({
    cacheName: vaCacheName + '-gfonts',
    plugins: [new workbox.expiration.Plugin({
      maxEntries: 30,
      maxAgeSeconds: 7 * 24 * 60 * 60
    })]
  }));
  /*
  ** ROUTE: Font Awesome fonts.
  */

  workbox.routing.registerRoute(new RegExp('https://maxcdn.bootstrapcdn.com/font-awesome/(.*)'), workbox.strategies.cacheFirst({
    cacheName: vaCacheName + '-fafonts',
    plugins: [new workbox.expiration.Plugin({
      maxEntries: 30,
      maxAgeSeconds: 7 * 24 * 60 * 60
    })]
  }));
  /*
  ** GA: Offline Google Analytics handling.
  */

  workbox.googleAnalytics.initialize();
}

/***/ }),

/***/ 1:
/*!*************************************************!*\
  !*** multi ./app/themes/vanaf1979/src/js/sw.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/saskia/Documents/repos/websites/va79-live-site/app/themes/vanaf1979/src/js/sw.js */"./app/themes/vanaf1979/src/js/sw.js");


/***/ })

/******/ });