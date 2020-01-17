webpackHotUpdate("static/development/pages/index.js",{

/***/ "./fonts/index.js":
/*!************************!*\
  !*** ./fonts/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);


var FontFaceObserver = __webpack_require__(/*! fontfaceobserver */ "./node_modules/fontfaceobserver/fontfaceobserver.standalone.js");

var arrFont = [{
  link: 'https://fonts.googleapis.com/css?family=Space+Mono&display=swap',
  name: 'Space Mono'
}, {
  link: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900',
  name: 'Roboto'
}, {
  link: 'https://fonts.googleapis.com/css?family=IBM+Plex+Serif&display=swap',
  name: 'IBM Plex Serif'
},,];

var Fonts = function Fonts() {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arrFont), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;
      var link = document.createElement('link');
      link.href = item.link;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
      var Font = new FontFaceObserver(item.name);
      Font.load();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Fonts);

/***/ })

})
//# sourceMappingURL=index.js.7c077fcd5b9c8e8e3ed2.hot-update.js.map