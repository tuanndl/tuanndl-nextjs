webpackHotUpdate("static/development/pages/index.js",{

/***/ "./fonts/index.js":
/*!************************!*\
  !*** ./fonts/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var FontFaceObserver = __webpack_require__(/*! fontfaceobserver */ "./node_modules/fontfaceobserver/fontfaceobserver.standalone.js");

var Fonts = function Fonts() {
  var link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
  var roboto = new FontFaceObserver('Roboto');
  roboto.load();
  var link1 = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css?family=IBM+Plex+Mono&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link1);
  var roboto1 = new FontFaceObserver('Roboto');
  roboto1.load();
};

/* harmony default export */ __webpack_exports__["default"] = (Fonts);

/***/ })

})
//# sourceMappingURL=index.js.2e9fff6cb351a8d32622.hot-update.js.map