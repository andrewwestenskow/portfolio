webpackHotUpdate("static\\development\\pages\\minesweeper.js",{

/***/ "./Games/minesweeper/index.js":
/*!************************************!*\
  !*** ./Games/minesweeper/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var difficulty = document.querySelector('select');
var timerHundreds = document.querySelector('.timer-hundreds');
var timerTens = document.querySelector('.timer-tens');
var timerOnes = document.querySelector('.timer-ones');
var minesHundreds = document.querySelector('.mines-hundreds');
var minesTens = document.querySelector('.mines-tens');
var minesOnes = document.querySelector('.mines-ones');
var game = [];
var mHundreds = 0;
var mTens = 0;
var mOnes = 0;
var hundreds = 0;
var tens = 0;
var ones = 0;
var fireworksId;
var timerId;
var mines; //GAME SETUP FUNCTIONS

var newGame = function newGame() {
  clearInterval(fireworksId);
  clearInterval(timerId);
  timerId = undefined;
  game = [];
  hundreds = 0;
  tens = 0;
  ones = 0;
  timerHundreds.innerText = 0;
  timerTens.innerText = 0;
  timerOnes.innerText = 0;
  var playArea = document.getElementById('play-area');
  playArea.innerHTML = '';
  playArea.classList = '';

  if (difficulty.value === 'easy') {
    mines = 10;
    mHundreds = 0;
    mTens = 1;
    mOnes = 0;
    minesHundreds.innerText = 0;
    minesTens.innerText = 1;
    minesOnes.innerText = 0;
    playArea.classList.add('easy');
    getSquares(81);
    getMines(10, game.length);
    game.forEach(function (element) {
      playArea.append(element);
    });
  } else if (difficulty.value === 'medium') {
    mines = 40;
    mHundreds = 0;
    mTens = 4;
    mOnes = 0;
    minesHundreds.innerText = 0;
    minesTens.innerText = 4;
    minesOnes.innerText = 0;
    playArea.classList.add('medium');
    getSquares(256);
    getMines(40, game.length);
    game.forEach(function (element) {
      playArea.append(element);
    });
  } else if (difficulty.value === 'hard') {
    mines = 99;
    mHundreds = 0;
    mTens = 9;
    mOnes = 9;
    minesHundreds.innerText = 0;
    minesTens.innerText = 9;
    minesOnes.innerText = 9;
    playArea.classList.add('hard');
    getSquares(480);
    getMines(99, game.length);
    game.forEach(function (element) {
      playArea.append(element);
    });
  }
};

var getSquares = function getSquares(count) {
  var id = 0;

  for (var i = 0; i < count; i++) {
    var newSquare = document.createElement('div');
    newSquare.classList.add('game-square');
    newSquare.id = id;
    newSquare.addEventListener('auxclick', rightClick);
    newSquare.addEventListener('click', leftClick);
    game.push(newSquare);
    id++;
  }
};

var getMines = function getMines(numMines, length) {
  var minesIndex = [];

  var _loop = function _loop() {
    var newMine = Math.floor(Math.random() * length);
    var index = minesIndex.findIndex(function (element) {
      return element === newMine;
    });

    if (index === -1) {
      minesIndex.push(newMine);
      numMines--;
    }
  };

  while (numMines > 0) {
    _loop();
  }

  minesIndex.forEach(function (element) {
    var square = game[element];
    square.addEventListener('click', lose);
    square.classList.add('mine-square'); // square.innerHTML = `<img class='icon' src='./Assets/mine.ico' />`
  });
  return minesIndex;
}; //CLICK FUNCTIONS


var leftClick = function leftClick(e) {
  click(+e.srcElement.id);
};

var click = function click(id, callingSquare) {
  if (!timerId) {
    timerId = setInterval(function () {
      timer();
    }, 1000);
  }

  var num = 0;
  var square = document.getElementById(+id);
  var checks;
  square.classList.add('clicked');

  if (square.classList.contains('mine-square')) {
    lose();
    return;
  }

  switch (difficulty.value) {
    case 'easy':
      checks = getChecks('easy', id);
      break;

    case 'medium':
      checks = getChecks('medium', id);
      break;

    case 'hard':
      checks = getChecks('hard', id);
      break;

    default:
      return console.log('error');
  }

  checks.corners.forEach(function (element) {
    if (element && element.classList.contains('mine-square')) {
      num++;
    }
  });
  checks.squareChecks.forEach(function (element) {
    if (element && element.classList.contains('mine-square')) {
      num++;
    }
  });
  checks.squareChecks.forEach(function (element) {
    if (num === 0 && element && !element.classList.contains('clicked')) {
      click(+element.id, +id);
    }
  });

  if (num !== 0) {
    square.innerText = num;

    switch (num) {
      case 1:
        square.style.color = '#0000ff';
        break;

      case 2:
        square.style.color = '#007b00';
        break;

      case 3:
        square.style.color = '#ff0000';
        break;

      case 4:
        square.style.color = '#00007b';
        break;

      case 5:
        square.style.color = '#800000';
        break;

      case 6:
        square.style.color = '#007b7b';
        break;

      case 7:
        square.style.color = '#000000';
        break;

      case 8:
        square.style.color = '#7b7b7b';
        break;

      default:
        square.style.color = 'c0c0c0';
    }
  }

  return num;
};

var getChecks = function getChecks(difficulty, id) {
  var squareChecks = [];
  var corners = [];

  switch (difficulty) {
    case 'easy':
      var easyLeft = [9, 18, 27, 36, 45, 54, 63];
      var easyRight = [17, 26, 35, 44, 53, 62, 71];
      var easyTop = [1, 2, 3, 4, 5, 6, 7];
      var easyBottom = [73, 74, 75, 76, 77, 78, 79];

      switch (+id) {
        case 0:
          corners.push(game[10]);
          squareChecks.push(game[1], game[9]);
          break;

        case 72:
          corners.push(game[64]);
          squareChecks.push(game[63], game[73]);
          break;

        case 8:
          corners.push(game[16]);
          squareChecks.push(game[7], game[17]);
          break;

        case 80:
          corners.push(game[70]);
          squareChecks.push(game[71], game[79]);
          break;

        default:
          if (easyLeft.includes(+id)) {
            squareChecks.push(game[id + 1], game[id - 9], game[id + 9]);
            corners.push(game[+id - 8], game[+id + 10]);
          } else if (easyRight.includes(+id)) {
            squareChecks.push(game[id - 1], game[id - 9], game[id + 9]);
            corners.push(game[+id - 10], game[+id + 8]);
          } else if (easyTop.includes(+id)) {
            squareChecks.push(game[+id - 1], game[+id + 1], game[+id + 9]);
            corners.push(game[+id + 8], game[+id + 10]);
          } else if (easyBottom.includes(+id)) {
            squareChecks.push(game[+id - 1], game[+id + 1], game[+id - 9]);
            corners.push(game[+id - 10], game[+id - 8]);
          } else {
            squareChecks.push(game[id - 1], game[id + 1], game[id - 9], game[id + 9]);
            corners.push(game[id - 10], game[id - 8], game[id + 8], game[id + 10]);
          }

      }

      break;

    case 'medium':
      var mediumLeft = [16, 32, 48, 64, 80, 96, 112, 128, 144, 160, 176, 192, 208, 224];
      var mediumRight = [31, 47, 63, 79, 95, 111, 127, 143, 159, 175, 191, 207, 223, 239];
      var mediumTop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
      var mediumBottom = [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254];

      switch (+id) {
        case 0:
          corners.push(game[17]);
          squareChecks.push(game[1], game[16]);
          break;

        case 240:
          corners.push(game[225]);
          squareChecks.push(game[224], game[241]);
          break;

        case 15:
          corners.push(game[30]);
          squareChecks.push(game[14], game[31]);
          break;

        case 255:
          corners.push(game[238]);
          squareChecks.push(game[239], game[254]);
          break;

        default:
          if (mediumLeft.includes(+id)) {
            squareChecks.push(game[id + 1], game[id - 16], game[id + 16]);
            corners.push(game[+id - 15], game[+id + 17]);
          } else if (mediumRight.includes(+id)) {
            squareChecks.push(game[id - 1], game[id - 16], game[id + 16]);
            corners.push(game[+id - 17], game[+id + 15]);
          } else if (mediumTop.includes(+id)) {
            squareChecks.push(game[+id - 1], game[+id + 1], game[+id + 16]);
            corners.push(game[+id + 17], game[+id + 15]);
          } else if (mediumBottom.includes(+id)) {
            squareChecks.push(game[+id - 1], game[+id + 1], game[+id - 16]);
            corners.push(game[+id - 17], game[+id - 15]);
          } else {
            squareChecks.push(game[id - 1], game[id + 1], game[id - 16], game[id + 16]);
            corners.push(game[id - 17], game[id - 15], game[id + 15], game[id + 17]);
          }

      }

      break;

    case 'hard':
      var hardLeft = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450];
      var hardRight = [29, 59, 89, 119, 149, 179, 209, 239, 269, 299, 329, 359, 389, 419, 449, 479];
      var hardTop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
      var hardBottom = [451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478];

      switch (+id) {
        case 0:
          corners.push(game[31]);
          squareChecks.push(game[1], game[30]);
          break;

        case 450:
          corners.push(game[421]);
          squareChecks.push(game[420], game[451]);
          break;

        case 29:
          corners.push(game[58]);
          squareChecks.push(game[28], game[59]);
          break;

        case 479:
          corners.push(game[448]);
          squareChecks.push(game[449], game[478]);
          break;

        default:
          if (hardLeft.includes(+id)) {
            squareChecks.push(game[id + 1], game[id - 30], game[id + 30]);
            corners.push(game[+id - 29], game[+id + 31]);
          } else if (hardRight.includes(+id)) {
            squareChecks.push(game[id - 1], game[id - 30], game[id + 30]);
            corners.push(game[+id - 31], game[+id + 29]);
          } else if (hardTop.includes(+id)) {
            squareChecks.push(game[+id - 1], game[+id + 1], game[+id + 30]);
            corners.push(game[+id + 29], game[+id + 31]);
          } else if (hardBottom.includes(+id)) {
            squareChecks.push(game[+id - 1], game[+id + 1], game[+id - 30]);
            corners.push(game[+id - 29], game[+id - 31]);
          } else {
            squareChecks.push(game[id - 1], game[id + 1], game[id - 30], game[id + 30]);
            corners.push(game[id - 31], game[id - 29], game[id + 29], game[id + 31]);
          }

      }

      break;

    default:
      console.log('error');
  }

  return {
    squareChecks: squareChecks,
    corners: corners
  };
};

var rightClick = function rightClick(e) {
  var square = document.getElementById(+e.target.id);
  square.classList.add('flag-square');
  square.removeEventListener('click', lose);
  square.removeEventListener('click', leftClick);
  square.removeEventListener('auxclick', rightClick);
  square.addEventListener('auxclick', questionMark);
  square.innerHTML = "<img class='icon' src='./Assets/flag.png' />";
  minesDown();
};

var questionMark = function questionMark(e) {
  var square = document.getElementById(+e.target.parentElement.id);
  square.innerHTML = "<img class='icon' src='./Assets/question.png' />";
  square.removeEventListener('auxclick', questionMark);
  square.addEventListener('auxclick', remove);
  minesUp();
};

var remove = function remove(e) {
  var square = document.getElementById(+e.target.parentElement.id);
  square.addEventListener('click', leftClick);
  square.addEventListener('auxclick', rightClick);
  square.removeEventListener('auxclick', remove);
  square.innerHTML = '';

  if (square.classList.contains('mine-square')) {
    square.addEventListener('click', lose);
  }
};

var checkWin = function checkWin() {
  var minesIds = [];
  var flagsIds = [];
  var mines = document.getElementsByClassName('mine-square');
  var flags = document.getElementsByClassName('flag-square');

  for (var i = 0; i < flags.length; i++) {
    minesIds.push(+mines[i].id);
    flagsIds.push(+flags[i].id);
  }

  var winCon = true;
  console.log(minesIds);
  console.log(flagsIds);
  minesIds.sort();
  flagsIds.sort();
  minesIds.forEach(function (element, index) {
    if (element !== flagsIds[index]) {
      winCon = false;
    }
  });

  if (winCon) {
    var squares = document.getElementsByClassName('game-square');

    for (var _i = 0; _i < squares.length; _i++) {
      var square = squares[_i];
      square.removeEventListener('click', leftClick);
      square.removeEventListener('click', lose);
      square.removeEventListener('auxclick', rightClick);
      square.removeEventListener('auxclick', questionMark);
      square.removeEventListener('auxclick', remove);
    }

    clearInterval(timerId);
    fireworksId = setInterval(function () {
      fireworks();
    }, 100);
  } else {
    alert('You got some wrong');

    var _squares = document.getElementsByClassName('game-square');

    for (var _i2 = 0; _i2 < _squares.length; _i2++) {
      var _square = _squares[_i2];

      _square.removeEventListener('click', leftClick);

      _square.removeEventListener('click', lose);

      _square.removeEventListener('auxclick', rightClick);

      _square.removeEventListener('auxclick', questionMark);

      _square.removeEventListener('auxclick', remove);
    }

    clearInterval(timerId);
  }
}; //GAME END FUNCTIONS


var lose = function lose() {
  clearInterval(timerId);
  var mineSquares = document.getElementsByClassName('mine-square');

  for (var i = 0; i < mineSquares.length; i++) {
    mineSquares[i].innerHTML = "<img class='icon' src='./Assets/mine.ico' />";
    mineSquares[i].classList.add('mine-lose');
  }

  var squares = document.getElementsByClassName('game-square');

  for (var _i3 = 0; _i3 < squares.length; _i3++) {
    var square = squares[_i3];
    square.removeEventListener('click', leftClick);
    square.removeEventListener('click', lose);
    square.removeEventListener('auxclick', rightClick);
    square.removeEventListener('auxclick', questionMark);
    square.removeEventListener('auxclick', remove);
  }

  clearInterval(timerId);
};

var fireworks = function fireworks() {
  var screen = document.querySelector('.holder');
  var startingLocation = Math.floor(Math.random() * window.innerWidth);
  var color1 = Math.floor(Math.random() * 255);
  var color2 = Math.floor(Math.random() * 255);
  var color3 = Math.floor(Math.random() * 255);
  var trail = document.createElement('div');
  trail.classList.add('firework-trail');
  trail.style.background = "rgb(".concat(color1, ", ").concat(color2, ", ").concat(color3, ")");
  trail.style.left = "".concat(startingLocation - 5, "px");
  trail.addEventListener('animationend', function (e) {
    e.target.remove();
    var angle = 0;

    for (var i = 0; i < 12; i++) {
      var spark = document.createElement('div');
      spark.classList.add('spark');
      spark.style.background = "rgb(".concat(color1, ", ").concat(color2, ", ").concat(color3, ")");
      spark.style.transform = "rotate(".concat(angle, "deg)");
      spark.style.left = "".concat(startingLocation - 5, "px");
      spark.addEventListener('animationend', function (e) {
        e.target.remove();
      });
      screen.appendChild(spark);
      angle += 15;
    }
  });
  screen.appendChild(trail);
}; //TRACKING FUNCTIONS


var timer = function timer() {
  ones++;

  if (ones === 10) {
    tens++;
    ones = 0;

    if (tens === 10) {
      hundreds++;
      tens = 0;
    }
  }

  timerHundreds.innerText = hundreds;
  timerTens.innerText = tens;
  timerOnes.innerText = ones;
};

var minesDown = function minesDown() {
  mOnes--;

  if (mOnes === -1) {
    mTens--;
    mOnes = 9;

    if (mTens === -1) {
      mHundreds--;
      mTens = 9;
    }
  }

  minesHundreds.innerText = mHundreds;
  minesTens.innerText = mTens;
  minesOnes.innerText = mOnes;

  if (mOnes === 0 && mTens === 0 && mHundreds === 0) {
    checkWin();
  }
};

var minesUp = function minesUp() {
  mOnes++;

  if (mOnes === 10) {
    mTens++;
    mOnes = 0;

    if (mTens === 10) {
      mHundreds++;
      mTens = 0;
    }
  }

  minesHundreds.innerText = mHundreds;
  minesTens.innerText = mTens;
  minesOnes.innerText = mOnes;
};

newGame();

/***/ }),

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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-hold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    src: __webpack_require__(/*! ../Games/minesweeper/index */ "./Games/minesweeper/index.js"),
    frameBorder: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Minesweeper);

/***/ })

})
//# sourceMappingURL=minesweeper.js.98baf5b2a30e2a191437.hot-update.js.map