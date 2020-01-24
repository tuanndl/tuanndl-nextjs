webpackHotUpdate("static/development/pages/post/[id].js",{

/***/ "./pages/post/[id].js":
/*!****************************!*\
  !*** ./pages/post/[id].js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/layout */ "./components/layout/index.js");
/* harmony import */ var _components_Article_Content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Article/Content */ "./components/Article/Content.js");
/* harmony import */ var _components_Article_Comments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Article/Comments */ "./components/Article/Comments.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var _article_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./article.scss */ "./pages/post/article.scss");
/* harmony import */ var _article_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_article_scss__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "/Users/macbook/Git/tuanndl-nextjs/pages/post/[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









var Post = function Post(_ref) {
  var _ref$dataPost = _ref.dataPost,
      title = _ref$dataPost.title,
      content = _ref$dataPost.content,
      createdAt = _ref$dataPost.createdAt,
      _id = _ref$dataPost._id,
      category = _ref$dataPost.category,
      dataComment = _ref.dataComment;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h1", {
    className: "container__main--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "# ", title)), __jsx("div", {
    className: "Article__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("span", {
    className: "Article__item--time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, _utils__WEBPACK_IMPORTED_MODULE_8__["CommonHelper"].dateString(createdAt)), __jsx("span", {
    className: "Article__item--tag",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, category && category.name)), __jsx(_components_Article_Content__WEBPACK_IMPORTED_MODULE_6__["default"], {
    content: content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx(_components_Article_Comments__WEBPACK_IMPORTED_MODULE_7__["default"], {
    idArticle: _id,
    comment: dataComment,
    dataAuth: props.dataAuth,
    isLoadingAuth: props.isLoadingAuth,
    createCommentRequest: props.createCommentRequest,
    loginByFacebookRequest: props.loginByFacebookRequest,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }));
};

Post.getInitialProps = function _callee(ctx) {
  var callApi, responses, dataPost, dataComment;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          callApi = [isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('https://gateway.tuanndl.com/api/v1/article/' + ctx.query.id), isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('https://gateway.tuanndl.com/api/v1/comment/' + ctx.query.id)];
          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all(callApi));

        case 3:
          responses = _context.sent;
          _context.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(responses[0].json());

        case 6:
          dataPost = _context.sent;
          _context.next = 9;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(responses[1].json());

        case 9:
          dataComment = _context.sent;
          return _context.abrupt("return", {
            dataPost: lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(dataPost, 'result', ''),
            dataComment: lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(dataComment, 'result,data', [])
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=[id].js.b5a5e5b4708fe4cd32f7.hot-update.js.map