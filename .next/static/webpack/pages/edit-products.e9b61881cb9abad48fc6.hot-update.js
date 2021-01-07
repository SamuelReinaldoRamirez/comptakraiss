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
      /*const app = this.context;
      const redirectToIndex = () => {
        const redirect = Redirect.create(app);
        redirect.dispatch(
        Redirect.Action.APP,
        '/index',
      );}
      */

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
                    console.log('submitted'); //redirectToIndex();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZWRpdC1wcm9kdWN0cy5qcyJdLCJuYW1lcyI6WyJFZGl0UHJvZHVjdCIsImRpc2NvdW50IiwicHJpY2UiLCJ2YXJpYW50SWQiLCJmaWVsZCIsInZhbHVlIiwic2V0U3RhdGUiLCJpdGVtIiwic3RvcmUiLCJnZXQiLCJ2YXJpYW50cyIsImVkZ2VzIiwibm9kZSIsImlkIiwiZGlzY291bnRlciIsInRvRml4ZWQiLCJpdGVtVG9CZUNvbnN1bWVkIiwic3RhdGUiLCJuYW1lIiwiaGFuZGxlQ2hhbmdlIiwiY29udGVudCIsIm9uQWN0aW9uIiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFVRTtBQUNBO0FBQ0E7QUFDQTs7SUFLTUEsVzs7Ozs7Ozs7Ozs7Ozs7OztnVUFDSTtBQUNOQyxjQUFRLEVBQUUsRUFESjtBQUVOQyxXQUFLLEVBQUUsRUFGRDtBQUdOQyxlQUFTLEVBQUU7QUFITCxLOzt1VUF5RU8sVUFBQ0MsS0FBRCxFQUFXO0FBQ3hCLGFBQU8sVUFBQ0MsS0FBRDtBQUFBLGVBQVcsTUFBS0MsUUFBTCx1SkFBaUJGLEtBQWpCLEVBQXlCQyxLQUF6QixFQUFYO0FBQUEsT0FBUDtBQUVELEs7OzJVQUVrQixZQUFNO0FBQ3ZCLFVBQU1FLElBQUksR0FBR0MsK0NBQUssQ0FBQ0MsR0FBTixDQUFVLE1BQVYsQ0FBYjtBQUNBLFVBQU1QLEtBQUssR0FBR0ssSUFBSSxDQUFDRyxRQUFMLENBQWNDLEtBQWQsQ0FBb0IsQ0FBcEIsRUFBdUJDLElBQXZCLENBQTRCVixLQUExQztBQUNBLFVBQU1DLFNBQVMsR0FBR0ksSUFBSSxDQUFDRyxRQUFMLENBQWNDLEtBQWQsQ0FBb0IsQ0FBcEIsRUFBdUJDLElBQXZCLENBQTRCQyxFQUE5QztBQUNBLFVBQU1DLFVBQVUsR0FBR1osS0FBSyxHQUFHLEdBQTNCOztBQUNBLFlBQUtJLFFBQUwsQ0FBYztBQUFFSixhQUFLLEVBQUxBLEtBQUY7QUFBU0MsaUJBQVMsRUFBVEE7QUFBVCxPQUFkOztBQUNBLGFBQU8sQ0FBQ0QsS0FBSyxHQUFHWSxVQUFULEVBQXFCQyxPQUFyQixDQUE2QixDQUE3QixDQUFQO0FBQ0QsSzs7Ozs7Ozt3Q0EvRW1CO0FBQ2xCLFdBQUtULFFBQUwsQ0FBYztBQUFFTCxnQkFBUSxFQUFFLEtBQUtlLGdCQUFMO0FBQVosT0FBZDtBQUNEOzs7NkJBRVE7QUFBQSx3QkFDc0MsS0FBS0MsS0FEM0M7QUFBQSxVQUNDQyxJQURELGVBQ0NBLElBREQ7QUFBQSxVQUNPaEIsS0FEUCxlQUNPQSxLQURQO0FBQUEsVUFDY0QsUUFEZCxlQUNjQSxRQURkO0FBQUEsVUFDd0JFLFNBRHhCLGVBQ3dCQSxTQUR4QjtBQUVQO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU0sMEJBQ0UsOERBQUMscURBQUQ7QUFBQSwrQkFDRSw4REFBQyx1REFBRDtBQUFBLGlDQUNFLCtEQUFDLHVEQUFELENBQVEsT0FBUjtBQUFBLG9DQUNFLDhEQUFDLDREQUFEO0FBQWEsa0JBQUksRUFBQyxPQUFsQjtBQUFBLHdCQUEyQmU7QUFBM0IsY0FERixlQUVFLCtEQUFDLHFEQUFEO0FBQUEsc0NBQ0UsOERBQUMscURBQUQ7QUFBTSx5QkFBUyxNQUFmO0FBQUEsdUNBQ0UsK0RBQUMsMkRBQUQ7QUFBQSwwQ0FDRSwrREFBQywyREFBRCxDQUFZLEtBQVo7QUFBQSw0Q0FDRSw4REFBQywwREFBRDtBQUNFLDRCQUFNLEVBQUMsR0FEVDtBQUVFLDJCQUFLLEVBQUVoQixLQUZUO0FBR0UsOEJBQVEsRUFBRSxJQUhaO0FBSUUsMkJBQUssRUFBQyxnQkFKUjtBQUtFLDBCQUFJLEVBQUM7QUFMUCxzQkFERixlQVFFLDhEQUFDLDBEQUFEO0FBQ0UsNEJBQU0sRUFBQyxHQURUO0FBRUUsMkJBQUssRUFBRUQsUUFGVDtBQUdFLDhCQUFRLEVBQUUsS0FBS2tCLFlBQUwsQ0FBa0IsVUFBbEIsQ0FIWjtBQUlFLDJCQUFLLEVBQUMsa0JBSlI7QUFLRSwwQkFBSSxFQUFDO0FBTFAsc0JBUkY7QUFBQSxvQkFERixlQWlCRTtBQUFBO0FBQUEsb0JBakJGO0FBQUE7QUFERixnQkFERixlQXdCRSw4REFBQyw0REFBRDtBQUNFLDZCQUFhLEVBQUUsQ0FDYjtBQUNFQyx5QkFBTyxFQUFFLE1BRFg7QUFFRUMsMEJBQVEsRUFBRSxvQkFBTTtBQUNkQywyQkFBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQURjLENBRWQ7QUFDRDtBQUxILGlCQURhLENBRGpCO0FBVUUsZ0NBQWdCLEVBQUUsQ0FDaEI7QUFDRUgseUJBQU8sRUFBRTtBQURYLGlCQURnQjtBQVZwQixnQkF4QkY7QUFBQSxjQUZGO0FBQUE7QUFERjtBQURGLFFBREY7QUFrREQ7Ozs7RUF4RXVCSSw2Q0FBSyxDQUFDQyxTOztBQXlGakJ6QiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lZGl0LXByb2R1Y3RzLmU5YjYxODgxY2I5YWJhZDQ4ZmM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ2FyZCxcclxuICAgIERpc3BsYXlUZXh0LFxyXG4gICAgRm9ybSxcclxuICAgIEZvcm1MYXlvdXQsXHJcbiAgICBMYXlvdXQsXHJcbiAgICBQYWdlLFxyXG4gICAgUGFnZUFjdGlvbnMsXHJcbiAgICBUZXh0RmllbGRcclxuICB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG4gIGltcG9ydCBzdG9yZSBmcm9tICdzdG9yZS1qcyc7XHJcbiAgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuICBpbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucyc7XHJcbiAgaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3QnO1xyXG5cclxuXHJcblxyXG4gIFxyXG4gIGNsYXNzIEVkaXRQcm9kdWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICBkaXNjb3VudDogJycsXHJcbiAgICAgIHByaWNlOiAnJyxcclxuICAgICAgdmFyaWFudElkOiAnJ1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZGlzY291bnQ6IHRoaXMuaXRlbVRvQmVDb25zdW1lZCgpIH0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB7IG5hbWUsIHByaWNlLCBkaXNjb3VudCwgdmFyaWFudElkIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAvKmNvbnN0IGFwcCA9IHRoaXMuY29udGV4dDtcclxuICAgICAgY29uc3QgcmVkaXJlY3RUb0luZGV4ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlZGlyZWN0ID0gUmVkaXJlY3QuY3JlYXRlKGFwcCk7XHJcbiAgICAgICAgcmVkaXJlY3QuZGlzcGF0Y2goXHJcbiAgICAgICAgUmVkaXJlY3QuQWN0aW9uLkFQUCxcclxuICAgICAgICAnL2luZGV4JyxcclxuICAgICAgKTt9XHJcbiAgICAgICovXHJcbiAgXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFBhZ2U+XHJcbiAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPERpc3BsYXlUZXh0IHNpemU9XCJsYXJnZVwiPntuYW1lfTwvRGlzcGxheVRleHQ+XHJcbiAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0Lkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXg9XCIkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJPcmlnaW5hbCBwcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXg9XCIkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rpc2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ2Rpc2NvdW50Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGlzY291bnRlZCBwcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkaXNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dC5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgIFRoaXMgc2FsZSBwcmljZSB3aWxsIGV4cGlyZSBpbiB0d28gd2Vla3NcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDxQYWdlQWN0aW9uc1xyXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5QWN0aW9uPXtbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1NhdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Ym1pdHRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3JlZGlyZWN0VG9JbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5QWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdSZW1vdmUgZGlzY291bnQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L1BhZ2U+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoZmllbGQpID0+IHtcclxuICAgICAgcmV0dXJuICh2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IFtmaWVsZF06IHZhbHVlIH0pO1xyXG4gICAgICBcclxuICAgIH07XHJcbiAgXHJcbiAgICBpdGVtVG9CZUNvbnN1bWVkID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBpdGVtID0gc3RvcmUuZ2V0KCdpdGVtJyk7XHJcbiAgICAgIGNvbnN0IHByaWNlID0gaXRlbS52YXJpYW50cy5lZGdlc1swXS5ub2RlLnByaWNlO1xyXG4gICAgICBjb25zdCB2YXJpYW50SWQgPSBpdGVtLnZhcmlhbnRzLmVkZ2VzWzBdLm5vZGUuaWQ7XHJcbiAgICAgIGNvbnN0IGRpc2NvdW50ZXIgPSBwcmljZSAqIDAuMjtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByaWNlLCB2YXJpYW50SWQgfSk7XHJcbiAgICAgIHJldHVybiAocHJpY2UgLSBkaXNjb3VudGVyKS50b0ZpeGVkKDIpO1xyXG4gICAgfTtcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgRWRpdFByb2R1Y3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==