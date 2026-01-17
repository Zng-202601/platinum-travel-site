/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/assets/scripts/App.js"
/*!***********************************!*\
  !*** ./app/assets/scripts/App.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ \"./app/assets/styles/styles.css\");\n/* harmony import */ var _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/MobileMenu */ \"./app/assets/scripts/modules/MobileMenu.js\");\n/* harmony import */ var _modules_RevealOnScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/RevealOnScroll */ \"./app/assets/scripts/modules/RevealOnScroll.js\");\n/* harmony import */ var _modules_stickyHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/stickyHeader */ \"./app/assets/scripts/modules/stickyHeader.js\");\n\n\n\n\n\nlet stickyHeader = new _modules_stickyHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nnew _modules_RevealOnScroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"](document.querySelectorAll(\".feature-item\"), 75);\nnew _modules_RevealOnScroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"](document.querySelectorAll(\".testimonial\"), 50);\n\nlet mobileMenu = new _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nif (false) // removed by dead control flow\n{}\n\n\n//# sourceURL=webpack://platinum-travel-site/./app/assets/scripts/App.js?\n}");

/***/ },

/***/ "./app/assets/scripts/modules/MobileMenu.js"
/*!**************************************************!*\
  !*** ./app/assets/scripts/modules/MobileMenu.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass MobileMenu {\r\n  constructor() {\r\n    this.menuIcon = document.querySelector(\".site-header__menu-icon\");\r\n    this.menuContent = document.querySelector(\".site-header__menu-content\");\r\n    this.sideHeader = document.querySelector(\".site-header\");\r\n    this.events();\r\n  }\r\n\r\n  events() {\r\n    this.menuIcon.addEventListener(\"click\", () => this.toggleTheMenu());\r\n  }\r\n\r\n  toggleTheMenu() {\r\n    this.menuContent.classList.toggle(\"site-header__menu-content--is-visible\");\r\n    this.sideHeader.classList.toggle(\"site-header--is-expanded\");\r\n    this.menuIcon.classList.toggle(\"site-header__menu-icon--close-x\");\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileMenu);\r\n\n\n//# sourceURL=webpack://platinum-travel-site/./app/assets/scripts/modules/MobileMenu.js?\n}");

/***/ },

/***/ "./app/assets/scripts/modules/RevealOnScroll.js"
/*!******************************************************!*\
  !*** ./app/assets/scripts/modules/RevealOnScroll.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/throttle */ \"./node_modules/lodash/throttle.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nclass RevealOnScroll {\r\n  constructor(els, revealPoint) {\r\n    this.itemsToReveal = els;\r\n    this.revealPoint = revealPoint;\r\n    this.browserHeight = window.innerHeight;\r\n    this.hideInitially();\r\n    this.scrollThrottle = lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(this.calcCaller, 200).bind(this);\r\n    this.events();\r\n  }\r\n\r\n  events() {\r\n    window.addEventListener(\"scroll\", this.scrollThrottle);\r\n    window.addEventListener(\r\n      \"resize\",\r\n      lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(() => {\r\n        console.log(\"broswe resize хийж дууслаа\");\r\n        this.browserHeight = window.innerHeight;\r\n      }, 300)\r\n    );\r\n  }\r\n\r\n  calcCaller() {\r\n    console.log(\"scroll функц ажиллаа\");\r\n    this.itemsToReveal.forEach((el) => {\r\n      if (el.isRevealed == false) {\r\n        this.calculateIfScrolledTo(el);\r\n      }\r\n    });\r\n  }\r\n\r\n  calculateIfScrolledTo(el) {\r\n    if (window.scrollY + this.browserHeight > el.offsetTop) {\r\n      console.log(\"Тооцоолол хийгдэж бна\");\r\n      let scrollPercent =\r\n        (el.getBoundingClientRect().y / this.browserHeight) * 100;\r\n      if (scrollPercent < this.revealPoint) {\r\n        el.classList.add(\"reveal-item--is-visible\");\r\n        el.isRevealed = true;\r\n        if (el.isLastItem) {\r\n          window.removeEventListener(\"scroll\", this.scrollThrottle);\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  hideInitially() {\r\n    this.itemsToReveal.forEach((el) => {\r\n      el.classList.add(\"reveal-item\");\r\n      el.isRevealed = false;\r\n    });\r\n    this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RevealOnScroll);\r\n\n\n//# sourceURL=webpack://platinum-travel-site/./app/assets/scripts/modules/RevealOnScroll.js?\n}");

/***/ },

/***/ "./app/assets/scripts/modules/stickyHeader.js"
/*!****************************************************!*\
  !*** ./app/assets/scripts/modules/stickyHeader.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/throttle */ \"./node_modules/lodash/throttle.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nclass StickyHeader {\r\n  constructor() {\r\n    this.siteHeader = document.querySelector(\".site-header\");\r\n    this.pageSections = document.querySelectorAll(\".page-section\");\r\n    this.browserHeight = window.innerHeight;\r\n    this.previousScrollY = window.scrollY;\r\n    this.events();\r\n  }\r\n\r\n  events() {\r\n    window.addEventListener(\r\n      \"scroll\",\r\n      lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(() => this.runOnScroll(), 200)\r\n    );\r\n    window.addEventListener(\r\n      \"resize\",\r\n      lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(() => {\r\n        console.log(\"broswe resize хийж дууслаа\");\r\n        this.browserHeight = window.innerHeight;\r\n      }, 300)\r\n    );\r\n  }\r\n\r\n  runOnScroll() {\r\n    this.checkScrollDirection();\r\n    if (window.scrollY > 60) {\r\n      this.siteHeader.classList.add(\"site-header--dark\");\r\n    } else {\r\n      this.siteHeader.classList.remove(\"site-header--dark\");\r\n    }\r\n\r\n    this.pageSections.forEach((el) => this.calcSection(el));\r\n  }\r\n\r\n  checkScrollDirection() {\r\n    if (window.scrollY > this.previousScrollY) {\r\n      this.scrollDirection = \"down\";\r\n    } else {\r\n      this.scrollDirection = \"up\";\r\n    }\r\n\r\n    this.previousScrollY = window.scrollY;\r\n  }\r\n\r\n  calcSection(el) {\r\n    if (\r\n      window.scrollY + this.browserHeight > el.offsetTop &&\r\n      window.scrollY < el.offsetTop + el.offsetHeight\r\n    ) {\r\n      let scrollPercent =\r\n        (el.getBoundingClientRect().y / this.browserHeight) * 100;\r\n      if (\r\n        (scrollPercent < 18 &&\r\n          scrollPercent > -0.1 &&\r\n          this.scrollDirection == \"down\") ||\r\n        (scrollPercent < 33 && this.scrollDirection == \"up\")\r\n      ) {\r\n        let matchinglink = el.getAttribute(\"data-matching-link\");\r\n\r\n        document\r\n          .querySelectorAll(`.primary-nav a:not(${matchinglink})`)\r\n          .forEach((el) => el.classList.remove(\"is-current-link\"));\r\n\r\n        document.querySelector(matchinglink).classList.add(\"is-current-link\");\r\n      }\r\n    }\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StickyHeader);\r\n\n\n//# sourceURL=webpack://platinum-travel-site/./app/assets/scripts/modules/stickyHeader.js?\n}");

/***/ },

/***/ "./app/assets/styles/styles.css"
/*!**************************************!*\
  !*** ./app/assets/styles/styles.css ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./app/assets/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://platinum-travel-site/./app/assets/styles/styles.css?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./app/assets/styles/styles.css"
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./app/assets/styles/styles.css ***!
  \**************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the \\`main\\` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on \\`h1\\` elements within \\`section\\` and\n * \\`article\\` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd \\`em\\` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd \\`em\\` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent \\`sub\\` and \\`sup\\` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from \\`fieldset\\` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    \\`fieldset\\` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to \\`inherit\\` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n\nhtml {\n    scroll-behavior: smooth;\n}\n\nbody {\n    font-family: \"Roboto\", sans-serif;\n    color: #333;\n}\n\nimg {\n    max-width: 100%;\n    height: auto;\n}\n\n* {\n    box-sizing: border-box;\n}\n\na {\n    color: #d59541;\n}\n\n.large-hero {\n  border-bottom: 10px solid #2f5572;\n  position: relative;\n}\n\n.large-hero__image {\n    display: block;\n  }\n\n.large-hero__text-content {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    left: 0;\n    width: 100%;\n    text-align: center;\n  }\n\n.large-hero__title {\n    padding-top: 60px;\n    font-weight: 300;\n    color: #2f5572;\n    margin: 0;\n    font-size: 1.6rem;\n  }\n\n@media(min-width: 530px) {\n\n.large-hero__title {\n      font-size: 4.5rem\n  }\n    }\n\n.large-hero__subtitle {\n    font-weight: 300;\n    color: #2f5572;\n    font-size: 1.1rem;\n    margin: 0;\n  }\n\n@media(min-width: 530px) {\n\n.large-hero__subtitle {\n      font-size: 2.9rem\n  }\n    }\n\n@media(min-width: 880px) {\n\n.large-hero__subtitle {\n      font-size: 2.9rem\n  }\n    }\n\n@media(min-width: 1200px) {\n\n.large-hero__subtitle {\n      font-size: 2.9rem\n  }\n    }\n\n.large-hero__description {\n    color: #fff;\n    font-size: 1.2rem;\n    font-weight: 100;\n    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);\n    max-width: 30rem;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n@media(min-width: 530px) {\n\n.large-hero__description {\n      font-size: 1.875rem\n  }\n    }\n\n.btn {\n    background-color: #2f5572;\n    color: #fff;\n    text-decoration: none;\n    padding: 0.75rem 1.2rem;\n    display: inline-block;\n}\n\n.btn--orange {\n        background-color: #d59541;\n    }\n\n.btn--large {        \n        padding: 1.1rem 1.9rem;\n    }\n\n@media(min-width: 530px) {\n\n.btn--large {\n            font-size: 1.25rem\n    }\n    }\n\n.wrapper {\n  overflow: hidden;\n  padding-left: 18px;\n  padding-right: 18px;\n  max-width: 1236px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.wrapper--medium {\n    max-width: 976px;\n  }\n\n.wrapper--no-padding-until-medium {\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n@media(min-width: 880px) {\n\n.wrapper--no-padding-until-medium {\n      padding-left: 18px;\n      padding-right: 18px\n  }\n    }\n\n.wrapper .wrapper {\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n.wrapper--b-margin {\n    margin-bottom: 4rem;\n  }\n\n.page-section {\n    padding: 0.5rem 0;\n\n  \n}\n\n@media(min-width: 880px) {\n\n.page-section {\n        padding: 4.5rem 0;\n\n  \n}\n    }\n\n.page-section--blue {\n        background-color: #2f5572;\n        color: #fff;\n    }\n\n.headline {\n  font-weight: 300;\n  font-size: 1.7rem;\n  color: #2f5572;\n}\n\n@media(min-width: 530px) {\n\n.headline {\n    font-size: 2.875rem;\n}\n    }\n\n.headline--centered {\n    text-align: center;\n  }\n\n.headline--orange {\n    color: #d59541;\n  }\n\n.headline--small {\n    font-size: 1.1rem;\n  }\n\n@media(min-width: 530px) {\n\n.headline--small {\n      font-size: 1.875rem\n  }\n    }\n\n.headline--narrow {\n    max-width: 500px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n.headline--light {\n    font-weight: 100;\n  }\n\n.headline--b-margin-small {\n    margin-bottom: 0.5em;\n  }\n\n.headline--b-margin-large {\n    margin-bottom: 1.6em;\n  }\n\n.headline--no-t-margin {\n    margin-top: 0;\n  }\n\n.row::after {\n    content: \"\";\n    clear: both;\n    display: table;\n    }\n\n.row--gutters {\n    margin-right: -65px;\n  }\n\n.row--gutters > div {\n    padding-right: 65px;\n  }\n\n.row--gutters-small {\n    margin-right: -45px;\n  }\n\n.row--gutters-small > div {\n    padding-right: 45px;\n  }\n\n.row--gutters-large {\n    margin-right: -120px;\n  }\n\n.row--gutters-large > div {\n    padding-right: 120px;\n  }\n\n.row__b-margin-until-medium {\n    margin-bottom: 1rem;\n  }\n\n@media(min-width: 880px) {\n    .row__b-margin-until-medium {\n      margin-bottom: 0;\n    }\n    .row__medium-4 {\n      float: left;\n      width: 33.33%;\n    }\n    .row__medium-4--larger {\n      width: 37%;\n    }\n    .row__medium-6 {\n      float: left;\n      width: 50%;\n    }\n\n    .row__medium-8 {\n      float: left;\n      width: 66.66%;\n    }\n    .row__medium-8--smaller {\n      width: 63%;\n    }\n    }\n\n.row--t-padding {\n    padding-top: 80px;\n  }\n\n@media(min-width: 880px) {\n\n.row--eqiul-height-at-medium {\n      display: flex;\n  }\n    }\n\n.row--eqiul-height-at-medium > div {\n      float: none;\n      display: flex;\n    }\n\n.generic-content-container p {        \n        line-height: 1.65;\n        margin: 1.8rem 0;\n        font-weight: 300;\n    }\n\n@media(min-width: 530px) {\n\n.generic-content-container p {\n            font-size: 1.1rem\n    }\n    }\n\n.generic-content-container p a {\n        font-weight: 700;\n    }\n\n.section-title {\r\n  font-size: 2rem;\r\n  font-weight: 300;\r\n  text-align: center;\r\n}\n\n@media(min-width: 530px) {\n\n.section-title {\r\n    font-size: 3.5rem;\r\n}\n    }\n\n.section-title__icon {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 0.6rem;\r\n  }\n\n@media(min-width: 530px) {\n\n.section-title__icon {\r\n      position: relative;\r\n      top: 20px;\r\n      margin-right: 1.5rem;\r\n      margin-left: 0;\r\n      display: inline-block;\r\n      margin-bottom: 0\r\n  }\n    }\n\n.section-title strong {\r\n    font-weight: 500;\r\n  }\n\n.section-title--blue {\r\n    color: #2f5572;\r\n  }\n\n.feature-item {\r\n  position: relative;\r\n  padding-bottom: 2.5rem;\r\n}\n\n@media(min-width: 530px) {\n\n.feature-item {\r\n    padding-left: 95px;\r\n}\n    }\n\n.feature-item__icon {\r\n    display: block;\r\n    margin: 0 auto;\r\n  }\n\n@media(min-width: 530px) {\n\n.feature-item__icon {\r\n      position: absolute;\r\n      left: 0\r\n  }\n    }\n\n.feature-item__title {\r\n    font-size: 1.6rem;\r\n    font-weight: 300;\r\n    margin-top: 0.8em;\r\n    margin-bottom: 0.8rem;\r\n    text-align: center;\r\n  }\n\n@media(min-width: 530px) {\n\n.feature-item__title {\r\n      text-align: left;\r\n      margin-top: 1em;\r\n      font-size: 1.85rem\r\n  }\n    }\n\n.testimonial {\r\n  background-color: rgb(107, 217, 231);\r\n  padding: 0 18px 1px 18px;\r\n  margin-bottom: 98px;\r\n}\n\n@media(min-width: 880px) {\n\n.testimonial {\r\n    margin-bottom: 0;\r\n    padding: 0 1.875rem 1px 1.875rem;\r\n}\n    }\n\n.testimonial--last {\r\n    margin-bottom: 0;\r\n  }\n\n.testimonial__photo {\r\n    border-radius: 50%;\r\n    overflow: hidden;\r\n    width: 160px;\r\n    height: 160px;\r\n    margin: 0 auto -80px auto;\r\n    position: relative;\r\n    top: -80px;\r\n    border: 4px solid #2f5572;\r\n  }\n\n.testimonial__title {\r\n    text-align: center;\r\n    color: white;\r\n    font-size: 1.5rem;\r\n    font-weight: 500;\r\n    margin: 0;\r\n  }\n\n.testimonial__subtitle {\r\n    color: #d59541;\r\n    text-align: center;\r\n    font-size: 0.9rem;\r\n    font-weight: 400;\r\n    margin: 0.25rem 0 1rem 0;\r\n  }\n\n.site-footer {\r\n  background-color: #2f5572;\r\n  color: #fff;\r\n  padding: 0.5rem 0;\r\n  text-align: center;\r\n}\n\n.site-footer__text {\r\n    display: block;\r\n    margin-bottom: 1rem;\r\n  }\n\n@media(min-width: 880px) {\n\n.site-footer__text {\r\n      display: inline;\r\n      margin-bottom: 0;\r\n      margin-right: 1.5rem;\r\n      font-weight: 200\r\n  }\n    }\n\n.site-header {    \r\n    position: absolute;\r\n    padding: 10px 0;\r\n    width: 100%;\r\n    z-index: 2;\r\n    transition: background-color 0.3s ease-out;\r\n}\n\n.site-header--is-expanded {\r\n        background-color: rgba(47,85,114, 0.55);\r\n    }\n\n@media(min-width: 880px) {\n\n.site-header {\r\n        position: fixed;\r\n        background-color: rgba(47,85,114, 0.3);\n  }\r\n\r\n        .site-header--dark {\r\n             background-color: rgba(23,51,75, 0.8);\r\n        }\n    }\n\n@media(min-width: 880px) {\n\n.site-header__btn-container {\r\n            float: right\r\n    }\n    }\n\n.site-header__logo {\r\n        position: absolute;\r\n        top: 0;\r\n        left: 50%;\r\n        transform: translateX(-50%);\r\n        transform-origin: 50% 0;\r\n        transition: transform 0.3s ease-in-out;\r\n        background-color: #2f5572;\r\n        padding: 14px 28px;\r\n\r\n    }\n\n@media(min-width: 880px) {\n\n.site-header__logo {\r\n            left: auto;\r\n            transform: translateX(0);           \r\n            padding: 25px 35px\r\n\r\n    }\r\n\r\n            .site-header--dark .site-header__logo {\r\n                transform: scale(0.55);\r\n            }\n    }\n\n.site-header__menu-icon {\r\n        width: 20px;\r\n        height: 19px;   \r\n        position: absolute;\r\n        top: 10px;\r\n        right: 10px;\r\n        z-index: 10;\r\n    }\n\n.site-header__menu-icon::before {\r\n            content: '';\r\n            position: absolute;\r\n            top: 0;\r\n            left: 0;\r\n            width: 20px;\r\n            height: 3px;\r\n            background-color: #fff;\r\n            transform-origin: 0 0;\r\n            transition: transform 0.3s ease-out;\r\n        }\n\n.site-header__menu-icon__middle {\r\n            position: absolute;\r\n            top: 8px;\r\n            left: 0;\r\n            width: 20px;\r\n            height: 3px;\r\n            background-color: #fff;\r\n            transition: all 0.3s ease-out;\r\n            transform-origin: 0 50%;\r\n        }\n\n.site-header__menu-icon::after {\r\n            content: '';\r\n            position: absolute;\r\n            bottom: 0;\r\n            left: 0;\r\n            width: 20px;\r\n            height: 3px;\r\n            background-color: #fff;\r\n            transform-origin: 0 100%;\r\n            transition: transform 0.3s ease-out;\r\n        }\n\n.site-header__menu-icon--close-x::before {                \r\n                transform: rotate(45deg) scaleX(1.25);\r\n            }\n\n.site-header__menu-icon--close-x .site-header__menu-icon__middle {\r\n                opacity: 0;\r\n                transform: scaleX(0);\r\n            }\n\n.site-header__menu-icon--close-x::after {\r\n                transform: rotate(-45deg) scaleX(1.25) translateY(1px);\r\n            }\n\n@media(min-width: 880px) {\n\n.site-header__menu-icon {\r\n            display: none;\n  }\n    }\n\n.site-header__menu-content {\r\n        opacity: 0;\r\n        transform: scale(1.2);\r\n        transition: all 0.3s ease-out;\r\n        position: relative;\r\n        z-index: -10;\r\n        padding-top: 90px;\r\n        text-align: center;\r\n    }\n\n@media(min-width: 880px) {\n\n.site-header__menu-content {\r\n            display: block;\r\n            opacity: 1;\r\n            padding-top: 0;\r\n            z-index: 1;\r\n            transform: scale(1);\r\n    }\n    }\n\n.site-header__menu-content--is-visible {\r\n            opacity: 1;\r\n            z-index: 1;\r\n            transform: scale(1);\r\n        }\n\n.primary-nav {\r\n    padding-top: 10px;\r\n}\n\n@media(min-width: 880px) {\n\n.primary-nav {\r\n        padding-top: 0;\r\n}\n    }\n\n@media(min-width: 880px) {\n\n.primary-nav--pull-right {\r\n            float: right\r\n    }\n    }\n\n.primary-nav ul {\r\n        margin: 0;\r\n        padding: 0;\r\n    }\n\n.primary-nav ul::after {\n    content: \"\";\n    clear: both;\n    display: table;\n    }\n\n.primary-nav li {\r\n        list-style: none;   \r\n        display: inline-block;     \r\n        padding-right : 20px;\r\n\r\n    }\n\n@media(min-width: 880px) {\n\n.primary-nav li {\r\n            float: left;\r\n            display: block\r\n\r\n    }\n    }\n\n.primary-nav li:last-child {\r\n        padding-right: 0;\r\n    }\n\n@media(min-width: 880px) {\n\n.primary-nav li:last-child {\r\n            padding-right: 20px\r\n    }\n    }\n\n.primary-nav a {\r\n        color: #fff;\r\n        text-decoration: none;\r\n        font-weight: 300;\r\n        display: block;\r\n        padding: 5px 8px;\r\n        font-size: 0.8rem;\r\n        background-color: rgba(47,85,114, 0.5);\r\n    }\n\n@media(min-width: 880px) {\n\n.primary-nav a {\r\n            font-size: 1rem;\r\n            padding: 12px 0;\r\n            background-color: transparent\r\n    }\r\n\r\n            .primary-nav a.is-current-link {\r\n                color: #fabb69;\r\n            }\n    }\n\n.reveal-item {\r\n    opacity: 0;\r\n    transform: scale(1.2);\r\n    transition: opacity 1.5s ease-out, transform 1s ease-out;\r\n}\n\n.reveal-item--is-visible {\r\n        opacity: 1;\r\n        transform: scale(1);\r\n    }`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://platinum-travel-site/./app/assets/styles/styles.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B0%5D.use%5B2%5D\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

"use strict";
eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://platinum-travel-site/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

"use strict";
eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://platinum-travel-site/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./node_modules/lodash/_Symbol.js"
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Symbol = root.Symbol;\n\nmodule.exports = Symbol;\n\n\n//# sourceURL=webpack://platinum-travel-site/./node_modules/lodash/_Symbol.js?\n}");

/***/ },

/***/ "./node_modules/lodash/_baseGetTag.js"
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    getRawTag = __webpack_require__(/*! ./_getRawTag */ \"./node_modules/lodash/_getRawTag.js\"),\n    objectToString = __webpack_require__(/*! ./_objectToString */ \"./node_modules/lodash/_objectToString.js\");\n\n/** `Object#toString` result references. */\nvar nullTag = '[object Null]',\n    undefinedTag = '[object Undefined]';\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * The base implementation of `getTag` without fallbacks for buggy environments.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nfunction baseGetTag(value) {\n  if (value == null) {\n    return value === undefined ? undefinedTag : nullTag;\n  }\n  return (symToStringTag && symToStringTag in Object(value))\n    ? getRawTag(value)\n    : objectToString(value);\n}\n\nmodule.exports = baseGetTag;\n\n\n//# sourceURL=webpack://platinum-travel-site/./node_modules/lodash/_baseGetTag.js?\n}");

/***/ },

/***/ "./node_modules/lodash/_baseTrim.js"
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ \"./node_modules/lodash/_trimmedEndIndex.js\");\n\n/** Used to match leading whitespace. */\nvar reTrimStart = /^\\s+/;\n\n/**\n * The base implementation of `_.trim`.\n *\n * @private\n * @param {string} string The string to trim.\n * @returns {string} Returns the trimmed string.\n */\nfunction baseTrim(string) {\n  return string\n    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')\n    : string;\n}\n\nmodule.exports = baseTrim;\n\n\n//# sourceURL=webpack://platinum-travel-site/./node_modules/lodash/_baseTrim.js?\n}");

/***/ },

/***/ "./node_modules/lodash/_freeGlobal.js"
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;\n\nmodule.exports = freeGlobal;\n\n\n//# sourceURL=webpack://platinum-travel-site/./node_modules/lodash/_freeGlobal.js?\n}");

/***/ },

/***/ "./node_modules/lodash/_getRawTag.js"
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the raw `toStringTag`.\n */\nfunction getRawTag(value) {\n  var isOwn = hasOwnProperty.call(value, symToStringTag),\n      tag = value[symToStringTag];\n\n  try {\n    value[symToStringTag] = undefined;\n    var unmasked = true;\n  } catch (e) {}\n\n  var result = nativeObjectToString.call(value);\n  if (unmasked) {\n    if (isOwn) {\n      value[symToStringTag] = tag;\n    } else {\n      delete value[symToStringTag];\n    }\n  }\n  return result;\n}\n\nmodule.exports = getRawTag;\n\n\n//# sourceURL=webpack://platinum-travel-site/./node_modules/lodash/_getRawTag.js?\n}");

/***/ },

/***/ "./node_modules/lodash/_objectToString.js"
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
(module) {

eval("{/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\nmodule.exports = objectToString;\n\n\n//# sourceURL=webpack://platinum-travel-site/./node_modules/lodash/_objectToString.js?\n}");

/***/ },

/***/ "./node_modules/lodash/_root.js"
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\nmodule.exports = root;\n\n\n//# sourceURL=webpack://platinum-travel-site/./node_modules/lodash/_root.js?\n}");

/***/ },

/***/ "./node_modules/lodash/_trimmedEndIndex.js"
/*!*************************************************!*\
  !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
  \*************************************************/
(module) {

eval("{/** Used to match a single whitespace character. */\nvar reWhitespace = /\\s/;\n\n/**\n * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace\n * character of `string`.\n *\n * @private\n * @param {string} string The string to inspect.\n * @returns {number} Returns the index of the last non-whitespace character.\n */\nfunction trimmedEndIndex(string) {\n  var index = string.length;\n\n  while (index-- && reWhitespace.test(string.charAt(index))) {}\n  return index;\n}\n\nmodule.exports = trimmedEndIndex;\n\n\n//# sourceURL=webpack://platinum-travel-site/./node_modules/lodash/_trimmedEndIndex.js?\n}");

/***/ },

/***/ "./node_modules/lodash/debounce.js"
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{var isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    now = __webpack_require__(/*! ./now */ \"./node_modules/lodash/now.js\"),\n    toNumber = __webpack_require__(/*! ./toNumber */ \"./node_modules/lodash/toNumber.js\");\n\n/** Error message constants. */\nvar FUNC_ERROR_TEXT = 'Expected a function';\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeMax = Math.max,\n    nativeMin = Math.min;\n\n/**\n * Creates a debounced function that delays invoking `func` until after `wait`\n * milliseconds have elapsed since the last time the debounced function was\n * invoked. The debounced function comes with a `cancel` method to cancel\n * delayed `func` invocations and a `flush` method to immediately invoke them.\n * Provide `options` to indicate whether `func` should be invoked on the\n * leading and/or trailing edge of the `wait` timeout. The `func` is invoked\n * with the last arguments provided to the debounced function. Subsequent\n * calls to the debounced function return the result of the last `func`\n * invocation.\n *\n * **Note:** If `leading` and `trailing` options are `true`, `func` is\n * invoked on the trailing edge of the timeout only if the debounced function\n * is invoked more than once during the `wait` timeout.\n *\n * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred\n * until to the next tick, similar to `setTimeout` with a timeout of `0`.\n *\n * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)\n * for details over the differences between `_.debounce` and `_.throttle`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Function\n * @param {Function} func The function to debounce.\n * @param {number} [wait=0] The number of milliseconds to delay.\n * @param {Object} [options={}] The options object.\n * @param {boolean} [options.leading=false]\n *  Specify invoking on the leading edge of the timeout.\n * @param {number} [options.maxWait]\n *  The maximum time `func` is allowed to be delayed before it's invoked.\n * @param {boolean} [options.trailing=true]\n *  Specify invoking on the trailing edge of the timeout.\n * @returns {Function} Returns the new debounced function.\n * @example\n *\n * // Avoid costly calculations while the window size is in flux.\n * jQuery(window).on('resize', _.debounce(calculateLayout, 150));\n *\n * // Invoke `sendMail` when clicked, debouncing subsequent calls.\n * jQuery(element).on('click', _.debounce(sendMail, 300, {\n *   'leading': true,\n *   'trailing': false\n * }));\n *\n * // Ensure `batchLog` is invoked once after 1 second of debounced calls.\n * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });\n * var source = new EventSource('/stream');\n * jQuery(source).on('message', debounced);\n *\n * // Cancel the trailing debounced invocation.\n * jQuery(window).on('popstate', debounced.cancel);\n */\nfunction debounce(func, wait, options) {\n  var lastArgs,\n      lastThis,\n      maxWait,\n      result,\n      timerId,\n      lastCallTime,\n      lastInvokeTime = 0,\n      leading = false,\n      maxing = false,\n      trailing = true;\n\n  if (typeof func != 'function') {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n  wait = toNumber(wait) || 0;\n  if (isObject(options)) {\n    leading = !!options.leading;\n    maxing = 'maxWait' in options;\n    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;\n    trailing = 'trailing' in options ? !!options.trailing : trailing;\n  }\n\n  function invokeFunc(time) {\n    var args = lastArgs,\n        thisArg = lastThis;\n\n    lastArgs = lastThis = undefined;\n    lastInvokeTime = time;\n    result = func.apply(thisArg, args);\n    return result;\n  }\n\n  function leadingEdge(time) {\n    // Reset any `maxWait` timer.\n    lastInvokeTime = time;\n    // Start the timer for the trailing edge.\n    timerId = setTimeout(timerExpired, wait);\n    // Invoke the leading edge.\n    return leading ? invokeFunc(time) : result;\n  }\n\n  function remainingWait(time) {\n    var timeSinceLastCall = time - lastCallTime,\n        timeSinceLastInvoke = time - lastInvokeTime,\n        timeWaiting = wait - timeSinceLastCall;\n\n    return maxing\n      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)\n      : timeWaiting;\n  }\n\n  function shouldInvoke(time) {\n    var timeSinceLastCall = time - lastCallTime,\n        timeSinceLastInvoke = time - lastInvokeTime;\n\n    // Either this is the first call, activity has stopped and we're at the\n    // trailing edge, the system time has gone backwards and we're treating\n    // it as the trailing edge, or we've hit the `maxWait` limit.\n    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||\n      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));\n  }\n\n  function timerExpired() {\n    var time = now();\n    if (shouldInvoke(time)) {\n      return trailingEdge(time);\n    }\n    // Restart the timer.\n    timerId = setTimeout(timerExpired, remainingWait(time));\n  }\n\n  function trailingEdge(time) {\n    timerId = undefined;\n\n    // Only invoke if we have `lastArgs` which means `func` has been\n    // debounced at least once.\n    if (trailing && lastArgs) {\n      return invokeFunc(time);\n    }\n    lastArgs = lastThis = undefined;\n    return result;\n  }\n\n  function cancel() {\n    if (timerId !== undefined) {\n      clearTimeout(timerId);\n    }\n    lastInvokeTime = 0;\n    lastArgs = lastCallTime = lastThis = timerId = undefined;\n  }\n\n  function flush() {\n    return timerId === undefined ? result : trailingEdge(now());\n  }\n\n  function debounced() {\n    var time = now(),\n        isInvoking = shouldInvoke(time);\n\n    lastArgs = arguments;\n    lastThis = this;\n    lastCallTime = time;\n\n    if (isInvoking) {\n      if (timerId === undefined) {\n        return leadingEdge(lastCallTime);\n      }\n      if (maxing) {\n        // Handle invocations in a tight loop.\n        clearTimeout(timerId);\n        timerId = setTimeout(timerExpired, wait);\n        return invokeFunc(lastCallTime);\n      }\n    }\n    if (timerId === undefined) {\n      timerId = setTimeout(timerExpired, wait);\n    }\n    return result;\n  }\n  debounced.cancel = cancel;\n  debounced.flush = flush;\n  return debounced;\n}\n\nmodule.exports = debounce;\n\n\n//# sourceURL=webpack://platinum-travel-site/./node_modules/lodash/debounce.js?\n}");

/***/ },

/***/ "./node_modules/lodash/isObject.js"
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
(module) {

eval("{/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return value != null && (type == 'object' || type == 'function');\n}\n\nmodule.exports = isObject;\n\n\n//# sourceURL=webpack://platinum-travel-site/./node_modules/lodash/isObject.js?\n}");

/***/ },

/***/ "./node_modules/lodash/isObjectLike.js"
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
(module) {

eval("{/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return value != null && typeof value == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n\n//# sourceURL=webpack://platinum-travel-site/./node_modules/lodash/isObjectLike.js?\n}");

/***/ },

/***/ "./node_modules/lodash/isSymbol.js"
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar symbolTag = '[object Symbol]';\n\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\nfunction isSymbol(value) {\n  return typeof value == 'symbol' ||\n    (isObjectLike(value) && baseGetTag(value) == symbolTag);\n}\n\nmodule.exports = isSymbol;\n\n\n//# sourceURL=webpack://platinum-travel-site/./node_modules/lodash/isSymbol.js?\n}");

/***/ },

/***/ "./node_modules/lodash/now.js"
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/**\n * Gets the timestamp of the number of milliseconds that have elapsed since\n * the Unix epoch (1 January 1970 00:00:00 UTC).\n *\n * @static\n * @memberOf _\n * @since 2.4.0\n * @category Date\n * @returns {number} Returns the timestamp.\n * @example\n *\n * _.defer(function(stamp) {\n *   console.log(_.now() - stamp);\n * }, _.now());\n * // => Logs the number of milliseconds it took for the deferred invocation.\n */\nvar now = function() {\n  return root.Date.now();\n};\n\nmodule.exports = now;\n\n\n//# sourceURL=webpack://platinum-travel-site/./node_modules/lodash/now.js?\n}");

/***/ },

/***/ "./node_modules/lodash/throttle.js"
/*!*****************************************!*\
  !*** ./node_modules/lodash/throttle.js ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{var debounce = __webpack_require__(/*! ./debounce */ \"./node_modules/lodash/debounce.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/** Error message constants. */\nvar FUNC_ERROR_TEXT = 'Expected a function';\n\n/**\n * Creates a throttled function that only invokes `func` at most once per\n * every `wait` milliseconds. The throttled function comes with a `cancel`\n * method to cancel delayed `func` invocations and a `flush` method to\n * immediately invoke them. Provide `options` to indicate whether `func`\n * should be invoked on the leading and/or trailing edge of the `wait`\n * timeout. The `func` is invoked with the last arguments provided to the\n * throttled function. Subsequent calls to the throttled function return the\n * result of the last `func` invocation.\n *\n * **Note:** If `leading` and `trailing` options are `true`, `func` is\n * invoked on the trailing edge of the timeout only if the throttled function\n * is invoked more than once during the `wait` timeout.\n *\n * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred\n * until to the next tick, similar to `setTimeout` with a timeout of `0`.\n *\n * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)\n * for details over the differences between `_.throttle` and `_.debounce`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Function\n * @param {Function} func The function to throttle.\n * @param {number} [wait=0] The number of milliseconds to throttle invocations to.\n * @param {Object} [options={}] The options object.\n * @param {boolean} [options.leading=true]\n *  Specify invoking on the leading edge of the timeout.\n * @param {boolean} [options.trailing=true]\n *  Specify invoking on the trailing edge of the timeout.\n * @returns {Function} Returns the new throttled function.\n * @example\n *\n * // Avoid excessively updating the position while scrolling.\n * jQuery(window).on('scroll', _.throttle(updatePosition, 100));\n *\n * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.\n * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });\n * jQuery(element).on('click', throttled);\n *\n * // Cancel the trailing throttled invocation.\n * jQuery(window).on('popstate', throttled.cancel);\n */\nfunction throttle(func, wait, options) {\n  var leading = true,\n      trailing = true;\n\n  if (typeof func != 'function') {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n  if (isObject(options)) {\n    leading = 'leading' in options ? !!options.leading : leading;\n    trailing = 'trailing' in options ? !!options.trailing : trailing;\n  }\n  return debounce(func, wait, {\n    'leading': leading,\n    'maxWait': wait,\n    'trailing': trailing\n  });\n}\n\nmodule.exports = throttle;\n\n\n//# sourceURL=webpack://platinum-travel-site/./node_modules/lodash/throttle.js?\n}");

/***/ },

/***/ "./node_modules/lodash/toNumber.js"
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{var baseTrim = __webpack_require__(/*! ./_baseTrim */ \"./node_modules/lodash/_baseTrim.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar NAN = 0 / 0;\n\n/** Used to detect bad signed hexadecimal string values. */\nvar reIsBadHex = /^[-+]0x[0-9a-f]+$/i;\n\n/** Used to detect binary string values. */\nvar reIsBinary = /^0b[01]+$/i;\n\n/** Used to detect octal string values. */\nvar reIsOctal = /^0o[0-7]+$/i;\n\n/** Built-in method references without a dependency on `root`. */\nvar freeParseInt = parseInt;\n\n/**\n * Converts `value` to a number.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to process.\n * @returns {number} Returns the number.\n * @example\n *\n * _.toNumber(3.2);\n * // => 3.2\n *\n * _.toNumber(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toNumber(Infinity);\n * // => Infinity\n *\n * _.toNumber('3.2');\n * // => 3.2\n */\nfunction toNumber(value) {\n  if (typeof value == 'number') {\n    return value;\n  }\n  if (isSymbol(value)) {\n    return NAN;\n  }\n  if (isObject(value)) {\n    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;\n    value = isObject(other) ? (other + '') : other;\n  }\n  if (typeof value != 'string') {\n    return value === 0 ? value : +value;\n  }\n  value = baseTrim(value);\n  var isBinary = reIsBinary.test(value);\n  return (isBinary || reIsOctal.test(value))\n    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)\n    : (reIsBadHex.test(value) ? NAN : +value);\n}\n\nmodule.exports = toNumber;\n\n\n//# sourceURL=webpack://platinum-travel-site/./node_modules/lodash/toNumber.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

"use strict";
eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://platinum-travel-site/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

"use strict";
eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://platinum-travel-site/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://platinum-travel-site/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://platinum-travel-site/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://platinum-travel-site/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://platinum-travel-site/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/assets/scripts/App.js");
/******/ 	
/******/ })()
;