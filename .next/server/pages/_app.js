/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__, wagmi__WEBPACK_IMPORTED_MODULE_4__, wagmi_chains__WEBPACK_IMPORTED_MODULE_5__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__]);\n([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__, wagmi__WEBPACK_IMPORTED_MODULE_4__, wagmi_chains__WEBPACK_IMPORTED_MODULE_5__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nconst { connectors } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.getDefaultWallets)({\n    appName: \"Time-locked Vault\",\n    projectId: \"1248e6569b9947744fa9cb3ad1cc0c43\"\n});\nconst config = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createConfig)({\n    connectors,\n    chains: [\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.mainnet,\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.sepolia,\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.polygon,\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.optimism,\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.arbitrum\n    ],\n    transports: {\n        [wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.mainnet.id]: (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.http)(),\n        [wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.sepolia.id]: (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.http)(),\n        [wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.polygon.id]: (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.http)(),\n        [wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.optimism.id]: (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.http)(),\n        [wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.arbitrum.id]: (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.http)()\n    },\n    ssr: true\n});\nconst queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.QueryClient();\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiProvider, {\n        config: config,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.QueryClientProvider, {\n            client: queryClient,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.RainbowKitProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\zama-projects\\\\private-messaging\\\\pages\\\\_app.js\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\zama-projects\\\\private-messaging\\\\pages\\\\_app.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\user\\\\zama-projects\\\\private-messaging\\\\pages\\\\_app.js\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\user\\\\zama-projects\\\\private-messaging\\\\pages\\\\_app.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNZO0FBS1g7QUFDMEI7QUFDbUI7QUFDSjtBQUV4RSxNQUFNLEVBQUVZLFVBQVUsRUFBRSxHQUFHWix5RUFBaUJBLENBQUM7SUFDdkNhLFNBQVM7SUFDVEMsV0FBVztBQUNiO0FBRUEsTUFBTUMsU0FBU1osbURBQVlBLENBQUM7SUFDMUJTO0lBQ0FJLFFBQVE7UUFBQ1gsaURBQU9BO1FBQUVDLGlEQUFPQTtRQUFFQyxpREFBT0E7UUFBRUMsa0RBQVFBO1FBQUVDLGtEQUFRQTtLQUFDO0lBQ3ZEUSxZQUFZO1FBQ1YsQ0FBQ1osaURBQU9BLENBQUNhLEVBQUUsQ0FBQyxFQUFFZCwyQ0FBSUE7UUFDbEIsQ0FBQ0UsaURBQU9BLENBQUNZLEVBQUUsQ0FBQyxFQUFFZCwyQ0FBSUE7UUFDbEIsQ0FBQ0csaURBQU9BLENBQUNXLEVBQUUsQ0FBQyxFQUFFZCwyQ0FBSUE7UUFDbEIsQ0FBQ0ksa0RBQVFBLENBQUNVLEVBQUUsQ0FBQyxFQUFFZCwyQ0FBSUE7UUFDbkIsQ0FBQ0ssa0RBQVFBLENBQUNTLEVBQUUsQ0FBQyxFQUFFZCwyQ0FBSUE7SUFDckI7SUFDQWUsS0FBSztBQUNQO0FBRUEsTUFBTUMsY0FBYyxJQUFJViw4REFBV0E7QUFFcEIsU0FBU1csTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNwRCxxQkFDRSw4REFBQ3JCLGdEQUFhQTtRQUFDYSxRQUFRQTtrQkFDckIsNEVBQUNKLHNFQUFtQkE7WUFBQ2EsUUFBUUo7c0JBQzNCLDRFQUFDbkIsc0VBQWtCQTswQkFDakIsNEVBQUNxQjtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcml2YXRlLW1lc3NhZ2luZy8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuaW1wb3J0ICdAcmFpbmJvdy1tZS9yYWluYm93a2l0L3N0eWxlcy5jc3MnXHJcblxyXG5pbXBvcnQge1xyXG4gIGdldERlZmF1bHRXYWxsZXRzLFxyXG4gIFJhaW5ib3dLaXRQcm92aWRlcixcclxufSBmcm9tICdAcmFpbmJvdy1tZS9yYWluYm93a2l0J1xyXG5pbXBvcnQgeyBXYWdtaVByb3ZpZGVyLCBjcmVhdGVDb25maWcsIGh0dHAgfSBmcm9tICd3YWdtaSdcclxuaW1wb3J0IHsgbWFpbm5ldCwgc2Vwb2xpYSwgcG9seWdvbiwgb3B0aW1pc20sIGFyYml0cnVtIH0gZnJvbSAnd2FnbWkvY2hhaW5zJ1xyXG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSdcclxuXHJcbmNvbnN0IHsgY29ubmVjdG9ycyB9ID0gZ2V0RGVmYXVsdFdhbGxldHMoe1xyXG4gIGFwcE5hbWU6ICdUaW1lLWxvY2tlZCBWYXVsdCcsXHJcbiAgcHJvamVjdElkOiAnMTI0OGU2NTY5Yjk5NDc3NDRmYTljYjNhZDFjYzBjNDMnLFxyXG59KVxyXG5cclxuY29uc3QgY29uZmlnID0gY3JlYXRlQ29uZmlnKHtcclxuICBjb25uZWN0b3JzLFxyXG4gIGNoYWluczogW21haW5uZXQsIHNlcG9saWEsIHBvbHlnb24sIG9wdGltaXNtLCBhcmJpdHJ1bV0sXHJcbiAgdHJhbnNwb3J0czoge1xyXG4gICAgW21haW5uZXQuaWRdOiBodHRwKCksXHJcbiAgICBbc2Vwb2xpYS5pZF06IGh0dHAoKSxcclxuICAgIFtwb2x5Z29uLmlkXTogaHR0cCgpLFxyXG4gICAgW29wdGltaXNtLmlkXTogaHR0cCgpLFxyXG4gICAgW2FyYml0cnVtLmlkXTogaHR0cCgpLFxyXG4gIH0sXHJcbiAgc3NyOiB0cnVlLFxyXG59KVxyXG5cclxuY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXYWdtaVByb3ZpZGVyIGNvbmZpZz17Y29uZmlnfT5cclxuICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XHJcbiAgICAgICAgPFJhaW5ib3dLaXRQcm92aWRlcj5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L1JhaW5ib3dLaXRQcm92aWRlcj5cclxuICAgICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxyXG4gICAgPC9XYWdtaVByb3ZpZGVyPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiZ2V0RGVmYXVsdFdhbGxldHMiLCJSYWluYm93S2l0UHJvdmlkZXIiLCJXYWdtaVByb3ZpZGVyIiwiY3JlYXRlQ29uZmlnIiwiaHR0cCIsIm1haW5uZXQiLCJzZXBvbGlhIiwicG9seWdvbiIsIm9wdGltaXNtIiwiYXJiaXRydW0iLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJjb25uZWN0b3JzIiwiYXBwTmFtZSIsInByb2plY3RJZCIsImNvbmZpZyIsImNoYWlucyIsInRyYW5zcG9ydHMiLCJpZCIsInNzciIsInF1ZXJ5Q2xpZW50IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/chains":
/*!*******************************!*\
  !*** external "wagmi/chains" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/chains");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@rainbow-me"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();