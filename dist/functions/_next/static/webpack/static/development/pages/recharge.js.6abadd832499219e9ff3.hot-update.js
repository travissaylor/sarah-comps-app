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
              quoteRes = null;
              quoteData = null;
              quote = null;
              escapedQuote = null;
              gif = null;
              _context.prev = 5;
              _context.next = 8;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()('https://michael-scott-quotes.herokuapp.com/quote'));

            case 8:
              quoteRes = _context.sent;
              _context.next = 11;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(quoteRes.json());

            case 11:
              quoteData = _context.sent;
              quote = quoteData.quote;
              escapedQuote = encodeURI('michael scott ' + quote);
              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](5);
              console.log(_context.t0);

            case 19:
              _context.prev = 19;
              _context.next = 22;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()('http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + escapedQuote));

            case 22:
              gifRes = _context.sent;
              _context.next = 25;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(gifRes.json());

            case 25:
              gifData = _context.sent;
              gif = gifData.data[0].images.fixed_height_downsampled.webp;
              _context.next = 39;
              break;

            case 29:
              _context.prev = 29;
              _context.t1 = _context["catch"](19);
              console.log(_context.t1);
              _context.next = 34;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()('http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=michael%20scott'));

            case 34:
              _gifRes = _context.sent;
              _context.next = 37;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_gifRes.json());

            case 37:
              _gifData = _context.sent;
              gif = _gifData.data[0].images.fixed_height_downsampled.webp;

            case 39:
              return _context.abrupt("return", {
                quote: quote,
                gif: gif,
                escapedQuote: escapedQuote
              });

            case 40:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[5, 16], [19, 29]]);
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
  } // async componentDidMount() {
  //     var quoteRes = null;
  //     var quoteData = null;
  //     var quote = null;
  //     var escapedQuote = null;
  //     var gif = null;
  //     try {
  //         quoteRes = await fetch('https://michael-scott-quotes.herokuapp.com/quote');
  //         quoteData = await quoteRes.json();
  //         quote = quoteData.quote;
  //         escapedQuote = encodeURI('michael scott ' + quote);
  //     } catch (error) {
  //         console.log(error);
  //     }
  //     try {
  //         const gifRes = await fetch('http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + escapedQuote);
  //         const gifData = await gifRes.json();
  //         gif = gifData.data[0].images.fixed_height_downsampled.webp
  //     } catch(error) {
  //         console.log(error);
  //         const gifRes = await fetch('http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=michael%20scott');
  //         const gifData = await gifRes.json();
  //         gif = gifData.data[0].images.fixed_height_downsampled.webp
  //     } finally {
  //         this.setState({
  //             quote: this.quote,
  //             gif: this.gif
  //         });
  //     }
  // }


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Recharge, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Recharge"), __jsx("link", {
        rel: "icon",
        href: "/favicon.ico",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      })), __jsx(_components_buttonAppBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Recharge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Michael Scott Quote"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, this.state.quote), __jsx("img", {
        src: this.state.gif,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
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
//# sourceMappingURL=recharge.js.6abadd832499219e9ff3.hot-update.js.map