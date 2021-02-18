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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shopify/app-bridge/actions */ "./node_modules/@shopify/app-bridge/actions/index.js");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _selectdrop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./selectdrop */ "./components/selectdrop.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\nquery {\n  orders(first: 50) {\n    edges {\n      cursor\n      node {\n        name\n        email\n        createdAt\n        fulfillments{\n          id\n          name\n          trackingInfo{\n            company\n            number\n          }\n          estimatedDeliveryAt\n          deliveredAt\n          displayStatus\n          status\n        }\n        shippingLine{\n          carrierIdentifier\n        }\n        customer{\n          firstName\n          lastName\n          email\n        }\n      }\n    }\n  }\n}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var GET_ORDERS_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_7___default()(_templateObject());
var retourDuGet = [];
/*let AuthUser = function(data) {
   return google.login(data.username, data.password).then(token => { return token } )
 }
 let userToken = await AuthUser(data)
 console.log(userToken)*/

/* let callGet = function(){
   console.log("axios") 
 var retourDeFin;
 retourDuGet = await axios.get("https://"+KEY_NGROKBACK+".ngrok.io/getStateOrder", {headers: {"Content-Type": 'application/json'}})
 .then(function(result) {
   console.log("result dans le then dans le call")
   console.log(result.data)
   retourDeFin = result.data
   return result.data;
 })
 .catch(err => console.error(err))
// retourDuGet = axios.get("https://"+KEY_NGROKBACK+".ngrok.io/getStateOrder", {headers: {"Content-Type": 'application/json'}}).value.data
console.log("result à la fin du call")
console.log(retourDeFin) 
return retourDeFin
}*/

/*async function callGet(){
  console.log("axios") 
  var retourDeFin;
  retourDuGet = await axios.get("https://"+KEY_NGROKBACK+".ngrok.io/getStateOrder", {headers: {"Content-Type": 'application/json'}})
  .then(function(result) {
    console.log("result dans le then dans le call")
    console.log(result.data)
    retourDeFin = result.data
    return result.data;
  })
  .catch(err => console.error(err))
 // retourDuGet = axios.get("https://"+KEY_NGROKBACK+".ngrok.io/getStateOrder", {headers: {"Content-Type": 'application/json'}}).value.data
 console.log("result à la fin du call")
 console.log(retourDeFin) 
 return retourDeFin
}*/

function callGet() {
  console.log("axios");
  axios__WEBPACK_IMPORTED_MODULE_15___default.a.get("https://" + "bb50b25f12bb" + ".ngrok.io/getStateOrder", {
    headers: {
      "Content-Type": 'application/json'
    }
  }).then(function (result) {
    console.log("rrrt");
    console.log(result.data);
    return result.data;
  });
}

function getCol(matrix, col) {
  var column = [];

  for (var i = 0; i < matrix.length; i++) {
    column.push(matrix[i][col]);
  }

  return column;
}

function DataTableExample(data) {
  function callGetStateOrder() {
    console.log("axios cal get state order");
    return axios__WEBPACK_IMPORTED_MODULE_15___default.a.get("https://" + "bb50b25f12bb" + ".ngrok.io/getStateOrder", {
      headers: {
        "Content-Type": 'application/json'
      }
    });
  }

  var items = data.orders.edges;
  console.log("alpha phase");
  callGet(); //console.log(callGet())
  //console.log(() => callGet())

  function itemsToNode(_ref) {
    var cursor = _ref.cursor,
        node = _ref.node;
    return {
      node: node
    }.node;
  }

  ;

  function nodeToRows(node, buildingRaw) {
    /*console.log("node")
    console.log(node)
    console.log('dans la lambda profonde')*/
    Object.entries(node).forEach(function (element, index) {
      /*console.log(element[0] !== '__typename')
      console.log(element[0] != '__typename')
      console.log(element[0])*/
      if (element[0] !== '__typename') {
        /* console.log(buildingRaw)
         console.log([element[1]])
         console.log(buildingRaw.concat([element[1]]))
         console.log('____________')*/
        buildingRaw = typeof element[1] === 'object' && element[1] !== null ? nodeToRows(element[1], buildingRaw) : buildingRaw.concat([element[1]]);
      }
    });
    return buildingRaw;
  }
  /* console.log('items.map(itemsToNode)')
   console.log(items.map(itemsToNode))*/


  var rows = [];
  items.map(itemsToNode).forEach(function (value, key) {
    /* console.log('key,value')
     console.log(key)
     console.log(value)*/
    rows[key] = nodeToRows(value, []);
  });

  function initRows(data) {
    console.log('Init rows');
    console.log(data);
    rows.forEach(function (part, index) {
      /* this.setState({ value: event.target.value });
        store.set('etat'+this.props.id, { id : this.props.id, choix : event.target.value})
        var orderState = (event.target.value == "Select…") ? null : event.target.value;
        console.log(orderState)*/
      rows[index] = [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_selectdrop__WEBPACK_IMPORTED_MODULE_14__["default"], {
        id: index
      })].concat(part); //.setState({value : data[index].order_state})]
    }, rows);
    var coloneDesEtatsASetter = getCol(rows, 0);
    console.log("colonne des select");
    console.log(coloneDesEtatsASetter);
    var coloneDesNamesIds = getCol(rows, 1);
  }

  var rowsFromDB = [];
  callGetStateOrder().then(function (result) {
    console.log("call get state order callback");
    console.log(result.data);
    initRows(result.data);
  });
  /** SAMIA DEBUT
  rows.forEach(function (part, index) {
    //axios.getEtat du select à setter (en fonction de la page et du tri (le tri doit etre global dans un premier temps et puis on pourra faire un tri sur les seuls éléments de la page aussi))
    rows[index] = [<Select id={index}></Select>].concat(part);
  }, rows);
    console.log('rows');
  console.log(rows);
    //on ne tient pas encore compte de la pagination
  var coloneDesEtatsASetter = getCol(rows, 0)
  console.log('vide?')
  console.log(coloneDesEtatsASetter)
  var coloneDesNamesIds = getCol(rows, 1)
    var rowsFromDB = [];
  console.log(rowsFromDB)
  console.log("beta phase")
  SAMIA FIN **/

  /*let AuthUser = function(data) {
    return google.login(data.username, data.password).then(token => { return token } )
  }
  let userToken = await AuthUser(data)
  console.log(userToken)*/

  console.log(callGet());
  var retourDuCallGet;
  /*console.log(callGet().then(function(result) {
    console.log("le result dans le then")
    console.log(result) // "Some User token"
    retourDuCallGet = result;
    console.log('resoleveee')
    //resolve(result)
    return result
  }).then(function(result) {
  console.log("le result dans le then")
  console.log(result) // "Some User token"
  retourDuCallGet = result;
  return result
  }))*/

  console.log("retourDuCallGet");
  console.log(retourDuCallGet);
  /*retourDuCallGet.forEach((value, key)=> {
    console.log(value)
      rowsFromDB[key] = nodeToRows(value,[]) 
   })*/

  console.log("rowsFromDB");
  console.log(rowsFromDB);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Page"], {
    fullWidth: "true",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Card"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: function onClick() {
          return callGet();
        },
        children: "Example button"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["DataTable"], {
        columnContentTypes: ['text', 'text', 'text', 'text', 'text', 'text', 'text'],
        headings: ['id', 'name', 'email', 'jcp', 'jcp', 'jcp', 'jcp'] //il faut récupérer les order states de la db et peut etre les mettre en cache ca serait cool
        ,
        rows: rows //'<img src="'+data+'">'

        /*source={
          item.node.lineItems.edges[0]
            ? item.node.lineItems.edges[0].node.image.originalSrc
            : ''
        }*/
        //totals={['', '', '', 255, '$155,830.00']}

      })]
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
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRPcmRlcnMuanMiXSwibmFtZXMiOlsiR0VUX09SREVSU19CWV9JRCIsImdxbCIsInJldG91ckR1R2V0IiwiY2FsbEdldCIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsImdldCIsIktFWV9OR1JPS0JBQ0siLCJoZWFkZXJzIiwidGhlbiIsInJlc3VsdCIsImRhdGEiLCJnZXRDb2wiLCJtYXRyaXgiLCJjb2wiLCJjb2x1bW4iLCJpIiwibGVuZ3RoIiwicHVzaCIsIkRhdGFUYWJsZUV4YW1wbGUiLCJjYWxsR2V0U3RhdGVPcmRlciIsIml0ZW1zIiwib3JkZXJzIiwiZWRnZXMiLCJpdGVtc1RvTm9kZSIsImN1cnNvciIsIm5vZGUiLCJub2RlVG9Sb3dzIiwiYnVpbGRpbmdSYXciLCJPYmplY3QiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpbmRleCIsImNvbmNhdCIsInJvd3MiLCJtYXAiLCJ2YWx1ZSIsImtleSIsImluaXRSb3dzIiwicGFydCIsImNvbG9uZURlc0V0YXRzQVNldHRlciIsImNvbG9uZURlc05hbWVzSWRzIiwicm93c0Zyb21EQiIsInJldG91ckR1Q2FsbEdldCIsIlJlc291cmNlTGlzdFdpdGhPcmRlcnMiLCJsb2FkaW5nIiwiZXJyb3IiLCJtZXNzYWdlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLGdCQUFnQixHQUFHQyxrREFBSCxtQkFBdEI7QUFrQ0EsSUFBSUMsV0FBVyxHQUFHLEVBQWxCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Y0FBSUQsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQSxZQUFQO0FBQ2IsY0FBSUMsS0FBSixFQUFXLG9CQUFPO0FBQUEsc0JBQU1BLEtBQUssQ0FBQ0M7QUFBWixZQUFQO0FBQ1g3QyxpQkFBTyxDQUFDQyxHQUFSLENBQVlPLElBQVo7QUFDQVIsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZTyxJQUFJLENBQUNXLE1BQUwsQ0FBWUMsS0FBeEIsRUFKNkIsQ0FLN0I7O0FBRUEsaUJBQ0VKLGdCQUFnQixDQUFDUixJQUFELENBRGxCO0FBR0Q7QUFYSCxRQURGO0FBZUQ7Ozs7RUFsQmtDc0MsNkNBQUssQ0FBQ0MsUztBQXFCM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVlTCxxRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mODQwYjg3NjRmYTQ4ODdmMDcyNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAncmVhY3QtYXBvbGxvJztcclxuaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIFBhZ2UsXHJcbiAgRGF0YVRhYmxlLFxyXG4gIFBhZ2luYXRpb24sXHJcbiAgQnV0dG9uXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zJztcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3QnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vc2VsZWN0ZHJvcCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuXHJcbmNvbnN0IEdFVF9PUkRFUlNfQllfSUQgPSBncWxgXHJcbnF1ZXJ5IHtcclxuICBvcmRlcnMoZmlyc3Q6IDUwKSB7XHJcbiAgICBlZGdlcyB7XHJcbiAgICAgIGN1cnNvclxyXG4gICAgICBub2RlIHtcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgZW1haWxcclxuICAgICAgICBjcmVhdGVkQXRcclxuICAgICAgICBmdWxmaWxsbWVudHN7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgdHJhY2tpbmdJbmZve1xyXG4gICAgICAgICAgICBjb21wYW55XHJcbiAgICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZXN0aW1hdGVkRGVsaXZlcnlBdFxyXG4gICAgICAgICAgZGVsaXZlcmVkQXRcclxuICAgICAgICAgIGRpc3BsYXlTdGF0dXNcclxuICAgICAgICAgIHN0YXR1c1xyXG4gICAgICAgIH1cclxuICAgICAgICBzaGlwcGluZ0xpbmV7XHJcbiAgICAgICAgICBjYXJyaWVySWRlbnRpZmllclxyXG4gICAgICAgIH1cclxuICAgICAgICBjdXN0b21lcntcclxuICAgICAgICAgIGZpcnN0TmFtZVxyXG4gICAgICAgICAgbGFzdE5hbWVcclxuICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59YDtcclxuXHJcbnZhciByZXRvdXJEdUdldCA9IFtdO1xyXG5cclxuLypsZXQgQXV0aFVzZXIgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgIHJldHVybiBnb29nbGUubG9naW4oZGF0YS51c2VybmFtZSwgZGF0YS5wYXNzd29yZCkudGhlbih0b2tlbiA9PiB7IHJldHVybiB0b2tlbiB9IClcclxuIH1cclxuIGxldCB1c2VyVG9rZW4gPSBhd2FpdCBBdXRoVXNlcihkYXRhKVxyXG4gY29uc29sZS5sb2codXNlclRva2VuKSovXHJcblxyXG4vKiBsZXQgY2FsbEdldCA9IGZ1bmN0aW9uKCl7XHJcbiAgIGNvbnNvbGUubG9nKFwiYXhpb3NcIikgXHJcbiB2YXIgcmV0b3VyRGVGaW47XHJcbiByZXRvdXJEdUdldCA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vXCIrS0VZX05HUk9LQkFDSytcIi5uZ3Jvay5pby9nZXRTdGF0ZU9yZGVyXCIsIHtoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcbiAudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgY29uc29sZS5sb2coXCJyZXN1bHQgZGFucyBsZSB0aGVuIGRhbnMgbGUgY2FsbFwiKVxyXG4gICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSlcclxuICAgcmV0b3VyRGVGaW4gPSByZXN1bHQuZGF0YVxyXG4gICByZXR1cm4gcmVzdWx0LmRhdGE7XHJcbiB9KVxyXG4gLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpXHJcbi8vIHJldG91ckR1R2V0ID0gYXhpb3MuZ2V0KFwiaHR0cHM6Ly9cIitLRVlfTkdST0tCQUNLK1wiLm5ncm9rLmlvL2dldFN0YXRlT3JkZXJcIiwge2hlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiAnYXBwbGljYXRpb24vanNvbid9fSkudmFsdWUuZGF0YVxyXG5jb25zb2xlLmxvZyhcInJlc3VsdCDDoCBsYSBmaW4gZHUgY2FsbFwiKVxyXG5jb25zb2xlLmxvZyhyZXRvdXJEZUZpbikgXHJcbnJldHVybiByZXRvdXJEZUZpblxyXG59Ki9cclxuXHJcbi8qYXN5bmMgZnVuY3Rpb24gY2FsbEdldCgpe1xyXG4gIGNvbnNvbGUubG9nKFwiYXhpb3NcIikgXHJcbiAgdmFyIHJldG91ckRlRmluO1xyXG4gIHJldG91ckR1R2V0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9cIitLRVlfTkdST0tCQUNLK1wiLm5ncm9rLmlvL2dldFN0YXRlT3JkZXJcIiwge2hlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuICAudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgIGNvbnNvbGUubG9nKFwicmVzdWx0IGRhbnMgbGUgdGhlbiBkYW5zIGxlIGNhbGxcIilcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKVxyXG4gICAgcmV0b3VyRGVGaW4gPSByZXN1bHQuZGF0YVxyXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gIH0pXHJcbiAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpXHJcbiAvLyByZXRvdXJEdUdldCA9IGF4aW9zLmdldChcImh0dHBzOi8vXCIrS0VZX05HUk9LQkFDSytcIi5uZ3Jvay5pby9nZXRTdGF0ZU9yZGVyXCIsIHtoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nfX0pLnZhbHVlLmRhdGFcclxuIGNvbnNvbGUubG9nKFwicmVzdWx0IMOgIGxhIGZpbiBkdSBjYWxsXCIpXHJcbiBjb25zb2xlLmxvZyhyZXRvdXJEZUZpbikgXHJcbiByZXR1cm4gcmV0b3VyRGVGaW5cclxufSovXHJcblxyXG5cclxuZnVuY3Rpb24gY2FsbEdldCgpIHtcclxuICBjb25zb2xlLmxvZyhcImF4aW9zXCIpXHJcbiAgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9cIiArIEtFWV9OR1JPS0JBQ0sgKyBcIi5uZ3Jvay5pby9nZXRTdGF0ZU9yZGVyXCIsIHsgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiAnYXBwbGljYXRpb24vanNvbicgfSB9KVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInJycnRcIilcclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpXHJcbiAgICAgIHJldHVybiByZXN1bHQuZGF0YVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0Q29sKG1hdHJpeCwgY29sKSB7XHJcbiAgdmFyIGNvbHVtbiA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWF0cml4Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb2x1bW4ucHVzaChtYXRyaXhbaV1bY29sXSk7XHJcbiAgfVxyXG4gIHJldHVybiBjb2x1bW47XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBEYXRhVGFibGVFeGFtcGxlKGRhdGEpIHtcclxuXHJcbiAgZnVuY3Rpb24gY2FsbEdldFN0YXRlT3JkZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImF4aW9zIGNhbCBnZXQgc3RhdGUgb3JkZXJcIilcclxuICAgIHJldHVybiBheGlvcy5nZXQoXCJodHRwczovL1wiICsgS0VZX05HUk9LQkFDSyArIFwiLm5ncm9rLmlvL2dldFN0YXRlT3JkZXJcIiwgeyBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBpdGVtcyA9IGRhdGEub3JkZXJzLmVkZ2VzO1xyXG4gIGNvbnNvbGUubG9nKFwiYWxwaGEgcGhhc2VcIilcclxuICBjYWxsR2V0KClcclxuICAvL2NvbnNvbGUubG9nKGNhbGxHZXQoKSlcclxuICAvL2NvbnNvbGUubG9nKCgpID0+IGNhbGxHZXQoKSlcclxuXHJcblxyXG4gIGZ1bmN0aW9uIGl0ZW1zVG9Ob2RlKHsgY3Vyc29yLCBub2RlIH0pIHtcclxuICAgIHJldHVybiB7IG5vZGUgfS5ub2RlXHJcbiAgfTtcclxuXHJcblxyXG4gIGZ1bmN0aW9uIG5vZGVUb1Jvd3Mobm9kZSwgYnVpbGRpbmdSYXcpIHtcclxuICAgIC8qY29uc29sZS5sb2coXCJub2RlXCIpXHJcbiAgICBjb25zb2xlLmxvZyhub2RlKVxyXG4gICAgY29uc29sZS5sb2coJ2RhbnMgbGEgbGFtYmRhIHByb2ZvbmRlJykqL1xyXG4gICAgT2JqZWN0LmVudHJpZXMobm9kZSkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuXHJcbiAgICAgIC8qY29uc29sZS5sb2coZWxlbWVudFswXSAhPT0gJ19fdHlwZW5hbWUnKVxyXG4gICAgICBjb25zb2xlLmxvZyhlbGVtZW50WzBdICE9ICdfX3R5cGVuYW1lJylcclxuICAgICAgY29uc29sZS5sb2coZWxlbWVudFswXSkqL1xyXG5cclxuICAgICAgaWYgKGVsZW1lbnRbMF0gIT09ICdfX3R5cGVuYW1lJykge1xyXG4gICAgICAgIC8qIGNvbnNvbGUubG9nKGJ1aWxkaW5nUmF3KVxyXG4gICAgICAgICBjb25zb2xlLmxvZyhbZWxlbWVudFsxXV0pXHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGJ1aWxkaW5nUmF3LmNvbmNhdChbZWxlbWVudFsxXV0pKVxyXG4gICAgICAgICBjb25zb2xlLmxvZygnX19fX19fX19fX19fJykqL1xyXG4gICAgICAgIGJ1aWxkaW5nUmF3ID0gKHR5cGVvZiBlbGVtZW50WzFdID09PSAnb2JqZWN0JyAmJiBlbGVtZW50WzFdICE9PSBudWxsKSA/IG5vZGVUb1Jvd3MoZWxlbWVudFsxXSwgYnVpbGRpbmdSYXcpIDogYnVpbGRpbmdSYXcuY29uY2F0KFtlbGVtZW50WzFdXSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGJ1aWxkaW5nUmF3O1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIC8qIGNvbnNvbGUubG9nKCdpdGVtcy5tYXAoaXRlbXNUb05vZGUpJylcclxuICAgY29uc29sZS5sb2coaXRlbXMubWFwKGl0ZW1zVG9Ob2RlKSkqL1xyXG4gIHZhciByb3dzID0gW107XHJcbiAgaXRlbXMubWFwKGl0ZW1zVG9Ob2RlKS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICAvKiBjb25zb2xlLmxvZygna2V5LHZhbHVlJylcclxuICAgICBjb25zb2xlLmxvZyhrZXkpXHJcbiAgICAgY29uc29sZS5sb2codmFsdWUpKi9cclxuICAgIHJvd3Nba2V5XSA9IG5vZGVUb1Jvd3ModmFsdWUsIFtdKVxyXG4gIH0pXHJcblxyXG4gIGZ1bmN0aW9uIGluaXRSb3dzKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKCdJbml0IHJvd3MnKVxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHJvd3MuZm9yRWFjaChmdW5jdGlvbiAocGFydCwgaW5kZXgpIHtcclxuXHJcbiAgICAgLyogdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICBzdG9yZS5zZXQoJ2V0YXQnK3RoaXMucHJvcHMuaWQsIHsgaWQgOiB0aGlzLnByb3BzLmlkLCBjaG9peCA6IGV2ZW50LnRhcmdldC52YWx1ZX0pXHJcbiAgICAgICB2YXIgb3JkZXJTdGF0ZSA9IChldmVudC50YXJnZXQudmFsdWUgPT0gXCJTZWxlY3TigKZcIikgPyBudWxsIDogZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgY29uc29sZS5sb2cob3JkZXJTdGF0ZSkqL1xyXG5cclxuICAgICAgcm93c1tpbmRleF0gPSBbPFNlbGVjdCBpZD17aW5kZXh9PjwvU2VsZWN0Pl0uY29uY2F0KHBhcnQpO1xyXG4gICAgICAgIC8vLnNldFN0YXRlKHt2YWx1ZSA6IGRhdGFbaW5kZXhdLm9yZGVyX3N0YXRlfSldXHJcbiAgICB9LCByb3dzKTtcclxuICBcclxuICAgIHZhciBjb2xvbmVEZXNFdGF0c0FTZXR0ZXIgPSBnZXRDb2wocm93cywgMClcclxuICAgIGNvbnNvbGUubG9nKFwiY29sb25uZSBkZXMgc2VsZWN0XCIpXHJcbiAgICBjb25zb2xlLmxvZyhjb2xvbmVEZXNFdGF0c0FTZXR0ZXIpXHJcbiAgICB2YXIgY29sb25lRGVzTmFtZXNJZHMgPSBnZXRDb2wocm93cywgMSlcclxuICBcclxuICB9XHJcblxyXG4gIHZhciByb3dzRnJvbURCID0gW107XHJcblxyXG4gIGNhbGxHZXRTdGF0ZU9yZGVyKCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNhbGwgZ2V0IHN0YXRlIG9yZGVyIGNhbGxiYWNrXCIpXHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSlcclxuICAgIGluaXRSb3dzKHJlc3VsdC5kYXRhKVxyXG4gIH0pXHJcblxyXG4gIC8qKiBTQU1JQSBERUJVVFxyXG4gIHJvd3MuZm9yRWFjaChmdW5jdGlvbiAocGFydCwgaW5kZXgpIHtcclxuICAgIC8vYXhpb3MuZ2V0RXRhdCBkdSBzZWxlY3Qgw6Agc2V0dGVyIChlbiBmb25jdGlvbiBkZSBsYSBwYWdlIGV0IGR1IHRyaSAobGUgdHJpIGRvaXQgZXRyZSBnbG9iYWwgZGFucyB1biBwcmVtaWVyIHRlbXBzIGV0IHB1aXMgb24gcG91cnJhIGZhaXJlIHVuIHRyaSBzdXIgbGVzIHNldWxzIMOpbMOpbWVudHMgZGUgbGEgcGFnZSBhdXNzaSkpXHJcbiAgICByb3dzW2luZGV4XSA9IFs8U2VsZWN0IGlkPXtpbmRleH0+PC9TZWxlY3Q+XS5jb25jYXQocGFydCk7XHJcbiAgfSwgcm93cyk7XHJcblxyXG4gIGNvbnNvbGUubG9nKCdyb3dzJyk7XHJcbiAgY29uc29sZS5sb2cocm93cyk7XHJcblxyXG4gIC8vb24gbmUgdGllbnQgcGFzIGVuY29yZSBjb21wdGUgZGUgbGEgcGFnaW5hdGlvblxyXG4gIHZhciBjb2xvbmVEZXNFdGF0c0FTZXR0ZXIgPSBnZXRDb2wocm93cywgMClcclxuICBjb25zb2xlLmxvZygndmlkZT8nKVxyXG4gIGNvbnNvbGUubG9nKGNvbG9uZURlc0V0YXRzQVNldHRlcilcclxuICB2YXIgY29sb25lRGVzTmFtZXNJZHMgPSBnZXRDb2wocm93cywgMSlcclxuXHJcbiAgdmFyIHJvd3NGcm9tREIgPSBbXTtcclxuICBjb25zb2xlLmxvZyhyb3dzRnJvbURCKVxyXG4gIGNvbnNvbGUubG9nKFwiYmV0YSBwaGFzZVwiKVxyXG4gIFNBTUlBIEZJTiAqKi9cclxuXHJcbiAgLypsZXQgQXV0aFVzZXIgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICByZXR1cm4gZ29vZ2xlLmxvZ2luKGRhdGEudXNlcm5hbWUsIGRhdGEucGFzc3dvcmQpLnRoZW4odG9rZW4gPT4geyByZXR1cm4gdG9rZW4gfSApXHJcbiAgfVxyXG4gIGxldCB1c2VyVG9rZW4gPSBhd2FpdCBBdXRoVXNlcihkYXRhKVxyXG4gIGNvbnNvbGUubG9nKHVzZXJUb2tlbikqL1xyXG5cclxuXHJcbiAgY29uc29sZS5sb2coY2FsbEdldCgpKVxyXG4gIHZhciByZXRvdXJEdUNhbGxHZXQ7XHJcbiAgLypjb25zb2xlLmxvZyhjYWxsR2V0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgIGNvbnNvbGUubG9nKFwibGUgcmVzdWx0IGRhbnMgbGUgdGhlblwiKVxyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KSAvLyBcIlNvbWUgVXNlciB0b2tlblwiXHJcbiAgICByZXRvdXJEdUNhbGxHZXQgPSByZXN1bHQ7XHJcbiAgICBjb25zb2xlLmxvZygncmVzb2xldmVlZScpXHJcbiAgICAvL3Jlc29sdmUocmVzdWx0KVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG4gfSkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcclxuICBjb25zb2xlLmxvZyhcImxlIHJlc3VsdCBkYW5zIGxlIHRoZW5cIilcclxuICBjb25zb2xlLmxvZyhyZXN1bHQpIC8vIFwiU29tZSBVc2VyIHRva2VuXCJcclxuICByZXRvdXJEdUNhbGxHZXQgPSByZXN1bHQ7XHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59KSkqL1xyXG4gIGNvbnNvbGUubG9nKFwicmV0b3VyRHVDYWxsR2V0XCIpXHJcbiAgY29uc29sZS5sb2cocmV0b3VyRHVDYWxsR2V0KVxyXG4gIC8qcmV0b3VyRHVDYWxsR2V0LmZvckVhY2goKHZhbHVlLCBrZXkpPT4ge1xyXG4gICAgY29uc29sZS5sb2codmFsdWUpXHJcblxyXG4gICAgcm93c0Zyb21EQltrZXldID0gbm9kZVRvUm93cyh2YWx1ZSxbXSkgXHJcbiAgIH0pKi9cclxuICBjb25zb2xlLmxvZyhcInJvd3NGcm9tREJcIilcclxuICBjb25zb2xlLmxvZyhyb3dzRnJvbURCKVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlIGZ1bGxXaWR0aD1cInRydWVcIj5cclxuICAgICAgPENhcmQ+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjYWxsR2V0KCl9PkV4YW1wbGUgYnV0dG9uPC9CdXR0b24+XHJcbiAgICAgICAgey8vcmV0b3VyRHVHZXRcclxuICAgICAgICB9XHJcbiAgICAgICAgPERhdGFUYWJsZVxyXG4gICAgICAgICAgY29sdW1uQ29udGVudFR5cGVzPXtbXHJcbiAgICAgICAgICAgICd0ZXh0JyxcclxuICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgICAgICd0ZXh0JyxcclxuICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgICAgICd0ZXh0JyxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgICBoZWFkaW5ncz17W1xyXG4gICAgICAgICAgICAnaWQnLFxyXG4gICAgICAgICAgICAnbmFtZScsXHJcbiAgICAgICAgICAgICdlbWFpbCcsXHJcbiAgICAgICAgICAgICdqY3AnLFxyXG4gICAgICAgICAgICAnamNwJyxcclxuICAgICAgICAgICAgJ2pjcCcsXHJcbiAgICAgICAgICAgICdqY3AnLFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICAgIC8vaWwgZmF1dCByw6ljdXDDqXJlciBsZXMgb3JkZXIgc3RhdGVzIGRlIGxhIGRiIGV0IHBldXQgZXRyZSBsZXMgbWV0dHJlIGVuIGNhY2hlIGNhIHNlcmFpdCBjb29sXHJcbiAgICAgICAgICByb3dzPXtyb3dzfVxyXG4gICAgICAgIC8vJzxpbWcgc3JjPVwiJytkYXRhKydcIj4nXHJcblxyXG4gICAgICAgIC8qc291cmNlPXtcclxuICAgICAgICAgIGl0ZW0ubm9kZS5saW5lSXRlbXMuZWRnZXNbMF1cclxuICAgICAgICAgICAgPyBpdGVtLm5vZGUubGluZUl0ZW1zLmVkZ2VzWzBdLm5vZGUuaW1hZ2Uub3JpZ2luYWxTcmNcclxuICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgIH0qL1xyXG4gICAgICAgIC8vdG90YWxzPXtbJycsICcnLCAnJywgMjU1LCAnJDE1NSw4MzAuMDAnXX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L1BhZ2U+XHJcblxyXG5cclxuICApO1xyXG59XHJcblxyXG5jbGFzcyBSZXNvdXJjZUxpc3RXaXRoT3JkZXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFF1ZXJ5IHF1ZXJ5PXtHRVRfT1JERVJTX0JZX0lEfT5cclxuICAgICAgICB7KHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmfigKY8L2Rpdj47XHJcbiAgICAgICAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YS5vcmRlcnMuZWRnZXMpO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhLm9yZGVycy5lZGdlc1swXS5ub2RlLmxpbmVJdGVtcy5lZGdlc1swXS5ub2RlLmltYWdlLm9yaWdpbmFsU3JjKTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBEYXRhVGFibGVFeGFtcGxlKGRhdGEpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH19XHJcbiAgICAgIDwvUXVlcnk+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuLyo8Q2FyZD5cclxuICA8cD5MZXMgNTAgZGVybmnDqHJlcyBjb21tYW5kZXM8L3A+XHJcbiAgPFJlc291cmNlTGlzdFxyXG4gICAgc2hvd0hlYWRlclxyXG4gICAgcmVzb3VyY2VOYW1lPXt7IHNpbmd1bGFyOiAnT3JkZXInLCBwbHVyYWw6ICdPcmRlcnMnIH19XHJcbiAgICBpdGVtcz17ZGF0YS5vcmRlcnMuZWRnZXN9XHJcbiAgICByZW5kZXJJdGVtPXtpdGVtID0+IHtcclxuICAgICAgY29uc3Qgb3JkZXJOYW1lID0gaXRlbS5ub2RlLm5hbWVcclxuICAgICAgY29uc3QgbWVkaWEgPSAoXHJcbiAgICAgICAgPFRodW1ibmFpbFxyXG4gICAgICAgICAgc291cmNlPXtcclxuICAgICAgICAgICAgaXRlbS5ub2RlLmxpbmVJdGVtcy5lZGdlc1swXVxyXG4gICAgICAgICAgICAgID8gaXRlbS5ub2RlLmxpbmVJdGVtcy5lZGdlc1swXS5ub2RlLmltYWdlLm9yaWdpbmFsU3JjXHJcbiAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHByaWNlID0gaXRlbS5ub2RlLm5ldFBheW1lbnRTZXQuc2hvcE1vbmV5LmFtb3VudDtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICBcclxuICAgICAgICA8UmVzb3VyY2VMaXN0Lkl0ZW1cclxuICAgICAgICBtZWRpYSA9IHtvcmRlck5hbWV9XHJcbiAgICAgICAgIC8vIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgbWVkaWE9e21lZGlhfVxyXG4gICAgICAgICAgLy9hY2Nlc3NpYmlsaXR5TGFiZWw9e2BWaWV3IGRldGFpbHMgZm9yICR7aXRlbS50aXRsZX1gfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAvL3N0b3JlLnNldCgnaXRlbScsIGl0ZW0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3RvcmUuc2V0JylcclxuICAgICAgICAgICAgLy9yZWRpcmVjdFRvUHJvZHVjdCgpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U3RhY2s+XHJcbiAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICA8cD57b3JkZXJOYW1lfTwvcD5cclxuICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICA8U3RhY2suSXRlbSBmaWxsPlxyXG4gICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5ub2RlLmlkfVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICA8cD4ke3ByaWNlfTwvcD5cclxuICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICA8cD5FeHBpcmVzIG9uIFIgPC9wPlxyXG4gICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgIDwvUmVzb3VyY2VMaXN0Lkl0ZW0+XHJcbiAgICAgICk7XHJcbiAgICB9fVxyXG4gIC8+XHJcbjwvQ2FyZD5cclxuKTtcclxufX1cclxuPC9RdWVyeT5cclxuKTtcclxufVxyXG59Ki9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc291cmNlTGlzdFdpdGhPcmRlcnM7Il0sInNvdXJjZVJvb3QiOiIifQ==