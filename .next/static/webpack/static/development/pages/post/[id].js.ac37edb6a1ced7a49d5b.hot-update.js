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
  }, elmComments(props.comment), props.isLoadingAuth && __jsx(react_spinkit__WEBPACK_IMPORTED_MODULE_4___default.a, {
    name: "ball-spin-fade-loader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), !props.isLoadingAuth && createComment()));
};

/* harmony default export */ __webpack_exports__["default"] = (Comments);

/***/ }),

/***/ "./components/Article/CreateComment/index.js":
/*!***************************************************!*\
  !*** ./components/Article/CreateComment/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Common_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Common/Button */ "./components/Common/Button/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./components/Article/CreateComment/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/macbook/Git/tuanndl-nextjs/components/Article/CreateComment/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var CreateComment = function CreateComment(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      content = _useState[0],
      setContent = _useState[1];

  var onChange = function onChange(e) {
    var value = e.target.value;
    setContent(value);
  };

  var createComment = function createComment() {
    props.createCommentRequest(props.idArticle, {
      content: content.trim()
    });
    setContent('');
  };

  return __jsx("li", {
    className: "comment__item--li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: "comment__item--avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("img", {
    src: props.dataAuth && props.dataAuth.avatar,
    alt: "avatar of user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), __jsx("div", {
    className: "comment__item--content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("textarea", {
    className: "comment__item--textarea",
    name: "content",
    value: content,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(_components_Common_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      marginLeft: 0,
      marginTop: 0
    },
    onClick: createComment,
    content: "B\xECnh lu\u1EADn",
    className: "btn-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateComment);

/***/ }),

/***/ "./components/Article/FacebookLogin/index.js":
/*!***************************************************!*\
  !*** ./components/Article/FacebookLogin/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-facebook-login/dist/facebook-login-render-props */ "./node_modules/react-facebook-login/dist/facebook-login-render-props.js");
/* harmony import */ var react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/credentials */ "./config/credentials.js");
/* harmony import */ var _components_Common_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Common/Button */ "./components/Common/Button/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./components/Article/FacebookLogin/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/macbook/Git/tuanndl-nextjs/components/Article/FacebookLogin/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var LoginFB = function LoginFB(props) {
  var responseFacebook = function responseFacebook(response) {
    if (response.userID) {
      props.loginByFacebookRequest({
        socialId: response.userID || response.id,
        avatar: response.picture.data.url,
        name: response.name,
        accessToken: response.accessToken
      });
    }
  };

  return __jsx(react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_1___default.a, {
    appId: _config_credentials__WEBPACK_IMPORTED_MODULE_2__["client"].client_id,
    callback: responseFacebook,
    fields: "name,email,picture",
    disableMobileRedirect: true,
    isMobile: true,
    render: function render(renderProps) {
      return __jsx(_components_Common_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onClick: renderProps.onClick,
        content: "\u0110\u0103ng nh\u1EADp \u0111\u1EC3 b\xECnh lu\u1EADn",
        className: "btn-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (LoginFB);

/***/ }),

/***/ "./components/Common/Button/index.js":
/*!*******************************************!*\
  !*** ./components/Common/Button/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./components/Common/Button/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/macbook/Git/tuanndl-nextjs/components/Common/Button/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Button = function Button(_ref) {
  var style = _ref.style,
      className = _ref.className,
      name = _ref.name,
      content = _ref.content,
      value = _ref.value,
      disabled = _ref.disabled,
      onClick = _ref.onClick;
  return __jsx("button", {
    style: style,
    className: className,
    name: name,
    value: value,
    onClick: onClick,
    disabled: disabled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, content);
};

Button.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Button.defaultProps = {
  type: 'text',
  label: '',
  error: '',
  disabled: false
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./config/credentials.js":
/*!*******************************!*\
  !*** ./config/credentials.js ***!
  \*******************************/
/*! exports provided: client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "client", function() { return client; });
var client = {
  client_id: '393774084801224',
  client_secret: '91aed850dd17a7d6768fe2909a2b9bbf',
  grant_type: 'client_credentials',
  scope: 'authentication-service,playerduo-service,upload-service,ewallet-service'
};

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/react-facebook-login/dist/facebook-login-render-props.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-facebook-login/dist/facebook-login-render-props.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! react */ "./node_modules/react/index.js")):undefined}(this,function(e){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(4)},function(e,t,o){e.exports=o(6)()},function(t,o){t.exports=e},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t){return decodeURIComponent(e.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(t).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=o(2),d=n(u),l=o(1),p=n(l),f=o(5),b=n(f),y=o(3),h=n(y),g=function(){var e=!1;try{e=!!(window.navigator&&window.navigator.standalone||navigator.userAgent.match("CriOS")||navigator.userAgent.match(/mobile/i))}catch(t){}return e},k=function(e){function t(){var e,o,n,s;r(this,t);for(var c=arguments.length,u=Array(c),d=0;d<c;d++)u[d]=arguments[d];return o=n=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),n.state={isSdkLoaded:!1,isProcessing:!1},n.responseApi=function(e){window.FB.api("/me",{locale:n.props.language,fields:n.props.fields},function(t){a(t,e),n.props.callback(t)})},n.checkLoginState=function(e){n.setStateIfMounted({isProcessing:!1}),e.authResponse?n.responseApi(e.authResponse):n.props.onFailure?n.props.onFailure({status:e.status}):n.props.callback({status:e.status})},n.checkLoginAfterRefresh=function(e){"connected"===e.status?n.checkLoginState(e):window.FB.login(function(e){return n.checkLoginState(e)},!0)},n.click=function(e){if(n.state.isSdkLoaded&&!n.state.isProcessing&&!n.props.isDisabled){n.setState({isProcessing:!0});var t=n.props,o=t.scope,r=t.appId,i=t.onClick,s=t.returnScopes,a=t.responseType,c=t.redirectUri,u=t.disableMobileRedirect,d=t.authType,l=t.state;if("function"!=typeof i||(i(e),!e.defaultPrevented)){var p={client_id:r,redirect_uri:c,state:l,return_scopes:s,scope:o,response_type:a,auth_type:d};if(n.props.isMobile&&!u)window.location.href="https://www.facebook.com/dialog/oauth"+(0,b["default"])(p);else{if(!window.FB)return void(n.props.onFailure&&n.props.onFailure({status:"facebookNotLoaded"}));window.FB.login(n.checkLoginState,{scope:o,return_scopes:s,auth_type:p.auth_type})}}}},s=o,i(n,s)}return s(t,e),c(t,[{key:"componentDidMount",value:function(){if(this._isMounted=!0,document.getElementById("facebook-jssdk"))return void this.sdkLoaded();this.setFbAsyncInit(),this.loadSdkAsynchronously();var e=document.getElementById("fb-root");e||(e=document.createElement("div"),e.id="fb-root",document.body.appendChild(e))}},{key:"componentWillReceiveProps",value:function(e){this.state.isSdkLoaded&&e.autoLoad&&!this.props.autoLoad&&window.FB.getLoginStatus(this.checkLoginAfterRefresh)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"setStateIfMounted",value:function(e){this._isMounted&&this.setState(e)}},{key:"setFbAsyncInit",value:function(){var e=this,t=this.props,o=t.appId,n=t.xfbml,r=t.cookie,i=t.version,s=t.autoLoad;window.fbAsyncInit=function(){window.FB.init({version:"v"+i,appId:o,xfbml:n,cookie:r}),e.setStateIfMounted({isSdkLoaded:!0}),(s||e.isRedirectedFromFb())&&window.FB.getLoginStatus(e.checkLoginAfterRefresh)}}},{key:"isRedirectedFromFb",value:function(){var e=window.location.search;return(0,h["default"])(e,"code")||(0,h["default"])(e,"granted_scopes")}},{key:"sdkLoaded",value:function(){this.setState({isSdkLoaded:!0})}},{key:"loadSdkAsynchronously",value:function(){var e=this.props.language;!function(t,o,n){var r=t.getElementsByTagName(o)[0],i=r,s=r;t.getElementById(n)||(s=t.createElement(o),s.id=n,s.src="https://connect.facebook.net/"+e+"/sdk.js",i.parentNode.insertBefore(s,i))}(document,"script","facebook-jssdk")}},{key:"render",value:function o(){var o=this.props.render;if(!o)throw new Error("ReactFacebookLogin requires a render prop to render");var e={onClick:this.click,isDisabled:!!this.props.isDisabled,isProcessing:this.state.isProcessing,isSdkLoaded:this.state.isSdkLoaded};return this.props.render(e)}}]),t}(d["default"].Component);k.propTypes={isDisabled:p["default"].bool,callback:p["default"].func.isRequired,appId:p["default"].string.isRequired,xfbml:p["default"].bool,cookie:p["default"].bool,authType:p["default"].string,scope:p["default"].string,state:p["default"].string,responseType:p["default"].string,returnScopes:p["default"].bool,redirectUri:p["default"].string,autoLoad:p["default"].bool,disableMobileRedirect:p["default"].bool,isMobile:p["default"].bool,fields:p["default"].string,version:p["default"].string,language:p["default"].string,onClick:p["default"].func,onFailure:p["default"].func,render:p["default"].func.isRequired},k.defaultProps={redirectUri:"undefined"!=typeof window?window.location.href:"/",scope:"public_profile,email",returnScopes:!1,xfbml:!1,cookie:!1,authType:"",fields:"name",version:"2.3",language:"en_US",disableMobileRedirect:!1,isMobile:g(),onFailure:null,state:"facebookdirect",responseType:"code"},t["default"]=k},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){return"?"+Object.keys(e).map(function(t){return t+"="+encodeURIComponent(e[t])}).join("&")}},function(e,t,o){"use strict";function n(){}var r=o(7);e.exports=function(){function e(e,t,o,n,i,s){if(s!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return o.checkPropTypes=n,o.PropTypes=o,o}},function(e,t){"use strict";var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=o}])});

/***/ }),

/***/ "./node_modules/react-spinkit/dist/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-spinkit/dist/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _spinners = __webpack_require__(/*! ./spinners */ "./node_modules/react-spinkit/dist/spinners.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line import/no-extraneous-dependencies


if (!process.env.REACT_SPINKIT_NO_STYLES) {
  /* eslint-disable global-require */
  __webpack_require__(/*! loaders.css */ "./node_modules/loaders.css/loaders.css");
  __webpack_require__(/*! ../css/base.css */ "./node_modules/react-spinkit/css/base.css");
  __webpack_require__(/*! ../css/loaders-css.css */ "./node_modules/react-spinkit/css/loaders-css.css");
  __webpack_require__(/*! ../css/fade-in.css */ "./node_modules/react-spinkit/css/fade-in.css");
  __webpack_require__(/*! ../css/chasing-dots.css */ "./node_modules/react-spinkit/css/chasing-dots.css");
  __webpack_require__(/*! ../css/circle.css */ "./node_modules/react-spinkit/css/circle.css");
  __webpack_require__(/*! ../css/cube-grid.css */ "./node_modules/react-spinkit/css/cube-grid.css");
  __webpack_require__(/*! ../css/double-bounce.css */ "./node_modules/react-spinkit/css/double-bounce.css");
  __webpack_require__(/*! ../css/folding-cube.css */ "./node_modules/react-spinkit/css/folding-cube.css");
  __webpack_require__(/*! ../css/pulse.css */ "./node_modules/react-spinkit/css/pulse.css");
  __webpack_require__(/*! ../css/rotating-plane.css */ "./node_modules/react-spinkit/css/rotating-plane.css");
  __webpack_require__(/*! ../css/three-bounce.css */ "./node_modules/react-spinkit/css/three-bounce.css");
  __webpack_require__(/*! ../css/wandering-cubes.css */ "./node_modules/react-spinkit/css/wandering-cubes.css");
  __webpack_require__(/*! ../css/wave.css */ "./node_modules/react-spinkit/css/wave.css");
  __webpack_require__(/*! ../css/wordpress.css */ "./node_modules/react-spinkit/css/wordpress.css");
  /* eslint-enable global-require */
}

var noFadeInWarning = "Deprecation Warning (react-spinkit): noFadeIn prop should be replaced with fadeIn='none'";

var Spinner = function (_React$Component) {
  _inherits(Spinner, _React$Component);

  function Spinner(props) {
    _classCallCheck(this, Spinner);

    if (props.noFadeIn) {
      console.warn(noFadeInWarning); // eslint-disable-line no-console
    }

    var _this = _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).call(this, props));

    _this.displayName = 'SpinKit';
    return _this;
  }

  _createClass(Spinner, [{
    key: 'render',
    value: function render() {
      var _cx;

      var spinnerInfo = _spinners.allSpinners[this.props.name] || _spinners.allSpinners['three-bounce'];
      var classes = (0, _classnames2.default)((_cx = {
        'sk-fade-in': this.props.fadeIn === 'full' && !this.props.noFadeIn,
        'sk-fade-in-half-second': this.props.fadeIn === 'half' && !this.props.noFadeIn,
        'sk-fade-in-quarter-second': this.props.fadeIn === 'quarter' && !this.props.noFadeIn,
        'sk-spinner': !this.props.overrideSpinnerClassName
      }, _defineProperty(_cx, this.props.overrideSpinnerClassName, !!this.props.overrideSpinnerClassName), _defineProperty(_cx, this.props.className, !!this.props.className), _defineProperty(_cx, spinnerInfo.className || this.props.name, true), _cx));

      var props = (0, _objectAssign2.default)({}, this.props);
      delete props.name;
      delete props.fadeIn;
      delete props.noFadeIn;
      delete props.overrideSpinnerClassName;
      delete props.className;

      if (this.props.color) {
        props.style = props.style ? _extends({}, props.style, { color: this.props.color }) : { color: this.props.color };
      }

      return _react2.default.createElement(
        'div',
        _extends({}, props, { className: classes }),
        [].concat(_toConsumableArray(Array(spinnerInfo.divCount))).map(function (_, idx) {
          return _react2.default.createElement('div', { key: idx });
        })
      );
    }
  }]);

  return Spinner;
}(_react2.default.Component);

Spinner.propTypes = {
  name: _propTypes2.default.string.isRequired,
  noFadeIn: _propTypes2.default.bool,
  fadeIn: _propTypes2.default.oneOf(['full', 'half', 'quarter', 'none']),
  overrideSpinnerClassName: _propTypes2.default.string,
  className: _propTypes2.default.string,
  color: _propTypes2.default.string
};

Spinner.defaultProps = {
  name: 'three-bounce',
  noFadeIn: false,
  fadeIn: 'full',
  overrideSpinnerClassName: ''
};

module.exports = Spinner;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/react-spinkit/dist/spinners.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-spinkit/dist/spinners.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var spinkitSpinners = {
  circle: { className: 'sk-circle', divCount: 12 },
  'cube-grid': { className: 'sk-cube-grid', divCount: 9 },
  wave: { className: 'sk-wave', divCount: 5 },
  'folding-cube': { className: 'sk-folding-cube', divCount: 4 },
  'three-bounce': { className: 'sk-three-bounce', divCount: 3 },
  'double-bounce': { className: 'sk-double-bounce', divCount: 2 },
  'wandering-cubes': { className: 'sk-wandering-cubes', divCount: 2 },
  'chasing-dots': { className: 'sk-chasing-dots', divCount: 2 },
  'rotating-plane': { className: 'sk-rotating-plane', divCount: 1 },
  pulse: { className: 'sk-pulse', divCount: 1 },
  wordpress: { className: 'sk-wordpress', divCount: 1 }
};

var loadersCssSpinners = {
  'ball-grid-beat': { divCount: 9 },
  'ball-grid-pulse': { divCount: 9 },
  'line-spin-fade-loader': { divCount: 8 },
  'ball-spin-fade-loader': { divCount: 8 },
  'ball-pulse-rise': { divCount: 5 },
  'line-scale': { divCount: 5 },
  'line-scale-pulse-out': { divCount: 5 },
  'line-scale-pulse-out-rapid': { divCount: 5 },
  pacman: { divCount: 5 },
  'line-scale-party': { divCount: 4 },
  'ball-triangle-path': { divCount: 3 },
  'ball-scale-multiple': { divCount: 3 },
  'ball-scale-ripple-multiple': { divCount: 3 },
  'ball-pulse-sync': { divCount: 3 },
  'ball-beat': { divCount: 3 },
  'ball-zig-zag': { divCount: 2 },
  'ball-zig-zag-deflect': { divCount: 2 },
  'ball-clip-rotate-pulse': { divCount: 2 },
  'ball-clip-rotate-multiple': { divCount: 2 },
  'ball-clip-rotate': { divCount: 1 },
  'ball-scale-ripple': { divCount: 1 },
  'triangle-skew-spin': { divCount: 1 }
};

module.exports = {
  spinkitSpinners: spinkitSpinners,
  loadersCssSpinners: loadersCssSpinners,
  allSpinners: _extends({}, spinkitSpinners, loadersCssSpinners)
};

/***/ }),

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
    comment: props.comment.data,
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
//# sourceMappingURL=[id].js.ac37edb6a1ced7a49d5b.hot-update.js.map