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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");


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
  console.log(dataComment);
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("h1", {
    className: "container__main--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "# ", title)), __jsx("div", {
    className: "Article__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("span", {
    className: "Article__item--time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, _utils__WEBPACK_IMPORTED_MODULE_7__["CommonHelper"].dateString(createdAt)), __jsx("span", {
    className: "Article__item--tag",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, category && category.name)), __jsx(_components_Article_Content__WEBPACK_IMPORTED_MODULE_6__["default"], {
    content: content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
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

/***/ }),

/***/ "./utils/CommonHelper.js":
/*!*******************************!*\
  !*** ./utils/CommonHelper.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CommonHelper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");



var CommonHelper =
/*#__PURE__*/
function () {
  function CommonHelper() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CommonHelper);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CommonHelper, null, [{
    key: "clearLocalStorage",
    value: function clearLocalStorage() {
      var _localStorage = localStorage,
          lang = _localStorage.lang,
          idEduCategory = _localStorage.idEduCategory;
      localStorage.clear();
      sessionStorage.clear();
      this.setAuthorizationToken(false);

      if (lang) {
        localStorage.setItem('lang', lang);
      }

      if (idEduCategory) {
        localStorage.setItem('idEduCategory', idEduCategory);
      }
    }
  }, {
    key: "handleError",
    value: function handleError(data) {
      if (data.errors) {
        var err = data.errors[0].code;

        if (err === 'INVALID_TOKEN' || err === 'AUTHENTICATION_FAILED' || err === 'invalid signature' || err === 'TOKEN_EXPIRED') {
          this.clearLocalStorage();
          window.location.replace('/');
        } else if (err === 'BLOCKED_USER') {
          alert("".concat(data.errors[0].message));
          this.clearLocalStorage();
          window.location.replace('/');
        } else {
          return alert(data.errors[0].message);
        }
      }

      return null;
    }
  }, {
    key: "setAuthorizationToken",
    value: function setAuthorizationToken(token) {
      if (token) {
        axios.defaults.headers.common.Authorization = "Bearer ".concat(token);
      } else {
        delete axios.defaults.headers.common.Authorization;
      }
    }
  }, {
    key: "change_alias",
    value: function change_alias(alias) {
      var str = alias;
      str = str.toLowerCase();
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
      str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
      str = str.replace(/đ/g, "d");
      str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
      str = str.replace(/ + /g, " ");
      str = str.trim();
      return str;
    }
  }, {
    key: "dateString",
    value: function dateString(date, showTime) {
      date = new Date(date);
      var year = date.getUTCFullYear();
      var month = date.getMonth();
      var day = date.getDate();
      month = this.helperDateString(month + 1);
      day = this.helperDateString(day);
      var dateString = "".concat(day, "-").concat(month, "-").concat(year);

      if (showTime) {
        var hours = date.getHours();
        var min = date.getMinutes();
        dateString = "".concat(hours, ":").concat(min, " ") + dateString;
      }

      return dateString;
    }
  }, {
    key: "helperDateString",
    value: function helperDateString(number) {
      if (number < 10) {
        number = '0' + number.toString();
      }

      return number.toString();
    }
  }]);

  return CommonHelper;
}();


;

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: CommonHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CommonHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommonHelper */ "./utils/CommonHelper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonHelper", function() { return _CommonHelper__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ })

})
//# sourceMappingURL=[id].js.3aaa76070c8e3e295e8b.hot-update.js.map