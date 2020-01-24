webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/articles.js":
/*!***************************!*\
  !*** ./pages/articles.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./utils/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/macbook/Git/tuanndl-nextjs/pages/articles.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Article = function Article(_ref) {
  var title = _ref.title,
      createdAt = _ref.createdAt,
      category = _ref.category,
      link = _ref.link;
  return __jsx("div", {
    className: "Article__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/post/[id]",
    as: "/post/".concat(link),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("p", {
    className: "Article__item--title",
    "aria-label": "open article",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, title)), __jsx("span", {
    className: "Article__item--time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, _utils__WEBPACK_IMPORTED_MODULE_1__["CommonHelper"].dateString(createdAt)), __jsx("span", {
    className: "Article__item--tag",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, category && category.name));
};

var Articles = function Articles(_ref2) {
  var dataArticles = _ref2.dataArticles;
  return dataArticles.map(function (item) {
    return __jsx(Article, {
      key: item._id,
      title: item.title,
      createdAt: item.createdAt,
      content: item.content,
      link: item.link,
      category: item.category,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Articles);

/***/ })

})
//# sourceMappingURL=index.js.545cade0932d86c65345.hot-update.js.map