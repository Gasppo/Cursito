webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_seguridadinfromatica_Desktop_FullStack_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! urql */ \"./node_modules/urql/dist/urql.es.js\");\n/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @urql/exchange-graphcache */ \"./node_modules/@urql/exchange-graphcache/dist/urql-exchange-graphcache.mjs\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme */ \"./src/theme.tsx\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _utils_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/betterUpdateQuery */ \"./src/utils/betterUpdateQuery.tsx\");\n/* harmony import */ var _utils_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_utils_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"/Users/seguridadinfromatica/Desktop/FullStack/front/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_seguridadinfromatica_Desktop_FullStack_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar client = Object(urql__WEBPACK_IMPORTED_MODULE_3__[\"createClient\"])({\n  url: \"http://localhost:4000/graphql\",\n  fetchOptions: {\n    credentials: \"include\"\n  },\n  exchanges: [urql__WEBPACK_IMPORTED_MODULE_3__[\"dedupExchange\"], Object(_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_4__[\"cacheExchange\"])({\n    updates: {\n      Mutation: {\n        logout: function logout(_result, args, cache, info) {\n          Object(_utils_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_7__[\"betterUpdateQuery\"])(cache, {\n            query: _generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"MeDocument\"]\n          }, _result, function () {\n            return {\n              me: null\n            };\n          });\n        },\n        login: function login(_result, args, cache, info) {\n          Object(_utils_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_7__[\"betterUpdateQuery\"])(cache, {\n            query: _generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"MeDocument\"]\n          }, _result, function (result, query) {\n            if (result.login.errors) {\n              return query;\n            } else {\n              return {\n                me: result.login.user\n              };\n            }\n          });\n        },\n        register: function register(_result, args, cache, info) {\n          Object(_utils_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_7__[\"betterUpdateQuery\"])(cache, {\n            query: _generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"MeDocument\"]\n          }, _result, function (result, query) {\n            if (result.register.errors) {\n              return query;\n            } else {\n              return {\n                me: result.register.user\n              };\n            }\n          });\n        }\n      }\n    }\n  }), urql__WEBPACK_IMPORTED_MODULE_3__[\"fetchExchange\"]]\n});\n\nfunction MyApp(_ref) {\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"ChakraProvider\"], {\n    resetCSS: true,\n    theme: _theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"ColorModeProvider\"], {\n      options: {\n        useSystemColorMode: true\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"CSSReset\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 76,\n    columnNumber: 5\n  }, this);\n}\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Pzg1NDgiXSwibmFtZXMiOlsiY2xpZW50IiwiY3JlYXRlQ2xpZW50IiwidXJsIiwiZmV0Y2hPcHRpb25zIiwiY3JlZGVudGlhbHMiLCJleGNoYW5nZXMiLCJkZWR1cEV4Y2hhbmdlIiwiY2FjaGVFeGNoYW5nZSIsInVwZGF0ZXMiLCJNdXRhdGlvbiIsImxvZ291dCIsIl9yZXN1bHQiLCJhcmdzIiwiY2FjaGUiLCJpbmZvIiwiYmV0dGVyVXBkYXRlUXVlcnkiLCJxdWVyeSIsIk1lRG9jdW1lbnQiLCJtZSIsImxvZ2luIiwicmVzdWx0IiwiZXJyb3JzIiwidXNlciIsInJlZ2lzdGVyIiwiZmV0Y2hFeGNoYW5nZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGhlbWUiLCJ1c2VTeXN0ZW1Db2xvck1vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBUUE7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLHlEQUFZLENBQUM7QUFDMUJDLEtBQUcsRUFBRSwrQkFEcUI7QUFFMUJDLGNBQVksRUFBRTtBQUNaQyxlQUFXLEVBQUU7QUFERCxHQUZZO0FBSzFCQyxXQUFTLEVBQUUsQ0FDVEMsa0RBRFMsRUFFVEMsK0VBQWEsQ0FBQztBQUNaQyxXQUFPLEVBQUU7QUFDUEMsY0FBUSxFQUFFO0FBQ1JDLGNBQU0sRUFBRSxnQkFBQ0MsT0FBRCxFQUFVQyxJQUFWLEVBQWdCQyxLQUFoQixFQUF1QkMsSUFBdkIsRUFBZ0M7QUFDdENDLDRGQUFpQixDQUNmRixLQURlLEVBRWY7QUFBRUcsaUJBQUssRUFBRUMsNkRBQVVBO0FBQW5CLFdBRmUsRUFHZk4sT0FIZSxFQUlmO0FBQUEsbUJBQU87QUFBRU8sZ0JBQUUsRUFBRTtBQUFOLGFBQVA7QUFBQSxXQUplLENBQWpCO0FBTUQsU0FSTztBQVNSQyxhQUFLLEVBQUUsZUFBQ1IsT0FBRCxFQUFVQyxJQUFWLEVBQWdCQyxLQUFoQixFQUF1QkMsSUFBdkIsRUFBZ0M7QUFDckNDLDRGQUFpQixDQUNmRixLQURlLEVBRWY7QUFBRUcsaUJBQUssRUFBRUMsNkRBQVVBO0FBQW5CLFdBRmUsRUFHZk4sT0FIZSxFQUlmLFVBQUNTLE1BQUQsRUFBU0osS0FBVCxFQUFtQjtBQUNqQixnQkFBSUksTUFBTSxDQUFDRCxLQUFQLENBQWFFLE1BQWpCLEVBQXlCO0FBQ3ZCLHFCQUFPTCxLQUFQO0FBQ0QsYUFGRCxNQUVPO0FBQ0wscUJBQU87QUFDTEUsa0JBQUUsRUFBRUUsTUFBTSxDQUFDRCxLQUFQLENBQWFHO0FBRFosZUFBUDtBQUdEO0FBQ0YsV0FaYyxDQUFqQjtBQWNELFNBeEJPO0FBeUJSQyxnQkFBUSxFQUFFLGtCQUFDWixPQUFELEVBQVVDLElBQVYsRUFBZ0JDLEtBQWhCLEVBQXVCQyxJQUF2QixFQUFnQztBQUN4Q0MsNEZBQWlCLENBQ2ZGLEtBRGUsRUFFZjtBQUFFRyxpQkFBSyxFQUFFQyw2REFBVUE7QUFBbkIsV0FGZSxFQUdmTixPQUhlLEVBSWYsVUFBQ1MsTUFBRCxFQUFTSixLQUFULEVBQW1CO0FBQ2pCLGdCQUFJSSxNQUFNLENBQUNHLFFBQVAsQ0FBZ0JGLE1BQXBCLEVBQTRCO0FBQzFCLHFCQUFPTCxLQUFQO0FBQ0QsYUFGRCxNQUVPO0FBQ0wscUJBQU87QUFDTEUsa0JBQUUsRUFBRUUsTUFBTSxDQUFDRyxRQUFQLENBQWdCRDtBQURmLGVBQVA7QUFHRDtBQUNGLFdBWmMsQ0FBakI7QUFjRDtBQXhDTztBQURIO0FBREcsR0FBRCxDQUZKLEVBZ0RURSxrREFoRFM7QUFMZSxDQUFELENBQTNCOztBQXlEQSxTQUFTQyxLQUFULE9BQThDO0FBQUEsTUFBN0JDLFNBQTZCLFFBQTdCQSxTQUE2QjtBQUFBLE1BQWxCQyxTQUFrQixRQUFsQkEsU0FBa0I7QUFDNUMsc0JBQ0UscUVBQUMsK0RBQUQ7QUFBZ0IsWUFBUSxNQUF4QjtBQUF5QixTQUFLLEVBQUVDLDhDQUFoQztBQUFBLDJCQUNFLHFFQUFDLGtFQUFEO0FBQ0UsYUFBTyxFQUFFO0FBQ1BDLDBCQUFrQixFQUFFO0FBRGIsT0FEWDtBQUFBLDhCQUtFLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQU1FLHFFQUFDLFNBQUQsb0JBQWVGLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlEOztLQWJRRixLO0FBZU1BLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIsIENvbG9yTW9kZVByb3ZpZGVyLCBDU1NSZXNldCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBQcm92aWRlciwgY3JlYXRlQ2xpZW50LCBkZWR1cEV4Y2hhbmdlLCBmZXRjaEV4Y2hhbmdlIH0gZnJvbSBcInVycWxcIjtcblxuaW1wb3J0IHsgY2FjaGVFeGNoYW5nZSB9IGZyb20gXCJAdXJxbC9leGNoYW5nZS1ncmFwaGNhY2hlXCI7XG5cbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vdGhlbWVcIjtcbmltcG9ydCB7XG4gIExvZ2luTXV0YXRpb24sXG4gIExvZ291dE11dGF0aW9uLFxuICBNZURvY3VtZW50LFxuICBNZVF1ZXJ5LFxuICBRdWVyeSxcbiAgUmVnaXN0ZXJNdXRhdGlvbixcbn0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XG5pbXBvcnQgeyBiZXR0ZXJVcGRhdGVRdWVyeSB9IGZyb20gXCIuLi91dGlscy9iZXR0ZXJVcGRhdGVRdWVyeVwiO1xuXG5jb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dyYXBocWxcIixcbiAgZmV0Y2hPcHRpb25zOiB7XG4gICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxuICB9LFxuICBleGNoYW5nZXM6IFtcbiAgICBkZWR1cEV4Y2hhbmdlLFxuICAgIGNhY2hlRXhjaGFuZ2Uoe1xuICAgICAgdXBkYXRlczoge1xuICAgICAgICBNdXRhdGlvbjoge1xuICAgICAgICAgIGxvZ291dDogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XG4gICAgICAgICAgICBiZXR0ZXJVcGRhdGVRdWVyeTxMb2dvdXRNdXRhdGlvbiwgTWVRdWVyeT4oXG4gICAgICAgICAgICAgIGNhY2hlLFxuICAgICAgICAgICAgICB7IHF1ZXJ5OiBNZURvY3VtZW50IH0sXG4gICAgICAgICAgICAgIF9yZXN1bHQsXG4gICAgICAgICAgICAgICgpID0+ICh7IG1lOiBudWxsIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbG9naW46IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xuICAgICAgICAgICAgYmV0dGVyVXBkYXRlUXVlcnk8TG9naW5NdXRhdGlvbiwgTWVRdWVyeT4oXG4gICAgICAgICAgICAgIGNhY2hlLFxuICAgICAgICAgICAgICB7IHF1ZXJ5OiBNZURvY3VtZW50IH0sXG4gICAgICAgICAgICAgIF9yZXN1bHQsXG4gICAgICAgICAgICAgIChyZXN1bHQsIHF1ZXJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5sb2dpbi5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbWU6IHJlc3VsdC5sb2dpbi51c2VyLFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICByZWdpc3RlcjogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XG4gICAgICAgICAgICBiZXR0ZXJVcGRhdGVRdWVyeTxSZWdpc3Rlck11dGF0aW9uLCBNZVF1ZXJ5PihcbiAgICAgICAgICAgICAgY2FjaGUsXG4gICAgICAgICAgICAgIHsgcXVlcnk6IE1lRG9jdW1lbnQgfSxcbiAgICAgICAgICAgICAgX3Jlc3VsdCxcbiAgICAgICAgICAgICAgKHJlc3VsdCwgcXVlcnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJlZ2lzdGVyLmVycm9ycykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBtZTogcmVzdWx0LnJlZ2lzdGVyLnVzZXIsXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBmZXRjaEV4Y2hhbmdlLFxuICBdLFxufSk7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogYW55KSB7XG4gIHJldHVybiAoXG4gICAgPENoYWtyYVByb3ZpZGVyIHJlc2V0Q1NTIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8Q29sb3JNb2RlUHJvdmlkZXJcbiAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgIHVzZVN5c3RlbUNvbG9yTW9kZTogdHJ1ZSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPENTU1Jlc2V0IC8+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvQ29sb3JNb2RlUHJvdmlkZXI+XG4gICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/utils/betterUpdateQuery.tsx":
/*!*****************************************!*\
  !*** ./src/utils/betterUpdateQuery.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/module.js */ \"./node_modules/next/dist/compiled/webpack/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy91dGlscy9iZXR0ZXJVcGRhdGVRdWVyeS50c3guanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/betterUpdateQuery.tsx\n");

/***/ })

})