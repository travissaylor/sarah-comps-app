webpackHotUpdate("static/development/pages/recharge.js",{

/***/ "./pages/recharge.js":
/*!***************************!*\
  !*** ./pages/recharge.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_buttonAppBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/buttonAppBar */ "./components/buttonAppBar.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__);






var _jsxFileName = "/Users/tsaylor/sites/tsaylor/sarah-comps-app/pages/recharge.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;







var Recharge =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Recharge, _React$Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Recharge, null, [{
    key: "getInitialProps",
    value: function getInitialProps() {
      var quoteRes, quoteData, quote, escapedQuote, gif, gifRes, gifData, _gifRes, _gifData;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()('https://michael-scott-quotes.herokuapp.com/quote'));

            case 2:
              quoteRes = _context.sent;
              _context.next = 5;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(quoteRes.json());

            case 5:
              quoteData = _context.sent;
              quote = quoteData.quote;
              escapedQuote = encodeURI('michael scott ' + quote);
              gif = '';
              _context.prev = 9;
              _context.next = 12;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()('http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + escapedQuote));

            case 12:
              gifRes = _context.sent;
              _context.next = 15;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(gifRes.json());

            case 15:
              gifData = _context.sent;
              gif = gifData.data[0].images.fixed_height_downsampled.webp;
              _context.next = 29;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](9);
              console.log(_context.t0);
              _context.next = 24;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()('http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=michael%20scott'));

            case 24:
              _gifRes = _context.sent;
              _context.next = 27;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_gifRes.json());

            case 27:
              _gifData = _context.sent;
              gif = _gifData.data[0].images.fixed_height_downsampled.webp;

            case 29:
              return _context.abrupt("return", {
                quote: quote,
                gif: gif,
                escapedQuote: escapedQuote
              });

            case 30:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[9, 19]]);
    }
  }]);

  function Recharge(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Recharge);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Recharge).call(this, props));
    _this.state = {
      quote: _this.props.quote,
      gif: _this.props.gif
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Recharge, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var quoteRes, quoteData, quote, escapedQuote, gif, gifRes, gifData, _gifRes2, _gifData2;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function componentDidMount$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()('https://michael-scott-quotes.herokuapp.com/quote'));

            case 2:
              quoteRes = _context2.sent;
              _context2.next = 5;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(quoteRes.json());

            case 5:
              quoteData = _context2.sent;
              quote = quoteData.quote;
              escapedQuote = encodeURI('michael scott ' + quote);
              gif = '';
              _context2.prev = 9;
              _context2.next = 12;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()('http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + escapedQuote));

            case 12:
              gifRes = _context2.sent;
              _context2.next = 15;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(gifRes.json());

            case 15:
              gifData = _context2.sent;
              gif = gifData.data[0].images.fixed_height_downsampled.webp;
              _context2.next = 29;
              break;

            case 19:
              _context2.prev = 19;
              _context2.t0 = _context2["catch"](9);
              console.log(_context2.t0);
              _context2.next = 24;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()('http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=michael%20scott'));

            case 24:
              _gifRes2 = _context2.sent;
              _context2.next = 27;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_gifRes2.json());

            case 27:
              _gifData2 = _context2.sent;
              gif = _gifData2.data[0].images.fixed_height_downsampled.webp;

            case 29:
              _context2.prev = 29;
              this.setState({
                quote: this.quote,
                gif: this.gif
              });
              return _context2.finish(29);

            case 32:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[9, 19, 29, 32]]);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Recharge"), __jsx("link", {
        rel: "icon",
        href: "/favicon.ico",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      })), __jsx(_components_buttonAppBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Recharge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Michael Scott Quote"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, this.props.quote), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, this.props.escapedQuote), __jsx("img", {
        src: this.props.gif,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }));
    }
  }]);

  return Recharge;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Recharge);

/***/ })

})
//# sourceMappingURL=recharge.js.34776d57f25e1ac5e65e.hot-update.js.map