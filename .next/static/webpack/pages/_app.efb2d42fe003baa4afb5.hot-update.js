webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/ClientRouter.js":
/*!************************************!*\
  !*** ./components/ClientRouter.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__);




function ClientRouter(props) {
  var router = props.router;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__["ClientRouter"], {
    history: router
  });
}

_c = ClientRouter;
; //export default withRouter(ClientRouter);

/* harmony default export */ __webpack_exports__["default"] = (ClientRouter);

var _c;

$RefreshReg$(_c, "ClientRouter");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shopify_polaris_dist_styles_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shopify/polaris/dist/styles.css */ "./node_modules/@shopify/polaris/dist/styles.css");
/* harmony import */ var _shopify_polaris_dist_styles_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_dist_styles_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shopify/polaris/locales/en.json */ "./node_modules/@shopify/polaris/locales/en.json");
var _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! @shopify/polaris/locales/en.json */ "./node_modules/@shopify/polaris/locales/en.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_ClientRouter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/ClientRouter */ "./components/ClientRouter.js");











function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var MyApp = /*#__PURE__*/function (_App) {
  Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp, _App);

  var _super = _createSuper(MyApp);

  function MyApp() {
    Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MyApp);

    return _super.apply(this, arguments);
  }

  Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          shopOrigin = _this$props.shopOrigin;
      var config = {
        apiKey: "1ffd2f002008348afd8d250266ad72a1",
        shopOrigin: shopOrigin,
        forceRedirect: true
      };
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("title", {
            children: "Sample App"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("meta", {
            charSet: "utf-8"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_12__["Provider"], {
          config: config,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_components_ClientRouter__WEBPACK_IMPORTED_MODULE_16__["default"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["AppProvider"], {
            i18n: _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_14__,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Component, _objectSpread({}, pageProps))
          })]
        })]
      });
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_9___default.a);

MyApp.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var ctx;
    return C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = _ref.ctx;
            return _context.abrupt("return", {
              shopOrigin: ctx.query.shop
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DbGllbnRSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOlsiQ2xpZW50Um91dGVyIiwicHJvcHMiLCJyb3V0ZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNob3BPcmlnaW4iLCJjb25maWciLCJhcGlLZXkiLCJBUElfS0VZIiwiZm9yY2VSZWRpcmVjdCIsInRyYW5zbGF0aW9ucyIsIkFwcCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInF1ZXJ5Iiwic2hvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUFBLE1BQ3BCQyxNQURvQixHQUNWRCxLQURVLENBQ3BCQyxNQURvQjtBQUUzQixzQkFBTyw4REFBQyxzRUFBRDtBQUF1QixXQUFPLEVBQUVBO0FBQWhDLElBQVA7QUFDRDs7S0FIUUYsWTtBQUdSLEMsQ0FFRDs7QUFDZUEsMkVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNRyxLOzs7Ozs7Ozs7Ozs7OzZCQUNLO0FBQUEsd0JBQ3NDLEtBQUtGLEtBRDNDO0FBQUEsVUFDQ0csU0FERCxlQUNDQSxTQUREO0FBQUEsVUFDWUMsU0FEWixlQUNZQSxTQURaO0FBQUEsVUFDdUJDLFVBRHZCLGVBQ3VCQSxVQUR2QjtBQUVQLFVBQU1DLE1BQU0sR0FBRztBQUFFQyxjQUFNLEVBQUVDLGtDQUFWO0FBQW1CSCxrQkFBVSxFQUFWQSxVQUFuQjtBQUErQkkscUJBQWEsRUFBRTtBQUE5QyxPQUFmO0FBQ0MsMEJBQ0MsK0RBQUMsNkNBQUQsQ0FBTyxRQUFQO0FBQUEsZ0NBQ0UsK0RBQUMsaURBQUQ7QUFBQSxrQ0FDRTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQU0sbUJBQU8sRUFBQztBQUFkLFlBRkY7QUFBQSxVQURGLGVBS0UsK0RBQUMsbUVBQUQ7QUFBVSxnQkFBTSxFQUFFSCxNQUFsQjtBQUFBLGtDQUNBLDhEQUFDLGlFQUFELEtBREEsZUFFQSw4REFBQyw2REFBRDtBQUFhLGdCQUFJLEVBQUVJLDhEQUFuQjtBQUFBLG1DQUNBLDhEQUFDLFNBQUQsb0JBQWVOLFNBQWY7QUFEQSxZQUZBO0FBQUEsVUFMRjtBQUFBLFFBREQ7QUFjRjs7OztFQWxCaUJPLCtDOztBQXFCcEJULEtBQUssQ0FBQ1UsZUFBTjtBQUFBLCtTQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU0MsZUFBVCxRQUFTQSxHQUFUO0FBQUEsNkNBQ2Y7QUFDTFIsd0JBQVUsRUFBRVEsR0FBRyxDQUFDQyxLQUFKLENBQVVDO0FBRGpCLGFBRGU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTWViLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZWZiMmQ0MmZlMDAzYmFhNGFmYjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7Q2xpZW50Um91dGVyIGFzIEFwcEJyaWRnZUNsaWVudFJvdXRlcn0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBDbGllbnRSb3V0ZXIocHJvcHMpIHtcclxuICBjb25zdCB7cm91dGVyfSA9IHByb3BzO1xyXG4gIHJldHVybiA8QXBwQnJpZGdlQ2xpZW50Um91dGVyIGhpc3Rvcnk9e3JvdXRlcn0gLz47XHJcbn07XHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQ2xpZW50Um91dGVyKTtcclxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50Um91dGVyOyIsImltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBBcHBQcm92aWRlciB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3QnO1xyXG5pbXBvcnQgJ0BzaG9waWZ5L3BvbGFyaXMvZGlzdC9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHRyYW5zbGF0aW9ucyBmcm9tICdAc2hvcGlmeS9wb2xhcmlzL2xvY2FsZXMvZW4uanNvbic7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDbGllbnRSb3V0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9DbGllbnRSb3V0ZXInO1xyXG5cclxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHNob3BPcmlnaW4gfSA9IHRoaXMucHJvcHM7ICAgXHJcbiAgICBjb25zdCBjb25maWcgPSB7IGFwaUtleTogQVBJX0tFWSwgc2hvcE9yaWdpbiwgZm9yY2VSZWRpcmVjdDogdHJ1ZSB9O1xyXG4gICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5TYW1wbGUgQXBwPC90aXRsZT5cclxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxQcm92aWRlciBjb25maWc9e2NvbmZpZ30+XHJcbiAgICAgICAgPENsaWVudFJvdXRlciAvPlxyXG4gICAgICAgIDxBcHBQcm92aWRlciBpMThuPXt0cmFuc2xhdGlvbnN9PiAgICAgICAgICAgIFxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L0FwcFByb3ZpZGVyPlxyXG4gICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgY3R4IH0pID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgc2hvcE9yaWdpbjogY3R4LnF1ZXJ5LnNob3AsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwic291cmNlUm9vdCI6IiJ9