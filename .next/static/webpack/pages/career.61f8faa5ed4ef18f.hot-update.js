/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/career",{

/***/ "./pages/api/career_list.ts":
/*!**********************************!*\
  !*** ./pages/api/career_list.ts ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/career.tsx":
/*!**************************!*\
  !*** ./pages/career.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Career; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var _pages_api_career_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/pages/api/career_list */ \"./pages/api/career_list.ts\");\n/* harmony import */ var _pages_api_career_list__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_api_career_list__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\nfunction Store(param) {\n    let { match } = param;\n    let { id } = match.params;\n    const imageHasLoaded = true;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(List, {\n                selectedId: id\n            }, void 0, false, {\n                fileName: \"/Users/vared/Documents/GitHub/varedkr/pages/career.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n                children: id && imageHasLoaded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_api_career_list__WEBPACK_IMPORTED_MODULE_1__.Item, {\n                    id: id\n                }, \"item\", false, {\n                    fileName: \"/Users/vared/Documents/GitHub/varedkr/pages/career.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 34\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/vared/Documents/GitHub/varedkr/pages/career.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Store;\nfunction Career() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimateSharedLayout, {\n            type: \"crossfade\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {\n                    path: [\n                        \"/:id\",\n                        \"/\"\n                    ],\n                    component: Store\n                }, void 0, false, {\n                    fileName: \"/Users/vared/Documents/GitHub/varedkr/pages/career.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/vared/Documents/GitHub/varedkr/pages/career.tsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/vared/Documents/GitHub/varedkr/pages/career.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/vared/Documents/GitHub/varedkr/pages/career.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Career;\nvar _c, _c1;\n$RefreshReg$(_c, \"Store\");\n$RefreshReg$(_c1, \"Career\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXJlZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXFFO0FBQ0g7QUFDcEI7QUFFOUMsU0FBU00sTUFBTSxLQUFTO1FBQVQsRUFBRUMsS0FBSyxFQUFFLEdBQVQ7SUFDYixJQUFJLEVBQUVDLEVBQUUsRUFBRSxHQUFHRCxNQUFNRSxNQUFNO0lBQ3pCLE1BQU1DLGlCQUFpQjtJQUV2QixxQkFDRTs7MEJBQ0UsOERBQUNDO2dCQUFLQyxZQUFZSjs7Ozs7OzBCQUNsQiw4REFBQ1AsMERBQWVBOzBCQUNiTyxNQUFNRSxnQ0FBa0IsOERBQUNMLHdEQUFJQTtvQkFBQ0csSUFBSUE7bUJBQVE7Ozs7Ozs7Ozs7OztBQUluRDtLQVpTRjtBQWNNLFNBQVNPO0lBQ3RCLHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQ2QsOERBQW1CQTtZQUFDZSxNQUFLO3NCQUN4Qiw0RUFBQ1osMkRBQU1BOzBCQUNMLDRFQUFDQyxtREFBS0E7b0JBQUNZLE1BQU07d0JBQUM7d0JBQVE7cUJBQUk7b0JBQUVDLFdBQVdYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLakQ7TUFWd0JPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhcmVlci50c3g/NWM3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmltYXRlU2hhcmVkTGF5b3V0LCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiQC9wYWdlcy9hcGkvY2FyZWVyX2xpc3RcIlxuXG5mdW5jdGlvbiBTdG9yZSh7IG1hdGNoIH0pIHtcbiAgbGV0IHsgaWQgfSA9IG1hdGNoLnBhcmFtcztcbiAgY29uc3QgaW1hZ2VIYXNMb2FkZWQgPSB0cnVlO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMaXN0IHNlbGVjdGVkSWQ9e2lkfSAvPlxuICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAge2lkICYmIGltYWdlSGFzTG9hZGVkICYmIDxJdGVtIGlkPXtpZH0ga2V5PVwiaXRlbVwiIC8+fVxuICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmVlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEFuaW1hdGVTaGFyZWRMYXlvdXQgdHlwZT1cImNyb3NzZmFkZVwiPlxuICAgICAgICA8Um91dGVyPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPXtbXCIvOmlkXCIsIFwiL1wiXX0gY29tcG9uZW50PXtTdG9yZX0gLz5cbiAgICAgICAgPC9Sb3V0ZXI+XG4gICAgICA8L0FuaW1hdGVTaGFyZWRMYXlvdXQ+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQW5pbWF0ZVNoYXJlZExheW91dCIsIkFuaW1hdGVQcmVzZW5jZSIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXIiLCJSb3V0ZSIsIkl0ZW0iLCJTdG9yZSIsIm1hdGNoIiwiaWQiLCJwYXJhbXMiLCJpbWFnZUhhc0xvYWRlZCIsIkxpc3QiLCJzZWxlY3RlZElkIiwiQ2FyZWVyIiwiZGl2IiwidHlwZSIsInBhdGgiLCJjb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/career.tsx\n"));

/***/ })

});