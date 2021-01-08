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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZWRpdC1wcm9kdWN0cy5qcyJdLCJuYW1lcyI6WyJVUERBVEVfUFJJQ0UiLCJncWwiLCJFZGl0UHJvZHVjdCIsImRpc2NvdW50IiwicHJpY2UiLCJ2YXJpYW50SWQiLCJmaWVsZCIsInZhbHVlIiwic2V0U3RhdGUiLCJpdGVtIiwic3RvcmUiLCJnZXQiLCJ2YXJpYW50cyIsImVkZ2VzIiwibm9kZSIsImlkIiwiZGlzY291bnRlciIsInRvRml4ZWQiLCJpdGVtVG9CZUNvbnN1bWVkIiwic3RhdGUiLCJuYW1lIiwiaGFuZGxlU3VibWl0IiwiZXJyb3IiLCJkYXRhIiwiaGFuZGxlQ2hhbmdlIiwiY29udGVudCIsIm9uQWN0aW9uIiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RWYXJpYWJsZUlucHV0IiwidmFyaWFibGVzIiwiaW5wdXQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFhRTtDQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBR0MsbURBQUgsbUJBQWxCOztJQWVNQyxXOzs7Ozs7Ozs7Ozs7Ozs7O2dVQUNJO0FBQ05DLGNBQVEsRUFBRSxFQURKO0FBRU5DLFdBQUssRUFBRSxFQUZEO0FBR05DLGVBQVMsRUFBRTtBQUhMLEs7O3VVQXlGTyxVQUFDQyxLQUFELEVBQVc7QUFDeEIsYUFBTyxVQUFDQyxLQUFEO0FBQUEsZUFBVyxNQUFLQyxRQUFMLHVKQUFpQkYsS0FBakIsRUFBeUJDLEtBQXpCLEVBQVg7QUFBQSxPQUFQO0FBRUQsSzs7MlVBRWtCLFlBQU07QUFDdkIsVUFBTUUsSUFBSSxHQUFHQyxnREFBSyxDQUFDQyxHQUFOLENBQVUsTUFBVixDQUFiO0FBQ0EsVUFBTVAsS0FBSyxHQUFHSyxJQUFJLENBQUNHLFFBQUwsQ0FBY0MsS0FBZCxDQUFvQixDQUFwQixFQUF1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aXQtcHJvZHVjdHMuYWQxODI2Y2ExY2JjZWM4MmUzZGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBCYW5uZXIsXHJcbiAgICBDYXJkLFxyXG4gICAgRGlzcGxheVRleHQsXHJcbiAgICBGb3JtLFxyXG4gICAgRm9ybUxheW91dCxcclxuICAgIEZyYW1lLFxyXG4gICAgTGF5b3V0LFxyXG4gICAgUGFnZSxcclxuICAgIFBhZ2VBY3Rpb25zLFxyXG4gICAgVGV4dEZpZWxkLFxyXG4gICAgVG9hc3QsXHJcbiAgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuICBpbXBvcnQgc3RvcmUgZnJvbSAnc3RvcmUtanMnO1xyXG4gIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbiAgLy9pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucyc7XHJcbiAgLy9pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdCc7XHJcbiAgaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbiAgaW1wb3J0IHsgTXV0YXRpb24gfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xyXG5cclxuICBjb25zdCBVUERBVEVfUFJJQ0UgPSBncWxgXHJcbiAgbXV0YXRpb24gcHJvZHVjdFZhcmlhbnRVcGRhdGUoJGlucHV0OiBQcm9kdWN0VmFyaWFudElucHV0ISkge1xyXG4gICAgcHJvZHVjdFZhcmlhbnRVcGRhdGUoaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgICBwcm9kdWN0IHtcclxuICAgICAgICB0aXRsZVxyXG4gICAgICB9XHJcbiAgICAgIHByb2R1Y3RWYXJpYW50IHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHByaWNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG4gIFxyXG4gIGNsYXNzIEVkaXRQcm9kdWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICBkaXNjb3VudDogJycsXHJcbiAgICAgIHByaWNlOiAnJyxcclxuICAgICAgdmFyaWFudElkOiAnJ1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZGlzY291bnQ6IHRoaXMuaXRlbVRvQmVDb25zdW1lZCgpIH0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB7IG5hbWUsIHByaWNlLCBkaXNjb3VudCwgdmFyaWFudElkIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAvKmNvbnN0IGFwcCA9IHRoaXMuY29udGV4dDtcclxuICAgICAgY29uc3QgcmVkaXJlY3RUb0luZGV4ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlZGlyZWN0ID0gUmVkaXJlY3QuY3JlYXRlKGFwcCk7XHJcbiAgICAgICAgcmVkaXJlY3QuZGlzcGF0Y2goXHJcbiAgICAgICAgUmVkaXJlY3QuQWN0aW9uLkFQUCxcclxuICAgICAgICAnL2luZGV4JyxcclxuICAgICAgKTt9XHJcbiAgICAgICovXHJcblxyXG4gICAgIHJldHVybiAoXHJcbiAgICAgICAgPE11dGF0aW9uXHJcbiAgICAgICAgICBtdXRhdGlvbj17VVBEQVRFX1BSSUNFfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsoaGFuZGxlU3VibWl0LCB7ZXJyb3IsIGRhdGF9KSA9PiB7XHJcbiAgXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFBhZ2U+XHJcbiAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPERpc3BsYXlUZXh0IHNpemU9XCJsYXJnZVwiPntuYW1lfTwvRGlzcGxheVRleHQ+XHJcbiAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0Lkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXg9XCIkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJPcmlnaW5hbCBwcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXg9XCIkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rpc2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ2Rpc2NvdW50Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGlzY291bnRlZCBwcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkaXNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dC5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgIFRoaXMgc2FsZSBwcmljZSB3aWxsIGV4cGlyZSBpbiB0d28gd2Vla3NcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDxQYWdlQWN0aW9uc1xyXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5QWN0aW9uPXtbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1NhdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Ym1pdHRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0VmFyaWFibGVJbnB1dCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB2YXJpYW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogZGlzY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7IGlucHV0OiBwcm9kdWN0VmFyaWFibGVJbnB1dCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9yZWRpcmVjdFRvSW5kZXgoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeUFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnUmVtb3ZlIGRpc2NvdW50J1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9QYWdlPlxyXG4gICAgICApO1xyXG4gICAgfX1cclxuICAgIDwvTXV0YXRpb24+XHJcbiAgKTtcclxuICAgIH1cclxuICBcclxuICAgIGhhbmRsZUNoYW5nZSA9IChmaWVsZCkgPT4ge1xyXG4gICAgICByZXR1cm4gKHZhbHVlKSA9PiB0aGlzLnNldFN0YXRlKHsgW2ZpZWxkXTogdmFsdWUgfSk7XHJcbiAgICAgIFxyXG4gICAgfTtcclxuICBcclxuICAgIGl0ZW1Ub0JlQ29uc3VtZWQgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBzdG9yZS5nZXQoJ2l0ZW0nKTtcclxuICAgICAgY29uc3QgcHJpY2UgPSBpdGVtLnZhcmlhbnRzLmVkZ2VzWzBdLm5vZGUucHJpY2U7XHJcbiAgICAgIGNvbnN0IHZhcmlhbnRJZCA9IGl0ZW0udmFyaWFudHMuZWRnZXNbMF0ubm9kZS5pZDtcclxuICAgICAgY29uc3QgZGlzY291bnRlciA9IHByaWNlICogMC4yO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgcHJpY2UsIHZhcmlhbnRJZCB9KTtcclxuICAgICAgcmV0dXJuIChwcmljZSAtIGRpc2NvdW50ZXIpLnRvRml4ZWQoMik7XHJcbiAgICB9O1xyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBFZGl0UHJvZHVjdDsiXSwic291cmNlUm9vdCI6IiJ9