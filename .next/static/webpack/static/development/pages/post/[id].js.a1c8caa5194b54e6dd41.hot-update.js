webpackHotUpdate("static/development/pages/post/[id].js",{

/***/ "./components/Article/Comments.js":
/*!****************************************!*\
  !*** ./components/Article/Comments.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comment */ "./components/Article/Comment/index.js");
/* harmony import */ var _CreateComment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateComment */ "./components/Article/CreateComment/index.js");
/* harmony import */ var _FacebookLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FacebookLogin */ "./components/Article/FacebookLogin/index.js");
/* harmony import */ var react_spinkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spinkit */ "./node_modules/react-spinkit/dist/index.js");
/* harmony import */ var react_spinkit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spinkit__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/macbook/Git/tuanndl-nextjs/components/Article/Comments.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Comments = function Comments(props) {
  var elmComments = function elmComments(comment) {
    var result = null;

    if (comment && comment.length > 0) {
      result = comment.map(function (item) {
        return __jsx(_Comment__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: item._id,
          user: item.user,
          content: item.content,
          createdAt: item.createdAt,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        });
      });
    }

    return result;
  };

  var createComment = function createComment() {
    if (props.dataAuth._id) {
      return __jsx(_CreateComment__WEBPACK_IMPORTED_MODULE_2__["default"], {
        idArticle: props.idArticle,
        dataAuth: props.dataAuth,
        createCommentRequest: props.createCommentRequest,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      });
    }

    return __jsx(_FacebookLogin__WEBPACK_IMPORTED_MODULE_3__["default"], {
      loginByFacebookRequest: props.loginByFacebookRequest,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "B\xECnh lu\u1EADn")), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, elmComments(props.comment), props.isLoadingAuth && __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Loading"), !props.isLoadingAuth && createComment()));
};

/* harmony default export */ __webpack_exports__["default"] = (Comments);

/***/ })

})
//# sourceMappingURL=[id].js.a1c8caa5194b54e6dd41.hot-update.js.map