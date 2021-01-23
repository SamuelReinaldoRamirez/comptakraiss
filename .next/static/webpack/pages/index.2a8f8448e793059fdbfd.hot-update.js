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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! reactstrap */ "../node_modules/reactstrap/es/index.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\nquery {\n  orders(first: 50) {\n    edges {\n      cursor\n      node {\n        name\n        email\n        createdAt\n        fulfillments{\n          id\n          name\n          trackingInfo{\n            company\n            number\n          }\n          estimatedDeliveryAt\n          deliveredAt\n          displayStatus\n          status\n        }\n        shippingLine{\n          carrierIdentifier\n        }\n        customer{\n          firstName\n          lastName\n          email\n        }\n      }\n    }\n  }\n}"]);

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

/*const GET_ORDERS_BY_ID = gql`
query {
  orders(first: 50) {
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
        lineItems(first:5){
          edges{
            node{
              name
              image {
                id
                    originalSrc
                    altText
              }
               
            }
          }
        }
      }
    }
  }
}`;*/

/*
const GET_ORDERS_BY_ID = gql`
query {
  orders(first: 50) {
    edges {
      cursor
      node {
        id
        name
        email
        lineItems(first:5){
          edges{
            node{
              name
              image {
                id
                    originalSrc
                    altText
              }
               
            }
          }
        }
      }
    }
  }
}`;*/

/*query {
  orders(first: 50) {
    edges {
      cursor
      node {
        name
        customer{
          firstName
          lastName
          email
        }
        email
        createdAt
        shippingLine{
          carrierIdentifier
        }
        fulfillments{
          id
          name
          trackingInfo{
            company
            number
          }
          estimatedDeliveryAt
          deliveredAt
          displayStatus
          status
        }
      }
    }
  }
}*/

var GET_ORDERS_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_7___default()(_templateObject());

function DataTableExample(data) {
  var items = data.orders.edges;

  function itemsToNode(_ref) {
    var cursor = _ref.cursor,
        node = _ref.node;
    return {
      node: node
    }.node;
  }

  ;
  /*function nodeToRows(node, buildingRaw){
    console.log("node")
    console.log(node)
    console.log('dans la lambda profonde')
        Object.values(node).forEach((element, index)=> {
        
        //console.log(element)
        //console.log(typeof element === 'object' && element !== null)
        console.log(index)
        if(index !== '_typename'){
        console.log(buildingRaw)
        console.log([element])
        console.log(buildingRaw.concat([element]))
        console.log('____________')
          buildingRaw =  (typeof element === 'object' && element !== null) ? nodeToRows(element, buildingRaw) : buildingRaw.concat([element]);
        }
      });
      return buildingRaw;
    }*/

  function nodeToRows(node, buildingRaw) {
    console.log("node");
    console.log(node);
    console.log('dans la lambda profonde');
    Object.entries(node).forEach(function (element, index) {
      console.log(element[0] !== '__typename');
      console.log(element[0] != '__typename');
      console.log(element[0]);

      if (element[0] !== '__typename') {
        console.log(buildingRaw);
        console.log([element[1]]);
        console.log(buildingRaw.concat([element[1]]));
        console.log('____________');
        buildingRaw = typeof element[1] === 'object' && element[1] !== null ? nodeToRows(element[1], buildingRaw) : buildingRaw.concat([element[1]]);
      }
    });
    return buildingRaw;
  }

  console.log('items.map(itemsToNode)');
  console.log(items.map(itemsToNode));
  var rows = [];
  items.map(itemsToNode).forEach(function (value, key) {
    console.log('key,value');
    console.log(key);
    console.log(value);
    rows[key] = nodeToRows(value, []);
  });
  rows.forEach(function (element) {
    console.log(element);
    element = ['<Dropdown>' + '<Dropdown.Toggle variant="success" id="dropdown-basic">' + 'Dropdown Button' + '</Dropdown.Toggle>' + '<Dropdown.Menu>' + '<Dropdown.Item href="#/action-1">Action</Dropdown.Item>' + '<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>' + '<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>' + '</Dropdown.Menu>' + '</Dropdown>'].concat(element);
    console.log(element);
  });
  console.log('rows');
  console.log(rows);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Page"], {
    fullWidth: "true",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Card"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["DataTable"], {
        columnContentTypes: ['text', 'text', 'text', 'text', 'text', 'text', 'text'],
        headings: ['id', 'name', 'email', 'jcp', 'jcp', 'jcp', 'jcp'],
        rows: rows //'<img src="'+data+'">'

        /*source={
          item.node.lineItems.edges[0]
            ? item.node.lineItems.edges[0].node.image.originalSrc
            : ''
        }*/
        //totals={['', '', '', 255, '$155,830.00']}

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
        children: function children(_ref2) {
          var data = _ref2.data,
              loading = _ref2.loading,
              error = _ref2.error;
          if (loading) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
            children: "Loading\u2026"
          });
          if (error) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
            children: error.message
          });
          console.log(data);
          console.log(data.orders.edges); //console.log(data.orders.edges[0].node.lineItems.edges[0].node.image.originalSrc);

          return DataTableExample(data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRPcmRlcnMuanMiXSwibmFtZXMiOlsiR0VUX09SREVSU19CWV9JRCIsImdxbCIsIkRhdGFUYWJsZUV4YW1wbGUiLCJkYXRhIiwiaXRlbXMiLCJvcmRlcnMiLCJlZGdlcyIsIml0ZW1zVG9Ob2RlIiwiY3Vyc29yIiwibm9kZSIsIm5vZGVUb1Jvd3MiLCJidWlsZGluZ1JhdyIsImNvbnNvbGUiLCJsb2ciLCJPYmplY3QiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpbmRleCIsImNvbmNhdCIsIm1hcCIsInJvd3MiLCJ2YWx1ZSIsImtleSIsIlJlc291cmNlTGlzdFdpdGhPcmRlcnMiLCJsb2FkaW5nIiwiZXJyb3IiLCJtZXNzYWdlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QixTQUEzQkEsSUFBMkI7QUFBQSxjQUFyQnNCLE9BQXFCLFNBQXJCQSxPQUFxQjtBQUFBLGNBQVpDLEtBQVksU0FBWkEsS0FBWTtBQUM3QixjQUFJRCxPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBLFlBQVA7QUFDYixjQUFJQyxLQUFKLEVBQVcsb0JBQU87QUFBQSxzQkFBTUEsS0FBSyxDQUFDQztBQUFaLFlBQVA7QUFDWGYsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZVixJQUFaO0FBQ0FTLGlCQUFPLENBQUNDLEdBQVIsQ0FBWVYsSUFBSSxDQUFDRSxNQUFMLENBQVlDLEtBQXhCLEVBSjZCLENBSzdCOztBQUtBLGlCQUNFSixnQkFBZ0IsQ0FBQ0MsSUFBRCxDQURsQjtBQUdEO0FBZEgsUUFERjtBQWtCRzs7OztFQXBCOEJ5Qiw2Q0FBSyxDQUFDQyxTO0FBdUIvQjtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdnQkwscUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmE4Zjg0NDhlNzkzMDU5ZmRiZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XHJcbmltcG9ydCB7IENhcmQsXHJcbiAgUGFnZSxcclxuICBEYXRhVGFibGUsXHJcbiAgICBSZXNvdXJjZUxpc3QsXHJcbiAgICBTdGFjayxcclxuICAgIFRleHRTdHlsZSxcclxuICAgIFRodW1ibmFpbCwgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdCc7XHJcbmltcG9ydCB7IERyb3Bkb3duLCBEcm9wZG93blRvZ2dsZSwgRHJvcGRvd25NZW51LCBEcm9wZG93bkl0ZW0gfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbi8qbXV0YXRpb24gZXhhbXBsZVByb2R1Y3RDcmVhdGUoJGlucHV0OiBQcm9kdWN0SW5wdXQhKSB7XHJcbiAgcHJvZHVjdENyZWF0ZShpbnB1dDogJGlucHV0KSB7XHJcbiAgICB1c2VyRXJyb3JzIHtcclxuICAgICAgZmllbGRcclxuICAgICAgbWVzc2FnZVxyXG4gICAgfVxyXG4gICAgcHJvZHVjdCB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHRpdGxlXHJcbiAgICAgIHByb2R1Y3RUeXBlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiovXHJcblxyXG4vKntcclxuICBcImlucHV0XCI6IHtcInRpdGxlXCI6IFwidGVzdCBwcm9kdWN0XCIsIFwicHJvZHVjdFR5cGVcIjogXCJ0ZXN0IHR5cGVcIn1cclxufSovXHJcblxyXG4vKnF1ZXJ5IHtcclxuICBvcmRlcnMoZmlyc3Q6IDMpIHtcclxuICAgIGVkZ2VzIHtcclxuICAgICAgY3Vyc29yXHJcbiAgICAgIG5vZGUge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIGVtYWlsXHJcbiAgICAgICAgbmV0UGF5bWVudFNldHtcclxuICAgICAgICAgIHNob3BNb25leXtcclxuICAgICAgICAgICAgYW1vdW50XHJcbiAgICAgICAgICB9XHRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHBhZ2VJbmZvIHtcclxuICAgICAgaGFzTmV4dFBhZ2VcclxuICAgIH1cclxuICB9XHJcbn1cclxuKi9cclxuXHJcbi8qY29uc3QgR0VUX09SREVSU19CWV9JRCA9IGdxbGBcclxucXVlcnkge1xyXG4gIG9yZGVycyhmaXJzdDogNTApIHtcclxuICAgIGVkZ2VzIHtcclxuICAgICAgY3Vyc29yXHJcbiAgICAgIG5vZGUge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIGVtYWlsXHJcbiAgICAgICAgbmV0UGF5bWVudFNldHtcclxuICAgICAgICAgIHNob3BNb25leXtcclxuICAgICAgICAgICAgYW1vdW50XHJcbiAgICAgICAgICB9XHRcclxuICAgICAgICB9XHJcbiAgICAgICAgbGluZUl0ZW1zKGZpcnN0OjUpe1xyXG4gICAgICAgICAgZWRnZXN7XHJcbiAgICAgICAgICAgIG5vZGV7XHJcbiAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxTcmNcclxuICAgICAgICAgICAgICAgICAgICBhbHRUZXh0XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufWA7Ki9cclxuXHJcblxyXG4vKlxyXG5jb25zdCBHRVRfT1JERVJTX0JZX0lEID0gZ3FsYFxyXG5xdWVyeSB7XHJcbiAgb3JkZXJzKGZpcnN0OiA1MCkge1xyXG4gICAgZWRnZXMge1xyXG4gICAgICBjdXJzb3JcclxuICAgICAgbm9kZSB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgZW1haWxcclxuICAgICAgICBsaW5lSXRlbXMoZmlyc3Q6NSl7XHJcbiAgICAgICAgICBlZGdlc3tcclxuICAgICAgICAgICAgbm9kZXtcclxuICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbFNyY1xyXG4gICAgICAgICAgICAgICAgICAgIGFsdFRleHRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59YDsqL1xyXG5cclxuLypxdWVyeSB7XHJcbiAgb3JkZXJzKGZpcnN0OiA1MCkge1xyXG4gICAgZWRnZXMge1xyXG4gICAgICBjdXJzb3JcclxuICAgICAgbm9kZSB7XHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIGN1c3RvbWVye1xyXG4gICAgICAgICAgZmlyc3ROYW1lXHJcbiAgICAgICAgICBsYXN0TmFtZVxyXG4gICAgICAgICAgZW1haWxcclxuICAgICAgICB9XHJcbiAgICAgICAgZW1haWxcclxuICAgICAgICBjcmVhdGVkQXRcclxuICAgICAgICBzaGlwcGluZ0xpbmV7XHJcbiAgICAgICAgICBjYXJyaWVySWRlbnRpZmllclxyXG4gICAgICAgIH1cclxuICAgICAgICBmdWxmaWxsbWVudHN7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgdHJhY2tpbmdJbmZve1xyXG4gICAgICAgICAgICBjb21wYW55XHJcbiAgICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZXN0aW1hdGVkRGVsaXZlcnlBdFxyXG4gICAgICAgICAgZGVsaXZlcmVkQXRcclxuICAgICAgICAgIGRpc3BsYXlTdGF0dXNcclxuICAgICAgICAgIHN0YXR1c1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSovXHJcblxyXG5cclxuY29uc3QgR0VUX09SREVSU19CWV9JRCA9IGdxbGBcclxucXVlcnkge1xyXG4gIG9yZGVycyhmaXJzdDogNTApIHtcclxuICAgIGVkZ2VzIHtcclxuICAgICAgY3Vyc29yXHJcbiAgICAgIG5vZGUge1xyXG4gICAgICAgIG5hbWVcclxuICAgICAgICBlbWFpbFxyXG4gICAgICAgIGNyZWF0ZWRBdFxyXG4gICAgICAgIGZ1bGZpbGxtZW50c3tcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICB0cmFja2luZ0luZm97XHJcbiAgICAgICAgICAgIGNvbXBhbnlcclxuICAgICAgICAgICAgbnVtYmVyXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlc3RpbWF0ZWREZWxpdmVyeUF0XHJcbiAgICAgICAgICBkZWxpdmVyZWRBdFxyXG4gICAgICAgICAgZGlzcGxheVN0YXR1c1xyXG4gICAgICAgICAgc3RhdHVzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNoaXBwaW5nTGluZXtcclxuICAgICAgICAgIGNhcnJpZXJJZGVudGlmaWVyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1c3RvbWVye1xyXG4gICAgICAgICAgZmlyc3ROYW1lXHJcbiAgICAgICAgICBsYXN0TmFtZVxyXG4gICAgICAgICAgZW1haWxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1gO1xyXG5cclxuXHJcbmZ1bmN0aW9uIERhdGFUYWJsZUV4YW1wbGUoZGF0YSkge1xyXG4gIGNvbnN0IGl0ZW1zID0gZGF0YS5vcmRlcnMuZWRnZXM7XHJcblxyXG5cclxuICBmdW5jdGlvbiBpdGVtc1RvTm9kZSh7Y3Vyc29yLCBub2RlfSkge1xyXG4gICAgcmV0dXJuIHtub2RlfS5ub2RlXHJcbiAgfTtcclxuXHJcbiAgLypmdW5jdGlvbiBub2RlVG9Sb3dzKG5vZGUsIGJ1aWxkaW5nUmF3KXtcclxuICAgIGNvbnNvbGUubG9nKFwibm9kZVwiKVxyXG4gICAgY29uc29sZS5sb2cobm9kZSlcclxuICAgIGNvbnNvbGUubG9nKCdkYW5zIGxhIGxhbWJkYSBwcm9mb25kZScpXHJcblxyXG4gICAgICBPYmplY3QudmFsdWVzKG5vZGUpLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KT0+IHtcclxuICAgICAgICBcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGVsZW1lbnQpXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcgJiYgZWxlbWVudCAhPT0gbnVsbClcclxuICAgICAgICBjb25zb2xlLmxvZyhpbmRleClcclxuICAgICAgICBpZihpbmRleCAhPT0gJ190eXBlbmFtZScpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGJ1aWxkaW5nUmF3KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFtlbGVtZW50XSlcclxuICAgICAgICBjb25zb2xlLmxvZyhidWlsZGluZ1Jhdy5jb25jYXQoW2VsZW1lbnRdKSlcclxuICAgICAgICBjb25zb2xlLmxvZygnX19fX19fX19fX19fJylcclxuICAgICAgICAgIGJ1aWxkaW5nUmF3ID0gICh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcgJiYgZWxlbWVudCAhPT0gbnVsbCkgPyBub2RlVG9Sb3dzKGVsZW1lbnQsIGJ1aWxkaW5nUmF3KSA6IGJ1aWxkaW5nUmF3LmNvbmNhdChbZWxlbWVudF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBidWlsZGluZ1JhdztcclxuXHJcbiAgfSovXHJcblxyXG4gIGZ1bmN0aW9uIG5vZGVUb1Jvd3Mobm9kZSwgYnVpbGRpbmdSYXcpe1xyXG4gICAgY29uc29sZS5sb2coXCJub2RlXCIpXHJcbiAgICBjb25zb2xlLmxvZyhub2RlKVxyXG4gICAgY29uc29sZS5sb2coJ2RhbnMgbGEgbGFtYmRhIHByb2ZvbmRlJylcclxuXHJcblxyXG4gICAgICBPYmplY3QuZW50cmllcyhub2RlKS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCk9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coZWxlbWVudFswXSAhPT0gJ19fdHlwZW5hbWUnKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnRbMF0gIT0gJ19fdHlwZW5hbWUnKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnRbMF0pXHJcblxyXG4gICAgICAgIGlmKGVsZW1lbnRbMF0gIT09ICdfX3R5cGVuYW1lJyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coYnVpbGRpbmdSYXcpXHJcbiAgICAgICAgY29uc29sZS5sb2coW2VsZW1lbnRbMV1dKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGJ1aWxkaW5nUmF3LmNvbmNhdChbZWxlbWVudFsxXV0pKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdfX19fX19fX19fX18nKVxyXG4gICAgICAgICAgYnVpbGRpbmdSYXcgPSAgKHR5cGVvZiBlbGVtZW50WzFdID09PSAnb2JqZWN0JyAmJiBlbGVtZW50WzFdICE9PSBudWxsKSA/IG5vZGVUb1Jvd3MoZWxlbWVudFsxXSwgYnVpbGRpbmdSYXcpIDogYnVpbGRpbmdSYXcuY29uY2F0KFtlbGVtZW50WzFdXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGJ1aWxkaW5nUmF3O1xyXG5cclxuICB9XHJcblxyXG4gIFxyXG4gIFxyXG5cclxuICBjb25zb2xlLmxvZygnaXRlbXMubWFwKGl0ZW1zVG9Ob2RlKScpXHJcbiAgY29uc29sZS5sb2coaXRlbXMubWFwKGl0ZW1zVG9Ob2RlKSlcclxuICB2YXIgcm93cyA9IFtdO1xyXG4gIGl0ZW1zLm1hcChpdGVtc1RvTm9kZSkuZm9yRWFjaCgodmFsdWUsIGtleSk9PiB7XHJcbiAgICBjb25zb2xlLmxvZygna2V5LHZhbHVlJylcclxuICAgIGNvbnNvbGUubG9nKGtleSlcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKVxyXG4gICAgcm93c1trZXldID0gbm9kZVRvUm93cyh2YWx1ZSxbXSkgXHJcbiAgfSlcclxuXHJcbiAgcm93cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZWxlbWVudClcclxuICAgIGVsZW1lbnQgPSBbJzxEcm9wZG93bj4nICtcclxuICAgICc8RHJvcGRvd24uVG9nZ2xlIHZhcmlhbnQ9XCJzdWNjZXNzXCIgaWQ9XCJkcm9wZG93bi1iYXNpY1wiPicgK1xyXG4gICAgICAgICdEcm9wZG93biBCdXR0b24nK1xyXG4gICAgICAnPC9Ecm9wZG93bi5Ub2dnbGU+JytcclxuICAgIFxyXG4gICAgICAnPERyb3Bkb3duLk1lbnU+JytcclxuICAgICAgICAnPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYWN0aW9uLTFcIj5BY3Rpb248L0Ryb3Bkb3duLkl0ZW0+JytcclxuICAgICAgICAnPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYWN0aW9uLTJcIj5Bbm90aGVyIGFjdGlvbjwvRHJvcGRvd24uSXRlbT4nK1xyXG4gICAgICAgICc8RHJvcGRvd24uSXRlbSBocmVmPVwiIy9hY3Rpb24tM1wiPlNvbWV0aGluZyBlbHNlPC9Ecm9wZG93bi5JdGVtPicrXHJcbiAgICAgJzwvRHJvcGRvd24uTWVudT4nK1xyXG4gICAgJzwvRHJvcGRvd24+J10uY29uY2F0KGVsZW1lbnQpO1xyXG4gICAgY29uc29sZS5sb2coZWxlbWVudClcclxuICB9KTtcclxuICBjb25zb2xlLmxvZygncm93cycpO1xyXG4gIGNvbnNvbGUubG9nKHJvd3MpO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlIGZ1bGxXaWR0aD1cInRydWVcIj5cclxuICAgICAgPENhcmQ+XHJcbiAgICAgICAgPERhdGFUYWJsZVxyXG4gICAgICAgICAgY29sdW1uQ29udGVudFR5cGVzPXtbXHJcbiAgICAgICAgICAgICd0ZXh0JyxcclxuICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgICAgICd0ZXh0JyxcclxuICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgICAgICd0ZXh0JyxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgICBoZWFkaW5ncz17W1xyXG4gICAgICAgICAgICAnaWQnLFxyXG4gICAgICAgICAgICAnbmFtZScsXHJcbiAgICAgICAgICAgICdlbWFpbCcsXHJcbiAgICAgICAgICAgICdqY3AnLFxyXG4gICAgICAgICAgICAnamNwJyxcclxuICAgICAgICAgICAgJ2pjcCcsXHJcbiAgICAgICAgICAgICdqY3AnLFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICAgIHJvd3M9e3Jvd3N9XHJcbiAgICAgICAgICAvLyc8aW1nIHNyYz1cIicrZGF0YSsnXCI+J1xyXG5cclxuICAgICAgICAgIC8qc291cmNlPXtcclxuICAgICAgICAgICAgaXRlbS5ub2RlLmxpbmVJdGVtcy5lZGdlc1swXVxyXG4gICAgICAgICAgICAgID8gaXRlbS5ub2RlLmxpbmVJdGVtcy5lZGdlc1swXS5ub2RlLmltYWdlLm9yaWdpbmFsU3JjXHJcbiAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgfSovXHJcbiAgICAgICAgICAvL3RvdGFscz17WycnLCAnJywgJycsIDI1NSwgJyQxNTUsODMwLjAwJ119XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9QYWdlPlxyXG5cclxuICApO1xyXG59XHJcblxyXG5jbGFzcyBSZXNvdXJjZUxpc3RXaXRoT3JkZXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UXVlcnkgcXVlcnk9e0dFVF9PUkRFUlNfQllfSUR9PlxyXG4gICAgICAgIHsoeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9KSA9PiB7XHJcbiAgICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZ+KApjwvZGl2PjtcclxuICAgICAgICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLm9yZGVycy5lZGdlcyk7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEub3JkZXJzLmVkZ2VzWzBdLm5vZGUubGluZUl0ZW1zLmVkZ2VzWzBdLm5vZGUuaW1hZ2Uub3JpZ2luYWxTcmMpO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIERhdGFUYWJsZUV4YW1wbGUoZGF0YSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICA8L1F1ZXJ5PlxyXG4gICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICAgICAgICAgLyo8Q2FyZD5cclxuICAgICAgICAgICAgICA8cD5MZXMgNTAgZGVybmnDqHJlcyBjb21tYW5kZXM8L3A+XHJcbiAgICAgICAgICAgICAgPFJlc291cmNlTGlzdFxyXG4gICAgICAgICAgICAgICAgc2hvd0hlYWRlclxyXG4gICAgICAgICAgICAgICAgcmVzb3VyY2VOYW1lPXt7IHNpbmd1bGFyOiAnT3JkZXInLCBwbHVyYWw6ICdPcmRlcnMnIH19XHJcbiAgICAgICAgICAgICAgICBpdGVtcz17ZGF0YS5vcmRlcnMuZWRnZXN9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3Qgb3JkZXJOYW1lID0gaXRlbS5ub2RlLm5hbWVcclxuICAgICAgICAgICAgICAgICAgY29uc3QgbWVkaWEgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFRodW1ibmFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5ub2RlLmxpbmVJdGVtcy5lZGdlc1swXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5ub2RlLmxpbmVJdGVtcy5lZGdlc1swXS5ub2RlLmltYWdlLm9yaWdpbmFsU3JjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gaXRlbS5ub2RlLm5ldFBheW1lbnRTZXQuc2hvcE1vbmV5LmFtb3VudDtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8UmVzb3VyY2VMaXN0Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBtZWRpYSA9IHtvcmRlck5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgIC8vIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbWVkaWE9e21lZGlhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLy9hY2Nlc3NpYmlsaXR5TGFiZWw9e2BWaWV3IGRldGFpbHMgZm9yICR7aXRlbS50aXRsZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3N0b3JlLnNldCgnaXRlbScsIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3RvcmUuc2V0JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9yZWRpcmVjdFRvUHJvZHVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57b3JkZXJOYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbSBmaWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5ub2RlLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3ByaWNlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5FeHBpcmVzIG9uIFIgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUmVzb3VyY2VMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPC9RdWVyeT5cclxuICAgICk7XHJcbiAgfVxyXG59Ki9cclxuXHJcbiBleHBvcnQgZGVmYXVsdCBSZXNvdXJjZUxpc3RXaXRoT3JkZXJzOyJdLCJzb3VyY2VSb290IjoiIn0=