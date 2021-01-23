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
  rows.forEach(function (part, index) {
    /* element = ['<Dropdown>' +
     '<Dropdown.Toggle variant="success" id="dropdown-basic">' +
         'Dropdown Button'+
       '</Dropdown.Toggle>'+
     
       '<Dropdown.Menu>'+
         '<Dropdown.Item href="#/action-1">Action</Dropdown.Item>'+
         '<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>'+
         '<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>'+
      '</Dropdown.Menu>'+
     '</Dropdown>'].concat(element);*/

    /* rows[index] = [<Dropdown>
     <Dropdown.Toggle variant="success" id="dropdown-basic">
         Dropdown Button
       </Dropdown.Toggle>
     
       <Dropdown.Menu>
         <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
     </Dropdown>].concat(part);*/
    //part = ['a'].concat(part);
    console.log(part);
  }, rows);

  var clickableRowAction = function clickableRowAction() {
    alert("I am clicked !");
  };

  rows = [[/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Dropdown"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Dropdown"].Toggle, {
      variant: "success",
      id: "dropdown-basic",
      children: "Dropdown Button"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Dropdown"].Menu, {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Dropdown"].Item, {
        href: "#/action-1",
        children: "Action"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Dropdown"].Item, {
        href: "#/action-2",
        children: "Another action"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Dropdown"].Item, {
        href: "#/action-3",
        children: "Something else"
      })]
    })]
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    className: "testClick",
    onClick: clickableRowAction,
    children: "$875.00"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    className: "testClick",
    onClick: clickableRowAction,
    children: "124689"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    className: "testClick",
    onClick: clickableRowAction,
    children: "140"
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    className: "testClick",
    onClick: clickableRowAction,
    children: "$122,500.00"
  })]].concat(rows);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRPcmRlcnMuanMiXSwibmFtZXMiOlsiR0VUX09SREVSU19CWV9JRCIsImdxbCIsIkRhdGFUYWJsZUV4YW1wbGUiLCJkYXRhIiwiaXRlbXMiLCJvcmRlcnMiLCJlZGdlcyIsIml0ZW1zVG9Ob2RlIiwiY3Vyc29yIiwibm9kZSIsIm5vZGVUb1Jvd3MiLCJidWlsZGluZ1JhdyIsImNvbnNvbGUiLCJsb2ciLCJPYmplY3QiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpbmRleCIsImNvbmNhdCIsIm1hcCIsInJvd3MiLCJ2YWx1ZSIsImtleSIsInBhcnQiLCJjbGlja2FibGVSb3dBY3Rpb24iLCJhbGVydCIsIlJlc291cmNlTGlzdFdpdGhPcmRlcnMiLCJsb2FkaW5nIiwiZXJyb3IiLCJtZXNzYWdlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QSxzQkFBTUEsS0FBSyxDQUFDQztBQUFaLFlBQVA7QUFDWGxCLGlCQUFPLENBQUNDLEdBQVIsQ0FBWVYsSUFBWjtBQUNBUyxpQkFBTyxDQUFDQyxHQUFSLENBQVlWLElBQUksQ0FBQ0UsTUFBTCxDQUFZQyxLQUF4QixFQUo2QixDQUs3Qjs7QUFLQSxpQkFDRUosZ0JBQWdCLENBQUNDLElBQUQsQ0FEbEI7QUFHRDtBQWRILFFBREY7QUFrQkc7Ozs7RUFwQjhCNEIsNkNBQUssQ0FBQ0MsUztBQXVCL0I7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHZ0JMLHFGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBkM2Y2NTNmNjg0YTQ2YmUwMzIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xyXG5pbXBvcnQgeyBDYXJkLFxyXG4gIFBhZ2UsXHJcbiAgRGF0YVRhYmxlLFxyXG4gICAgUmVzb3VyY2VMaXN0LFxyXG4gICAgU3RhY2ssXHJcbiAgICBUZXh0U3R5bGUsXHJcbiAgICBUaHVtYm5haWwsIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICdzdG9yZS1qcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zJztcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3QnO1xyXG5pbXBvcnQgeyBEcm9wZG93biwgRHJvcGRvd25Ub2dnbGUsIERyb3Bkb3duTWVudSwgRHJvcGRvd25JdGVtIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG4vKm11dGF0aW9uIGV4YW1wbGVQcm9kdWN0Q3JlYXRlKCRpbnB1dDogUHJvZHVjdElucHV0ISkge1xyXG4gIHByb2R1Y3RDcmVhdGUoaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgdXNlckVycm9ycyB7XHJcbiAgICAgIGZpZWxkXHJcbiAgICAgIG1lc3NhZ2VcclxuICAgIH1cclxuICAgIHByb2R1Y3Qge1xyXG4gICAgICBpZFxyXG4gICAgICB0aXRsZVxyXG4gICAgICBwcm9kdWN0VHlwZVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4qL1xyXG5cclxuLyp7XHJcbiAgXCJpbnB1dFwiOiB7XCJ0aXRsZVwiOiBcInRlc3QgcHJvZHVjdFwiLCBcInByb2R1Y3RUeXBlXCI6IFwidGVzdCB0eXBlXCJ9XHJcbn0qL1xyXG5cclxuLypxdWVyeSB7XHJcbiAgb3JkZXJzKGZpcnN0OiAzKSB7XHJcbiAgICBlZGdlcyB7XHJcbiAgICAgIGN1cnNvclxyXG4gICAgICBub2RlIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIG5hbWVcclxuICAgICAgICBlbWFpbFxyXG4gICAgICAgIG5ldFBheW1lbnRTZXR7XHJcbiAgICAgICAgICBzaG9wTW9uZXl7XHJcbiAgICAgICAgICAgIGFtb3VudFxyXG4gICAgICAgICAgfVx0XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBwYWdlSW5mbyB7XHJcbiAgICAgIGhhc05leHRQYWdlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiovXHJcblxyXG4vKmNvbnN0IEdFVF9PUkRFUlNfQllfSUQgPSBncWxgXHJcbnF1ZXJ5IHtcclxuICBvcmRlcnMoZmlyc3Q6IDUwKSB7XHJcbiAgICBlZGdlcyB7XHJcbiAgICAgIGN1cnNvclxyXG4gICAgICBub2RlIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIG5hbWVcclxuICAgICAgICBlbWFpbFxyXG4gICAgICAgIG5ldFBheW1lbnRTZXR7XHJcbiAgICAgICAgICBzaG9wTW9uZXl7XHJcbiAgICAgICAgICAgIGFtb3VudFxyXG4gICAgICAgICAgfVx0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpbmVJdGVtcyhmaXJzdDo1KXtcclxuICAgICAgICAgIGVkZ2Vze1xyXG4gICAgICAgICAgICBub2Rle1xyXG4gICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsU3JjXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0VGV4dFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1gOyovXHJcblxyXG5cclxuLypcclxuY29uc3QgR0VUX09SREVSU19CWV9JRCA9IGdxbGBcclxucXVlcnkge1xyXG4gIG9yZGVycyhmaXJzdDogNTApIHtcclxuICAgIGVkZ2VzIHtcclxuICAgICAgY3Vyc29yXHJcbiAgICAgIG5vZGUge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIGVtYWlsXHJcbiAgICAgICAgbGluZUl0ZW1zKGZpcnN0OjUpe1xyXG4gICAgICAgICAgZWRnZXN7XHJcbiAgICAgICAgICAgIG5vZGV7XHJcbiAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxTcmNcclxuICAgICAgICAgICAgICAgICAgICBhbHRUZXh0XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufWA7Ki9cclxuXHJcbi8qcXVlcnkge1xyXG4gIG9yZGVycyhmaXJzdDogNTApIHtcclxuICAgIGVkZ2VzIHtcclxuICAgICAgY3Vyc29yXHJcbiAgICAgIG5vZGUge1xyXG4gICAgICAgIG5hbWVcclxuICAgICAgICBjdXN0b21lcntcclxuICAgICAgICAgIGZpcnN0TmFtZVxyXG4gICAgICAgICAgbGFzdE5hbWVcclxuICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVtYWlsXHJcbiAgICAgICAgY3JlYXRlZEF0XHJcbiAgICAgICAgc2hpcHBpbmdMaW5le1xyXG4gICAgICAgICAgY2FycmllcklkZW50aWZpZXJcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVsZmlsbG1lbnRze1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIHRyYWNraW5nSW5mb3tcclxuICAgICAgICAgICAgY29tcGFueVxyXG4gICAgICAgICAgICBudW1iZXJcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVzdGltYXRlZERlbGl2ZXJ5QXRcclxuICAgICAgICAgIGRlbGl2ZXJlZEF0XHJcbiAgICAgICAgICBkaXNwbGF5U3RhdHVzXHJcbiAgICAgICAgICBzdGF0dXNcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0qL1xyXG5cclxuXHJcbmNvbnN0IEdFVF9PUkRFUlNfQllfSUQgPSBncWxgXHJcbnF1ZXJ5IHtcclxuICBvcmRlcnMoZmlyc3Q6IDUwKSB7XHJcbiAgICBlZGdlcyB7XHJcbiAgICAgIGN1cnNvclxyXG4gICAgICBub2RlIHtcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgZW1haWxcclxuICAgICAgICBjcmVhdGVkQXRcclxuICAgICAgICBmdWxmaWxsbWVudHN7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgdHJhY2tpbmdJbmZve1xyXG4gICAgICAgICAgICBjb21wYW55XHJcbiAgICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZXN0aW1hdGVkRGVsaXZlcnlBdFxyXG4gICAgICAgICAgZGVsaXZlcmVkQXRcclxuICAgICAgICAgIGRpc3BsYXlTdGF0dXNcclxuICAgICAgICAgIHN0YXR1c1xyXG4gICAgICAgIH1cclxuICAgICAgICBzaGlwcGluZ0xpbmV7XHJcbiAgICAgICAgICBjYXJyaWVySWRlbnRpZmllclxyXG4gICAgICAgIH1cclxuICAgICAgICBjdXN0b21lcntcclxuICAgICAgICAgIGZpcnN0TmFtZVxyXG4gICAgICAgICAgbGFzdE5hbWVcclxuICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59YDtcclxuXHJcblxyXG5mdW5jdGlvbiBEYXRhVGFibGVFeGFtcGxlKGRhdGEpIHtcclxuICBjb25zdCBpdGVtcyA9IGRhdGEub3JkZXJzLmVkZ2VzO1xyXG5cclxuXHJcbiAgZnVuY3Rpb24gaXRlbXNUb05vZGUoe2N1cnNvciwgbm9kZX0pIHtcclxuICAgIHJldHVybiB7bm9kZX0ubm9kZVxyXG4gIH07XHJcblxyXG4gIC8qZnVuY3Rpb24gbm9kZVRvUm93cyhub2RlLCBidWlsZGluZ1Jhdyl7XHJcbiAgICBjb25zb2xlLmxvZyhcIm5vZGVcIilcclxuICAgIGNvbnNvbGUubG9nKG5vZGUpXHJcbiAgICBjb25zb2xlLmxvZygnZGFucyBsYSBsYW1iZGEgcHJvZm9uZGUnKVxyXG5cclxuICAgICAgT2JqZWN0LnZhbHVlcyhub2RlKS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCk9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhlbGVtZW50KVxyXG4gICAgICAgIC8vY29uc29sZS5sb2codHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnICYmIGVsZW1lbnQgIT09IG51bGwpXHJcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXgpXHJcbiAgICAgICAgaWYoaW5kZXggIT09ICdfdHlwZW5hbWUnKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhidWlsZGluZ1JhdylcclxuICAgICAgICBjb25zb2xlLmxvZyhbZWxlbWVudF0pXHJcbiAgICAgICAgY29uc29sZS5sb2coYnVpbGRpbmdSYXcuY29uY2F0KFtlbGVtZW50XSkpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ19fX19fX19fX19fXycpXHJcbiAgICAgICAgICBidWlsZGluZ1JhdyA9ICAodHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnICYmIGVsZW1lbnQgIT09IG51bGwpID8gbm9kZVRvUm93cyhlbGVtZW50LCBidWlsZGluZ1JhdykgOiBidWlsZGluZ1Jhdy5jb25jYXQoW2VsZW1lbnRdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gYnVpbGRpbmdSYXc7XHJcblxyXG4gIH0qL1xyXG5cclxuICBmdW5jdGlvbiBub2RlVG9Sb3dzKG5vZGUsIGJ1aWxkaW5nUmF3KXtcclxuICAgIGNvbnNvbGUubG9nKFwibm9kZVwiKVxyXG4gICAgY29uc29sZS5sb2cobm9kZSlcclxuICAgIGNvbnNvbGUubG9nKCdkYW5zIGxhIGxhbWJkYSBwcm9mb25kZScpXHJcblxyXG5cclxuICAgICAgT2JqZWN0LmVudHJpZXMobm9kZSkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnRbMF0gIT09ICdfX3R5cGVuYW1lJylcclxuICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50WzBdICE9ICdfX3R5cGVuYW1lJylcclxuICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50WzBdKVxyXG5cclxuICAgICAgICBpZihlbGVtZW50WzBdICE9PSAnX190eXBlbmFtZScpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGJ1aWxkaW5nUmF3KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFtlbGVtZW50WzFdXSlcclxuICAgICAgICBjb25zb2xlLmxvZyhidWlsZGluZ1Jhdy5jb25jYXQoW2VsZW1lbnRbMV1dKSlcclxuICAgICAgICBjb25zb2xlLmxvZygnX19fX19fX19fX19fJylcclxuICAgICAgICAgIGJ1aWxkaW5nUmF3ID0gICh0eXBlb2YgZWxlbWVudFsxXSA9PT0gJ29iamVjdCcgJiYgZWxlbWVudFsxXSAhPT0gbnVsbCkgPyBub2RlVG9Sb3dzKGVsZW1lbnRbMV0sIGJ1aWxkaW5nUmF3KSA6IGJ1aWxkaW5nUmF3LmNvbmNhdChbZWxlbWVudFsxXV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBidWlsZGluZ1JhdztcclxuXHJcbiAgfVxyXG5cclxuICBcclxuICBcclxuXHJcbiAgY29uc29sZS5sb2coJ2l0ZW1zLm1hcChpdGVtc1RvTm9kZSknKVxyXG4gIGNvbnNvbGUubG9nKGl0ZW1zLm1hcChpdGVtc1RvTm9kZSkpXHJcbiAgdmFyIHJvd3MgPSBbXTtcclxuICBpdGVtcy5tYXAoaXRlbXNUb05vZGUpLmZvckVhY2goKHZhbHVlLCBrZXkpPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2tleSx2YWx1ZScpXHJcbiAgICBjb25zb2xlLmxvZyhrZXkpXHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSlcclxuICAgIHJvd3Nba2V5XSA9IG5vZGVUb1Jvd3ModmFsdWUsW10pIFxyXG4gIH0pXHJcblxyXG4gIHJvd3MuZm9yRWFjaChmdW5jdGlvbihwYXJ0LCBpbmRleCl7XHJcbiAgIC8qIGVsZW1lbnQgPSBbJzxEcm9wZG93bj4nICtcclxuICAgICc8RHJvcGRvd24uVG9nZ2xlIHZhcmlhbnQ9XCJzdWNjZXNzXCIgaWQ9XCJkcm9wZG93bi1iYXNpY1wiPicgK1xyXG4gICAgICAgICdEcm9wZG93biBCdXR0b24nK1xyXG4gICAgICAnPC9Ecm9wZG93bi5Ub2dnbGU+JytcclxuICAgIFxyXG4gICAgICAnPERyb3Bkb3duLk1lbnU+JytcclxuICAgICAgICAnPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYWN0aW9uLTFcIj5BY3Rpb248L0Ryb3Bkb3duLkl0ZW0+JytcclxuICAgICAgICAnPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYWN0aW9uLTJcIj5Bbm90aGVyIGFjdGlvbjwvRHJvcGRvd24uSXRlbT4nK1xyXG4gICAgICAgICc8RHJvcGRvd24uSXRlbSBocmVmPVwiIy9hY3Rpb24tM1wiPlNvbWV0aGluZyBlbHNlPC9Ecm9wZG93bi5JdGVtPicrXHJcbiAgICAgJzwvRHJvcGRvd24uTWVudT4nK1xyXG4gICAgJzwvRHJvcGRvd24+J10uY29uY2F0KGVsZW1lbnQpOyovXHJcblxyXG4gICAvKiByb3dzW2luZGV4XSA9IFs8RHJvcGRvd24+XHJcbiAgICA8RHJvcGRvd24uVG9nZ2xlIHZhcmlhbnQ9XCJzdWNjZXNzXCIgaWQ9XCJkcm9wZG93bi1iYXNpY1wiPlxyXG4gICAgICAgIERyb3Bkb3duIEJ1dHRvblxyXG4gICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cclxuICAgIFxyXG4gICAgICA8RHJvcGRvd24uTWVudT5cclxuICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiIy9hY3Rpb24tMVwiPkFjdGlvbjwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiIy9hY3Rpb24tMlwiPkFub3RoZXIgYWN0aW9uPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjL2FjdGlvbi0zXCI+U29tZXRoaW5nIGVsc2U8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gICAgPC9Ecm9wZG93bj5dLmNvbmNhdChwYXJ0KTsqL1xyXG4gICAgLy9wYXJ0ID0gWydhJ10uY29uY2F0KHBhcnQpO1xyXG4gICAgY29uc29sZS5sb2cocGFydClcclxuICB9LCByb3dzKTtcclxuXHJcblxyXG4gIGNvbnN0IGNsaWNrYWJsZVJvd0FjdGlvbiA9ICgpID0+IHtcclxuICAgIGFsZXJ0KFwiSSBhbSBjbGlja2VkICFcIik7XHJcbiAgfTtcclxuXHJcbiAgcm93cyA9IFtcclxuICAgIFtcclxuICAgICAgPERyb3Bkb3duPlxyXG4gICAgPERyb3Bkb3duLlRvZ2dsZSB2YXJpYW50PVwic3VjY2Vzc1wiIGlkPVwiZHJvcGRvd24tYmFzaWNcIj5cclxuICAgICAgICBEcm9wZG93biBCdXR0b25cclxuICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XHJcbiAgICBcclxuICAgICAgPERyb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYWN0aW9uLTFcIj5BY3Rpb248L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYWN0aW9uLTJcIj5Bbm90aGVyIGFjdGlvbjwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiIy9hY3Rpb24tM1wiPlNvbWV0aGluZyBlbHNlPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgIDwvRHJvcGRvd24+LFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3RDbGlja1wiIG9uQ2xpY2s9e2NsaWNrYWJsZVJvd0FjdGlvbn0+XHJcbiAgICAgICAgJDg3NS4wMFxyXG4gICAgICA8L2Rpdj4sXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdENsaWNrXCIgb25DbGljaz17Y2xpY2thYmxlUm93QWN0aW9ufT5cclxuICAgICAgICAxMjQ2ODlcclxuICAgICAgPC9kaXY+LFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3RDbGlja1wiIG9uQ2xpY2s9e2NsaWNrYWJsZVJvd0FjdGlvbn0+XHJcbiAgICAgICAgMTQwXHJcbiAgICAgIDwvZGl2PixcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0Q2xpY2tcIiBvbkNsaWNrPXtjbGlja2FibGVSb3dBY3Rpb259PlxyXG4gICAgICAgICQxMjIsNTAwLjAwXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgXV0uY29uY2F0KHJvd3MpO1xyXG5cclxuICBjb25zb2xlLmxvZygncm93cycpO1xyXG4gIGNvbnNvbGUubG9nKHJvd3MpO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlIGZ1bGxXaWR0aD1cInRydWVcIj5cclxuICAgICAgPENhcmQ+XHJcbiAgICAgICAgPERhdGFUYWJsZVxyXG4gICAgICAgICAgY29sdW1uQ29udGVudFR5cGVzPXtbXHJcbiAgICAgICAgICAgICd0ZXh0JyxcclxuICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgICAgICd0ZXh0JyxcclxuICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgICAgICd0ZXh0JyxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgICBoZWFkaW5ncz17W1xyXG4gICAgICAgICAgICAnaWQnLFxyXG4gICAgICAgICAgICAnbmFtZScsXHJcbiAgICAgICAgICAgICdlbWFpbCcsXHJcbiAgICAgICAgICAgICdqY3AnLFxyXG4gICAgICAgICAgICAnamNwJyxcclxuICAgICAgICAgICAgJ2pjcCcsXHJcbiAgICAgICAgICAgICdqY3AnLFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICAgIHJvd3M9e3Jvd3N9XHJcbiAgICAgICAgICAvLyc8aW1nIHNyYz1cIicrZGF0YSsnXCI+J1xyXG5cclxuICAgICAgICAgIC8qc291cmNlPXtcclxuICAgICAgICAgICAgaXRlbS5ub2RlLmxpbmVJdGVtcy5lZGdlc1swXVxyXG4gICAgICAgICAgICAgID8gaXRlbS5ub2RlLmxpbmVJdGVtcy5lZGdlc1swXS5ub2RlLmltYWdlLm9yaWdpbmFsU3JjXHJcbiAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgfSovXHJcbiAgICAgICAgICAvL3RvdGFscz17WycnLCAnJywgJycsIDI1NSwgJyQxNTUsODMwLjAwJ119XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9QYWdlPlxyXG5cclxuICApO1xyXG59XHJcblxyXG5jbGFzcyBSZXNvdXJjZUxpc3RXaXRoT3JkZXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UXVlcnkgcXVlcnk9e0dFVF9PUkRFUlNfQllfSUR9PlxyXG4gICAgICAgIHsoeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9KSA9PiB7XHJcbiAgICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZ+KApjwvZGl2PjtcclxuICAgICAgICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLm9yZGVycy5lZGdlcyk7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEub3JkZXJzLmVkZ2VzWzBdLm5vZGUubGluZUl0ZW1zLmVkZ2VzWzBdLm5vZGUuaW1hZ2Uub3JpZ2luYWxTcmMpO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIERhdGFUYWJsZUV4YW1wbGUoZGF0YSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICA8L1F1ZXJ5PlxyXG4gICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICAgICAgICAgLyo8Q2FyZD5cclxuICAgICAgICAgICAgICA8cD5MZXMgNTAgZGVybmnDqHJlcyBjb21tYW5kZXM8L3A+XHJcbiAgICAgICAgICAgICAgPFJlc291cmNlTGlzdFxyXG4gICAgICAgICAgICAgICAgc2hvd0hlYWRlclxyXG4gICAgICAgICAgICAgICAgcmVzb3VyY2VOYW1lPXt7IHNpbmd1bGFyOiAnT3JkZXInLCBwbHVyYWw6ICdPcmRlcnMnIH19XHJcbiAgICAgICAgICAgICAgICBpdGVtcz17ZGF0YS5vcmRlcnMuZWRnZXN9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3Qgb3JkZXJOYW1lID0gaXRlbS5ub2RlLm5hbWVcclxuICAgICAgICAgICAgICAgICAgY29uc3QgbWVkaWEgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFRodW1ibmFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5ub2RlLmxpbmVJdGVtcy5lZGdlc1swXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5ub2RlLmxpbmVJdGVtcy5lZGdlc1swXS5ub2RlLmltYWdlLm9yaWdpbmFsU3JjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gaXRlbS5ub2RlLm5ldFBheW1lbnRTZXQuc2hvcE1vbmV5LmFtb3VudDtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8UmVzb3VyY2VMaXN0Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBtZWRpYSA9IHtvcmRlck5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgIC8vIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbWVkaWE9e21lZGlhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLy9hY2Nlc3NpYmlsaXR5TGFiZWw9e2BWaWV3IGRldGFpbHMgZm9yICR7aXRlbS50aXRsZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3N0b3JlLnNldCgnaXRlbScsIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3RvcmUuc2V0JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9yZWRpcmVjdFRvUHJvZHVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57b3JkZXJOYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbSBmaWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5ub2RlLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3ByaWNlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5FeHBpcmVzIG9uIFIgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUmVzb3VyY2VMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPC9RdWVyeT5cclxuICAgICk7XHJcbiAgfVxyXG59Ki9cclxuXHJcbiBleHBvcnQgZGVmYXVsdCBSZXNvdXJjZUxpc3RXaXRoT3JkZXJzOyJdLCJzb3VyY2VSb290IjoiIn0=