webpackHotUpdate("static\\development\\pages\\minesweeper.js",{

/***/ "./pages/minesweeper.js":
/*!******************************!*\
  !*** ./pages/minesweeper.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_gameFrame_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/gameFrame.scss */ "./styles/gameFrame.scss");
/* harmony import */ var _styles_gameFrame_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_gameFrame_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\andre\\Development-Projects\\portfolio\\pages\\minesweeper.js";



var Minesweeper = function Minesweeper(props) {
  var loaded = false;

  var checkLoad = function checkLoad() {
    console.log('loaded');
    loaded = true;
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-hold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, !loaded && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Loading..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    onLoad: checkLoad,
    src: "http://104.248.216.64:6776/",
    frameBorder: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Minesweeper);

/***/ })

})
//# sourceMappingURL=minesweeper.js.3df159bfd9571619e8e8.hot-update.js.map