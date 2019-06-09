webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./Components/Sections/Portfolio.jsx":
/*!*******************************************!*\
  !*** ./Components/Sections/Portfolio.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Portfolio.scss */ "./styles/Portfolio.scss");
/* harmony import */ var _styles_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nuka_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nuka-carousel */ "./node_modules/nuka-carousel/es/index.js");
var _jsxFileName = "C:\\Users\\andre\\Development-Projects\\portfolio\\Components\\Sections\\Portfolio.jsx";




var Portfolio = function Portfolio() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "section-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Portfolio"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "portfolio-item-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "vote2play"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(nuka_carousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "5"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "6"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "8"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "portfolio-item-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "fin-s"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ }),

/***/ "./node_modules/d3-ease/src/back.js":
/*!******************************************!*\
  !*** ./node_modules/d3-ease/src/back.js ***!
  \******************************************/
/*! exports provided: backIn, backOut, backInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backIn", function() { return backIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backOut", function() { return backOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backInOut", function() { return backInOut; });
var overshoot = 1.70158;

var backIn = (function custom(s) {
  s = +s;

  function backIn(t) {
    return t * t * ((s + 1) * t - s);
  }

  backIn.overshoot = custom;

  return backIn;
})(overshoot);

var backOut = (function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((s + 1) * t + s) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
})(overshoot);

var backInOut = (function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;

  return backInOut;
})(overshoot);


/***/ }),

/***/ "./node_modules/d3-ease/src/bounce.js":
/*!********************************************!*\
  !*** ./node_modules/d3-ease/src/bounce.js ***!
  \********************************************/
/*! exports provided: bounceIn, bounceOut, bounceInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceIn", function() { return bounceIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOut", function() { return bounceOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInOut", function() { return bounceInOut; });
var b1 = 4 / 11,
    b2 = 6 / 11,
    b3 = 8 / 11,
    b4 = 3 / 4,
    b5 = 9 / 11,
    b6 = 10 / 11,
    b7 = 15 / 16,
    b8 = 21 / 22,
    b9 = 63 / 64,
    b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/circle.js":
/*!********************************************!*\
  !*** ./node_modules/d3-ease/src/circle.js ***!
  \********************************************/
/*! exports provided: circleIn, circleOut, circleInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleIn", function() { return circleIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleOut", function() { return circleOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleInOut", function() { return circleInOut; });
function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}

function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}

function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/cubic.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-ease/src/cubic.js ***!
  \*******************************************/
/*! exports provided: cubicIn, cubicOut, cubicInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicIn", function() { return cubicIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicOut", function() { return cubicOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicInOut", function() { return cubicInOut; });
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/elastic.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-ease/src/elastic.js ***!
  \*********************************************/
/*! exports provided: elasticIn, elasticOut, elasticInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticIn", function() { return elasticIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticOut", function() { return elasticOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticInOut", function() { return elasticInOut; });
var tau = 2 * Math.PI,
    amplitude = 1,
    period = 0.3;

var elasticIn = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function(a) { return custom(a, p * tau); };
  elasticIn.period = function(p) { return custom(a, p); };

  return elasticIn;
})(amplitude, period);

var elasticOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticOut.period = function(p) { return custom(a, p); };

  return elasticOut;
})(amplitude, period);

var elasticInOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0
        ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p)
        : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticInOut.period = function(p) { return custom(a, p); };

  return elasticInOut;
})(amplitude, period);


/***/ }),

/***/ "./node_modules/d3-ease/src/exp.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-ease/src/exp.js ***!
  \*****************************************/
/*! exports provided: expIn, expOut, expInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expIn", function() { return expIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expOut", function() { return expOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expInOut", function() { return expInOut; });
function expIn(t) {
  return Math.pow(2, 10 * t - 10);
}

function expOut(t) {
  return 1 - Math.pow(2, -10 * t);
}

function expInOut(t) {
  return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-ease/src/index.js ***!
  \*******************************************/
/*! exports provided: easeLinear, easeQuad, easeQuadIn, easeQuadOut, easeQuadInOut, easeCubic, easeCubicIn, easeCubicOut, easeCubicInOut, easePoly, easePolyIn, easePolyOut, easePolyInOut, easeSin, easeSinIn, easeSinOut, easeSinInOut, easeExp, easeExpIn, easeExpOut, easeExpInOut, easeCircle, easeCircleIn, easeCircleOut, easeCircleInOut, easeBounce, easeBounceIn, easeBounceOut, easeBounceInOut, easeBack, easeBackIn, easeBackOut, easeBackInOut, easeElastic, easeElasticIn, easeElasticOut, easeElasticInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-ease/src/linear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeLinear", function() { return _linear__WEBPACK_IMPORTED_MODULE_0__["linear"]; });

/* harmony import */ var _quad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quad */ "./node_modules/d3-ease/src/quad.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuad", function() { return _quad__WEBPACK_IMPORTED_MODULE_1__["quadInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuadIn", function() { return _quad__WEBPACK_IMPORTED_MODULE_1__["quadIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuadOut", function() { return _quad__WEBPACK_IMPORTED_MODULE_1__["quadOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuadInOut", function() { return _quad__WEBPACK_IMPORTED_MODULE_1__["quadInOut"]; });

/* harmony import */ var _cubic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cubic */ "./node_modules/d3-ease/src/cubic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubic", function() { return _cubic__WEBPACK_IMPORTED_MODULE_2__["cubicInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubicIn", function() { return _cubic__WEBPACK_IMPORTED_MODULE_2__["cubicIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubicOut", function() { return _cubic__WEBPACK_IMPORTED_MODULE_2__["cubicOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubicInOut", function() { return _cubic__WEBPACK_IMPORTED_MODULE_2__["cubicInOut"]; });

/* harmony import */ var _poly__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./poly */ "./node_modules/d3-ease/src/poly.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePoly", function() { return _poly__WEBPACK_IMPORTED_MODULE_3__["polyInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePolyIn", function() { return _poly__WEBPACK_IMPORTED_MODULE_3__["polyIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePolyOut", function() { return _poly__WEBPACK_IMPORTED_MODULE_3__["polyOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePolyInOut", function() { return _poly__WEBPACK_IMPORTED_MODULE_3__["polyInOut"]; });

/* harmony import */ var _sin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sin */ "./node_modules/d3-ease/src/sin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSin", function() { return _sin__WEBPACK_IMPORTED_MODULE_4__["sinInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSinIn", function() { return _sin__WEBPACK_IMPORTED_MODULE_4__["sinIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSinOut", function() { return _sin__WEBPACK_IMPORTED_MODULE_4__["sinOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSinInOut", function() { return _sin__WEBPACK_IMPORTED_MODULE_4__["sinInOut"]; });

/* harmony import */ var _exp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exp */ "./node_modules/d3-ease/src/exp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExp", function() { return _exp__WEBPACK_IMPORTED_MODULE_5__["expInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExpIn", function() { return _exp__WEBPACK_IMPORTED_MODULE_5__["expIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExpOut", function() { return _exp__WEBPACK_IMPORTED_MODULE_5__["expOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExpInOut", function() { return _exp__WEBPACK_IMPORTED_MODULE_5__["expInOut"]; });

/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./circle */ "./node_modules/d3-ease/src/circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircle", function() { return _circle__WEBPACK_IMPORTED_MODULE_6__["circleInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircleIn", function() { return _circle__WEBPACK_IMPORTED_MODULE_6__["circleIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircleOut", function() { return _circle__WEBPACK_IMPORTED_MODULE_6__["circleOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircleInOut", function() { return _circle__WEBPACK_IMPORTED_MODULE_6__["circleInOut"]; });

/* harmony import */ var _bounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bounce */ "./node_modules/d3-ease/src/bounce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounce", function() { return _bounce__WEBPACK_IMPORTED_MODULE_7__["bounceOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounceIn", function() { return _bounce__WEBPACK_IMPORTED_MODULE_7__["bounceIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounceOut", function() { return _bounce__WEBPACK_IMPORTED_MODULE_7__["bounceOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounceInOut", function() { return _bounce__WEBPACK_IMPORTED_MODULE_7__["bounceInOut"]; });

/* harmony import */ var _back__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./back */ "./node_modules/d3-ease/src/back.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBack", function() { return _back__WEBPACK_IMPORTED_MODULE_8__["backInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBackIn", function() { return _back__WEBPACK_IMPORTED_MODULE_8__["backIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBackOut", function() { return _back__WEBPACK_IMPORTED_MODULE_8__["backOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBackInOut", function() { return _back__WEBPACK_IMPORTED_MODULE_8__["backInOut"]; });

/* harmony import */ var _elastic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./elastic */ "./node_modules/d3-ease/src/elastic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElastic", function() { return _elastic__WEBPACK_IMPORTED_MODULE_9__["elasticOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElasticIn", function() { return _elastic__WEBPACK_IMPORTED_MODULE_9__["elasticIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElasticOut", function() { return _elastic__WEBPACK_IMPORTED_MODULE_9__["elasticOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElasticInOut", function() { return _elastic__WEBPACK_IMPORTED_MODULE_9__["elasticInOut"]; });






















/***/ }),

/***/ "./node_modules/d3-ease/src/linear.js":
/*!********************************************!*\
  !*** ./node_modules/d3-ease/src/linear.js ***!
  \********************************************/
/*! exports provided: linear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
function linear(t) {
  return +t;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/poly.js":
/*!******************************************!*\
  !*** ./node_modules/d3-ease/src/poly.js ***!
  \******************************************/
/*! exports provided: polyIn, polyOut, polyInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyIn", function() { return polyIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyOut", function() { return polyOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyInOut", function() { return polyInOut; });
var exponent = 3;

var polyIn = (function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
})(exponent);

var polyOut = (function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
})(exponent);

var polyInOut = (function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
})(exponent);


/***/ }),

/***/ "./node_modules/d3-ease/src/quad.js":
/*!******************************************!*\
  !*** ./node_modules/d3-ease/src/quad.js ***!
  \******************************************/
/*! exports provided: quadIn, quadOut, quadInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadIn", function() { return quadIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadOut", function() { return quadOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadInOut", function() { return quadInOut; });
function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return t * (2 - t);
}

function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/sin.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-ease/src/sin.js ***!
  \*****************************************/
/*! exports provided: sinIn, sinOut, sinInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinIn", function() { return sinIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinOut", function() { return sinOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinInOut", function() { return sinInOut; });
var pi = Math.PI,
    halfPi = pi / 2;

function sinIn(t) {
  return 1 - Math.cos(t * halfPi);
}

function sinOut(t) {
  return Math.sin(t * halfPi);
}

function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}


/***/ }),

/***/ "./node_modules/d3-timer/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-timer/src/index.js ***!
  \********************************************/
/*! exports provided: now, timer, timerFlush, timeout, interval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ "./node_modules/d3-timer/src/timer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "now", function() { return _timer__WEBPACK_IMPORTED_MODULE_0__["now"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return _timer__WEBPACK_IMPORTED_MODULE_0__["timer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timerFlush", function() { return _timer__WEBPACK_IMPORTED_MODULE_0__["timerFlush"]; });

/* harmony import */ var _timeout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeout */ "./node_modules/d3-timer/src/timeout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return _timeout__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-timer/src/interval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return _interval__WEBPACK_IMPORTED_MODULE_2__["default"]; });








/***/ }),

/***/ "./node_modules/d3-timer/src/interval.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-timer/src/interval.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ "./node_modules/d3-timer/src/timer.js");


/* harmony default export */ __webpack_exports__["default"] = (function(callback, delay, time) {
  var t = new _timer__WEBPACK_IMPORTED_MODULE_0__["Timer"], total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  delay = +delay, time = time == null ? Object(_timer__WEBPACK_IMPORTED_MODULE_0__["now"])() : +time;
  t.restart(function tick(elapsed) {
    elapsed += total;
    t.restart(tick, total += delay, time);
    callback(elapsed);
  }, delay, time);
  return t;
});


/***/ }),

/***/ "./node_modules/d3-timer/src/timeout.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-timer/src/timeout.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ "./node_modules/d3-timer/src/timer.js");


/* harmony default export */ __webpack_exports__["default"] = (function(callback, delay, time) {
  var t = new _timer__WEBPACK_IMPORTED_MODULE_0__["Timer"];
  delay = delay == null ? 0 : +delay;
  t.restart(function(elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
});


/***/ }),

/***/ "./node_modules/d3-timer/src/timer.js":
/*!********************************************!*\
  !*** ./node_modules/d3-timer/src/timer.js ***!
  \********************************************/
/*! exports provided: now, Timer, timer, timerFlush */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timerFlush", function() { return timerFlush; });
var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}


/***/ }),

/***/ "./node_modules/exenv/index.js":
/*!*************************************!*\
  !*** ./node_modules/exenv/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ "./node_modules/kapellmeister/es/BaseNode.js":
/*!***************************************************!*\
  !*** ./node_modules/kapellmeister/es/BaseNode.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/kapellmeister/es/utils.js");
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Events */ "./node_modules/kapellmeister/es/Events.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var BaseNode = function () {
  function BaseNode(state) {
    _classCallCheck(this, BaseNode);

    this.state = state || {};
  }

  _createClass(BaseNode, [{
    key: "transition",
    value: function transition(config) {
      if (Array.isArray(config)) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = config[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;
            this.parse(item);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } else {
        this.parse(config);
      }
    }
  }, {
    key: "isTransitioning",
    value: function isTransitioning() {
      return !!this.transitionData;
    }
  }, {
    key: "stopTransitions",
    value: function stopTransitions() {
      var transitions = this.transitionData;

      if (transitions) {
        Object.keys(transitions).forEach(function (t) {
          transitions[t].timer.stop();
        });
      }
    }
  }, {
    key: "setState",
    value: function setState(update) {
      if (typeof update === 'function') {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(this.state, update(this.state));
      } else {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(this.state, update);
      }
    }
  }, {
    key: "parse",
    value: function parse(config) {
      var _this = this;

      var clone = _objectSpread({}, config);

      var events = new _Events__WEBPACK_IMPORTED_MODULE_2__["default"](clone);

      if (clone.events) {
        delete clone.events;
      }

      var timing = _objectSpread({}, _utils__WEBPACK_IMPORTED_MODULE_1__["timingDefaults"], clone.timing || {}, {
        time: Object(d3_timer__WEBPACK_IMPORTED_MODULE_0__["now"])()
      });

      if (clone.timing) {
        delete clone.timing;
      }

      Object.keys(clone).forEach(function (stateKey) {
        var tweens = [];
        var next = clone[stateKey];

        if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isNamespace"])(next)) {
          Object.keys(next).forEach(function (attr) {
            var val = next[attr];

            if (Array.isArray(val)) {
              if (val.length === 1) {
                tweens.push(_this.getTween(attr, val[0], stateKey));
              } else {
                _this.setState(function (state) {
                  var _objectSpread2, _ref;

                  return _ref = {}, _ref[stateKey] = _objectSpread({}, state[stateKey], (_objectSpread2 = {}, _objectSpread2[attr] = val[0], _objectSpread2)), _ref;
                });

                tweens.push(_this.getTween(attr, val[1], stateKey));
              }
            } else if (typeof val === 'function') {
              var getNameSpacedCustomTween = function getNameSpacedCustomTween() {
                var kapellmeisterNamespacedTween = function kapellmeisterNamespacedTween(t) {
                  _this.setState(function (state) {
                    var _objectSpread3, _ref2;

                    return _ref2 = {}, _ref2[stateKey] = _objectSpread({}, state[stateKey], (_objectSpread3 = {}, _objectSpread3[attr] = val(t), _objectSpread3)), _ref2;
                  });
                };

                return kapellmeisterNamespacedTween;
              };

              tweens.push(getNameSpacedCustomTween);
            } else {
              _this.setState(function (state) {
                var _objectSpread4, _ref3;

                return _ref3 = {}, _ref3[stateKey] = _objectSpread({}, state[stateKey], (_objectSpread4 = {}, _objectSpread4[attr] = val, _objectSpread4)), _ref3;
              });

              tweens.push(_this.getTween(attr, val, stateKey));
            }
          });
        } else {
          if (Array.isArray(next)) {
            if (next.length === 1) {
              tweens.push(_this.getTween(stateKey, next[0], null));
            } else {
              var _this$setState;

              _this.setState((_this$setState = {}, _this$setState[stateKey] = next[0], _this$setState));

              tweens.push(_this.getTween(stateKey, next[1], null));
            }
          } else if (typeof next === 'function') {
            var getCustomTween = function getCustomTween() {
              var kapellmeisterTween = function kapellmeisterTween(t) {
                var _this$setState2;

                _this.setState((_this$setState2 = {}, _this$setState2[stateKey] = next(t), _this$setState2));
              };

              return kapellmeisterTween;
            };

            tweens.push(getCustomTween);
          } else {
            var _this$setState3;

            _this.setState((_this$setState3 = {}, _this$setState3[stateKey] = next, _this$setState3));

            tweens.push(_this.getTween(stateKey, next, null));
          }
        }

        _this.update({
          stateKey: stateKey,
          timing: timing,
          tweens: tweens,
          events: events,
          status: 0
        });
      });
    }
  }, {
    key: "getTween",
    value: function getTween(attr, endValue, nameSpace) {
      var _this2 = this;

      return function () {
        var begValue = nameSpace ? _this2.state[nameSpace][attr] : _this2.state[attr];

        if (begValue === endValue) {
          return null;
        }

        var i = _this2.getInterpolator(begValue, endValue, attr, nameSpace);

        var stateTween;

        if (nameSpace === null) {
          stateTween = function stateTween(t) {
            var _this2$setState;

            _this2.setState((_this2$setState = {}, _this2$setState[attr] = i(t), _this2$setState));
          };
        } else {
          stateTween = function stateTween(t) {
            _this2.setState(function (state) {
              var _objectSpread5, _ref4;

              return _ref4 = {}, _ref4[nameSpace] = _objectSpread({}, state[nameSpace], (_objectSpread5 = {}, _objectSpread5[attr] = i(t), _objectSpread5)), _ref4;
            });
          };
        }

        return stateTween;
      };
    }
  }, {
    key: "update",
    value: function update(transition) {
      if (!this.transitionData) {
        this.transitionData = {};
      }

      this.init(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getTransitionId"])(), transition);
    }
  }, {
    key: "init",
    value: function init(id, transition) {
      var _this3 = this;

      var n = transition.tweens.length;
      var tweens = new Array(n);

      var queue = function queue(elapsed) {
        transition.status = 1;
        transition.timer.restart(start, transition.timing.delay, transition.timing.time);

        if (transition.timing.delay <= elapsed) {
          start(elapsed - transition.timing.delay);
        }
      };

      this.transitionData[id] = transition;
      transition.timer = Object(d3_timer__WEBPACK_IMPORTED_MODULE_0__["timer"])(queue, 0, transition.timing.time);

      var start = function start(elapsed) {
        if (transition.status !== 1) return stop();

        for (var tid in _this3.transitionData) {
          var t = _this3.transitionData[tid];

          if (t.stateKey !== transition.stateKey) {
            continue;
          }

          if (t.status === 3) {
            return Object(d3_timer__WEBPACK_IMPORTED_MODULE_0__["timeout"])(start);
          }

          if (t.status === 4) {
            t.status = 6;
            t.timer.stop();

            if (t.events.interrupt) {
              t.events.interrupt.call(_this3);
            }

            delete _this3.transitionData[tid];
          } else if (+tid < id) {
            t.status = 6;
            t.timer.stop();
            delete _this3.transitionData[tid];
          }
        }

        Object(d3_timer__WEBPACK_IMPORTED_MODULE_0__["timeout"])(function () {
          if (transition.status === 3) {
            transition.status = 4;
            transition.timer.restart(tick, transition.timing.delay, transition.timing.time);
            tick(elapsed);
          }
        });
        transition.status = 2;

        if (transition.events.start) {
          transition.events.start.call(_this3);
        }

        if (transition.status !== 2) {
          return;
        }

        transition.status = 3;
        var j = -1;

        for (var i = 0; i < n; ++i) {
          var res = transition.tweens[i]();

          if (res) {
            tweens[++j] = res;
          }
        }

        tweens.length = j + 1;
      };

      var tick = function tick(elapsed) {
        var t = 1;

        if (elapsed < transition.timing.duration) {
          t = transition.timing.ease(elapsed / transition.timing.duration);
        } else {
          transition.timer.restart(stop);
          transition.status = 5;
        }

        var i = -1;

        while (++i < tweens.length) {
          tweens[i](t);
        }

        if (transition.status === 5) {
          if (transition.events.end) {
            transition.events.end.call(_this3);
          }

          stop();
        }
      };

      var stop = function stop() {
        transition.status = 6;
        transition.timer.stop();
        delete _this3.transitionData[id];

        for (var _ in _this3.transitionData) {
          return;
        }

        delete _this3.transitionData;
      };
    }
  }]);

  return BaseNode;
}();

/* harmony default export */ __webpack_exports__["default"] = (BaseNode);

/***/ }),

/***/ "./node_modules/kapellmeister/es/Events.js":
/*!*************************************************!*\
  !*** ./node_modules/kapellmeister/es/Events.js ***!
  \*************************************************/
/*! exports provided: Events, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/kapellmeister/es/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var Events = function Events(config) {
  var _this = this;

  _classCallCheck(this, Events);

  this.start = null;
  this.interrupt = null;
  this.end = null;

  if (config.events) {
    Object.keys(config.events).forEach(function (d) {
      if (typeof config.events[d] !== 'function') {
        throw new Error('Event handlers must be a function');
      } else {
        _this[d] = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["once"])(config.events[d]);
      }
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Events);

/***/ }),

/***/ "./node_modules/kapellmeister/es/index.js":
/*!************************************************!*\
  !*** ./node_modules/kapellmeister/es/index.js ***!
  \************************************************/
/*! exports provided: BaseNode, now, timer, interval, timeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseNode */ "./node_modules/kapellmeister/es/BaseNode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseNode", function() { return _BaseNode__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "now", function() { return d3_timer__WEBPACK_IMPORTED_MODULE_1__["now"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return d3_timer__WEBPACK_IMPORTED_MODULE_1__["timer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return d3_timer__WEBPACK_IMPORTED_MODULE_1__["interval"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return d3_timer__WEBPACK_IMPORTED_MODULE_1__["timeout"]; });




/***/ }),

/***/ "./node_modules/kapellmeister/es/utils.js":
/*!************************************************!*\
  !*** ./node_modules/kapellmeister/es/utils.js ***!
  \************************************************/
/*! exports provided: getTransitionId, extend, once, isNamespace, timingDefaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransitionId", function() { return getTransitionId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNamespace", function() { return isNamespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timingDefaults", function() { return timingDefaults; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var transitionId = 0;
function getTransitionId() {
  return ++transitionId;
}
function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }
}
function once(func) {
  var called = false;
  return function transitionEvent() {
    if (!called) {
      called = true;
      func.call(this);
    }
  };
}
function isNamespace(prop) {
  return _typeof(prop) === 'object' && Array.isArray(prop) === false;
}

var linear = function linear(t) {
  return +t;
};

var timingDefaults = {
  delay: 0,
  duration: 250,
  ease: linear
};

/***/ }),

/***/ "./node_modules/nuka-carousel/es/all-transitions.js":
/*!**********************************************************!*\
  !*** ./node_modules/nuka-carousel/es/all-transitions.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transitions_scroll_transition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transitions/scroll-transition */ "./node_modules/nuka-carousel/es/transitions/scroll-transition.js");
/* harmony import */ var _transitions_fade_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitions/fade-transition */ "./node_modules/nuka-carousel/es/transitions/fade-transition.js");
/* harmony import */ var _transitions_3d_scroll_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transitions/3d-scroll-transition */ "./node_modules/nuka-carousel/es/transitions/3d-scroll-transition.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  fade: _transitions_fade_transition__WEBPACK_IMPORTED_MODULE_1__["default"],
  scroll: _transitions_scroll_transition__WEBPACK_IMPORTED_MODULE_0__["default"],
  scroll3d: _transitions_3d_scroll_transition__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./node_modules/nuka-carousel/es/announce-slide.js":
/*!*********************************************************!*\
  !*** ./node_modules/nuka-carousel/es/announce-slide.js ***!
  \*********************************************************/
/*! exports provided: defaultRenderAnnounceSlideMessage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRenderAnnounceSlideMessage", function() { return defaultRenderAnnounceSlideMessage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var AnnounceSlide = function AnnounceSlide(_ref) {
  var message = _ref.message;
  var styles = {
    position: 'absolute',
    left: '-10000px',
    top: 'auto',
    width: '1px',
    height: '1px',
    overflow: 'hidden'
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "aria-live": "polite",
    "aria-atomic": "true",
    style: styles,
    tabIndex: -1
  }, message);
};

var defaultRenderAnnounceSlideMessage = function defaultRenderAnnounceSlideMessage(_ref2) {
  var currentSlide = _ref2.currentSlide,
      slideCount = _ref2.slideCount;
  return "Slide ".concat(currentSlide + 1, " of ").concat(slideCount);
};
/* harmony default export */ __webpack_exports__["default"] = (AnnounceSlide);

/***/ }),

/***/ "./node_modules/nuka-carousel/es/default-controls.js":
/*!***********************************************************!*\
  !*** ./node_modules/nuka-carousel/es/default-controls.js ***!
  \***********************************************************/
/*! exports provided: PreviousButton, NextButton, PagingDots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousButton", function() { return PreviousButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextButton", function() { return NextButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagingDots", function() { return PagingDots; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var defaultButtonStyles = function defaultButtonStyles(disabled) {
  return {
    border: 0,
    background: 'rgba(0,0,0,0.4)',
    color: 'white',
    padding: 10,
    opacity: disabled ? 0.3 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer'
  };
};

var PreviousButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PreviousButton, _React$Component);

  function PreviousButton() {
    var _this;

    _classCallCheck(this, PreviousButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PreviousButton).apply(this, arguments));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PreviousButton, [{
    key: "handleClick",
    value: function handleClick(event) {
      event.preventDefault();
      this.props.previousSlide();
    }
  }, {
    key: "render",
    value: function render() {
      var disabled = this.props.currentSlide === 0 && !this.props.wrapAround || this.props.slideCount === 0;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        style: defaultButtonStyles(disabled),
        disabled: disabled,
        onClick: this.handleClick,
        "aria-label": "previous"
      }, "PREV");
    }
  }]);

  return PreviousButton;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
var NextButton =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(NextButton, _React$Component2);

  function NextButton() {
    var _this2;

    _classCallCheck(this, NextButton);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(NextButton).apply(this, arguments));
    _this2.handleClick = _this2.handleClick.bind(_assertThisInitialized(_this2));
    _this2.nextButtonDisable = _this2.nextButtonDisabled.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(NextButton, [{
    key: "handleClick",
    value: function handleClick(event) {
      event.preventDefault();
      this.props.nextSlide();
    }
  }, {
    key: "nextButtonDisabled",
    value: function nextButtonDisabled(params) {
      var wrapAround = params.wrapAround,
          slidesToShow = params.slidesToShow,
          currentSlide = params.currentSlide,
          cellAlign = params.cellAlign,
          slideCount = params.slideCount;
      var buttonDisabled = false;

      if (!wrapAround) {
        var lastSlideIndex = slideCount - 1;
        var slidesShowing = slidesToShow;
        var lastSlideOffset = 0;

        switch (cellAlign) {
          case 'center':
            slidesShowing = (slidesToShow - 1) * 0.5;
            lastSlideOffset = Math.floor(slidesToShow * 0.5) - 1;
            break;

          case 'right':
            slidesShowing = 1;
            break;
        }

        if (slidesToShow > 1) {
          buttonDisabled = currentSlide + slidesShowing > lastSlideIndex + lastSlideOffset;
        } else {
          buttonDisabled = currentSlide + 1 > lastSlideIndex;
        }
      }

      return buttonDisabled;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          wrapAround = _this$props.wrapAround,
          slidesToShow = _this$props.slidesToShow,
          currentSlide = _this$props.currentSlide,
          cellAlign = _this$props.cellAlign,
          slideCount = _this$props.slideCount;
      var disabled = this.nextButtonDisabled({
        wrapAround: wrapAround,
        slidesToShow: slidesToShow,
        currentSlide: currentSlide,
        cellAlign: cellAlign,
        slideCount: slideCount
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        style: defaultButtonStyles(disabled),
        disabled: disabled,
        onClick: this.handleClick,
        "aria-label": "next"
      }, "NEXT");
    }
  }]);

  return NextButton;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
var PagingDots =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(PagingDots, _React$Component3);

  function PagingDots() {
    _classCallCheck(this, PagingDots);

    return _possibleConstructorReturn(this, _getPrototypeOf(PagingDots).apply(this, arguments));
  }

  _createClass(PagingDots, [{
    key: "getDotIndexes",
    value: function getDotIndexes(slideCount, slidesToScroll, slidesToShow, cellAlign) {
      var dotIndexes = [];
      var lastDotIndex = slideCount - slidesToShow;

      switch (cellAlign) {
        case 'center':
        case 'right':
          lastDotIndex += slidesToShow - 1;
          break;
      }

      if (lastDotIndex < 0) {
        return [0];
      }

      for (var i = 0; i < lastDotIndex; i += slidesToScroll) {
        dotIndexes.push(i);
      }

      dotIndexes.push(lastDotIndex);
      return dotIndexes;
    }
  }, {
    key: "getListStyles",
    value: function getListStyles() {
      return {
        position: 'relative',
        margin: 0,
        top: -10,
        padding: 0
      };
    }
  }, {
    key: "getListItemStyles",
    value: function getListItemStyles() {
      return {
        listStyleType: 'none',
        display: 'inline-block'
      };
    }
  }, {
    key: "getButtonStyles",
    value: function getButtonStyles(active) {
      return {
        cursor: 'pointer',
        opacity: active ? 1 : 0.5,
        background: 'transparent',
        border: 'none'
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var indexes = this.getDotIndexes(this.props.slideCount, this.props.slidesToScroll, this.props.slidesToShow, this.props.cellAlign);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        style: this.getListStyles()
      }, indexes.map(function (index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          style: _this3.getListItemStyles(),
          key: index,
          className: _this3.props.currentSlide === index ? 'paging-item active' : 'paging-item'
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          type: "button",
          style: _this3.getButtonStyles(_this3.props.currentSlide === index),
          onClick: _this3.props.goToSlide.bind(null, index),
          "aria-label": "slide ".concat(index + 1, " bullet")
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "paging-dot",
          style: {
            display: 'inline-block',
            borderRadius: '50%',
            width: '6px',
            height: '6px',
            background: 'black'
          }
        })));
      }));
    }
  }]);

  return PagingDots;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./node_modules/nuka-carousel/es/index.js":
/*!************************************************!*\
  !*** ./node_modules/nuka-carousel/es/index.js ***!
  \************************************************/
/*! exports provided: default, NextButton, PreviousButton, PagingDots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carousel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(exenv__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_move_Animate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-move/Animate */ "./node_modules/react-move/Animate/index.js");
/* harmony import */ var react_move_Animate__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_move_Animate__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-ease */ "./node_modules/d3-ease/src/index.js");
/* harmony import */ var _default_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./default-controls */ "./node_modules/nuka-carousel/es/default-controls.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NextButton", function() { return _default_controls__WEBPACK_IMPORTED_MODULE_5__["NextButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PreviousButton", function() { return _default_controls__WEBPACK_IMPORTED_MODULE_5__["PreviousButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagingDots", function() { return _default_controls__WEBPACK_IMPORTED_MODULE_5__["PagingDots"]; });

/* harmony import */ var _all_transitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-transitions */ "./node_modules/nuka-carousel/es/all-transitions.js");
/* harmony import */ var _announce_slide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./announce-slide */ "./node_modules/nuka-carousel/es/announce-slide.js");
/* harmony import */ var _utilities_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utilities/utilities */ "./node_modules/nuka-carousel/es/utilities/utilities.js");
/* harmony import */ var _utilities_style_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utilities/style-utilities */ "./node_modules/nuka-carousel/es/utilities/style-utilities.js");
/* harmony import */ var _utilities_bootstrapping_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utilities/bootstrapping-utilities */ "./node_modules/nuka-carousel/es/utilities/bootstrapping-utilities.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }













var Carousel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Carousel, _React$Component);

  function Carousel() {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Carousel).apply(this, arguments));
    _this.displayName = 'Carousel';
    _this.clickDisabled = false;
    _this.isTransitioning = false;
    _this.touchObject = {};
    _this.controlsMap = [{
      funcName: 'renderTopLeftControls',
      key: 'TopLeft'
    }, {
      funcName: 'renderTopCenterControls',
      key: 'TopCenter'
    }, {
      funcName: 'renderTopRightControls',
      key: 'TopRight'
    }, {
      funcName: 'renderCenterLeftControls',
      key: 'CenterLeft'
    }, {
      funcName: 'renderCenterCenterControls',
      key: 'CenterCenter'
    }, {
      funcName: 'renderCenterRightControls',
      key: 'CenterRight'
    }, {
      funcName: 'renderBottomLeftControls',
      key: 'BottomLeft'
    }, {
      funcName: 'renderBottomCenterControls',
      key: 'BottomCenter'
    }, {
      funcName: 'renderBottomRightControls',
      key: 'BottomRight'
    }];
    _this.childNodesMutationObs = null;
    _this.state = _objectSpread({
      currentSlide: _this.props.slideIndex,
      dragging: false,
      easing: _this.props.disableAnimation ? '' : d3_ease__WEBPACK_IMPORTED_MODULE_4__["easeCircleOut"],
      hasInteraction: false,
      // to remove animation from the initial slide on the page load when non-default slideIndex is used
      isWrappingAround: false,
      left: 0,
      resetWrapAroundPosition: false,
      slideCount: Object(_utilities_bootstrapping_utilities__WEBPACK_IMPORTED_MODULE_10__["getValidChildren"])(_this.props.children).length,
      top: 0,
      wrapToIndex: null
    }, Object(_utilities_utilities__WEBPACK_IMPORTED_MODULE_8__["calcSomeInitialState"])(_this.props));
    _this.autoplayIterator = _this.autoplayIterator.bind(_assertThisInitialized(_this));
    _this.calcSlideHeightAndWidth = _this.calcSlideHeightAndWidth.bind(_assertThisInitialized(_this));
    _this.getChildNodes = _this.getChildNodes.bind(_assertThisInitialized(_this));
    _this.getMouseEvents = _this.getMouseEvents.bind(_assertThisInitialized(_this));
    _this.getOffsetDeltas = _this.getOffsetDeltas.bind(_assertThisInitialized(_this));
    _this.getTargetLeft = _this.getTargetLeft.bind(_assertThisInitialized(_this));
    _this.getTouchEvents = _this.getTouchEvents.bind(_assertThisInitialized(_this));
    _this.goToSlide = _this.goToSlide.bind(_assertThisInitialized(_this));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.handleKeyPress = _this.handleKeyPress.bind(_assertThisInitialized(_this));
    _this.handleMouseOut = _this.handleMouseOut.bind(_assertThisInitialized(_this));
    _this.handleMouseOver = _this.handleMouseOver.bind(_assertThisInitialized(_this));
    _this.handleSwipe = _this.handleSwipe.bind(_assertThisInitialized(_this));
    _this.nextSlide = _this.nextSlide.bind(_assertThisInitialized(_this));
    _this.onReadyStateChange = _this.onReadyStateChange.bind(_assertThisInitialized(_this));
    _this.onResize = _this.onResize.bind(_assertThisInitialized(_this));
    _this.onVisibilityChange = _this.onVisibilityChange.bind(_assertThisInitialized(_this));
    _this.previousSlide = _this.previousSlide.bind(_assertThisInitialized(_this));
    _this.renderControls = _this.renderControls.bind(_assertThisInitialized(_this));
    _this.resetAutoplay = _this.resetAutoplay.bind(_assertThisInitialized(_this));
    _this.setDimensions = _this.setDimensions.bind(_assertThisInitialized(_this));
    _this.setLeft = _this.setLeft.bind(_assertThisInitialized(_this));
    _this.setSlideHeightAndWidth = _this.setSlideHeightAndWidth.bind(_assertThisInitialized(_this));
    _this.startAutoplay = _this.startAutoplay.bind(_assertThisInitialized(_this));
    _this.stopAutoplay = _this.stopAutoplay.bind(_assertThisInitialized(_this));
    _this.establishChildNodesMutationObserver = _this.establishChildNodesMutationObserver.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // see https://github.com/facebook/react/issues/3417#issuecomment-121649937
      this.mounted = true;
      this.setLeft();
      this.setDimensions();
      this.bindEvents();
      this.establishChildNodesMutationObserver();

      if (this.props.autoplay) {
        this.startAutoplay();
      }
    } // @TODO Remove deprecated componentWillReceiveProps with getDerivedStateFromProps
    // eslint-disable-next-line react/no-deprecated

  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var slideCount = Object(_utilities_bootstrapping_utilities__WEBPACK_IMPORTED_MODULE_10__["getValidChildren"])(nextProps.children).length;
      var slideCountChanged = slideCount !== this.state.slideCount;
      this.setState(function (prevState) {
        return {
          slideCount: slideCount,
          currentSlide: slideCountChanged ? nextProps.slideIndex : prevState.currentSlide
        };
      });

      if (slideCount <= this.state.currentSlide) {
        this.goToSlide(Math.max(slideCount - 1, 0), nextProps);
      }

      var updateDimensions = slideCountChanged || Object(_utilities_utilities__WEBPACK_IMPORTED_MODULE_8__["shouldUpdate"])(this.props, nextProps, ['cellSpacing', 'vertical', 'slideWidth', 'slideHeight', 'heightMode', 'slidesToScroll', 'slidesToShow', 'transitionMode', 'cellAlign']);

      if (updateDimensions) {
        this.setDimensions(nextProps);
      }

      if (this.props.slideIndex !== nextProps.slideIndex && nextProps.slideIndex !== this.state.currentSlide && !this.state.isWrappingAround) {
        this.goToSlide(nextProps.slideIndex, this.props);
      }

      if (this.props.autoplay !== nextProps.autoplay) {
        if (nextProps.autoplay) {
          this.startAutoplay();
        } else {
          this.stopAutoplay();
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var slideChanged = prevState.currentSlide !== this.state.currentSlide;
      var heightModeChanged = prevProps.heightMode !== this.props.heightMode;
      var axisChanged = prevProps.vertical !== this.props.vertical;

      if (axisChanged) {
        this.onResize();
      } else if (slideChanged || heightModeChanged) {
        this.setSlideHeightAndWidth();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindEvents();
      this.disconnectChildNodesMutationObserver();
      this.stopAutoplay(); // see https://github.com/facebook/react/issues/3417#issuecomment-121649937

      this.mounted = false;
    }
  }, {
    key: "establishChildNodesMutationObserver",
    value: function establishChildNodesMutationObserver() {
      var _this2 = this;

      var childNodes = this.getChildNodes();

      if (childNodes.length && 'MutationObserver' in window) {
        this.childNodesMutationObs = new MutationObserver(function (mutations) {
          mutations.forEach(function () {
            _this2.setSlideHeightAndWidth();
          });
        });

        var observeChildNodeMutation = function observeChildNodeMutation(node) {
          _this2.childNodesMutationObs.observe(node, {
            attributes: true,
            attributeFilter: ['style'],
            attributeOldValue: false,
            characterData: false,
            characterDataOldValue: false,
            childList: false,
            subtree: false
          });
        };

        var childNodesArray = Array.from(childNodes);

        for (var _i = 0, _childNodesArray = childNodesArray; _i < _childNodesArray.length; _i++) {
          var node = _childNodesArray[_i];
          observeChildNodeMutation(node);
        }
      }
    }
  }, {
    key: "disconnectChildNodesMutationObserver",
    value: function disconnectChildNodesMutationObserver() {
      if (this.childNodesMutationObs instanceof MutationObserver) {
        this.childNodesMutationObs.disconnect();
      }
    }
  }, {
    key: "getTouchEvents",
    value: function getTouchEvents() {
      var _this3 = this;

      if (this.props.swiping === false) {
        return {
          onTouchStart: this.handleMouseOver,
          onTouchEnd: this.handleMouseOut
        };
      }

      return {
        onTouchStart: function onTouchStart(e) {
          _this3.touchObject = {
            startX: e.touches[0].pageX,
            startY: e.touches[0].pageY
          };

          _this3.handleMouseOver();

          if (_this3.props.onDragStart) {
            _this3.props.onDragStart();
          }

          _this3.setState({
            dragging: true
          });
        },
        onTouchMove: function onTouchMove(e) {
          var direction = Object(_utilities_utilities__WEBPACK_IMPORTED_MODULE_8__["swipeDirection"])(_this3.touchObject.startX, e.touches[0].pageX, _this3.touchObject.startY, e.touches[0].pageY, _this3.props.vertical);

          if (direction !== 0) {
            e.preventDefault();
          }

          var length = _this3.props.vertical ? Math.round(Math.sqrt(Math.pow(e.touches[0].pageY - _this3.touchObject.startY, 2))) : Math.round(Math.sqrt(Math.pow(e.touches[0].pageX - _this3.touchObject.startX, 2)));
          _this3.touchObject = {
            startX: _this3.touchObject.startX,
            startY: _this3.touchObject.startY,
            endX: e.touches[0].pageX,
            endY: e.touches[0].pageY,
            length: length,
            direction: direction
          };

          _this3.setState({
            left: _this3.props.vertical ? 0 : _this3.getTargetLeft(_this3.touchObject.length * _this3.touchObject.direction),
            top: _this3.props.vertical ? _this3.getTargetLeft(_this3.touchObject.length * _this3.touchObject.direction) : 0
          });
        },
        onTouchEnd: function onTouchEnd(e) {
          _this3.handleSwipe(e);

          _this3.handleMouseOut();
        },
        onTouchCancel: function onTouchCancel(e) {
          _this3.handleSwipe(e);
        }
      };
    }
  }, {
    key: "getMouseEvents",
    value: function getMouseEvents() {
      var _this4 = this;

      if (this.props.dragging === false) {
        return {
          onMouseOver: this.handleMouseOver,
          onMouseOut: this.handleMouseOut
        };
      }

      return {
        onMouseOver: this.handleMouseOver,
        onMouseOut: this.handleMouseOut,
        onMouseDown: function onMouseDown(e) {
          _this4.touchObject = {
            startX: e.clientX,
            startY: e.clientY
          };

          if (_this4.props.onDragStart) {
            _this4.props.onDragStart();
          }

          _this4.setState({
            dragging: true
          });
        },
        onMouseMove: function onMouseMove(e) {
          if (!_this4.state.dragging) {
            return;
          }

          var direction = Object(_utilities_utilities__WEBPACK_IMPORTED_MODULE_8__["swipeDirection"])(_this4.touchObject.startX, e.clientX, _this4.touchObject.startY, e.clientY, _this4.props.vertical);

          if (direction !== 0) {
            e.preventDefault();
          }

          var length = _this4.props.vertical ? Math.round(Math.sqrt(Math.pow(e.clientY - _this4.touchObject.startY, 2))) : Math.round(Math.sqrt(Math.pow(e.clientX - _this4.touchObject.startX, 2))); // prevents disabling click just because mouse moves a fraction of a pixel

          if (length >= 10) _this4.clickDisabled = true;
          _this4.touchObject = {
            startX: _this4.touchObject.startX,
            startY: _this4.touchObject.startY,
            endX: e.clientX,
            endY: e.clientY,
            length: length,
            direction: direction
          };

          _this4.setState({
            left: _this4.props.vertical ? 0 : _this4.getTargetLeft(_this4.touchObject.length * _this4.touchObject.direction),
            top: _this4.props.vertical ? _this4.getTargetLeft(_this4.touchObject.length * _this4.touchObject.direction) : 0
          });
        },
        onMouseUp: function onMouseUp(e) {
          if (_this4.touchObject.length === 0 || _this4.touchObject.length === undefined) {
            _this4.setState({
              dragging: false
            });

            return;
          }

          _this4.handleSwipe(e);
        },
        onMouseLeave: function onMouseLeave(e) {
          if (!_this4.state.dragging) {
            return;
          }

          _this4.handleSwipe(e);
        }
      };
    }
  }, {
    key: "pauseAutoplay",
    value: function pauseAutoplay() {
      if (this.props.autoplay) {
        this.autoplayPaused = true;
        this.stopAutoplay();
      }
    }
  }, {
    key: "unpauseAutoplay",
    value: function unpauseAutoplay() {
      if (this.props.autoplay && this.autoplayPaused) {
        this.startAutoplay();
        this.autoplayPaused = null;
      }
    }
  }, {
    key: "handleMouseOver",
    value: function handleMouseOver() {
      if (this.props.pauseOnHover) {
        this.pauseAutoplay();
      }
    }
  }, {
    key: "handleMouseOut",
    value: function handleMouseOut() {
      if (this.autoplayPaused) {
        this.unpauseAutoplay();
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      if (this.clickDisabled === true) {
        if (event.metaKey || event.shiftKey || event.altKey || event.ctrlKey) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();

        if (event.nativeEvent) {
          event.nativeEvent.stopPropagation();
        }
      }
    }
  }, {
    key: "handleSwipe",
    value: function handleSwipe() {
      var _this5 = this;

      var slidesToShow = this.state.slidesToShow;

      if (this.props.slidesToScroll === 'auto') {
        slidesToShow = this.state.slidesToScroll;
      }

      if (this.touchObject.length > this.state.slideWidth / slidesToShow / 5) {
        if (this.touchObject.direction === 1) {
          if (this.state.currentSlide >= this.state.slideCount - slidesToShow && !this.props.wrapAround) {
            this.setState({
              easing: d3_ease__WEBPACK_IMPORTED_MODULE_4__[this.props.edgeEasing]
            });
          } else {
            this.nextSlide();
          }
        } else if (this.touchObject.direction === -1) {
          if (this.state.currentSlide <= 0 && !this.props.wrapAround) {
            this.setState({
              easing: d3_ease__WEBPACK_IMPORTED_MODULE_4__[this.props.edgeEasing]
            });
          } else {
            this.previousSlide();
          }
        }
      } else {
        this.goToSlide(this.state.currentSlide);
      } // wait for `handleClick` event before resetting clickDisabled


      setTimeout(function () {
        _this5.clickDisabled = false;
      }, 0);
      this.touchObject = {};
      this.setState({
        dragging: false
      });
    } // eslint-disable-next-line complexity

  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(e) {
      if (this.props.enableKeyboardControls) {
        switch (e.keyCode) {
          case 39:
          case 68:
          case 38:
          case 87:
            this.nextSlide();
            break;

          case 37:
          case 65:
          case 40:
          case 83:
            this.previousSlide();
            break;

          case 81:
            this.goToSlide(0, this.props);
            break;

          case 69:
            this.goToSlide(this.state.slideCount - 1, this.props);
            break;

          case 32:
            if (this.state.pauseOnHover && this.props.autoplay) {
              this.setState({
                pauseOnHover: false
              });
              this.pauseAutoplay();
              break;
            } else {
              this.setState({
                pauseOnHover: true
              });
              this.unpauseAutoplay();
              break;
            }

        }
      }
    }
  }, {
    key: "autoplayIterator",
    value: function autoplayIterator() {
      if (this.props.wrapAround) {
        if (this.props.autoplayReverse) {
          this.previousSlide();
        } else {
          this.nextSlide();
        }

        return;
      }

      if (this.props.autoplayReverse) {
        if (this.state.currentSlide !== 0) {
          this.previousSlide();
        } else {
          this.stopAutoplay();
        }
      } else if (this.state.currentSlide !== this.state.slideCount - this.state.slidesToShow) {
        this.nextSlide();
      } else {
        this.stopAutoplay();
      }
    }
  }, {
    key: "startAutoplay",
    value: function startAutoplay() {
      this.autoplayID = setInterval(this.autoplayIterator, this.props.autoplayInterval);
    }
  }, {
    key: "resetAutoplay",
    value: function resetAutoplay() {
      if (this.props.autoplay && !this.autoplayPaused) {
        this.stopAutoplay();
        this.startAutoplay();
      }
    }
  }, {
    key: "stopAutoplay",
    value: function stopAutoplay() {
      if (this.autoplayID) {
        clearInterval(this.autoplayID);
      }
    } // Animation Method

  }, {
    key: "getTargetLeft",
    value: function getTargetLeft(touchOffset, slide) {
      var offset;
      var target = slide || this.state.currentSlide;

      switch (this.state.cellAlign) {
        case 'left':
          {
            offset = 0;
            offset -= this.props.cellSpacing * target;
            break;
          }

        case 'center':
          {
            offset = (this.state.frameWidth - this.state.slideWidth) / 2;
            offset -= this.props.cellSpacing * target;
            break;
          }

        case 'right':
          {
            offset = this.state.frameWidth - this.state.slideWidth;
            offset -= this.props.cellSpacing * target;
            break;
          }
      }

      var left = this.state.slideWidth * target;
      var lastSlide = this.state.currentSlide > 0 && target + this.state.slidesToScroll >= this.state.slideCount;

      if (lastSlide && this.props.slideWidth !== 1 && !this.props.wrapAround && this.props.slidesToScroll === 'auto') {
        left = this.state.slideWidth * this.state.slideCount - this.state.frameWidth;
        offset = 0;
        offset -= this.props.cellSpacing * (this.state.slideCount - 1);
      }

      offset -= touchOffset || 0;
      return (left - offset) * -1;
    }
  }, {
    key: "getOffsetDeltas",
    value: function getOffsetDeltas() {
      var offset = 0;

      if (this.state.isWrappingAround) {
        offset = this.getTargetLeft(null, this.state.wrapToIndex);
      } else {
        offset = this.getTargetLeft(this.touchObject.length * this.touchObject.direction);
      }

      return {
        tx: [this.props.vertical ? 0 : offset],
        ty: [this.props.vertical ? offset : 0]
      };
    }
  }, {
    key: "isEdgeSwiping",
    value: function isEdgeSwiping() {
      var _this$state = this.state,
          slideCount = _this$state.slideCount,
          slideWidth = _this$state.slideWidth;

      var _this$getOffsetDeltas = this.getOffsetDeltas(),
          tx = _this$getOffsetDeltas.tx; // returns true if tx offset is outside first or last slide


      return tx > 0 || -tx > slideWidth * (slideCount - 1);
    } // Action Methods

  }, {
    key: "goToSlide",
    value: function goToSlide(index, props) {
      var _this6 = this;

      if (props === undefined) {
        props = this.props;
      }

      if (this.isTransitioning) {
        return;
      }

      this.setState({
        hasInteraction: true,
        easing: d3_ease__WEBPACK_IMPORTED_MODULE_4__[props.easing]
      });
      this.isTransitioning = true;
      var previousSlide = this.state.currentSlide;

      if (index >= this.state.slideCount || index < 0) {
        if (!props.wrapAround) {
          this.isTransitioning = false;
          return;
        }

        if (index >= this.state.slideCount) {
          props.beforeSlide(this.state.currentSlide, 0);
          this.setState(function (prevState) {
            return {
              left: props.vertical ? 0 : _this6.getTargetLeft(_this6.state.slideWidth, prevState.currentSlide),
              top: props.vertical ? _this6.getTargetLeft(_this6.state.slideWidth, prevState.currentSlide) : 0,
              currentSlide: 0,
              isWrappingAround: true,
              wrapToIndex: index
            };
          }, function () {
            setTimeout(function () {
              _this6.resetAutoplay();

              _this6.isTransitioning = false;

              if (index !== previousSlide) {
                _this6.props.afterSlide(0);
              }
            }, props.speed);
          });
          return;
        } else {
          var endSlide = this.state.slideCount - this.state.slidesToScroll;
          props.beforeSlide(this.state.currentSlide, endSlide);
          this.setState(function (prevState) {
            return {
              left: props.vertical ? 0 : _this6.getTargetLeft(0, prevState.currentSlide),
              top: props.vertical ? _this6.getTargetLeft(0, prevState.currentSlide) : 0,
              currentSlide: endSlide,
              isWrappingAround: true,
              wrapToIndex: index
            };
          }, function () {
            setTimeout(function () {
              _this6.resetAutoplay();

              _this6.isTransitioning = false;

              if (index !== previousSlide) {
                _this6.props.afterSlide(_this6.state.slideCount - 1);
              }
            }, props.speed);
          });
          return;
        }
      }

      this.props.beforeSlide(this.state.currentSlide, index);
      this.setState({
        currentSlide: index
      }, function () {
        return setTimeout(function () {
          _this6.resetAutoplay();

          _this6.isTransitioning = false;

          if (index !== previousSlide) {
            _this6.props.afterSlide(index);
          }
        }, props.speed);
      });
    }
  }, {
    key: "nextSlide",
    value: function nextSlide() {
      var childrenCount = this.state.slideCount;
      var slidesToShow = this.state.slidesToShow;

      if (this.props.slidesToScroll === 'auto') {
        slidesToShow = this.state.slidesToScroll;
      }

      if (this.state.currentSlide >= childrenCount - slidesToShow && !this.props.wrapAround && this.props.cellAlign === 'left') {
        return;
      }

      if (this.props.wrapAround) {
        this.goToSlide(this.state.currentSlide + this.state.slidesToScroll);
      } else {
        if (this.props.slideWidth !== 1) {
          this.goToSlide(this.state.currentSlide + this.state.slidesToScroll);
          return;
        }

        var offset = this.state.currentSlide + this.state.slidesToScroll;
        var nextSlideIndex = this.props.cellAlign !== 'left' ? offset : Math.min(offset, childrenCount - slidesToShow);
        this.goToSlide(nextSlideIndex);
      }
    }
  }, {
    key: "previousSlide",
    value: function previousSlide() {
      if (this.state.currentSlide <= 0 && !this.props.wrapAround) {
        return;
      }

      if (this.props.wrapAround) {
        this.goToSlide(this.state.currentSlide - this.state.slidesToScroll);
      } else {
        this.goToSlide(Math.max(0, this.state.currentSlide - this.state.slidesToScroll));
      }
    } // Bootstrapping

  }, {
    key: "bindEvents",
    value: function bindEvents() {
      if (exenv__WEBPACK_IMPORTED_MODULE_2___default.a.canUseDOM) {
        Object(_utilities_utilities__WEBPACK_IMPORTED_MODULE_8__["addEvent"])(window, 'resize', this.onResize);
        Object(_utilities_utilities__WEBPACK_IMPORTED_MODULE_8__["addEvent"])(document, 'readystatechange', this.onReadyStateChange);
        Object(_utilities_utilities__WEBPACK_IMPORTED_MODULE_8__["addEvent"])(document, 'visibilitychange', this.onVisibilityChange);
        Object(_utilities_utilities__WEBPACK_IMPORTED_MODULE_8__["addEvent"])(document, 'keydown', this.handleKeyPress);
      }
    }
  }, {
    key: "onResize",
    value: function onResize() {
      this.setDimensions(null, this.props.onResize);
    }
  }, {
    key: "onReadyStateChange",
    value: function onReadyStateChange() {
      this.setDimensions();
    }
  }, {
    key: "onVisibilityChange",
    value: function onVisibilityChange() {
      if (document.hidden) {
        this.pauseAutoplay();
      } else {
        this.unpauseAutoplay();
      }
    }
  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      if (exenv__WEBPACK_IMPORTED_MODULE_2___default.a.canUseDOM) {
        Object(_utilities_utilities__WEBPACK_IMPORTED_MODULE_8__["removeEvent"])(window, 'resize', this.onResize);
        Object(_utilities_utilities__WEBPACK_IMPORTED_MODULE_8__["removeEvent"])(document, 'readystatechange', this.onReadyStateChange);
        Object(_utilities_utilities__WEBPACK_IMPORTED_MODULE_8__["removeEvent"])(document, 'visibilitychange', this.onVisibilityChange);
        Object(_utilities_utilities__WEBPACK_IMPORTED_MODULE_8__["removeEvent"])(document, 'keydown', this.handleKeyPress);
      }
    }
  }, {
    key: "calcSlideHeightAndWidth",
    value: function calcSlideHeightAndWidth(props) {
      // slide height
      props = props || this.props;
      var childNodes = this.getChildNodes();
      var slideHeight = Object(_utilities_bootstrapping_utilities__WEBPACK_IMPORTED_MODULE_10__["getSlideHeight"])(props, this.state, childNodes); //slide width

      var _getPropsByTransition = Object(_utilities_utilities__WEBPACK_IMPORTED_MODULE_8__["getPropsByTransitionMode"])(props, ['slidesToShow']),
          slidesToShow = _getPropsByTransition.slidesToShow;

      var frame = this.frame;
      var slideWidth;

      if (this.props.animation === 'zoom') {
        slideWidth = frame.offsetWidth - frame.offsetWidth * 15 / 100;
      } else if (typeof props.slideWidth !== 'number') {
        slideWidth = parseInt(props.slideWidth);
      } else if (props.vertical) {
        slideWidth = slideHeight / slidesToShow * props.slideWidth;
      } else {
        slideWidth = frame.offsetWidth / slidesToShow * props.slideWidth;
      }

      if (!props.vertical) {
        slideWidth -= props.cellSpacing * ((100 - 100 / slidesToShow) / 100);
      }

      return {
        slideHeight: slideHeight,
        slideWidth: slideWidth
      };
    }
  }, {
    key: "setSlideHeightAndWidth",
    value: function setSlideHeightAndWidth() {
      this.setState(this.calcSlideHeightAndWidth());
    }
  }, {
    key: "setDimensions",
    value: function setDimensions(props) {
      var _this7 = this;

      var stateCb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      props = props || this.props;

      var _getPropsByTransition2 = Object(_utilities_utilities__WEBPACK_IMPORTED_MODULE_8__["getPropsByTransitionMode"])(props, ['slidesToShow', 'cellAlign']),
          slidesToShow = _getPropsByTransition2.slidesToShow,
          cellAlign = _getPropsByTransition2.cellAlign;

      var frame = this.frame;

      var _this$calcSlideHeight = this.calcSlideHeightAndWidth(props),
          slideHeight = _this$calcSlideHeight.slideHeight,
          slideWidth = _this$calcSlideHeight.slideWidth;

      var frameHeight = slideHeight + props.cellSpacing * (slidesToShow - 1);
      var frameWidth = props.vertical ? frameHeight : frame.offsetWidth;

      var _getPropsByTransition3 = Object(_utilities_utilities__WEBPACK_IMPORTED_MODULE_8__["getPropsByTransitionMode"])(props, ['slidesToScroll']),
          slidesToScroll = _getPropsByTransition3.slidesToScroll;

      if (slidesToScroll === 'auto') {
        slidesToScroll = Math.floor(frameWidth / (slideWidth + props.cellSpacing));
      }

      this.setState({
        frameWidth: frameWidth,
        slideHeight: slideHeight,
        slidesToScroll: slidesToScroll,
        slidesToShow: slidesToShow,
        slideWidth: slideWidth,
        cellAlign: cellAlign,
        left: props.vertical ? 0 : this.getTargetLeft(),
        top: props.vertical ? this.getTargetLeft() : 0
      }, function () {
        stateCb();

        _this7.setLeft();
      });
    }
  }, {
    key: "getChildNodes",
    value: function getChildNodes() {
      return this.frame.childNodes[0].childNodes;
    }
  }, {
    key: "setLeft",
    value: function setLeft() {
      var newLeft = this.props.vertical ? 0 : this.getTargetLeft();
      var newTop = this.props.vertical ? this.getTargetLeft() : 0;

      if (newLeft !== this.state.left || newTop !== this.state.top) {
        this.setState({
          left: newLeft,
          top: newTop
        });
      }
    }
  }, {
    key: "renderControls",
    value: function renderControls() {
      var _this8 = this;

      if (this.props.withoutControls) {
        return this.controlsMap.map(function () {
          return null;
        });
      } else {
        return this.controlsMap.map(function (_ref) {
          var funcName = _ref.funcName,
              key = _ref.key;
          var func = _this8.props[funcName];
          return func && typeof func === 'function' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "slider-control-".concat(key.toLowerCase()),
            style: Object(_utilities_style_utilities__WEBPACK_IMPORTED_MODULE_9__["getDecoratorStyles"])(key),
            key: key
          }, func({
            cellAlign: _this8.props.cellAlign,
            cellSpacing: _this8.props.cellSpacing,
            currentSlide: _this8.state.currentSlide,
            frameWidth: _this8.state.frameWidth,
            goToSlide: function goToSlide(index) {
              return _this8.goToSlide(index);
            },
            nextSlide: function nextSlide() {
              return _this8.nextSlide();
            },
            previousSlide: function previousSlide() {
              return _this8.previousSlide();
            },
            slideCount: _this8.state.slideCount,
            slidesToScroll: _this8.state.slidesToScroll,
            slidesToShow: _this8.state.slidesToShow,
            slideWidth: _this8.state.slideWidth,
            wrapAround: _this8.props.wrapAround
          }));
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this9 = this;

      var _this$state2 = this.state,
          currentSlide = _this$state2.currentSlide,
          slideCount = _this$state2.slideCount,
          frameWidth = _this$state2.frameWidth;
      var _this$props = this.props,
          frameOverflow = _this$props.frameOverflow,
          vertical = _this$props.vertical,
          framePadding = _this$props.framePadding,
          slidesToShow = _this$props.slidesToShow,
          renderAnnounceSlideMessage = _this$props.renderAnnounceSlideMessage,
          disableAnimation = _this$props.disableAnimation;
      var duration = this.state.dragging || !this.state.dragging && this.state.resetWrapAroundPosition && this.props.wrapAround || disableAnimation || !this.state.hasInteraction ? 0 : this.props.speed;
      var frameStyles = Object(_utilities_style_utilities__WEBPACK_IMPORTED_MODULE_9__["getFrameStyles"])(frameOverflow, vertical, framePadding, frameWidth);
      var touchEvents = this.getTouchEvents();
      var mouseEvents = this.getMouseEvents();
      var TransitionControl = _all_transitions__WEBPACK_IMPORTED_MODULE_6__["default"][this.props.transitionMode];
      var validChildren = Object(_utilities_bootstrapping_utilities__WEBPACK_IMPORTED_MODULE_10__["getValidChildren"])(this.props.children);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: ['slider', this.props.className || ''].join(' '),
        style: _extends({}, Object(_utilities_style_utilities__WEBPACK_IMPORTED_MODULE_9__["getSliderStyles"])(this.props.width, this.props.height), this.props.style)
      }, !this.props.autoplay && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_announce_slide__WEBPACK_IMPORTED_MODULE_7__["default"], {
        message: renderAnnounceSlideMessage({
          currentSlide: currentSlide,
          slideCount: slideCount
        })
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
        className: "slider-frame",
        ref: function ref(frame) {
          return _this9.frame = frame;
        },
        style: frameStyles
      }, touchEvents, mouseEvents, {
        onClickCapture: this.handleClick
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_move_Animate__WEBPACK_IMPORTED_MODULE_3___default.a, {
        show: true,
        start: {
          tx: 0,
          ty: 0
        },
        update: function update() {
          var _this9$getOffsetDelta = _this9.getOffsetDeltas(),
              tx = _this9$getOffsetDelta.tx,
              ty = _this9$getOffsetDelta.ty;

          if (_this9.props.disableEdgeSwiping && !_this9.props.wrapAround && _this9.isEdgeSwiping()) {
            return {};
          } else {
            return {
              tx: tx,
              ty: ty,
              timing: {
                duration: duration,
                ease: _this9.state.easing
              },
              events: {
                end: function end() {
                  var newLeft = _this9.props.vertical ? 0 : _this9.getTargetLeft();
                  var newTop = _this9.props.vertical ? _this9.getTargetLeft() : 0;

                  if (newLeft !== _this9.state.left || newTop !== _this9.state.top) {
                    _this9.setState({
                      left: newLeft,
                      top: newTop,
                      isWrappingAround: false,
                      resetWrapAroundPosition: true
                    }, function () {
                      _this9.setState({
                        resetWrapAroundPosition: false
                      });
                    });
                  }
                }
              }
            };
          }
        },
        children: function children(_ref2) {
          var tx = _ref2.tx,
              ty = _ref2.ty;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TransitionControl, _extends({}, Object(_utilities_style_utilities__WEBPACK_IMPORTED_MODULE_9__["getTransitionProps"])(_this9.props, _this9.state), {
            deltaX: tx,
            deltaY: ty
          }), Object(_utilities_bootstrapping_utilities__WEBPACK_IMPORTED_MODULE_10__["addAccessibility"])(validChildren, slidesToShow, currentSlide));
        }
      })), this.renderControls(), this.props.autoGenerateStyleTag && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
        type: "text/css",
        dangerouslySetInnerHTML: {
          __html: Object(_utilities_style_utilities__WEBPACK_IMPORTED_MODULE_9__["getImgTagStyles"])()
        }
      }));
    }
  }]);

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


Carousel.propTypes = {
  afterSlide: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  animation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['zoom']),
  autoGenerateStyleTag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  autoplay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  autoplayInterval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  autoplayReverse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  beforeSlide: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  cellAlign: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['left', 'center', 'right']),
  cellSpacing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  enableKeyboardControls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  disableAnimation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  disableEdgeSwiping: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  dragging: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  easing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  edgeEasing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  frameOverflow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  framePadding: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  heightMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['first', 'current', 'max']),
  initialSlideHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  initialSlideWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  onDragStart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onResize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  pauseOnHover: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  renderAnnounceSlideMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  renderBottomCenterControls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  renderBottomLeftControls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  renderBottomRightControls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  renderCenterCenterControls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  renderCenterLeftControls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  renderCenterRightControls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  renderTopCenterControls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  renderTopLeftControls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  renderTopRightControls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  slideIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slideOffset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slidesToScroll: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['auto'])]),
  slidesToShow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slideWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  speed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  swiping: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  transitionMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['scroll', 'fade', 'scroll3d']),
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  withoutControls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  wrapAround: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  opacityScale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slideListMargin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
Carousel.defaultProps = {
  afterSlide: function afterSlide() {},
  autoGenerateStyleTag: true,
  autoplay: false,
  autoplayInterval: 3000,
  autoplayReverse: false,
  beforeSlide: function beforeSlide() {},
  cellAlign: 'left',
  cellSpacing: 0,
  enableKeyboardControls: false,
  disableAnimation: false,
  disableEdgeSwiping: false,
  dragging: true,
  easing: 'easeCircleOut',
  edgeEasing: 'easeElasticOut',
  frameOverflow: 'hidden',
  framePadding: '0px',
  height: 'auto',
  heightMode: 'max',
  onResize: function onResize() {},
  pauseOnHover: true,
  renderAnnounceSlideMessage: _announce_slide__WEBPACK_IMPORTED_MODULE_7__["defaultRenderAnnounceSlideMessage"],
  renderBottomCenterControls: function renderBottomCenterControls(props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_default_controls__WEBPACK_IMPORTED_MODULE_5__["PagingDots"], props);
  },
  renderCenterLeftControls: function renderCenterLeftControls(props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_default_controls__WEBPACK_IMPORTED_MODULE_5__["PreviousButton"], props);
  },
  renderCenterRightControls: function renderCenterRightControls(props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_default_controls__WEBPACK_IMPORTED_MODULE_5__["NextButton"], props);
  },
  slideIndex: 0,
  slideOffset: 25,
  slidesToScroll: 1,
  slidesToShow: 1,
  slideWidth: 1,
  speed: 500,
  style: {},
  swiping: true,
  transitionMode: 'scroll',
  vertical: false,
  width: '100%',
  withoutControls: false,
  wrapAround: false,
  slideListMargin: 10
};


/***/ }),

/***/ "./node_modules/nuka-carousel/es/transitions/3d-scroll-transition.js":
/*!***************************************************************************!*\
  !*** ./node_modules/nuka-carousel/es/transitions/3d-scroll-transition.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollTransition3D; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var MIN_ZOOM_SCALE = 0;
var MAX_ZOOM_SCALE = 1;

var ScrollTransition3D =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ScrollTransition3D, _React$Component);

  function ScrollTransition3D(props) {
    var _this;

    _classCallCheck(this, ScrollTransition3D);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScrollTransition3D).call(this, props));
    _this.getListStyles = _this.getListStyles.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ScrollTransition3D, [{
    key: "getSlideDirection",
    value: function getSlideDirection(start, end, isWrapping) {
      var direction = 0;
      if (start === end) return direction;

      if (isWrapping) {
        direction = start < end ? -1 : 1;
      } else {
        direction = start < end ? 1 : -1;
      }

      return direction;
    }
    /* eslint-disable complexity */

  }, {
    key: "getSlideTargetPosition",
    value: function getSlideTargetPosition(index) {
      var targetPosition = 0;
      var offset = 0;

      if (index !== this.props.currentSlide) {
        var relativeDistanceToCurrentSlide = this.getRelativeDistanceToCurrentSlide(index);
        targetPosition = (this.props.slideWidth + this.props.cellSpacing) * relativeDistanceToCurrentSlide - this.getZoomOffsetFor(relativeDistanceToCurrentSlide);
        offset = 0;

        if (this.props.animation === 'zoom' && (this.props.currentSlide === index + 1 || this.props.currentSlide === 0 && index === this.props.children.length - 1)) {
          offset = this.props.slideOffset;
        } else if (this.props.animation === 'zoom' && (this.props.currentSlide === index - 1 || this.props.currentSlide === this.props.children.length - 1 && index === 0)) {
          offset = -this.props.slideOffset;
        }
      }

      return targetPosition + offset;
    }
    /* eslint-enable complexity */

  }, {
    key: "formatChildren",
    value: function formatChildren(children) {
      var _this2 = this;

      var _this$props = this.props,
          top = _this$props.top,
          left = _this$props.left,
          currentSlide = _this$props.currentSlide,
          slidesToShow = _this$props.slidesToShow;
      var positionValue = this.props.vertical ? top : left;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child, index) {
        var visible = _this2.getDistanceToCurrentSlide(index) <= slidesToShow / 2;
        var current = currentSlide === index;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "slider-slide".concat(visible ? ' slide-visible' : '').concat(current ? ' slide-current' : ''),
          style: _this2.getSlideStyles(index, positionValue),
          key: index
        }, child);
      });
    }
  }, {
    key: "getZoomOffsetFor",
    value: function getZoomOffsetFor(relativeDistanceToCurrent) {
      if (relativeDistanceToCurrent === 0) {
        return 0;
      }

      var marginGeneratedByZoom = (1 - Math.pow(this.props.zoomScale, Math.abs(relativeDistanceToCurrent))) * this.props.slideWidth;
      var direction = relativeDistanceToCurrent < 0 ? -1 : 1;
      var result = marginGeneratedByZoom * direction + this.getZoomOffsetFor(relativeDistanceToCurrent < 0 ? relativeDistanceToCurrent + 1 : relativeDistanceToCurrent - 1);
      return result;
    }
  }, {
    key: "getDistance",
    value: function getDistance(index, referenceIndex) {
      return Math.abs(index - referenceIndex);
    }
  }, {
    key: "getDistanceToCurrentSlide",
    value: function getDistanceToCurrentSlide(index) {
      return this.props.wrapAround ? Math.min(Math.min(this.getDistance(index, 0) + this.getDistance(this.props.currentSlide, this.props.slideCount), this.getDistance(index, this.props.slideCount) + this.getDistance(this.props.currentSlide, 0)), this.getDistance(index, this.props.currentSlide)) : this.getDistance(index, this.props.currentSlide);
    }
  }, {
    key: "getRelativeDistanceToCurrentSlide",
    value: function getRelativeDistanceToCurrentSlide(index) {
      if (this.props.wrapAround) {
        var distanceByLeftEge = this.getDistance(index, 0) + this.getDistance(this.props.currentSlide, this.props.slideCount);
        var distanceByRightEdge = this.getDistance(index, this.props.slideCount) + this.getDistance(this.props.currentSlide, 0);
        var absoluteDirectDistance = this.getDistance(index, this.props.currentSlide);
        var minimumDistance = Math.min(Math.min(distanceByLeftEge, distanceByRightEdge), absoluteDirectDistance);

        switch (minimumDistance) {
          case absoluteDirectDistance:
            return index - this.props.currentSlide;

          case distanceByLeftEge:
            return distanceByLeftEge;

          case distanceByRightEdge:
            return -distanceByRightEdge;

          default:
            return 0;
        }
      } else {
        return index - this.props.currentSlide;
      }
    }
  }, {
    key: "getTransformScale",
    value: function getTransformScale(index) {
      return this.props.currentSlide !== index ? Math.max(Math.min(Math.pow(this.props.zoomScale, this.getDistanceToCurrentSlide(index)), MAX_ZOOM_SCALE), MIN_ZOOM_SCALE) : 1.0;
    }
  }, {
    key: "getOpacityScale",
    value: function getOpacityScale(index) {
      return this.props.currentSlide !== index ? Math.max(Math.min(Math.pow(this.props.opacityScale, this.getDistanceToCurrentSlide(index)), MAX_ZOOM_SCALE), MIN_ZOOM_SCALE) : 1.0;
    }
  }, {
    key: "getSlideStyles",
    value: function getSlideStyles(index, positionValue) {
      var targetPosition = this.getSlideTargetPosition(index, positionValue);
      var transformScale = this.getTransformScale(index);
      return {
        zIndex: this.props.slideCount - this.getDistanceToCurrentSlide(index),
        boxSizing: 'border-box',
        display: this.props.vertical ? 'block' : 'inline-block',
        height: 'auto',
        left: this.props.vertical ? 0 : targetPosition,
        listStyleType: 'none',
        marginBottom: this.props.vertical ? this.props.cellSpacing / 2 : 'auto',
        marginLeft: this.props.vertical ? 'auto' : this.props.cellSpacing / 2,
        marginRight: this.props.vertical ? 'auto' : this.props.cellSpacing / 2,
        marginTop: this.props.vertical ? this.props.cellSpacing / 2 : 'auto',
        MozBoxSizing: 'border-box',
        position: 'absolute',
        top: this.props.vertical ? targetPosition : 0,
        transform: "scale(".concat(transformScale, ")"),
        transition: 'left 0.4s ease-out, transform 0.4s ease-out, opacity 0.4s ease-out',
        verticalAlign: 'top',
        width: this.props.vertical ? '100%' : this.props.slideWidth,
        opacity: this.getOpacityScale(index)
      };
    }
  }, {
    key: "getListStyles",
    value: function getListStyles() {
      var listWidth = this.props.slideWidth * react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(this.props.children);
      var spacingOffset = this.props.cellSpacing * react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(this.props.children);
      return {
        left: "calc(50% - (".concat(this.props.slideWidth, "px / 2))"),
        position: 'relative',
        margin: this.props.vertical ? "".concat(this.props.cellSpacing / 2 * -1, "px 0px") : "".concat(this.props.slideListMargin, "px ").concat(this.props.cellSpacing / 2 * -1, "px"),
        padding: 0,
        height: this.props.vertical ? listWidth + spacingOffset : this.props.slideHeight,
        width: this.props.vertical ? 'auto' : '100%',
        cursor: this.props.dragging === true ? 'pointer' : 'inherit',
        boxSizing: 'border-box',
        MozBoxSizing: 'border-box',
        touchAction: "pinch-zoom ".concat(this.props.vertical ? 'pan-x' : 'pan-y')
      };
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.formatChildren(this.props.children);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "slider-list",
        style: this.getListStyles()
      }, children);
    }
  }]);

  return ScrollTransition3D;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


ScrollTransition3D.propTypes = {
  cellSpacing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  currentSlide: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  dragging: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isWrappingAround: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slideCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slideHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slideOffset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slideWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  wrapAround: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  zoomScale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  opacityScale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slidesToShow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slideListMargin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
ScrollTransition3D.defaultProps = {
  cellSpacing: 0,
  currentSlide: 0,
  dragging: false,
  isWrappingAround: false,
  left: 0,
  slideCount: 0,
  slideHeight: 0,
  slideWidth: 0,
  top: 0,
  vertical: false,
  wrapAround: true,
  zoomScale: 0.75,
  opacityScale: 0.65,
  slidesToShow: 3,
  slideListMargin: 10
};

/***/ }),

/***/ "./node_modules/nuka-carousel/es/transitions/fade-transition.js":
/*!**********************************************************************!*\
  !*** ./node_modules/nuka-carousel/es/transitions/fade-transition.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FadeTransition; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var FadeTransition =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FadeTransition, _React$Component);

  function FadeTransition(props) {
    var _this;

    _classCallCheck(this, FadeTransition);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FadeTransition).call(this, props));
    _this.fadeFromSlide = props.currentSlide;
    return _this;
  }

  _createClass(FadeTransition, [{
    key: "formatChildren",
    value: function formatChildren(children, opacity) {
      var _this2 = this;

      var _this$props = this.props,
          currentSlide = _this$props.currentSlide,
          slidesToShow = _this$props.slidesToShow;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child, index) {
        var visible = index >= currentSlide && index < currentSlide + slidesToShow;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "slider-slide".concat(visible ? ' slide-visible' : ''),
          style: _this2.getSlideStyles(index, opacity),
          key: index
        }, child);
      });
    }
  }, {
    key: "getSlideOpacityAndLeftMap",
    value: function getSlideOpacityAndLeftMap(fadeFrom, fadeTo, fade) {
      // Figure out which position to fade to
      var fadeToPosition = fadeTo;

      if (fadeFrom > fade && fadeFrom === 0) {
        fadeToPosition = fadeFrom - this.props.slidesToShow;
      } else if (fadeFrom < fade && fadeFrom + this.props.slidesToShow > this.props.slideCount - 1) {
        fadeToPosition = fadeFrom + this.props.slidesToShow;
      } // Calculate opacity for active slides


      var opacity = {};

      if (fadeFrom === fadeTo) {
        opacity[fadeFrom] = 1;
      } else {
        var distance = fadeFrom - fadeToPosition;
        opacity[fadeFrom] = (fade - fadeToPosition) / distance;
        opacity[fadeTo] = (fadeFrom - fade) / distance;
      } // Calculate left for slides and merge in opacity


      var map = {};

      for (var i = 0; i < this.props.slidesToShow; i++) {
        map[fadeFrom + i] = {
          opacity: opacity[fadeFrom],
          left: this.props.slideWidth * i
        };
        map[fadeTo + i] = {
          opacity: opacity[fadeTo],
          left: this.props.slideWidth * i
        };
      }

      return map;
    }
  }, {
    key: "getSlideStyles",
    value: function getSlideStyles(index, data) {
      return {
        boxSizing: 'border-box',
        display: 'block',
        height: 'auto',
        left: data[index] ? data[index].left : 0,
        listStyleType: 'none',
        marginBottom: 'auto',
        marginLeft: this.props.cellSpacing / 2,
        marginRight: this.props.cellSpacing / 2,
        marginTop: 'auto',
        MozBoxSizing: 'border-box',
        opacity: data[index] ? data[index].opacity : 0,
        position: 'absolute',
        top: 0,
        verticalAlign: 'top',
        visibility: data[index] ? 'inherit' : 'hidden',
        width: this.props.slideWidth
      };
    }
  }, {
    key: "getContainerStyles",
    value: function getContainerStyles() {
      var width = this.props.slideWidth * this.props.slidesToShow;
      return {
        boxSizing: 'border-box',
        cursor: this.props.dragging === true ? 'pointer' : 'inherit',
        display: 'block',
        height: this.props.slideHeight,
        margin: this.props.vertical ? "".concat(this.props.cellSpacing / 2 * -1, "px 0px") : "0px ".concat(this.props.cellSpacing / 2 * -1, "px"),
        MozBoxSizing: 'border-box',
        padding: 0,
        touchAction: 'none',
        width: width
      };
    }
  }, {
    key: "render",
    value: function render() {
      var fade = -(this.props.deltaX || this.props.deltaY) / this.props.slideWidth;

      if (parseInt(fade) === fade) {
        this.fadeFromSlide = fade;
      }

      var opacityAndLeftMap = this.getSlideOpacityAndLeftMap(this.fadeFromSlide, this.props.currentSlide, fade);
      var children = this.formatChildren(this.props.children, opacityAndLeftMap);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "slider-list",
        style: this.getContainerStyles()
      }, children);
    }
  }]);

  return FadeTransition;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


FadeTransition.propTypes = {
  cellSpacing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  currentSlide: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  deltaX: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  deltaY: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  dragging: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isWrappingAround: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slideCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slideHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slidesToShow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slideWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  wrapAround: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
FadeTransition.defaultProps = {
  cellSpacing: 0,
  currentSlide: 0,
  deltaX: 0,
  deltaY: 0,
  dragging: false,
  isWrappingAround: false,
  left: 0,
  slideCount: 0,
  slideHeight: 0,
  slidesToShow: 1,
  slideWidth: 0,
  top: 0,
  vertical: false,
  wrapAround: false
};

/***/ }),

/***/ "./node_modules/nuka-carousel/es/transitions/scroll-transition.js":
/*!************************************************************************!*\
  !*** ./node_modules/nuka-carousel/es/transitions/scroll-transition.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollTransition; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var MIN_ZOOM_SCALE = 0;
var MAX_ZOOM_SCALE = 1;

var ScrollTransition =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ScrollTransition, _React$Component);

  function ScrollTransition(props) {
    var _this;

    _classCallCheck(this, ScrollTransition);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScrollTransition).call(this, props));
    _this.getListStyles = _this.getListStyles.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ScrollTransition, [{
    key: "getSlideDirection",
    value: function getSlideDirection(start, end, isWrapping) {
      var direction = 0;
      if (start === end) return direction;

      if (isWrapping) {
        direction = start < end ? -1 : 1;
      } else {
        direction = start < end ? 1 : -1;
      }

      return direction;
    }
    /* eslint-disable complexity */

  }, {
    key: "getSlideTargetPosition",
    value: function getSlideTargetPosition(index, positionValue) {
      var targetPosition = (this.props.slideWidth + this.props.cellSpacing) * index;
      var startSlide = Math.min(Math.abs(Math.floor(positionValue / this.props.slideWidth)), this.props.slideCount - 1);
      var offset = 0;

      if (this.props.animation === 'zoom' && (this.props.currentSlide === index + 1 || this.props.currentSlide === 0 && index === this.props.children.length - 1)) {
        offset = this.props.slideOffset;
      } else if (this.props.animation === 'zoom' && (this.props.currentSlide === index - 1 || this.props.currentSlide === this.props.children.length - 1 && index === 0)) {
        offset = -this.props.slideOffset;
      }

      if (this.props.wrapAround && index !== startSlide) {
        var direction = this.getSlideDirection(startSlide, this.props.currentSlide, this.props.isWrappingAround);
        var slidesBefore = Math.floor((this.props.slideCount - 1) / 2);
        var slidesAfter = this.props.slideCount - slidesBefore - 1;

        if (direction < 0) {
          var temp = slidesBefore;
          slidesBefore = slidesAfter;
          slidesAfter = temp;
        }

        var distanceFromStart = Math.abs(startSlide - index);

        if (index < startSlide) {
          if (distanceFromStart > slidesBefore) {
            targetPosition = (this.props.slideWidth + this.props.cellSpacing) * (this.props.slideCount + index);
          }
        } else if (distanceFromStart > slidesAfter) {
          targetPosition = (this.props.slideWidth + this.props.cellSpacing) * (this.props.slideCount - index) * -1;
        }
      }

      return targetPosition + offset;
    }
    /* eslint-enable complexity */

  }, {
    key: "formatChildren",
    value: function formatChildren(children) {
      var _this2 = this;

      var _this$props = this.props,
          top = _this$props.top,
          left = _this$props.left,
          currentSlide = _this$props.currentSlide,
          slidesToShow = _this$props.slidesToShow;
      var positionValue = this.props.vertical ? top : left;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child, index) {
        var visible = index >= currentSlide && index < currentSlide + slidesToShow;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "slider-slide".concat(visible ? ' slide-visible' : ''),
          style: _this2.getSlideStyles(index, positionValue),
          key: index
        }, child);
      });
    }
  }, {
    key: "getSlideStyles",
    value: function getSlideStyles(index, positionValue) {
      var targetPosition = this.getSlideTargetPosition(index, positionValue);
      var transformScale = this.props.animation === 'zoom' && this.props.currentSlide !== index ? Math.max(Math.min(this.props.zoomScale, MAX_ZOOM_SCALE), MIN_ZOOM_SCALE) : 1.0;
      return {
        boxSizing: 'border-box',
        display: this.props.vertical ? 'block' : 'inline-block',
        height: 'auto',
        left: this.props.vertical ? 0 : targetPosition,
        listStyleType: 'none',
        marginBottom: this.props.vertical ? this.props.cellSpacing / 2 : 'auto',
        marginLeft: this.props.vertical ? 'auto' : this.props.cellSpacing / 2,
        marginRight: this.props.vertical ? 'auto' : this.props.cellSpacing / 2,
        marginTop: this.props.vertical ? this.props.cellSpacing / 2 : 'auto',
        MozBoxSizing: 'border-box',
        position: 'absolute',
        top: this.props.vertical ? targetPosition : 0,
        transform: "scale(".concat(transformScale, ")"),
        transition: 'transform .4s linear',
        verticalAlign: 'top',
        width: this.props.vertical ? '100%' : this.props.slideWidth
      };
    }
  }, {
    key: "getListStyles",
    value: function getListStyles(styles) {
      var deltaX = styles.deltaX,
          deltaY = styles.deltaY;
      var listWidth = this.props.slideWidth * react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(this.props.children);
      var spacingOffset = this.props.cellSpacing * react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(this.props.children);
      var transform = "translate3d(".concat(deltaX, "px, ").concat(deltaY, "px, 0)");
      return {
        transform: transform,
        WebkitTransform: transform,
        msTransform: "translate(".concat(deltaX, "px, ").concat(deltaY, "px)"),
        position: 'relative',
        display: 'block',
        margin: this.props.vertical ? "".concat(this.props.cellSpacing / 2 * -1, "px 0px") : "0px ".concat(this.props.cellSpacing / 2 * -1, "px"),
        padding: 0,
        height: this.props.vertical ? listWidth + spacingOffset : this.props.slideHeight,
        width: this.props.vertical ? 'auto' : listWidth + spacingOffset,
        cursor: this.props.dragging === true ? 'pointer' : 'inherit',
        boxSizing: 'border-box',
        MozBoxSizing: 'border-box',
        touchAction: "pinch-zoom ".concat(this.props.vertical ? 'pan-x' : 'pan-y')
      };
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.formatChildren(this.props.children);
      var deltaX = this.props.deltaX;
      var deltaY = this.props.deltaY;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "slider-list",
        style: this.getListStyles({
          deltaX: deltaX,
          deltaY: deltaY
        })
      }, children);
    }
  }]);

  return ScrollTransition;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


ScrollTransition.propTypes = {
  animation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['zoom']),
  cellSpacing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  currentSlide: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  deltaX: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  deltaY: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  dragging: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isWrappingAround: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slideCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slideHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slideOffset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slideWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  wrapAround: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  zoomScale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
ScrollTransition.defaultProps = {
  cellSpacing: 0,
  currentSlide: 0,
  deltaX: 0,
  deltaY: 0,
  dragging: false,
  isWrappingAround: false,
  left: 0,
  slideCount: 0,
  slideHeight: 0,
  slideWidth: 0,
  top: 0,
  vertical: false,
  wrapAround: false,
  zoomScale: 0.85
};

/***/ }),

/***/ "./node_modules/nuka-carousel/es/utilities/bootstrapping-utilities.js":
/*!****************************************************************************!*\
  !*** ./node_modules/nuka-carousel/es/utilities/bootstrapping-utilities.js ***!
  \****************************************************************************/
/*! exports provided: addAccessibility, getValidChildren, getSlideHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAccessibility", function() { return addAccessibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValidChildren", function() { return getValidChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlideHeight", function() { return getSlideHeight; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var addAccessibility = function addAccessibility(children, slidesToShow, currentSlide) {
  var needsTabIndex;

  if (slidesToShow > 1) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child, index) {
      // create a range from first visible slide to last visible slide
      var firstVisibleSlide = index >= currentSlide;
      var lastVisibleSlide = index < slidesToShow + currentSlide;
      needsTabIndex = firstVisibleSlide && lastVisibleSlide; // if the index of the slide is in range add ariaProps to the slide

      var ariaProps = needsTabIndex ? {
        'aria-hidden': 'false',
        tabIndex: 0
      } : {
        'aria-hidden': 'true'
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, _objectSpread({}, child.props, ariaProps));
    });
  } else {
    // when slidesToshow is 1
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child, index) {
      needsTabIndex = index !== currentSlide;
      var ariaProps = needsTabIndex ? {
        'aria-hidden': 'true'
      } : {
        'aria-hidden': 'false',
        tabIndex: 0
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, _objectSpread({}, child.props, ariaProps));
    });
  }
};
var getValidChildren = function getValidChildren(children) {
  // .toArray automatically removes invalid React children
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(children);
};

var findMaxHeightSlide = function findMaxHeightSlide(slides) {
  var maxHeight = 0;

  for (var i = 0; i < slides.length; i++) {
    if (slides[i].offsetHeight > maxHeight) {
      maxHeight = slides[i].offsetHeight;
    }
  }

  return maxHeight;
};

var getSlideHeight = function getSlideHeight(props, state) {
  var childNodes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var heightMode = props.heightMode,
      vertical = props.vertical,
      initialSlideHeight = props.initialSlideHeight;
  var slidesToShow = state.slidesToShow,
      currentSlide = state.currentSlide;
  var firstSlide = childNodes[0];

  if (firstSlide && heightMode === 'first') {
    return vertical ? firstSlide.offsetHeight * slidesToShow : firstSlide.offsetHeight;
  }

  if (heightMode === 'max') {
    return findMaxHeightSlide(childNodes);
  }

  if (heightMode === 'current') {
    return childNodes[currentSlide].offsetHeight;
  }

  return initialSlideHeight || 100;
};

/***/ }),

/***/ "./node_modules/nuka-carousel/es/utilities/style-utilities.js":
/*!********************************************************************!*\
  !*** ./node_modules/nuka-carousel/es/utilities/style-utilities.js ***!
  \********************************************************************/
/*! exports provided: getImgTagStyles, getDecoratorStyles, getSliderStyles, getFrameStyles, getTransitionProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImgTagStyles", function() { return getImgTagStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDecoratorStyles", function() { return getDecoratorStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSliderStyles", function() { return getSliderStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFrameStyles", function() { return getFrameStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransitionProps", function() { return getTransitionProps; });
var getImgTagStyles = function getImgTagStyles() {
  return ".slider-slide > img { width: 100%; display: block; }\n          .slider-slide > img:focus { margin: auto; }";
};
var getDecoratorStyles = function getDecoratorStyles(position) {
  switch (position) {
    case 'TopLeft':
      {
        return {
          position: 'absolute',
          top: 0,
          left: 0
        };
      }

    case 'TopCenter':
      {
        return {
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          WebkitTransform: 'translateX(-50%)',
          msTransform: 'translateX(-50%)'
        };
      }

    case 'TopRight':
      {
        return {
          position: 'absolute',
          top: 0,
          right: 0
        };
      }

    case 'CenterLeft':
      {
        return {
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          WebkitTransform: 'translateY(-50%)',
          msTransform: 'translateY(-50%)'
        };
      }

    case 'CenterCenter':
      {
        return {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          WebkitTransform: 'translate(-50%, -50%)',
          msTransform: 'translate(-50%, -50%)'
        };
      }

    case 'CenterRight':
      {
        return {
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
          WebkitTransform: 'translateY(-50%)',
          msTransform: 'translateY(-50%)'
        };
      }

    case 'BottomLeft':
      {
        return {
          position: 'absolute',
          bottom: 0,
          left: 0
        };
      }

    case 'BottomCenter':
      {
        return {
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          WebkitTransform: 'translateX(-50%)',
          msTransform: 'translateX(-50%)'
        };
      }

    case 'BottomRight':
      {
        return {
          position: 'absolute',
          bottom: 0,
          right: 0
        };
      }

    default:
      {
        return {
          position: 'absolute',
          top: 0,
          left: 0
        };
      }
  }
};
var getSliderStyles = function getSliderStyles(propWidth, propHeight) {
  return {
    boxSizing: 'border-box',
    display: 'block',
    height: propHeight,
    MozBoxSizing: 'border-box',
    position: 'relative',
    width: propWidth
  };
};
var getFrameStyles = function getFrameStyles(propFrameOverFlow, propVertical, propFramePadding, stateFrameWidth) {
  return {
    boxSizing: 'border-box',
    display: 'block',
    height: propVertical ? stateFrameWidth || 'initial' : '100%',
    margin: propFramePadding,
    MozBoxSizing: 'border-box',
    msTransform: 'translate(0, 0)',
    overflow: propFrameOverFlow,
    padding: 0,
    position: 'relative',
    touchAction: "pinch-zoom ".concat(propVertical ? 'pan-x' : 'pan-y'),
    transform: 'translate3d(0, 0, 0)',
    WebkitTransform: 'translate3d(0, 0, 0)'
  };
};
var getTransitionProps = function getTransitionProps(props, state) {
  return {
    animation: props.animation,
    cellSpacing: props.cellSpacing,
    currentSlide: state.currentSlide,
    dragging: props.dragging,
    isWrappingAround: state.isWrappingAround,
    left: state.left,
    slideCount: state.slideCount,
    slideHeight: state.slideHeight,
    slideOffset: props.slideOffset,
    slidesToShow: state.slidesToShow,
    slideWidth: state.slideWidth,
    top: state.top,
    vertical: props.vertical,
    wrapAround: props.wrapAround,
    zoomScale: props.zoomScale,
    opacityScale: props.opacityScale,
    slideListMargin: props.slideListMargin
  };
};

/***/ }),

/***/ "./node_modules/nuka-carousel/es/utilities/utilities.js":
/*!**************************************************************!*\
  !*** ./node_modules/nuka-carousel/es/utilities/utilities.js ***!
  \**************************************************************/
/*! exports provided: addEvent, removeEvent, addAccessibility, getPropsByTransitionMode, swipeDirection, shouldUpdate, calcSomeInitialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEvent", function() { return addEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEvent", function() { return removeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAccessibility", function() { return addAccessibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropsByTransitionMode", function() { return getPropsByTransitionMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swipeDirection", function() { return swipeDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldUpdate", function() { return shouldUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcSomeInitialState", function() { return calcSomeInitialState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var addEvent = function addEvent(elem, type, eventHandle) {
  if (elem === null || typeof elem === 'undefined') {
    return;
  }

  if (elem.addEventListener) {
    elem.addEventListener(type, eventHandle, false);
  } else if (elem.attachEvent) {
    elem.attachEvent("on".concat(type), eventHandle);
  } else {
    elem["on".concat(type)] = eventHandle;
  }
};
var removeEvent = function removeEvent(elem, type, eventHandle) {
  if (elem === null || typeof elem === 'undefined') {
    return;
  }

  if (elem.removeEventListener) {
    elem.removeEventListener(type, eventHandle, false);
  } else if (elem.detachEvent) {
    elem.detachEvent("on".concat(type), eventHandle);
  } else {
    elem["on".concat(type)] = null;
  }
};
var addAccessibility = function addAccessibility(children, slidesToShow, currentSlide) {
  var needsTabIndex;

  if (slidesToShow > 1) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child, index) {
      var firstVisibleSlide = index >= currentSlide;
      var lastVisibleSlide = index < slidesToShow + currentSlide;
      needsTabIndex = firstVisibleSlide && lastVisibleSlide;
      var ariaProps = needsTabIndex ? {
        'aria-hidden': 'false',
        tabIndex: 0
      } : {
        'aria-hidden': 'true'
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, _objectSpread({}, child.props, ariaProps));
    });
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child, index) {
      needsTabIndex = index !== currentSlide;
      var ariaProps = needsTabIndex ? {
        'aria-hidden': 'true'
      } : {
        'aria-hidden': 'false',
        tabIndex: 0
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, _objectSpread({}, child.props, ariaProps));
    });
  }
};
var getPropsByTransitionMode = function getPropsByTransitionMode(props, keys) {
  var slidesToShow = props.slidesToShow,
      transitionMode = props.transitionMode;
  var updatedDefaults = {};

  if (transitionMode === 'fade') {
    keys.forEach(function (key) {
      switch (key) {
        case 'slidesToShow':
          updatedDefaults[key] = Math.max(parseInt(slidesToShow), 1);
          break;

        case 'slidesToScroll':
          updatedDefaults[key] = Math.max(parseInt(slidesToShow), 1);
          break;

        case 'cellAlign':
          updatedDefaults[key] = 'left';
          break;

        default:
          updatedDefaults[key] = props[key];
          break;
      }
    });
  } else {
    keys.forEach(function (key) {
      updatedDefaults[key] = props[key];
    });
  }

  return updatedDefaults;
};
var swipeDirection = function swipeDirection(x1, x2, y1, y2, vertical) {
  var xDist = x1 - x2;
  var yDist = y1 - y2;
  var r = Math.atan2(yDist, xDist);
  var swipeAngle = Math.round(r * 180 / Math.PI);

  if (swipeAngle < 0) {
    swipeAngle = 360 - Math.abs(swipeAngle);
  }

  if (swipeAngle <= 45 && swipeAngle >= 0) {
    return 1;
  }

  if (swipeAngle <= 360 && swipeAngle >= 315) {
    return 1;
  }

  if (swipeAngle >= 135 && swipeAngle <= 225) {
    return -1;
  }

  if (vertical === true) {
    if (swipeAngle >= 35 && swipeAngle <= 135) {
      return 1;
    } else {
      return -1;
    }
  }

  return 0;
};
var shouldUpdate = function shouldUpdate(curr, next, keys) {
  var update = false;

  for (var i = 0; i < keys.length; i++) {
    if (curr[keys[i]] !== next[keys[i]]) {
      update = true;
      break;
    }
  }

  return update;
};
var calcSomeInitialState = function calcSomeInitialState(props) {
  var _getPropsByTransition = getPropsByTransitionMode(props, ['slidesToScroll', 'slidesToShow', 'cellAlign']),
      slidesToScroll = _getPropsByTransition.slidesToScroll,
      slidesToShow = _getPropsByTransition.slidesToShow,
      cellAlign = _getPropsByTransition.cellAlign;

  var slideWidth = props.vertical ? props.initialSlideHeight || 0 : props.initialSlideWidth || 0;
  var slideHeight = props.vertical ? (props.initialSlideHeight || 0) * props.slidesToShow : props.initialSlideHeight || 0;
  var frameHeight = slideHeight + props.cellSpacing * (slidesToShow - 1);
  var frameWidth = props.vertical ? frameHeight : '100%';
  return {
    slideWidth: slideWidth,
    slideHeight: slideHeight,
    frameWidth: frameWidth,
    slidesToScroll: slidesToScroll,
    slidesToShow: slidesToShow,
    cellAlign: cellAlign
  };
};

/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/react-move/Animate/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-move/Animate/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/react-move/node_modules/prop-types/index.js"));

var _NodeGroup = _interopRequireDefault(__webpack_require__(/*! ../NodeGroup */ "./node_modules/react-move/NodeGroup/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-move/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var keyAccessor = function keyAccessor() {
  return '$$key$$';
};

var Animate = function (_Component) {
  _inherits(Animate, _Component);

  function Animate() {
    _classCallCheck(this, Animate);

    return _possibleConstructorReturn(this, _getPrototypeOf(Animate).apply(this, arguments));
  }

  _createClass(Animate, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          show = _this$props.show,
          start = _this$props.start,
          enter = _this$props.enter,
          update = _this$props.update,
          leave = _this$props.leave,
          interpolation = _this$props.interpolation,
          children = _this$props.children;
      var data = typeof start === 'function' ? start() : start;
      return _react.default.createElement(_NodeGroup.default, {
        data: show ? [data] : [],
        start: function start() {
          return data;
        },
        keyAccessor: keyAccessor,
        interpolation: interpolation,
        enter: typeof enter === 'function' ? enter : function () {
          return enter;
        },
        update: typeof update === 'function' ? update : function () {
          return update;
        },
        leave: typeof leave === 'function' ? leave : function () {
          return leave;
        }
      }, function (nodes) {
        if (!nodes[0]) {
          return null;
        }

        var renderedChildren = children(nodes[0].state);
        return renderedChildren && _react.default.Children.only(renderedChildren);
      });
    }
  }]);

  return Animate;
}(_react.Component);

Animate.propTypes =  true ? {
  show: _propTypes.default.bool,
  interpolation: _propTypes.default.func,
  start: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
  enter: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.array, _propTypes.default.object]),
  update: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.array, _propTypes.default.object]),
  leave: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.array, _propTypes.default.object]),
  children: _propTypes.default.func.isRequired
} : undefined;
Animate.defaultProps = {
  show: true,
  interpolation: _utils.numeric
};
var _default = Animate;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-move/NodeGroup/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-move/NodeGroup/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/react-move/node_modules/prop-types/index.js"));

var _kapellmeister = __webpack_require__(/*! kapellmeister */ "./node_modules/kapellmeister/es/index.js");

var _mergeKeys = _interopRequireDefault(__webpack_require__(/*! ../core/mergeKeys */ "./node_modules/react-move/core/mergeKeys.js"));

var _types = __webpack_require__(/*! ../core/types */ "./node_modules/react-move/core/types.js");

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-move/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NodeGroup = function (_Component) {
  _inherits(NodeGroup, _Component);

  function NodeGroup(props) {
    var _this;

    _classCallCheck(this, NodeGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NodeGroup).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "animate", function () {
      var _this$state = _this.state,
          nodeKeys = _this$state.nodeKeys,
          nodeHash = _this$state.nodeHash;

      if (_this.unmounting) {
        return;
      }

      var pending = false;
      var nextNodeKeys = [];
      var length = nodeKeys.length;

      for (var i = 0; i < length; i++) {
        var k = nodeKeys[i];
        var n = nodeHash[k];
        var isTransitioning = n.isTransitioning();

        if (isTransitioning) {
          pending = true;
        }

        if (n.type === _types.LEAVE && !isTransitioning) {
          delete nodeHash[k];
        } else {
          nextNodeKeys.push(k);
        }
      }

      if (!pending) {
        _this.interval.stop();
      }

      _this.setState(function () {
        return {
          nodeKeys: nextNodeKeys,
          nodes: nextNodeKeys.map(function (key) {
            return nodeHash[key];
          })
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "interval", null);

    _defineProperty(_assertThisInitialized(_this), "unmounting", false);

    var interpolation = props.interpolation;

    var Node = function (_BaseNode) {
      _inherits(Node, _BaseNode);

      function Node(key, data) {
        var _this2;

        _classCallCheck(this, Node);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Node).call(this));

        _defineProperty(_assertThisInitialized(_this2), "getInterpolator", interpolation);

        _this2.key = key;
        _this2.data = data;
        _this2.type = _types.ENTER;
        return _this2;
      }

      return Node;
    }(_kapellmeister.BaseNode);

    _this.state = {
      Node: Node,
      nodeKeys: [],
      nodeHash: {},
      nodes: [],
      data: null
    };
    return _this;
  }

  _createClass(NodeGroup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startInterval();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.data !== this.props.data && !this.unmounting) {
        this.startInterval();
      }
    }
  }, {
    key: "startInterval",
    value: function startInterval() {
      if (!this.interval) {
        this.interval = (0, _kapellmeister.interval)(this.animate);
      } else {
        this.interval.restart(this.animate);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$state2 = this.state,
          nodeKeys = _this$state2.nodeKeys,
          nodeHash = _this$state2.nodeHash;
      this.unmounting = true;

      if (this.interval) {
        this.interval.stop();
      }

      nodeKeys.forEach(function (key) {
        nodeHash[key].stopTransitions();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var renderedChildren = this.props.children(this.state.nodes);
      return renderedChildren && _react.default.Children.only(renderedChildren);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.data !== prevState.data) {
        var data = nextProps.data,
            keyAccessor = nextProps.keyAccessor,
            start = nextProps.start,
            enter = nextProps.enter,
            update = nextProps.update,
            leave = nextProps.leave;
        var Node = prevState.Node,
            nodeKeys = prevState.nodeKeys,
            nodeHash = prevState.nodeHash;
        var keyIndex = {};

        for (var i = 0; i < nodeKeys.length; i++) {
          keyIndex[nodeKeys[i]] = i;
        }

        var nextKeyIndex = {};
        var nextNodeKeys = [];

        for (var _i = 0; _i < data.length; _i++) {
          var d = data[_i];
          var k = keyAccessor(d, _i);
          nextKeyIndex[k] = _i;
          nextNodeKeys.push(k);

          if (keyIndex[k] === undefined) {
            var node = new Node();
            node.key = k;
            node.data = d;
            node.type = _types.ENTER;
            nodeHash[k] = node;
          }
        }

        for (var _i2 = 0; _i2 < nodeKeys.length; _i2++) {
          var _k = nodeKeys[_i2];
          var n = nodeHash[_k];

          if (nextKeyIndex[_k] !== undefined) {
            n.data = data[nextKeyIndex[_k]];
            n.type = _types.UPDATE;
          } else {
            n.type = _types.LEAVE;
          }
        }

        var mergedNodeKeys = (0, _mergeKeys.default)(nodeKeys, keyIndex, nextNodeKeys, nextKeyIndex);

        for (var _i3 = 0; _i3 < mergedNodeKeys.length; _i3++) {
          var _k2 = mergedNodeKeys[_i3];
          var _n = nodeHash[_k2];
          var _d = _n.data;

          if (_n.type === _types.ENTER) {
            _n.setState(start(_d, nextKeyIndex[_k2]));

            _n.transition(enter(_d, nextKeyIndex[_k2]));
          } else if (_n.type === _types.LEAVE) {
            _n.transition(leave(_d, keyIndex[_k2]));
          } else {
            _n.transition(update(_d, nextKeyIndex[_k2]));
          }
        }

        return {
          data: data,
          nodes: mergedNodeKeys.map(function (key) {
            return nodeHash[key];
          }),
          nodeHash: nodeHash,
          nodeKeys: mergedNodeKeys
        };
      }

      return null;
    }
  }]);

  return NodeGroup;
}(_react.Component);

NodeGroup.propTypes =  true ? {
  data: _propTypes.default.array.isRequired,
  keyAccessor: _propTypes.default.func.isRequired,
  interpolation: _propTypes.default.func,
  start: _propTypes.default.func.isRequired,
  enter: _propTypes.default.func,
  update: _propTypes.default.func,
  leave: _propTypes.default.func,
  children: _propTypes.default.func.isRequired
} : undefined;
NodeGroup.defaultProps = {
  enter: function enter() {},
  update: function update() {},
  leave: function leave() {},
  interpolation: _utils.numeric
};
(0, _reactLifecyclesCompat.polyfill)(NodeGroup);
var _default = NodeGroup;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-move/core/mergeKeys.js":
/*!***************************************************!*\
  !*** ./node_modules/react-move/core/mergeKeys.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function mergeKeys(currNodeKeys, currKeyIndex, nextNodeKeys, nextKeyIndex) {
  var allKeys = [];

  for (var i = 0; i < nextNodeKeys.length; i++) {
    allKeys[i] = nextNodeKeys[i];
  }

  for (var _i = 0; _i < currNodeKeys.length; _i++) {
    if (nextKeyIndex[currNodeKeys[_i]] === undefined) {
      allKeys.push(currNodeKeys[_i]);
    }
  }

  return allKeys.sort(function (a, b) {
    var nextOrderA = nextKeyIndex[a];
    var nextOrderB = nextKeyIndex[b];
    var currOrderA = currKeyIndex[a];
    var currOrderB = currKeyIndex[b];

    if (nextOrderA != null && nextOrderB != null) {
      return nextKeyIndex[a] - nextKeyIndex[b];
    } else if (currOrderA != null && currOrderB != null) {
      return currKeyIndex[a] - currKeyIndex[b];
    } else if (nextOrderA != null) {
      for (var _i2 = 0; _i2 < nextNodeKeys.length; _i2++) {
        var pivot = nextNodeKeys[_i2];

        if (!currKeyIndex[pivot]) {
          continue;
        }

        if (nextOrderA < nextKeyIndex[pivot] && currOrderB > currKeyIndex[pivot]) {
          return -1;
        } else if (nextOrderA > nextKeyIndex[pivot] && currOrderB < currKeyIndex[pivot]) {
          return 1;
        }
      }

      return 1;
    }

    for (var _i3 = 0; _i3 < nextNodeKeys.length; _i3++) {
      var _pivot = nextNodeKeys[_i3];

      if (!currKeyIndex[_pivot]) {
        continue;
      }

      if (nextOrderB < nextKeyIndex[_pivot] && currOrderA > currKeyIndex[_pivot]) {
        return 1;
      } else if (nextOrderB > nextKeyIndex[_pivot] && currOrderA < currKeyIndex[_pivot]) {
        return -1;
      }
    }

    return -1;
  });
}

var _default = mergeKeys;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-move/core/types.js":
/*!***********************************************!*\
  !*** ./node_modules/react-move/core/types.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LEAVE = exports.UPDATE = exports.ENTER = void 0;
var ENTER = 'ENTER';
exports.ENTER = ENTER;
var UPDATE = 'UPDATE';
exports.UPDATE = UPDATE;
var LEAVE = 'LEAVE';
exports.LEAVE = LEAVE;

/***/ }),

/***/ "./node_modules/react-move/node_modules/prop-types/checkPropTypes.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-move/node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/react-move/node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/react-move/node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-move/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/react-move/node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/react-move/node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/react-move/node_modules/prop-types/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-move/node_modules/prop-types/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/react-move/node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/react-move/node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-move/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-move/utils.js":
/*!******************************************!*\
  !*** ./node_modules/react-move/utils.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numeric = numeric;

function numeric(beg, end) {
  var a = +beg;
  var b = +end - a;
  return function (t) {
    return a + b * t;
  };
}

/***/ })

})
//# sourceMappingURL=index.js.86dfe5fc1ef091161b58.hot-update.js.map