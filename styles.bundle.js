webpackJsonp(["styles"],{

/***/ "../../../../../src/assets/preloader.gif":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "preloader.faeb17ce10b82be5edba.gif";

/***/ }),

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n:root{\n    --main-one:#1f85c3;\n    --main-two: #4CAF50;\n}\n/* bootstrap default */\na:focus{\n  -webkit-box-shadow:none !important;\n          box-shadow:none !important;\n}\n/* end of bootstrap default */\nbody{\n    background:#fff2f2;\n}\n/* preloader */\n.no-js #loader { display: none;  }\n.js #loader { display: block; position: absolute; left: 100px; top: 0; }\n.se-pre-con {\n\tposition: fixed;\n\tleft: 0px;\n\ttop: 0px;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 9999;\n\tbackground: url(" + escape(__webpack_require__("../../../../../src/assets/preloader.gif")) + ") center no-repeat #fff;\n}\n/* end of preloader */\n@-webkit-keyframes rubberBand {\n    from {\n      -webkit-transform: scale3d(1, 1, 1);\n              transform: scale3d(1, 1, 1);\n    }\n  \n    30% {\n      -webkit-transform: scale3d(1.25, 0.75, 1);\n              transform: scale3d(1.25, 0.75, 1);\n    }\n  \n    40% {\n      -webkit-transform: scale3d(0.75, 1.25, 1);\n              transform: scale3d(0.75, 1.25, 1);\n    }\n  \n    50% {\n      -webkit-transform: scale3d(1.15, 0.85, 1);\n              transform: scale3d(1.15, 0.85, 1);\n    }\n  \n    65% {\n      -webkit-transform: scale3d(.95, 1.05, 1);\n              transform: scale3d(.95, 1.05, 1);\n    }\n  \n    75% {\n      -webkit-transform: scale3d(1.05, .95, 1);\n              transform: scale3d(1.05, .95, 1);\n    }\n  \n    to {\n      -webkit-transform: scale3d(1, 1, 1);\n              transform: scale3d(1, 1, 1);\n    }\n  }\n@keyframes rubberBand {\n    from {\n      -webkit-transform: scale3d(1, 1, 1);\n              transform: scale3d(1, 1, 1);\n    }\n  \n    30% {\n      -webkit-transform: scale3d(1.25, 0.75, 1);\n              transform: scale3d(1.25, 0.75, 1);\n    }\n  \n    40% {\n      -webkit-transform: scale3d(0.75, 1.25, 1);\n              transform: scale3d(0.75, 1.25, 1);\n    }\n  \n    50% {\n      -webkit-transform: scale3d(1.15, 0.85, 1);\n              transform: scale3d(1.15, 0.85, 1);\n    }\n  \n    65% {\n      -webkit-transform: scale3d(.95, 1.05, 1);\n              transform: scale3d(.95, 1.05, 1);\n    }\n  \n    75% {\n      -webkit-transform: scale3d(1.05, .95, 1);\n              transform: scale3d(1.05, .95, 1);\n    }\n  \n    to {\n      -webkit-transform: scale3d(1, 1, 1);\n              transform: scale3d(1, 1, 1);\n    }\n  }\n.rubberBand {\n    -webkit-animation-name: rubberBand;\n            animation-name: rubberBand;\n  }\n@-webkit-keyframes fadeInRight {\n    from {\n      opacity: 0;\n      -webkit-transform: translate3d(100%, 0, 0);\n              transform: translate3d(100%, 0, 0);\n    }\n  \n    to {\n      opacity: 1;\n      -webkit-transform: none;\n              transform: none;\n    }\n  }\n@keyframes fadeInRight {\n    from {\n      opacity: 0;\n      -webkit-transform: translate3d(100%, 0, 0);\n              transform: translate3d(100%, 0, 0);\n    }\n  \n    to {\n      opacity: 1;\n      -webkit-transform: none;\n              transform: none;\n    }\n  }\n.fadeInRight {\n    -webkit-animation-name: fadeInRight;\n            animation-name: fadeInRight;\n  }\n@-webkit-keyframes fadeIn {\n    from {\n      opacity: 0;\n    }\n  \n    to {\n      opacity: 1;\n    }\n  }\n@keyframes fadeIn {\n    from {\n      opacity: 0;\n    }\n  \n    to {\n      opacity: 1;\n    }\n  }\n.fadeIn {\n    -webkit-animation-name: fadeIn;\n            animation-name: fadeIn;\n  }\n@-webkit-keyframes fadeInLeft {\n    from {\n      opacity: 0;\n      -webkit-transform: translate3d(-100%, 0, 0);\n              transform: translate3d(-100%, 0, 0);\n    }\n  \n    to {\n      opacity: 1;\n      -webkit-transform: none;\n              transform: none;\n    }\n  }\n@keyframes fadeInLeft {\n    from {\n      opacity: 0;\n      -webkit-transform: translate3d(-100%, 0, 0);\n              transform: translate3d(-100%, 0, 0);\n    }\n  \n    to {\n      opacity: 1;\n      -webkit-transform: none;\n              transform: none;\n    }\n  }\n.fadeInLeft {\n    -webkit-animation-name: fadeInLeft;\n            animation-name: fadeInLeft;\n  }\n@-webkit-keyframes slideInDown {\n    from {\n      -webkit-transform: translate3d(0, -100%, 0);\n              transform: translate3d(0, -100%, 0);\n      visibility: visible;\n    }\n  \n    to {\n      -webkit-transform: translate3d(0, 0, 0);\n              transform: translate3d(0, 0, 0);\n    }\n  }\n@keyframes slideInDown {\n    from {\n      -webkit-transform: translate3d(0, -100%, 0);\n              transform: translate3d(0, -100%, 0);\n      visibility: visible;\n    }\n  \n    to {\n      -webkit-transform: translate3d(0, 0, 0);\n              transform: translate3d(0, 0, 0);\n    }\n  }\n.slideInDown {\n    -webkit-animation-name: slideInDown;\n            animation-name: slideInDown;\n  }\n@-webkit-keyframes bounceInDown {\n    from, 60%, 75%, 90%, to {\n      -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n              animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    }\n  \n    0% {\n      opacity: 0;\n      -webkit-transform: translate3d(0, -3000px, 0);\n              transform: translate3d(0, -3000px, 0);\n    }\n  \n    60% {\n      opacity: 1;\n      -webkit-transform: translate3d(0, 25px, 0);\n              transform: translate3d(0, 25px, 0);\n    }\n  \n    75% {\n      -webkit-transform: translate3d(0, -10px, 0);\n              transform: translate3d(0, -10px, 0);\n    }\n  \n    90% {\n      -webkit-transform: translate3d(0, 5px, 0);\n              transform: translate3d(0, 5px, 0);\n    }\n  \n    to {\n      -webkit-transform: none;\n              transform: none;\n    }\n  }\n@keyframes bounceInDown {\n    from, 60%, 75%, 90%, to {\n      -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n              animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    }\n  \n    0% {\n      opacity: 0;\n      -webkit-transform: translate3d(0, -3000px, 0);\n              transform: translate3d(0, -3000px, 0);\n    }\n  \n    60% {\n      opacity: 1;\n      -webkit-transform: translate3d(0, 25px, 0);\n              transform: translate3d(0, 25px, 0);\n    }\n  \n    75% {\n      -webkit-transform: translate3d(0, -10px, 0);\n              transform: translate3d(0, -10px, 0);\n    }\n  \n    90% {\n      -webkit-transform: translate3d(0, 5px, 0);\n              transform: translate3d(0, 5px, 0);\n    }\n  \n    to {\n      -webkit-transform: none;\n              transform: none;\n    }\n  }\n.bounceInDown {\n    -webkit-animation-name: bounceInDown;\n            animation-name: bounceInDown;\n  }\n/* ///Animation for images */\n@-webkit-keyframes slideInUp {\n    from {\n      -webkit-transform: translate3d(0, 100%, 0);\n              transform: translate3d(0, 100%, 0);\n      visibility: visible;\n    }\n  \n    to {\n      -webkit-transform: translate3d(0, 0, 0);\n              transform: translate3d(0, 0, 0);\n    }\n  }\n@keyframes slideInUp {\n    from {\n      -webkit-transform: translate3d(0, 100%, 0);\n              transform: translate3d(0, 100%, 0);\n      visibility: visible;\n    }\n  \n    to {\n      -webkit-transform: translate3d(0, 0, 0);\n              transform: translate3d(0, 0, 0);\n    }\n  }\n.slideInUp {\n    -webkit-animation-name: slideInUp;\n            animation-name: slideInUp;\n  }\n@-webkit-keyframes slideInLeft {\n    from {\n      -webkit-transform: translate3d(-100%, 0, 0);\n              transform: translate3d(-100%, 0, 0);\n      visibility: visible;\n    }\n  \n    to {\n      -webkit-transform: translate3d(0, 0, 0);\n              transform: translate3d(0, 0, 0);\n    }\n  }\n@keyframes slideInLeft {\n    from {\n      -webkit-transform: translate3d(-100%, 0, 0);\n              transform: translate3d(-100%, 0, 0);\n      visibility: visible;\n    }\n  \n    to {\n      -webkit-transform: translate3d(0, 0, 0);\n              transform: translate3d(0, 0, 0);\n    }\n  }\n.slideInLeft {\n    -webkit-animation-name: slideInLeft;\n            animation-name: slideInLeft;\n  }\n@-webkit-keyframes bridge1{\n    from{\n       left:-500px;\n       opacity:1;\n    }\n    to{\n        left:0;\n        opacity:1;\n    }\n}\n@keyframes bridge1{\n    from{\n       left:-500px;\n       opacity:1;\n    }\n    to{\n        left:0;\n        opacity:1;\n    }\n}\n@-webkit-keyframes bridge2{\n    from{\n       right:-500px;\n       opacity:1;\n    }\n    to{\n        right:20px;\n        opacity:1;\n    }\n}\n@keyframes bridge2{\n    from{\n       right:-500px;\n       opacity:1;\n    }\n    to{\n        right:20px;\n        opacity:1;\n    }\n}\n@-webkit-keyframes hand{\n    from{\n        top:-500px;\n        opacity:1;\n    }\n    to{\n        top:10px;\n        opacity:1;\n    }\n}\n@keyframes hand{\n    from{\n        top:-500px;\n        opacity:1;\n    }\n    to{\n        top:10px;\n        opacity:1;\n    }\n}\n@-webkit-keyframes fade{\n    from{\n        opacity:0;\n    }\n    to{\n        opacity:1;\n    }\n}\n@keyframes fade{\n    from{\n        opacity:0;\n    }\n    to{\n        opacity:1;\n    }\n}\n@-webkit-keyframes slideOutDown {\n    from {\n      -webkit-transform: translate3d(0, 0, 0);\n              transform: translate3d(0, 0, 0);\n    }\n  \n    to {\n      visibility: hidden;\n      -webkit-transform: translate3d(0, 100%, 0);\n              transform: translate3d(0, 100%, 0);\n    }\n  }\n@keyframes slideOutDown {\n    from {\n      -webkit-transform: translate3d(0, 0, 0);\n              transform: translate3d(0, 0, 0);\n    }\n  \n    to {\n      visibility: hidden;\n      -webkit-transform: translate3d(0, 100%, 0);\n              transform: translate3d(0, 100%, 0);\n    }\n  }\n.slideOutDown {\n    -webkit-animation-name: slideOutDown;\n            animation-name: slideOutDown;\n  }\n.image-effect .animating{\n    position:absolute;\n}\n.image-effect .bridge1{\n    width:40%;\n    top:47%;\n    -webkit-animation-name:bridge1 !important;\n            animation-name:bridge1 !important;\n    -webkit-animation-duration:0.5s;\n            animation-duration:0.5s;\n    -webkit-animation-delay:1s;\n            animation-delay:1s;\n    opacity:0;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n}\n.image-effect .bridge2{\n    width:40%;\n    top:47%;\n    -webkit-animation-name:bridge2 !important;\n            animation-name:bridge2 !important;\n    -webkit-animation-duration:0.5s;\n            animation-duration:0.5s;\n    -webkit-animation-delay:1s;\n            animation-delay:1s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    opacity:0;\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n}\n.image-effect .hand{\n    top:10px;\n    width:40%;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    -webkit-animation-name:hand !important;\n            animation-name:hand !important;\n    -webkit-animation-duration:0.9s;\n            animation-duration:0.9s;\n    -webkit-animation-delay:1.5s;\n            animation-delay:1.5s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    opacity: 0;\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n}\ndiv[caption]{\n    -webkit-animation-name: fade;\n            animation-name: fade;\n    opacity:0;\n    -webkit-animation-duration:3s;\n            animation-duration:3s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-delay:1s;\n            animation-delay:1s;\n}\n/* SEM plane animation */\n/*Paper Plane: Image*/\n.plane {\n  width: 100%;\n  height: 60px;\n}\n/*Paper Plane: Animation*/\n.plane-container {\n  position: absolute;\n  width:100%;\n  top:6vw;\n  -webkit-animation: paper-plane-scoping 2s alternate infinite;\n  animation: paper-plane-scoping 2s alternate infinite;\n\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n}\n@-webkit-keyframes paper-plane-scoping {\n  0% {\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px);\n  }\n  100% {\n    -webkit-transform: translateY(100px);\n    transform: translateY(100px);\n  }\n}\n.plane {\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n\n  -webkit-animation: paper-plane-soaring 4s forwards infinite;\n  animation: paper-plane-soaring 4s forwards infinite;\n}\n@-webkit-keyframes paper-plane-soaring {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  40% {\n    -webkit-transform: rotate(15deg);\n    transform: rotate(15deg);\n  }\n  50% {\n    -webkit-transform: rotate(15deg);\n    transform: rotate(15deg);\n  }\n  60% {\n    -webkit-transform: rotate(-10deg);\n    transform: rotate(-10deg);\n  }\n  70% {\n    -webkit-transform: rotate(-10deg);\n    transform: rotate(-10deg);\n  }\n  100% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n}\n/* end of SEM plane animation */\n/* Bird Animation */\ndiv[bird]{\n  position: relative;\n  top:0;\n}\n@-webkit-keyframes flap-r {\n  0%,10%   { \tborder-top-width: 60px; }\n  40%,60%  { \tborder-top-width: 10px; }\n  100%     { \tborder-top-width: 60px; }\n}\n@-webkit-keyframes flap-l {\n  0%       { \tborder-bottom-width: 0px; }\n  40%,60%  { \tborder-bottom-width: 40px; }\n  100%     { \tborder-bottom-width: 0px; }\n}\n@-webkit-keyframes fly {\n  0%   { \tleft: 0%; top:100px;-webkit-transform:scale3d(0.5,0.5,1) }\n  100% { \tleft: 100%; top:100px; -webkit-transform:scale3d(1,1,1) }\n}\n@-webkit-keyframes bob {\n  0%   { \ttop: 25px; }\n  50%   { \ttop: 0px; }\n  100% { \ttop: 25px; }\n}\n#pictureframe {\n  position:relative;\n  top:0;\n  width:100px;\n  -webkit-animation: fly 3.5s linear;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n#bird div {\n  position:absolute;\n}\n#bird { \n  position:absolute;\n  -webkit-animation: bob 0.7s infinite cubic-bezier(0.7, 0.7, 0.1, 0.4);\n }\n#body1,#body2,#wing-l,#wing-r {\n  \twidth: 0px; height: 0px;\n    border-color: transparent;\n    border-style: solid;\n}\n#body1 {\n\tborder-width: 15px; \n  border-left-width:25px;\n  border-top-width:15px;\n  border-right-width: 55px;\n  border-top-color: #333;\n}\n#body2 { \n  left: 50px; bottom: 0px;\n\tborder-width: 10px; \n  border-left-width:5px;\n  border-top-width:0px;\n  border-right-width: 15px;\n  border-bottom-color: #777;\n}\n#wing-l {\n  left: 22px; bottom: 0px; \n\tborder-width: 60px; \n  border-left-width:20px;\n  border-top-width:0px;\n  border-right-width: 6px;\n  border-bottom-color: #444;\n  -webkit-animation: flap-l 0.7s infinite; \n}\n#wing-r {\n  left: 22px; top:0px;\n\tborder-width: 60px; \n  border-left-width:20px;\n  border-bottom-width:0px;\n  border-right-width: 6px;\n  border-top-color: #777;\n  -webkit-animation: flap-r 0.7s infinite; \n}\n#caption a {\n  position:absolute;\n  font-family: courier;\n  left:10px; bottom:10px;\n  color: #444;\n}\ndiv[nxtlife-list] div[li]{\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    margin:30px auto;\n}\ndiv[nxtlife-list] div[li] div[bullet]{\n    margin-right:10px;\n    padding-right:10px; \n}\ndiv[nxtlife-list] div[li] div[bullet] i {\n    font-size: 24px;\n    height: 64px;\n    line-height: 64px;\n    text-align: center;\n    width: 64px;\n    border-radius: 100%;\n    color: #45aed6;\n    box-shadow: inset 0 0 0 1px #d7d7d7;\n    -webkit-box-shadow: inset 0 0 0 1px #d7d7d7;\n    -webkit-transition: background-color 400ms, background-color 400ms;\n    transition: background-color 400ms, background-color 400ms;\n    position: relative;-webkit-box-ordinal-group:4;-ms-flex-order:3px solid white;order:3px solid white;\n}\ndiv[nxtlife-list] div[li] div[bullet] i:after{\n    content: \"\";\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    top: 50%;\n    margin-top: -10px;\n    right: -10px;\n    border: 4px solid #fff;\n    border-radius: 20px;\n    background: #45aed6;\n}\ndiv[li]:hover div[bullet] i{\n    color: white !important;\n    line-height: 57px !important;\n    background:#45aed6 !important;\n    border:4px solid white;\n    box-shadow: inset 0 0 0 5px rgba(77, 77, 77, 0.808);\n    -webkit-box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.8);\n}\n/* // end of list */\n/* /parallelex scroll styles */\n.parallelex-block {\n  position: relative;\n  margin-top:20px;\n  width:100%;\n}\ndiv[parallelex-background]{\n  background-attachment: fixed !important;\n  width:100%;\n  /* min-height:100px; */\n  background-size: contain !important;\n}\n.parallel-image1{\n  background:url(https://abovethelaw.com/wp-content/uploads/iStock_000027197562_Large.jpg);\n}\n.parallel-image2{\n  background:url(https://tatendachawanzwa.com/wp-content/uploads/2015/07/001_demo2.jpg);\n}\n.parallel-image3{\nbackground:url(https://www.wallpaperhdi.com/wp-content/uploads/2016/06/Material_Design_Wallpaper_Image_Desktop.jpg);\n}\ndiv[parallelex-content]{\n  /* position: absolute; */\n  padding:20px 10px;\n  top: 0;\n  background: rgba(37, 37, 37, 0.82);\n  width: 100%;\n  color:white;\n  text-align: center;\n  padding:50px;\n}\ndiv[parallelx2]{\n  background-attachment: fixed !important;\n  min-height:260px;\n  background-size: contain !important;\n}\n.animate-now{\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n}\n/* end of parallelx scroll */", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../css-loader/lib/url/escape.js":
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map