webpackHotUpdate_N_E("pages/edit-products",{

/***/ "./pages/edit-products.js":
/*!********************************!*\
  !*** ./pages/edit-products.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! store-js */ "./node_modules/store-js/dist/store.legacy.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shopify/app-bridge/actions */ "./node_modules/@shopify/app-bridge/actions/index.js");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_12__);










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var EditProduct = /*#__PURE__*/function (_React$Component) {
  Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(EditProduct, _React$Component);

  var _super = _createSuper(EditProduct);

  function EditProduct() {
    var _this;

    Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EditProduct);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      discount: '',
      price: '',
      variantId: ''
    });

    Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleChange", function (field) {
      return function (value) {
        return _this.setState(Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, field, value));
      };
    });

    Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "itemToBeConsumed", function () {
      var item = store_js__WEBPACK_IMPORTED_MODULE_9___default.a.get('item');
      var price = item.variants.edges[0].node.price;
      var variantId = item.variants.edges[0].node.id;
      var discounter = price * 0.2;

      _this.setState({
        price: price,
        variantId: variantId
      });

      return (price - discounter).toFixed(2);
    });

    return _this;
  }

  Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EditProduct, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        discount: this.itemToBeConsumed()
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          name = _this$state.name,
          price = _this$state.price,
          discount = _this$state.discount,
          variantId = _this$state.variantId;
      var app = this.context;

      var redirectToIndex = function redirectToIndex() {
        var redirect = _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_11__["Redirect"].create(app);
        redirect.dispatch(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_11__["Redirect"].Action.APP, '/index');
      };

      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Page"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Layout"], {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Layout"].Section, {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["DisplayText"], {
              size: "large",
              children: name
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Form"], {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Card"], {
                sectioned: true,
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["FormLayout"], {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["FormLayout"].Group, {
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
                      prefix: "$",
                      value: price,
                      disabled: true,
                      label: "Original price",
                      type: "price"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
                      prefix: "$",
                      value: discount,
                      onChange: this.handleChange('discount'),
                      label: "Discounted price",
                      type: "discount"
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("p", {
                    children: "This sale price will expire in two weeks"
                  })]
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["PageActions"], {
                primaryAction: [{
                  content: 'Save',
                  onAction: function onAction() {
                    console.log('submitted');
                    redirectToIndex();
                  }
                }],
                secondaryActions: [{
                  content: 'Remove discount'
                }]
              })]
            })]
          })
        })
      });
    }
  }]);

  return EditProduct;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (EditProduct);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZWRpdC1wcm9kdWN0cy5qcyJdLCJuYW1lcyI6WyJFZGl0UHJvZHVjdCIsImRpc2NvdW50IiwicHJpY2UiLCJ2YXJpYW50SWQiLCJmaWVsZCIsInZhbHVlIiwic2V0U3RhdGUiLCJpdGVtIiwic3RvcmUiLCJnZXQiLCJ2YXJpYW50cyIsImVkZ2VzIiwibm9kZSIsImlkIiwiZGlzY291bnRlciIsInRvRml4ZWQiLCJpdGVtVG9CZUNvbnN1bWVkIiwic3RhdGUiLCJuYW1lIiwiYXBwIiwiY29udGV4dCIsInJlZGlyZWN0VG9JbmRleCIsInJlZGlyZWN0IiwiUmVkaXJlY3QiLCJjcmVhdGUiLCJkaXNwYXRjaCIsIkFjdGlvbiIsIkFQUCIsImhhbmRsZUNoYW5nZSIsImNvbnRlbnQiLCJvbkFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBVUU7QUFDQTtBQUNBO0FBQ0E7O0lBS01BLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Z1VBQ0k7QUFDTkMsY0FBUSxFQUFFLEVBREo7QUFFTkMsV0FBSyxFQUFFLEVBRkQ7QUFHTkMsZUFBUyxFQUFFO0FBSEwsSzs7dVVBd0VPLFVBQUNDLEtBQUQsRUFBVztBQUN4QixhQUFPLFVBQUNDLEtBQUQ7QUFBQSxlQUFXLE1BQUtDLFFBQUwsdUpBQWlCRixLQUFqQixFQUF5QkMsS0FBekIsRUFBWDtBQUFBLE9BQVA7QUFFRCxLOzsyVUFFa0IsWUFBTTtBQUN2QixVQUFNRSxJQUFJLEdBQUdDLCtDQUFLLENBQUNDLEdBQU4sQ0FBVSxNQUFWLENBQWI7QUFDQSxVQUFNUCxLQUFLLEdBQUdLLElBQUksQ0FBQ0csUUFBTCxDQUFjQyxLQUFkLENBQW9CLENBQXBCLEVBQXVCQyxJQUF2QixDQUE0QlYsS0FBMUM7QUFDQSxVQUFNQyxTQUFTLEdBQUdJLElBQUksQ0FBQ0csUUFBTCxDQUFjQyxLQUFkLENBQW9CLENBQXBCLEVBQXVCQyxJQUF2QixDQUE0QkMsRUFBOUM7QUFDQSxVQUFNQyxVQUFVLEdBQUdaLEtBQUssR0FBRyxHQUEzQjs7QUFDQSxZQUFLSSxRQUFMLENBQWM7QUFBRUosYUFBSyxFQUFMQSxLQUFGO0FBQVNDLGlCQUFTLEVBQVRBO0FBQVQsT0FBZDs7QUFDQSxhQUFPLENBQUNELEtBQUssR0FBR1ksVUFBVCxFQUFxQkMsT0FBckIsQ0FBNkIsQ0FBN0IsQ0FBUDtBQUNELEs7Ozs7Ozs7d0NBOUVtQjtBQUNsQixXQUFLVCxRQUFMLENBQWM7QUFBRUwsZ0JBQVEsRUFBRSxLQUFLZSxnQkFBTDtBQUFaLE9BQWQ7QUFDRDs7OzZCQUVRO0FBQUEsd0JBQ3NDLEtBQUtDLEtBRDNDO0FBQUEsVUFDQ0MsSUFERCxlQUNDQSxJQUREO0FBQUEsVUFDT2hCLEtBRFAsZUFDT0EsS0FEUDtBQUFBLFVBQ2NELFFBRGQsZUFDY0EsUUFEZDtBQUFBLFVBQ3dCRSxTQUR4QixlQUN3QkEsU0FEeEI7QUFFUCxVQUFNZ0IsR0FBRyxHQUFHLEtBQUtDLE9BQWpCOztBQUNBLFVBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QixZQUFNQyxRQUFRLEdBQUdDLHFFQUFRLENBQUNDLE1BQVQsQ0FBZ0JMLEdBQWhCLENBQWpCO0FBQ0FHLGdCQUFRLENBQUNHLFFBQVQsQ0FDQUYscUVBQVEsQ0FBQ0csTUFBVCxDQUFnQkMsR0FEaEIsRUFFQSxRQUZBO0FBR0MsT0FMSDs7QUFPQSwwQkFDRSw4REFBQyxxREFBRDtBQUFBLCtCQUNFLDhEQUFDLHVEQUFEO0FBQUEsaUNBQ0UsK0RBQUMsdURBQUQsQ0FBUSxPQUFSO0FBQUEsb0NBQ0UsOERBQUMsNERBQUQ7QUFBYSxrQkFBSSxFQUFDLE9BQWxCO0FBQUEsd0JBQTJCVDtBQUEzQixjQURGLGVBRUUsK0RBQUMscURBQUQ7QUFBQSxzQ0FDRSw4REFBQyxxREFBRDtBQUFNLHlCQUFTLE1BQWY7QUFBQSx1Q0FDRSwrREFBQywyREFBRDtBQUFBLDBDQUNFLCtEQUFDLDJEQUFELENBQVksS0FBWjtBQUFBLDRDQUNFLDhEQUFDLDBEQUFEO0FBQ0UsNEJBQU0sRUFBQyxHQURUO0FBRUUsMkJBQUssRUFBRWhCLEtBRlQ7QUFHRSw4QkFBUSxFQUFFLElBSFo7QUFJRSwyQkFBSyxFQUFDLGdCQUpSO0FBS0UsMEJBQUksRUFBQztBQUxQLHNCQURGLGVBUUUsOERBQUMsMERBQUQ7QUFDRSw0QkFBTSxFQUFDLEdBRFQ7QUFFRSwyQkFBSyxFQUFFRCxRQUZUO0FBR0UsOEJBQVEsRUFBRSxLQUFLMkIsWUFBTCxDQUFrQixVQUFsQixDQUhaO0FBSUUsMkJBQUssRUFBQyxrQkFKUjtBQUtFLDBCQUFJLEVBQUM7QUFMUCxzQkFSRjtBQUFBLG9CQURGLGVBaUJFO0FBQUE7QUFBQSxvQkFqQkY7QUFBQTtBQURGLGdCQURGLGVBd0JFLDhEQUFDLDREQUFEO0FBQ0UsNkJBQWEsRUFBRSxDQUNiO0FBQ0VDLHlCQUFPLEVBQUUsTUFEWDtBQUVFQywwQkFBUSxFQUFFLG9CQUFNO0FBQ2RDLDJCQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0FYLG1DQUFlO0FBQ2hCO0FBTEgsaUJBRGEsQ0FEakI7QUFVRSxnQ0FBZ0IsRUFBRSxDQUNoQjtBQUNFUSx5QkFBTyxFQUFFO0FBRFgsaUJBRGdCO0FBVnBCLGdCQXhCRjtBQUFBLGNBRkY7QUFBQTtBQURGO0FBREYsUUFERjtBQWtERDs7OztFQXZFdUJJLDZDQUFLLENBQUNDLFM7O0FBd0ZqQmxDLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VkaXQtcHJvZHVjdHMuNjNiNDI1ZDQ3NDBmZmE0MTA4ZDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBDYXJkLFxyXG4gICAgRGlzcGxheVRleHQsXHJcbiAgICBGb3JtLFxyXG4gICAgRm9ybUxheW91dCxcclxuICAgIExheW91dCxcclxuICAgIFBhZ2UsXHJcbiAgICBQYWdlQWN0aW9ucyxcclxuICAgIFRleHRGaWVsZFxyXG4gIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbiAgaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJztcclxuICBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4gIGltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zJztcclxuICBpbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdCc7XHJcblxyXG5cclxuXHJcbiAgXHJcbiAgY2xhc3MgRWRpdFByb2R1Y3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgIGRpc2NvdW50OiAnJyxcclxuICAgICAgcHJpY2U6ICcnLFxyXG4gICAgICB2YXJpYW50SWQ6ICcnXHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNjb3VudDogdGhpcy5pdGVtVG9CZUNvbnN1bWVkKCkgfSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHsgbmFtZSwgcHJpY2UsIGRpc2NvdW50LCB2YXJpYW50SWQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgIGNvbnN0IGFwcCA9IHRoaXMuY29udGV4dDtcclxuICAgICAgY29uc3QgcmVkaXJlY3RUb0luZGV4ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlZGlyZWN0ID0gUmVkaXJlY3QuY3JlYXRlKGFwcCk7XHJcbiAgICAgICAgcmVkaXJlY3QuZGlzcGF0Y2goXHJcbiAgICAgICAgUmVkaXJlY3QuQWN0aW9uLkFQUCxcclxuICAgICAgICAnL2luZGV4JyxcclxuICAgICAgKTt9XHJcbiAgXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFBhZ2U+XHJcbiAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPERpc3BsYXlUZXh0IHNpemU9XCJsYXJnZVwiPntuYW1lfTwvRGlzcGxheVRleHQ+XHJcbiAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0Lkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXg9XCIkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJPcmlnaW5hbCBwcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXg9XCIkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rpc2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ2Rpc2NvdW50Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGlzY291bnRlZCBwcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkaXNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dC5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgIFRoaXMgc2FsZSBwcmljZSB3aWxsIGV4cGlyZSBpbiB0d28gd2Vla3NcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDxQYWdlQWN0aW9uc1xyXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5QWN0aW9uPXtbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1NhdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Ym1pdHRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdFRvSW5kZXgoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeUFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnUmVtb3ZlIGRpc2NvdW50J1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9QYWdlPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGZpZWxkKSA9PiB7XHJcbiAgICAgIHJldHVybiAodmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiB2YWx1ZSB9KTtcclxuICAgICAgXHJcbiAgICB9O1xyXG4gIFxyXG4gICAgaXRlbVRvQmVDb25zdW1lZCA9ICgpID0+IHtcclxuICAgICAgY29uc3QgaXRlbSA9IHN0b3JlLmdldCgnaXRlbScpO1xyXG4gICAgICBjb25zdCBwcmljZSA9IGl0ZW0udmFyaWFudHMuZWRnZXNbMF0ubm9kZS5wcmljZTtcclxuICAgICAgY29uc3QgdmFyaWFudElkID0gaXRlbS52YXJpYW50cy5lZGdlc1swXS5ub2RlLmlkO1xyXG4gICAgICBjb25zdCBkaXNjb3VudGVyID0gcHJpY2UgKiAwLjI7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmljZSwgdmFyaWFudElkIH0pO1xyXG4gICAgICByZXR1cm4gKHByaWNlIC0gZGlzY291bnRlcikudG9GaXhlZCgyKTtcclxuICAgIH07XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEVkaXRQcm9kdWN0OyJdLCJzb3VyY2VSb290IjoiIn0=