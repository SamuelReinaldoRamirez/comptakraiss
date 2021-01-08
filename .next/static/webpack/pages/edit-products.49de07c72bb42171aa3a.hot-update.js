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
                        }; //redirectToIndex();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZWRpdC1wcm9kdWN0cy5qcyJdLCJuYW1lcyI6WyJVUERBVEVfUFJJQ0UiLCJncWwiLCJFZGl0UHJvZHVjdCIsImRpc2NvdW50IiwicHJpY2UiLCJ2YXJpYW50SWQiLCJmaWVsZCIsInZhbHVlIiwic2V0U3RhdGUiLCJpdGVtIiwic3RvcmUiLCJnZXQiLCJ2YXJpYW50cyIsImVkZ2VzIiwibm9kZSIsImlkIiwiZGlzY291bnRlciIsInRvRml4ZWQiLCJpdGVtVG9CZUNvbnN1bWVkIiwic3RhdGUiLCJuYW1lIiwiaGFuZGxlU3VibWl0IiwiZXJyb3IiLCJkYXRhIiwiaGFuZGxlQ2hhbmdlIiwiY29udGVudCIsIm9uQWN0aW9uIiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RWYXJpYWJsZUlucHV0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBVUU7Q0FFQTtBQUNBOztBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLG1EQUFILG1CQUFsQjs7SUFlTUMsVzs7Ozs7Ozs7Ozs7Ozs7OztnVUFDSTtBQUNOQyxjQUFRLEVBQUUsRUFESjtBQUVOQyxXQUFLLEVBQUUsRUFGRDtBQUdOQyxlQUFTLEVBQUU7QUFITCxLOzt1VUFzRk8sVUFBQ0MsS0FBRCxFQUFXO0FBQ3hCLGFBQU8sVUFBQ0MsS0FBRDtBQUFBLGVBQVcsTUFBS0MsUUFBTCx1SkFBaUJGLEtBQWpCLEVBQXlCQyxLQUF6QixFQUFYO0FBQUEsT0FBUDtBQUVELEs7OzJVQUVrQixZQUFNO0FBQ3ZCLFVBQU1FLElBQUksR0FBR0MsZ0RBQUssQ0FBQ0MsR0FBTixDQUFVLE1BQVYsQ0FBYjtBQUNBLFVBQU1QLEtBQUssR0FBR0ssSUFBSSxDQUFDRyxRQUFMLENBQWNDLEtBQWQsQ0FBb0IsQ0FBcEIsRUFBdUJDLElBQXZCLENBQTRCVixLQUExQztBQUNBLFVBQU1DLFNBQVMsR0FBR0ksSUFBSSxDQUFDRyxRQUFMLENBQWNDLEtBQWQsQ0FBb0IsQ0FBcEIsRUFBdUJDLElBQXZCLENBQTRCQyxFQUE5QztBQUNBLFVBQU1DLFVBQVUsR0FBR1osS0FBSyxHQUFHLEdBQTNCOztBQUNBLFlBQUtJLFFBQUwsQ0FBYztBQUFFSixhQUFLLEVBQUxBLEtBQUY7QUFBU0MsaUJBQVMsRUFBVEE7QUFBVCxPQUFkOztBQUNBLGFBQU8sQ0FBQ0QsS0FBSyxHQUFHWSxVQUFULEVBQXFCQyxPQUFyQixDQUE2QixDQUE3QixDQUFQO0FBQ0QsSzs7Ozs7Ozt3Q0E1Rm1CO0FBQ2xCLFdBQUtULFFBQUwsQ0FBYztBQUFFTCxnQkFBUSxFQUFFLEtBQUtlLGdCQUFMO0FBQVosT0FBZDtBQUNEOzs7NkJBRVE7QUFBQTs7QUFBQSx3QkFDc0MsS0FBS0MsS0FEM0M7QUFBQSxVQUNDQyxJQURELGVBQ0NBLElBREQ7QUFBQSxVQUNPaEIsS0FEUCxlQUNPQSxLQURQO0FBQUEsVUFDY0QsUUFEZCxlQUNjQSxRQURkO0FBQUEsVUFDd0JFLFNBRHhCLGVBQ3dCQSxTQUR4QjtBQUVQO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUssMEJBQ0csOERBQUMsc0RBQUQ7QUFDRSxnQkFBUSxFQUFFTCxZQURaO0FBQUEsa0JBR0csa0JBQUNxQixZQUFELFFBQWlDO0FBQUEsY0FBakJDLEtBQWlCLFFBQWpCQSxLQUFpQjtBQUFBLGNBQVZDLElBQVUsUUFBVkEsSUFBVTtBQUV0Qyw4QkFDRSw4REFBQyxxREFBRDtBQUFBLG1DQUNFLDhEQUFDLHVEQUFEO0FBQUEscUNBQ0UsK0RBQUMsdURBQUQsQ0FBUSxPQUFSO0FBQUEsd0NBQ0UsOERBQUMsNERBQUQ7QUFBYSxzQkFBSSxFQUFDLE9BQWxCO0FBQUEsNEJBQTJCSDtBQUEzQixrQkFERixlQUVFLCtEQUFDLHFEQUFEO0FBQUEsMENBQ0UsOERBQUMscURBQUQ7QUFBTSw2QkFBUyxNQUFmO0FBQUEsMkNBQ0UsK0RBQUMsMkRBQUQ7QUFBQSw4Q0FDRSwrREFBQywyREFBRCxDQUFZLEtBQVo7QUFBQSxnREFDRSw4REFBQywwREFBRDtBQUNFLGdDQUFNLEVBQUMsR0FEVDtBQUVFLCtCQUFLLEVBQUVoQixLQUZUO0FBR0Usa0NBQVEsRUFBRSxJQUhaO0FBSUUsK0JBQUssRUFBQyxnQkFKUjtBQUtFLDhCQUFJLEVBQUM7QUFMUCwwQkFERixlQVFFLDhEQUFDLDBEQUFEO0FBQ0UsZ0NBQU0sRUFBQyxHQURUO0FBRUUsK0JBQUssRUFBRUQsUUFGVDtBQUdFLGtDQUFRLEVBQUUsTUFBSSxDQUFDcUIsWUFBTCxDQUFrQixVQUFsQixDQUhaO0FBSUUsK0JBQUssRUFBQyxrQkFKUjtBQUtFLDhCQUFJLEVBQUM7QUFMUCwwQkFSRjtBQUFBLHdCQURGLGVBaUJFO0FBQUE7QUFBQSx3QkFqQkY7QUFBQTtBQURGLG9CQURGLGVBd0JFLDhEQUFDLDREQUFEO0FBQ0UsaUNBQWEsRUFBRSxDQUNiO0FBQ0VDLDZCQUFPLEVBQUUsTUFEWDtBQUVFQyw4QkFBUSxFQUFFLG9CQUFNO0FBQ2RDLCtCQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0EsNEJBQU1DLG9CQUFvQixHQUFHO0FBQ3pCZCw0QkFBRSxFQUFFVixTQURxQjtBQUV6QkQsK0JBQUssRUFBRUQ7QUFGa0IseUJBQTdCLENBRmMsQ0FNZDtBQUNEO0FBVEgscUJBRGEsQ0FEakI7QUFjRSxvQ0FBZ0IsRUFBRSxDQUNoQjtBQUNFc0IsNkJBQU8sRUFBRTtBQURYLHFCQURnQjtBQWRwQixvQkF4QkY7QUFBQSxrQkFGRjtBQUFBO0FBREY7QUFERixZQURGO0FBc0REO0FBM0RHLFFBREg7QUErREE7Ozs7RUFyRnVCSyw2Q0FBSyxDQUFDQyxTOztBQXNHakI3QiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lZGl0LXByb2R1Y3RzLjQ5ZGUwN2M3MmJiNDIxNzFhYTNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ2FyZCxcclxuICAgIERpc3BsYXlUZXh0LFxyXG4gICAgRm9ybSxcclxuICAgIEZvcm1MYXlvdXQsXHJcbiAgICBMYXlvdXQsXHJcbiAgICBQYWdlLFxyXG4gICAgUGFnZUFjdGlvbnMsXHJcbiAgICBUZXh0RmllbGRcclxuICB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG4gIGltcG9ydCBzdG9yZSBmcm9tICdzdG9yZS1qcyc7XHJcbiAgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuICAvL2ltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zJztcclxuICAvL2ltcG9ydCB7IENvbnRleHQgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcclxuICBpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuICBpbXBvcnQgeyBNdXRhdGlvbiB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XHJcblxyXG4gIGNvbnN0IFVQREFURV9QUklDRSA9IGdxbGBcclxuICBtdXRhdGlvbiBwcm9kdWN0VmFyaWFudFVwZGF0ZSgkaW5wdXQ6IFByb2R1Y3RWYXJpYW50SW5wdXQhKSB7XHJcbiAgICBwcm9kdWN0VmFyaWFudFVwZGF0ZShpbnB1dDogJGlucHV0KSB7XHJcbiAgICAgIHByb2R1Y3Qge1xyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgIH1cclxuICAgICAgcHJvZHVjdFZhcmlhbnQge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgcHJpY2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbiAgXHJcbiAgY2xhc3MgRWRpdFByb2R1Y3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgIGRpc2NvdW50OiAnJyxcclxuICAgICAgcHJpY2U6ICcnLFxyXG4gICAgICB2YXJpYW50SWQ6ICcnXHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNjb3VudDogdGhpcy5pdGVtVG9CZUNvbnN1bWVkKCkgfSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHsgbmFtZSwgcHJpY2UsIGRpc2NvdW50LCB2YXJpYW50SWQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgIC8qY29uc3QgYXBwID0gdGhpcy5jb250ZXh0O1xyXG4gICAgICBjb25zdCByZWRpcmVjdFRvSW5kZXggPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVkaXJlY3QgPSBSZWRpcmVjdC5jcmVhdGUoYXBwKTtcclxuICAgICAgICByZWRpcmVjdC5kaXNwYXRjaChcclxuICAgICAgICBSZWRpcmVjdC5BY3Rpb24uQVBQLFxyXG4gICAgICAgICcvaW5kZXgnLFxyXG4gICAgICApO31cclxuICAgICAgKi9cclxuXHJcbiAgICAgcmV0dXJuIChcclxuICAgICAgICA8TXV0YXRpb25cclxuICAgICAgICAgIG11dGF0aW9uPXtVUERBVEVfUFJJQ0V9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeyhoYW5kbGVTdWJtaXQsIHtlcnJvciwgZGF0YX0pID0+IHtcclxuICBcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8UGFnZT5cclxuICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICA8RGlzcGxheVRleHQgc2l6ZT1cImxhcmdlXCI+e25hbWV9PC9EaXNwbGF5VGV4dD5cclxuICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1MYXlvdXQuR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeD1cIiRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk9yaWdpbmFsIHByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeD1cIiRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGlzY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnZGlzY291bnQnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEaXNjb3VudGVkIHByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRpc2NvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtTGF5b3V0Lkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgVGhpcyBzYWxlIHByaWNlIHdpbGwgZXhwaXJlIGluIHR3byB3ZWVrc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPFBhZ2VBY3Rpb25zXHJcbiAgICAgICAgICAgICAgICAgIHByaW1hcnlBY3Rpb249e1tcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnU2F2ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3VibWl0dGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RWYXJpYWJsZUlucHV0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHZhcmlhbnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBkaXNjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3JlZGlyZWN0VG9JbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5QWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdSZW1vdmUgZGlzY291bnQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L1BhZ2U+XHJcbiAgICAgICk7XHJcbiAgICB9fVxyXG4gICAgPC9NdXRhdGlvbj5cclxuICApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGZpZWxkKSA9PiB7XHJcbiAgICAgIHJldHVybiAodmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiB2YWx1ZSB9KTtcclxuICAgICAgXHJcbiAgICB9O1xyXG4gIFxyXG4gICAgaXRlbVRvQmVDb25zdW1lZCA9ICgpID0+IHtcclxuICAgICAgY29uc3QgaXRlbSA9IHN0b3JlLmdldCgnaXRlbScpO1xyXG4gICAgICBjb25zdCBwcmljZSA9IGl0ZW0udmFyaWFudHMuZWRnZXNbMF0ubm9kZS5wcmljZTtcclxuICAgICAgY29uc3QgdmFyaWFudElkID0gaXRlbS52YXJpYW50cy5lZGdlc1swXS5ub2RlLmlkO1xyXG4gICAgICBjb25zdCBkaXNjb3VudGVyID0gcHJpY2UgKiAwLjI7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmljZSwgdmFyaWFudElkIH0pO1xyXG4gICAgICByZXR1cm4gKHByaWNlIC0gZGlzY291bnRlcikudG9GaXhlZCgyKTtcclxuICAgIH07XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEVkaXRQcm9kdWN0OyJdLCJzb3VyY2VSb290IjoiIn0=