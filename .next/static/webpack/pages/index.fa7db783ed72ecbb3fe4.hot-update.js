webpackHotUpdate_N_E("pages/index",{

/***/ "./components/getOrders.js":
/*!*********************************!*\
  !*** ./components/getOrders.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! store-js */ "./node_modules/store-js/dist/store.legacy.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shopify/app-bridge/actions */ "./node_modules/@shopify/app-bridge/actions/index.js");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_13__);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\nquery {\n  orders(first: 50) {\n    edges {\n      cursor\n      node {\n        id\n        name\n        email\n        netPaymentSet{\n          shopMoney{\n            amount\n          }\t\n        }\n        lineItems(first:5){\n          edges{\n            node{\n              name\n              image {\n                id\n                    originalSrc\n                    altText\n              }\n               \n            }\n          }\n        }\n      }\n    }\n  }\n}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








/*mutation exampleProductCreate($input: ProductInput!) {
  productCreate(input: $input) {
    userErrors {
      field
      message
    }
    product {
      id
      title
      productType
    }
  }
}
*/

/*{
  "input": {"title": "test product", "productType": "test type"}
}*/

/*query {
  orders(first: 3) {
    edges {
      cursor
      node {
        id
        name
        email
        netPaymentSet{
          shopMoney{
            amount
          }	
        }
      }
    }
    pageInfo {
      hasNextPage
    }
  }
}
*/

var GET_ORDERS_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_7___default()(_templateObject());

var ResourceListWithOrders = /*#__PURE__*/function (_React$Component) {
  Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ResourceListWithOrders, _React$Component);

  var _super = _createSuper(ResourceListWithOrders);

  function ResourceListWithOrders() {
    Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ResourceListWithOrders);

    return _super.apply(this, arguments);
  }

  Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ResourceListWithOrders, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_8__["Query"], {
        query: GET_ORDERS_BY_ID,
        children: function children(_ref) {
          var data = _ref.data,
              loading = _ref.loading,
              error = _ref.error;
          if (loading) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
            children: "Loading\u2026"
          });
          if (error) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
            children: error.message
          });
          console.log(data);
          console.log(data.orders.edges[0].node);
          console.log(data.orders.edges[0].node.lineItems.edges[0].node.image.originalSrc);
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Card"], {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("p", {
              children: "stuff here"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["ResourceList"], {
              showHeader: true,
              resourceName: {
                singular: 'Order',
                plural: 'Orders'
              },
              items: data.orders.edges,
              renderItem: function renderItem(item) {
                var media = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Thumbnail"], {
                  source: item.node.lineItems.edges[0] ? item.node.lineItems.edges[0].node.image.originalSrc : ''
                  /*alt={
                    item.images.edges[0]
                      ? item.images.edges[0].node.altText
                      : ''
                  }*/

                }); //const price = item.variants.edges[0].node.price;


                return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["ResourceList"].Item, {
                  // id={item.id}
                  media: media //accessibilityLabel={`View details for ${item.title}`}
                  ,
                  onClick: function onClick() {
                    //store.set('item', item);
                    console.log('store.set'); //redirectToProduct();
                  },
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Stack"], {
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Stack"].Item, {
                      fill: true,
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("h3", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextStyle"], {
                          variation: "strong",
                          children: item.node.id
                        })
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Stack"].Item, {
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])("p", {
                        children: ["$", price]
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Stack"].Item, {
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])("p", {
                        children: ["Expires on ", twoWeeksFromNow, " "]
                      })
                    })]
                  })
                });
              }
            })]
          });
        }
      });
    }
  }]);

  return ResourceListWithOrders;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ResourceListWithOrders);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRPcmRlcnMuanMiXSwibmFtZXMiOlsiR0VUX09SREVSU19CWV9JRCIsImdxbCIsIlJlc291cmNlTGlzdFdpdGhPcmRlcnMiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJvcmRlcnMiLCJlZGdlcyIsIm5vZGUiLCJsaW5lSXRlbXMiLCJpbWFnZSIsIm9yaWdpbmFsU3JjIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJpdGVtIiwibWVkaWEiLCJpZCIsInByaWNlIiwidHdvV2Vla3NGcm9tTm93IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHQyxrREFBSCxtQkFBdEI7O0lBZ0NNQyxzQjs7Ozs7Ozs7Ozs7Ozs2QkFDSztBQUNQLDBCQUNFLDhEQUFDLGtEQUFEO0FBQU8sYUFBSyxFQUFFRixnQkFBZDtBQUFBLGtCQUNHLHdCQUE4QjtBQUFBLGNBQTNCRyxJQUEyQixRQUEzQkEsSUFBMkI7QUFBQSxjQUFyQkMsT0FBcUIsUUFBckJBLE9BQXFCO0FBQUEsY0FBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQzdCLGNBQUlELE9BQUosRUFBYSxvQkFBTztBQUFBO0FBQUEsWUFBUDtBQUNiLGNBQUlDLEtBQUosRUFBVyxvQkFBTztBQUFBLHNCQUFNQSxLQUFLLENBQUNDO0FBQVosWUFBUDtBQUNYQyxpQkFBTyxDQUFDQyxHQUFSLENBQVlMLElBQVo7QUFDQUksaUJBQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFJLENBQUNNLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixDQUFsQixFQUFxQkMsSUFBakM7QUFDQUosaUJBQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFJLENBQUNNLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixDQUFsQixFQUFxQkMsSUFBckIsQ0FBMEJDLFNBQTFCLENBQW9DRixLQUFwQyxDQUEwQyxDQUExQyxFQUE2Q0MsSUFBN0MsQ0FBa0RFLEtBQWxELENBQXdEQyxXQUFwRTtBQUtBLDhCQUNFLCtEQUFDLHFEQUFEO0FBQUEsb0NBQ0U7QUFBQTtBQUFBLGNBREYsZUFFRSw4REFBQyw2REFBRDtBQUNFLHdCQUFVLE1BRFo7QUFFRSwwQkFBWSxFQUFFO0FBQUVDLHdCQUFRLEVBQUUsT0FBWjtBQUFxQkMsc0JBQU0sRUFBRTtBQUE3QixlQUZoQjtBQUdFLG1CQUFLLEVBQUViLElBQUksQ0FBQ00sTUFBTCxDQUFZQyxLQUhyQjtBQUlFLHdCQUFVLEVBQUUsb0JBQUFPLElBQUksRUFBSTtBQUNsQixvQkFBTUMsS0FBSyxnQkFDVCw4REFBQywwREFBRDtBQUNFLHdCQUFNLEVBQ0pELElBQUksQ0FBQ04sSUFBTCxDQUFVQyxTQUFWLENBQW9CRixLQUFwQixDQUEwQixDQUExQixJQUNJTyxJQUFJLENBQUNOLElBQUwsQ0FBVUMsU0FBVixDQUFvQkYsS0FBcEIsQ0FBMEIsQ0FBMUIsRUFBNkJDLElBQTdCLENBQWtDRSxLQUFsQyxDQUF3Q0MsV0FENUMsR0FFSTtBQUVOO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQVZvQixrQkFERixDQURrQixDQWVsQjs7O0FBQ0Esb0NBQ0UsOERBQUMsNkRBQUQsQ0FBYyxJQUFkO0FBQ0M7QUFDQyx1QkFBSyxFQUFFSSxLQUZULENBR0U7QUFIRjtBQUlFLHlCQUFPLEVBQUUsbUJBQU07QUFDYjtBQUNBWCwyQkFBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUZhLENBR2I7QUFDRCxtQkFSSDtBQUFBLHlDQVVFLCtEQUFDLHNEQUFEO0FBQUEsNENBQ0UsOERBQUMsc0RBQUQsQ0FBTyxJQUFQO0FBQVksMEJBQUksTUFBaEI7QUFBQSw2Q0FDRTtBQUFBLCtDQUNFLDhEQUFDLDBEQUFEO0FBQVcsbUNBQVMsRUFBQyxRQUFyQjtBQUFBLG9DQUNHUyxJQUFJLENBQUNOLElBQUwsQ0FBVVE7QUFEYjtBQURGO0FBREYsc0JBREYsZUFRRSw4REFBQyxzREFBRCxDQUFPLElBQVA7QUFBQSw2Q0FDRTtBQUFBLHdDQUFLQyxLQUFMO0FBQUE7QUFERixzQkFSRixlQVdFLDhEQUFDLHNEQUFELENBQU8sSUFBUDtBQUFBLDZDQUNFO0FBQUEsa0RBQWVDLGVBQWY7QUFBQTtBQURGLHNCQVhGO0FBQUE7QUFWRixrQkFERjtBQTRCRDtBQWhESCxjQUZGO0FBQUEsWUFERjtBQXVERDtBQWxFSCxRQURGO0FBc0VEOzs7O0VBeEVrQ0MsNkNBQUssQ0FBQ0MsUzs7QUEyRTNCckIscUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmE3ZGI3ODNlZDcyZWNiYjNmZTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XHJcbmltcG9ydCB7IENhcmQsXHJcbiAgICBSZXNvdXJjZUxpc3QsXHJcbiAgICBTdGFjayxcclxuICAgIFRleHRTdHlsZSxcclxuICAgIFRodW1ibmFpbCwgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdCc7XHJcblxyXG4vKm11dGF0aW9uIGV4YW1wbGVQcm9kdWN0Q3JlYXRlKCRpbnB1dDogUHJvZHVjdElucHV0ISkge1xyXG4gIHByb2R1Y3RDcmVhdGUoaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgdXNlckVycm9ycyB7XHJcbiAgICAgIGZpZWxkXHJcbiAgICAgIG1lc3NhZ2VcclxuICAgIH1cclxuICAgIHByb2R1Y3Qge1xyXG4gICAgICBpZFxyXG4gICAgICB0aXRsZVxyXG4gICAgICBwcm9kdWN0VHlwZVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4qL1xyXG5cclxuLyp7XHJcbiAgXCJpbnB1dFwiOiB7XCJ0aXRsZVwiOiBcInRlc3QgcHJvZHVjdFwiLCBcInByb2R1Y3RUeXBlXCI6IFwidGVzdCB0eXBlXCJ9XHJcbn0qL1xyXG5cclxuLypxdWVyeSB7XHJcbiAgb3JkZXJzKGZpcnN0OiAzKSB7XHJcbiAgICBlZGdlcyB7XHJcbiAgICAgIGN1cnNvclxyXG4gICAgICBub2RlIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIG5hbWVcclxuICAgICAgICBlbWFpbFxyXG4gICAgICAgIG5ldFBheW1lbnRTZXR7XHJcbiAgICAgICAgICBzaG9wTW9uZXl7XHJcbiAgICAgICAgICAgIGFtb3VudFxyXG4gICAgICAgICAgfVx0XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBwYWdlSW5mbyB7XHJcbiAgICAgIGhhc05leHRQYWdlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiovXHJcblxyXG5jb25zdCBHRVRfT1JERVJTX0JZX0lEID0gZ3FsYFxyXG5xdWVyeSB7XHJcbiAgb3JkZXJzKGZpcnN0OiA1MCkge1xyXG4gICAgZWRnZXMge1xyXG4gICAgICBjdXJzb3JcclxuICAgICAgbm9kZSB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgZW1haWxcclxuICAgICAgICBuZXRQYXltZW50U2V0e1xyXG4gICAgICAgICAgc2hvcE1vbmV5e1xyXG4gICAgICAgICAgICBhbW91bnRcclxuICAgICAgICAgIH1cdFxyXG4gICAgICAgIH1cclxuICAgICAgICBsaW5lSXRlbXMoZmlyc3Q6NSl7XHJcbiAgICAgICAgICBlZGdlc3tcclxuICAgICAgICAgICAgbm9kZXtcclxuICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbFNyY1xyXG4gICAgICAgICAgICAgICAgICAgIGFsdFRleHRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59YDtcclxuXHJcbmNsYXNzIFJlc291cmNlTGlzdFdpdGhPcmRlcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxRdWVyeSBxdWVyeT17R0VUX09SREVSU19CWV9JRH0+XHJcbiAgICAgICAgeyh7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0pID0+IHtcclxuICAgICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5n4oCmPC9kaXY+O1xyXG4gICAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEub3JkZXJzLmVkZ2VzWzBdLm5vZGUpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YS5vcmRlcnMuZWRnZXNbMF0ubm9kZS5saW5lSXRlbXMuZWRnZXNbMF0ubm9kZS5pbWFnZS5vcmlnaW5hbFNyYyk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgPHA+c3R1ZmYgaGVyZTwvcD5cclxuICAgICAgICAgICAgICA8UmVzb3VyY2VMaXN0XHJcbiAgICAgICAgICAgICAgICBzaG93SGVhZGVyXHJcbiAgICAgICAgICAgICAgICByZXNvdXJjZU5hbWU9e3sgc2luZ3VsYXI6ICdPcmRlcicsIHBsdXJhbDogJ09yZGVycycgfX1cclxuICAgICAgICAgICAgICAgIGl0ZW1zPXtkYXRhLm9yZGVycy5lZGdlc31cclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBtZWRpYSA9IChcclxuICAgICAgICAgICAgICAgICAgICA8VGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm5vZGUubGluZUl0ZW1zLmVkZ2VzWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLm5vZGUubGluZUl0ZW1zLmVkZ2VzWzBdLm5vZGUuaW1hZ2Uub3JpZ2luYWxTcmNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvKmFsdD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2VzLmVkZ2VzWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLmltYWdlcy5lZGdlc1swXS5ub2RlLmFsdFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICB9Ki9cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAvL2NvbnN0IHByaWNlID0gaXRlbS52YXJpYW50cy5lZGdlc1swXS5ub2RlLnByaWNlO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3QuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAvLyBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIG1lZGlhPXttZWRpYX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8vYWNjZXNzaWJpbGl0eUxhYmVsPXtgVmlldyBkZXRhaWxzIGZvciAke2l0ZW0udGl0bGV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9zdG9yZS5zZXQoJ2l0ZW0nLCBpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0b3JlLnNldCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcmVkaXJlY3RUb1Byb2R1Y3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFN0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbSBmaWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5vZGUuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7cHJpY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkV4cGlyZXMgb24ge3R3b1dlZWtzRnJvbU5vd30gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUmVzb3VyY2VMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPC9RdWVyeT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgUmVzb3VyY2VMaXN0V2l0aE9yZGVyczsiXSwic291cmNlUm9vdCI6IiJ9