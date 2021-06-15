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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\nvar mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nvar helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\n// import * as ticketCRUD from './ticket-crud';\nvar ticketCRUD = __importStar(__webpack_require__(/*! ./ticket-crud-mongo */ \"./src/ticket-crud-mongo.ts\")); //<= Add this line\ndotenv.config();\nif (!process.env.PORT) {\n    console.log(\"Error to get ports\");\n    process.exit(1);\n}\nvar uri = \"mongodb://127.0.0.1:27017/codeindepth\";\nmongoose_1.default.connect(uri, function (err) {\n    if (err) {\n        console.log(err.message);\n    }\n    else {\n        console.log(\"Connecting to MONGO\");\n    }\n});\nvar PORT = parseInt(process.env.PORT, 10);\nvar app = express_1.default();\napp.use(helmet_1.default());\napp.use(cors_1.default());\napp.use(express_1.default.json());\nvar server = app.listen(PORT, function () {\n    console.log(\"Listening on port \" + PORT);\n});\n// Send message for default URL\napp.get('/', function (req, res) { return res.send('Welcome to NodeJs App using TypeScript'); });\napp.get('/tickets', ticketCRUD.getTicket);\napp.post('/tickets', ticketCRUD.createTicket);\n// app.post('/updateproduct',productCRUD.updateroduct);\n// app.post('/deleteproduct',productCRUD.deleteproduct);\n\n\n//# sourceURL=webpack://customer-support-ticketing-system/./src/index.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6e09426ddbbad8682b35")
/******/ })();
/******/ 
/******/ }
;