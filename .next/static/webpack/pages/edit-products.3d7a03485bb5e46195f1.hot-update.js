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
      variantId: '',
      showToast: false
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

          var showError = error && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Banner"], {
            status: "critical",
            children: error.message
          });

          var showToast = data && data.productVariantUpdate && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Toast"], {
            content: "Sucessfully updated",
            onDismiss: function onDismiss() {
              return _this2.setState({
                showToast: false
              });
            }
          });

          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Frame"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Page"], {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Layout"], {
                children: [showToast, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Layout"].Section, {
                  children: showError
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Layout"].Section, {
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
                          console.log('submitted');
                          var productVariableInput = {
                            id: variantId,
                            price: discount
                          };
                          handleSubmit({
                            variables: {
                              input: productVariableInput
                            }
                          }); //redirectToIndex();
                        }
                      }],
                      secondaryActions: [{
                        content: 'Remove discount'
                      }]
                    })]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZWRpdC1wcm9kdWN0cy5qcyJdLCJuYW1lcyI6WyJVUERBVEVfUFJJQ0UiLCJncWwiLCJFZGl0UHJvZHVjdCIsImRpc2NvdW50IiwicHJpY2UiLCJ2YXJpYW50SWQiLCJzaG93VG9hc3QiLCJmaWVsZCIsInZhbHVlIiwic2V0U3RhdGUiLCJpdGVtIiwic3RvcmUiLCJnZXQiLCJ2YXJpYW50cyIsImVkZ2VzIiwibm9kZSIsImlkIiwiZGlzY291bnRlciIsInRvRml4ZWQiLCJpdGVtVG9CZUNvbnN1bWVkIiwic3RhdGUiLCJuYW1lIiwiaGFuZGxlU3VibWl0IiwiZXJyb3IiLCJkYXRhIiwic2hvd0Vycm9yIiwibWVzc2FnZSIsInByb2R1Y3RWYXJpYW50VXBkYXRlIiwiaGFuZGxlQ2hhbmdlIiwiY29udGVudCIsIm9uQWN0aW9uIiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RWYXJpYWJsZUlucHV0IiwidmFyaWFibGVzIiwiaW5wdXQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFhRTtDQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBR0MsbURBQUgsbUJBQWxCOztJQWVNQyxXOzs7Ozs7Ozs7Ozs7Ozs7O2dVQUNJO0FBQ05DLGNBQVEsRUFBRSxFQURKO0FBRU5DLFdBQUssRUFBRSxFQUZEO0FBR05DLGVBQVMsRUFBRSxFQUhMO0FBSU5DLGVBQVMsRUFBRTtBQUpMLEs7O3VVQXlHTyxVQUFDQyxLQUFELEVBQVc7QUFDeEIsYUFBTyxVQUFDQyxLQUFEO0FBQUEsZUFBVyxNQUFLQyxRQUFMLHVKQUFpQkYsS0FBakIsRUFBeUJDLEtBQXpCLEVBQVg7QUFBQSxPQUFQO0FBRUQsSzs7MlVBRWtCLFlBQU07QUFDdkIsVUFBTUUsSUFBSSxHQUFHQyxnREFBSyxDQUFDQyxHQUFOLENB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QUNFQywrQkFBTyxFQUFFLE1BRFg7QUFFRUMsZ0NBQVEsRUFBRSxvQkFBTTtBQUNkQyxpQ0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNBLDhCQUFNQyxvQkFBb0IsR0FBRztBQUN6QmpCLDhCQUFFLEVBQUVYLFNBRHFCO0FBRXpCRCxpQ0FBSyxFQUFFRDtBQUZrQiwyQkFBN0I7QUFJRW1CLHNDQUFZLENBQUM7QUFDWFkscUNBQVMsRUFBRTtBQUFFQyxtQ0FBSyxFQUFFRjtBQUFUO0FBREEsMkJBQUQsQ0FBWixDQU5ZLENBU2Q7QUFDRDtBQVpILHVCQURhLENBRGpCO0FBaUJFLHNDQUFnQixFQUFFLENBQ2hCO0FBQ0VKLCtCQUFPLEVBQUU7QUFEWCx1QkFEZ0I7QUFqQnBCLHNCQXhCRjtBQUFBLG9CQUZGO0FBQUEsa0JBTEY7QUFBQTtBQURGO0FBREEsWUFERjtBQStERDtBQTdFRyxRQURIO0FBaUZBOzs7O0VBeEd1Qk8sNkNBQUssQ0FBQ0MsUzs7QUF5SGpCbkMsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZWRpdC1wcm9kdWN0cy4zZDdhMDM0ODViYjVlNDYxOTVmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIEJhbm5lcixcclxuICAgIENhcmQsXHJcbiAgICBEaXNwbGF5VGV4dCxcclxuICAgIEZvcm0sXHJcbiAgICBGb3JtTGF5b3V0LFxyXG4gICAgRnJhbWUsXHJcbiAgICBMYXlvdXQsXHJcbiAgICBQYWdlLFxyXG4gICAgUGFnZUFjdGlvbnMsXHJcbiAgICBUZXh0RmllbGQsXHJcbiAgICBUb2FzdCxcclxuICB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG4gIGltcG9ydCBzdG9yZSBmcm9tICdzdG9yZS1qcyc7XHJcbiAgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuICAvL2ltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zJztcclxuICAvL2ltcG9ydCB7IENvbnRleHQgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcclxuICBpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuICBpbXBvcnQgeyBNdXRhdGlvbiB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XHJcblxyXG4gIGNvbnN0IFVQREFURV9QUklDRSA9IGdxbGBcclxuICBtdXRhdGlvbiBwcm9kdWN0VmFyaWFudFVwZGF0ZSgkaW5wdXQ6IFByb2R1Y3RWYXJpYW50SW5wdXQhKSB7XHJcbiAgICBwcm9kdWN0VmFyaWFudFVwZGF0ZShpbnB1dDogJGlucHV0KSB7XHJcbiAgICAgIHByb2R1Y3Qge1xyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgIH1cclxuICAgICAgcHJvZHVjdFZhcmlhbnQge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgcHJpY2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbiAgXHJcbiAgY2xhc3MgRWRpdFByb2R1Y3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgIGRpc2NvdW50OiAnJyxcclxuICAgICAgcHJpY2U6ICcnLFxyXG4gICAgICB2YXJpYW50SWQ6ICcnLFxyXG4gICAgICBzaG93VG9hc3Q6IGZhbHNlLFxyXG4gICAgfTtcclxuICBcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZGlzY291bnQ6IHRoaXMuaXRlbVRvQmVDb25zdW1lZCgpIH0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB7IG5hbWUsIHByaWNlLCBkaXNjb3VudCwgdmFyaWFudElkIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAvKmNvbnN0IGFwcCA9IHRoaXMuY29udGV4dDtcclxuICAgICAgY29uc3QgcmVkaXJlY3RUb0luZGV4ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlZGlyZWN0ID0gUmVkaXJlY3QuY3JlYXRlKGFwcCk7XHJcbiAgICAgICAgcmVkaXJlY3QuZGlzcGF0Y2goXHJcbiAgICAgICAgUmVkaXJlY3QuQWN0aW9uLkFQUCxcclxuICAgICAgICAnL2luZGV4JyxcclxuICAgICAgKTt9XHJcbiAgICAgICovXHJcblxyXG4gICAgIHJldHVybiAoXHJcbiAgICAgICAgPE11dGF0aW9uXHJcbiAgICAgICAgICBtdXRhdGlvbj17VVBEQVRFX1BSSUNFfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsoaGFuZGxlU3VibWl0LCB7ZXJyb3IsIGRhdGF9KSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc2hvd0Vycm9yID0gZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgPEJhbm5lciBzdGF0dXM9XCJjcml0aWNhbFwiPntlcnJvci5tZXNzYWdlfTwvQmFubmVyPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc2hvd1RvYXN0ID0gZGF0YSAmJiBkYXRhLnByb2R1Y3RWYXJpYW50VXBkYXRlICYmIChcclxuICAgICAgICAgICAgICAgIDxUb2FzdFxyXG4gICAgICAgICAgICAgICAgICBjb250ZW50PVwiU3VjZXNzZnVsbHkgdXBkYXRlZFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dUb2FzdDogZmFsc2UgfSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYW1lPlxyXG4gICAgICAgIDxQYWdlPlxyXG4gICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgIHtzaG93VG9hc3R9XHJcbiAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICB7c2hvd0Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPERpc3BsYXlUZXh0IHNpemU9XCJsYXJnZVwiPntuYW1lfTwvRGlzcGxheVRleHQ+XHJcbiAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0Lkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXg9XCIkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJPcmlnaW5hbCBwcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXg9XCIkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rpc2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ2Rpc2NvdW50Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGlzY291bnRlZCBwcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkaXNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dC5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgIFRoaXMgc2FsZSBwcmljZSB3aWxsIGV4cGlyZSBpbiB0d28gd2Vla3NcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDxQYWdlQWN0aW9uc1xyXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5QWN0aW9uPXtbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1NhdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Ym1pdHRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0VmFyaWFibGVJbnB1dCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB2YXJpYW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogZGlzY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7IGlucHV0OiBwcm9kdWN0VmFyaWFibGVJbnB1dCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9yZWRpcmVjdFRvSW5kZXgoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeUFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnUmVtb3ZlIGRpc2NvdW50J1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9QYWdlPlxyXG4gICAgICAgIDwvRnJhbWU+XHJcbiAgICAgICk7XHJcbiAgICB9fVxyXG4gICAgPC9NdXRhdGlvbj5cclxuICApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGZpZWxkKSA9PiB7XHJcbiAgICAgIHJldHVybiAodmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiB2YWx1ZSB9KTtcclxuICAgICAgXHJcbiAgICB9O1xyXG4gIFxyXG4gICAgaXRlbVRvQmVDb25zdW1lZCA9ICgpID0+IHtcclxuICAgICAgY29uc3QgaXRlbSA9IHN0b3JlLmdldCgnaXRlbScpO1xyXG4gICAgICBjb25zdCBwcmljZSA9IGl0ZW0udmFyaWFudHMuZWRnZXNbMF0ubm9kZS5wcmljZTtcclxuICAgICAgY29uc3QgdmFyaWFudElkID0gaXRlbS52YXJpYW50cy5lZGdlc1swXS5ub2RlLmlkO1xyXG4gICAgICBjb25zdCBkaXNjb3VudGVyID0gcHJpY2UgKiAwLjI7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmljZSwgdmFyaWFudElkIH0pO1xyXG4gICAgICByZXR1cm4gKHByaWNlIC0gZGlzY291bnRlcikudG9GaXhlZCgyKTtcclxuICAgIH07XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEVkaXRQcm9kdWN0OyJdLCJzb3VyY2VSb290IjoiIn0=