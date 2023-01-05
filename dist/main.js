/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/menu-board.jpg */ "./src/images/menu-board.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Passions+Conflict&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* outline: 3px solid white; */\n}\n:root {\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 16px;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 80px 1fr 80px;\n  height: 100vh;\n  width: 100vw;\n  min-width: 1040px;\n  background-color: #0E0504;\n  position: relative;\n}\n\nheader{\n  display: flex;\n}\nnav {\n  display: flex;\n  width: 100%;\n}\n\n\nheader\nnav ul {\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  gap: 54px;\n}\n\nheader\nnav ul \nli button {\n  appearance: none;\n  border-top: 2px solid white;\n  border-left: 2px solid white;\n  border-right: 2px solid white;\n  border-bottom: none;\n  background-color: #0E0504;\n  color: white;\n  padding: 6px 12px;\n  width: 100%;\n  font-size: 1.1rem;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  font-weight: 600;\n}\n\nheader\nnav ul li \nbutton:hover {\n  text-shadow: 3px 3px 16px white;\n}\n\nheader\nnav ul li \nbutton:active {\n  background-color: aliceblue;\n  color: #0E0504;\n  border-top: 2px solid grey;\n  border-left: 2px solid grey;\n  border-right: 2px solid grey;\n}\n\nmain#content {\n  min-height: 744px;\n  min-width: 1124px;\n  background-color: #4B1F0E;\n  border-top: 2px solid white;\n  border-bottom: 2px solid white;\n  padding: 44px 52px;\n  overflow-y: auto;\n}\n\nmain#content\nsection#home {\n  display: grid;\n  height: 100%;\n  grid-template-columns: repeat(2,1fr);\n  grid-template-rows: repeat(2, 1fr);\n  width: auto;\n  min-width: 1020px;\n  column-gap: 52px;\n  align-items: center;\n  justify-items: center;\n}\n\nmain#content\nsection#home\nimg.hero-image {\n  width: max(480px, 66%);\n  border: 4px solid #BE7656;\n  border-radius: 80px 14px;\n}\n\nsection#home\nh2 {\n  color: #EFC3A4;\n  font-family: 'Passions Conflict', 'Times New Roman';\n  font-style: italic;\n  font-size: 5.5rem;\n  font-weight: 400;\n}\n\nsection#home\np {\n  color: #EFC3A4;\n  font-size: 1.4rem;\n  grid-column: 1 / -1;\n  width: 700px\n}\n\nmain#content\nsection#menu {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 100%;\n  background-position: center;\n  margin: auto;\n  max-width: 1020px;\n  height: 1470px;\n  outline: 3px solid #BE7656;\n  border-radius: 20px;\n  box-shadow: 6px 6px 18px #030201;\n  color: white;\n  padding: 240px 210px 190px 220px;\n}\n\nmain#content\nsection#menu\nh1 {\n  font-size: 5rem;\n  font-family: 'Passions Conflict', 'Times New Roman', Times, serif;\n  letter-spacing: 12px;\n  margin-bottom: 36px;\n}\n\nsection#menu\ndiv {\n  margin-bottom: 36px;\n  line-height: 1.3;\n}\n\nsection#menu\ndiv h3 {\n  font-style: italic;\n  font-size: 1.8rem;\n  margin-bottom: 14px;\n}\n\nsection#menu\ndiv pre {\n  font-size: 1.1rem;\n}\n\n\n\nfooter {\n  display: flex;\n  justify-content: center;\n}\n\nfooter a {\n  display: flex;\n  align-items: center;\n}\n\nfooter a \nimg{\n  width: 38px;\n  height: 38px;\n  /* border-radius: 50%; */\n}\n\nfooter a \nimg:hover {\n  /* box-shadow: 0.5px 0.5px 12px white; */\n  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(252deg) brightness(104%) contrast(100%) drop-shadow(0 0 0.75rem white);\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,8BAA8B;AAChC;AACA;EACE,4CAA4C;EAC5C,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,iCAAiC;EACjC,aAAa;EACb,YAAY;EACZ,iBAAiB;EACjB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,WAAW;AACb;;;AAGA;;EAEE,WAAW;EACX,cAAc;EACd,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,SAAS;AACX;;AAEA;;;EAGE,gBAAgB;EAChB,2BAA2B;EAC3B,4BAA4B;EAC5B,6BAA6B;EAC7B,mBAAmB;EACnB,yBAAyB;EACzB,YAAY;EACZ,iBAAiB;EACjB,WAAW;EACX,iBAAiB;EACjB,2BAA2B;EAC3B,4BAA4B;EAC5B,gBAAgB;AAClB;;AAEA;;;EAGE,+BAA+B;AACjC;;AAEA;;;EAGE,2BAA2B;EAC3B,cAAc;EACd,0BAA0B;EAC1B,2BAA2B;EAC3B,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,yBAAyB;EACzB,2BAA2B;EAC3B,8BAA8B;EAC9B,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;;EAEE,aAAa;EACb,YAAY;EACZ,oCAAoC;EACpC,kCAAkC;EAClC,WAAW;EACX,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;;;EAGE,sBAAsB;EACtB,yBAAyB;EACzB,wBAAwB;AAC1B;;AAEA;;EAEE,cAAc;EACd,mDAAmD;EACnD,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;;EAEE,cAAc;EACd,iBAAiB;EACjB,mBAAmB;EACnB;AACF;;AAEA;;EAEE,yDAA+C;EAC/C,qBAAqB;EACrB,2BAA2B;EAC3B,YAAY;EACZ,iBAAiB;EACjB,cAAc;EACd,0BAA0B;EAC1B,mBAAmB;EACnB,gCAAgC;EAChC,YAAY;EACZ,gCAAgC;AAClC;;AAEA;;;EAGE,eAAe;EACf,iEAAiE;EACjE,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;;EAEE,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;;EAEE,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;;EAEE,iBAAiB;AACnB;;;;AAIA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,wBAAwB;AAC1B;;AAEA;;EAEE,wCAAwC;EACxC,gIAAgI;AAClI","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Passions+Conflict&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* outline: 3px solid white; */\n}\n:root {\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 16px;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 80px 1fr 80px;\n  height: 100vh;\n  width: 100vw;\n  min-width: 1040px;\n  background-color: #0E0504;\n  position: relative;\n}\n\nheader{\n  display: flex;\n}\nnav {\n  display: flex;\n  width: 100%;\n}\n\n\nheader\nnav ul {\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  gap: 54px;\n}\n\nheader\nnav ul \nli button {\n  appearance: none;\n  border-top: 2px solid white;\n  border-left: 2px solid white;\n  border-right: 2px solid white;\n  border-bottom: none;\n  background-color: #0E0504;\n  color: white;\n  padding: 6px 12px;\n  width: 100%;\n  font-size: 1.1rem;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  font-weight: 600;\n}\n\nheader\nnav ul li \nbutton:hover {\n  text-shadow: 3px 3px 16px white;\n}\n\nheader\nnav ul li \nbutton:active {\n  background-color: aliceblue;\n  color: #0E0504;\n  border-top: 2px solid grey;\n  border-left: 2px solid grey;\n  border-right: 2px solid grey;\n}\n\nmain#content {\n  min-height: 744px;\n  min-width: 1124px;\n  background-color: #4B1F0E;\n  border-top: 2px solid white;\n  border-bottom: 2px solid white;\n  padding: 44px 52px;\n  overflow-y: auto;\n}\n\nmain#content\nsection#home {\n  display: grid;\n  height: 100%;\n  grid-template-columns: repeat(2,1fr);\n  grid-template-rows: repeat(2, 1fr);\n  width: auto;\n  min-width: 1020px;\n  column-gap: 52px;\n  align-items: center;\n  justify-items: center;\n}\n\nmain#content\nsection#home\nimg.hero-image {\n  width: max(480px, 66%);\n  border: 4px solid #BE7656;\n  border-radius: 80px 14px;\n}\n\nsection#home\nh2 {\n  color: #EFC3A4;\n  font-family: 'Passions Conflict', 'Times New Roman';\n  font-style: italic;\n  font-size: 5.5rem;\n  font-weight: 400;\n}\n\nsection#home\np {\n  color: #EFC3A4;\n  font-size: 1.4rem;\n  grid-column: 1 / -1;\n  width: 700px\n}\n\nmain#content\nsection#menu {\n  background-image: url(../images/menu-board.jpg);\n  background-size: 100%;\n  background-position: center;\n  margin: auto;\n  max-width: 1020px;\n  height: 1470px;\n  outline: 3px solid #BE7656;\n  border-radius: 20px;\n  box-shadow: 6px 6px 18px #030201;\n  color: white;\n  padding: 240px 210px 190px 220px;\n}\n\nmain#content\nsection#menu\nh1 {\n  font-size: 5rem;\n  font-family: 'Passions Conflict', 'Times New Roman', Times, serif;\n  letter-spacing: 12px;\n  margin-bottom: 36px;\n}\n\nsection#menu\ndiv {\n  margin-bottom: 36px;\n  line-height: 1.3;\n}\n\nsection#menu\ndiv h3 {\n  font-style: italic;\n  font-size: 1.8rem;\n  margin-bottom: 14px;\n}\n\nsection#menu\ndiv pre {\n  font-size: 1.1rem;\n}\n\n\n\nfooter {\n  display: flex;\n  justify-content: center;\n}\n\nfooter a {\n  display: flex;\n  align-items: center;\n}\n\nfooter a \nimg{\n  width: 38px;\n  height: 38px;\n  /* border-radius: 50%; */\n}\n\nfooter a \nimg:hover {\n  /* box-shadow: 0.5px 0.5px 12px white; */\n  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(252deg) brightness(104%) contrast(100%) drop-shadow(0 0 0.75rem white);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/menu.js":
/*!*****************************!*\
  !*** ./src/scripts/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import board from '../images/menu-board.jpg'

const menuContent = (function () {
  const menuSection = document.createElement("section");
  menuSection.setAttribute("id", "menu");

  const BreadText = document.createElement("h1");
  BreadText.innerHTML = "MENU";
  menuSection.appendChild(BreadText);

  for (let i = 0; i <= 3; i += 1) {
    const menuBlock = document.createElement("div");
    const header = document.createElement("h3");
    const list = document.createElement("ul");

    switch (i) {
      case 1:
        header.textContent = "Sandwhich / Cake";
        for (let point = 0; point <= 6; point += 1) {
          const item = document.createElement("li");
          switch (point) {
            case 1:
              item.innerHTML = `<pre>Garlic Bread                ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            case 2:
              item.innerHTML = `<pre>Croissants                  ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            case 3:
              item.innerHTML = `<pre>Crawfish & Bread            ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            case 4:
              item.innerHTML = `<pre>Classic Vanilla Cake        ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            case 5:
              item.innerHTML = `<pre>Chocolate Lava Cake         ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            case 6:
              item.innerHTML = `<pre>Strawberry Short Cake       ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            default:
              item.innerHTML = `<pre>Roast Beef Sandwich         ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
          }
        }
        break;
      case 2:
        header.textContent = "Coffee";
        for (let point = 0; point <= 6; point += 1) {
          const item = document.createElement("li");
          switch (point) {
            case 1:
              item.innerHTML = `<pre>Americano                   ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            case 2:
              item.innerHTML = `<pre>Espresso                    ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            case 3:
              item.innerHTML = `<pre>Doppio                      ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            case 4:
              item.innerHTML = `<pre>Latte                       ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            case 5:
              item.innerHTML = `<pre>Cappuccino                  ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            case 6:
              item.innerHTML = `<pre>Mocha                       ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            default:
              item.innerHTML = `<pre>Black                       ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
          }
        }
        break;
      case 3:
        header.textContent = "Other Beverages";
        for (let point = 0; point <= 4; point += 1) {
          const item = document.createElement("li");
          switch (point) {
            case 1:
              item.innerHTML = `<pre>Watermelon Juice            ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            case 2:
              item.innerHTML = `<pre>Lemonade Jolt               ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            case 3:
              item.innerHTML = `<pre>Orange Grove                ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            case 4:
              item.innerHTML = `<pre>Budweiser                   ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            default:
              item.innerHTML = `<pre>Bottled Water               ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
          }
        }
        break;
      default:
        header.textContent = "Pasta";
        for (let point = 0; point <= 3; point += 1) {
          const item = document.createElement("li");
          switch (point) {
            case 1:
              item.innerHTML = `<pre>Fettuccine Alfredo          ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            case 2:
              item.innerHTML = `<pre>Chicken Tetrazzini          ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            case 3:
              item.innerHTML = `<pre>Steakhouse Pasta            ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
              break;
            default:
              item.innerHTML = `<pre>Meatballs and Spaghetti     ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰ ⸰      $24.99</pre>`;
              list.appendChild(item);
          }
        }
    }
    menuBlock.appendChild(header);
    menuBlock.appendChild(list);
    menuSection.appendChild(menuBlock);
  }

  return { menuSection };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuContent);


/***/ }),

/***/ "./src/images/GitHub-Mark-Light-64px.png":
/*!***********************************************!*\
  !*** ./src/images/GitHub-Mark-Light-64px.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2c0b3d17597d506011d6.png";

/***/ }),

/***/ "./src/images/bread-coffee.jpg":
/*!*************************************!*\
  !*** ./src/images/bread-coffee.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d0948880c670913f5840.jpg";

/***/ }),

/***/ "./src/images/menu-board.jpg":
/*!***********************************!*\
  !*** ./src/images/menu-board.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7a99b85abc28e14e3ffc.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _images_GitHub_Mark_Light_64px_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/GitHub-Mark-Light-64px.png */ "./src/images/GitHub-Mark-Light-64px.png");
/* harmony import */ var _images_bread_coffee_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/bread-coffee.jpg */ "./src/images/bread-coffee.jpg");
/* harmony import */ var _scripts_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/menu */ "./src/scripts/menu.js");





const baseDOM = (function () {
  const body = document.querySelector("body");

  // Main Header //
  const header = document.createElement("header");
  // const h1 = document.createElement("h1");
  const nav = document.createElement("nav");
  const navUl = document.createElement("ul");
  const btnList = [];
  for (let i = 0; i <= 3; i += 1) {
    const navLi = document.createElement("li");
    const navBtn = document.createElement("button");

    switch (i) {
      case 0:
        navBtn.textContent = "Home";
        navBtn.setAttribute("id", "home");
        navLi.appendChild(navBtn);
        break;
      case 1:
        navBtn.textContent = "Menu";
        navBtn.setAttribute("id", "menu");
        navLi.appendChild(navBtn);
        break;
      case 2:
        navBtn.textContent = "About";
        navBtn.setAttribute("id", "about");
        navLi.appendChild(navBtn);
        break;
      default:
        navBtn.textContent = "Credits";
        navBtn.setAttribute("id", "credit");
        navLi.appendChild(navBtn);
        break;
    }
    btnList.push(navLi);
    navUl.appendChild(navLi);
  }

  // h1.textContent = 'Bread & Butter Cafe'
  nav.appendChild(navUl);
  // header.appendChild(h1);
  header.appendChild(nav);
  body.appendChild(header);

  // Main Content //

  const main = document.createElement("main");
  main.setAttribute("id", "content");

  body.appendChild(main);

  // Main Footer //
  const footer = document.createElement("footer");
  const gitLink = document.createElement("a");
  gitLink.setAttribute("href", "https://github.com/RhazzXIX");
  const github = new Image();
  github.src = _images_GitHub_Mark_Light_64px_png__WEBPACK_IMPORTED_MODULE_1__;

  gitLink.appendChild(github);
  footer.appendChild(gitLink);

  body.appendChild(footer);

  return { main, btnList };
})();

const homeContent = (function () {
  const homeSection = document.createElement("section");
  homeSection.setAttribute("id", "home");

  const heroText = document.createElement("h2");
  heroText.innerHTML = "Bread & Butter Cafe";

  const heroImage = new Image();
  heroImage.src = _images_bread_coffee_jpg__WEBPACK_IMPORTED_MODULE_2__;
  heroImage.classList.add("hero-image");
  heroImage.setAttribute("alt", "Toast Bread and Coffee");

  const subHero = document.createElement("p");
  subHero.innerHTML = `Established in 1920's, <em>Bread & Butter Cafe</em> has been serving 
    people delicious food made from <em>high quality</em> ingredients. Supporting domestic
    farmers through sourcing local produce directly from them.`;

  homeSection.appendChild(heroText);
  homeSection.appendChild(heroImage);
  homeSection.appendChild(subHero);
  baseDOM.main.appendChild(homeSection);
  return { homeSection };
})();

const bindEvents = (function () {
  baseDOM.btnList[0].addEventListener("click", (e) => {
    e.stopPropagation();
    const element = baseDOM.main.querySelector("section");
    if (Boolean(element)) {
      if (element !== homeContent.homeSection) {
        baseDOM.main.removeChild(element);
        baseDOM.main.appendChild(homeContent.homeSection);
      }
    }
  });
  baseDOM.btnList[1].addEventListener("click", (e) => {
    e.stopPropagation();
    const element = baseDOM.main.querySelector("section");
    if (Boolean(element)) {
      if (element !== _scripts_menu__WEBPACK_IMPORTED_MODULE_3__["default"].menuSection) {
        baseDOM.main.removeChild(element);
        baseDOM.main.appendChild(_scripts_menu__WEBPACK_IMPORTED_MODULE_3__["default"].menuSection);
      }
    }
  });
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpRUFBdUI7QUFDN0M7QUFDQSxpQ0FBaUMsaUVBQXVCO0FBQ3hEO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL21lbnUtYm9hcmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QYXNzaW9ucytDb25mbGljdCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIG91dGxpbmU6IDNweCBzb2xpZCB3aGl0ZTsgKi9cXG59XFxuOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggMWZyIDgwcHg7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWluLXdpZHRoOiAxMDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEUwNTA0O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5oZWFkZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5cXG5oZWFkZXJcXG5uYXYgdWwge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGdhcDogNTRweDtcXG59XFxuXFxuaGVhZGVyXFxubmF2IHVsIFxcbmxpIGJ1dHRvbiB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwRTA1MDQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiA2cHggMTJweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuaGVhZGVyXFxubmF2IHVsIGxpIFxcbmJ1dHRvbjpob3ZlciB7XFxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAxNnB4IHdoaXRlO1xcbn1cXG5cXG5oZWFkZXJcXG5uYXYgdWwgbGkgXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICBjb2xvcjogIzBFMDUwNDtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBncmV5O1xcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBncmV5O1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgZ3JleTtcXG59XFxuXFxubWFpbiNjb250ZW50IHtcXG4gIG1pbi1oZWlnaHQ6IDc0NHB4O1xcbiAgbWluLXdpZHRoOiAxMTI0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEIxRjBFO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbiAgcGFkZGluZzogNDRweCA1MnB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxubWFpbiNjb250ZW50XFxuc2VjdGlvbiNob21lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgd2lkdGg6IGF1dG87XFxuICBtaW4td2lkdGg6IDEwMjBweDtcXG4gIGNvbHVtbi1nYXA6IDUycHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5tYWluI2NvbnRlbnRcXG5zZWN0aW9uI2hvbWVcXG5pbWcuaGVyby1pbWFnZSB7XFxuICB3aWR0aDogbWF4KDQ4MHB4LCA2NiUpO1xcbiAgYm9yZGVyOiA0cHggc29saWQgI0JFNzY1NjtcXG4gIGJvcmRlci1yYWRpdXM6IDgwcHggMTRweDtcXG59XFxuXFxuc2VjdGlvbiNob21lXFxuaDIge1xcbiAgY29sb3I6ICNFRkMzQTQ7XFxuICBmb250LWZhbWlseTogJ1Bhc3Npb25zIENvbmZsaWN0JywgJ1RpbWVzIE5ldyBSb21hbic7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDUuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbnNlY3Rpb24jaG9tZVxcbnAge1xcbiAgY29sb3I6ICNFRkMzQTQ7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICB3aWR0aDogNzAwcHhcXG59XFxuXFxubWFpbiNjb250ZW50XFxuc2VjdGlvbiNtZW51IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXgtd2lkdGg6IDEwMjBweDtcXG4gIGhlaWdodDogMTQ3MHB4O1xcbiAgb3V0bGluZTogM3B4IHNvbGlkICNCRTc2NTY7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm94LXNoYWRvdzogNnB4IDZweCAxOHB4ICMwMzAyMDE7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAyNDBweCAyMTBweCAxOTBweCAyMjBweDtcXG59XFxuXFxubWFpbiNjb250ZW50XFxuc2VjdGlvbiNtZW51XFxuaDEge1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgZm9udC1mYW1pbHk6ICdQYXNzaW9ucyBDb25mbGljdCcsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuICBsZXR0ZXItc3BhY2luZzogMTJweDtcXG4gIG1hcmdpbi1ib3R0b206IDM2cHg7XFxufVxcblxcbnNlY3Rpb24jbWVudVxcbmRpdiB7XFxuICBtYXJnaW4tYm90dG9tOiAzNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMztcXG59XFxuXFxuc2VjdGlvbiNtZW51XFxuZGl2IGgzIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcXG59XFxuXFxuc2VjdGlvbiNtZW51XFxuZGl2IHByZSB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuXFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciBhIFxcbmltZ3tcXG4gIHdpZHRoOiAzOHB4O1xcbiAgaGVpZ2h0OiAzOHB4O1xcbiAgLyogYm9yZGVyLXJhZGl1czogNTAlOyAqL1xcbn1cXG5cXG5mb290ZXIgYSBcXG5pbWc6aG92ZXIge1xcbiAgLyogYm94LXNoYWRvdzogMC41cHggMC41cHggMTJweCB3aGl0ZTsgKi9cXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NTAwJSkgaHVlLXJvdGF0ZSgyNTJkZWcpIGJyaWdodG5lc3MoMTA0JSkgY29udHJhc3QoMTAwJSkgZHJvcC1zaGFkb3coMCAwIDAuNzVyZW0gd2hpdGUpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsNENBQTRDO0VBQzVDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7OztBQUdBOztFQUVFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsU0FBUztBQUNYOztBQUVBOzs7RUFHRSxnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixnQkFBZ0I7QUFDbEI7O0FBRUE7OztFQUdFLCtCQUErQjtBQUNqQzs7QUFFQTs7O0VBR0UsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxrQ0FBa0M7RUFDbEMsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTs7O0VBR0Usc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6Qix3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUUsY0FBYztFQUNkLG1EQUFtRDtFQUNuRCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQjtBQUNGOztBQUVBOztFQUVFLHlEQUErQztFQUMvQyxxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsY0FBYztFQUNkLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixnQ0FBZ0M7QUFDbEM7O0FBRUE7OztFQUdFLGVBQWU7RUFDZixpRUFBaUU7RUFDakUsb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGlCQUFpQjtBQUNuQjs7OztBQUlBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUUsd0NBQXdDO0VBQ3hDLGdJQUFnSTtBQUNsSVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QYXNzaW9ucytDb25mbGljdCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogb3V0bGluZTogM3B4IHNvbGlkIHdoaXRlOyAqL1xcbn1cXG46cm9vdCB7XFxuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogODBweCAxZnIgODBweDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtaW4td2lkdGg6IDEwNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwRTA1MDQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmhlYWRlcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcblxcbmhlYWRlclxcbm5hdiB1bCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgZ2FwOiA1NHB4O1xcbn1cXG5cXG5oZWFkZXJcXG5uYXYgdWwgXFxubGkgYnV0dG9uIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgd2hpdGU7XFxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgd2hpdGU7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBFMDUwNDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5oZWFkZXJcXG5uYXYgdWwgbGkgXFxuYnV0dG9uOmhvdmVyIHtcXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDE2cHggd2hpdGU7XFxufVxcblxcbmhlYWRlclxcbm5hdiB1bCBsaSBcXG5idXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGNvbG9yOiAjMEUwNTA0O1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBncmV5O1xcbn1cXG5cXG5tYWluI2NvbnRlbnQge1xcbiAgbWluLWhlaWdodDogNzQ0cHg7XFxuICBtaW4td2lkdGg6IDExMjRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0QjFGMEU7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgd2hpdGU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICBwYWRkaW5nOiA0NHB4IDUycHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG5tYWluI2NvbnRlbnRcXG5zZWN0aW9uI2hvbWUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICB3aWR0aDogYXV0bztcXG4gIG1pbi13aWR0aDogMTAyMHB4O1xcbiAgY29sdW1uLWdhcDogNTJweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbm1haW4jY29udGVudFxcbnNlY3Rpb24jaG9tZVxcbmltZy5oZXJvLWltYWdlIHtcXG4gIHdpZHRoOiBtYXgoNDgwcHgsIDY2JSk7XFxuICBib3JkZXI6IDRweCBzb2xpZCAjQkU3NjU2O1xcbiAgYm9yZGVyLXJhZGl1czogODBweCAxNHB4O1xcbn1cXG5cXG5zZWN0aW9uI2hvbWVcXG5oMiB7XFxuICBjb2xvcjogI0VGQzNBNDtcXG4gIGZvbnQtZmFtaWx5OiAnUGFzc2lvbnMgQ29uZmxpY3QnLCAnVGltZXMgTmV3IFJvbWFuJztcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogNS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuc2VjdGlvbiNob21lXFxucCB7XFxuICBjb2xvcjogI0VGQzNBNDtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIHdpZHRoOiA3MDBweFxcbn1cXG5cXG5tYWluI2NvbnRlbnRcXG5zZWN0aW9uI21lbnUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9tZW51LWJvYXJkLmpwZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXgtd2lkdGg6IDEwMjBweDtcXG4gIGhlaWdodDogMTQ3MHB4O1xcbiAgb3V0bGluZTogM3B4IHNvbGlkICNCRTc2NTY7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm94LXNoYWRvdzogNnB4IDZweCAxOHB4ICMwMzAyMDE7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAyNDBweCAyMTBweCAxOTBweCAyMjBweDtcXG59XFxuXFxubWFpbiNjb250ZW50XFxuc2VjdGlvbiNtZW51XFxuaDEge1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgZm9udC1mYW1pbHk6ICdQYXNzaW9ucyBDb25mbGljdCcsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuICBsZXR0ZXItc3BhY2luZzogMTJweDtcXG4gIG1hcmdpbi1ib3R0b206IDM2cHg7XFxufVxcblxcbnNlY3Rpb24jbWVudVxcbmRpdiB7XFxuICBtYXJnaW4tYm90dG9tOiAzNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMztcXG59XFxuXFxuc2VjdGlvbiNtZW51XFxuZGl2IGgzIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcXG59XFxuXFxuc2VjdGlvbiNtZW51XFxuZGl2IHByZSB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuXFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciBhIFxcbmltZ3tcXG4gIHdpZHRoOiAzOHB4O1xcbiAgaGVpZ2h0OiAzOHB4O1xcbiAgLyogYm9yZGVyLXJhZGl1czogNTAlOyAqL1xcbn1cXG5cXG5mb290ZXIgYSBcXG5pbWc6aG92ZXIge1xcbiAgLyogYm94LXNoYWRvdzogMC41cHggMC41cHggMTJweCB3aGl0ZTsgKi9cXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NTAwJSkgaHVlLXJvdGF0ZSgyNTJkZWcpIGJyaWdodG5lc3MoMTA0JSkgY29udHJhc3QoMTAwJSkgZHJvcC1zaGFkb3coMCAwIDAuNzVyZW0gd2hpdGUpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gaW1wb3J0IGJvYXJkIGZyb20gJy4uL2ltYWdlcy9tZW51LWJvYXJkLmpwZydcblxuY29uc3QgbWVudUNvbnRlbnQgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBtZW51U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBtZW51U2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnVcIik7XG5cbiAgY29uc3QgQnJlYWRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBCcmVhZFRleHQuaW5uZXJIVE1MID0gXCJNRU5VXCI7XG4gIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKEJyZWFkVGV4dCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMzsgaSArPSAxKSB7XG4gICAgY29uc3QgbWVudUJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICAgIHN3aXRjaCAoaSkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlNhbmR3aGljaCAvIENha2VcIjtcbiAgICAgICAgZm9yIChsZXQgcG9pbnQgPSAwOyBwb2ludCA8PSA2OyBwb2ludCArPSAxKSB7XG4gICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICBzd2l0Y2ggKHBvaW50KSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYDxwcmU+R2FybGljIEJyZWFkICAgICAgICAgICAgICAgIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAgICAgICAkMjQuOTk8L3ByZT5gO1xuICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBgPHByZT5Dcm9pc3NhbnRzICAgICAgICAgICAgICAgICAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCAgICAgICQyNC45OTwvcHJlPmA7XG4gICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IGA8cHJlPkNyYXdmaXNoICYgQnJlYWQgICAgICAgICAgICDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwICAgICAgJDI0Ljk5PC9wcmU+YDtcbiAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYDxwcmU+Q2xhc3NpYyBWYW5pbGxhIENha2UgICAgICAgIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAgICAgICAkMjQuOTk8L3ByZT5gO1xuICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBgPHByZT5DaG9jb2xhdGUgTGF2YSBDYWtlICAgICAgICAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCAgICAgICQyNC45OTwvcHJlPmA7XG4gICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IGA8cHJlPlN0cmF3YmVycnkgU2hvcnQgQ2FrZSAgICAgICDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwICAgICAgJDI0Ljk5PC9wcmU+YDtcbiAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IGA8cHJlPlJvYXN0IEJlZWYgU2FuZHdpY2ggICAgICAgICDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwICAgICAgJDI0Ljk5PC9wcmU+YDtcbiAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQ29mZmVlXCI7XG4gICAgICAgIGZvciAobGV0IHBvaW50ID0gMDsgcG9pbnQgPD0gNjsgcG9pbnQgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgc3dpdGNoIChwb2ludCkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IGA8cHJlPkFtZXJpY2FubyAgICAgICAgICAgICAgICAgICDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwICAgICAgJDI0Ljk5PC9wcmU+YDtcbiAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYDxwcmU+RXNwcmVzc28gICAgICAgICAgICAgICAgICAgIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAgICAgICAkMjQuOTk8L3ByZT5gO1xuICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBgPHByZT5Eb3BwaW8gICAgICAgICAgICAgICAgICAgICAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCAgICAgICQyNC45OTwvcHJlPmA7XG4gICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IGA8cHJlPkxhdHRlICAgICAgICAgICAgICAgICAgICAgICDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwICAgICAgJDI0Ljk5PC9wcmU+YDtcbiAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYDxwcmU+Q2FwcHVjY2lubyAgICAgICAgICAgICAgICAgIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAgICAgICAkMjQuOTk8L3ByZT5gO1xuICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBgPHByZT5Nb2NoYSAgICAgICAgICAgICAgICAgICAgICAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCAgICAgICQyNC45OTwvcHJlPmA7XG4gICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBgPHByZT5CbGFjayAgICAgICAgICAgICAgICAgICAgICAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCAgICAgICQyNC45OTwvcHJlPmA7XG4gICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIk90aGVyIEJldmVyYWdlc1wiO1xuICAgICAgICBmb3IgKGxldCBwb2ludCA9IDA7IHBvaW50IDw9IDQ7IHBvaW50ICs9IDEpIHtcbiAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgIHN3aXRjaCAocG9pbnQpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBgPHByZT5XYXRlcm1lbG9uIEp1aWNlICAgICAgICAgICAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCAgICAgICQyNC45OTwvcHJlPmA7XG4gICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IGA8cHJlPkxlbW9uYWRlIEpvbHQgICAgICAgICAgICAgICDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwICAgICAgJDI0Ljk5PC9wcmU+YDtcbiAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYDxwcmU+T3JhbmdlIEdyb3ZlICAgICAgICAgICAgICAgIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAgICAgICAkMjQuOTk8L3ByZT5gO1xuICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBgPHByZT5CdWR3ZWlzZXIgICAgICAgICAgICAgICAgICAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCAgICAgICQyNC45OTwvcHJlPmA7XG4gICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBgPHByZT5Cb3R0bGVkIFdhdGVyICAgICAgICAgICAgICAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCAgICAgICQyNC45OTwvcHJlPmA7XG4gICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJQYXN0YVwiO1xuICAgICAgICBmb3IgKGxldCBwb2ludCA9IDA7IHBvaW50IDw9IDM7IHBvaW50ICs9IDEpIHtcbiAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgIHN3aXRjaCAocG9pbnQpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBgPHByZT5GZXR0dWNjaW5lIEFsZnJlZG8gICAgICAgICAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCAgICAgICQyNC45OTwvcHJlPmA7XG4gICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IGA8cHJlPkNoaWNrZW4gVGV0cmF6emluaSAgICAgICAgICDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwICAgICAgJDI0Ljk5PC9wcmU+YDtcbiAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYDxwcmU+U3RlYWtob3VzZSBQYXN0YSAgICAgICAgICAgIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAgICAgICAkMjQuOTk8L3ByZT5gO1xuICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYDxwcmU+TWVhdGJhbGxzIGFuZCBTcGFnaGV0dGkgICAgIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAgICAgICAkMjQuOTk8L3ByZT5gO1xuICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBtZW51QmxvY2suYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBtZW51QmxvY2suYXBwZW5kQ2hpbGQobGlzdCk7XG4gICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQobWVudUJsb2NrKTtcbiAgfVxuXG4gIHJldHVybiB7IG1lbnVTZWN0aW9uIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBtZW51Q29udGVudDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL2Nzcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBHaXRIdWIgZnJvbSBcIi4vaW1hZ2VzL0dpdEh1Yi1NYXJrLUxpZ2h0LTY0cHgucG5nXCI7XG5pbXBvcnQgSGVyb0ltYWdlIGZyb20gXCIuL2ltYWdlcy9icmVhZC1jb2ZmZWUuanBnXCI7XG5pbXBvcnQgbWVudUNvbnRlbnQgZnJvbSBcIi4vc2NyaXB0cy9tZW51XCI7XG5cbmNvbnN0IGJhc2VET00gPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgLy8gTWFpbiBIZWFkZXIgLy9cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgLy8gY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIGNvbnN0IG5hdlVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBidG5MaXN0ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IDM7IGkgKz0gMSkge1xuICAgIGNvbnN0IG5hdkxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IG5hdkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBzd2l0Y2ggKGkpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgbmF2QnRuLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgICAgIG5hdkJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWVcIik7XG4gICAgICAgIG5hdkxpLmFwcGVuZENoaWxkKG5hdkJ0bik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBuYXZCdG4udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICAgICAgbmF2QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudVwiKTtcbiAgICAgICAgbmF2TGkuYXBwZW5kQ2hpbGQobmF2QnRuKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIG5hdkJ0bi50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcbiAgICAgICAgbmF2QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWJvdXRcIik7XG4gICAgICAgIG5hdkxpLmFwcGVuZENoaWxkKG5hdkJ0bik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbmF2QnRuLnRleHRDb250ZW50ID0gXCJDcmVkaXRzXCI7XG4gICAgICAgIG5hdkJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNyZWRpdFwiKTtcbiAgICAgICAgbmF2TGkuYXBwZW5kQ2hpbGQobmF2QnRuKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGJ0bkxpc3QucHVzaChuYXZMaSk7XG4gICAgbmF2VWwuYXBwZW5kQ2hpbGQobmF2TGkpO1xuICB9XG5cbiAgLy8gaDEudGV4dENvbnRlbnQgPSAnQnJlYWQgJiBCdXR0ZXIgQ2FmZSdcbiAgbmF2LmFwcGVuZENoaWxkKG5hdlVsKTtcbiAgLy8gaGVhZGVyLmFwcGVuZENoaWxkKGgxKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAvLyBNYWluIENvbnRlbnQgLy9cblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIG1haW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250ZW50XCIpO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgLy8gTWFpbiBGb290ZXIgLy9cbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgY29uc3QgZ2l0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBnaXRMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL2dpdGh1Yi5jb20vUmhhenpYSVhcIik7XG4gIGNvbnN0IGdpdGh1YiA9IG5ldyBJbWFnZSgpO1xuICBnaXRodWIuc3JjID0gR2l0SHViO1xuXG4gIGdpdExpbmsuYXBwZW5kQ2hpbGQoZ2l0aHViKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdExpbmspO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICByZXR1cm4geyBtYWluLCBidG5MaXN0IH07XG59KSgpO1xuXG5jb25zdCBob21lQ29udGVudCA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGhvbWVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGhvbWVTZWN0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZVwiKTtcblxuICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaGVyb1RleHQuaW5uZXJIVE1MID0gXCJCcmVhZCAmIEJ1dHRlciBDYWZlXCI7XG5cbiAgY29uc3QgaGVyb0ltYWdlID0gbmV3IEltYWdlKCk7XG4gIGhlcm9JbWFnZS5zcmMgPSBIZXJvSW1hZ2U7XG4gIGhlcm9JbWFnZS5jbGFzc0xpc3QuYWRkKFwiaGVyby1pbWFnZVwiKTtcbiAgaGVyb0ltYWdlLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlRvYXN0IEJyZWFkIGFuZCBDb2ZmZWVcIik7XG5cbiAgY29uc3Qgc3ViSGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBzdWJIZXJvLmlubmVySFRNTCA9IGBFc3RhYmxpc2hlZCBpbiAxOTIwJ3MsIDxlbT5CcmVhZCAmIEJ1dHRlciBDYWZlPC9lbT4gaGFzIGJlZW4gc2VydmluZyBcbiAgICBwZW9wbGUgZGVsaWNpb3VzIGZvb2QgbWFkZSBmcm9tIDxlbT5oaWdoIHF1YWxpdHk8L2VtPiBpbmdyZWRpZW50cy4gU3VwcG9ydGluZyBkb21lc3RpY1xuICAgIGZhcm1lcnMgdGhyb3VnaCBzb3VyY2luZyBsb2NhbCBwcm9kdWNlIGRpcmVjdGx5IGZyb20gdGhlbS5gO1xuXG4gIGhvbWVTZWN0aW9uLmFwcGVuZENoaWxkKGhlcm9UZXh0KTtcbiAgaG9tZVNlY3Rpb24uYXBwZW5kQ2hpbGQoaGVyb0ltYWdlKTtcbiAgaG9tZVNlY3Rpb24uYXBwZW5kQ2hpbGQoc3ViSGVybyk7XG4gIGJhc2VET00ubWFpbi5hcHBlbmRDaGlsZChob21lU2VjdGlvbik7XG4gIHJldHVybiB7IGhvbWVTZWN0aW9uIH07XG59KSgpO1xuXG5jb25zdCBiaW5kRXZlbnRzID0gKGZ1bmN0aW9uICgpIHtcbiAgYmFzZURPTS5idG5MaXN0WzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgZWxlbWVudCA9IGJhc2VET00ubWFpbi5xdWVyeVNlbGVjdG9yKFwic2VjdGlvblwiKTtcbiAgICBpZiAoQm9vbGVhbihlbGVtZW50KSkge1xuICAgICAgaWYgKGVsZW1lbnQgIT09IGhvbWVDb250ZW50LmhvbWVTZWN0aW9uKSB7XG4gICAgICAgIGJhc2VET00ubWFpbi5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgYmFzZURPTS5tYWluLmFwcGVuZENoaWxkKGhvbWVDb250ZW50LmhvbWVTZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBiYXNlRE9NLmJ0bkxpc3RbMV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBlbGVtZW50ID0gYmFzZURPTS5tYWluLnF1ZXJ5U2VsZWN0b3IoXCJzZWN0aW9uXCIpO1xuICAgIGlmIChCb29sZWFuKGVsZW1lbnQpKSB7XG4gICAgICBpZiAoZWxlbWVudCAhPT0gbWVudUNvbnRlbnQubWVudVNlY3Rpb24pIHtcbiAgICAgICAgYmFzZURPTS5tYWluLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICBiYXNlRE9NLm1haW4uYXBwZW5kQ2hpbGQobWVudUNvbnRlbnQubWVudVNlY3Rpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9