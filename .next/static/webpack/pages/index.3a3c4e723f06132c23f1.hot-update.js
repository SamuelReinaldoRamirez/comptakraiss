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
  var data = Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\nquery {\n  orders(last: 50) {\n    edges {\n      cursor\n      node {\n        id\n        name\n        email\n        netPaymentSet{\n          shopMoney{\n            amount\n          }\t\n        }\n        lineItems(first:5){\n          edges{\n            node{\n              name\n              image {\n                id\n                    originalSrc\n                    altText\n              }\n               \n            }\n          }\n        }\n      }\n    }\n  }\n}"]);

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
              children: "Les 50 derni\xE8res commandes"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["ResourceList"], {
              showHeader: true,
              resourceName: {
                singular: 'Order',
                plural: 'Orders'
              },
              items: data.orders.edges,
              renderItem: function renderItem(item) {
                var orderName = item.node.name;

                var media = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Thumbnail"], {
                  source: item.node.lineItems.edges[0] ? item.node.lineItems.edges[0].node.image.originalSrc : ''
                  /*alt={
                    item.images.edges[0]
                      ? item.images.edges[0].node.altText
                      : ''
                  }*/

                });

                var price = item.node.netPaymentSet.shopMoney.amount;
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
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])("p", {
                        children: ["$", orderName]
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Stack"].Item, {
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
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("p", {
                        children: "Expires on R "
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRPcmRlcnMuanMiXSwibmFtZXMiOlsiR0VUX09SREVSU19CWV9JRCIsImdxbCIsIlJlc291cmNlTGlzdFdpdGhPcmRlcnMiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJvcmRlcnMiLCJlZGdlcyIsIm5vZGUiLCJsaW5lSXRlbXMiLCJpbWFnZSIsIm9yaWdpbmFsU3JjIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJpdGVtIiwib3JkZXJOYW1lIiwibmFtZSIsIm1lZGlhIiwicHJpY2UiLCJuZXRQYXltZW50U2V0Iiwic2hvcE1vbmV5IiwiYW1vdW50IiwiaWQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUdDLGtEQUFILG1CQUF0Qjs7SUFnQ01DLHNCOzs7Ozs7Ozs7Ozs7OzZCQUNLO0FBQ1AsMEJBQ0UsOERBQUMsa0RBQUQ7QUFBTyxhQUFLLEVBQUVGLGdCQUFkO0FBQUEsa0JBQ0csd0JBQThCO0FBQUEsY0FBM0JHLElBQTJCLFFBQTNCQSxJQUEyQjtBQUFBLGNBQXJCQyxPQUFxQixRQUFyQkEsT0FBcUI7QUFBQSxjQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDN0IsY0FBSUQsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQSxZQUFQO0FBQ2IsY0FBSUMsS0FBSixFQUFXLG9CQUFPO0FBQUEsc0JBQU1BLEtBQUssQ0FBQ0M7QUFBWixZQUFQO0FBQ1hDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWUwsSUFBWjtBQUNBSSxpQkFBTyxDQUFDQyxHQUFSLENBQVlMLElBQUksQ0FBQ00sTUFBTCxDQUFZQyxLQUFaLENBQWtCLENBQWxCLEVBQXFCQyxJQUFqQztBQUNBSixpQkFBTyxDQUFDQyxHQUFSLENBQVlMLElBQUksQ0FBQ00sTUFBTCxDQUFZQyxLQUFaLENBQWtCLENBQWxCLEVBQXFCQyxJQUFyQixDQUEwQkMsU0FBMUIsQ0FBb0NGLEtBQXBDLENBQTBDLENBQTFDLEVBQTZDQyxJQUE3QyxDQUFrREUsS0FBbEQsQ0FBd0RDLFdBQXBFO0FBS0EsOEJBQ0UsK0RBQUMscURBQUQ7QUFBQSxvQ0FDRTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLDZEQUFEO0FBQ0Usd0JBQVUsTUFEWjtBQUVFLDBCQUFZLEVBQUU7QUFBRUMsd0JBQVEsRUFBRSxPQUFaO0FBQXFCQyxzQkFBTSxFQUFFO0FBQTdCLGVBRmhCO0FBR0UsbUJBQUssRUFBRWIsSUFBSSxDQUFDTSxNQUFMLENBQVlDLEtBSHJCO0FBSUUsd0JBQVUsRUFBRSxvQkFBQU8sSUFBSSxFQUFJO0FBQ2xCLG9CQUFNQyxTQUFTLEdBQUdELElBQUksQ0FBQ04sSUFBTCxDQUFVUSxJQUE1Qjs7QUFDQSxvQkFBTUMsS0FBSyxnQkFDVCw4REFBQywwREFBRDtBQUNFLHdCQUFNLEVBQ0pILElBQUksQ0FBQ04sSUFBTCxDQUFVQyxTQUFWLENBQW9CRixLQUFwQixDQUEwQixDQUExQixJQUNJTyxJQUFJLENBQUNOLElBQUwsQ0FBVUMsU0FBVixDQUFvQkYsS0FBcEIsQ0FBMEIsQ0FBMUIsRUFBNkJDLElBQTdCLENBQWtDRSxLQUFsQyxDQUF3Q0MsV0FENUMsR0FFSTtBQUVOO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQVZvQixrQkFERjs7QUFjQSxvQkFBTU8sS0FBSyxHQUFHSixJQUFJLENBQUNOLElBQUwsQ0FBVVcsYUFBVixDQUF3QkMsU0FBeEIsQ0FBa0NDLE1BQWhEO0FBQ0Esb0NBRUUsOERBQUMsNkRBQUQsQ0FBYyxJQUFkO0FBQ0M7QUFDQyx1QkFBSyxFQUFFSixLQUZULENBR0U7QUFIRjtBQUlFLHlCQUFPLEVBQUUsbUJBQU07QUFDYjtBQUNBYiwyQkFBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUZhLENBR2I7QUFDRCxtQkFSSDtBQUFBLHlDQVVFLCtEQUFDLHNEQUFEO0FBQUEsNENBQ0EsOERBQUMsc0RBQUQsQ0FBTyxJQUFQO0FBQUEsNkNBQ0k7QUFBQSx3Q0FBS1UsU0FBTDtBQUFBO0FBREosc0JBREEsZUFJRSw4REFBQyxzREFBRCxDQUFPLElBQVA7QUFBWSwwQkFBSSxNQUFoQjtBQUFBLDZDQUNFO0FBQUEsK0NBQ0UsOERBQUMsMERBQUQ7QUFBVyxtQ0FBUyxFQUFDLFFBQXJCO0FBQUEsb0NBRUdELElBQUksQ0FBQ04sSUFBTCxDQUFVYztBQUZiO0FBREY7QUFERixzQkFKRixlQVlFLDhEQUFDLHNEQUFELENBQU8sSUFBUDtBQUFBLDZDQUNFO0FBQUEsd0NBQUtKLEtBQUw7QUFBQTtBQURGLHNCQVpGLGVBZUUsOERBQUMsc0RBQUQsQ0FBTyxJQUFQO0FBQUEsNkNBQ0U7QUFBQTtBQUFBO0FBREYsc0JBZkY7QUFBQTtBQVZGLGtCQUZGO0FBaUNEO0FBdERILGNBRkY7QUFBQSxZQURGO0FBNkREO0FBeEVILFFBREY7QUE0RUQ7Ozs7RUE5RWtDSyw2Q0FBSyxDQUFDQyxTOztBQWlGM0J6QixxRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zYTNjNGU3MjNmMDYxMzJjMjNmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAncmVhY3QtYXBvbGxvJztcclxuaW1wb3J0IHsgQ2FyZCxcclxuICAgIFJlc291cmNlTGlzdCxcclxuICAgIFN0YWNrLFxyXG4gICAgVGV4dFN0eWxlLFxyXG4gICAgVGh1bWJuYWlsLCB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnc3RvcmUtanMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucyc7XHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcclxuXHJcbi8qbXV0YXRpb24gZXhhbXBsZVByb2R1Y3RDcmVhdGUoJGlucHV0OiBQcm9kdWN0SW5wdXQhKSB7XHJcbiAgcHJvZHVjdENyZWF0ZShpbnB1dDogJGlucHV0KSB7XHJcbiAgICB1c2VyRXJyb3JzIHtcclxuICAgICAgZmllbGRcclxuICAgICAgbWVzc2FnZVxyXG4gICAgfVxyXG4gICAgcHJvZHVjdCB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHRpdGxlXHJcbiAgICAgIHByb2R1Y3RUeXBlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiovXHJcblxyXG4vKntcclxuICBcImlucHV0XCI6IHtcInRpdGxlXCI6IFwidGVzdCBwcm9kdWN0XCIsIFwicHJvZHVjdFR5cGVcIjogXCJ0ZXN0IHR5cGVcIn1cclxufSovXHJcblxyXG4vKnF1ZXJ5IHtcclxuICBvcmRlcnMoZmlyc3Q6IDMpIHtcclxuICAgIGVkZ2VzIHtcclxuICAgICAgY3Vyc29yXHJcbiAgICAgIG5vZGUge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIGVtYWlsXHJcbiAgICAgICAgbmV0UGF5bWVudFNldHtcclxuICAgICAgICAgIHNob3BNb25leXtcclxuICAgICAgICAgICAgYW1vdW50XHJcbiAgICAgICAgICB9XHRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHBhZ2VJbmZvIHtcclxuICAgICAgaGFzTmV4dFBhZ2VcclxuICAgIH1cclxuICB9XHJcbn1cclxuKi9cclxuXHJcbmNvbnN0IEdFVF9PUkRFUlNfQllfSUQgPSBncWxgXHJcbnF1ZXJ5IHtcclxuICBvcmRlcnMobGFzdDogNTApIHtcclxuICAgIGVkZ2VzIHtcclxuICAgICAgY3Vyc29yXHJcbiAgICAgIG5vZGUge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIGVtYWlsXHJcbiAgICAgICAgbmV0UGF5bWVudFNldHtcclxuICAgICAgICAgIHNob3BNb25leXtcclxuICAgICAgICAgICAgYW1vdW50XHJcbiAgICAgICAgICB9XHRcclxuICAgICAgICB9XHJcbiAgICAgICAgbGluZUl0ZW1zKGZpcnN0OjUpe1xyXG4gICAgICAgICAgZWRnZXN7XHJcbiAgICAgICAgICAgIG5vZGV7XHJcbiAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxTcmNcclxuICAgICAgICAgICAgICAgICAgICBhbHRUZXh0XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufWA7XHJcblxyXG5jbGFzcyBSZXNvdXJjZUxpc3RXaXRoT3JkZXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UXVlcnkgcXVlcnk9e0dFVF9PUkRFUlNfQllfSUR9PlxyXG4gICAgICAgIHsoeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9KSA9PiB7XHJcbiAgICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZ+KApjwvZGl2PjtcclxuICAgICAgICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLm9yZGVycy5lZGdlc1swXS5ub2RlKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEub3JkZXJzLmVkZ2VzWzBdLm5vZGUubGluZUl0ZW1zLmVkZ2VzWzBdLm5vZGUuaW1hZ2Uub3JpZ2luYWxTcmMpO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgIDxwPkxlcyA1MCBkZXJuacOocmVzIGNvbW1hbmRlczwvcD5cclxuICAgICAgICAgICAgICA8UmVzb3VyY2VMaXN0XHJcbiAgICAgICAgICAgICAgICBzaG93SGVhZGVyXHJcbiAgICAgICAgICAgICAgICByZXNvdXJjZU5hbWU9e3sgc2luZ3VsYXI6ICdPcmRlcicsIHBsdXJhbDogJ09yZGVycycgfX1cclxuICAgICAgICAgICAgICAgIGl0ZW1zPXtkYXRhLm9yZGVycy5lZGdlc31cclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBvcmRlck5hbWUgPSBpdGVtLm5vZGUubmFtZVxyXG4gICAgICAgICAgICAgICAgICBjb25zdCBtZWRpYSA9IChcclxuICAgICAgICAgICAgICAgICAgICA8VGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm5vZGUubGluZUl0ZW1zLmVkZ2VzWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLm5vZGUubGluZUl0ZW1zLmVkZ2VzWzBdLm5vZGUuaW1hZ2Uub3JpZ2luYWxTcmNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvKmFsdD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2VzLmVkZ2VzWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLmltYWdlcy5lZGdlc1swXS5ub2RlLmFsdFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICB9Ki9cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IGl0ZW0ubm9kZS5uZXRQYXltZW50U2V0LnNob3BNb25leS5hbW91bnQ7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPFJlc291cmNlTGlzdC5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgIC8vIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbWVkaWE9e21lZGlhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLy9hY2Nlc3NpYmlsaXR5TGFiZWw9e2BWaWV3IGRldGFpbHMgZm9yICR7aXRlbS50aXRsZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3N0b3JlLnNldCgnaXRlbScsIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3RvcmUuc2V0JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9yZWRpcmVjdFRvUHJvZHVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke29yZGVyTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0gZmlsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubm9kZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtwcmljZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RXhwaXJlcyBvbiBSIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jlc291cmNlTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH19XHJcbiAgICAgIDwvUXVlcnk+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuIGV4cG9ydCBkZWZhdWx0IFJlc291cmNlTGlzdFdpdGhPcmRlcnM7Il0sInNvdXJjZVJvb3QiOiIifQ==