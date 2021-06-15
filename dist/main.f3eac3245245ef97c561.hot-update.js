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

/***/ "./src/ticket-crud-mongo.ts":
/*!**********************************!*\
  !*** ./src/ticket-crud-mongo.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.deleteproduct = exports.updateroduct = exports.createProduct = exports.getProductList = void 0;\nvar ticket_schema_1 = __importDefault(__webpack_require__(/*! ./ticket-schema */ \"./src/ticket-schema.ts\"));\nvar getProductList = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        ticket_schema_1.default.find(function (err, result) {\n            if (err) {\n                console;\n                res.send(\"Error!\");\n            }\n            else {\n                console.log(JSON.stringify(result));\n                res.send(result);\n            }\n        });\n        return [2 /*return*/];\n    });\n}); };\nexports.getProductList = getProductList;\nvar createProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var request, prod;\n    return __generator(this, function (_a) {\n        request = req.body;\n        console.log(JSON.stringify(request));\n        prod = new ticket_schema_1.default(request);\n        prod.save(function (err, result) {\n            if (err) {\n                // console.log(err)\n                res.send(\"Error!\");\n            }\n            else {\n                console.log(JSON.stringify(result));\n                res.send(result);\n            }\n        });\n        return [2 /*return*/];\n    });\n}); };\nexports.createProduct = createProduct;\nvar updateroduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var product;\n    return __generator(this, function (_a) {\n        product = req.body;\n        return [2 /*return*/];\n    });\n}); };\nexports.updateroduct = updateroduct;\nvar deleteproduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var productID;\n    return __generator(this, function (_a) {\n        productID = req.body['id'];\n        return [2 /*return*/];\n    });\n}); };\nexports.deleteproduct = deleteproduct;\n\n\n//# sourceURL=webpack://customer-support-ticketing-system/./src/ticket-crud-mongo.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("49fffa54631582860c84")
/******/ })();
/******/ 
/******/ }
;