/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_style_scss__ = __webpack_require__(/*! ./block/style.scss */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__block_style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__block_editor_scss__ = __webpack_require__(/*! ./block/editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__block_editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__block_editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__block_popular_posts__ = __webpack_require__(/*! ./block/popular-posts */ 3);\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vYmxvY2svc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vYmxvY2svZWRpdG9yLnNjc3MnO1xuaW1wb3J0ICcuL2Jsb2NrL3BvcHVsYXItcG9zdHMnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!************************************!*\
  !*** ./src/block/popular-posts.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popular_posts_edit__ = __webpack_require__(/*! ./popular-posts-edit */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popular_posts_edit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__popular_posts_edit__);\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\n\n\nregisterBlockType('votingtally/popular-posts', {\n\ttitle: __('Popular Posts', 'votingtally'), // Block title.\n\ticon: wp.element.createElement(\n\t\t'svg',\n\t\t{ width: '72', height: '72', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },\n\t\twp.element.createElement('rect', { width: '24', height: '24', fill: 'none', rx: '0', ry: '0' }),\n\t\twp.element.createElement('path', { 'fill-rule': 'evenodd', 'clip-rule': 'evenodd', d: 'M9 2C7.89543 2 7 2.89543 7 4V5H6C4.89543 5 4 5.89543 4 7V20C4 21.1046 4.89543 22 6 22H15C16.1046 22 17 21.1046 17 20V19H18C19.1046 19 20 18.1046 20 17V4C20 2.89543 19.1046 2 18 2H9ZM17 7V17.8H17.8C18.3523 17.8 18.8 17.3523 18.8 16.8V4.2C18.8 3.64772 18.3523 3.2 17.8 3.2H9.2C8.64772 3.2 8.2 3.64771 8.2 4.2V5H15C16.1046 5 17 5.89543 17 7ZM6.2 6.2C5.64772 6.2 5.2 6.64771 5.2 7.2V19.8C5.2 20.3523 5.64771 20.8 6.2 20.8H14.8C15.3523 20.8 15.8 20.3523 15.8 19.8V7.2C15.8 6.64772 15.3523 6.2 14.8 6.2H6.2Z', fill: '#ffffff' })\n\t),\n\tcategory: 'widgets',\n\tkeywords: [__('popular', 'votingtally'), __('posts', 'votingtally'), __('voting', 'votingtally')],\n\tsupports: {\n\t\talign: true\n\t},\n\tedit: __WEBPACK_IMPORTED_MODULE_0__popular_posts_edit___default.a,\n\tsave: function save() {\n\t\treturn null;\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9wb3B1bGFyLXBvc3RzLmpzP2YyZmQiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTsgLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSB3cC5ibG9ja3NcblxuaW1wb3J0IGVkaXQgZnJvbSAnLi9wb3B1bGFyLXBvc3RzLWVkaXQnO1xuXG5yZWdpc3RlckJsb2NrVHlwZSgndm90aW5ndGFsbHkvcG9wdWxhci1wb3N0cycsIHtcblx0dGl0bGU6IF9fKCdQb3B1bGFyIFBvc3RzJywgJ3ZvdGluZ3RhbGx5JyksIC8vIEJsb2NrIHRpdGxlLlxuXHRpY29uOiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0J3N2ZycsXG5cdFx0eyB3aWR0aDogJzcyJywgaGVpZ2h0OiAnNzInLCB2aWV3Qm94OiAnMCAwIDI0IDI0JywgZmlsbDogJ25vbmUnLCB4bWxuczogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB9LFxuXHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgncmVjdCcsIHsgd2lkdGg6ICcyNCcsIGhlaWdodDogJzI0JywgZmlsbDogJ25vbmUnLCByeDogJzAnLCByeTogJzAnIH0pLFxuXHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgJ2ZpbGwtcnVsZSc6ICdldmVub2RkJywgJ2NsaXAtcnVsZSc6ICdldmVub2RkJywgZDogJ005IDJDNy44OTU0MyAyIDcgMi44OTU0MyA3IDRWNUg2QzQuODk1NDMgNSA0IDUuODk1NDMgNCA3VjIwQzQgMjEuMTA0NiA0Ljg5NTQzIDIyIDYgMjJIMTVDMTYuMTA0NiAyMiAxNyAyMS4xMDQ2IDE3IDIwVjE5SDE4QzE5LjEwNDYgMTkgMjAgMTguMTA0NiAyMCAxN1Y0QzIwIDIuODk1NDMgMTkuMTA0NiAyIDE4IDJIOVpNMTcgN1YxNy44SDE3LjhDMTguMzUyMyAxNy44IDE4LjggMTcuMzUyMyAxOC44IDE2LjhWNC4yQzE4LjggMy42NDc3MiAxOC4zNTIzIDMuMiAxNy44IDMuMkg5LjJDOC42NDc3MiAzLjIgOC4yIDMuNjQ3NzEgOC4yIDQuMlY1SDE1QzE2LjEwNDYgNSAxNyA1Ljg5NTQzIDE3IDdaTTYuMiA2LjJDNS42NDc3MiA2LjIgNS4yIDYuNjQ3NzEgNS4yIDcuMlYxOS44QzUuMiAyMC4zNTIzIDUuNjQ3NzEgMjAuOCA2LjIgMjAuOEgxNC44QzE1LjM1MjMgMjAuOCAxNS44IDIwLjM1MjMgMTUuOCAxOS44VjcuMkMxNS44IDYuNjQ3NzIgMTUuMzUyMyA2LjIgMTQuOCA2LjJINi4yWicsIGZpbGw6ICcjZmZmZmZmJyB9KVxuXHQpLFxuXHRjYXRlZ29yeTogJ3dpZGdldHMnLFxuXHRrZXl3b3JkczogW19fKCdwb3B1bGFyJywgJ3ZvdGluZ3RhbGx5JyksIF9fKCdwb3N0cycsICd2b3Rpbmd0YWxseScpLCBfXygndm90aW5nJywgJ3ZvdGluZ3RhbGx5JyldLFxuXHRzdXBwb3J0czoge1xuXHRcdGFsaWduOiB0cnVlXG5cdH0sXG5cdGVkaXQ6IGVkaXQsXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUoKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL3BvcHVsYXItcG9zdHMuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!*****************************************!*\
  !*** ./src/block/popular-posts-edit.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);