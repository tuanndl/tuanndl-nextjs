webpackHotUpdate("static/development/pages/post/[id].js",{

/***/ "./components/Article/Content.js":
/*!***************************************!*\
  !*** ./components/Article/Content.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CodeBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CodeBlock */ "./components/Article/CodeBlock.js");
var _jsxFileName = "/Users/macbook/Git/tuanndl-nextjs/components/Article/Content.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var htmlParser = __webpack_require__(/*! react-markdown/plugins/html-parser */ "./node_modules/react-markdown/plugins/html-parser.js");

var Content = function Content(props) {
  var parseHtml = htmlParser({
    isValidNode: function isValidNode(node) {
      return node.type !== 'script';
    },
    processingInstructions: [
      /* ... */
    ]
  });
  return __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
    source: content,
    escapeHtml: false,
    astPlugins: [parseHtml],
    renderers: {
      code: _CodeBlock__WEBPACK_IMPORTED_MODULE_2__["default"]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ })

})
//# sourceMappingURL=[id].js.e567bdfa65460a9a310c.hot-update.js.map