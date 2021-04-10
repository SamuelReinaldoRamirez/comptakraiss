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
      var nomPrenomCustomer = part[1] == null ? null : part[1] + part[2];
      part[1] = nomPrenomCustomer;
      part.splice(2, 1);
      part.splice(3, 0, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_selectdrop__WEBPACK_IMPORTED_MODULE_14__["default"], {
        id: index,
        valueDeDB: data[index].order_state == null ? 9949 : data[index].order_state
      }));
      console.log("PART");
      console.log(part);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRPcmRlcnMuanMiXSwibmFtZXMiOlsiR0VUX09SREVSU19CWV9JRCIsImdxbCIsInJldG91ckR1R2V0IiwiY2FsbEdldCIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsImdldCIsIktFWV9OR1JPS0JBQ0siLCJoZWFkZXJzIiwidGhlbiIsInJlc3VsdCIsImRhdGEiLCJnZXRDb2wiLCJtYXRyaXgiLCJjb2wiLCJjb2x1bW4iLCJpIiwibGVuZ3RoIiwicHVzaCIsIkRhdGFUYWJsZUV4YW1wbGUiLCJjYWxsR2V0U3RhdGVPcmRlciIsIml0ZW1zIiwib3JkZXJzIiwiZWRnZXMiLCJpdGVtc1RvTm9kZSIsImN1cnNvciIsIm5vZGUiLCJub2RlVG9Sb3dzIiwiYnVpbGRpbmdSYXciLCJPYmplY3QiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpbmRleCIsImNvbmNhdCIsInJvd3MiLCJtYXAiLCJ2YWx1ZSIsImtleSIsImluaXRSb3dzIiwicGFydCIsIm5vbVByZW5vbUN1c3RvbWVyIiwic3BsaWNlIiwib3JkZXJfc3RhdGUiLCJjb2xvbmVEZXNFdGF0c0FTZXR0ZXIiLCJjb2xvbmVEZXNOYW1lc0lkcyIsInJvd3NGcm9tREIiLCJyZXRvdXJEdUNhbGxHZXQiLCJSZXNvdXJjZUxpc3RXaXRoT3JkZXJzIiwibG9hZGluZyIsImVycm9yIiwibWVzc2FnZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxnQkFBZ0IsR0FBR0Msa0RBQUgsbUJBQXRCO0FBaUNBLElBQUlDLFdBQVcsR0FBRyxFQUFsQjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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RCxDQURsQjtBQUdEO0FBWkgsUUFERjtBQWdCRDs7OztFQW5Ca0N5Qyw2Q0FBSyxDQUFDQyxTO0FBc0IzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRWVMLHFGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU3NTk5MTY2NzhlZDY1ZDUzNmQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xyXG5pbXBvcnQge1xyXG4gIENhcmQsXHJcbiAgUGFnZSxcclxuICBEYXRhVGFibGUsXHJcbiAgUGFnaW5hdGlvbixcclxuICBCdXR0b25cclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdCc7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9zZWxlY3Rkcm9wJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcblxyXG5cclxuY29uc3QgR0VUX09SREVSU19CWV9JRCA9IGdxbGBcclxucXVlcnkge1xyXG4gIG9yZGVycyhmaXJzdDogNTApIHtcclxuICAgIGVkZ2VzIHtcclxuICAgICAgY3Vyc29yXHJcbiAgICAgIG5vZGUge1xyXG4gICAgICAgIG5hbWVcclxuICAgICAgICBjdXN0b21lcntcclxuICAgICAgICAgIGZpcnN0TmFtZVxyXG4gICAgICAgICAgbGFzdE5hbWVcclxuICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNyZWF0ZWRBdFxyXG4gICAgICAgIGZ1bGZpbGxtZW50c3tcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICB0cmFja2luZ0luZm97XHJcbiAgICAgICAgICAgIGNvbXBhbnlcclxuICAgICAgICAgICAgbnVtYmVyXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlc3RpbWF0ZWREZWxpdmVyeUF0XHJcbiAgICAgICAgICBkZWxpdmVyZWRBdFxyXG4gICAgICAgICAgZGlzcGxheVN0YXR1c1xyXG4gICAgICAgICAgc3RhdHVzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNoaXBwaW5nTGluZXtcclxuICAgICAgICAgIGNhcnJpZXJJZGVudGlmaWVyXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59YDtcclxuXHJcbnZhciByZXRvdXJEdUdldCA9IFtdO1xyXG5cclxuLypsZXQgQXV0aFVzZXIgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgIHJldHVybiBnb29nbGUubG9naW4oZGF0YS51c2VybmFtZSwgZGF0YS5wYXNzd29yZCkudGhlbih0b2tlbiA9PiB7IHJldHVybiB0b2tlbiB9IClcclxuIH1cclxuIGxldCB1c2VyVG9rZW4gPSBhd2FpdCBBdXRoVXNlcihkYXRhKVxyXG4gY29uc29sZS5sb2codXNlclRva2VuKSovXHJcblxyXG4vKiBsZXQgY2FsbEdldCA9IGZ1bmN0aW9uKCl7XHJcbiAgIGNvbnNvbGUubG9nKFwiYXhpb3NcIikgXHJcbiB2YXIgcmV0b3VyRGVGaW47XHJcbiByZXRvdXJEdUdldCA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vXCIrS0VZX05HUk9LQkFDSytcIi5uZ3Jvay5pby9nZXRTdGF0ZU9yZGVyXCIsIHtoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcbiAudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgY29uc29sZS5sb2coXCJyZXN1bHQgZGFucyBsZSB0aGVuIGRhbnMgbGUgY2FsbFwiKVxyXG4gICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSlcclxuICAgcmV0b3VyRGVGaW4gPSByZXN1bHQuZGF0YVxyXG4gICByZXR1cm4gcmVzdWx0LmRhdGE7XHJcbiB9KVxyXG4gLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpXHJcbi8vIHJldG91ckR1R2V0ID0gYXhpb3MuZ2V0KFwiaHR0cHM6Ly9cIitLRVlfTkdST0tCQUNLK1wiLm5ncm9rLmlvL2dldFN0YXRlT3JkZXJcIiwge2hlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiAnYXBwbGljYXRpb24vanNvbid9fSkudmFsdWUuZGF0YVxyXG5jb25zb2xlLmxvZyhcInJlc3VsdCDDoCBsYSBmaW4gZHUgY2FsbFwiKVxyXG5jb25zb2xlLmxvZyhyZXRvdXJEZUZpbikgXHJcbnJldHVybiByZXRvdXJEZUZpblxyXG59Ki9cclxuXHJcbi8qYXN5bmMgZnVuY3Rpb24gY2FsbEdldCgpe1xyXG4gIGNvbnNvbGUubG9nKFwiYXhpb3NcIikgXHJcbiAgdmFyIHJldG91ckRlRmluO1xyXG4gIHJldG91ckR1R2V0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9cIitLRVlfTkdST0tCQUNLK1wiLm5ncm9rLmlvL2dldFN0YXRlT3JkZXJcIiwge2hlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuICAudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgIGNvbnNvbGUubG9nKFwicmVzdWx0IGRhbnMgbGUgdGhlbiBkYW5zIGxlIGNhbGxcIilcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKVxyXG4gICAgcmV0b3VyRGVGaW4gPSByZXN1bHQuZGF0YVxyXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gIH0pXHJcbiAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpXHJcbiAvLyByZXRvdXJEdUdldCA9IGF4aW9zLmdldChcImh0dHBzOi8vXCIrS0VZX05HUk9LQkFDSytcIi5uZ3Jvay5pby9nZXRTdGF0ZU9yZGVyXCIsIHtoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nfX0pLnZhbHVlLmRhdGFcclxuIGNvbnNvbGUubG9nKFwicmVzdWx0IMOgIGxhIGZpbiBkdSBjYWxsXCIpXHJcbiBjb25zb2xlLmxvZyhyZXRvdXJEZUZpbikgXHJcbiByZXR1cm4gcmV0b3VyRGVGaW5cclxufSovXHJcblxyXG5cclxuZnVuY3Rpb24gY2FsbEdldCgpIHtcclxuICBjb25zb2xlLmxvZyhcImF4aW9zXCIpXHJcbiAgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9cIiArIEtFWV9OR1JPS0JBQ0sgKyBcIi5uZ3Jvay5pby9nZXRTdGF0ZU9yZGVyXCIsIHsgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiAnYXBwbGljYXRpb24vanNvbicgfSB9KVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInJycnRcIilcclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpXHJcbiAgICAgIHJldHVybiByZXN1bHQuZGF0YVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0Q29sKG1hdHJpeCwgY29sKSB7XHJcbiAgdmFyIGNvbHVtbiA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWF0cml4Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb2x1bW4ucHVzaChtYXRyaXhbaV1bY29sXSk7XHJcbiAgfVxyXG4gIHJldHVybiBjb2x1bW47XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBEYXRhVGFibGVFeGFtcGxlKGRhdGEpIHtcclxuXHJcbiAgZnVuY3Rpb24gY2FsbEdldFN0YXRlT3JkZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImRhbnMgZ2V0T3JkZXJzIGF4aW9zIGNhbGwgZ2V0IHN0YXRlIG9yZGVyXCIpXHJcbiAgICBjb25zb2xlLmxvZyhcImh0dHBzOi8vXCIgKyBLRVlfTkdST0tCQUNLICsgXCIubmdyb2suaW8vZ2V0U3RhdGVPcmRlclwiLCB7IGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nIH0gfSlcclxuICAgIHJldHVybiBheGlvcy5nZXQoXCJodHRwczovL1wiICsgS0VZX05HUk9LQkFDSyArIFwiLm5ncm9rLmlvL2dldFN0YXRlT3JkZXJcIiwgeyBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBpdGVtcyA9IGRhdGEub3JkZXJzLmVkZ2VzO1xyXG4gIGNvbnNvbGUubG9nKFwiYWxwaGEgcGhhc2VcIilcclxuICBjYWxsR2V0KClcclxuICAvL2NvbnNvbGUubG9nKGNhbGxHZXQoKSlcclxuICAvL2NvbnNvbGUubG9nKCgpID0+IGNhbGxHZXQoKSlcclxuXHJcblxyXG4gIGZ1bmN0aW9uIGl0ZW1zVG9Ob2RlKHsgY3Vyc29yLCBub2RlIH0pIHtcclxuICAgIHJldHVybiB7IG5vZGUgfS5ub2RlXHJcbiAgfTtcclxuXHJcblxyXG4gIGZ1bmN0aW9uIG5vZGVUb1Jvd3Mobm9kZSwgYnVpbGRpbmdSYXcpIHtcclxuICAgIC8qY29uc29sZS5sb2coXCJub2RlXCIpXHJcbiAgICBjb25zb2xlLmxvZyhub2RlKVxyXG4gICAgY29uc29sZS5sb2coJ2RhbnMgbGEgbGFtYmRhIHByb2ZvbmRlJykqL1xyXG4gICAgT2JqZWN0LmVudHJpZXMobm9kZSkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuXHJcbiAgICAgIC8qY29uc29sZS5sb2coZWxlbWVudFswXSAhPT0gJ19fdHlwZW5hbWUnKVxyXG4gICAgICBjb25zb2xlLmxvZyhlbGVtZW50WzBdICE9ICdfX3R5cGVuYW1lJylcclxuICAgICAgY29uc29sZS5sb2coZWxlbWVudFswXSkqL1xyXG5cclxuICAgICAgaWYgKGVsZW1lbnRbMF0gIT09ICdfX3R5cGVuYW1lJykge1xyXG4gICAgICAgIC8qIGNvbnNvbGUubG9nKGJ1aWxkaW5nUmF3KVxyXG4gICAgICAgICBjb25zb2xlLmxvZyhbZWxlbWVudFsxXV0pXHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGJ1aWxkaW5nUmF3LmNvbmNhdChbZWxlbWVudFsxXV0pKVxyXG4gICAgICAgICBjb25zb2xlLmxvZygnX19fX19fX19fX19fJykqL1xyXG4gICAgICAgIGJ1aWxkaW5nUmF3ID0gKHR5cGVvZiBlbGVtZW50WzFdID09PSAnb2JqZWN0JyAmJiBlbGVtZW50WzFdICE9PSBudWxsKSA/IG5vZGVUb1Jvd3MoZWxlbWVudFsxXSwgYnVpbGRpbmdSYXcpIDogYnVpbGRpbmdSYXcuY29uY2F0KFtlbGVtZW50WzFdXSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGJ1aWxkaW5nUmF3O1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIC8qIGNvbnNvbGUubG9nKCdpdGVtcy5tYXAoaXRlbXNUb05vZGUpJylcclxuICAgY29uc29sZS5sb2coaXRlbXMubWFwKGl0ZW1zVG9Ob2RlKSkqL1xyXG4gIHZhciByb3dzID0gW107XHJcbiAgaXRlbXMubWFwKGl0ZW1zVG9Ob2RlKS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICAvKiBjb25zb2xlLmxvZygna2V5LHZhbHVlJylcclxuICAgICBjb25zb2xlLmxvZyhrZXkpXHJcbiAgICAgY29uc29sZS5sb2codmFsdWUpKi9cclxuICAgIHJvd3Nba2V5XSA9IG5vZGVUb1Jvd3ModmFsdWUsIFtdKVxyXG4gIH0pXHJcblxyXG4gIGZ1bmN0aW9uIGluaXRSb3dzKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKCdJbml0IHJvd3MnKVxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHJvd3MuZm9yRWFjaChmdW5jdGlvbiAocGFydCwgaW5kZXgpIHtcclxuXHJcbiAgICAgLyogdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICBzdG9yZS5zZXQoJ2V0YXQnK3RoaXMucHJvcHMuaWQsIHsgaWQgOiB0aGlzLnByb3BzLmlkLCBjaG9peCA6IGV2ZW50LnRhcmdldC52YWx1ZX0pXHJcbiAgICAgICB2YXIgb3JkZXJTdGF0ZSA9IChldmVudC50YXJnZXQudmFsdWUgPT0gXCJTZWxlY3TigKZcIikgPyBudWxsIDogZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgY29uc29sZS5sb2cob3JkZXJTdGF0ZSkqL1xyXG5cclxuICAgICAgIC8vaWwgZmF1dCBzZXR0ZXIgdmFsdWVkZURiU3RhdGUgaXNzdWUgZHUgc3RhdGUgcGx1dG90IHF1ZSBkZSBjcsOpZXIgdW5lIG5vdXZlbGxlIHByb3BcclxuICAgICAgdmFyIG5vbVByZW5vbUN1c3RvbWVyID0gcGFydFsxXSA9PSBudWxsID8gbnVsbCA6IHBhcnRbMV0gKyBwYXJ0WzJdXHJcbiAgICAgIHBhcnRbMV0gPSBub21QcmVub21DdXN0b21lcjtcclxuICAgICAgcGFydC5zcGxpY2UoMiwxKVxyXG4gICAgICBwYXJ0LnNwbGljZSgzLCAwLCA8U2VsZWN0IGlkPXtpbmRleH0gdmFsdWVEZURCPXsgZGF0YVtpbmRleF0ub3JkZXJfc3RhdGUgPT0gbnVsbCA/IDk5NDkgOiBkYXRhW2luZGV4XS5vcmRlcl9zdGF0ZX0+PC9TZWxlY3Q+KTtcclxuICAgICAgY29uc29sZS5sb2coXCJQQVJUXCIpIFxyXG4gICAgICBjb25zb2xlLmxvZyhwYXJ0KVxyXG4gICAgICByb3dzW2luZGV4XSA9IHBhcnQ7XHJcblxyXG4gICAgICAvL3Jvd3NbaW5kZXhdID0gWzxTZWxlY3QgaWQ9e2luZGV4fSB2YWx1ZURlREI9eyBkYXRhW2luZGV4XS5vcmRlcl9zdGF0ZSA9PSBudWxsID8gOTk0OSA6IGRhdGFbaW5kZXhdLm9yZGVyX3N0YXRlfT48L1NlbGVjdD5dLmNvbmNhdChwYXJ0KTtcclxuICAgICAgICAvLy5zZXRTdGF0ZSh7dmFsdWUgOiBkYXRhW2luZGV4XS5vcmRlcl9zdGF0ZX0pXVxyXG4gICAgfSwgcm93cyk7XHJcbiAgXHJcbiAgICB2YXIgY29sb25lRGVzRXRhdHNBU2V0dGVyID0gZ2V0Q29sKHJvd3MsIDApXHJcbiAgICBjb25zb2xlLmxvZyhcImNvbG9ubmUgZGVzIHNlbGVjdFwiKVxyXG4gICAgY29uc29sZS5sb2coY29sb25lRGVzRXRhdHNBU2V0dGVyKVxyXG4gICAgdmFyIGNvbG9uZURlc05hbWVzSWRzID0gZ2V0Q29sKHJvd3MsIDEpXHJcbiAgXHJcbiAgfVxyXG5cclxuICB2YXIgcm93c0Zyb21EQiA9IFtdO1xyXG5cclxuICBjYWxsR2V0U3RhdGVPcmRlcigpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgY29uc29sZS5sb2coXCJjYWxsIGdldCBzdGF0ZSBvcmRlciBjYWxsYmFja1wiKVxyXG4gICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpXHJcbiAgICBpbml0Um93cyhyZXN1bHQuZGF0YSlcclxuICB9KVxyXG5cclxuICAvKiogU0FNSUEgREVCVVRcclxuICByb3dzLmZvckVhY2goZnVuY3Rpb24gKHBhcnQsIGluZGV4KSB7XHJcbiAgICAvL2F4aW9zLmdldEV0YXQgZHUgc2VsZWN0IMOgIHNldHRlciAoZW4gZm9uY3Rpb24gZGUgbGEgcGFnZSBldCBkdSB0cmkgKGxlIHRyaSBkb2l0IGV0cmUgZ2xvYmFsIGRhbnMgdW4gcHJlbWllciB0ZW1wcyBldCBwdWlzIG9uIHBvdXJyYSBmYWlyZSB1biB0cmkgc3VyIGxlcyBzZXVscyDDqWzDqW1lbnRzIGRlIGxhIHBhZ2UgYXVzc2kpKVxyXG4gICAgcm93c1tpbmRleF0gPSBbPFNlbGVjdCBpZD17aW5kZXh9PjwvU2VsZWN0Pl0uY29uY2F0KHBhcnQpO1xyXG4gIH0sIHJvd3MpO1xyXG5cclxuICBjb25zb2xlLmxvZygncm93cycpO1xyXG4gIGNvbnNvbGUubG9nKHJvd3MpO1xyXG5cclxuICAvL29uIG5lIHRpZW50IHBhcyBlbmNvcmUgY29tcHRlIGRlIGxhIHBhZ2luYXRpb25cclxuICB2YXIgY29sb25lRGVzRXRhdHNBU2V0dGVyID0gZ2V0Q29sKHJvd3MsIDApXHJcbiAgY29uc29sZS5sb2coJ3ZpZGU/JylcclxuICBjb25zb2xlLmxvZyhjb2xvbmVEZXNFdGF0c0FTZXR0ZXIpXHJcbiAgdmFyIGNvbG9uZURlc05hbWVzSWRzID0gZ2V0Q29sKHJvd3MsIDEpXHJcblxyXG4gIHZhciByb3dzRnJvbURCID0gW107XHJcbiAgY29uc29sZS5sb2cocm93c0Zyb21EQilcclxuICBjb25zb2xlLmxvZyhcImJldGEgcGhhc2VcIilcclxuICBTQU1JQSBGSU4gKiovXHJcblxyXG4gIC8qbGV0IEF1dGhVc2VyID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgcmV0dXJuIGdvb2dsZS5sb2dpbihkYXRhLnVzZXJuYW1lLCBkYXRhLnBhc3N3b3JkKS50aGVuKHRva2VuID0+IHsgcmV0dXJuIHRva2VuIH0gKVxyXG4gIH1cclxuICBsZXQgdXNlclRva2VuID0gYXdhaXQgQXV0aFVzZXIoZGF0YSlcclxuICBjb25zb2xlLmxvZyh1c2VyVG9rZW4pKi9cclxuXHJcblxyXG4gIGNvbnNvbGUubG9nKGNhbGxHZXQoKSlcclxuICB2YXIgcmV0b3VyRHVDYWxsR2V0O1xyXG4gIC8qY29uc29sZS5sb2coY2FsbEdldCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImxlIHJlc3VsdCBkYW5zIGxlIHRoZW5cIilcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCkgLy8gXCJTb21lIFVzZXIgdG9rZW5cIlxyXG4gICAgcmV0b3VyRHVDYWxsR2V0ID0gcmVzdWx0O1xyXG4gICAgY29uc29sZS5sb2coJ3Jlc29sZXZlZWUnKVxyXG4gICAgLy9yZXNvbHZlKHJlc3VsdClcclxuICAgIHJldHVybiByZXN1bHRcclxuIH0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgY29uc29sZS5sb2coXCJsZSByZXN1bHQgZGFucyBsZSB0aGVuXCIpXHJcbiAgY29uc29sZS5sb2cocmVzdWx0KSAvLyBcIlNvbWUgVXNlciB0b2tlblwiXHJcbiAgcmV0b3VyRHVDYWxsR2V0ID0gcmVzdWx0O1xyXG4gIHJldHVybiByZXN1bHRcclxufSkpKi9cclxuICBjb25zb2xlLmxvZyhcInJldG91ckR1Q2FsbEdldFwiKVxyXG4gIGNvbnNvbGUubG9nKHJldG91ckR1Q2FsbEdldClcclxuICAvKnJldG91ckR1Q2FsbEdldC5mb3JFYWNoKCh2YWx1ZSwga2V5KT0+IHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKVxyXG5cclxuICAgIHJvd3NGcm9tREJba2V5XSA9IG5vZGVUb1Jvd3ModmFsdWUsW10pIFxyXG4gICB9KSovXHJcbiAgY29uc29sZS5sb2coXCJyb3dzRnJvbURCXCIpXHJcbiAgY29uc29sZS5sb2cocm93c0Zyb21EQilcclxuXHJcblxyXG4gIGNvbnNvbGUubG9nKFwiUk9XU1NcIilcclxuICBjb25zb2xlLmxvZyhyb3dzKVxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZSBmdWxsV2lkdGg9XCJ0cnVlXCI+XHJcbiAgICAgIDxDYXJkPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gY2FsbEdldCgpfT5FeGFtcGxlIGJ1dHRvbjwvQnV0dG9uPlxyXG4gICAgICAgIHsvL3JldG91ckR1R2V0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxEYXRhVGFibGVcclxuICAgICAgICAgIGNvbHVtbkNvbnRlbnRUeXBlcz17W1xyXG4gICAgICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgICAgICd0ZXh0JyxcclxuICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgICAgICd0ZXh0JyxcclxuICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgICAgaGVhZGluZ3M9e1tcclxuICAgICAgICAgICAgJ2lkJyxcclxuICAgICAgICAgICAgJ25vbSBldCBwcsOpbm9tJyxcclxuICAgICAgICAgICAgJ2RhdGUgZGUgbGEgY29tbWFuZGUnLFxyXG4gICAgICAgICAgICAnw6l0YXQgZGUgbGEgY29tbWFuZGUnLFxyXG4gICAgICAgICAgICAndHJhbnNwb3J0ZXVyJyxcclxuICAgICAgICAgICAgJ251bcOpcm8gZGUgc3VpdmknLFxyXG4gICAgICAgICAgICAnZGF0ZSBwcsOpdnVlIGRlIGxpdnJhaXNvbicsXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgICAgLy9pbCBmYXV0IHLDqWN1cMOpcmVyIGxlcyBvcmRlciBzdGF0ZXMgZGUgbGEgZGIgZXQgcGV1dCBldHJlIGxlcyBtZXR0cmUgZW4gY2FjaGUgY2Egc2VyYWl0IGNvb2xcclxuICAgICAgICAgIHJvd3M9e3Jvd3N9XHJcbiAgICAgICAgLy8nPGltZyBzcmM9XCInK2RhdGErJ1wiPidcclxuXHJcbiAgICAgICAgLypzb3VyY2U9e1xyXG4gICAgICAgICAgaXRlbS5ub2RlLmxpbmVJdGVtcy5lZGdlc1swXVxyXG4gICAgICAgICAgICA/IGl0ZW0ubm9kZS5saW5lSXRlbXMuZWRnZXNbMF0ubm9kZS5pbWFnZS5vcmlnaW5hbFNyY1xyXG4gICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgfSovXHJcbiAgICAgICAgLy90b3RhbHM9e1snJywgJycsICcnLCAyNTUsICckMTU1LDgzMC4wMCddfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvUGFnZT5cclxuXHJcblxyXG4gICk7XHJcbn1cclxuXHJcbmNsYXNzIFJlc291cmNlTGlzdFdpdGhPcmRlcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UXVlcnkgcXVlcnk9e0dFVF9PUkRFUlNfQllfSUR9PlxyXG4gICAgICAgIHsoeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkRBVEFcIilcclxuICAgICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5n4oCmPC9kaXY+O1xyXG4gICAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEub3JkZXJzLmVkZ2VzKTtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YS5vcmRlcnMuZWRnZXNbMF0ubm9kZS5saW5lSXRlbXMuZWRnZXNbMF0ubm9kZS5pbWFnZS5vcmlnaW5hbFNyYyk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgRGF0YVRhYmxlRXhhbXBsZShkYXRhKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9fVxyXG4gICAgICA8L1F1ZXJ5PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbi8qPENhcmQ+XHJcbiAgPHA+TGVzIDUwIGRlcm5pw6hyZXMgY29tbWFuZGVzPC9wPlxyXG4gIDxSZXNvdXJjZUxpc3RcclxuICAgIHNob3dIZWFkZXJcclxuICAgIHJlc291cmNlTmFtZT17eyBzaW5ndWxhcjogJ09yZGVyJywgcGx1cmFsOiAnT3JkZXJzJyB9fVxyXG4gICAgaXRlbXM9e2RhdGEub3JkZXJzLmVkZ2VzfVxyXG4gICAgcmVuZGVySXRlbT17aXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IG9yZGVyTmFtZSA9IGl0ZW0ubm9kZS5uYW1lXHJcbiAgICAgIGNvbnN0IG1lZGlhID0gKFxyXG4gICAgICAgIDxUaHVtYm5haWxcclxuICAgICAgICAgIHNvdXJjZT17XHJcbiAgICAgICAgICAgIGl0ZW0ubm9kZS5saW5lSXRlbXMuZWRnZXNbMF1cclxuICAgICAgICAgICAgICA/IGl0ZW0ubm9kZS5saW5lSXRlbXMuZWRnZXNbMF0ubm9kZS5pbWFnZS5vcmlnaW5hbFNyY1xyXG4gICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBwcmljZSA9IGl0ZW0ubm9kZS5uZXRQYXltZW50U2V0LnNob3BNb25leS5hbW91bnQ7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgXHJcbiAgICAgICAgPFJlc291cmNlTGlzdC5JdGVtXHJcbiAgICAgICAgbWVkaWEgPSB7b3JkZXJOYW1lfVxyXG4gICAgICAgICAvLyBpZD17aXRlbS5pZH1cclxuICAgICAgICAgIG1lZGlhPXttZWRpYX1cclxuICAgICAgICAgIC8vYWNjZXNzaWJpbGl0eUxhYmVsPXtgVmlldyBkZXRhaWxzIGZvciAke2l0ZW0udGl0bGV9YH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgLy9zdG9yZS5zZXQoJ2l0ZW0nLCBpdGVtKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0b3JlLnNldCcpXHJcbiAgICAgICAgICAgIC8vcmVkaXJlY3RUb1Byb2R1Y3QoKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFN0YWNrPlxyXG4gICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPHA+e29yZGVyTmFtZX08L3A+XHJcbiAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgPFN0YWNrLkl0ZW0gZmlsbD5cclxuICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0ubm9kZS5pZH1cclxuICAgICAgICAgICAgICAgIDwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPHA+JHtwcmljZX08L3A+XHJcbiAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPHA+RXhwaXJlcyBvbiBSIDwvcD5cclxuICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICA8L1Jlc291cmNlTGlzdC5JdGVtPlxyXG4gICAgICApO1xyXG4gICAgfX1cclxuICAvPlxyXG48L0NhcmQ+XHJcbik7XHJcbn19XHJcbjwvUXVlcnk+XHJcbik7XHJcbn1cclxufSovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNvdXJjZUxpc3RXaXRoT3JkZXJzOyJdLCJzb3VyY2VSb290IjoiIn0=