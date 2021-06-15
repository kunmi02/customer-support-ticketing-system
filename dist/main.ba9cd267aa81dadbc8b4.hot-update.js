/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/ticket-schema.ts":
/*!******************************!*\
  !*** ./src/ticket-schema.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Ticket = void 0;\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar mongoose_2 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nexports.Ticket = new mongoose_1.Schema({\n    id: { type: mongoose_2.default.Schema.Types.ObjectId, required: false },\n    customerName: { type: String, required: true },\n    customerRequest: String\n});\nvar tickets = mongoose_2.default.model(\"tickets\", exports.Ticket);\nexports.default = tickets;\n\n\n//# sourceURL=webpack://customer-support-ticketing-system/./src/ticket-schema.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f3eac3245245ef97c561")
/******/ })();
/******/ 
/******/ }
;