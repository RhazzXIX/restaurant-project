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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bread-mug-laptop.jpg */ "./src/images/bread-mug-laptop.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Passions+Conflict&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* outline: 3px solid white; */\n}\n:root {\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 16px;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 80px 1fr 50px;\n  height: 100vh;\n  width: 100vw;\n  min-width: 1040px;\n  background-color: #0E0504;\n  position: relative;\n}\n\nheader{\n  display: flex;\n}\nnav {\n  display: flex;\n  width: 100%;\n}\n\n\nheader\nnav ul {\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  gap: 54px;\n}\n\nheader\nnav ul \nli button {\n  appearance: none;\n  border-top: 2px solid white;\n  border-left: 2px solid white;\n  border-right: 2px solid white;\n  border-bottom: none;\n  background-color: #0E0504;\n  color: white;\n  padding: 6px 12px;\n  width: 100%;\n  font-size: 1.1rem;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  font-weight: 600;\n}\n\nheader\nnav ul li \nbutton:hover {\n  text-shadow: 3px 3px 16px white;\n}\n\nheader\nnav ul li \nbutton:active {\n  background-color: aliceblue;\n  color: #0E0504;\n  border-top: 2px solid grey;\n  border-left: 2px solid grey;\n  border-right: 2px solid grey;\n}\n\nmain#content {\n  min-height: 744px;\n  min-width: 1160px;\n  background-color: #4B1F0E;\n  border-top: 2px solid white;\n  border-bottom: 2px solid white;\n  padding: 44px 52px;\n  overflow-y: auto;\n}\n\nmain#content\nsection#home {\n  display: grid;\n  height: 100%;\n  grid-template-columns: repeat(2,1fr);\n  grid-template-rows: repeat(2, 1fr);\n  width: auto;\n  min-width: 1020px;\n  column-gap: 52px;\n  align-items: center;\n  justify-items: center;\n}\n\nmain#content\nsection#home\nimg.hero-image {\n  width: max(480px, 66%);\n  border: 4px solid #BE7656;\n  border-radius: 80px 14px;\n}\n\nsection#home\nh2 {\n  color: #EFC3A4;\n  font-family: 'Passions Conflict', 'Times New Roman';\n  font-style: italic;\n  font-size: 5.5rem;\n  font-weight: 400;\n}\n\nsection#home\np {\n  color: #EFC3A4;\n  font-size: 1.4rem;\n  grid-column: 1 / -1;\n  width: 700px\n}\n\nmain#content\nsection#menu {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  margin: auto;\n  width: 1020px;\n  height: 1454px;\n  outline: 3px solid #BE7656;\n  border-radius: 20px;\n  box-shadow: 6px 6px 18px #030201;\n  color: white;\n  padding: 240px 210px 190px 220px;\n}\n\nmain#content\nsection#menu\nh1 {\n  font-size: 5rem;\n  font-family: 'Passions Conflict', 'Times New Roman', Times, serif;\n  letter-spacing: 12px;\n  margin-bottom: 36px;\n}\n\nsection#menu\ndiv {\n  margin-bottom: 32px;\n  line-height: 1.3;\n}\n\nsection#menu\ndiv h3 {\n  font-style: italic;\n  font-size: 1.8rem;\n  margin-bottom: 14px;\n}\n\nsection#menu\ndiv pre {\n  font-size: 1.1rem;\n}\n\nsection#contact {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-position: center bottom;\n  background-size: 90%;\n  background-repeat: no-repeat;\n  height: 680px;\n  width: 1040px;\n  margin: auto;\n  margin-top: -40px;\n  padding: 0px 56px;\n}\n\nsection#contact >\nh1 {\n  color: white ;\n  text-align: center;\n  font-size: 3rem;\n  margin-bottom: 8px;\n}\n\nsection#contact \ndiv.card {\n  background-color: rgba(255, 255, 255, 0.5);\n  text-align: center;\n  width: 580px;\n  border-radius: 8px;\n  padding: 6px;\n}\n\nsection#contact \ndiv.card h2,\ndiv.card h4,\ndiv.card p:nth-of-type(2) {\n  margin-bottom: 4px;\n}\n\nsection#contact \ndiv address#contacts {\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  align-items: center;\n  justify-items: center;\n}\n\naddress#contacts\ndiv.holder {\n  gap: 5px;\n  grid-column: 1 / 2;\n  display: flex;\n  flex-direction: column;\n}\n\ndiv.holder\ndiv.line {\n  display: flex;\n  gap: 6px;\n}\n\ndiv.holder\ndiv.line\np.left {\n  width: 150px;\n  text-align: center;\n}\n\naddress#contacts\ndiv.holder h4 {\n  grid-row: 1 / 2;\n  grid-column: 1 / -1;\n}\n\naddress#contacts\nimg.map {\n  grid-row: 1 / 3;\n  grid-column: 2 / 3;\n  width: 300px;\n  outline: 1px solid #0E0504;\n}\n\naddress#contacts\ndiv img.svg {\n  width: 20px;\n  flex: 1 1 auto;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n}\n\nfooter a {\n  display: flex;\n  align-items: center;\n}\n\nfooter a \nimg{\n  width: 26px;\n  height: 26px;\n  /* border-radius: 50%; */\n}\n\nfooter a \nimg:hover {\n  /* box-shadow: 0.5px 0.5px 12px white; */\n  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(252deg) brightness(104%) contrast(100%) drop-shadow(0 0 0.75rem white);\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Passions+Conflict&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* outline: 3px solid white; */\n}\n:root {\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 16px;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 80px 1fr 50px;\n  height: 100vh;\n  width: 100vw;\n  min-width: 1040px;\n  background-color: #0E0504;\n  position: relative;\n}\n\nheader{\n  display: flex;\n}\nnav {\n  display: flex;\n  width: 100%;\n}\n\n\nheader\nnav ul {\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  gap: 54px;\n}\n\nheader\nnav ul \nli button {\n  appearance: none;\n  border-top: 2px solid white;\n  border-left: 2px solid white;\n  border-right: 2px solid white;\n  border-bottom: none;\n  background-color: #0E0504;\n  color: white;\n  padding: 6px 12px;\n  width: 100%;\n  font-size: 1.1rem;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  font-weight: 600;\n}\n\nheader\nnav ul li \nbutton:hover {\n  text-shadow: 3px 3px 16px white;\n}\n\nheader\nnav ul li \nbutton:active {\n  background-color: aliceblue;\n  color: #0E0504;\n  border-top: 2px solid grey;\n  border-left: 2px solid grey;\n  border-right: 2px solid grey;\n}\n\nmain#content {\n  min-height: 744px;\n  min-width: 1160px;\n  background-color: #4B1F0E;\n  border-top: 2px solid white;\n  border-bottom: 2px solid white;\n  padding: 44px 52px;\n  overflow-y: auto;\n}\n\nmain#content\nsection#home {\n  display: grid;\n  height: 100%;\n  grid-template-columns: repeat(2,1fr);\n  grid-template-rows: repeat(2, 1fr);\n  width: auto;\n  min-width: 1020px;\n  column-gap: 52px;\n  align-items: center;\n  justify-items: center;\n}\n\nmain#content\nsection#home\nimg.hero-image {\n  width: max(480px, 66%);\n  border: 4px solid #BE7656;\n  border-radius: 80px 14px;\n}\n\nsection#home\nh2 {\n  color: #EFC3A4;\n  font-family: 'Passions Conflict', 'Times New Roman';\n  font-style: italic;\n  font-size: 5.5rem;\n  font-weight: 400;\n}\n\nsection#home\np {\n  color: #EFC3A4;\n  font-size: 1.4rem;\n  grid-column: 1 / -1;\n  width: 700px\n}\n\nmain#content\nsection#menu {\n  background-image: url(../images/menu-board.jpg);\n  background-size: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  margin: auto;\n  width: 1020px;\n  height: 1454px;\n  outline: 3px solid #BE7656;\n  border-radius: 20px;\n  box-shadow: 6px 6px 18px #030201;\n  color: white;\n  padding: 240px 210px 190px 220px;\n}\n\nmain#content\nsection#menu\nh1 {\n  font-size: 5rem;\n  font-family: 'Passions Conflict', 'Times New Roman', Times, serif;\n  letter-spacing: 12px;\n  margin-bottom: 36px;\n}\n\nsection#menu\ndiv {\n  margin-bottom: 32px;\n  line-height: 1.3;\n}\n\nsection#menu\ndiv h3 {\n  font-style: italic;\n  font-size: 1.8rem;\n  margin-bottom: 14px;\n}\n\nsection#menu\ndiv pre {\n  font-size: 1.1rem;\n}\n\nsection#contact {\n  background-image: url(../images/bread-mug-laptop.jpg);\n  background-position: center bottom;\n  background-size: 90%;\n  background-repeat: no-repeat;\n  height: 680px;\n  width: 1040px;\n  margin: auto;\n  margin-top: -40px;\n  padding: 0px 56px;\n}\n\nsection#contact >\nh1 {\n  color: white ;\n  text-align: center;\n  font-size: 3rem;\n  margin-bottom: 8px;\n}\n\nsection#contact \ndiv.card {\n  background-color: rgba(255, 255, 255, 0.5);\n  text-align: center;\n  width: 580px;\n  border-radius: 8px;\n  padding: 6px;\n}\n\nsection#contact \ndiv.card h2,\ndiv.card h4,\ndiv.card p:nth-of-type(2) {\n  margin-bottom: 4px;\n}\n\nsection#contact \ndiv address#contacts {\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  align-items: center;\n  justify-items: center;\n}\n\naddress#contacts\ndiv.holder {\n  gap: 5px;\n  grid-column: 1 / 2;\n  display: flex;\n  flex-direction: column;\n}\n\ndiv.holder\ndiv.line {\n  display: flex;\n  gap: 6px;\n}\n\ndiv.holder\ndiv.line\np.left {\n  width: 150px;\n  text-align: center;\n}\n\naddress#contacts\ndiv.holder h4 {\n  grid-row: 1 / 2;\n  grid-column: 1 / -1;\n}\n\naddress#contacts\nimg.map {\n  grid-row: 1 / 3;\n  grid-column: 2 / 3;\n  width: 300px;\n  outline: 1px solid #0E0504;\n}\n\naddress#contacts\ndiv img.svg {\n  width: 20px;\n  flex: 1 1 auto;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n}\n\nfooter a {\n  display: flex;\n  align-items: center;\n}\n\nfooter a \nimg{\n  width: 26px;\n  height: 26px;\n  /* border-radius: 50%; */\n}\n\nfooter a \nimg:hover {\n  /* box-shadow: 0.5px 0.5px 12px white; */\n  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(252deg) brightness(104%) contrast(100%) drop-shadow(0 0 0.75rem white);\n}"],"sourceRoot":""}]);
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

/***/ "./src/scripts/contact.js":
/*!********************************!*\
  !*** ./src/scripts/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_googleMap_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/googleMap.png */ "./src/images/googleMap.png");
/* harmony import */ var _images_store_marker_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/store-marker.svg */ "./src/images/store-marker.svg");
/* harmony import */ var _images_phone_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/phone.svg */ "./src/images/phone.svg");




const contactContent = (function () {
  const contactSection = document.createElement("section");
  contactSection.setAttribute("id", "contact");

  const phoneImage = new Image();
  phoneImage.src = _images_phone_svg__WEBPACK_IMPORTED_MODULE_2__;
  phoneImage.setAttribute("alt", "Phone Icon");
  phoneImage.classList.add("svg");

  const storeImage = new Image();
  storeImage.src = _images_store_marker_svg__WEBPACK_IMPORTED_MODULE_1__;
  storeImage.setAttribute("alt", "Store Location Icon");
  storeImage.classList.add("svg");

  const map = new Image();
  map.src = _images_googleMap_png__WEBPACK_IMPORTED_MODULE_0__;
  map.classList.add("map");

  const header = document.createElement("h1");
  header.innerHTML = "Contacts";

  const infoCard = document.createElement("div");
  infoCard.classList.add("card");

  const infoHeader = document.createElement("h2");
  infoHeader.innerHTML = "<em>Bread & Butter Cafe</em>";

  const open = document.createElement("h4");
  open.textContent = "Open Hours";

  const day = document.createElement("p");
  day.textContent = "Monday ~ Sunday";

  const time = document.createElement("p");
  time.textContent = "0800H ~ 2130H";

  const contacts = document.createElement("address");
  contacts.setAttribute("id", "contacts");

  const telHolder = document.createElement("div");
  telHolder.classList.add("holder");

  const telHeader = document.createElement("h4");
  telHeader.textContent = "Tel. No.:";

  const telLine = document.createElement('div');
  telLine.classList.add('line');

  const telNo = document.createElement("p");
  telNo.textContent = "(417) 555-5678";
  
  telLine.appendChild(phoneImage);
  telLine.appendChild(telNo);
  
  telHolder.appendChild(telHeader);
  telHolder.appendChild(telLine);

  const addressHolder = document.createElement("div");
  addressHolder.classList.add("holder");

  const addHeader = document.createElement("h4");
  addHeader.textContent = "Address:";

  const addressLine = document.createElement('div');
  addressLine.classList.add('line');

  const address = document.createElement("p");
  address.textContent = "155 East Wood Rd, Skill Castle, Competence Kingdom.";
  address.classList.add('left');

  addressLine.appendChild(storeImage);
  addressLine.appendChild(address);

  addressHolder.appendChild(addHeader);
  addressHolder.appendChild(addressLine);

  contacts.appendChild(telHolder);
  contacts.appendChild(addressHolder);
  contacts.appendChild(map);

  infoCard.appendChild(infoHeader);
  infoCard.appendChild(open);
  infoCard.appendChild(day);
  infoCard.appendChild(time);
  infoCard.appendChild(contacts);

  map.setAttribute("alt", "Location Image");

  contactSection.appendChild(header);
  contactSection.appendChild(infoCard);

  return { contactSection };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactContent);


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

/***/ "./src/images/bread-mug-laptop.jpg":
/*!*****************************************!*\
  !*** ./src/images/bread-mug-laptop.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "64972796d53e5f3b20c3.jpg";

/***/ }),

/***/ "./src/images/googleMap.png":
/*!**********************************!*\
  !*** ./src/images/googleMap.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "990ab9ab09f260ece0cf.png";

/***/ }),

/***/ "./src/images/menu-board.jpg":
/*!***********************************!*\
  !*** ./src/images/menu-board.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7a99b85abc28e14e3ffc.jpg";

/***/ }),

/***/ "./src/images/phone.svg":
/*!******************************!*\
  !*** ./src/images/phone.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b454d6aeda1578fa2ba.svg";

/***/ }),

/***/ "./src/images/store-marker.svg":
/*!*************************************!*\
  !*** ./src/images/store-marker.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b51c4b022b30cf630ee.svg";

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
/* harmony import */ var _scripts_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/contact */ "./src/scripts/contact.js");






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
        navBtn.textContent = "Contact";
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
  subHero.innerHTML = `Established in 1920's, <em>Bread & Butter Cafe</em> has been the home 
    for people, who is looking for <em>delightful</em> food made from <strong>high quality</strong> ingredients. Supports domestic
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
  baseDOM.btnList[2].addEventListener("click", (e) => {
    e.stopPropagation();
    const element = baseDOM.main.querySelector("section");
    if (Boolean(element)) {
      if (element !== _scripts_contact__WEBPACK_IMPORTED_MODULE_4__["default"].contactSection) {
        baseDOM.main.removeChild(element);
        baseDOM.main.appendChild(_scripts_contact__WEBPACK_IMPORTED_MODULE_4__["default"].contactSection);
      }
    }
  });

})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxXQUFXLE1BQU0sT0FBTyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLE9BQU8sT0FBTyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLE9BQU8sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLFFBQVEsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sT0FBTyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxpSEFBaUgsT0FBTyxjQUFjLGVBQWUsMkJB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixZQUFZO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFlBQVk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixZQUFZO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRCxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0kzQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeUI7QUFDZ0M7QUFDUDtBQUNUO0FBQ007O0FBRS9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQU07O0FBRXJCO0FBQ0E7O0FBRUE7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IscURBQVM7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpRUFBdUI7QUFDN0M7QUFDQSxpQ0FBaUMsaUVBQXVCO0FBQ3hEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdUVBQTZCO0FBQ25EO0FBQ0EsaUNBQWlDLHVFQUE2QjtBQUM5RDtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvc2NyaXB0cy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9zY3JpcHRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9tZW51LWJvYXJkLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9icmVhZC1tdWctbGFwdG9wLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGFzc2lvbnMrQ29uZmxpY3QmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogb3V0bGluZTogM3B4IHNvbGlkIHdoaXRlOyAqL1xcbn1cXG46cm9vdCB7XFxuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogODBweCAxZnIgNTBweDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtaW4td2lkdGg6IDEwNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwRTA1MDQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmhlYWRlcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcblxcbmhlYWRlclxcbm5hdiB1bCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgZ2FwOiA1NHB4O1xcbn1cXG5cXG5oZWFkZXJcXG5uYXYgdWwgXFxubGkgYnV0dG9uIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgd2hpdGU7XFxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgd2hpdGU7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBFMDUwNDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5oZWFkZXJcXG5uYXYgdWwgbGkgXFxuYnV0dG9uOmhvdmVyIHtcXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDE2cHggd2hpdGU7XFxufVxcblxcbmhlYWRlclxcbm5hdiB1bCBsaSBcXG5idXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGNvbG9yOiAjMEUwNTA0O1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBncmV5O1xcbn1cXG5cXG5tYWluI2NvbnRlbnQge1xcbiAgbWluLWhlaWdodDogNzQ0cHg7XFxuICBtaW4td2lkdGg6IDExNjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0QjFGMEU7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgd2hpdGU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICBwYWRkaW5nOiA0NHB4IDUycHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG5tYWluI2NvbnRlbnRcXG5zZWN0aW9uI2hvbWUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICB3aWR0aDogYXV0bztcXG4gIG1pbi13aWR0aDogMTAyMHB4O1xcbiAgY29sdW1uLWdhcDogNTJweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbm1haW4jY29udGVudFxcbnNlY3Rpb24jaG9tZVxcbmltZy5oZXJvLWltYWdlIHtcXG4gIHdpZHRoOiBtYXgoNDgwcHgsIDY2JSk7XFxuICBib3JkZXI6IDRweCBzb2xpZCAjQkU3NjU2O1xcbiAgYm9yZGVyLXJhZGl1czogODBweCAxNHB4O1xcbn1cXG5cXG5zZWN0aW9uI2hvbWVcXG5oMiB7XFxuICBjb2xvcjogI0VGQzNBNDtcXG4gIGZvbnQtZmFtaWx5OiAnUGFzc2lvbnMgQ29uZmxpY3QnLCAnVGltZXMgTmV3IFJvbWFuJztcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogNS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuc2VjdGlvbiNob21lXFxucCB7XFxuICBjb2xvcjogI0VGQzNBNDtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIHdpZHRoOiA3MDBweFxcbn1cXG5cXG5tYWluI2NvbnRlbnRcXG5zZWN0aW9uI21lbnUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogMTAyMHB4O1xcbiAgaGVpZ2h0OiAxNDU0cHg7XFxuICBvdXRsaW5lOiAzcHggc29saWQgI0JFNzY1NjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3gtc2hhZG93OiA2cHggNnB4IDE4cHggIzAzMDIwMTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDI0MHB4IDIxMHB4IDE5MHB4IDIyMHB4O1xcbn1cXG5cXG5tYWluI2NvbnRlbnRcXG5zZWN0aW9uI21lbnVcXG5oMSB7XFxuICBmb250LXNpemU6IDVyZW07XFxuICBmb250LWZhbWlseTogJ1Bhc3Npb25zIENvbmZsaWN0JywgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG4gIGxldHRlci1zcGFjaW5nOiAxMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMzZweDtcXG59XFxuXFxuc2VjdGlvbiNtZW51XFxuZGl2IHtcXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XFxuICBsaW5lLWhlaWdodDogMS4zO1xcbn1cXG5cXG5zZWN0aW9uI21lbnVcXG5kaXYgaDMge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xcbn1cXG5cXG5zZWN0aW9uI21lbnVcXG5kaXYgcHJlIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5zZWN0aW9uI2NvbnRhY3Qge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XFxuICBiYWNrZ3JvdW5kLXNpemU6IDkwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBoZWlnaHQ6IDY4MHB4O1xcbiAgd2lkdGg6IDEwNDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi10b3A6IC00MHB4O1xcbiAgcGFkZGluZzogMHB4IDU2cHg7XFxufVxcblxcbnNlY3Rpb24jY29udGFjdCA+XFxuaDEge1xcbiAgY29sb3I6IHdoaXRlIDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuc2VjdGlvbiNjb250YWN0IFxcbmRpdi5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA1ODBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDZweDtcXG59XFxuXFxuc2VjdGlvbiNjb250YWN0IFxcbmRpdi5jYXJkIGgyLFxcbmRpdi5jYXJkIGg0LFxcbmRpdi5jYXJkIHA6bnRoLW9mLXR5cGUoMikge1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbn1cXG5cXG5zZWN0aW9uI2NvbnRhY3QgXFxuZGl2IGFkZHJlc3MjY29udGFjdHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYWRkcmVzcyNjb250YWN0c1xcbmRpdi5ob2xkZXIge1xcbiAgZ2FwOiA1cHg7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZGl2LmhvbGRlclxcbmRpdi5saW5lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDZweDtcXG59XFxuXFxuZGl2LmhvbGRlclxcbmRpdi5saW5lXFxucC5sZWZ0IHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuYWRkcmVzcyNjb250YWN0c1xcbmRpdi5ob2xkZXIgaDQge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG59XFxuXFxuYWRkcmVzcyNjb250YWN0c1xcbmltZy5tYXAge1xcbiAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgb3V0bGluZTogMXB4IHNvbGlkICMwRTA1MDQ7XFxufVxcblxcbmFkZHJlc3MjY29udGFjdHNcXG5kaXYgaW1nLnN2ZyB7XFxuICB3aWR0aDogMjBweDtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIGEgXFxuaW1ne1xcbiAgd2lkdGg6IDI2cHg7XFxuICBoZWlnaHQ6IDI2cHg7XFxuICAvKiBib3JkZXItcmFkaXVzOiA1MCU7ICovXFxufVxcblxcbmZvb3RlciBhIFxcbmltZzpob3ZlciB7XFxuICAvKiBib3gtc2hhZG93OiAwLjVweCAwLjVweCAxMnB4IHdoaXRlOyAqL1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc1MDAlKSBodWUtcm90YXRlKDI1MmRlZykgYnJpZ2h0bmVzcygxMDQlKSBjb250cmFzdCgxMDAlKSBkcm9wLXNoYWRvdygwIDAgMC43NXJlbSB3aGl0ZSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSw0Q0FBNEM7RUFDNUMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLFlB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dUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFLHdDQUF3QztFQUN4QyxnSUFBZ0k7QUFDbElcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGFzc2lvbnMrQ29uZmxpY3QmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIG91dGxpbmU6IDNweCBzb2xpZCB3aGl0ZTsgKi9cXG59XFxuOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggMWZyIDUwcHg7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWluLXdpZHRoOiAxMDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEUwNTA0O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5oZWFkZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5cXG5oZWFkZXJcXG5uYXYgdWwge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGdhcDogNTRweDtcXG59XFxuXFxuaGVhZGVyXFxubmF2IHVsIFxcbmxpIGJ1dHRvbiB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwRTA1MDQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiA2cHggMTJweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuaGVhZGVyXFxubmF2IHVsIGxpIFxcbmJ1dHRvbjpob3ZlciB7XFxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAxNnB4IHdoaXRlO1xcbn1cXG5cXG5oZWFkZXJcXG5uYXYgdWwgbGkgXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICBjb2xvcjogIzBFMDUwNDtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBncmV5O1xcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBncmV5O1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgZ3JleTtcXG59XFxuXFxubWFpbiNjb250ZW50IHtcXG4gIG1pbi1oZWlnaHQ6IDc0NHB4O1xcbiAgbWluLXdpZHRoOiAxMTYwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEIxRjBFO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbiAgcGFkZGluZzogNDRweCA1MnB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxubWFpbiNjb250ZW50XFxuc2VjdGlvbiNob21lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgd2lkdGg6IGF1dG87XFxuICBtaW4td2lkdGg6IDEwMjBweDtcXG4gIGNvbHVtbi1nYXA6IDUycHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5tYWluI2NvbnRlbnRcXG5zZWN0aW9uI2hvbWVcXG5pbWcuaGVyby1pbWFnZSB7XFxuICB3aWR0aDogbWF4KDQ4MHB4LCA2NiUpO1xcbiAgYm9yZGVyOiA0cHggc29saWQgI0JFNzY1NjtcXG4gIGJvcmRlci1yYWRpdXM6IDgwcHggMTRweDtcXG59XFxuXFxuc2VjdGlvbiNob21lXFxuaDIge1xcbiAgY29sb3I6ICNFRkMzQTQ7XFxuICBmb250LWZhbWlseTogJ1Bhc3Npb25zIENvbmZsaWN0JywgJ1RpbWVzIE5ldyBSb21hbic7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDUuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbnNlY3Rpb24jaG9tZVxcbnAge1xcbiAgY29sb3I6ICNFRkMzQTQ7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICB3aWR0aDogNzAwcHhcXG59XFxuXFxubWFpbiNjb250ZW50XFxuc2VjdGlvbiNtZW51IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvbWVudS1ib2FyZC5qcGcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiAxMDIwcHg7XFxuICBoZWlnaHQ6IDE0NTRweDtcXG4gIG91dGxpbmU6IDNweCBzb2xpZCAjQkU3NjU2O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJveC1zaGFkb3c6IDZweCA2cHggMThweCAjMDMwMjAxO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMjQwcHggMjEwcHggMTkwcHggMjIwcHg7XFxufVxcblxcbm1haW4jY29udGVudFxcbnNlY3Rpb24jbWVudVxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnUGFzc2lvbnMgQ29uZmxpY3QnLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEycHg7XFxuICBtYXJnaW4tYm90dG9tOiAzNnB4O1xcbn1cXG5cXG5zZWN0aW9uI21lbnVcXG5kaXYge1xcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XFxufVxcblxcbnNlY3Rpb24jbWVudVxcbmRpdiBoMyB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XFxufVxcblxcbnNlY3Rpb24jbWVudVxcbmRpdiBwcmUge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbnNlY3Rpb24jY29udGFjdCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL2JyZWFkLW11Zy1sYXB0b3AuanBnKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XFxuICBiYWNrZ3JvdW5kLXNpemU6IDkwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBoZWlnaHQ6IDY4MHB4O1xcbiAgd2lkdGg6IDEwNDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi10b3A6IC00MHB4O1xcbiAgcGFkZGluZzogMHB4IDU2cHg7XFxufVxcblxcbnNlY3Rpb24jY29udGFjdCA+XFxuaDEge1xcbiAgY29sb3I6IHdoaXRlIDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuc2VjdGlvbiNjb250YWN0IFxcbmRpdi5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA1ODBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDZweDtcXG59XFxuXFxuc2VjdGlvbiNjb250YWN0IFxcbmRpdi5jYXJkIGgyLFxcbmRpdi5jYXJkIGg0LFxcbmRpdi5jYXJkIHA6bnRoLW9mLXR5cGUoMikge1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbn1cXG5cXG5zZWN0aW9uI2NvbnRhY3QgXFxuZGl2IGFkZHJlc3MjY29udGFjdHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYWRkcmVzcyNjb250YWN0c1xcbmRpdi5ob2xkZXIge1xcbiAgZ2FwOiA1cHg7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZGl2LmhvbGRlclxcbmRpdi5saW5lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDZweDtcXG59XFxuXFxuZGl2LmhvbGRlclxcbmRpdi5saW5lXFxucC5sZWZ0IHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuYWRkcmVzcyNjb250YWN0c1xcbmRpdi5ob2xkZXIgaDQge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG59XFxuXFxuYWRkcmVzcyNjb250YWN0c1xcbmltZy5tYXAge1xcbiAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgb3V0bGluZTogMXB4IHNvbGlkICMwRTA1MDQ7XFxufVxcblxcbmFkZHJlc3MjY29udGFjdHNcXG5kaXYgaW1nLnN2ZyB7XFxuICB3aWR0aDogMjBweDtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIGEgXFxuaW1ne1xcbiAgd2lkdGg6IDI2cHg7XFxuICBoZWlnaHQ6IDI2cHg7XFxuICAvKiBib3JkZXItcmFkaXVzOiA1MCU7ICovXFxufVxcblxcbmZvb3RlciBhIFxcbmltZzpob3ZlciB7XFxuICAvKiBib3gtc2hhZG93OiAwLjVweCAwLjVweCAxMnB4IHdoaXRlOyAqL1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc1MDAlKSBodWUtcm90YXRlKDI1MmRlZykgYnJpZ2h0bmVzcygxMDQlKSBjb250cmFzdCgxMDAlKSBkcm9wLXNoYWRvdygwIDAgMC43NXJlbSB3aGl0ZSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgTWFwIGZyb20gXCIuLi9pbWFnZXMvZ29vZ2xlTWFwLnBuZ1wiO1xuaW1wb3J0IHN0b3JlTG9jIGZyb20gXCIuLi9pbWFnZXMvc3RvcmUtbWFya2VyLnN2Z1wiO1xuaW1wb3J0IHBob25lSW0gZnJvbSBcIi4uL2ltYWdlcy9waG9uZS5zdmdcIjtcblxuY29uc3QgY29udGFjdENvbnRlbnQgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250YWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBjb250YWN0U2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3RcIik7XG5cbiAgY29uc3QgcGhvbmVJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBwaG9uZUltYWdlLnNyYyA9IHBob25lSW07XG4gIHBob25lSW1hZ2Uuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUGhvbmUgSWNvblwiKTtcbiAgcGhvbmVJbWFnZS5jbGFzc0xpc3QuYWRkKFwic3ZnXCIpO1xuXG4gIGNvbnN0IHN0b3JlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgc3RvcmVJbWFnZS5zcmMgPSBzdG9yZUxvYztcbiAgc3RvcmVJbWFnZS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJTdG9yZSBMb2NhdGlvbiBJY29uXCIpO1xuICBzdG9yZUltYWdlLmNsYXNzTGlzdC5hZGQoXCJzdmdcIik7XG5cbiAgY29uc3QgbWFwID0gbmV3IEltYWdlKCk7XG4gIG1hcC5zcmMgPSBNYXA7XG4gIG1hcC5jbGFzc0xpc3QuYWRkKFwibWFwXCIpO1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGVyLmlubmVySFRNTCA9IFwiQ29udGFjdHNcIjtcblxuICBjb25zdCBpbmZvQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluZm9DYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuXG4gIGNvbnN0IGluZm9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGluZm9IZWFkZXIuaW5uZXJIVE1MID0gXCI8ZW0+QnJlYWQgJiBCdXR0ZXIgQ2FmZTwvZW0+XCI7XG5cbiAgY29uc3Qgb3BlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgb3Blbi50ZXh0Q29udGVudCA9IFwiT3BlbiBIb3Vyc1wiO1xuXG4gIGNvbnN0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkYXkudGV4dENvbnRlbnQgPSBcIk1vbmRheSB+IFN1bmRheVwiO1xuXG4gIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGltZS50ZXh0Q29udGVudCA9IFwiMDgwMEggfiAyMTMwSFwiO1xuXG4gIGNvbnN0IGNvbnRhY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFkZHJlc3NcIik7XG4gIGNvbnRhY3RzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdHNcIik7XG5cbiAgY29uc3QgdGVsSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGVsSG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJob2xkZXJcIik7XG5cbiAgY29uc3QgdGVsSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICB0ZWxIZWFkZXIudGV4dENvbnRlbnQgPSBcIlRlbC4gTm8uOlwiO1xuXG4gIGNvbnN0IHRlbExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGVsTGluZS5jbGFzc0xpc3QuYWRkKCdsaW5lJyk7XG5cbiAgY29uc3QgdGVsTm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGVsTm8udGV4dENvbnRlbnQgPSBcIig0MTcpIDU1NS01Njc4XCI7XG4gIFxuICB0ZWxMaW5lLmFwcGVuZENoaWxkKHBob25lSW1hZ2UpO1xuICB0ZWxMaW5lLmFwcGVuZENoaWxkKHRlbE5vKTtcbiAgXG4gIHRlbEhvbGRlci5hcHBlbmRDaGlsZCh0ZWxIZWFkZXIpO1xuICB0ZWxIb2xkZXIuYXBwZW5kQ2hpbGQodGVsTGluZSk7XG5cbiAgY29uc3QgYWRkcmVzc0hvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZHJlc3NIb2xkZXIuY2xhc3NMaXN0LmFkZChcImhvbGRlclwiKTtcblxuICBjb25zdCBhZGRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIGFkZEhlYWRlci50ZXh0Q29udGVudCA9IFwiQWRkcmVzczpcIjtcblxuICBjb25zdCBhZGRyZXNzTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhZGRyZXNzTGluZS5jbGFzc0xpc3QuYWRkKCdsaW5lJyk7XG5cbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBhZGRyZXNzLnRleHRDb250ZW50ID0gXCIxNTUgRWFzdCBXb29kIFJkLCBTa2lsbCBDYXN0bGUsIENvbXBldGVuY2UgS2luZ2RvbS5cIjtcbiAgYWRkcmVzcy5jbGFzc0xpc3QuYWRkKCdsZWZ0Jyk7XG5cbiAgYWRkcmVzc0xpbmUuYXBwZW5kQ2hpbGQoc3RvcmVJbWFnZSk7XG4gIGFkZHJlc3NMaW5lLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuXG4gIGFkZHJlc3NIb2xkZXIuYXBwZW5kQ2hpbGQoYWRkSGVhZGVyKTtcbiAgYWRkcmVzc0hvbGRlci5hcHBlbmRDaGlsZChhZGRyZXNzTGluZSk7XG5cbiAgY29udGFjdHMuYXBwZW5kQ2hpbGQodGVsSG9sZGVyKTtcbiAgY29udGFjdHMuYXBwZW5kQ2hpbGQoYWRkcmVzc0hvbGRlcik7XG4gIGNvbnRhY3RzLmFwcGVuZENoaWxkKG1hcCk7XG5cbiAgaW5mb0NhcmQuYXBwZW5kQ2hpbGQoaW5mb0hlYWRlcik7XG4gIGluZm9DYXJkLmFwcGVuZENoaWxkKG9wZW4pO1xuICBpbmZvQ2FyZC5hcHBlbmRDaGlsZChkYXkpO1xuICBpbmZvQ2FyZC5hcHBlbmRDaGlsZCh0aW1lKTtcbiAgaW5mb0NhcmQuYXBwZW5kQ2hpbGQoY29udGFjdHMpO1xuXG4gIG1hcC5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJMb2NhdGlvbiBJbWFnZVwiKTtcblxuICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZChpbmZvQ2FyZCk7XG5cbiAgcmV0dXJuIHsgY29udGFjdFNlY3Rpb24gfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RDb250ZW50O1xuIiwiXG5jb25zdCBtZW51Q29udGVudCA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG1lbnVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIG1lbnVTZWN0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudVwiKTtcblxuICBjb25zdCBCcmVhZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIEJyZWFkVGV4dC5pbm5lckhUTUwgPSBcIk1FTlVcIjtcbiAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQoQnJlYWRUZXh0KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8PSAzOyBpICs9IDEpIHtcbiAgICBjb25zdCBtZW51QmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG4gICAgc3dpdGNoIChpKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiU2FuZHdoaWNoIC8gQ2FrZVwiO1xuICAgICAgICBmb3IgKGxldCBwb2ludCA9IDA7IHBvaW50IDw9IDY7IHBvaW50ICs9IDEpIHtcbiAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgIHN3aXRjaCAocG9pbnQpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBgPHByZT5HYXJsaWMgQnJlYWQgICAgICAgICAgICAgICAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCAgICAgICQyNC45OTwvcHJlPmA7XG4gICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IGA8cHJlPkNyb2lzc2FudHMgICAgICAgICAgICAgICAgICDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwICAgICAgJDI0Ljk5PC9wcmU+YDtcbiAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYDxwcmU+Q3Jhd2Zpc2ggJiBCcmVhZCAgICAgICAgICAgIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAgICAgICAkMjQuOTk8L3ByZT5gO1xuICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBgPHByZT5DbGFzc2ljIFZhbmlsbGEgQ2FrZSAgICAgICAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCAgICAgICQyNC45OTwvcHJlPmA7XG4gICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IGA8cHJlPkNob2NvbGF0ZSBMYXZhIENha2UgICAgICAgICDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwICAgICAgJDI0Ljk5PC9wcmU+YDtcbiAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYDxwcmU+U3RyYXdiZXJyeSBTaG9ydCBDYWtlICAgICAgIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAgICAgICAkMjQuOTk8L3ByZT5gO1xuICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYDxwcmU+Um9hc3QgQmVlZiBTYW5kd2ljaCAgICAgICAgIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAgICAgICAkMjQuOTk8L3ByZT5gO1xuICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJDb2ZmZWVcIjtcbiAgICAgICAgZm9yIChsZXQgcG9pbnQgPSAwOyBwb2ludCA8PSA2OyBwb2ludCArPSAxKSB7XG4gICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICBzd2l0Y2ggKHBvaW50KSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYDxwcmU+QW1lcmljYW5vICAgICAgICAgICAgICAgICAgIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAgICAgICAkMjQuOTk8L3ByZT5gO1xuICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBgPHByZT5Fc3ByZXNzbyAgICAgICAgICAgICAgICAgICAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCAgICAgICQyNC45OTwvcHJlPmA7XG4gICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IGA8cHJlPkRvcHBpbyAgICAgICAgICAgICAgICAgICAgICDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwICAgICAgJDI0Ljk5PC9wcmU+YDtcbiAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYDxwcmU+TGF0dGUgICAgICAgICAgICAgICAgICAgICAgIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAgICAgICAkMjQuOTk8L3ByZT5gO1xuICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBgPHByZT5DYXBwdWNjaW5vICAgICAgICAgICAgICAgICAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCAgICAgICQyNC45OTwvcHJlPmA7XG4gICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IGA8cHJlPk1vY2hhICAgICAgICAgICAgICAgICAgICAgICDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwICAgICAgJDI0Ljk5PC9wcmU+YDtcbiAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IGA8cHJlPkJsYWNrICAgICAgICAgICAgICAgICAgICAgICDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwICAgICAgJDI0Ljk5PC9wcmU+YDtcbiAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiT3RoZXIgQmV2ZXJhZ2VzXCI7XG4gICAgICAgIGZvciAobGV0IHBvaW50ID0gMDsgcG9pbnQgPD0gNDsgcG9pbnQgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgc3dpdGNoIChwb2ludCkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IGA8cHJlPldhdGVybWVsb24gSnVpY2UgICAgICAgICAgICDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwICAgICAgJDI0Ljk5PC9wcmU+YDtcbiAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYDxwcmU+TGVtb25hZGUgSm9sdCAgICAgICAgICAgICAgIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAgICAgICAkMjQuOTk8L3ByZT5gO1xuICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBgPHByZT5PcmFuZ2UgR3JvdmUgICAgICAgICAgICAgICAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCAgICAgICQyNC45OTwvcHJlPmA7XG4gICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IGA8cHJlPkJ1ZHdlaXNlciAgICAgICAgICAgICAgICAgICDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwICAgICAgJDI0Ljk5PC9wcmU+YDtcbiAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IGA8cHJlPkJvdHRsZWQgV2F0ZXIgICAgICAgICAgICAgICDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwICAgICAgJDI0Ljk5PC9wcmU+YDtcbiAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlBhc3RhXCI7XG4gICAgICAgIGZvciAobGV0IHBvaW50ID0gMDsgcG9pbnQgPD0gMzsgcG9pbnQgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgc3dpdGNoIChwb2ludCkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IGA8cHJlPkZldHR1Y2NpbmUgQWxmcmVkbyAgICAgICAgICDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwICAgICAgJDI0Ljk5PC9wcmU+YDtcbiAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYDxwcmU+Q2hpY2tlbiBUZXRyYXp6aW5pICAgICAgICAgIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAgICAgICAkMjQuOTk8L3ByZT5gO1xuICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBgPHByZT5TdGVha2hvdXNlIFBhc3RhICAgICAgICAgICAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCAgICAgICQyNC45OTwvcHJlPmA7XG4gICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBgPHByZT5NZWF0YmFsbHMgYW5kIFNwYWdoZXR0aSAgICAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCAgICAgICQyNC45OTwvcHJlPmA7XG4gICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIG1lbnVCbG9jay5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIG1lbnVCbG9jay5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZChtZW51QmxvY2spO1xuICB9XG5cbiAgcmV0dXJuIHsgbWVudVNlY3Rpb24gfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVDb250ZW50O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vY3NzL3N0eWxlLmNzc1wiO1xuaW1wb3J0IEdpdEh1YiBmcm9tIFwiLi9pbWFnZXMvR2l0SHViLU1hcmstTGlnaHQtNjRweC5wbmdcIjtcbmltcG9ydCBIZXJvSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2JyZWFkLWNvZmZlZS5qcGdcIjtcbmltcG9ydCBtZW51Q29udGVudCBmcm9tIFwiLi9zY3JpcHRzL21lbnVcIjtcbmltcG9ydCBjb250YWN0Q29udGVudCBmcm9tIFwiLi9zY3JpcHRzL2NvbnRhY3RcIjtcblxuY29uc3QgYmFzZURPTSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuICAvLyBNYWluIEhlYWRlciAvL1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAvLyBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgY29uc3QgbmF2VWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbnN0IGJ0bkxpc3QgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMzsgaSArPSAxKSB7XG4gICAgY29uc3QgbmF2TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgbmF2QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIHN3aXRjaCAoaSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICBuYXZCdG4udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICAgICAgbmF2QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZVwiKTtcbiAgICAgICAgbmF2TGkuYXBwZW5kQ2hpbGQobmF2QnRuKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIG5hdkJ0bi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgICAgICBuYXZCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51XCIpO1xuICAgICAgICBuYXZMaS5hcHBlbmRDaGlsZChuYXZCdG4pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgbmF2QnRuLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gICAgICAgIG5hdkJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFib3V0XCIpO1xuICAgICAgICBuYXZMaS5hcHBlbmRDaGlsZChuYXZCdG4pO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIG5hdkJ0bi50ZXh0Q29udGVudCA9IFwiQ3JlZGl0c1wiO1xuICAgICAgICBuYXZCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjcmVkaXRcIik7XG4gICAgICAgIG5hdkxpLmFwcGVuZENoaWxkKG5hdkJ0bik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBidG5MaXN0LnB1c2gobmF2TGkpO1xuICAgIG5hdlVsLmFwcGVuZENoaWxkKG5hdkxpKTtcbiAgfVxuXG4gIC8vIGgxLnRleHRDb250ZW50ID0gJ0JyZWFkICYgQnV0dGVyIENhZmUnXG4gIG5hdi5hcHBlbmRDaGlsZChuYXZVbCk7XG4gIC8vIGhlYWRlci5hcHBlbmRDaGlsZChoMSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgLy8gTWFpbiBDb250ZW50IC8vXG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBtYWluLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGVudFwiKTtcblxuICBib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuXG4gIC8vIE1haW4gRm9vdGVyIC8vXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGNvbnN0IGdpdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgZ2l0TGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly9naXRodWIuY29tL1JoYXp6WElYXCIpO1xuICBjb25zdCBnaXRodWIgPSBuZXcgSW1hZ2UoKTtcbiAgZ2l0aHViLnNyYyA9IEdpdEh1YjtcblxuICBnaXRMaW5rLmFwcGVuZENoaWxkKGdpdGh1Yik7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRMaW5rKTtcblxuICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgcmV0dXJuIHsgbWFpbiwgYnRuTGlzdCB9O1xufSkoKTtcblxuY29uc3QgaG9tZUNvbnRlbnQgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBob21lU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBob21lU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWVcIik7XG5cbiAgY29uc3QgaGVyb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGhlcm9UZXh0LmlubmVySFRNTCA9IFwiQnJlYWQgJiBCdXR0ZXIgQ2FmZVwiO1xuXG4gIGNvbnN0IGhlcm9JbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBoZXJvSW1hZ2Uuc3JjID0gSGVyb0ltYWdlO1xuICBoZXJvSW1hZ2UuY2xhc3NMaXN0LmFkZChcImhlcm8taW1hZ2VcIik7XG4gIGhlcm9JbWFnZS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJUb2FzdCBCcmVhZCBhbmQgQ29mZmVlXCIpO1xuXG4gIGNvbnN0IHN1Ykhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgc3ViSGVyby5pbm5lckhUTUwgPSBgRXN0YWJsaXNoZWQgaW4gMTkyMCdzLCA8ZW0+QnJlYWQgJiBCdXR0ZXIgQ2FmZTwvZW0+IGhhcyBiZWVuIHRoZSBob21lIFxuICAgIGZvciBwZW9wbGUsIHdobyBpcyBsb29raW5nIGZvciA8ZW0+ZGVsaWdodGZ1bDwvZW0+IGZvb2QgbWFkZSBmcm9tIDxzdHJvbmc+aGlnaCBxdWFsaXR5PC9zdHJvbmc+IGluZ3JlZGllbnRzLiBTdXBwb3J0cyBkb21lc3RpY1xuICAgIGZhcm1lcnMgdGhyb3VnaCBzb3VyY2luZyBsb2NhbCBwcm9kdWNlIGRpcmVjdGx5IGZyb20gdGhlbS5gO1xuXG4gIGhvbWVTZWN0aW9uLmFwcGVuZENoaWxkKGhlcm9UZXh0KTtcbiAgaG9tZVNlY3Rpb24uYXBwZW5kQ2hpbGQoaGVyb0ltYWdlKTtcbiAgaG9tZVNlY3Rpb24uYXBwZW5kQ2hpbGQoc3ViSGVybyk7XG4gIGJhc2VET00ubWFpbi5hcHBlbmRDaGlsZChob21lU2VjdGlvbik7XG4gIHJldHVybiB7IGhvbWVTZWN0aW9uIH07XG59KSgpO1xuXG5cbmNvbnN0IGJpbmRFdmVudHMgPSAoZnVuY3Rpb24gKCkge1xuICBiYXNlRE9NLmJ0bkxpc3RbMF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBlbGVtZW50ID0gYmFzZURPTS5tYWluLnF1ZXJ5U2VsZWN0b3IoXCJzZWN0aW9uXCIpO1xuICAgIGlmIChCb29sZWFuKGVsZW1lbnQpKSB7XG4gICAgICBpZiAoZWxlbWVudCAhPT0gaG9tZUNvbnRlbnQuaG9tZVNlY3Rpb24pIHtcbiAgICAgICAgYmFzZURPTS5tYWluLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICBiYXNlRE9NLm1haW4uYXBwZW5kQ2hpbGQoaG9tZUNvbnRlbnQuaG9tZVNlY3Rpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGJhc2VET00uYnRuTGlzdFsxXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBiYXNlRE9NLm1haW4ucXVlcnlTZWxlY3RvcihcInNlY3Rpb25cIik7XG4gICAgaWYgKEJvb2xlYW4oZWxlbWVudCkpIHtcbiAgICAgIGlmIChlbGVtZW50ICE9PSBtZW51Q29udGVudC5tZW51U2VjdGlvbikge1xuICAgICAgICBiYXNlRE9NLm1haW4ucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIGJhc2VET00ubWFpbi5hcHBlbmRDaGlsZChtZW51Q29udGVudC5tZW51U2VjdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgYmFzZURPTS5idG5MaXN0WzJdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgZWxlbWVudCA9IGJhc2VET00ubWFpbi5xdWVyeVNlbGVjdG9yKFwic2VjdGlvblwiKTtcbiAgICBpZiAoQm9vbGVhbihlbGVtZW50KSkge1xuICAgICAgaWYgKGVsZW1lbnQgIT09IGNvbnRhY3RDb250ZW50LmNvbnRhY3RTZWN0aW9uKSB7XG4gICAgICAgIGJhc2VET00ubWFpbi5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgYmFzZURPTS5tYWluLmFwcGVuZENoaWxkKGNvbnRhY3RDb250ZW50LmNvbnRhY3RTZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9