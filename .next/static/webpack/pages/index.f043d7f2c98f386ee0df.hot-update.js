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

function DataTableExample() {
  var rows = [['Emerald Silk Gown', '$875.00', 124689, 140, '$122,500.00'], ['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'], ['Navy Merino Wool Blaz', '$445.00', 124518, 32, '$14,240.00']];
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Page"], {
    title: "Sales by product",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Card"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["DataTable"], {
        columnContentTypes: ['text', 'numeric', 'numeric', 'numeric', 'numeric'],
        headings: ['Product', 'Price', 'SKU Number', 'Net quantity', 'Net sales'],
        rows: rows //totals={['', '', '', 255, '$155,830.00']}

      })
    })
  });
}

_c = DataTableExample;

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
          return DataTableExample();
        }
      });
    }
  }]);

  return ResourceListWithOrders;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);
/*<Card>
  <p>Les 50 dernières commandes</p>
  <ResourceList
    showHeader
    resourceName={{ singular: 'Order', plural: 'Orders' }}
    items={data.orders.edges}
    renderItem={item => {
      const orderName = item.node.name
      const media = (
        <Thumbnail
          source={
            item.node.lineItems.edges[0]
              ? item.node.lineItems.edges[0].node.image.originalSrc
              : ''
          }
        />
      );
      const price = item.node.netPaymentSet.shopMoney.amount;
      return (
        
        <ResourceList.Item
        media = {orderName}
         // id={item.id}
          media={media}
          //accessibilityLabel={`View details for ${item.title}`}
          onClick={() => {
            //store.set('item', item);
            console.log('store.set')
            //redirectToProduct();
          }}
        >
          <Stack>
          <Stack.Item>
              <p>{orderName}</p>
            </Stack.Item>
            <Stack.Item fill>
              <h3>
                <TextStyle variation="strong">
                    {item.node.id}
                </TextStyle>
              </h3>
            </Stack.Item>
            <Stack.Item>
              <p>${price}</p>
            </Stack.Item>
            <Stack.Item>
              <p>Expires on R </p>
            </Stack.Item>
          </Stack>
        </ResourceList.Item>
      );
    }}
  />
</Card>
);
}}
</Query>
);
}
}*/


/* harmony default export */ __webpack_exports__["default"] = (ResourceListWithOrders);

var _c;

$RefreshReg$(_c, "DataTableExample");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRPcmRlcnMuanMiXSwibmFtZXMiOlsiR0VUX09SREVSU19CWV9JRCIsImdxbCIsIkRhdGFUYWJsZUV4YW1wbGUiLCJyb3dzIiwiUmVzb3VyY2VMaXN0V2l0aE9yZGVycyIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIm9yZGVycyIsImVkZ2VzIiwibm9kZSIsImxpbmVJdGVtcyIsImltYWdlIiwib3JpZ2luYWxTcmMiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBR0Msa0RBQUgsbUJBQXRCOztBQWlDQSxTQUFTQyxnQkFBVCxHQUE0QjtBQUMxQixNQUFNQyxJQUFJLEdBQUcsQ0FDWCxDQUFDLG1CQUFELEVBQXNCLFNBQXRCLEVBQWlDLE1BQWpDLEVBQXlDLEdBQXpDLEVBQThDLGFBQTlDLENBRFcsRUFFWCxDQUFDLHNCQUFELEVBQXlCLFNBQXpCLEVBQW9DLE1BQXBDLEVBQTRDLEVBQTVDLEVBQWdELFlBQWhELENBRlcsRUFHWCxDQUNFLHVCQURGLEVBRUUsU0FGRixFQUdFLE1BSEYsRUFJRSxFQUpGLEVBS0UsWUFMRixDQUhXLENBQWI7QUFZQSxzQkFDRSw4REFBQyxxREFBRDtBQUFNLFNBQUssRUFBQyxrQkFBWjtBQUFBLDJCQUNFLDhEQUFDLHFEQUFEO0FBQUEsNkJBQ0UsOERBQUMsMERBQUQ7QUFDRSwwQkFBa0IsRUFBRSxDQUNsQixNQURrQixFQUVsQixTQUZrQixFQUdsQixTQUhrQixFQUlsQixTQUprQixFQUtsQixTQUxrQixDQUR0QjtBQVFFLGdCQUFRLEVBQUUsQ0FDUixTQURRLEVBRVIsT0FGUSxFQUdSLFlBSFEsRUFJUixjQUpRLEVBS1IsV0FMUSxDQVJaO0FBZUUsWUFBSSxFQUFFQSxJQWZSLENBZ0JFOztBQWhCRjtBQURGO0FBREYsSUFERjtBQXdCRDs7S0FyQ1FELGdCOztJQXVDSEUsc0I7Ozs7Ozs7Ozs7Ozs7NkJBQ0s7QUFDUCwwQkFDRSw4REFBQyxrREFBRDtBQUFPLGFBQUssRUFBRUosZ0JBQWQ7QUFBQSxrQkFDRyx3QkFBOEI7QUFBQSxjQUEzQkssSUFBMkIsUUFBM0JBLElBQTJCO0FBQUEsY0FBckJDLE9BQXFCLFFBQXJCQSxPQUFxQjtBQUFBLGNBQVpDLEtBQVksUUFBWkEsS0FBWTtBQUM3QixjQUFJRCxPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBLFlBQVA7QUFDYixjQUFJQyxLQUFKLEVBQVcsb0JBQU87QUFBQSxzQkFBTUEsS0FBSyxDQUFDQztBQUFaLFlBQVA7QUFDWEMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFaO0FBQ0FJLGlCQUFPLENBQUNDLEdBQVIsQ0FBWUwsSUFBSSxDQUFDTSxNQUFMLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUJDLElBQWpDO0FBQ0FKLGlCQUFPLENBQUNDLEdBQVIsQ0FBWUwsSUFBSSxDQUFDTSxNQUFMLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUJDLElBQXJCLENBQTBCQyxTQUExQixDQUFvQ0YsS0FBcEMsQ0FBMEMsQ0FBMUMsRUFBNkNDLElBQTdDLENBQWtERSxLQUFsRCxDQUF3REMsV0FBcEU7QUFLQSxpQkFDRWQsZ0JBQWdCLEVBRGxCO0FBR0Q7QUFkSCxRQURGO0FBa0JHOzs7O0VBcEI4QmUsNkNBQUssQ0FBQ0MsUztBQXVCL0I7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHZ0JkLHFGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmYwNDNkN2YyYzk4ZjM4NmVlMGRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xyXG5pbXBvcnQgeyBDYXJkLFxyXG4gIFBhZ2UsXHJcbiAgRGF0YVRhYmxlLFxyXG4gICAgUmVzb3VyY2VMaXN0LFxyXG4gICAgU3RhY2ssXHJcbiAgICBUZXh0U3R5bGUsXHJcbiAgICBUaHVtYm5haWwsIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICdzdG9yZS1qcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zJztcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3QnO1xyXG5cclxuLyptdXRhdGlvbiBleGFtcGxlUHJvZHVjdENyZWF0ZSgkaW5wdXQ6IFByb2R1Y3RJbnB1dCEpIHtcclxuICBwcm9kdWN0Q3JlYXRlKGlucHV0OiAkaW5wdXQpIHtcclxuICAgIHVzZXJFcnJvcnMge1xyXG4gICAgICBmaWVsZFxyXG4gICAgICBtZXNzYWdlXHJcbiAgICB9XHJcbiAgICBwcm9kdWN0IHtcclxuICAgICAgaWRcclxuICAgICAgdGl0bGVcclxuICAgICAgcHJvZHVjdFR5cGVcclxuICAgIH1cclxuICB9XHJcbn1cclxuKi9cclxuXHJcbi8qe1xyXG4gIFwiaW5wdXRcIjoge1widGl0bGVcIjogXCJ0ZXN0IHByb2R1Y3RcIiwgXCJwcm9kdWN0VHlwZVwiOiBcInRlc3QgdHlwZVwifVxyXG59Ki9cclxuXHJcbi8qcXVlcnkge1xyXG4gIG9yZGVycyhmaXJzdDogMykge1xyXG4gICAgZWRnZXMge1xyXG4gICAgICBjdXJzb3JcclxuICAgICAgbm9kZSB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgZW1haWxcclxuICAgICAgICBuZXRQYXltZW50U2V0e1xyXG4gICAgICAgICAgc2hvcE1vbmV5e1xyXG4gICAgICAgICAgICBhbW91bnRcclxuICAgICAgICAgIH1cdFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcGFnZUluZm8ge1xyXG4gICAgICBoYXNOZXh0UGFnZVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4qL1xyXG5cclxuY29uc3QgR0VUX09SREVSU19CWV9JRCA9IGdxbGBcclxucXVlcnkge1xyXG4gIG9yZGVycyhmaXJzdDogNTApIHtcclxuICAgIGVkZ2VzIHtcclxuICAgICAgY3Vyc29yXHJcbiAgICAgIG5vZGUge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIGVtYWlsXHJcbiAgICAgICAgbmV0UGF5bWVudFNldHtcclxuICAgICAgICAgIHNob3BNb25leXtcclxuICAgICAgICAgICAgYW1vdW50XHJcbiAgICAgICAgICB9XHRcclxuICAgICAgICB9XHJcbiAgICAgICAgbGluZUl0ZW1zKGZpcnN0OjUpe1xyXG4gICAgICAgICAgZWRnZXN7XHJcbiAgICAgICAgICAgIG5vZGV7XHJcbiAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxTcmNcclxuICAgICAgICAgICAgICAgICAgICBhbHRUZXh0XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufWA7XHJcblxyXG5cclxuZnVuY3Rpb24gRGF0YVRhYmxlRXhhbXBsZSgpIHtcclxuICBjb25zdCByb3dzID0gW1xyXG4gICAgWydFbWVyYWxkIFNpbGsgR293bicsICckODc1LjAwJywgMTI0Njg5LCAxNDAsICckMTIyLDUwMC4wMCddLFxyXG4gICAgWydNYXV2ZSBDYXNobWVyZSBTY2FyZicsICckMjMwLjAwJywgMTI0NTMzLCA4MywgJyQxOSwwOTAuMDAnXSxcclxuICAgIFtcclxuICAgICAgJ05hdnkgTWVyaW5vIFdvb2wgQmxheicsXHJcbiAgICAgICckNDQ1LjAwJyxcclxuICAgICAgMTI0NTE4LFxyXG4gICAgICAzMixcclxuICAgICAgJyQxNCwyNDAuMDAnLFxyXG4gICAgXSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2UgdGl0bGU9XCJTYWxlcyBieSBwcm9kdWN0XCI+XHJcbiAgICAgIDxDYXJkPlxyXG4gICAgICAgIDxEYXRhVGFibGVcclxuICAgICAgICAgIGNvbHVtbkNvbnRlbnRUeXBlcz17W1xyXG4gICAgICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgICAgICdudW1lcmljJyxcclxuICAgICAgICAgICAgJ251bWVyaWMnLFxyXG4gICAgICAgICAgICAnbnVtZXJpYycsXHJcbiAgICAgICAgICAgICdudW1lcmljJyxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgICBoZWFkaW5ncz17W1xyXG4gICAgICAgICAgICAnUHJvZHVjdCcsXHJcbiAgICAgICAgICAgICdQcmljZScsXHJcbiAgICAgICAgICAgICdTS1UgTnVtYmVyJyxcclxuICAgICAgICAgICAgJ05ldCBxdWFudGl0eScsXHJcbiAgICAgICAgICAgICdOZXQgc2FsZXMnLFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICAgIHJvd3M9e3Jvd3N9XHJcbiAgICAgICAgICAvL3RvdGFscz17WycnLCAnJywgJycsIDI1NSwgJyQxNTUsODMwLjAwJ119XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9QYWdlPlxyXG4gICk7XHJcbn1cclxuXHJcbmNsYXNzIFJlc291cmNlTGlzdFdpdGhPcmRlcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxRdWVyeSBxdWVyeT17R0VUX09SREVSU19CWV9JRH0+XHJcbiAgICAgICAgeyh7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0pID0+IHtcclxuICAgICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5n4oCmPC9kaXY+O1xyXG4gICAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEub3JkZXJzLmVkZ2VzWzBdLm5vZGUpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YS5vcmRlcnMuZWRnZXNbMF0ubm9kZS5saW5lSXRlbXMuZWRnZXNbMF0ubm9kZS5pbWFnZS5vcmlnaW5hbFNyYyk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgRGF0YVRhYmxlRXhhbXBsZSgpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgPC9RdWVyeT5cclxuICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qPENhcmQ+XHJcbiAgICAgICAgICAgICAgPHA+TGVzIDUwIGRlcm5pw6hyZXMgY29tbWFuZGVzPC9wPlxyXG4gICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3RcclxuICAgICAgICAgICAgICAgIHNob3dIZWFkZXJcclxuICAgICAgICAgICAgICAgIHJlc291cmNlTmFtZT17eyBzaW5ndWxhcjogJ09yZGVyJywgcGx1cmFsOiAnT3JkZXJzJyB9fVxyXG4gICAgICAgICAgICAgICAgaXRlbXM9e2RhdGEub3JkZXJzLmVkZ2VzfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG9yZGVyTmFtZSA9IGl0ZW0ubm9kZS5uYW1lXHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1lZGlhID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxUaHVtYm5haWxcclxuICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubm9kZS5saW5lSXRlbXMuZWRnZXNbMF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW0ubm9kZS5saW5lSXRlbXMuZWRnZXNbMF0ubm9kZS5pbWFnZS5vcmlnaW5hbFNyY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IGl0ZW0ubm9kZS5uZXRQYXltZW50U2V0LnNob3BNb25leS5hbW91bnQ7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPFJlc291cmNlTGlzdC5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgbWVkaWEgPSB7b3JkZXJOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAvLyBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIG1lZGlhPXttZWRpYX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8vYWNjZXNzaWJpbGl0eUxhYmVsPXtgVmlldyBkZXRhaWxzIGZvciAke2l0ZW0udGl0bGV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9zdG9yZS5zZXQoJ2l0ZW0nLCBpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0b3JlLnNldCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcmVkaXJlY3RUb1Byb2R1Y3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFN0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e29yZGVyTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0gZmlsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubm9kZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtwcmljZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RXhwaXJlcyBvbiBSIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jlc291cmNlTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH19XHJcbiAgICAgIDwvUXVlcnk+XHJcbiAgICApO1xyXG4gIH1cclxufSovXHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgUmVzb3VyY2VMaXN0V2l0aE9yZGVyczsiXSwic291cmNlUm9vdCI6IiJ9