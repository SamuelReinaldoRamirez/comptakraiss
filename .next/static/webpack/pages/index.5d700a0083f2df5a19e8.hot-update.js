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
  var data = Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\nquery {\n  orders(first: 50) {\n    edges {\n      cursor\n      node {\n        name\n        customer{\n          firstName\n          lastName\n          email\n        }\n        createdAt\n        fulfillments{\n          id\n          name\n          trackingInfo{\n            company\n            number\n          }\n          estimatedDeliveryAt\n          deliveredAt\n          displayStatus\n          status\n        }\n        shippingLine{\n          carrierIdentifier\n        }\n      }\n    }\n  }\n}"]);

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
  axios__WEBPACK_IMPORTED_MODULE_15___default.a.get("https://" + "7f71e23d489f" + ".ngrok.io/getStateOrder", {
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
    console.log("dans getOrders axios call get state order");
    console.log("https://" + "7f71e23d489f" + ".ngrok.io/getStateOrder", {
      headers: {
        "Content-Type": 'application/json'
      }
    });
    return axios__WEBPACK_IMPORTED_MODULE_15___default.a.get("https://" + "7f71e23d489f" + ".ngrok.io/getStateOrder", {
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
      //il faut setter valuedeDbState issue du state plutot que de créer une nouvelle prop
      console.log("PART");
      console.log(part[1] == null);
      var nomPrenomCustomer = part[1] == null ? null : part[1] + part[2];
      part[1] = nomPrenomCustomer;
      part.splice(3, 0, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_selectdrop__WEBPACK_IMPORTED_MODULE_14__["default"], {
        id: index,
        valueDeDB: data[index].order_state == null ? 9949 : data[index].order_state
      }));
      rows[index] = part; //rows[index] = [<Select id={index} valueDeDB={ data[index].order_state == null ? 9949 : data[index].order_state}></Select>].concat(part);
      //.setState({value : data[index].order_state})]
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
  console.log("ROWSS");
  console.log(rows);
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
        headings: ['id', 'nom et prénom', 'date de la commande', 'état de la commande', 'transporteur', 'numéro de suivi', 'date prévue de livraison'] //il faut récupérer les order states de la db et peut etre les mettre en cache ca serait cool
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
          console.log("DATA");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRPcmRlcnMuanMiXSwibmFtZXMiOlsiR0VUX09SREVSU19CWV9JRCIsImdxbCIsInJldG91ckR1R2V0IiwiY2FsbEdldCIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsImdldCIsIktFWV9OR1JPS0JBQ0siLCJoZWFkZXJzIiwidGhlbiIsInJlc3VsdCIsImRhdGEiLCJnZXRDb2wiLCJtYXRyaXgiLCJjb2wiLCJjb2x1bW4iLCJpIiwibGVuZ3RoIiwicHVzaCIsIkRhdGFUYWJsZUV4YW1wbGUiLCJjYWxsR2V0U3RhdGVPcmRlciIsIml0ZW1zIiwib3JkZXJzIiwiZWRnZXMiLCJpdGVtc1RvTm9kZSIsImN1cnNvciIsIm5vZGUiLCJub2RlVG9Sb3dzIiwiYnVpbGRpbmdSYXciLCJPYmplY3QiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpbmRleCIsImNvbmNhdCIsInJvd3MiLCJtYXAiLCJ2YWx1ZSIsImtleSIsImluaXRSb3dzIiwicGFydCIsIm5vbVByZW5vbUN1c3RvbWVyIiwic3BsaWNlIiwib3JkZXJfc3RhdGUiLCJjb2xvbmVEZXNFdGF0c0FTZXR0ZXIiLCJjb2xvbmVEZXNOYW1lc0lkcyIsInJvd3NGcm9tREIiLCJyZXRvdXJEdUNhbGxHZXQiLCJSZXNvdXJjZUxpc3RXaXRoT3JkZXJzIiwibG9hZGluZyIsImVycm9yIiwibWVzc2FnZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxnQkFBZ0IsR0FBR0Msa0RBQUgsbUJBQXRCO0FBaUNBLElBQUlDLFdBQVcsR0FBRyxFQUFsQjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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LFFBREY7QUFnQkQ7Ozs7RUFuQmtDeUMsNkNBQUssQ0FBQ0MsUztBQXNCM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVlTCxxRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZDcwMGEwMDgzZjJkZjVhMTllOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAncmVhY3QtYXBvbGxvJztcclxuaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIFBhZ2UsXHJcbiAgRGF0YVRhYmxlLFxyXG4gIFBhZ2luYXRpb24sXHJcbiAgQnV0dG9uXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zJztcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3QnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vc2VsZWN0ZHJvcCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuXHJcbmNvbnN0IEdFVF9PUkRFUlNfQllfSUQgPSBncWxgXHJcbnF1ZXJ5IHtcclxuICBvcmRlcnMoZmlyc3Q6IDUwKSB7XHJcbiAgICBlZGdlcyB7XHJcbiAgICAgIGN1cnNvclxyXG4gICAgICBub2RlIHtcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgY3VzdG9tZXJ7XHJcbiAgICAgICAgICBmaXJzdE5hbWVcclxuICAgICAgICAgIGxhc3ROYW1lXHJcbiAgICAgICAgICBlbWFpbFxyXG4gICAgICAgIH1cclxuICAgICAgICBjcmVhdGVkQXRcclxuICAgICAgICBmdWxmaWxsbWVudHN7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgdHJhY2tpbmdJbmZve1xyXG4gICAgICAgICAgICBjb21wYW55XHJcbiAgICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZXN0aW1hdGVkRGVsaXZlcnlBdFxyXG4gICAgICAgICAgZGVsaXZlcmVkQXRcclxuICAgICAgICAgIGRpc3BsYXlTdGF0dXNcclxuICAgICAgICAgIHN0YXR1c1xyXG4gICAgICAgIH1cclxuICAgICAgICBzaGlwcGluZ0xpbmV7XHJcbiAgICAgICAgICBjYXJyaWVySWRlbnRpZmllclxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufWA7XHJcblxyXG52YXIgcmV0b3VyRHVHZXQgPSBbXTtcclxuXHJcbi8qbGV0IEF1dGhVc2VyID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICByZXR1cm4gZ29vZ2xlLmxvZ2luKGRhdGEudXNlcm5hbWUsIGRhdGEucGFzc3dvcmQpLnRoZW4odG9rZW4gPT4geyByZXR1cm4gdG9rZW4gfSApXHJcbiB9XHJcbiBsZXQgdXNlclRva2VuID0gYXdhaXQgQXV0aFVzZXIoZGF0YSlcclxuIGNvbnNvbGUubG9nKHVzZXJUb2tlbikqL1xyXG5cclxuLyogbGV0IGNhbGxHZXQgPSBmdW5jdGlvbigpe1xyXG4gICBjb25zb2xlLmxvZyhcImF4aW9zXCIpIFxyXG4gdmFyIHJldG91ckRlRmluO1xyXG4gcmV0b3VyRHVHZXQgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL1wiK0tFWV9OR1JPS0JBQ0srXCIubmdyb2suaW8vZ2V0U3RhdGVPcmRlclwiLCB7aGVhZGVyczoge1wiQ29udGVudC1UeXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG4gLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgIGNvbnNvbGUubG9nKFwicmVzdWx0IGRhbnMgbGUgdGhlbiBkYW5zIGxlIGNhbGxcIilcclxuICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpXHJcbiAgIHJldG91ckRlRmluID0gcmVzdWx0LmRhdGFcclxuICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gfSlcclxuIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKVxyXG4vLyByZXRvdXJEdUdldCA9IGF4aW9zLmdldChcImh0dHBzOi8vXCIrS0VZX05HUk9LQkFDSytcIi5uZ3Jvay5pby9nZXRTdGF0ZU9yZGVyXCIsIHtoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nfX0pLnZhbHVlLmRhdGFcclxuY29uc29sZS5sb2coXCJyZXN1bHQgw6AgbGEgZmluIGR1IGNhbGxcIilcclxuY29uc29sZS5sb2cocmV0b3VyRGVGaW4pIFxyXG5yZXR1cm4gcmV0b3VyRGVGaW5cclxufSovXHJcblxyXG4vKmFzeW5jIGZ1bmN0aW9uIGNhbGxHZXQoKXtcclxuICBjb25zb2xlLmxvZyhcImF4aW9zXCIpIFxyXG4gIHZhciByZXRvdXJEZUZpbjtcclxuICByZXRvdXJEdUdldCA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vXCIrS0VZX05HUk9LQkFDSytcIi5uZ3Jvay5pby9nZXRTdGF0ZU9yZGVyXCIsIHtoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBkYW5zIGxlIHRoZW4gZGFucyBsZSBjYWxsXCIpXHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSlcclxuICAgIHJldG91ckRlRmluID0gcmVzdWx0LmRhdGFcclxuICAgIHJldHVybiByZXN1bHQuZGF0YTtcclxuICB9KVxyXG4gIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKVxyXG4gLy8gcmV0b3VyRHVHZXQgPSBheGlvcy5nZXQoXCJodHRwczovL1wiK0tFWV9OR1JPS0JBQ0srXCIubmdyb2suaW8vZ2V0U3RhdGVPcmRlclwiLCB7aGVhZGVyczoge1wiQ29udGVudC1UeXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJ319KS52YWx1ZS5kYXRhXHJcbiBjb25zb2xlLmxvZyhcInJlc3VsdCDDoCBsYSBmaW4gZHUgY2FsbFwiKVxyXG4gY29uc29sZS5sb2cocmV0b3VyRGVGaW4pIFxyXG4gcmV0dXJuIHJldG91ckRlRmluXHJcbn0qL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNhbGxHZXQoKSB7XHJcbiAgY29uc29sZS5sb2coXCJheGlvc1wiKVxyXG4gIGF4aW9zLmdldChcImh0dHBzOi8vXCIgKyBLRVlfTkdST0tCQUNLICsgXCIubmdyb2suaW8vZ2V0U3RhdGVPcmRlclwiLCB7IGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nIH0gfSlcclxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJycnJ0XCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKVxyXG4gICAgICByZXR1cm4gcmVzdWx0LmRhdGFcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldENvbChtYXRyaXgsIGNvbCkge1xyXG4gIHZhciBjb2x1bW4gPSBbXTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdHJpeC5sZW5ndGg7IGkrKykge1xyXG4gICAgY29sdW1uLnB1c2gobWF0cml4W2ldW2NvbF0pO1xyXG4gIH1cclxuICByZXR1cm4gY29sdW1uO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gRGF0YVRhYmxlRXhhbXBsZShkYXRhKSB7XHJcblxyXG4gIGZ1bmN0aW9uIGNhbGxHZXRTdGF0ZU9yZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJkYW5zIGdldE9yZGVycyBheGlvcyBjYWxsIGdldCBzdGF0ZSBvcmRlclwiKVxyXG4gICAgY29uc29sZS5sb2coXCJodHRwczovL1wiICsgS0VZX05HUk9LQkFDSyArIFwiLm5ncm9rLmlvL2dldFN0YXRlT3JkZXJcIiwgeyBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH0pXHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KFwiaHR0cHM6Ly9cIiArIEtFWV9OR1JPS0JBQ0sgKyBcIi5uZ3Jvay5pby9nZXRTdGF0ZU9yZGVyXCIsIHsgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiAnYXBwbGljYXRpb24vanNvbicgfSB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaXRlbXMgPSBkYXRhLm9yZGVycy5lZGdlcztcclxuICBjb25zb2xlLmxvZyhcImFscGhhIHBoYXNlXCIpXHJcbiAgY2FsbEdldCgpXHJcbiAgLy9jb25zb2xlLmxvZyhjYWxsR2V0KCkpXHJcbiAgLy9jb25zb2xlLmxvZygoKSA9PiBjYWxsR2V0KCkpXHJcblxyXG5cclxuICBmdW5jdGlvbiBpdGVtc1RvTm9kZSh7IGN1cnNvciwgbm9kZSB9KSB7XHJcbiAgICByZXR1cm4geyBub2RlIH0ubm9kZVxyXG4gIH07XHJcblxyXG5cclxuICBmdW5jdGlvbiBub2RlVG9Sb3dzKG5vZGUsIGJ1aWxkaW5nUmF3KSB7XHJcbiAgICAvKmNvbnNvbGUubG9nKFwibm9kZVwiKVxyXG4gICAgY29uc29sZS5sb2cobm9kZSlcclxuICAgIGNvbnNvbGUubG9nKCdkYW5zIGxhIGxhbWJkYSBwcm9mb25kZScpKi9cclxuICAgIE9iamVjdC5lbnRyaWVzKG5vZGUpLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAvKmNvbnNvbGUubG9nKGVsZW1lbnRbMF0gIT09ICdfX3R5cGVuYW1lJylcclxuICAgICAgY29uc29sZS5sb2coZWxlbWVudFswXSAhPSAnX190eXBlbmFtZScpXHJcbiAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnRbMF0pKi9cclxuXHJcbiAgICAgIGlmIChlbGVtZW50WzBdICE9PSAnX190eXBlbmFtZScpIHtcclxuICAgICAgICAvKiBjb25zb2xlLmxvZyhidWlsZGluZ1JhdylcclxuICAgICAgICAgY29uc29sZS5sb2coW2VsZW1lbnRbMV1dKVxyXG4gICAgICAgICBjb25zb2xlLmxvZyhidWlsZGluZ1Jhdy5jb25jYXQoW2VsZW1lbnRbMV1dKSlcclxuICAgICAgICAgY29uc29sZS5sb2coJ19fX19fX19fX19fXycpKi9cclxuICAgICAgICBidWlsZGluZ1JhdyA9ICh0eXBlb2YgZWxlbWVudFsxXSA9PT0gJ29iamVjdCcgJiYgZWxlbWVudFsxXSAhPT0gbnVsbCkgPyBub2RlVG9Sb3dzKGVsZW1lbnRbMV0sIGJ1aWxkaW5nUmF3KSA6IGJ1aWxkaW5nUmF3LmNvbmNhdChbZWxlbWVudFsxXV0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBidWlsZGluZ1JhdztcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuICAvKiBjb25zb2xlLmxvZygnaXRlbXMubWFwKGl0ZW1zVG9Ob2RlKScpXHJcbiAgIGNvbnNvbGUubG9nKGl0ZW1zLm1hcChpdGVtc1RvTm9kZSkpKi9cclxuICB2YXIgcm93cyA9IFtdO1xyXG4gIGl0ZW1zLm1hcChpdGVtc1RvTm9kZSkuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xyXG4gICAgLyogY29uc29sZS5sb2coJ2tleSx2YWx1ZScpXHJcbiAgICAgY29uc29sZS5sb2coa2V5KVxyXG4gICAgIGNvbnNvbGUubG9nKHZhbHVlKSovXHJcbiAgICByb3dzW2tleV0gPSBub2RlVG9Sb3dzKHZhbHVlLCBbXSlcclxuICB9KVxyXG5cclxuICBmdW5jdGlvbiBpbml0Um93cyhkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZygnSW5pdCByb3dzJylcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICByb3dzLmZvckVhY2goZnVuY3Rpb24gKHBhcnQsIGluZGV4KSB7XHJcblxyXG4gICAgIC8qIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgc3RvcmUuc2V0KCdldGF0Jyt0aGlzLnByb3BzLmlkLCB7IGlkIDogdGhpcy5wcm9wcy5pZCwgY2hvaXggOiBldmVudC50YXJnZXQudmFsdWV9KVxyXG4gICAgICAgdmFyIG9yZGVyU3RhdGUgPSAoZXZlbnQudGFyZ2V0LnZhbHVlID09IFwiU2VsZWN04oCmXCIpID8gbnVsbCA6IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgIGNvbnNvbGUubG9nKG9yZGVyU3RhdGUpKi9cclxuXHJcbiAgICAgICAvL2lsIGZhdXQgc2V0dGVyIHZhbHVlZGVEYlN0YXRlIGlzc3VlIGR1IHN0YXRlIHBsdXRvdCBxdWUgZGUgY3LDqWVyIHVuZSBub3V2ZWxsZSBwcm9wXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUEFSVFwiKSBcclxuICAgICAgY29uc29sZS5sb2cocGFydFsxXSA9PSBudWxsKVxyXG4gICAgICB2YXIgbm9tUHJlbm9tQ3VzdG9tZXIgPSBwYXJ0WzFdID09IG51bGwgPyBudWxsIDogcGFydFsxXSArIHBhcnRbMl1cclxuICAgICAgcGFydFsxXSA9IG5vbVByZW5vbUN1c3RvbWVyO1xyXG4gICAgICBwYXJ0LnNwbGljZSgzLCAwLCA8U2VsZWN0IGlkPXtpbmRleH0gdmFsdWVEZURCPXsgZGF0YVtpbmRleF0ub3JkZXJfc3RhdGUgPT0gbnVsbCA/IDk5NDkgOiBkYXRhW2luZGV4XS5vcmRlcl9zdGF0ZX0+PC9TZWxlY3Q+KTtcclxuICAgICAgcm93c1tpbmRleF0gPSBwYXJ0O1xyXG5cclxuICAgICAgLy9yb3dzW2luZGV4XSA9IFs8U2VsZWN0IGlkPXtpbmRleH0gdmFsdWVEZURCPXsgZGF0YVtpbmRleF0ub3JkZXJfc3RhdGUgPT0gbnVsbCA/IDk5NDkgOiBkYXRhW2luZGV4XS5vcmRlcl9zdGF0ZX0+PC9TZWxlY3Q+XS5jb25jYXQocGFydCk7XHJcbiAgICAgICAgLy8uc2V0U3RhdGUoe3ZhbHVlIDogZGF0YVtpbmRleF0ub3JkZXJfc3RhdGV9KV1cclxuICAgIH0sIHJvd3MpO1xyXG4gIFxyXG4gICAgdmFyIGNvbG9uZURlc0V0YXRzQVNldHRlciA9IGdldENvbChyb3dzLCAwKVxyXG4gICAgY29uc29sZS5sb2coXCJjb2xvbm5lIGRlcyBzZWxlY3RcIilcclxuICAgIGNvbnNvbGUubG9nKGNvbG9uZURlc0V0YXRzQVNldHRlcilcclxuICAgIHZhciBjb2xvbmVEZXNOYW1lc0lkcyA9IGdldENvbChyb3dzLCAxKVxyXG4gIFxyXG4gIH1cclxuXHJcbiAgdmFyIHJvd3NGcm9tREIgPSBbXTtcclxuXHJcbiAgY2FsbEdldFN0YXRlT3JkZXIoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2FsbCBnZXQgc3RhdGUgb3JkZXIgY2FsbGJhY2tcIilcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKVxyXG4gICAgaW5pdFJvd3MocmVzdWx0LmRhdGEpXHJcbiAgfSlcclxuXHJcbiAgLyoqIFNBTUlBIERFQlVUXHJcbiAgcm93cy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJ0LCBpbmRleCkge1xyXG4gICAgLy9heGlvcy5nZXRFdGF0IGR1IHNlbGVjdCDDoCBzZXR0ZXIgKGVuIGZvbmN0aW9uIGRlIGxhIHBhZ2UgZXQgZHUgdHJpIChsZSB0cmkgZG9pdCBldHJlIGdsb2JhbCBkYW5zIHVuIHByZW1pZXIgdGVtcHMgZXQgcHVpcyBvbiBwb3VycmEgZmFpcmUgdW4gdHJpIHN1ciBsZXMgc2V1bHMgw6lsw6ltZW50cyBkZSBsYSBwYWdlIGF1c3NpKSlcclxuICAgIHJvd3NbaW5kZXhdID0gWzxTZWxlY3QgaWQ9e2luZGV4fT48L1NlbGVjdD5dLmNvbmNhdChwYXJ0KTtcclxuICB9LCByb3dzKTtcclxuXHJcbiAgY29uc29sZS5sb2coJ3Jvd3MnKTtcclxuICBjb25zb2xlLmxvZyhyb3dzKTtcclxuXHJcbiAgLy9vbiBuZSB0aWVudCBwYXMgZW5jb3JlIGNvbXB0ZSBkZSBsYSBwYWdpbmF0aW9uXHJcbiAgdmFyIGNvbG9uZURlc0V0YXRzQVNldHRlciA9IGdldENvbChyb3dzLCAwKVxyXG4gIGNvbnNvbGUubG9nKCd2aWRlPycpXHJcbiAgY29uc29sZS5sb2coY29sb25lRGVzRXRhdHNBU2V0dGVyKVxyXG4gIHZhciBjb2xvbmVEZXNOYW1lc0lkcyA9IGdldENvbChyb3dzLCAxKVxyXG5cclxuICB2YXIgcm93c0Zyb21EQiA9IFtdO1xyXG4gIGNvbnNvbGUubG9nKHJvd3NGcm9tREIpXHJcbiAgY29uc29sZS5sb2coXCJiZXRhIHBoYXNlXCIpXHJcbiAgU0FNSUEgRklOICoqL1xyXG5cclxuICAvKmxldCBBdXRoVXNlciA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgIHJldHVybiBnb29nbGUubG9naW4oZGF0YS51c2VybmFtZSwgZGF0YS5wYXNzd29yZCkudGhlbih0b2tlbiA9PiB7IHJldHVybiB0b2tlbiB9IClcclxuICB9XHJcbiAgbGV0IHVzZXJUb2tlbiA9IGF3YWl0IEF1dGhVc2VyKGRhdGEpXHJcbiAgY29uc29sZS5sb2codXNlclRva2VuKSovXHJcblxyXG5cclxuICBjb25zb2xlLmxvZyhjYWxsR2V0KCkpXHJcbiAgdmFyIHJldG91ckR1Q2FsbEdldDtcclxuICAvKmNvbnNvbGUubG9nKGNhbGxHZXQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgY29uc29sZS5sb2coXCJsZSByZXN1bHQgZGFucyBsZSB0aGVuXCIpXHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpIC8vIFwiU29tZSBVc2VyIHRva2VuXCJcclxuICAgIHJldG91ckR1Q2FsbEdldCA9IHJlc3VsdDtcclxuICAgIGNvbnNvbGUubG9nKCdyZXNvbGV2ZWVlJylcclxuICAgIC8vcmVzb2x2ZShyZXN1bHQpXHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbiB9KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gIGNvbnNvbGUubG9nKFwibGUgcmVzdWx0IGRhbnMgbGUgdGhlblwiKVxyXG4gIGNvbnNvbGUubG9nKHJlc3VsdCkgLy8gXCJTb21lIFVzZXIgdG9rZW5cIlxyXG4gIHJldG91ckR1Q2FsbEdldCA9IHJlc3VsdDtcclxuICByZXR1cm4gcmVzdWx0XHJcbn0pKSovXHJcbiAgY29uc29sZS5sb2coXCJyZXRvdXJEdUNhbGxHZXRcIilcclxuICBjb25zb2xlLmxvZyhyZXRvdXJEdUNhbGxHZXQpXHJcbiAgLypyZXRvdXJEdUNhbGxHZXQuZm9yRWFjaCgodmFsdWUsIGtleSk9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSlcclxuXHJcbiAgICByb3dzRnJvbURCW2tleV0gPSBub2RlVG9Sb3dzKHZhbHVlLFtdKSBcclxuICAgfSkqL1xyXG4gIGNvbnNvbGUubG9nKFwicm93c0Zyb21EQlwiKVxyXG4gIGNvbnNvbGUubG9nKHJvd3NGcm9tREIpXHJcblxyXG5cclxuICBjb25zb2xlLmxvZyhcIlJPV1NTXCIpXHJcbiAgY29uc29sZS5sb2cocm93cylcclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2UgZnVsbFdpZHRoPVwidHJ1ZVwiPlxyXG4gICAgICA8Q2FyZD5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGNhbGxHZXQoKX0+RXhhbXBsZSBidXR0b248L0J1dHRvbj5cclxuICAgICAgICB7Ly9yZXRvdXJEdUdldFxyXG4gICAgICAgIH1cclxuICAgICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgICBjb2x1bW5Db250ZW50VHlwZXM9e1tcclxuICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgICAgICd0ZXh0JyxcclxuICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgICAgICd0ZXh0JyxcclxuICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICAgIGhlYWRpbmdzPXtbXHJcbiAgICAgICAgICAgICdpZCcsXHJcbiAgICAgICAgICAgICdub20gZXQgcHLDqW5vbScsXHJcbiAgICAgICAgICAgICdkYXRlIGRlIGxhIGNvbW1hbmRlJyxcclxuICAgICAgICAgICAgJ8OpdGF0IGRlIGxhIGNvbW1hbmRlJyxcclxuICAgICAgICAgICAgJ3RyYW5zcG9ydGV1cicsXHJcbiAgICAgICAgICAgICdudW3DqXJvIGRlIHN1aXZpJyxcclxuICAgICAgICAgICAgJ2RhdGUgcHLDqXZ1ZSBkZSBsaXZyYWlzb24nLFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICAgIC8vaWwgZmF1dCByw6ljdXDDqXJlciBsZXMgb3JkZXIgc3RhdGVzIGRlIGxhIGRiIGV0IHBldXQgZXRyZSBsZXMgbWV0dHJlIGVuIGNhY2hlIGNhIHNlcmFpdCBjb29sXHJcbiAgICAgICAgICByb3dzPXtyb3dzfVxyXG4gICAgICAgIC8vJzxpbWcgc3JjPVwiJytkYXRhKydcIj4nXHJcblxyXG4gICAgICAgIC8qc291cmNlPXtcclxuICAgICAgICAgIGl0ZW0ubm9kZS5saW5lSXRlbXMuZWRnZXNbMF1cclxuICAgICAgICAgICAgPyBpdGVtLm5vZGUubGluZUl0ZW1zLmVkZ2VzWzBdLm5vZGUuaW1hZ2Uub3JpZ2luYWxTcmNcclxuICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgIH0qL1xyXG4gICAgICAgIC8vdG90YWxzPXtbJycsICcnLCAnJywgMjU1LCAnJDE1NSw4MzAuMDAnXX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L1BhZ2U+XHJcblxyXG5cclxuICApO1xyXG59XHJcblxyXG5jbGFzcyBSZXNvdXJjZUxpc3RXaXRoT3JkZXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFF1ZXJ5IHF1ZXJ5PXtHRVRfT1JERVJTX0JZX0lEfT5cclxuICAgICAgICB7KHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJEQVRBXCIpXHJcbiAgICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZ+KApjwvZGl2PjtcclxuICAgICAgICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLm9yZGVycy5lZGdlcyk7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEub3JkZXJzLmVkZ2VzWzBdLm5vZGUubGluZUl0ZW1zLmVkZ2VzWzBdLm5vZGUuaW1hZ2Uub3JpZ2luYWxTcmMpO1xyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIERhdGFUYWJsZUV4YW1wbGUoZGF0YSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPC9RdWVyeT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vKjxDYXJkPlxyXG4gIDxwPkxlcyA1MCBkZXJuacOocmVzIGNvbW1hbmRlczwvcD5cclxuICA8UmVzb3VyY2VMaXN0XHJcbiAgICBzaG93SGVhZGVyXHJcbiAgICByZXNvdXJjZU5hbWU9e3sgc2luZ3VsYXI6ICdPcmRlcicsIHBsdXJhbDogJ09yZGVycycgfX1cclxuICAgIGl0ZW1zPXtkYXRhLm9yZGVycy5lZGdlc31cclxuICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4ge1xyXG4gICAgICBjb25zdCBvcmRlck5hbWUgPSBpdGVtLm5vZGUubmFtZVxyXG4gICAgICBjb25zdCBtZWRpYSA9IChcclxuICAgICAgICA8VGh1bWJuYWlsXHJcbiAgICAgICAgICBzb3VyY2U9e1xyXG4gICAgICAgICAgICBpdGVtLm5vZGUubGluZUl0ZW1zLmVkZ2VzWzBdXHJcbiAgICAgICAgICAgICAgPyBpdGVtLm5vZGUubGluZUl0ZW1zLmVkZ2VzWzBdLm5vZGUuaW1hZ2Uub3JpZ2luYWxTcmNcclxuICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgICAgY29uc3QgcHJpY2UgPSBpdGVtLm5vZGUubmV0UGF5bWVudFNldC5zaG9wTW9uZXkuYW1vdW50O1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxSZXNvdXJjZUxpc3QuSXRlbVxyXG4gICAgICAgIG1lZGlhID0ge29yZGVyTmFtZX1cclxuICAgICAgICAgLy8gaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICBtZWRpYT17bWVkaWF9XHJcbiAgICAgICAgICAvL2FjY2Vzc2liaWxpdHlMYWJlbD17YFZpZXcgZGV0YWlscyBmb3IgJHtpdGVtLnRpdGxlfWB9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vc3RvcmUuc2V0KCdpdGVtJywgaXRlbSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdG9yZS5zZXQnKVxyXG4gICAgICAgICAgICAvL3JlZGlyZWN0VG9Qcm9kdWN0KCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTdGFjaz5cclxuICAgICAgICAgIDxTdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgIDxwPntvcmRlck5hbWV9PC9wPlxyXG4gICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgIDxTdGFjay5JdGVtIGZpbGw+XHJcbiAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLm5vZGUuaWR9XHJcbiAgICAgICAgICAgICAgICA8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgIDxTdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgIDxwPiR7cHJpY2V9PC9wPlxyXG4gICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgIDxTdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgIDxwPkV4cGlyZXMgb24gUiA8L3A+XHJcbiAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgPC9SZXNvdXJjZUxpc3QuSXRlbT5cclxuICAgICAgKTtcclxuICAgIH19XHJcbiAgLz5cclxuPC9DYXJkPlxyXG4pO1xyXG59fVxyXG48L1F1ZXJ5PlxyXG4pO1xyXG59XHJcbn0qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzb3VyY2VMaXN0V2l0aE9yZGVyczsiXSwic291cmNlUm9vdCI6IiJ9