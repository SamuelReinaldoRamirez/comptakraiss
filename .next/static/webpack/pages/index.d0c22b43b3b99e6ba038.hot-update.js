webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg'; //const Index = () => (

var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      open: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleSelection", function (resources) {
      _this.setState({
        open: false
      });

      console.log(resources);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Page"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__["TitleBar"], {
          title: "Sample App",
          primaryAction: {
            content: 'Select products',
            onAction: function onAction() {
              return _this2.setState({
                open: true
              });
            }
          }
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__["ResourcePicker"], {
          resourceType: "Product",
          showVariants: false,
          open: this.state.open,
          onSelection: function onSelection(resources) {
            return _this2.handleSelection(resources);
          },
          onCancel: function onCancel() {
            return _this2.setState({
              open: false
            });
          }
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Layout"], {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["EmptyState"], {
            heading: "Discount your products temporarily",
            action: {
              content: 'Select products',
              //onAction: () => console.log('clicked'),
              onAction: function onAction() {
                return _this2.setState({
                  open: true
                });
              }
            },
            image: img,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("p", {
              children: "Select products to change their price temporarily."
            })
          })
        })]
      });
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW1nIiwiSW5kZXgiLCJvcGVuIiwicmVzb3VyY2VzIiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29udGVudCIsIm9uQWN0aW9uIiwic3RhdGUiLCJoYW5kbGVTZWxlY3Rpb24iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsR0FBRyxHQUFHLG1FQUFaLEMsQ0FFTTs7SUFDTUMsSzs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSztBQUFFQyxVQUFJLEVBQUU7QUFBUixLOzswTkFrQ1csVUFBQ0MsU0FBRCxFQUFlO0FBQy9CLFlBQUtDLFFBQUwsQ0FBYztBQUFFRixZQUFJLEVBQUU7QUFBUixPQUFkOztBQUNBRyxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsU0FBWjtBQUNELEs7Ozs7Ozs7NkJBcENPO0FBQUE7O0FBQ1AsMEJBQ0wsK0RBQUMscURBQUQ7QUFBQSxnQ0FDRSw4REFBQyxrRUFBRDtBQUNGLGVBQUssRUFBQyxZQURKO0FBRUYsdUJBQWEsRUFBRTtBQUNiSSxtQkFBTyxFQUFFLGlCQURJO0FBRWJDLG9CQUFRLEVBQUU7QUFBQSxxQkFBTSxNQUFJLENBQUNKLFFBQUwsQ0FBYztBQUFFRixvQkFBSSxFQUFFO0FBQVIsZUFBZCxDQUFOO0FBQUE7QUFGRztBQUZiLFVBREYsZUFRRiw4REFBQyx3RUFBRDtBQUNNLHNCQUFZLEVBQUMsU0FEbkI7QUFFTSxzQkFBWSxFQUFFLEtBRnBCO0FBR00sY0FBSSxFQUFFLEtBQUtPLEtBQUwsQ0FBV1AsSUFIdkI7QUFJTSxxQkFBVyxFQUFFLHFCQUFDQyxTQUFEO0FBQUEsbUJBQWUsTUFBSSxDQUFDTyxlQUFMLENBQXFCUCxTQUFyQixDQUFmO0FBQUEsV0FKbkI7QUFLTSxrQkFBUSxFQUFFO0FBQUEsbUJBQU0sTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFBRUYsa0JBQUksRUFBRTtBQUFSLGFBQWQsQ0FBTjtBQUFBO0FBTGhCLFVBUkUsZUFlRSw4REFBQyx1REFBRDtBQUFBLGlDQUNFLDhEQUFDLDJEQUFEO0FBQ0UsbUJBQU8sRUFBQyxvQ0FEVjtBQUVFLGtCQUFNLEVBQUU7QUFDTksscUJBQU8sRUFBRSxpQkFESDtBQUVOO0FBQ0FDLHNCQUFRLEVBQUU7QUFBQSx1QkFBTSxNQUFJLENBQUNKLFFBQUwsQ0FBYztBQUFFRixzQkFBSSxFQUFFO0FBQVIsaUJBQWQsQ0FBTjtBQUFBO0FBSEosYUFGVjtBQU9FLGlCQUFLLEVBQUVGLEdBUFQ7QUFBQSxtQ0FTRTtBQUFBO0FBQUE7QUFURjtBQURGLFVBZkY7QUFBQSxRQURLO0FBK0JBOzs7O0VBbENlVyw2Q0FBSyxDQUFDQyxTOztBQXdDakJYLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQwYzIyYjQzYjNiOTllNmJhMDM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbXB0eVN0YXRlLCBMYXlvdXQsIFBhZ2UgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IHsgUmVzb3VyY2VQaWNrZXIsIFRpdGxlQmFyIH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmNvbnN0IGltZyA9ICdodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDc1Ny85OTU1L2ZpbGVzL2VtcHR5LXN0YXRlLnN2Zyc7XHJcblxyXG4gICAgICAvL2NvbnN0IEluZGV4ID0gKCkgPT4gKFxyXG4gICAgICBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICAgICAgIHN0YXRlID0geyBvcGVuOiBmYWxzZSB9O1xyXG4gICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgPFBhZ2U+XHJcbiAgICAgICAgPFRpdGxlQmFyXHJcbiAgICAgIHRpdGxlPVwiU2FtcGxlIEFwcFwiXHJcbiAgICAgIHByaW1hcnlBY3Rpb249e3tcclxuICAgICAgICBjb250ZW50OiAnU2VsZWN0IHByb2R1Y3RzJyxcclxuICAgICAgICBvbkFjdGlvbjogKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSksXHJcbiAgICAgIH19XHJcbiAgICAvPlxyXG4gICAgPFJlc291cmNlUGlja2VyXHJcbiAgICAgICAgICByZXNvdXJjZVR5cGU9XCJQcm9kdWN0XCJcclxuICAgICAgICAgIHNob3dWYXJpYW50cz17ZmFsc2V9XHJcbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59XHJcbiAgICAgICAgICBvblNlbGVjdGlvbj17KHJlc291cmNlcykgPT4gdGhpcy5oYW5kbGVTZWxlY3Rpb24ocmVzb3VyY2VzKX1cclxuICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgPEVtcHR5U3RhdGVcclxuICAgICAgICAgICAgaGVhZGluZz1cIkRpc2NvdW50IHlvdXIgcHJvZHVjdHMgdGVtcG9yYXJpbHlcIlxyXG4gICAgICAgICAgICBhY3Rpb249e3tcclxuICAgICAgICAgICAgICBjb250ZW50OiAnU2VsZWN0IHByb2R1Y3RzJyxcclxuICAgICAgICAgICAgICAvL29uQWN0aW9uOiAoKSA9PiBjb25zb2xlLmxvZygnY2xpY2tlZCcpLFxyXG4gICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgaW1hZ2U9e2ltZ31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHA+U2VsZWN0IHByb2R1Y3RzIHRvIGNoYW5nZSB0aGVpciBwcmljZSB0ZW1wb3JhcmlseS48L3A+XHJcbiAgICAgICAgICA8L0VtcHR5U3RhdGU+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDwvUGFnZT5cclxuICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoYW5kbGVTZWxlY3Rpb24gPSAocmVzb3VyY2VzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNvdXJjZXMpXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==