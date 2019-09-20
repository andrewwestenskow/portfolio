module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Components/Layout.jsx":
/*!*******************************!*\
  !*** ./Components/Layout.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Layout_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Layout.scss */ "./styles/Layout.scss");
/* harmony import */ var _styles_Layout_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\andre\\Development-Projects\\portfolio\\Components\\Layout.jsx";








var Layout = function Layout(props) {
  _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faHome"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUser"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faLayerGroup"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faDesktop"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faEnvelopeOpenText"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faEnvelope"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPhone"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["fab"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faGamepad"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/#home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-label-hold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "nav-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon-hold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    id: "home-icon",
    className: "nav-icon",
    icon: "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/#about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-label-hold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "nav-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "About"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon-hold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    className: "nav-icon",
    icon: "user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/#portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-label-hold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "nav-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Projects"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon-hold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    className: "nav-icon",
    icon: "desktop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/#games",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-label-hold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "nav-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Games"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon-hold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    className: "nav-icon",
    icon: "gamepad",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/#stack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-label-hold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "nav-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Stack"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon-hold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    className: "nav-icon",
    icon: "layer-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/#contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-label-hold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "nav-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Contact"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon-hold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    className: "nav-icon",
    icon: "envelope-open-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./Components/Loading.jsx":
/*!********************************!*\
  !*** ./Components/Loading.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lottie */ "react-lottie");
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lottie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_assets_Lotties_410_lego_loader_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/assets/Lotties/410-lego-loader.json */ "./src/assets/Lotties/410-lego-loader.json");
var _src_assets_Lotties_410_lego_loader_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../src/assets/Lotties/410-lego-loader.json */ "./src/assets/Lotties/410-lego-loader.json", 1);
var _jsxFileName = "C:\\Users\\andre\\Development-Projects\\portfolio\\Components\\Loading.jsx";




var Loading = function Loading(props) {
  var style = {
    width: '100vw',
    height: '100vh',
    background: 'black',
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  };
  var options = {
    loop: true,
    autoplay: true,
    animationData: _src_assets_Lotties_410_lego_loader_json__WEBPACK_IMPORTED_MODULE_2__,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style,
    className: "Loading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    style: {
      color: 'white',
      fontSize: '3rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Getting that ready"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lottie__WEBPACK_IMPORTED_MODULE_1___default.a, {
    width: props.width,
    height: props.height,
    options: options,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/minesweeper.js":
/*!******************************!*\
  !*** ./pages/minesweeper.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_gameFrame_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/gameFrame.scss */ "./styles/gameFrame.scss");
/* harmony import */ var _styles_gameFrame_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_gameFrame_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Components_Loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/Loading */ "./Components/Loading.jsx");
/* harmony import */ var _Components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Components/Layout */ "./Components/Layout.jsx");







var _jsxFileName = "C:\\Users\\andre\\Development-Projects\\portfolio\\pages\\minesweeper.js";





var Minesweeper =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Minesweeper, _React$Component);

  function Minesweeper() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Minesweeper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Minesweeper)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      loading: true
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleLoad", function () {
      _this.setState({
        loading: !_this.state.loading
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Minesweeper, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "game-hold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, this.state.loading && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Components_Loading__WEBPACK_IMPORTED_MODULE_9__["default"], {
        width: 400,
        height: 400,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("iframe", {
        onLoad: this.toggleLoad,
        src: "https://minesweeper.westenskow.dev/",
        frameBorder: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      })));
    }
  }]);

  return Minesweeper;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Minesweeper);

/***/ }),

/***/ "./src/assets/Lotties/410-lego-loader.json":
/*!*************************************************!*\
  !*** ./src/assets/Lotties/410-lego-loader.json ***!
  \*************************************************/
/*! exports provided: v, fr, ip, op, w, h, nm, ddd, assets, layers, default */
/***/ (function(module) {

module.exports = {"v":"4.7.0","fr":30.0000305175781,"ip":0,"op":151.000153605143,"w":800,"h":600,"nm":"LEGO loader Lottie","ddd":0,"assets":[{"id":"comp_3","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"red 5","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":30,"s":[371.75,340.125,0],"e":[315.05,299.985,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":60,"s":[315.05,299.985,0],"e":[315.05,299.985,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":120,"s":[315.05,299.985,0],"e":[371.75,259.845,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":150,"s":[371.75,259.845,0],"e":[371.75,259.845,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":240,"s":[371.75,259.845,0],"e":[428.45,219.705,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":270,"s":[428.45,219.705,0],"e":[428.45,219.705,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":330,"s":[428.45,219.705,0],"e":[485.15,259.845,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":360,"s":[485.15,259.845,0],"e":[485.15,259.845,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":420,"s":[485.15,259.845,0],"e":[428.45,299.985,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":450,"s":[428.45,299.985,0],"e":[428.45,299.985,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":540.001,"s":[428.45,299.985,0],"e":[371.75,340.125,0],"to":[0,0,0],"ti":[0,0,0]},{"t":570.000579833984}]},"a":{"a":0,"k":[193.074,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[167.294,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 22","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[193.85,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 23","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[220.86,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 24","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[194.304,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 25","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.902,0.145,0.165,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[164.724,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 26","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.925,0.255,0.235,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[193.074,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 27","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[221.424,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 28","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":540.000549316406,"op":603.00061340332,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":2,"ty":4,"nm":"orange 4","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":0,"s":[314.65,300.125,0],"e":[371.35,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":30,"s":[371.35,259.725,0],"e":[371.35,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":120,"s":[371.35,259.725,0],"e":[428.05,219.585,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":150,"s":[428.05,219.585,0],"e":[428.05,219.585,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":210,"s":[428.05,219.585,0],"e":[484.75,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":240,"s":[484.75,259.725,0],"e":[484.75,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":300,"s":[484.75,259.725,0],"e":[428.05,299.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":330,"s":[428.05,299.865,0],"e":[428.05,299.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":420,"s":[428.05,299.865,0],"e":[371.35,340.005,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":450,"s":[371.35,340.005,0],"e":[371.35,340.005,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":510.001,"s":[371.35,340.005,0],"e":[314.65,299.865,0],"to":[0,0,0],"ti":[0,0,0]},{"t":540.000549316406}]},"a":{"a":0,"k":[306.474,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[280.693,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 29","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[307.25,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 30","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[334.26,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 31","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[307.704,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 32","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.996,0.412,0.082,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[278.124,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 33","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[1,0.616,0.325,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[306.474,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 34","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[334.824,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 35","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":420.000427246094,"op":603.00061340332,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":3,"ty":4,"nm":"yellow 2","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":0,"s":[371.55,260.125,0],"e":[428.25,219.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":30,"s":[428.25,219.725,0],"e":[428.25,219.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":90,"s":[428.25,219.725,0],"e":[484.95,259.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":120,"s":[484.95,259.865,0],"e":[484.95,259.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":180,"s":[484.95,259.865,0],"e":[428.25,300.005,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":210,"s":[428.25,300.005,0],"e":[428.25,300.005,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":300,"s":[428.25,300.005,0],"e":[371.55,340.145,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":330,"s":[371.55,340.145,0],"e":[371.55,340.145,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":390,"s":[371.55,340.145,0],"e":[314.85,300.005,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":420,"s":[314.85,300.005,0],"e":[314.85,300.005,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":480,"s":[314.85,300.005,0],"e":[371.55,259.865,0],"to":[0,0,0],"ti":[0,0,0]},{"t":510.000518798828}]},"a":{"a":0,"k":[419.874,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.906,0.722,0.149,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[394.094,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 8","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.906,0.722,0.149,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[420.65,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 9","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.561,0]],"o":[[0,0],[0,4.86],[-6.561,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.906,0.722,0.149,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[447.66,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 10","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.851,-6.331],[11.911,-1.57],[-0.009,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.009,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.906,0.722,0.149,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[421.104,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 11","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.98,0.89,0.184,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[391.524,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 12","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.699,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.98,0.922,0.188,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[419.874,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 13","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.349,40.14],[-28.349,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.906,0.722,0.149,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[448.224,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 14","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":300.000305175781,"op":480.00048828125,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":4,"ty":4,"nm":"blue 2","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":60,"s":[485.35,259.875,0],"e":[428.65,300.015,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":90,"s":[428.65,300.015,0],"e":[428.65,300.015,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":180,"s":[428.65,300.015,0],"e":[371.95,340.415,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":210,"s":[371.95,340.415,0],"e":[371.95,340.415,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":270,"s":[371.95,340.415,0],"e":[315.25,300.275,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":300,"s":[315.25,300.275,0],"e":[315.25,300.275,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":360,"s":[315.25,300.275,0],"e":[371.95,260.135,0],"to":[0,0,0],"ti":[0,0,0]},{"t":390.000396728516}]},"a":{"a":0,"k":[646.674,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.619,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.561,0]],"o":[[0,0],[0,4.86],[-6.561,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.911,-1.57],[-0.009,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.009,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[620.894,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.561,0]],"o":[[0,0],[0,4.86],[-6.561,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.849,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[647.45,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.851,-6.33],[11.911,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[674.46,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[647.904,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.31,0.678,0.808,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[618.324,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.392,0.827,0.953,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[646.674,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[675.024,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":180.000183105469,"op":360.000366210938,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":5,"ty":4,"nm":"green 2","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":60,"s":[428.95,300.125,0],"e":[372.25,340.265,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":90,"s":[372.25,340.265,0],"e":[372.25,340.265,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":150,"s":[372.25,340.265,0],"e":[315.55,299.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":180,"s":[315.55,299.865,0],"e":[315.55,299.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":240,"s":[315.55,299.865,0],"e":[372.25,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"t":270.000274658203}]},"a":{"a":0,"k":[533.273,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[507.494,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 15","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.851,-6.33],[11.911,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[534.05,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 16","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.911,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[561.061,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 17","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.579,0],[0,4.86],[0,0],[-6.561,0]],"o":[[0,0],[0,4.86],[-6.561,0],[0,0],[0,4.86],[6.159,0]],"v":[[11.849,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[534.504,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 18","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.592,0.769,0.188,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[504.923,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 19","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.62,0.816,0.153,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[533.274,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 20","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[561.624,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 21","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":60.0000610351563,"op":240.000244140625,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":6,"ty":4,"nm":"red","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":30,"s":[371.75,340.125,0],"e":[315.05,299.985,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":60,"s":[315.05,299.985,0],"e":[315.05,299.985,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":120,"s":[315.05,299.985,0],"e":[371.75,259.845,0],"to":[0,0,0],"ti":[0,0,0]},{"t":150.000152587891}]},"a":{"a":0,"k":[193.074,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[167.294,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 22","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[193.85,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 23","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[220.86,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 24","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[194.304,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 25","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.902,0.145,0.165,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[164.724,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 26","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.925,0.255,0.235,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[193.074,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 27","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[221.424,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 28","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":0,"op":120.000122070313,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":7,"ty":4,"nm":"green","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":60,"s":[428.95,300.125,0],"e":[372.25,340.265,0],"to":[0,0,0],"ti":[0,0,0]},{"t":90.0000915527344}]},"a":{"a":0,"k":[533.273,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[507.494,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 15","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.851,-6.33],[11.911,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[534.05,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 16","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.911,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[561.061,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 17","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.579,0],[0,4.86],[0,0],[-6.561,0]],"o":[[0,0],[0,4.86],[-6.561,0],[0,0],[0,4.86],[6.159,0]],"v":[[11.849,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[534.504,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 18","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.592,0.769,0.188,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[504.923,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 19","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.62,0.816,0.153,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[533.274,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 20","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[561.624,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 21","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":0,"op":60.0000610351563,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":8,"ty":4,"nm":"blue","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":70,"s":[485.35,259.875,0],"e":[428.65,300.015,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":90,"s":[428.65,300.015,0],"e":[428.65,300.015,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":180,"s":[428.65,300.015,0],"e":[371.95,340.415,0],"to":[0,0,0],"ti":[0,0,0]},{"t":210.000213623047}]},"a":{"a":0,"k":[646.674,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.619,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.561,0]],"o":[[0,0],[0,4.86],[-6.561,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.911,-1.57],[-0.009,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.009,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[620.894,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.561,0]],"o":[[0,0],[0,4.86],[-6.561,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.849,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[647.45,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.851,-6.33],[11.911,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[674.46,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[647.904,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.31,0.678,0.808,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[618.324,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.392,0.827,0.953,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[646.674,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[675.024,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":0,"op":180.000183105469,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":9,"ty":4,"nm":"orange","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":10,"s":[314.65,300.125,0],"e":[371.35,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":30,"s":[371.35,259.725,0],"e":[371.35,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":120,"s":[371.35,259.725,0],"e":[428.05,219.585,0],"to":[0,0,0],"ti":[0,0,0]},{"t":150.000152587891}]},"a":{"a":0,"k":[306.474,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[280.693,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 29","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[307.25,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 30","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[334.26,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 31","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[307.704,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 32","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.996,0.412,0.082,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[278.124,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 33","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[1,0.616,0.325,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[306.474,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 34","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[334.824,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 35","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":0,"op":120.000122070313,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":10,"ty":4,"nm":"yellow","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":0,"s":[371.55,260.125,0],"e":[428.25,219.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":30,"s":[428.25,219.725,0],"e":[428.25,219.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":90,"s":[428.25,219.725,0],"e":[484.95,259.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":120,"s":[484.95,259.865,0],"e":[484.95,259.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":190,"s":[484.95,259.865,0],"e":[428.25,300.005,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":210,"s":[428.25,300.005,0],"e":[428.25,300.005,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":300,"s":[428.25,300.005,0],"e":[371.55,340.145,0],"to":[0,0,0],"ti":[0,0,0]},{"t":330.000335693359}]},"a":{"a":0,"k":[419.874,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.906,0.722,0.149,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[394.094,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 8","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.906,0.722,0.149,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[420.65,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 9","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.561,0]],"o":[[0,0],[0,4.86],[-6.561,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.906,0.722,0.149,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[447.66,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 10","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.851,-6.331],[11.911,-1.57],[-0.009,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.009,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.906,0.722,0.149,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[421.104,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 11","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.98,0.89,0.184,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[391.524,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 12","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.699,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.98,0.922,0.188,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[419.874,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 13","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.349,40.14],[-28.349,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.906,0.722,0.149,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[448.224,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 14","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":0,"op":300.000305175781,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":11,"ty":4,"nm":"orange 3","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":0,"s":[314.65,300.125,0],"e":[371.35,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":30,"s":[371.35,259.725,0],"e":[371.35,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":120,"s":[371.35,259.725,0],"e":[428.05,219.585,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":150,"s":[428.05,219.585,0],"e":[428.05,219.585,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":210,"s":[428.05,219.585,0],"e":[484.75,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":240,"s":[484.75,259.725,0],"e":[484.75,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":310,"s":[484.75,259.725,0],"e":[428.05,299.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":330,"s":[428.05,299.865,0],"e":[428.05,299.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":420,"s":[428.05,299.865,0],"e":[371.35,340.005,0],"to":[0,0,0],"ti":[0,0,0]},{"t":450.000457763672}]},"a":{"a":0,"k":[306.474,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[280.693,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 29","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[307.25,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 30","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[334.26,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 31","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[307.704,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 32","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.996,0.412,0.082,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[278.124,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 33","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[1,0.616,0.325,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[306.474,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 34","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[334.824,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 35","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":300.000305175781,"op":420.000427246094,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":12,"ty":4,"nm":"red 4","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":30,"s":[371.75,340.125,0],"e":[315.05,299.985,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":60,"s":[315.05,299.985,0],"e":[315.05,299.985,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":120,"s":[315.05,299.985,0],"e":[371.75,259.845,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":150,"s":[371.75,259.845,0],"e":[371.75,259.845,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":240,"s":[371.75,259.845,0],"e":[428.45,219.705,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":270,"s":[428.45,219.705,0],"e":[428.45,219.705,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":330,"s":[428.45,219.705,0],"e":[485.15,259.845,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":360,"s":[485.15,259.845,0],"e":[485.15,259.845,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":430,"s":[485.15,259.845,0],"e":[428.45,299.985,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":450,"s":[428.45,299.985,0],"e":[428.45,299.985,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":540.001,"s":[428.45,299.985,0],"e":[371.75,340.125,0],"to":[0,0,0],"ti":[0,0,0]},{"t":570.000579833984}]},"a":{"a":0,"k":[193.074,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[167.294,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 22","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[193.85,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 23","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[220.86,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 24","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[194.304,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 25","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.902,0.145,0.165,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[164.724,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 26","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.925,0.255,0.235,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[193.074,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 27","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[221.424,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 28","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":420.000427246094,"op":540.000549316406,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":13,"ty":4,"nm":"green 5","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":60,"s":[428.95,300.125,0],"e":[372.25,340.265,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":90,"s":[372.25,340.265,0],"e":[372.25,340.265,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":150,"s":[372.25,340.265,0],"e":[315.55,299.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":180,"s":[315.55,299.865,0],"e":[315.55,299.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":240,"s":[315.55,299.865,0],"e":[372.25,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":270,"s":[372.25,259.725,0],"e":[372.25,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":360,"s":[372.25,259.725,0],"e":[428.95,219.585,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":390,"s":[428.95,219.585,0],"e":[428.95,219.585,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":450,"s":[428.95,219.585,0],"e":[485.65,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":480,"s":[485.65,259.725,0],"e":[485.65,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":550.001,"s":[485.65,259.725,0],"e":[428.95,299.865,0],"to":[0,0,0],"ti":[0,0,0]},{"t":570.000579833984}]},"a":{"a":0,"k":[533.273,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[507.494,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 15","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.851,-6.33],[11.911,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[534.05,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 16","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.911,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[561.061,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 17","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.579,0],[0,4.86],[0,0],[-6.561,0]],"o":[[0,0],[0,4.86],[-6.561,0],[0,0],[0,4.86],[6.159,0]],"v":[[11.849,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[534.504,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 18","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.592,0.769,0.188,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[504.923,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 19","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.62,0.816,0.153,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[533.274,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 20","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[561.624,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 21","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":540.000549316406,"op":603.00061340332,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":14,"ty":4,"nm":"yellow 3","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":0,"s":[371.55,260.125,0],"e":[428.25,219.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":30,"s":[428.25,219.725,0],"e":[428.25,219.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":90,"s":[428.25,219.725,0],"e":[484.95,259.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":120,"s":[484.95,259.865,0],"e":[484.95,259.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":180,"s":[484.95,259.865,0],"e":[428.25,300.005,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":210,"s":[428.25,300.005,0],"e":[428.25,300.005,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":300,"s":[428.25,300.005,0],"e":[371.55,340.145,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":330,"s":[371.55,340.145,0],"e":[371.55,340.145,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":390,"s":[371.55,340.145,0],"e":[314.85,300.005,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":420,"s":[314.85,300.005,0],"e":[314.85,300.005,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":490,"s":[314.85,300.005,0],"e":[371.55,259.865,0],"to":[0,0,0],"ti":[0,0,0]},{"t":510.000518798828}]},"a":{"a":0,"k":[419.874,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.906,0.722,0.149,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[394.094,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 8","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.906,0.722,0.149,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[420.65,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 9","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.561,0]],"o":[[0,0],[0,4.86],[-6.561,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.906,0.722,0.149,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[447.66,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 10","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.851,-6.331],[11.911,-1.57],[-0.009,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.009,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.906,0.722,0.149,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[421.104,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 11","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.98,0.89,0.184,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[391.524,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 12","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.699,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.98,0.922,0.188,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[419.874,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 13","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.349,40.14],[-28.349,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.906,0.722,0.149,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[448.224,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 14","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":480.00048828125,"op":603.00061340332,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":15,"ty":4,"nm":"blue 3","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":60,"s":[485.35,259.875,0],"e":[428.65,300.015,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":90,"s":[428.65,300.015,0],"e":[428.65,300.015,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":180,"s":[428.65,300.015,0],"e":[371.95,340.415,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":210,"s":[371.95,340.415,0],"e":[371.95,340.415,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":270,"s":[371.95,340.415,0],"e":[315.25,300.275,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":300,"s":[315.25,300.275,0],"e":[315.25,300.275,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":370,"s":[315.25,300.275,0],"e":[371.95,260.135,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":390,"s":[371.95,260.135,0],"e":[371.95,260.135,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":480,"s":[371.95,260.135,0],"e":[428.65,219.995,0],"to":[0,0,0],"ti":[0,0,0]},{"t":510.000518798828}]},"a":{"a":0,"k":[646.674,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.619,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.561,0]],"o":[[0,0],[0,4.86],[-6.561,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.911,-1.57],[-0.009,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.009,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[620.894,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.561,0]],"o":[[0,0],[0,4.86],[-6.561,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.849,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[647.45,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.851,-6.33],[11.911,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[674.46,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[647.904,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.31,0.678,0.808,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[618.324,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.392,0.827,0.953,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[646.674,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[675.024,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":360.000366210938,"op":480.00048828125,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":16,"ty":4,"nm":"green 3","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":60,"s":[428.95,300.125,0],"e":[372.25,340.265,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":90,"s":[372.25,340.265,0],"e":[372.25,340.265,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":150,"s":[372.25,340.265,0],"e":[315.55,299.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":180,"s":[315.55,299.865,0],"e":[315.55,299.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":250,"s":[315.55,299.865,0],"e":[372.25,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":270,"s":[372.25,259.725,0],"e":[372.25,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":360,"s":[372.25,259.725,0],"e":[428.95,219.585,0],"to":[0,0,0],"ti":[0,0,0]},{"t":390.000396728516}]},"a":{"a":0,"k":[533.273,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[507.494,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 15","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.851,-6.33],[11.911,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[534.05,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 16","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.911,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[561.061,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 17","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.579,0],[0,4.86],[0,0],[-6.561,0]],"o":[[0,0],[0,4.86],[-6.561,0],[0,0],[0,4.86],[6.159,0]],"v":[[11.849,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[534.504,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 18","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.592,0.769,0.188,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[504.923,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 19","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.62,0.816,0.153,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[533.274,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 20","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[561.624,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 21","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":240.000244140625,"op":360.000366210938,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":17,"ty":4,"nm":"red 2","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":30,"s":[371.75,340.125,0],"e":[315.05,299.985,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":60,"s":[315.05,299.985,0],"e":[315.05,299.985,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":130,"s":[315.05,299.985,0],"e":[371.75,259.845,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":150,"s":[371.75,259.845,0],"e":[371.75,259.845,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":240,"s":[371.75,259.845,0],"e":[428.45,219.705,0],"to":[0,0,0],"ti":[0,0,0]},{"t":270.000274658203}]},"a":{"a":0,"k":[193.074,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[167.294,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 22","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[193.85,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 23","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[220.86,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 24","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[194.304,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 25","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.902,0.145,0.165,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[164.724,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 26","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.925,0.255,0.235,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[193.074,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 27","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[221.424,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 28","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":120.000122070313,"op":240.000244140625,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":18,"ty":4,"nm":"orange 2","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":0,"s":[314.65,300.125,0],"e":[371.35,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":30,"s":[371.35,259.725,0],"e":[371.35,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":120,"s":[371.35,259.725,0],"e":[428.05,219.585,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":150,"s":[428.05,219.585,0],"e":[428.05,219.585,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":210,"s":[428.05,219.585,0],"e":[484.75,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":240,"s":[484.75,259.725,0],"e":[484.75,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":300,"s":[484.75,259.725,0],"e":[428.05,299.865,0],"to":[0,0,0],"ti":[0,0,0]},{"t":330.000335693359}]},"a":{"a":0,"k":[306.474,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[280.693,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 29","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[307.25,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 30","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[334.26,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 31","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[307.704,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 32","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.996,0.412,0.082,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[278.124,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 33","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[1,0.616,0.325,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[306.474,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 34","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.957,0.325,0.02,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[334.824,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 35","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":120.000122070313,"op":300.000305175781,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":19,"ty":4,"nm":"red 3","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":30,"s":[371.75,340.125,0],"e":[315.05,299.985,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":60,"s":[315.05,299.985,0],"e":[315.05,299.985,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":120,"s":[315.05,299.985,0],"e":[371.75,259.845,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":150,"s":[371.75,259.845,0],"e":[371.75,259.845,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":240,"s":[371.75,259.845,0],"e":[428.45,219.705,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":270,"s":[428.45,219.705,0],"e":[428.45,219.705,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":330,"s":[428.45,219.705,0],"e":[485.15,259.845,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":360,"s":[485.15,259.845,0],"e":[485.15,259.845,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":420,"s":[485.15,259.845,0],"e":[428.45,299.985,0],"to":[0,0,0],"ti":[0,0,0]},{"t":450.000457763672}]},"a":{"a":0,"k":[193.074,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[167.294,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 22","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[193.85,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 23","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[220.86,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 24","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[194.304,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 25","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.902,0.145,0.165,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[164.724,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 26","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.925,0.255,0.235,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[193.074,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 27","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.831,0,0.114,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[221.424,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 28","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":240.000244140625,"op":420.000427246094,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":20,"ty":4,"nm":"green 4","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":60,"s":[428.95,300.125,0],"e":[372.25,340.265,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":90,"s":[372.25,340.265,0],"e":[372.25,340.265,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":150,"s":[372.25,340.265,0],"e":[315.55,299.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":180,"s":[315.55,299.865,0],"e":[315.55,299.865,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":240,"s":[315.55,299.865,0],"e":[372.25,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":270,"s":[372.25,259.725,0],"e":[372.25,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":360,"s":[372.25,259.725,0],"e":[428.95,219.585,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":390,"s":[428.95,219.585,0],"e":[428.95,219.585,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":450,"s":[428.95,219.585,0],"e":[485.65,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":480,"s":[485.65,259.725,0],"e":[485.65,259.725,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":540.001,"s":[485.65,259.725,0],"e":[428.95,299.865,0],"to":[0,0,0],"ti":[0,0,0]},{"t":570.000579833984}]},"a":{"a":0,"k":[533.273,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[507.494,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 15","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.851,-6.33],[11.911,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[534.05,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 16","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.911,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[561.061,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 17","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.579,0],[0,4.86],[0,0],[-6.561,0]],"o":[[0,0],[0,4.86],[-6.561,0],[0,0],[0,4.86],[6.159,0]],"v":[[11.849,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[534.504,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 18","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.592,0.769,0.188,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[504.923,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 19","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.62,0.816,0.153,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[533.274,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 20","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.447,0.58,0.098,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[561.624,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 21","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":360.000366210938,"op":540.000549316406,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":21,"ty":4,"nm":"blue 4","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":60,"s":[485.35,259.875,0],"e":[428.65,300.015,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":90,"s":[428.65,300.015,0],"e":[428.65,300.015,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":180,"s":[428.65,300.015,0],"e":[371.95,340.415,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":210,"s":[371.95,340.415,0],"e":[371.95,340.415,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":270,"s":[371.95,340.415,0],"e":[315.25,300.275,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":300,"s":[315.25,300.275,0],"e":[315.25,300.275,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":360,"s":[315.25,300.275,0],"e":[371.95,260.135,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":390,"s":[371.95,260.135,0],"e":[371.95,260.135,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":480,"s":[371.95,260.135,0],"e":[428.65,219.995,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":0.44},"o":{"x":0.56,"y":0.56},"n":"0p44_0p44_0p56_0p56","t":510.001,"s":[428.65,219.995,0],"e":[428.65,219.995,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.44,"y":1},"o":{"x":0.56,"y":0},"n":"0p44_1_0p56_0","t":570.001,"s":[428.65,219.995,0],"e":[485.35,260.135,0],"to":[0,0,0],"ti":[0,0,0]},{"t":600.000610351563}]},"a":{"a":0,"k":[646.674,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.619,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.561,0]],"o":[[0,0],[0,4.86],[-6.561,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.33],[11.911,-1.57],[-0.009,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.009,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[620.894,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.561,0]],"o":[[0,0],[0,4.86],[-6.561,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.849,-6.33],[11.91,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[647.45,262.515],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.851,-6.33],[11.911,-1.57],[-0.01,7.23],[-11.911,-1.57],[-11.911,-7.23],[-0.01,1.55]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[674.46,282.323],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.62,4.44],[0,0],[6.58,0],[0,4.86],[0,0],[-6.56,0]],"o":[[0,0],[0,4.86],[-6.56,0],[0,0],[0,4.86],[6.16,0]],"v":[[11.85,-6.331],[11.91,-1.57],[-0.01,7.23],[-11.91,-1.57],[-11.91,-7.23],[-0.01,1.549]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[647.904,302.13],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-0.001],[28.35,40.141],[-28.35,-0.001],[-28.35,-40.141]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.31,0.678,0.808,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[618.324,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"ix":5,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[56.7,-0.01],[0,40.13],[-56.7,-0.01],[0,-40.13]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.392,0.827,0.953,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[646.674,279.93],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":2,"cix":2,"ix":6,"mn":"ADBE Vector Group"},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.35,-40.14],[28.35,0],[-28.35,40.14],[-28.35,0]],"c":true}},"nm":"Path 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.149,0.522,0.663,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[675.024,320.06],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":2,"cix":2,"ix":7,"mn":"ADBE Vector Group"}],"ip":480.00048828125,"op":603.00061340332,"st":0,"bm":0,"sr":1}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"LEGO loader","refId":"comp_3","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[400,300,0]},"a":{"a":0,"k":[400,300,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"tm":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0],"e":[20]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":150,"s":[20],"e":[20.033]},{"t":601.000611368815}]},"w":800,"h":600,"ip":0,"op":151.000153605143,"st":0,"bm":0,"sr":1}]};

/***/ }),

/***/ "./styles/Layout.scss":
/*!****************************!*\
  !*** ./styles/Layout.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/gameFrame.scss":
/*!*******************************!*\
  !*** ./styles/gameFrame.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 5:
/*!************************************!*\
  !*** multi ./pages/minesweeper.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\andre\Development-Projects\portfolio\pages\minesweeper.js */"./pages/minesweeper.js");


/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-lottie":
/*!*******************************!*\
  !*** external "react-lottie" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-lottie");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=minesweeper.js.map