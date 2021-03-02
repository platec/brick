(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Data.ts":
/*!*********************!*\
  !*** ./src/Data.ts ***!
  \*********************/
/*! exports provided: Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Data\", function() { return Data; });\nvar Data = /** @class */ (function () {\r\n    function Data(options) {\r\n        this.left = 0;\r\n        this.top = 0;\r\n        this.width = 0;\r\n        this.height = 0;\r\n        this.left = options.left;\r\n        this.top = options.top;\r\n        this.width = options.width;\r\n        this.height = options.height;\r\n    }\r\n    Data.prototype.render = function (ctx) {\r\n        ctx.save();\r\n        ctx.beginPath();\r\n        ctx.rect(this.left, this.top, this.width, this.height);\r\n        ctx.fill();\r\n        ctx.restore();\r\n    };\r\n    Data.prototype.set = function (key, value) {\r\n        this[key] = value;\r\n    };\r\n    return Data;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/Data.ts?");

/***/ }),

/***/ "./src/DataModel.ts":
/*!**************************!*\
  !*** ./src/DataModel.ts ***!
  \**************************/
/*! exports provided: DataModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DataModel\", function() { return DataModel; });\nvar DataModel = /** @class */ (function () {\r\n    function DataModel() {\r\n        this.dataList = [];\r\n    }\r\n    DataModel.prototype.add = function (data) {\r\n        this.dataList.push(data);\r\n        this.graphView.draw();\r\n    };\r\n    DataModel.prototype.getDatas = function () {\r\n        return this.dataList;\r\n    };\r\n    return DataModel;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/DataModel.ts?");

/***/ }),

/***/ "./src/GraphView.ts":
/*!**************************!*\
  !*** ./src/GraphView.ts ***!
  \**************************/
/*! exports provided: GraphView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GraphView\", function() { return GraphView; });\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ \"./src/Util.ts\");\n\r\nvar GraphView = /** @class */ (function () {\r\n    function GraphView(dm) {\r\n        dm.graphView = this;\r\n        this.dataModel = dm;\r\n    }\r\n    GraphView.prototype.createLowerCanvas = function () {\r\n        this.lowerCanvas = document.createElement('canvas');\r\n        this.lowerCanvas.width = this.width;\r\n        this.lowerCanvas.height = this.height;\r\n        this.lowerCanvas.style.position = 'absolute';\r\n        this.lowerCanvas.style.padding = '0px';\r\n        this.lowerCanvas.style.margin = '0px';\r\n        this.lowerCanvas.style.background = 'transparent';\r\n        this.lowerCanvas.style.display = 'block';\r\n        this.lowerCanvas.style.top = '0px';\r\n        this.lowerCanvas.style.left = '0px';\r\n        this.lowerCanvas.style.height = this.height + 'px';\r\n        this.lowerCanvas.style.width = this.width + 'px';\r\n        this.contextContainer = this.lowerCanvas.getContext('2d');\r\n    };\r\n    GraphView.prototype.createTopCanvas = function () {\r\n        this.topCanvas = document.createElement('canvas');\r\n        this.topCanvas.width = this.width;\r\n        this.topCanvas.height = this.height;\r\n        this.topCanvas.style.position = 'absolute';\r\n        this.topCanvas.style.padding = '0px';\r\n        this.topCanvas.style.margin = '0px';\r\n        this.topCanvas.style.background = 'transparent';\r\n        this.topCanvas.style.display = 'block';\r\n        this.topCanvas.style.top = '0px';\r\n        this.topCanvas.style.left = '0px';\r\n        this.topCanvas.style.height = this.height + 'px';\r\n        this.topCanvas.style.width = this.width + 'px';\r\n        this.contextTop = this.topCanvas.getContext('2d');\r\n    };\r\n    GraphView.prototype.addToDOM = function (el) {\r\n        this.wrapper = el;\r\n        var _a = Object(_Util__WEBPACK_IMPORTED_MODULE_0__[\"getSize\"])(el), width = _a.width, height = _a.height;\r\n        this.width = width;\r\n        this.height = height;\r\n        this.createLowerCanvas();\r\n        this.createTopCanvas();\r\n        this.wrapper.appendChild(this.lowerCanvas);\r\n        this.wrapper.appendChild(this.topCanvas);\r\n    };\r\n    GraphView.prototype.draw = function () {\r\n        var ctx = this.contextContainer;\r\n        this.clearContext(ctx);\r\n        ctx.save();\r\n        this.renderDatas(ctx);\r\n        ctx.restore();\r\n    };\r\n    GraphView.prototype.renderDatas = function (ctx) {\r\n        var datas = this.dataModel.getDatas();\r\n        for (var _i = 0, datas_1 = datas; _i < datas_1.length; _i++) {\r\n            var data = datas_1[_i];\r\n            data.render(ctx);\r\n        }\r\n    };\r\n    GraphView.prototype.clearContext = function (ctx) {\r\n        ctx.clearRect(0, 0, this.width, this.height);\r\n        return this;\r\n    };\r\n    GraphView.prototype.resize = function () { };\r\n    return GraphView;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/GraphView.ts?");

/***/ }),

/***/ "./src/Util.ts":
/*!*********************!*\
  !*** ./src/Util.ts ***!
  \*********************/
/*! exports provided: getSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSize\", function() { return getSize; });\nfunction getSize(element) {\r\n    var rect = element.getBoundingClientRect();\r\n    return {\r\n        width: rect.width,\r\n        height: rect.height\r\n    };\r\n}\r\n\n\n//# sourceURL=webpack:///./src/Util.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GraphView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphView */ \"./src/GraphView.ts\");\n/* harmony import */ var _DataModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataModel */ \"./src/DataModel.ts\");\n/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Data */ \"./src/Data.ts\");\n\r\n\r\n\r\nvar brick = {\r\n    GraphView: _GraphView__WEBPACK_IMPORTED_MODULE_0__[\"GraphView\"],\r\n    DataModel: _DataModel__WEBPACK_IMPORTED_MODULE_1__[\"DataModel\"],\r\n    Data: _Data__WEBPACK_IMPORTED_MODULE_2__[\"Data\"],\r\n};\r\nwindow.brick = brick;\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ })["brick"];
});