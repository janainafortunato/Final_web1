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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\xampp\\htdocs\\Final_web1\\Final\\resources\\js\\app.js: Unterminated JSX contents (47:13)\n\n\u001b[0m \u001b[90m 45 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33mRoute\u001b[39m path\u001b[33m=\u001b[39m\u001b[32m\"/edit/:id\"\u001b[39m component\u001b[33m=\u001b[39m{\u001b[33mUpdateUsers_Filmes\u001b[39m} \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 46 | \u001b[39m      \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mRoute\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 47 | \u001b[39m    \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mRouter\u001b[39m\u001b[33m>\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m             \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 48 | \u001b[39m        document\u001b[33m.\u001b[39mgetElementById(\u001b[32m'crud-app'\u001b[39m))\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 49 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 50 | \u001b[39mrequire(\u001b[32m'./components/CreateFilmes'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n    at Object.raise (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:7012:17)\n    at Object.jsxReadToken (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:3753:20)\n    at Object.getTokenFromCode (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:4135:19)\n    at Object.nextToken (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:7232:12)\n    at Object.next (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:7161:10)\n    at Object.eat (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:7166:12)\n    at Object.expect (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:8391:10)\n    at Object.jsxParseClosingElementAt (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:4033:10)\n    at Object.jsxParseElementAt (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:4052:37)\n    at Object.jsxParseElementAt (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:4056:32)\n    at Object.jsxParseElementAt (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:4056:32)\n    at Object.jsxParseElement (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:4114:17)\n    at Object.parseExprAtom (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:4121:19)\n    at Object.parseExprSubscripts (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:9237:23)\n    at Object.parseMaybeUnary (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:9217:21)\n    at Object.parseExprOps (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:9083:23)\n    at Object.parseMaybeConditional (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:9056:23)\n    at Object.parseMaybeAssign (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:9015:21)\n    at Object.parseExprListItem (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:10331:18)\n    at Object.parseCallExpressionArguments (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:9434:22)\n    at Object.parseSubscript (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:9342:29)\n    at Object.parseSubscripts (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:9258:19)\n    at Object.parseExprSubscripts (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:9247:17)\n    at Object.parseMaybeUnary (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:9217:21)\n    at Object.parseExprOps (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:9083:23)\n    at Object.parseMaybeConditional (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:9056:23)\n    at Object.parseMaybeAssign (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:9015:21)\n    at Object.parseExpression (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:8965:23)\n    at Object.parseStatementContent (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:10819:23)\n    at Object.parseStatement (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:10690:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:11266:25)\n    at Object.parseBlockBody (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:11253:10)\n    at Object.parseTopLevel (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:10621:10)\n    at Object.parse (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:12131:10)\n    at parse (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\parser\\lib\\index.js:12182:38)\n    at parser (C:\\xampp\\htdocs\\Final_web1\\Final\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:187:34)");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp\htdocs\Final_web1\Final\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\Final_web1\Final\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });