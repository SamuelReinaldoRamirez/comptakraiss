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
/* harmony import */ var C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! store-js */ "./node_modules/store-js/dist/store.legacy.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  mutation productVariantUpdate($input: ProductVariantInput!) {\n    productVariantUpdate(input: $input) {\n      product {\n        title\n      }\n      productVariant {\n        id\n        price\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



 //import { Redirect } from '@shopify/app-bridge/actions';
//import { Context } from '@shopify/app-bridge-react';



var UPDATE_PRICE = graphql_tag__WEBPACK_IMPORTED_MODULE_12___default()(_templateObject());

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
      var item = store_js__WEBPACK_IMPORTED_MODULE_10___default.a.get('item');
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
      var _this2 = this;

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

      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_13__["Mutation"], {
        mutation: UPDATE_PRICE,
        children: function children(handleSubmit, _ref) {
          var error = _ref.error,
              data = _ref.data;
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Page"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Layout"], {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Layout"].Section, {
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["DisplayText"], {
                  size: "large",
                  children: name
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Form"], {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Card"], {
                    sectioned: true,
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["FormLayout"], {
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["FormLayout"].Group, {
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
                          prefix: "$",
                          value: price,
                          disabled: true,
                          label: "Original price",
                          type: "price"
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
                          prefix: "$",
                          value: discount,
                          onChange: _this2.handleChange('discount'),
                          label: "Discounted price",
                          type: "discount"
                        })]
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("p", {
                        children: "This sale price will expire in two weeks"
                      })]
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["PageActions"], {
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
      });
    }
  }]);

  return EditProduct;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZWRpdC1wcm9kdWN0cy5qcyJdLCJuYW1lcyI6WyJVUERBVEVfUFJJQ0UiLCJncWwiLCJFZGl0UHJvZHVjdCIsImRpc2NvdW50IiwicHJpY2UiLCJ2YXJpYW50SWQiLCJmaWVsZCIsInZhbHVlIiwic2V0U3RhdGUiLCJpdGVtIiwic3RvcmUiLCJnZXQiLCJ2YXJpYW50cyIsImVkZ2VzIiwibm9kZSIsImlkIiwiZGlzY291bnRlciIsInRvRml4ZWQiLCJpdGVtVG9CZUNvbnN1bWVkIiwic3RhdGUiLCJuYW1lIiwiaGFuZGxlU3VibWl0IiwiZXJyb3IiLCJkYXRhIiwiaGFuZGxlQ2hhbmdlIiwiY29udGVudCIsIm9uQWN0aW9uIiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVVFO0NBRUE7QUFDQTs7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHQyxtREFBSCxtQkFBbEI7O0lBZU1DLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Z1VBQ0k7QUFDTkMsY0FBUSxFQUFFLEVBREo7QUFFTkMsV0FBSyxFQUFFLEVBRkQ7QUFHTkMsZUFBUyxFQUFFO0FBSEwsSzs7dVVBa0ZPLFVBQUNDLEtBQUQsRUFBVztBQUN4QixhQUFPLFVBQUNDLEtBQUQ7QUFBQSxlQUFXLE1BQUtDLFFBQUwsdUpBQWlCRixLQUFqQixFQUF5QkMsS0FBekIsRUFBWDtBQUFBLE9BQVA7QUFFRCxLOzsyVUFFa0IsWUFBTTtBQUN2QixVQUFNRSxJQUFJLEdBQUdDLGdEQUFLLENBQUNDLEdBQU4sQ0FBVSxNQUFWLENBQWI7QUFDQSxVQUFNUCxLQUFLLEdBQUdLLElBQUksQ0FBQ0csUUFBTCxDQUFjQyxLQUFkLENBQW9CLENBQXBCLEVBQXVCQyxJQUF2QixDQUE0QlYsS0FBMUM7QUFDQSxVQUFNQyxTQUFTLEdBQUdJLElBQUksQ0FBQ0csUUFBTCxDQUFjQyxLQUFkLENBQW9CLENBQXBCLEVBQXVCQyxJQUF2QixDQUE0QkMsRUFBOUM7QUFDQSxVQUFNQyxVQUFVLEdBQUdaLEtBQUssR0FBRyxHQUEzQjs7QUFDQSxZQUFLSSxRQUFMLENBQWM7QUFBRUosYUFBSyxFQUFMQSxLQUFGO0FBQVNDLGlCQUFTLEVBQVRBO0FBQVQsT0FBZDs7QUFDQSxhQUFPLENBQUNELEtBQUssR0FBR1ksVUFBVCxFQUFxQkMsT0FBckIsQ0FBNkIsQ0FBN0IsQ0FBUDtBQUNELEs7Ozs7Ozs7d0NBeEZtQjtBQUNsQixXQUFLVCxRQUFMLENBQWM7QUFBRUwsZ0JBQVEsRUFBRSxLQUFLZSxnQkFBTDtBQUFaLE9BQWQ7QUFDRDs7OzZCQUVRO0FBQUE7O0FBQUEsd0JBQ3NDLEtBQUtDLEtBRDNDO0FBQUEsVUFDQ0MsSUFERCxlQUNDQSxJQUREO0FBQUEsVUFDT2hCLEtBRFAsZUFDT0EsS0FEUDtBQUFBLFVBQ2NELFFBRGQsZUFDY0EsUUFEZDtBQUFBLFVBQ3dCRSxTQUR4QixlQUN3QkEsU0FEeEI7QUFFUDtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVLLDBCQUNHLDhEQUFDLHNEQUFEO0FBQ0UsZ0JBQVEsRUFBRUwsWUFEWjtBQUFBLGtCQUdHLGtCQUFDcUIsWUFBRCxRQUFpQztBQUFBLGNBQWpCQyxLQUFpQixRQUFqQkEsS0FBaUI7QUFBQSxjQUFWQyxJQUFVLFFBQVZBLElBQVU7QUFFdEMsOEJBQ0UsOERBQUMscURBQUQ7QUFBQSxtQ0FDRSw4REFBQyx1REFBRDtBQUFBLHFDQUNFLCtEQUFDLHVEQUFELENBQVEsT0FBUjtBQUFBLHdDQUNFLDhEQUFDLDREQUFEO0FBQWEsc0JBQUksRUFBQyxPQUFsQjtBQUFBLDRCQUEyQkg7QUFBM0Isa0JBREYsZUFFRSwrREFBQyxxREFBRDtBQUFBLDBDQUNFLDhEQUFDLHFEQUFEO0FBQU0sNkJBQVMsTUFBZjtBQUFBLDJDQUNFLCtEQUFDLDJEQUFEO0FBQUEsOENBQ0UsK0RBQUMsMkRBQUQsQ0FBWSxLQUFaO0FBQUEsZ0RBQ0UsOERBQUMsMERBQUQ7QUFDRSxnQ0FBTSxFQUFDLEdBRFQ7QUFFRSwrQkFBSyxFQUFFaEIsS0FGVDtBQUdFLGtDQUFRLEVBQUUsSUFIWjtBQUlFLCtCQUFLLEVBQUMsZ0JBSlI7QUFLRSw4QkFBSSxFQUFDO0FBTFAsMEJBREYsZUFRRSw4REFBQywwREFBRDtBQUNFLGdDQUFNLEVBQUMsR0FEVDtBQUVFLCtCQUFLLEVBQUVELFFBRlQ7QUFHRSxrQ0FBUSxFQUFFLE1BQUksQ0FBQ3FCLFlBQUwsQ0FBa0IsVUFBbEIsQ0FIWjtBQUlFLCtCQUFLLEVBQUMsa0JBSlI7QUFLRSw4QkFBSSxFQUFDO0FBTFAsMEJBUkY7QUFBQSx3QkFERixlQWlCRTtBQUFBO0FBQUEsd0JBakJGO0FBQUE7QUFERixvQkFERixlQXdCRSw4REFBQyw0REFBRDtBQUNFLGlDQUFhLEVBQUUsQ0FDYjtBQUNFQyw2QkFBTyxFQUFFLE1BRFg7QUFFRUMsOEJBQVEsRUFBRSxvQkFBTTtBQUNkQywrQkFBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQURjLENBRWQ7QUFDRDtBQUxILHFCQURhLENBRGpCO0FBVUUsb0NBQWdCLEVBQUUsQ0FDaEI7QUFDRUgsNkJBQU8sRUFBRTtBQURYLHFCQURnQjtBQVZwQixvQkF4QkY7QUFBQSxrQkFGRjtBQUFBO0FBREY7QUFERixZQURGO0FBa0REO0FBdkRHLFFBREg7QUEyREE7Ozs7RUFqRnVCSSw2Q0FBSyxDQUFDQyxTOztBQWtHakI1QiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lZGl0LXByb2R1Y3RzLmQ0MDE0N2M0MThjNDU5M2RmMjI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ2FyZCxcclxuICAgIERpc3BsYXlUZXh0LFxyXG4gICAgRm9ybSxcclxuICAgIEZvcm1MYXlvdXQsXHJcbiAgICBMYXlvdXQsXHJcbiAgICBQYWdlLFxyXG4gICAgUGFnZUFjdGlvbnMsXHJcbiAgICBUZXh0RmllbGRcclxuICB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG4gIGltcG9ydCBzdG9yZSBmcm9tICdzdG9yZS1qcyc7XHJcbiAgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuICAvL2ltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zJztcclxuICAvL2ltcG9ydCB7IENvbnRleHQgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcclxuICBpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuICBpbXBvcnQgeyBNdXRhdGlvbiB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XHJcblxyXG4gIGNvbnN0IFVQREFURV9QUklDRSA9IGdxbGBcclxuICBtdXRhdGlvbiBwcm9kdWN0VmFyaWFudFVwZGF0ZSgkaW5wdXQ6IFByb2R1Y3RWYXJpYW50SW5wdXQhKSB7XHJcbiAgICBwcm9kdWN0VmFyaWFudFVwZGF0ZShpbnB1dDogJGlucHV0KSB7XHJcbiAgICAgIHByb2R1Y3Qge1xyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgIH1cclxuICAgICAgcHJvZHVjdFZhcmlhbnQge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgcHJpY2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbiAgXHJcbiAgY2xhc3MgRWRpdFByb2R1Y3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgIGRpc2NvdW50OiAnJyxcclxuICAgICAgcHJpY2U6ICcnLFxyXG4gICAgICB2YXJpYW50SWQ6ICcnXHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNjb3VudDogdGhpcy5pdGVtVG9CZUNvbnN1bWVkKCkgfSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHsgbmFtZSwgcHJpY2UsIGRpc2NvdW50LCB2YXJpYW50SWQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgIC8qY29uc3QgYXBwID0gdGhpcy5jb250ZXh0O1xyXG4gICAgICBjb25zdCByZWRpcmVjdFRvSW5kZXggPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVkaXJlY3QgPSBSZWRpcmVjdC5jcmVhdGUoYXBwKTtcclxuICAgICAgICByZWRpcmVjdC5kaXNwYXRjaChcclxuICAgICAgICBSZWRpcmVjdC5BY3Rpb24uQVBQLFxyXG4gICAgICAgICcvaW5kZXgnLFxyXG4gICAgICApO31cclxuICAgICAgKi9cclxuXHJcbiAgICAgcmV0dXJuIChcclxuICAgICAgICA8TXV0YXRpb25cclxuICAgICAgICAgIG11dGF0aW9uPXtVUERBVEVfUFJJQ0V9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeyhoYW5kbGVTdWJtaXQsIHtlcnJvciwgZGF0YX0pID0+IHtcclxuICBcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8UGFnZT5cclxuICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICA8RGlzcGxheVRleHQgc2l6ZT1cImxhcmdlXCI+e25hbWV9PC9EaXNwbGF5VGV4dD5cclxuICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1MYXlvdXQuR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeD1cIiRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk9yaWdpbmFsIHByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeD1cIiRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGlzY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnZGlzY291bnQnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEaXNjb3VudGVkIHByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRpc2NvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtTGF5b3V0Lkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgVGhpcyBzYWxlIHByaWNlIHdpbGwgZXhwaXJlIGluIHR3byB3ZWVrc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPFBhZ2VBY3Rpb25zXHJcbiAgICAgICAgICAgICAgICAgIHByaW1hcnlBY3Rpb249e1tcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnU2F2ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3VibWl0dGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcmVkaXJlY3RUb0luZGV4KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICBzZWNvbmRhcnlBY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1JlbW92ZSBkaXNjb3VudCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvUGFnZT5cclxuICAgICAgKTtcclxuICAgIH19XHJcbiAgICA8L011dGF0aW9uPlxyXG4gICk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoZmllbGQpID0+IHtcclxuICAgICAgcmV0dXJuICh2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IFtmaWVsZF06IHZhbHVlIH0pO1xyXG4gICAgICBcclxuICAgIH07XHJcbiAgXHJcbiAgICBpdGVtVG9CZUNvbnN1bWVkID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBpdGVtID0gc3RvcmUuZ2V0KCdpdGVtJyk7XHJcbiAgICAgIGNvbnN0IHByaWNlID0gaXRlbS52YXJpYW50cy5lZGdlc1swXS5ub2RlLnByaWNlO1xyXG4gICAgICBjb25zdCB2YXJpYW50SWQgPSBpdGVtLnZhcmlhbnRzLmVkZ2VzWzBdLm5vZGUuaWQ7XHJcbiAgICAgIGNvbnN0IGRpc2NvdW50ZXIgPSBwcmljZSAqIDAuMjtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByaWNlLCB2YXJpYW50SWQgfSk7XHJcbiAgICAgIHJldHVybiAocHJpY2UgLSBkaXNjb3VudGVyKS50b0ZpeGVkKDIpO1xyXG4gICAgfTtcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgRWRpdFByb2R1Y3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==