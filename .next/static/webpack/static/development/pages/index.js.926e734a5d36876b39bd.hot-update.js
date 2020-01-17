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

var arrFont = [];

var Fonts = function Fonts() {
  var link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
  var roboto = new FontFaceObserver('Roboto');
  roboto.load();
  var link1 = document.createElement('link');
  link1.href = 'https://fonts.googleapis.com/css?family=IBM+Plex+Serif&display=swap';
  link1.rel = 'stylesheet';
  document.head.appendChild(link1);
  var roboto1 = new FontFaceObserver('Roboto');
  roboto1.load();
};

/* harmony default export */ __webpack_exports__["default"] = (Fonts);

/***/ })

})
//# sourceMappingURL=index.js.926e734a5d36876b39bd.hot-update.js.map