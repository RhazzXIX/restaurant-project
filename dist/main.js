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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* outline: 3px solid white; */\n}\n:root {\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 16px;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  color: black;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 60px 1fr 50px;\n  height: 100vh;\n  width: 100vw;\n  min-width: 1040px;\n  background-color: #0E0504;\n  position: relative;\n}\n\nheader{\n  display: flex;\n}\nnav {\n  display: flex;\n  width: 100%;\n}\n\n\nheader\nnav ul {\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  gap: 54px;\n}\n\nheader\nnav ul \nli button {\n  appearance: none;\n  border-top: 2px solid white;\n  border-left: 2px solid white;\n  border-right: 2px solid white;\n  border-bottom: none;\n  background-color: #0E0504;\n  color: white;\n  padding: 6px 12px;\n  width: 100%;\n  font-size: 1.1rem;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n}\n\nheader\nnav ul li \nbutton:hover {\n  text-shadow: 3px 3px 16px white;\n}\n\nheader\nnav ul li \nbutton:active {\n  background-color: aliceblue;\n  color: #0E0504;\n  border-top: 2px solid grey;\n  border-left: 2px solid grey;\n  border-right: 2px solid grey;\n}\n\nmain#content {\n  min-height: 744px;\n  min-width: 1160px;\n  background-color: #4B1F0E;\n  border-top: 2px solid white;\n  border-bottom: 2px solid white;\n  padding: 44px 52px;\n  overflow-y: auto;\n}\n\nmain#content\nsection#home {\n  display: grid;\n  height: 100%;\n  grid-template-columns: repeat(2,1fr);\n  grid-template-rows: repeat(2, 1fr);\n  width: auto;\n  min-width: 1020px;\n  column-gap: 52px;\n  align-items: center;\n  justify-items: center;\n}\n\nmain#content\nsection#home\nimg.hero-image {\n  width: max(480px, 66%);\n  border: 4px solid #BE7656;\n  border-radius: 80px 14px;\n}\n\nsection#home\nh2 {\n  color: #EFC3A4;\n  font-family: 'Passions Conflict', 'Times New Roman';\n  font-style: italic;\n  font-size: 5.5rem;\n  font-weight: 400;\n}\n\nsection#home\np {\n  color: #EFC3A4;\n  font-size: 1.4rem;\n  grid-column: 1 / -1;\n  width: 700px\n}\n\nmain#content\nsection#menu {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  margin: auto;\n  width: 1020px;\n  height: 1454px;\n  outline: 3px solid #BE7656;\n  border-radius: 20px;\n  box-shadow: 6px 6px 18px #030201;\n  color: white;\n  padding: 240px 210px 190px 220px;\n}\n\nmain#content\nsection#menu\nh1 {\n  font-size: 5rem;\n  font-family: 'Passions Conflict', 'Times New Roman', Times, serif;\n  letter-spacing: 12px;\n  margin-bottom: 36px;\n}\n\nsection#menu\ndiv {\n  margin-bottom: 32px;\n  line-height: 1.3;\n}\n\nsection#menu\ndiv h3 {\n  font-style: italic;\n  font-size: 1.8rem;\n  margin-bottom: 14px;\n}\n\nsection#menu\ndiv pre {\n  font-size: 1.1rem;\n}\n\nsection#contact {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-position: center bottom;\n  background-size: 90%;\n  background-repeat: no-repeat;\n  height: 680px;\n  width: 1040px;\n  margin: auto;\n  margin-top: -40px;\n  padding: 0px 56px;\n}\n\nsection#contact >\nh1 {\n  color: white ;\n  text-align: center;\n  font-size: 3rem;\n  margin-bottom: 8px;\n}\n\nsection#contact \ndiv.card {\n  background-color: rgba(255, 255, 255, 0.5);\n  text-align: center;\n  width: 580px;\n  border-radius: 8px;\n  padding: 6px;\n}\n\nsection#contact \ndiv.card h2,\ndiv.card h4,\ndiv.card p:nth-of-type(2) {\n  margin-bottom: 4px;\n}\n\nsection#contact \ndiv address#contacts {\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  align-items: center;\n  justify-items: center;\n}\n\naddress#contacts\ndiv.holder {\n  gap: 5px;\n  grid-column: 1 / 2;\n  display: flex;\n  flex-direction: column;\n}\n\ndiv.holder\ndiv.line {\n  display: flex;\n  gap: 6px;\n}\n\ndiv.holder\ndiv.line\np.left {\n  width: 150px;\n  text-align: center;\n}\n\naddress#contacts\ndiv.holder h4 {\n  grid-row: 1 / 2;\n  grid-column: 1 / -1;\n}\n\naddress#contacts\nimg.map {\n  grid-row: 1 / 3;\n  grid-column: 2 / 3;\n  width: 300px;\n  outline: 1px solid #0E0504;\n}\n\naddress#contacts\ndiv img.svg {\n  width: 20px;\n  flex: 1 1 auto;\n}\n\nsection#credits {\n  background-color: rgba(255, 255, 255, 0.4);\n  border-radius: 8px;\n  padding: 25px;\n  width: 900px;\n  margin: auto;\n}\n\nsection#credits >\nh2 {\n  margin-top: 26px;\n}\n\nsection#credits >\na em {\n  font-size: 1.2rem;\n  text-shadow: 1px 1px 8px white;\n}\n\nsection#credits >\na em:hover {\n  color: white;\n  text-shadow: 1px 1px 8px black;\n}\n\nsection#credits\ndiv.imageCards {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  padding: 22px;\n  border: 3px solid #4B1F0E;\n}\n\ndiv.imageCards\ndiv.card {\n  border: 3px solid #BE7656;\n  padding: 8px;\n  border-radius: 8px;\n  box-shadow: 2px 2px 14px #4B1F0E;\n  background-color: #EFC3A4;\n}\n\ndiv.imageCards\ndiv.card:hover {\n  box-shadow: 2px 2px 14px #EFC3A4;\n}\n\nsection#credits\nimg.image-credit {\n  width: 200px;\n}\n\ndiv.card a\n> em {\n  text-shadow: 1px 1px 8px #4B1F0E;\n  font-size: 1.2rem;\n}\n\ndiv.card a\n> em:hover {\n  text-shadow: 1px 1px 8px #4B1F0E;\n  color: #4B1F0E;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n}\n\nfooter a {\n  display: flex;\n  align-items: center;\n}\n\nfooter a \nimg{\n  width: 26px;\n  height: 26px;\n  /* border-radius: 50%; */\n}\n\nfooter a \nimg:hover {\n  /* box-shadow: 0.5px 0.5px 12px white; */\n  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(252deg) brightness(104%) contrast(100%) drop-shadow(0 0 0.75rem white);\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Passions+Conflict&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* outline: 3px solid white; */\n}\n:root {\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 16px;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  color: black;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 60px 1fr 50px;\n  height: 100vh;\n  width: 100vw;\n  min-width: 1040px;\n  background-color: #0E0504;\n  position: relative;\n}\n\nheader{\n  display: flex;\n}\nnav {\n  display: flex;\n  width: 100%;\n}\n\n\nheader\nnav ul {\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  gap: 54px;\n}\n\nheader\nnav ul \nli button {\n  appearance: none;\n  border-top: 2px solid white;\n  border-left: 2px solid white;\n  border-right: 2px solid white;\n  border-bottom: none;\n  background-color: #0E0504;\n  color: white;\n  padding: 6px 12px;\n  width: 100%;\n  font-size: 1.1rem;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n}\n\nheader\nnav ul li \nbutton:hover {\n  text-shadow: 3px 3px 16px white;\n}\n\nheader\nnav ul li \nbutton:active {\n  background-color: aliceblue;\n  color: #0E0504;\n  border-top: 2px solid grey;\n  border-left: 2px solid grey;\n  border-right: 2px solid grey;\n}\n\nmain#content {\n  min-height: 744px;\n  min-width: 1160px;\n  background-color: #4B1F0E;\n  border-top: 2px solid white;\n  border-bottom: 2px solid white;\n  padding: 44px 52px;\n  overflow-y: auto;\n}\n\nmain#content\nsection#home {\n  display: grid;\n  height: 100%;\n  grid-template-columns: repeat(2,1fr);\n  grid-template-rows: repeat(2, 1fr);\n  width: auto;\n  min-width: 1020px;\n  column-gap: 52px;\n  align-items: center;\n  justify-items: center;\n}\n\nmain#content\nsection#home\nimg.hero-image {\n  width: max(480px, 66%);\n  border: 4px solid #BE7656;\n  border-radius: 80px 14px;\n}\n\nsection#home\nh2 {\n  color: #EFC3A4;\n  font-family: 'Passions Conflict', 'Times New Roman';\n  font-style: italic;\n  font-size: 5.5rem;\n  font-weight: 400;\n}\n\nsection#home\np {\n  color: #EFC3A4;\n  font-size: 1.4rem;\n  grid-column: 1 / -1;\n  width: 700px\n}\n\nmain#content\nsection#menu {\n  background-image: url(../images/menu-board.jpg);\n  background-size: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  margin: auto;\n  width: 1020px;\n  height: 1454px;\n  outline: 3px solid #BE7656;\n  border-radius: 20px;\n  box-shadow: 6px 6px 18px #030201;\n  color: white;\n  padding: 240px 210px 190px 220px;\n}\n\nmain#content\nsection#menu\nh1 {\n  font-size: 5rem;\n  font-family: 'Passions Conflict', 'Times New Roman', Times, serif;\n  letter-spacing: 12px;\n  margin-bottom: 36px;\n}\n\nsection#menu\ndiv {\n  margin-bottom: 32px;\n  line-height: 1.3;\n}\n\nsection#menu\ndiv h3 {\n  font-style: italic;\n  font-size: 1.8rem;\n  margin-bottom: 14px;\n}\n\nsection#menu\ndiv pre {\n  font-size: 1.1rem;\n}\n\nsection#contact {\n  background-image: url(../images/bread-mug-laptop.jpg);\n  background-position: center bottom;\n  background-size: 90%;\n  background-repeat: no-repeat;\n  height: 680px;\n  width: 1040px;\n  margin: auto;\n  margin-top: -40px;\n  padding: 0px 56px;\n}\n\nsection#contact >\nh1 {\n  color: white ;\n  text-align: center;\n  font-size: 3rem;\n  margin-bottom: 8px;\n}\n\nsection#contact \ndiv.card {\n  background-color: rgba(255, 255, 255, 0.5);\n  text-align: center;\n  width: 580px;\n  border-radius: 8px;\n  padding: 6px;\n}\n\nsection#contact \ndiv.card h2,\ndiv.card h4,\ndiv.card p:nth-of-type(2) {\n  margin-bottom: 4px;\n}\n\nsection#contact \ndiv address#contacts {\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  align-items: center;\n  justify-items: center;\n}\n\naddress#contacts\ndiv.holder {\n  gap: 5px;\n  grid-column: 1 / 2;\n  display: flex;\n  flex-direction: column;\n}\n\ndiv.holder\ndiv.line {\n  display: flex;\n  gap: 6px;\n}\n\ndiv.holder\ndiv.line\np.left {\n  width: 150px;\n  text-align: center;\n}\n\naddress#contacts\ndiv.holder h4 {\n  grid-row: 1 / 2;\n  grid-column: 1 / -1;\n}\n\naddress#contacts\nimg.map {\n  grid-row: 1 / 3;\n  grid-column: 2 / 3;\n  width: 300px;\n  outline: 1px solid #0E0504;\n}\n\naddress#contacts\ndiv img.svg {\n  width: 20px;\n  flex: 1 1 auto;\n}\n\nsection#credits {\n  background-color: rgba(255, 255, 255, 0.4);\n  border-radius: 8px;\n  padding: 25px;\n  width: 900px;\n  margin: auto;\n}\n\nsection#credits >\nh2 {\n  margin-top: 26px;\n}\n\nsection#credits >\na em {\n  font-size: 1.2rem;\n  text-shadow: 1px 1px 8px white;\n}\n\nsection#credits >\na em:hover {\n  color: white;\n  text-shadow: 1px 1px 8px black;\n}\n\nsection#credits\ndiv.imageCards {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  padding: 22px;\n  border: 3px solid #4B1F0E;\n}\n\ndiv.imageCards\ndiv.card {\n  border: 3px solid #BE7656;\n  padding: 8px;\n  border-radius: 8px;\n  box-shadow: 2px 2px 14px #4B1F0E;\n  background-color: #EFC3A4;\n}\n\ndiv.imageCards\ndiv.card:hover {\n  box-shadow: 2px 2px 14px #EFC3A4;\n}\n\nsection#credits\nimg.image-credit {\n  width: 200px;\n}\n\ndiv.card a\n> em {\n  text-shadow: 1px 1px 8px #4B1F0E;\n  font-size: 1.2rem;\n}\n\ndiv.card a\n> em:hover {\n  text-shadow: 1px 1px 8px #4B1F0E;\n  color: #4B1F0E;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n}\n\nfooter a {\n  display: flex;\n  align-items: center;\n}\n\nfooter a \nimg{\n  width: 26px;\n  height: 26px;\n  /* border-radius: 50%; */\n}\n\nfooter a \nimg:hover {\n  /* box-shadow: 0.5px 0.5px 12px white; */\n  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(252deg) brightness(104%) contrast(100%) drop-shadow(0 0 0.75rem white);\n}"],"sourceRoot":""}]);
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

/***/ "./src/scripts/credits.js":
/*!********************************!*\
  !*** ./src/scripts/credits.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_bread_coffee_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/bread-coffee.jpg */ "./src/images/bread-coffee.jpg");
/* harmony import */ var _images_menu_board_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/menu-board.jpg */ "./src/images/menu-board.jpg");
/* harmony import */ var _images_bread_mug_laptop_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/bread-mug-laptop.jpg */ "./src/images/bread-mug-laptop.jpg");
//juAnnun
 //miti


const creditsContent = (function () {
  const creditsSection = document.createElement("section");
  creditsSection.setAttribute("id", "credits");
  
  const iconText = document.createElement('p');
  iconText.textContent = 'Icons are from:'
  const iconSite =document.createElement('a')
  iconSite.innerHTML = '<em>Material Design Icons</em>'
  iconSite.setAttribute('href', 'https://materialdesignicons.com/');
  creditsSection.appendChild(iconText);
  creditsSection.appendChild(iconSite);
  
  const imageText = document.createElement('h2');
  imageText.textContent = 'Images'
  creditsSection.appendChild(imageText);

  const cardHolder = document.createElement('div')
  cardHolder.classList.add('imageCards');
  creditsSection.appendChild(cardHolder);

  
  for (let i = 0; i <= 2; i += 1) {
    const imgCard = document.createElement('div');
    imgCard.classList.add('card');
    const image = new Image();
    image.classList.add('image-credit');
    const anchor = document.createElement('a');
    const p = document.createElement('p');
    p.innerHTML = 'Photo by'
    const name = document.createElement('em');
    const nameAnchor = document.createElement('a');
    switch (i) {
      case 1:
        image.src = _images_menu_board_jpg__WEBPACK_IMPORTED_MODULE_1__;
        image.setAttribute('alt', 'Pastries on edge of Table');
        anchor.appendChild(image)
        anchor.setAttribute('href', 'https://unsplash.com/photos/qYreP9QOdrk')
        imgCard.appendChild(anchor);
        name.textContent = 'Miti'
        nameAnchor.setAttribute('href', 'https://unsplash.com/@mitifotos');
        break;
      case 2:
        image.src = _images_bread_mug_laptop_jpg__WEBPACK_IMPORTED_MODULE_2__;
        image.setAttribute('alt', 'Laptop bread and mug');
        anchor.appendChild(image)
        anchor.setAttribute('href', 'https://www.pexels.com/photo/blue-ceramic-mug-beside-cupcake-1340462/')
        imgCard.appendChild(anchor);
        name.textContent = 'Lisa Fotios'
        nameAnchor.setAttribute('href', 'https://www.pexels.com/@fotios-photos/');
        break;
      default:
        image.src = _images_bread_coffee_jpg__WEBPACK_IMPORTED_MODULE_0__;
        image.setAttribute('alt', 'Toast and Coffee');
        anchor.appendChild(image)
        anchor.setAttribute('href', 'https://pixabay.com/photos/coffee-with-milk-bread-and-butter-2435254/')
        imgCard.appendChild(anchor);
        name.textContent = 'Juliana Annunciato'
        nameAnchor.setAttribute('href', 'https://pixabay.com/users/juannun-5716625/');
    }
    imgCard.appendChild(p);
    nameAnchor.appendChild(name);
    imgCard.appendChild(nameAnchor);
    cardHolder.appendChild(imgCard);
  }


  return {creditsSection}
}) ();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (creditsContent);

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
/* harmony import */ var _scripts_credits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/credits */ "./src/scripts/credits.js");







const baseDOM = (function () {
  const body = document.querySelector("body");

  // Main Header //
  const header = document.createElement("header");
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
    for people, who is looking for <em>delightful</em> foods made from <strong>high quality</strong> ingredients. Supports domestic
    farmers, through sourcing local produce directly from them.`;

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
  baseDOM.btnList[3].addEventListener("click", (e) => {
    e.stopPropagation();
    const element = baseDOM.main.querySelector("section");
    if (Boolean(element)) {
      if (element !== _scripts_credits__WEBPACK_IMPORTED_MODULE_5__["default"].creditsSection) {
        baseDOM.main.removeChild(element);
        baseDOM.main.appendChild(_scripts_credits__WEBPACK_IMPORTED_MODULE_5__["default"].creditsSection);
      }
    }
  });
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrREFBTTs7QUFFckI7QUFDQTs7QUFFQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixxREFBUztBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlFQUF1QjtBQUM3QztBQUNBLGlDQUFpQyxpRUFBdUI7QUFDeEQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1RUFBNkI7QUFDbkQ7QUFDQSxpQ0FBaUMsdUVBQTZCO0FBQzlEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdUVBQTZCO0FBQ25EO0FBQ0EsaUNBQWlDLHVFQUE2QjtBQUM5RDtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9zY3JpcHRzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvY3JlZGl0cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvc2NyaXB0cy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvbWVudS1ib2FyZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYnJlYWQtbXVnLWxhcHRvcC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBhc3Npb25zK0NvbmZsaWN0JmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIG91dGxpbmU6IDNweCBzb2xpZCB3aGl0ZTsgKi9cXG59XFxuOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggMWZyIDUwcHg7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWluLXdpZHRoOiAxMDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEUwNTA0O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5oZWFkZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5cXG5oZWFkZXJcXG5uYXYgdWwge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGdhcDogNTRweDtcXG59XFxuXFxuaGVhZGVyXFxubmF2IHVsIFxcbmxpIGJ1dHRvbiB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwRTA1MDQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiA2cHggMTJweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaGVhZGVyXFxubmF2IHVsIGxpIFxcbmJ1dHRvbjpob3ZlciB7XFxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAxNnB4IHdoaXRlO1xcbn1cXG5cXG5oZWFkZXJcXG5uYXYgdWwgbGkgXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICBjb2xvcjogIzBFMDUwNDtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBncmV5O1xcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBncmV5O1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgZ3JleTtcXG59XFxuXFxubWFpbiNjb250ZW50IHtcXG4gIG1pbi1oZWlnaHQ6IDc0NHB4O1xcbiAgbWluLXdpZHRoOiAxMTYwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEIxRjBFO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbiAgcGFkZGluZzogNDRweCA1MnB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxubWFpbiNjb250ZW50XFxuc2VjdGlvbiNob21lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgd2lkdGg6IGF1dG87XFxuICBtaW4td2lkdGg6IDEwMjBweDtcXG4gIGNvbHVtbi1nYXA6IDUycHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5tYWluI2NvbnRlbnRcXG5zZWN0aW9uI2hvbWVcXG5pbWcuaGVyby1pbWFnZSB7XFxuICB3aWR0aDogbWF4KDQ4MHB4LCA2NiUpO1xcbiAgYm9yZGVyOiA0cHggc29saWQgI0JFNzY1NjtcXG4gIGJvcmRlci1yYWRpdXM6IDgwcHggMTRweDtcXG59XFxuXFxuc2VjdGlvbiNob21lXFxuaDIge1xcbiAgY29sb3I6ICNFRkMzQTQ7XFxuICBmb250LWZhbWlseTogJ1Bhc3Npb25zIENvbmZsaWN0JywgJ1RpbWVzIE5ldyBSb21hbic7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDUuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbnNlY3Rpb24jaG9tZVxcbnAge1xcbiAgY29sb3I6ICNFRkMzQTQ7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICB3aWR0aDogNzAwcHhcXG59XFxuXFxubWFpbiNjb250ZW50XFxuc2VjdGlvbiNtZW51IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDEwMjBweDtcXG4gIGhlaWdodDogMTQ1NHB4O1xcbiAgb3V0bGluZTogM3B4IHNvbGlkICNCRTc2NTY7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm94LXNoYWRvdzogNnB4IDZweCAxOHB4ICMwMzAyMDE7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAyNDBweCAyMTBweCAxOTBweCAyMjBweDtcXG59XFxuXFxubWFpbiNjb250ZW50XFxuc2VjdGlvbiNtZW51XFxuaDEge1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgZm9udC1mYW1pbHk6ICdQYXNzaW9ucyBDb25mbGljdCcsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuICBsZXR0ZXItc3BhY2luZzogMTJweDtcXG4gIG1hcmdpbi1ib3R0b206IDM2cHg7XFxufVxcblxcbnNlY3Rpb24jbWVudVxcbmRpdiB7XFxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMztcXG59XFxuXFxuc2VjdGlvbiNtZW51XFxuZGl2IGgzIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcXG59XFxuXFxuc2VjdGlvbiNtZW51XFxuZGl2IHByZSB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuc2VjdGlvbiNjb250YWN0IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xcbiAgYmFja2dyb3VuZC1zaXplOiA5MCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgaGVpZ2h0OiA2ODBweDtcXG4gIHdpZHRoOiAxMDQwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tdG9wOiAtNDBweDtcXG4gIHBhZGRpbmc6IDBweCA1NnB4O1xcbn1cXG5cXG5zZWN0aW9uI2NvbnRhY3QgPlxcbmgxIHtcXG4gIGNvbG9yOiB3aGl0ZSA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbnNlY3Rpb24jY29udGFjdCBcXG5kaXYuY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogNTgwcHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiA2cHg7XFxufVxcblxcbnNlY3Rpb24jY29udGFjdCBcXG5kaXYuY2FyZCBoMixcXG5kaXYuY2FyZCBoNCxcXG5kaXYuY2FyZCBwOm50aC1vZi10eXBlKDIpIHtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG59XFxuXFxuc2VjdGlvbiNjb250YWN0IFxcbmRpdiBhZGRyZXNzI2NvbnRhY3RzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmFkZHJlc3MjY29udGFjdHNcXG5kaXYuaG9sZGVyIHtcXG4gIGdhcDogNXB4O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmRpdi5ob2xkZXJcXG5kaXYubGluZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA2cHg7XFxufVxcblxcbmRpdi5ob2xkZXJcXG5kaXYubGluZVxcbnAubGVmdCB7XFxuICB3aWR0aDogMTUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmFkZHJlc3MjY29udGFjdHNcXG5kaXYuaG9sZGVyIGg0IHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxufVxcblxcbmFkZHJlc3MjY29udGFjdHNcXG5pbWcubWFwIHtcXG4gIGdyaWQtcm93OiAxIC8gMztcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCAjMEUwNTA0O1xcbn1cXG5cXG5hZGRyZXNzI2NvbnRhY3RzXFxuZGl2IGltZy5zdmcge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBmbGV4OiAxIDEgYXV0bztcXG59XFxuXFxuc2VjdGlvbiNjcmVkaXRzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDI1cHg7XFxuICB3aWR0aDogOTAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbnNlY3Rpb24jY3JlZGl0cyA+XFxuaDIge1xcbiAgbWFyZ2luLXRvcDogMjZweDtcXG59XFxuXFxuc2VjdGlvbiNjcmVkaXRzID5cXG5hIGVtIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggOHB4IHdoaXRlO1xcbn1cXG5cXG5zZWN0aW9uI2NyZWRpdHMgPlxcbmEgZW06aG92ZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggOHB4IGJsYWNrO1xcbn1cXG5cXG5zZWN0aW9uI2NyZWRpdHNcXG5kaXYuaW1hZ2VDYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMjJweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICM0QjFGMEU7XFxufVxcblxcbmRpdi5pbWFnZUNhcmRzXFxuZGl2LmNhcmQge1xcbiAgYm9yZGVyOiAzcHggc29saWQgI0JFNzY1NjtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTRweCAjNEIxRjBFO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VGQzNBNDtcXG59XFxuXFxuZGl2LmltYWdlQ2FyZHNcXG5kaXYuY2FyZDpob3ZlciB7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDE0cHggI0VGQzNBNDtcXG59XFxuXFxuc2VjdGlvbiNjcmVkaXRzXFxuaW1nLmltYWdlLWNyZWRpdCB7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbmRpdi5jYXJkIGFcXG4+IGVtIHtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDhweCAjNEIxRjBFO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbmRpdi5jYXJkIGFcXG4+IGVtOmhvdmVyIHtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDhweCAjNEIxRjBFO1xcbiAgY29sb3I6ICM0QjFGMEU7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIgYSBcXG5pbWd7XFxuICB3aWR0aDogMjZweDtcXG4gIGhlaWdodDogMjZweDtcXG4gIC8qIGJvcmRlci1yYWRpdXM6IDUwJTsgKi9cXG59XFxuXFxuZm9vdGVyIGEgXFxuaW1nOmhvdmVyIHtcXG4gIC8qIGJveC1zaGFkb3c6IDAuNXB4IDAuNXB4IDEycHggd2hpdGU7ICovXFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzUwMCUpIGh1ZS1yb3RhdGUoMjUyZGVnKSBicmlnaHRuZXNzKDEwNCUpIGNvbnRyYXN0KDEwMCUpIGRyb3Atc2hhZG93KDAgMCAwLjc1cmVtIHdoaXRlKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLDRDQUE0QztFQUM1QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjs7O0FBR0E7O0VBRUUs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QUNoQzs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBOztFQUVFLGdDQUFnQztFQUNoQyxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsZ0NBQWdDO0VBQ2hDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHdCQUF3QjtBQUMxQjs7QUFFQTs7RUFFRSx3Q0FBd0M7RUFDeEMsZ0lBQWdJO0FBQ2xJXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBhc3Npb25zK0NvbmZsaWN0JmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiBvdXRsaW5lOiAzcHggc29saWQgd2hpdGU7ICovXFxufVxcbjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDFmciA1MHB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1pbi13aWR0aDogMTA0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBFMDUwNDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaGVhZGVye1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuXFxuaGVhZGVyXFxubmF2IHVsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBnYXA6IDU0cHg7XFxufVxcblxcbmhlYWRlclxcbm5hdiB1bCBcXG5saSBidXR0b24ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEUwNTA0O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogNnB4IDEycHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmhlYWRlclxcbm5hdiB1bCBsaSBcXG5idXR0b246aG92ZXIge1xcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggMTZweCB3aGl0ZTtcXG59XFxuXFxuaGVhZGVyXFxubmF2IHVsIGxpIFxcbmJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgY29sb3I6ICMwRTA1MDQ7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgZ3JleTtcXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgZ3JleTtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGdyZXk7XFxufVxcblxcbm1haW4jY29udGVudCB7XFxuICBtaW4taGVpZ2h0OiA3NDRweDtcXG4gIG1pbi13aWR0aDogMTE2MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRCMUYwRTtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG4gIHBhZGRpbmc6IDQ0cHggNTJweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbm1haW4jY29udGVudFxcbnNlY3Rpb24jaG9tZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWluLXdpZHRoOiAxMDIwcHg7XFxuICBjb2x1bW4tZ2FwOiA1MnB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxubWFpbiNjb250ZW50XFxuc2VjdGlvbiNob21lXFxuaW1nLmhlcm8taW1hZ2Uge1xcbiAgd2lkdGg6IG1heCg0ODBweCwgNjYlKTtcXG4gIGJvcmRlcjogNHB4IHNvbGlkICNCRTc2NTY7XFxuICBib3JkZXItcmFkaXVzOiA4MHB4IDE0cHg7XFxufVxcblxcbnNlY3Rpb24jaG9tZVxcbmgyIHtcXG4gIGNvbG9yOiAjRUZDM0E0O1xcbiAgZm9udC1mYW1pbHk6ICdQYXNzaW9ucyBDb25mbGljdCcsICdUaW1lcyBOZXcgUm9tYW4nO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiA1LjVyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5zZWN0aW9uI2hvbWVcXG5wIHtcXG4gIGNvbG9yOiAjRUZDM0E0O1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgd2lkdGg6IDcwMHB4XFxufVxcblxcbm1haW4jY29udGVudFxcbnNlY3Rpb24jbWVudSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL21lbnUtYm9hcmQuanBnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogMTAyMHB4O1xcbiAgaGVpZ2h0OiAxNDU0cHg7XFxuICBvdXRsaW5lOiAzcHggc29saWQgI0JFNzY1NjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3gtc2hhZG93OiA2cHggNnB4IDE4cHggIzAzMDIwMTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDI0MHB4IDIxMHB4IDE5MHB4IDIyMHB4O1xcbn1cXG5cXG5tYWluI2NvbnRlbnRcXG5zZWN0aW9uI21lbnVcXG5oMSB7XFxuICBmb250LXNpemU6IDVyZW07XFxuICBmb250LWZhbWlseTogJ1Bhc3Npb25zIENvbmZsaWN0JywgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG4gIGxldHRlci1zcGFjaW5nOiAxMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMzZweDtcXG59XFxuXFxuc2VjdGlvbiNtZW51XFxuZGl2IHtcXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XFxuICBsaW5lLWhlaWdodDogMS4zO1xcbn1cXG5cXG5zZWN0aW9uI21lbnVcXG5kaXYgaDMge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xcbn1cXG5cXG5zZWN0aW9uI21lbnVcXG5kaXYgcHJlIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5zZWN0aW9uI2NvbnRhY3Qge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9icmVhZC1tdWctbGFwdG9wLmpwZyk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xcbiAgYmFja2dyb3VuZC1zaXplOiA5MCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgaGVpZ2h0OiA2ODBweDtcXG4gIHdpZHRoOiAxMDQwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tdG9wOiAtNDBweDtcXG4gIHBhZGRpbmc6IDBweCA1NnB4O1xcbn1cXG5cXG5zZWN0aW9uI2NvbnRhY3QgPlxcbmgxIHtcXG4gIGNvbG9yOiB3aGl0ZSA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbnNlY3Rpb24jY29udGFjdCBcXG5kaXYuY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogNTgwcHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiA2cHg7XFxufVxcblxcbnNlY3Rpb24jY29udGFjdCBcXG5kaXYuY2FyZCBoMixcXG5kaXYuY2FyZCBoNCxcXG5kaXYuY2FyZCBwOm50aC1vZi10eXBlKDIpIHtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG59XFxuXFxuc2VjdGlvbiNjb250YWN0IFxcbmRpdiBhZGRyZXNzI2NvbnRhY3RzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmFkZHJlc3MjY29udGFjdHNcXG5kaXYuaG9sZGVyIHtcXG4gIGdhcDogNXB4O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmRpdi5ob2xkZXJcXG5kaXYubGluZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA2cHg7XFxufVxcblxcbmRpdi5ob2xkZXJcXG5kaXYubGluZVxcbnAubGVmdCB7XFxuICB3aWR0aDogMTUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmFkZHJlc3MjY29udGFjdHNcXG5kaXYuaG9sZGVyIGg0IHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxufVxcblxcbmFkZHJlc3MjY29udGFjdHNcXG5pbWcubWFwIHtcXG4gIGdyaWQtcm93OiAxIC8gMztcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCAjMEUwNTA0O1xcbn1cXG5cXG5hZGRyZXNzI2NvbnRhY3RzXFxuZGl2IGltZy5zdmcge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBmbGV4OiAxIDEgYXV0bztcXG59XFxuXFxuc2VjdGlvbiNjcmVkaXRzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDI1cHg7XFxuICB3aWR0aDogOTAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbnNlY3Rpb24jY3JlZGl0cyA+XFxuaDIge1xcbiAgbWFyZ2luLXRvcDogMjZweDtcXG59XFxuXFxuc2VjdGlvbiNjcmVkaXRzID5cXG5hIGVtIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggOHB4IHdoaXRlO1xcbn1cXG5cXG5zZWN0aW9uI2NyZWRpdHMgPlxcbmEgZW06aG92ZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggOHB4IGJsYWNrO1xcbn1cXG5cXG5zZWN0aW9uI2NyZWRpdHNcXG5kaXYuaW1hZ2VDYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMjJweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICM0QjFGMEU7XFxufVxcblxcbmRpdi5pbWFnZUNhcmRzXFxuZGl2LmNhcmQge1xcbiAgYm9yZGVyOiAzcHggc29saWQgI0JFNzY1NjtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTRweCAjNEIxRjBFO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VGQzNBNDtcXG59XFxuXFxuZGl2LmltYWdlQ2FyZHNcXG5kaXYuY2FyZDpob3ZlciB7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDE0cHggI0VGQzNBNDtcXG59XFxuXFxuc2VjdGlvbiNjcmVkaXRzXFxuaW1nLmltYWdlLWNyZWRpdCB7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbmRpdi5jYXJkIGFcXG4+IGVtIHtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDhweCAjNEIxRjBFO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbmRpdi5jYXJkIGFcXG4+IGVtOmhvdmVyIHtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDhweCAjNEIxRjBFO1xcbiAgY29sb3I6ICM0QjFGMEU7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIgYSBcXG5pbWd7XFxuICB3aWR0aDogMjZweDtcXG4gIGhlaWdodDogMjZweDtcXG4gIC8qIGJvcmRlci1yYWRpdXM6IDUwJTsgKi9cXG59XFxuXFxuZm9vdGVyIGEgXFxuaW1nOmhvdmVyIHtcXG4gIC8qIGJveC1zaGFkb3c6IDAuNXB4IDAuNXB4IDEycHggd2hpdGU7ICovXFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzUwMCUpIGh1ZS1yb3RhdGUoMjUyZGVnKSBicmlnaHRuZXNzKDEwNCUpIGNvbnRyYXN0KDEwMCUpIGRyb3Atc2hhZG93KDAgMCAwLjc1cmVtIHdoaXRlKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBNYXAgZnJvbSBcIi4uL2ltYWdlcy9nb29nbGVNYXAucG5nXCI7XG5pbXBvcnQgc3RvcmVMb2MgZnJvbSBcIi4uL2ltYWdlcy9zdG9yZS1tYXJrZXIuc3ZnXCI7XG5pbXBvcnQgcGhvbmVJbSBmcm9tIFwiLi4vaW1hZ2VzL3Bob25lLnN2Z1wiO1xuXG5jb25zdCBjb250YWN0Q29udGVudCA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRhY3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGNvbnRhY3RTZWN0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdFwiKTtcblxuICBjb25zdCBwaG9uZUltYWdlID0gbmV3IEltYWdlKCk7XG4gIHBob25lSW1hZ2Uuc3JjID0gcGhvbmVJbTtcbiAgcGhvbmVJbWFnZS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJQaG9uZSBJY29uXCIpO1xuICBwaG9uZUltYWdlLmNsYXNzTGlzdC5hZGQoXCJzdmdcIik7XG5cbiAgY29uc3Qgc3RvcmVJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBzdG9yZUltYWdlLnNyYyA9IHN0b3JlTG9jO1xuICBzdG9yZUltYWdlLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlN0b3JlIExvY2F0aW9uIEljb25cIik7XG4gIHN0b3JlSW1hZ2UuY2xhc3NMaXN0LmFkZChcInN2Z1wiKTtcblxuICBjb25zdCBtYXAgPSBuZXcgSW1hZ2UoKTtcbiAgbWFwLnNyYyA9IE1hcDtcbiAgbWFwLmNsYXNzTGlzdC5hZGQoXCJtYXBcIik7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkZXIuaW5uZXJIVE1MID0gXCJDb250YWN0c1wiO1xuXG4gIGNvbnN0IGluZm9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5mb0NhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG5cbiAgY29uc3QgaW5mb0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaW5mb0hlYWRlci5pbm5lckhUTUwgPSBcIjxlbT5CcmVhZCAmIEJ1dHRlciBDYWZlPC9lbT5cIjtcblxuICBjb25zdCBvcGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBvcGVuLnRleHRDb250ZW50ID0gXCJPcGVuIEhvdXJzXCI7XG5cbiAgY29uc3QgZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGRheS50ZXh0Q29udGVudCA9IFwiTW9uZGF5IH4gU3VuZGF5XCI7XG5cbiAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0aW1lLnRleHRDb250ZW50ID0gXCIwODAwSCB+IDIxMzBIXCI7XG5cbiAgY29uc3QgY29udGFjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYWRkcmVzc1wiKTtcbiAgY29udGFjdHMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0c1wiKTtcblxuICBjb25zdCB0ZWxIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZWxIb2xkZXIuY2xhc3NMaXN0LmFkZChcImhvbGRlclwiKTtcblxuICBjb25zdCB0ZWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIHRlbEhlYWRlci50ZXh0Q29udGVudCA9IFwiVGVsLiBOby46XCI7XG5cbiAgY29uc3QgdGVsTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0ZWxMaW5lLmNsYXNzTGlzdC5hZGQoJ2xpbmUnKTtcblxuICBjb25zdCB0ZWxObyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0ZWxOby50ZXh0Q29udGVudCA9IFwiKDQxNykgNTU1LTU2NzhcIjtcbiAgXG4gIHRlbExpbmUuYXBwZW5kQ2hpbGQocGhvbmVJbWFnZSk7XG4gIHRlbExpbmUuYXBwZW5kQ2hpbGQodGVsTm8pO1xuICBcbiAgdGVsSG9sZGVyLmFwcGVuZENoaWxkKHRlbEhlYWRlcik7XG4gIHRlbEhvbGRlci5hcHBlbmRDaGlsZCh0ZWxMaW5lKTtcblxuICBjb25zdCBhZGRyZXNzSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWRkcmVzc0hvbGRlci5jbGFzc0xpc3QuYWRkKFwiaG9sZGVyXCIpO1xuXG4gIGNvbnN0IGFkZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgYWRkSGVhZGVyLnRleHRDb250ZW50ID0gXCJBZGRyZXNzOlwiO1xuXG4gIGNvbnN0IGFkZHJlc3NMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFkZHJlc3NMaW5lLmNsYXNzTGlzdC5hZGQoJ2xpbmUnKTtcblxuICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGFkZHJlc3MudGV4dENvbnRlbnQgPSBcIjE1NSBFYXN0IFdvb2QgUmQsIFNraWxsIENhc3RsZSwgQ29tcGV0ZW5jZSBLaW5nZG9tLlwiO1xuICBhZGRyZXNzLmNsYXNzTGlzdC5hZGQoJ2xlZnQnKTtcblxuICBhZGRyZXNzTGluZS5hcHBlbmRDaGlsZChzdG9yZUltYWdlKTtcbiAgYWRkcmVzc0xpbmUuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5cbiAgYWRkcmVzc0hvbGRlci5hcHBlbmRDaGlsZChhZGRIZWFkZXIpO1xuICBhZGRyZXNzSG9sZGVyLmFwcGVuZENoaWxkKGFkZHJlc3NMaW5lKTtcblxuICBjb250YWN0cy5hcHBlbmRDaGlsZCh0ZWxIb2xkZXIpO1xuICBjb250YWN0cy5hcHBlbmRDaGlsZChhZGRyZXNzSG9sZGVyKTtcbiAgY29udGFjdHMuYXBwZW5kQ2hpbGQobWFwKTtcblxuICBpbmZvQ2FyZC5hcHBlbmRDaGlsZChpbmZvSGVhZGVyKTtcbiAgaW5mb0NhcmQuYXBwZW5kQ2hpbGQob3Blbik7XG4gIGluZm9DYXJkLmFwcGVuZENoaWxkKGRheSk7XG4gIGluZm9DYXJkLmFwcGVuZENoaWxkKHRpbWUpO1xuICBpbmZvQ2FyZC5hcHBlbmRDaGlsZChjb250YWN0cyk7XG5cbiAgbWFwLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkxvY2F0aW9uIEltYWdlXCIpO1xuXG4gIGNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKGluZm9DYXJkKTtcblxuICByZXR1cm4geyBjb250YWN0U2VjdGlvbiB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdENvbnRlbnQ7XG4iLCJpbXBvcnQgdG9hc3ROQ29mZmVlIGZyb20gJy4uL2ltYWdlcy9icmVhZC1jb2ZmZWUuanBnJzsvL2p1QW5udW5cbmltcG9ydCBib2FyZCBmcm9tICcuLi9pbWFnZXMvbWVudS1ib2FyZC5qcGcnOyAvL21pdGlcbmltcG9ydCB0YWJsZSBmcm9tICcuLi9pbWFnZXMvYnJlYWQtbXVnLWxhcHRvcC5qcGcnXG5cbmNvbnN0IGNyZWRpdHNDb250ZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY3JlZGl0c1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgY3JlZGl0c1NlY3Rpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjcmVkaXRzXCIpO1xuICBcbiAgY29uc3QgaWNvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGljb25UZXh0LnRleHRDb250ZW50ID0gJ0ljb25zIGFyZSBmcm9tOidcbiAgY29uc3QgaWNvblNpdGUgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICBpY29uU2l0ZS5pbm5lckhUTUwgPSAnPGVtPk1hdGVyaWFsIERlc2lnbiBJY29uczwvZW0+J1xuICBpY29uU2l0ZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9tYXRlcmlhbGRlc2lnbmljb25zLmNvbS8nKTtcbiAgY3JlZGl0c1NlY3Rpb24uYXBwZW5kQ2hpbGQoaWNvblRleHQpO1xuICBjcmVkaXRzU2VjdGlvbi5hcHBlbmRDaGlsZChpY29uU2l0ZSk7XG4gIFxuICBjb25zdCBpbWFnZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBpbWFnZVRleHQudGV4dENvbnRlbnQgPSAnSW1hZ2VzJ1xuICBjcmVkaXRzU2VjdGlvbi5hcHBlbmRDaGlsZChpbWFnZVRleHQpO1xuXG4gIGNvbnN0IGNhcmRIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjYXJkSG9sZGVyLmNsYXNzTGlzdC5hZGQoJ2ltYWdlQ2FyZHMnKTtcbiAgY3JlZGl0c1NlY3Rpb24uYXBwZW5kQ2hpbGQoY2FyZEhvbGRlcik7XG5cbiAgXG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IDI7IGkgKz0gMSkge1xuICAgIGNvbnN0IGltZ0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWdDYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2ltYWdlLWNyZWRpdCcpO1xuICAgIGNvbnN0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAuaW5uZXJIVE1MID0gJ1Bob3RvIGJ5J1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdlbScpO1xuICAgIGNvbnN0IG5hbWVBbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgc3dpdGNoIChpKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGltYWdlLnNyYyA9IGJvYXJkO1xuICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdQYXN0cmllcyBvbiBlZGdlIG9mIFRhYmxlJyk7XG4gICAgICAgIGFuY2hvci5hcHBlbmRDaGlsZChpbWFnZSlcbiAgICAgICAgYW5jaG9yLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvcVlyZVA5UU9kcmsnKVxuICAgICAgICBpbWdDYXJkLmFwcGVuZENoaWxkKGFuY2hvcik7XG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSAnTWl0aSdcbiAgICAgICAgbmFtZUFuY2hvci5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly91bnNwbGFzaC5jb20vQG1pdGlmb3RvcycpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaW1hZ2Uuc3JjID0gdGFibGU7XG4gICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgJ0xhcHRvcCBicmVhZCBhbmQgbXVnJyk7XG4gICAgICAgIGFuY2hvci5hcHBlbmRDaGlsZChpbWFnZSlcbiAgICAgICAgYW5jaG9yLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL3d3dy5wZXhlbHMuY29tL3Bob3RvL2JsdWUtY2VyYW1pYy1tdWctYmVzaWRlLWN1cGNha2UtMTM0MDQ2Mi8nKVxuICAgICAgICBpbWdDYXJkLmFwcGVuZENoaWxkKGFuY2hvcik7XG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSAnTGlzYSBGb3Rpb3MnXG4gICAgICAgIG5hbWVBbmNob3Iuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vd3d3LnBleGVscy5jb20vQGZvdGlvcy1waG90b3MvJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaW1hZ2Uuc3JjID0gdG9hc3ROQ29mZmVlO1xuICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdUb2FzdCBhbmQgQ29mZmVlJyk7XG4gICAgICAgIGFuY2hvci5hcHBlbmRDaGlsZChpbWFnZSlcbiAgICAgICAgYW5jaG9yLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL3BpeGFiYXkuY29tL3Bob3Rvcy9jb2ZmZWUtd2l0aC1taWxrLWJyZWFkLWFuZC1idXR0ZXItMjQzNTI1NC8nKVxuICAgICAgICBpbWdDYXJkLmFwcGVuZENoaWxkKGFuY2hvcik7XG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSAnSnVsaWFuYSBBbm51bmNpYXRvJ1xuICAgICAgICBuYW1lQW5jaG9yLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL3BpeGFiYXkuY29tL3VzZXJzL2p1YW5udW4tNTcxNjYyNS8nKTtcbiAgICB9XG4gICAgaW1nQ2FyZC5hcHBlbmRDaGlsZChwKTtcbiAgICBuYW1lQW5jaG9yLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIGltZ0NhcmQuYXBwZW5kQ2hpbGQobmFtZUFuY2hvcik7XG4gICAgY2FyZEhvbGRlci5hcHBlbmRDaGlsZChpbWdDYXJkKTtcbiAgfVxuXG5cbiAgcmV0dXJuIHtjcmVkaXRzU2VjdGlvbn1cbn0pICgpO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVkaXRzQ29udGVudDsiLCJcbmNvbnN0IG1lbnVDb250ZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbWVudVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgbWVudVNlY3Rpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51XCIpO1xuXG4gIGNvbnN0IEJyZWFkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgQnJlYWRUZXh0LmlubmVySFRNTCA9IFwiTUVOVVwiO1xuICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZChCcmVhZFRleHQpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IDM7IGkgKz0gMSkge1xuICAgIGNvbnN0IG1lbnVCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cbiAgICBzd2l0Y2ggKGkpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJTYW5kd2hpY2ggLyBDYWtlXCI7XG4gICAgICAgIGZvciAobGV0IHBvaW50ID0gMDsgcG9pbnQgPD0gNjsgcG9pbnQgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgc3dpdGNoIChwb2ludCkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IGA8cHJlPkdhcmxpYyBCcmVhZCAgICAgICAgICAgICAgICDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwICAgICAgJDI0Ljk5PC9wcmU+YDtcbiAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYDxwcmU+Q3JvaXNzYW50cyAgICAgICAgICAgICAgICAgIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAgICAgICAkMjQuOTk8L3ByZT5gO1xuICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBgPHByZT5DcmF3ZmlzaCAmIEJyZWFkICAgICAgICAgICAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCAgICAgICQyNC45OTwvcHJlPmA7XG4gICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IGA8cHJlPkNsYXNzaWMgVmFuaWxsYSBDYWtlICAgICAgICDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwICAgICAgJDI0Ljk5PC9wcmU+YDtcbiAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYDxwcmU+Q2hvY29sYXRlIExhdmEgQ2FrZSAgICAgICAgIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAgICAgICAkMjQuOTk8L3ByZT5gO1xuICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBgPHByZT5TdHJhd2JlcnJ5IFNob3J0IENha2UgICAgICAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCAgICAgICQyNC45OTwvcHJlPmA7XG4gICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBgPHByZT5Sb2FzdCBCZWVmIFNhbmR3aWNoICAgICAgICAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCAgICAgICQyNC45OTwvcHJlPmA7XG4gICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkNvZmZlZVwiO1xuICAgICAgICBmb3IgKGxldCBwb2ludCA9IDA7IHBvaW50IDw9IDY7IHBvaW50ICs9IDEpIHtcbiAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgIHN3aXRjaCAocG9pbnQpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBgPHByZT5BbWVyaWNhbm8gICAgICAgICAgICAgICAgICAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCAgICAgICQyNC45OTwvcHJlPmA7XG4gICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IGA8cHJlPkVzcHJlc3NvICAgICAgICAgICAgICAgICAgICDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwICAgICAgJDI0Ljk5PC9wcmU+YDtcbiAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYDxwcmU+RG9wcGlvICAgICAgICAgICAgICAgICAgICAgIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAgICAgICAkMjQuOTk8L3ByZT5gO1xuICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBgPHByZT5MYXR0ZSAgICAgICAgICAgICAgICAgICAgICAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCAgICAgICQyNC45OTwvcHJlPmA7XG4gICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IGA8cHJlPkNhcHB1Y2Npbm8gICAgICAgICAgICAgICAgICDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwICAgICAgJDI0Ljk5PC9wcmU+YDtcbiAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYDxwcmU+TW9jaGEgICAgICAgICAgICAgICAgICAgICAgIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAgICAgICAkMjQuOTk8L3ByZT5gO1xuICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYDxwcmU+QmxhY2sgICAgICAgICAgICAgICAgICAgICAgIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAgICAgICAkMjQuOTk8L3ByZT5gO1xuICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJPdGhlciBCZXZlcmFnZXNcIjtcbiAgICAgICAgZm9yIChsZXQgcG9pbnQgPSAwOyBwb2ludCA8PSA0OyBwb2ludCArPSAxKSB7XG4gICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICBzd2l0Y2ggKHBvaW50KSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYDxwcmU+V2F0ZXJtZWxvbiBKdWljZSAgICAgICAgICAgIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAgICAgICAkMjQuOTk8L3ByZT5gO1xuICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBgPHByZT5MZW1vbmFkZSBKb2x0ICAgICAgICAgICAgICAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCAgICAgICQyNC45OTwvcHJlPmA7XG4gICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IGA8cHJlPk9yYW5nZSBHcm92ZSAgICAgICAgICAgICAgICDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwICAgICAgJDI0Ljk5PC9wcmU+YDtcbiAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYDxwcmU+QnVkd2Vpc2VyICAgICAgICAgICAgICAgICAgIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAgICAgICAkMjQuOTk8L3ByZT5gO1xuICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYDxwcmU+Qm90dGxlZCBXYXRlciAgICAgICAgICAgICAgIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAgICAgICAkMjQuOTk8L3ByZT5gO1xuICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiUGFzdGFcIjtcbiAgICAgICAgZm9yIChsZXQgcG9pbnQgPSAwOyBwb2ludCA8PSAzOyBwb2ludCArPSAxKSB7XG4gICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICBzd2l0Y2ggKHBvaW50KSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYDxwcmU+RmV0dHVjY2luZSBBbGZyZWRvICAgICAgICAgIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAgICAgICAkMjQuOTk8L3ByZT5gO1xuICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBgPHByZT5DaGlja2VuIFRldHJhenppbmkgICAgICAgICAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCAgICAgICQyNC45OTwvcHJlPmA7XG4gICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IGA8cHJlPlN0ZWFraG91c2UgUGFzdGEgICAgICAgICAgICDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwICAgICAgJDI0Ljk5PC9wcmU+YDtcbiAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IGA8cHJlPk1lYXRiYWxscyBhbmQgU3BhZ2hldHRpICAgICDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwIOK4sCDiuLAg4riwICAgICAgJDI0Ljk5PC9wcmU+YDtcbiAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbWVudUJsb2NrLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgbWVudUJsb2NrLmFwcGVuZENoaWxkKGxpc3QpO1xuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKG1lbnVCbG9jayk7XG4gIH1cblxuICByZXR1cm4geyBtZW51U2VjdGlvbiB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbWVudUNvbnRlbnQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9jc3Mvc3R5bGUuY3NzXCI7XG5pbXBvcnQgR2l0SHViIGZyb20gXCIuL2ltYWdlcy9HaXRIdWItTWFyay1MaWdodC02NHB4LnBuZ1wiO1xuaW1wb3J0IEhlcm9JbWFnZSBmcm9tIFwiLi9pbWFnZXMvYnJlYWQtY29mZmVlLmpwZ1wiO1xuaW1wb3J0IG1lbnVDb250ZW50IGZyb20gXCIuL3NjcmlwdHMvbWVudVwiO1xuaW1wb3J0IGNvbnRhY3RDb250ZW50IGZyb20gXCIuL3NjcmlwdHMvY29udGFjdFwiO1xuaW1wb3J0IGNyZWRpdHNDb250ZW50IGZyb20gXCIuL3NjcmlwdHMvY3JlZGl0c1wiO1xuXG5jb25zdCBiYXNlRE9NID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4gIC8vIE1haW4gSGVhZGVyIC8vXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIGNvbnN0IG5hdlVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBidG5MaXN0ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IDM7IGkgKz0gMSkge1xuICAgIGNvbnN0IG5hdkxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IG5hdkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBzd2l0Y2ggKGkpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgbmF2QnRuLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgICAgIG5hdkJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWVcIik7XG4gICAgICAgIG5hdkxpLmFwcGVuZENoaWxkKG5hdkJ0bik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBuYXZCdG4udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICAgICAgbmF2QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudVwiKTtcbiAgICAgICAgbmF2TGkuYXBwZW5kQ2hpbGQobmF2QnRuKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIG5hdkJ0bi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICAgICAgICBuYXZCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhYm91dFwiKTtcbiAgICAgICAgbmF2TGkuYXBwZW5kQ2hpbGQobmF2QnRuKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBuYXZCdG4udGV4dENvbnRlbnQgPSBcIkNyZWRpdHNcIjtcbiAgICAgICAgbmF2QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY3JlZGl0XCIpO1xuICAgICAgICBuYXZMaS5hcHBlbmRDaGlsZChuYXZCdG4pO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgYnRuTGlzdC5wdXNoKG5hdkxpKTtcbiAgICBuYXZVbC5hcHBlbmRDaGlsZChuYXZMaSk7XG4gIH1cblxuICAvLyBoMS50ZXh0Q29udGVudCA9ICdCcmVhZCAmIEJ1dHRlciBDYWZlJ1xuICBuYXYuYXBwZW5kQ2hpbGQobmF2VWwpO1xuICAvLyBoZWFkZXIuYXBwZW5kQ2hpbGQoaDEpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcbiAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIC8vIE1haW4gQ29udGVudCAvL1xuXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgbWFpbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRlbnRcIik7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChtYWluKTtcblxuICAvLyBNYWluIEZvb3RlciAvL1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBjb25zdCBnaXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGdpdExpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9SaGF6elhJWFwiKTtcbiAgY29uc3QgZ2l0aHViID0gbmV3IEltYWdlKCk7XG4gIGdpdGh1Yi5zcmMgPSBHaXRIdWI7XG5cbiAgZ2l0TGluay5hcHBlbmRDaGlsZChnaXRodWIpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0TGluayk7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gIHJldHVybiB7IG1haW4sIGJ0bkxpc3QgfTtcbn0pKCk7XG5cbmNvbnN0IGhvbWVDb250ZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgaG9tZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgaG9tZVNlY3Rpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lXCIpO1xuXG4gIGNvbnN0IGhlcm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBoZXJvVGV4dC5pbm5lckhUTUwgPSBcIkJyZWFkICYgQnV0dGVyIENhZmVcIjtcblxuICBjb25zdCBoZXJvSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgaGVyb0ltYWdlLnNyYyA9IEhlcm9JbWFnZTtcbiAgaGVyb0ltYWdlLmNsYXNzTGlzdC5hZGQoXCJoZXJvLWltYWdlXCIpO1xuICBoZXJvSW1hZ2Uuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiVG9hc3QgQnJlYWQgYW5kIENvZmZlZVwiKTtcblxuICBjb25zdCBzdWJIZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHN1Ykhlcm8uaW5uZXJIVE1MID0gYEVzdGFibGlzaGVkIGluIDE5MjAncywgPGVtPkJyZWFkICYgQnV0dGVyIENhZmU8L2VtPiBoYXMgYmVlbiB0aGUgaG9tZSBcbiAgICBmb3IgcGVvcGxlLCB3aG8gaXMgbG9va2luZyBmb3IgPGVtPmRlbGlnaHRmdWw8L2VtPiBmb29kcyBtYWRlIGZyb20gPHN0cm9uZz5oaWdoIHF1YWxpdHk8L3N0cm9uZz4gaW5ncmVkaWVudHMuIFN1cHBvcnRzIGRvbWVzdGljXG4gICAgZmFybWVycywgdGhyb3VnaCBzb3VyY2luZyBsb2NhbCBwcm9kdWNlIGRpcmVjdGx5IGZyb20gdGhlbS5gO1xuXG4gIGhvbWVTZWN0aW9uLmFwcGVuZENoaWxkKGhlcm9UZXh0KTtcbiAgaG9tZVNlY3Rpb24uYXBwZW5kQ2hpbGQoaGVyb0ltYWdlKTtcbiAgaG9tZVNlY3Rpb24uYXBwZW5kQ2hpbGQoc3ViSGVybyk7XG4gIGJhc2VET00ubWFpbi5hcHBlbmRDaGlsZChob21lU2VjdGlvbik7XG4gIHJldHVybiB7IGhvbWVTZWN0aW9uIH07XG59KSgpO1xuXG5cbmNvbnN0IGJpbmRFdmVudHMgPSAoZnVuY3Rpb24gKCkge1xuICBiYXNlRE9NLmJ0bkxpc3RbMF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBlbGVtZW50ID0gYmFzZURPTS5tYWluLnF1ZXJ5U2VsZWN0b3IoXCJzZWN0aW9uXCIpO1xuICAgIGlmIChCb29sZWFuKGVsZW1lbnQpKSB7XG4gICAgICBpZiAoZWxlbWVudCAhPT0gaG9tZUNvbnRlbnQuaG9tZVNlY3Rpb24pIHtcbiAgICAgICAgYmFzZURPTS5tYWluLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICBiYXNlRE9NLm1haW4uYXBwZW5kQ2hpbGQoaG9tZUNvbnRlbnQuaG9tZVNlY3Rpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGJhc2VET00uYnRuTGlzdFsxXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBiYXNlRE9NLm1haW4ucXVlcnlTZWxlY3RvcihcInNlY3Rpb25cIik7XG4gICAgaWYgKEJvb2xlYW4oZWxlbWVudCkpIHtcbiAgICAgIGlmIChlbGVtZW50ICE9PSBtZW51Q29udGVudC5tZW51U2VjdGlvbikge1xuICAgICAgICBiYXNlRE9NLm1haW4ucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIGJhc2VET00ubWFpbi5hcHBlbmRDaGlsZChtZW51Q29udGVudC5tZW51U2VjdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgYmFzZURPTS5idG5MaXN0WzJdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgZWxlbWVudCA9IGJhc2VET00ubWFpbi5xdWVyeVNlbGVjdG9yKFwic2VjdGlvblwiKTtcbiAgICBpZiAoQm9vbGVhbihlbGVtZW50KSkge1xuICAgICAgaWYgKGVsZW1lbnQgIT09IGNvbnRhY3RDb250ZW50LmNvbnRhY3RTZWN0aW9uKSB7XG4gICAgICAgIGJhc2VET00ubWFpbi5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgYmFzZURPTS5tYWluLmFwcGVuZENoaWxkKGNvbnRhY3RDb250ZW50LmNvbnRhY3RTZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBiYXNlRE9NLmJ0bkxpc3RbM10uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBlbGVtZW50ID0gYmFzZURPTS5tYWluLnF1ZXJ5U2VsZWN0b3IoXCJzZWN0aW9uXCIpO1xuICAgIGlmIChCb29sZWFuKGVsZW1lbnQpKSB7XG4gICAgICBpZiAoZWxlbWVudCAhPT0gY3JlZGl0c0NvbnRlbnQuY3JlZGl0c1NlY3Rpb24pIHtcbiAgICAgICAgYmFzZURPTS5tYWluLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICBiYXNlRE9NLm1haW4uYXBwZW5kQ2hpbGQoY3JlZGl0c0NvbnRlbnQuY3JlZGl0c1NlY3Rpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9