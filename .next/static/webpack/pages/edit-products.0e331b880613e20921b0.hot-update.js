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
      var discounter = price * 0.15;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZWRpdC1wcm9kdWN0cy5qcyJdLCJuYW1lcyI6WyJFZGl0UHJvZHVjdCIsImRpc2NvdW50IiwicHJpY2UiLCJ2YXJpYW50SWQiLCJmaWVsZCIsInZhbHVlIiwic2V0U3RhdGUiLCJpdGVtIiwic3RvcmUiLCJnZXQiLCJ2YXJpYW50cyIsImVkZ2VzIiwibm9kZSIsImlkIiwiZGlzY291bnRlciIsInRvRml4ZWQiLCJpdGVtVG9CZUNvbnN1bWVkIiwic3RhdGUiLCJuYW1lIiwiaGFuZGxlQ2hhbmdlIiwiY29udGVudCIsIm9uQWN0aW9uIiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVVFO0FBQ0E7O0lBR01BLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Z1VBQ0k7QUFDTkMsY0FBUSxFQUFFLEVBREo7QUFFTkMsV0FBSyxFQUFFLEVBRkQ7QUFHTkMsZUFBUyxFQUFFO0FBSEwsSzs7dVVBZ0VPLFVBQUNDLEtBQUQsRUFBVztBQUN4QixhQUFPLFVBQUNDLEtBQUQ7QUFBQSxlQUFXLE1BQUtDLFFBQUwsdUpBQWlCRixLQUFqQixFQUF5QkMsS0FBekIsRUFBWDtBQUFBLE9BQVA7QUFDRCxLOzsyVUFFa0IsWUFBTTtBQUN2QixVQUFNRSxJQUFJLEdBQUdDLCtDQUFLLENBQUNDLEdBQU4sQ0FBVSxNQUFWLENBQWI7QUFDQSxVQUFNUCxLQUFLLEdBQUdLLElBQUksQ0FBQ0csUUFBTCxDQUFjQyxLQUFkLENBQW9CLENBQXBCLEVBQXVCQyxJQUF2QixDQUE0QlYsS0FBMUM7QUFDQSxVQUFNQyxTQUFTLEdBQUdJLElBQUksQ0FBQ0csUUFBTCxDQUFjQyxLQUFkLENBQW9CLENBQXBCLEVBQXVCQyxJQUF2QixDQUE0QkMsRUFBOUM7QUFDQSxVQUFNQyxVQUFVLEdBQUdaLEtBQUssR0FBRyxJQUEzQjs7QUFDQSxZQUFLSSxRQUFMLENBQWM7QUFBRUosYUFBSyxFQUFMQSxLQUFGO0FBQVNDLGlCQUFTLEVBQVRBO0FBQVQsT0FBZDs7QUFDQSxhQUFPLENBQUNELEtBQUssR0FBR1ksVUFBVCxFQUFxQkMsT0FBckIsQ0FBNkIsQ0FBN0IsQ0FBUDtBQUNELEs7Ozs7Ozs7d0NBckVtQjtBQUNsQixXQUFLVCxRQUFMLENBQWM7QUFBRUwsZ0JBQVEsRUFBRSxLQUFLZSxnQkFBTDtBQUFaLE9BQWQ7QUFDRDs7OzZCQUVRO0FBQUEsd0JBQ3NDLEtBQUtDLEtBRDNDO0FBQUEsVUFDQ0MsSUFERCxlQUNDQSxJQUREO0FBQUEsVUFDT2hCLEtBRFAsZUFDT0EsS0FEUDtBQUFBLFVBQ2NELFFBRGQsZUFDY0EsUUFEZDtBQUFBLFVBQ3dCRSxTQUR4QixlQUN3QkEsU0FEeEI7QUFHUCwwQkFDRSw4REFBQyxxREFBRDtBQUFBLCtCQUNFLDhEQUFDLHVEQUFEO0FBQUEsaUNBQ0UsK0RBQUMsdURBQUQsQ0FBUSxPQUFSO0FBQUEsb0NBQ0UsOERBQUMsNERBQUQ7QUFBYSxrQkFBSSxFQUFDLE9BQWxCO0FBQUEsd0JBQTJCZTtBQUEzQixjQURGLGVBRUUsK0RBQUMscURBQUQ7QUFBQSxzQ0FDRSw4REFBQyxxREFBRDtBQUFNLHlCQUFTLE1BQWY7QUFBQSx1Q0FDRSwrREFBQywyREFBRDtBQUFBLDBDQUNFLCtEQUFDLDJEQUFELENBQVksS0FBWjtBQUFBLDRDQUNFLDhEQUFDLDBEQUFEO0FBQ0UsNEJBQU0sRUFBQyxHQURUO0FBRUUsMkJBQUssRUFBRWhCLEtBRlQ7QUFHRSw4QkFBUSxFQUFFLElBSFo7QUFJRSwyQkFBSyxFQUFDLGdCQUpSO0FBS0UsMEJBQUksRUFBQztBQUxQLHNCQURGLGVBUUUsOERBQUMsMERBQUQ7QUFDRSw0QkFBTSxFQUFDLEdBRFQ7QUFFRSwyQkFBSyxFQUFFRCxRQUZUO0FBR0UsOEJBQVEsRUFBRSxLQUFLa0IsWUFBTCxDQUFrQixVQUFsQixDQUhaO0FBSUUsMkJBQUssRUFBQyxrQkFKUjtBQUtFLDBCQUFJLEVBQUM7QUFMUCxzQkFSRjtBQUFBLG9CQURGLGVBaUJFO0FBQUE7QUFBQSxvQkFqQkY7QUFBQTtBQURGLGdCQURGLGVBd0JFLDhEQUFDLDREQUFEO0FBQ0UsNkJBQWEsRUFBRSxDQUNiO0FBQ0VDLHlCQUFPLEVBQUUsTUFEWDtBQUVFQywwQkFBUSxFQUFFLG9CQUFNO0FBQ2RDLDJCQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0Q7QUFKSCxpQkFEYSxDQURqQjtBQVNFLGdDQUFnQixFQUFFLENBQ2hCO0FBQ0VILHlCQUFPLEVBQUU7QUFEWCxpQkFEZ0I7QUFUcEIsZ0JBeEJGO0FBQUEsY0FGRjtBQUFBO0FBREY7QUFERixRQURGO0FBaUREOzs7O0VBL0R1QkksNkNBQUssQ0FBQ0MsUzs7QUErRWpCekIsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZWRpdC1wcm9kdWN0cy4wZTMzMWI4ODA2MTNlMjA5MjFiMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENhcmQsXHJcbiAgICBEaXNwbGF5VGV4dCxcclxuICAgIEZvcm0sXHJcbiAgICBGb3JtTGF5b3V0LFxyXG4gICAgTGF5b3V0LFxyXG4gICAgUGFnZSxcclxuICAgIFBhZ2VBY3Rpb25zLFxyXG4gICAgVGV4dEZpZWxkXHJcbiAgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuICBpbXBvcnQgc3RvcmUgZnJvbSAnc3RvcmUtanMnO1xyXG4gIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG4gIFxyXG4gIGNsYXNzIEVkaXRQcm9kdWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICBkaXNjb3VudDogJycsXHJcbiAgICAgIHByaWNlOiAnJyxcclxuICAgICAgdmFyaWFudElkOiAnJ1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZGlzY291bnQ6IHRoaXMuaXRlbVRvQmVDb25zdW1lZCgpIH0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB7IG5hbWUsIHByaWNlLCBkaXNjb3VudCwgdmFyaWFudElkIH0gPSB0aGlzLnN0YXRlO1xyXG4gIFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQYWdlPlxyXG4gICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDxEaXNwbGF5VGV4dCBzaXplPVwibGFyZ2VcIj57bmFtZX08L0Rpc3BsYXlUZXh0PlxyXG4gICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUxheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUxheW91dC5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4PVwiJFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiT3JpZ2luYWwgcHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4PVwiJFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkaXNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdkaXNjb3VudCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRpc2NvdW50ZWQgcHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGlzY291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQuR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBUaGlzIHNhbGUgcHJpY2Ugd2lsbCBleHBpcmUgaW4gdHdvIHdlZWtzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8UGFnZUFjdGlvbnNcclxuICAgICAgICAgICAgICAgICAgcHJpbWFyeUFjdGlvbj17W1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdTYXZlJyxcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXR0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeUFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnUmVtb3ZlIGRpc2NvdW50J1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9QYWdlPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGZpZWxkKSA9PiB7XHJcbiAgICAgIHJldHVybiAodmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiB2YWx1ZSB9KTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBpdGVtVG9CZUNvbnN1bWVkID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBpdGVtID0gc3RvcmUuZ2V0KCdpdGVtJyk7XHJcbiAgICAgIGNvbnN0IHByaWNlID0gaXRlbS52YXJpYW50cy5lZGdlc1swXS5ub2RlLnByaWNlO1xyXG4gICAgICBjb25zdCB2YXJpYW50SWQgPSBpdGVtLnZhcmlhbnRzLmVkZ2VzWzBdLm5vZGUuaWQ7XHJcbiAgICAgIGNvbnN0IGRpc2NvdW50ZXIgPSBwcmljZSAqIDAuMTU7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmljZSwgdmFyaWFudElkIH0pO1xyXG4gICAgICByZXR1cm4gKHByaWNlIC0gZGlzY291bnRlcikudG9GaXhlZCgyKTtcclxuICAgIH07XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEVkaXRQcm9kdWN0OyJdLCJzb3VyY2VSb290IjoiIn0=