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
      console.log(part[1]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRPcmRlcnMuanMiXSwibmFtZXMiOlsiR0VUX09SREVSU19CWV9JRCIsImdxbCIsInJldG91ckR1R2V0IiwiY2FsbEdldCIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsImdldCIsIktFWV9OR1JPS0JBQ0siLCJoZWFkZXJzIiwidGhlbiIsInJlc3VsdCIsImRhdGEiLCJnZXRDb2wiLCJtYXRyaXgiLCJjb2wiLCJjb2x1bW4iLCJpIiwibGVuZ3RoIiwicHVzaCIsIkRhdGFUYWJsZUV4YW1wbGUiLCJjYWxsR2V0U3RhdGVPcmRlciIsIml0ZW1zIiwib3JkZXJzIiwiZWRnZXMiLCJpdGVtc1RvTm9kZSIsImN1cnNvciIsIm5vZGUiLCJub2RlVG9Sb3dzIiwiYnVpbGRpbmdSYXciLCJPYmplY3QiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpbmRleCIsImNvbmNhdCIsInJvd3MiLCJtYXAiLCJ2YWx1ZSIsImtleSIsImluaXRSb3dzIiwicGFydCIsInNwbGljZSIsIm9yZGVyX3N0YXRlIiwiY29sb25lRGVzRXRhdHNBU2V0dGVyIiwiY29sb25lRGVzTmFtZXNJZHMiLCJyb3dzRnJvbURCIiwicmV0b3VyRHVDYWxsR2V0IiwiUmVzb3VyY2VMaXN0V2l0aE9yZGVycyIsImxvYWRpbmciLCJlcnJvciIsIm1lc3NhZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTUEsZ0JBQWdCLEdBQUdDLGtEQUFILG1CQUF0QjtBQWlDQSxJQUFJQyxXQUFXLEdBQUcsRUFBbEI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFZUwscUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjQyODE5MzlkNzdmZGViZDBkZDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XHJcbmltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBQYWdlLFxyXG4gIERhdGFUYWJsZSxcclxuICBQYWdpbmF0aW9uLFxyXG4gIEJ1dHRvblxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucyc7XHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcclxuaW1wb3J0IFNlbGVjdCBmcm9tICcuL3NlbGVjdGRyb3AnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcblxyXG5jb25zdCBHRVRfT1JERVJTX0JZX0lEID0gZ3FsYFxyXG5xdWVyeSB7XHJcbiAgb3JkZXJzKGZpcnN0OiA1MCkge1xyXG4gICAgZWRnZXMge1xyXG4gICAgICBjdXJzb3JcclxuICAgICAgbm9kZSB7XHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIGN1c3RvbWVye1xyXG4gICAgICAgICAgZmlyc3ROYW1lXHJcbiAgICAgICAgICBsYXN0TmFtZVxyXG4gICAgICAgICAgZW1haWxcclxuICAgICAgICB9XHJcbiAgICAgICAgY3JlYXRlZEF0XHJcbiAgICAgICAgZnVsZmlsbG1lbnRze1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIHRyYWNraW5nSW5mb3tcclxuICAgICAgICAgICAgY29tcGFueVxyXG4gICAgICAgICAgICBudW1iZXJcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVzdGltYXRlZERlbGl2ZXJ5QXRcclxuICAgICAgICAgIGRlbGl2ZXJlZEF0XHJcbiAgICAgICAgICBkaXNwbGF5U3RhdHVzXHJcbiAgICAgICAgICBzdGF0dXNcclxuICAgICAgICB9XHJcbiAgICAgICAgc2hpcHBpbmdMaW5le1xyXG4gICAgICAgICAgY2FycmllcklkZW50aWZpZXJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1gO1xyXG5cclxudmFyIHJldG91ckR1R2V0ID0gW107XHJcblxyXG4vKmxldCBBdXRoVXNlciA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgcmV0dXJuIGdvb2dsZS5sb2dpbihkYXRhLnVzZXJuYW1lLCBkYXRhLnBhc3N3b3JkKS50aGVuKHRva2VuID0+IHsgcmV0dXJuIHRva2VuIH0gKVxyXG4gfVxyXG4gbGV0IHVzZXJUb2tlbiA9IGF3YWl0IEF1dGhVc2VyKGRhdGEpXHJcbiBjb25zb2xlLmxvZyh1c2VyVG9rZW4pKi9cclxuXHJcbi8qIGxldCBjYWxsR2V0ID0gZnVuY3Rpb24oKXtcclxuICAgY29uc29sZS5sb2coXCJheGlvc1wiKSBcclxuIHZhciByZXRvdXJEZUZpbjtcclxuIHJldG91ckR1R2V0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9cIitLRVlfTkdST0tCQUNLK1wiLm5ncm9rLmlvL2dldFN0YXRlT3JkZXJcIiwge2hlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuIC50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICBjb25zb2xlLmxvZyhcInJlc3VsdCBkYW5zIGxlIHRoZW4gZGFucyBsZSBjYWxsXCIpXHJcbiAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKVxyXG4gICByZXRvdXJEZUZpbiA9IHJlc3VsdC5kYXRhXHJcbiAgIHJldHVybiByZXN1bHQuZGF0YTtcclxuIH0pXHJcbiAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcclxuLy8gcmV0b3VyRHVHZXQgPSBheGlvcy5nZXQoXCJodHRwczovL1wiK0tFWV9OR1JPS0JBQ0srXCIubmdyb2suaW8vZ2V0U3RhdGVPcmRlclwiLCB7aGVhZGVyczoge1wiQ29udGVudC1UeXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJ319KS52YWx1ZS5kYXRhXHJcbmNvbnNvbGUubG9nKFwicmVzdWx0IMOgIGxhIGZpbiBkdSBjYWxsXCIpXHJcbmNvbnNvbGUubG9nKHJldG91ckRlRmluKSBcclxucmV0dXJuIHJldG91ckRlRmluXHJcbn0qL1xyXG5cclxuLyphc3luYyBmdW5jdGlvbiBjYWxsR2V0KCl7XHJcbiAgY29uc29sZS5sb2coXCJheGlvc1wiKSBcclxuICB2YXIgcmV0b3VyRGVGaW47XHJcbiAgcmV0b3VyRHVHZXQgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL1wiK0tFWV9OR1JPS0JBQ0srXCIubmdyb2suaW8vZ2V0U3RhdGVPcmRlclwiLCB7aGVhZGVyczoge1wiQ29udGVudC1UeXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG4gIC50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgY29uc29sZS5sb2coXCJyZXN1bHQgZGFucyBsZSB0aGVuIGRhbnMgbGUgY2FsbFwiKVxyXG4gICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpXHJcbiAgICByZXRvdXJEZUZpbiA9IHJlc3VsdC5kYXRhXHJcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XHJcbiAgfSlcclxuICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcclxuIC8vIHJldG91ckR1R2V0ID0gYXhpb3MuZ2V0KFwiaHR0cHM6Ly9cIitLRVlfTkdST0tCQUNLK1wiLm5ncm9rLmlvL2dldFN0YXRlT3JkZXJcIiwge2hlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiAnYXBwbGljYXRpb24vanNvbid9fSkudmFsdWUuZGF0YVxyXG4gY29uc29sZS5sb2coXCJyZXN1bHQgw6AgbGEgZmluIGR1IGNhbGxcIilcclxuIGNvbnNvbGUubG9nKHJldG91ckRlRmluKSBcclxuIHJldHVybiByZXRvdXJEZUZpblxyXG59Ki9cclxuXHJcblxyXG5mdW5jdGlvbiBjYWxsR2V0KCkge1xyXG4gIGNvbnNvbGUubG9nKFwiYXhpb3NcIilcclxuICBheGlvcy5nZXQoXCJodHRwczovL1wiICsgS0VZX05HUk9LQkFDSyArIFwiLm5ncm9rLmlvL2dldFN0YXRlT3JkZXJcIiwgeyBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH0pXHJcbiAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicnJydFwiKVxyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSlcclxuICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhXHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRDb2wobWF0cml4LCBjb2wpIHtcclxuICB2YXIgY29sdW1uID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRyaXgubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbHVtbi5wdXNoKG1hdHJpeFtpXVtjb2xdKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbHVtbjtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIERhdGFUYWJsZUV4YW1wbGUoZGF0YSkge1xyXG5cclxuICBmdW5jdGlvbiBjYWxsR2V0U3RhdGVPcmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZGFucyBnZXRPcmRlcnMgYXhpb3MgY2FsbCBnZXQgc3RhdGUgb3JkZXJcIilcclxuICAgIGNvbnNvbGUubG9nKFwiaHR0cHM6Ly9cIiArIEtFWV9OR1JPS0JBQ0sgKyBcIi5uZ3Jvay5pby9nZXRTdGF0ZU9yZGVyXCIsIHsgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiAnYXBwbGljYXRpb24vanNvbicgfSB9KVxyXG4gICAgcmV0dXJuIGF4aW9zLmdldChcImh0dHBzOi8vXCIgKyBLRVlfTkdST0tCQUNLICsgXCIubmdyb2suaW8vZ2V0U3RhdGVPcmRlclwiLCB7IGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nIH0gfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGl0ZW1zID0gZGF0YS5vcmRlcnMuZWRnZXM7XHJcbiAgY29uc29sZS5sb2coXCJhbHBoYSBwaGFzZVwiKVxyXG4gIGNhbGxHZXQoKVxyXG4gIC8vY29uc29sZS5sb2coY2FsbEdldCgpKVxyXG4gIC8vY29uc29sZS5sb2coKCkgPT4gY2FsbEdldCgpKVxyXG5cclxuXHJcbiAgZnVuY3Rpb24gaXRlbXNUb05vZGUoeyBjdXJzb3IsIG5vZGUgfSkge1xyXG4gICAgcmV0dXJuIHsgbm9kZSB9Lm5vZGVcclxuICB9O1xyXG5cclxuXHJcbiAgZnVuY3Rpb24gbm9kZVRvUm93cyhub2RlLCBidWlsZGluZ1Jhdykge1xyXG4gICAgLypjb25zb2xlLmxvZyhcIm5vZGVcIilcclxuICAgIGNvbnNvbGUubG9nKG5vZGUpXHJcbiAgICBjb25zb2xlLmxvZygnZGFucyBsYSBsYW1iZGEgcHJvZm9uZGUnKSovXHJcbiAgICBPYmplY3QuZW50cmllcyhub2RlKS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgLypjb25zb2xlLmxvZyhlbGVtZW50WzBdICE9PSAnX190eXBlbmFtZScpXHJcbiAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnRbMF0gIT0gJ19fdHlwZW5hbWUnKVxyXG4gICAgICBjb25zb2xlLmxvZyhlbGVtZW50WzBdKSovXHJcblxyXG4gICAgICBpZiAoZWxlbWVudFswXSAhPT0gJ19fdHlwZW5hbWUnKSB7XHJcbiAgICAgICAgLyogY29uc29sZS5sb2coYnVpbGRpbmdSYXcpXHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFtlbGVtZW50WzFdXSlcclxuICAgICAgICAgY29uc29sZS5sb2coYnVpbGRpbmdSYXcuY29uY2F0KFtlbGVtZW50WzFdXSkpXHJcbiAgICAgICAgIGNvbnNvbGUubG9nKCdfX19fX19fX19fX18nKSovXHJcbiAgICAgICAgYnVpbGRpbmdSYXcgPSAodHlwZW9mIGVsZW1lbnRbMV0gPT09ICdvYmplY3QnICYmIGVsZW1lbnRbMV0gIT09IG51bGwpID8gbm9kZVRvUm93cyhlbGVtZW50WzFdLCBidWlsZGluZ1JhdykgOiBidWlsZGluZ1Jhdy5jb25jYXQoW2VsZW1lbnRbMV1dKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYnVpbGRpbmdSYXc7XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbiAgLyogY29uc29sZS5sb2coJ2l0ZW1zLm1hcChpdGVtc1RvTm9kZSknKVxyXG4gICBjb25zb2xlLmxvZyhpdGVtcy5tYXAoaXRlbXNUb05vZGUpKSovXHJcbiAgdmFyIHJvd3MgPSBbXTtcclxuICBpdGVtcy5tYXAoaXRlbXNUb05vZGUpLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuICAgIC8qIGNvbnNvbGUubG9nKCdrZXksdmFsdWUnKVxyXG4gICAgIGNvbnNvbGUubG9nKGtleSlcclxuICAgICBjb25zb2xlLmxvZyh2YWx1ZSkqL1xyXG4gICAgcm93c1trZXldID0gbm9kZVRvUm93cyh2YWx1ZSwgW10pXHJcbiAgfSlcclxuXHJcbiAgZnVuY3Rpb24gaW5pdFJvd3MoZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coJ0luaXQgcm93cycpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgcm93cy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJ0LCBpbmRleCkge1xyXG5cclxuICAgICAvKiB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgIHN0b3JlLnNldCgnZXRhdCcrdGhpcy5wcm9wcy5pZCwgeyBpZCA6IHRoaXMucHJvcHMuaWQsIGNob2l4IDogZXZlbnQudGFyZ2V0LnZhbHVlfSlcclxuICAgICAgIHZhciBvcmRlclN0YXRlID0gKGV2ZW50LnRhcmdldC52YWx1ZSA9PSBcIlNlbGVjdOKAplwiKSA/IG51bGwgOiBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICBjb25zb2xlLmxvZyhvcmRlclN0YXRlKSovXHJcblxyXG4gICAgICAgLy9pbCBmYXV0IHNldHRlciB2YWx1ZWRlRGJTdGF0ZSBpc3N1ZSBkdSBzdGF0ZSBwbHV0b3QgcXVlIGRlIGNyw6llciB1bmUgbm91dmVsbGUgcHJvcFxyXG4gICAgICBjb25zb2xlLmxvZyhcIlBBUlRcIikgXHJcbiAgICAgIGNvbnNvbGUubG9nKHBhcnRbMV0pXHJcbiAgICAgIHBhcnQuc3BsaWNlKDMsIDAsIDxTZWxlY3QgaWQ9e2luZGV4fSB2YWx1ZURlREI9eyBkYXRhW2luZGV4XS5vcmRlcl9zdGF0ZSA9PSBudWxsID8gOTk0OSA6IGRhdGFbaW5kZXhdLm9yZGVyX3N0YXRlfT48L1NlbGVjdD4pO1xyXG4gICAgICByb3dzW2luZGV4XSA9IHBhcnQ7XHJcblxyXG4gICAgICAvL3Jvd3NbaW5kZXhdID0gWzxTZWxlY3QgaWQ9e2luZGV4fSB2YWx1ZURlREI9eyBkYXRhW2luZGV4XS5vcmRlcl9zdGF0ZSA9PSBudWxsID8gOTk0OSA6IGRhdGFbaW5kZXhdLm9yZGVyX3N0YXRlfT48L1NlbGVjdD5dLmNvbmNhdChwYXJ0KTtcclxuICAgICAgICAvLy5zZXRTdGF0ZSh7dmFsdWUgOiBkYXRhW2luZGV4XS5vcmRlcl9zdGF0ZX0pXVxyXG4gICAgfSwgcm93cyk7XHJcbiAgXHJcbiAgICB2YXIgY29sb25lRGVzRXRhdHNBU2V0dGVyID0gZ2V0Q29sKHJvd3MsIDApXHJcbiAgICBjb25zb2xlLmxvZyhcImNvbG9ubmUgZGVzIHNlbGVjdFwiKVxyXG4gICAgY29uc29sZS5sb2coY29sb25lRGVzRXRhdHNBU2V0dGVyKVxyXG4gICAgdmFyIGNvbG9uZURlc05hbWVzSWRzID0gZ2V0Q29sKHJvd3MsIDEpXHJcbiAgXHJcbiAgfVxyXG5cclxuICB2YXIgcm93c0Zyb21EQiA9IFtdO1xyXG5cclxuICBjYWxsR2V0U3RhdGVPcmRlcigpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgY29uc29sZS5sb2coXCJjYWxsIGdldCBzdGF0ZSBvcmRlciBjYWxsYmFja1wiKVxyXG4gICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpXHJcbiAgICBpbml0Um93cyhyZXN1bHQuZGF0YSlcclxuICB9KVxyXG5cclxuICAvKiogU0FNSUEgREVCVVRcclxuICByb3dzLmZvckVhY2goZnVuY3Rpb24gKHBhcnQsIGluZGV4KSB7XHJcbiAgICAvL2F4aW9zLmdldEV0YXQgZHUgc2VsZWN0IMOgIHNldHRlciAoZW4gZm9uY3Rpb24gZGUgbGEgcGFnZSBldCBkdSB0cmkgKGxlIHRyaSBkb2l0IGV0cmUgZ2xvYmFsIGRhbnMgdW4gcHJlbWllciB0ZW1wcyBldCBwdWlzIG9uIHBvdXJyYSBmYWlyZSB1biB0cmkgc3VyIGxlcyBzZXVscyDDqWzDqW1lbnRzIGRlIGxhIHBhZ2UgYXVzc2kpKVxyXG4gICAgcm93c1tpbmRleF0gPSBbPFNlbGVjdCBpZD17aW5kZXh9PjwvU2VsZWN0Pl0uY29uY2F0KHBhcnQpO1xyXG4gIH0sIHJvd3MpO1xyXG5cclxuICBjb25zb2xlLmxvZygncm93cycpO1xyXG4gIGNvbnNvbGUubG9nKHJvd3MpO1xyXG5cclxuICAvL29uIG5lIHRpZW50IHBhcyBlbmNvcmUgY29tcHRlIGRlIGxhIHBhZ2luYXRpb25cclxuICB2YXIgY29sb25lRGVzRXRhdHNBU2V0dGVyID0gZ2V0Q29sKHJvd3MsIDApXHJcbiAgY29uc29sZS5sb2coJ3ZpZGU/JylcclxuICBjb25zb2xlLmxvZyhjb2xvbmVEZXNFdGF0c0FTZXR0ZXIpXHJcbiAgdmFyIGNvbG9uZURlc05hbWVzSWRzID0gZ2V0Q29sKHJvd3MsIDEpXHJcblxyXG4gIHZhciByb3dzRnJvbURCID0gW107XHJcbiAgY29uc29sZS5sb2cocm93c0Zyb21EQilcclxuICBjb25zb2xlLmxvZyhcImJldGEgcGhhc2VcIilcclxuICBTQU1JQSBGSU4gKiovXHJcblxyXG4gIC8qbGV0IEF1dGhVc2VyID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgcmV0dXJuIGdvb2dsZS5sb2dpbihkYXRhLnVzZXJuYW1lLCBkYXRhLnBhc3N3b3JkKS50aGVuKHRva2VuID0+IHsgcmV0dXJuIHRva2VuIH0gKVxyXG4gIH1cclxuICBsZXQgdXNlclRva2VuID0gYXdhaXQgQXV0aFVzZXIoZGF0YSlcclxuICBjb25zb2xlLmxvZyh1c2VyVG9rZW4pKi9cclxuXHJcblxyXG4gIGNvbnNvbGUubG9nKGNhbGxHZXQoKSlcclxuICB2YXIgcmV0b3VyRHVDYWxsR2V0O1xyXG4gIC8qY29uc29sZS5sb2coY2FsbEdldCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImxlIHJlc3VsdCBkYW5zIGxlIHRoZW5cIilcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCkgLy8gXCJTb21lIFVzZXIgdG9rZW5cIlxyXG4gICAgcmV0b3VyRHVDYWxsR2V0ID0gcmVzdWx0O1xyXG4gICAgY29uc29sZS5sb2coJ3Jlc29sZXZlZWUnKVxyXG4gICAgLy9yZXNvbHZlKHJlc3VsdClcclxuICAgIHJldHVybiByZXN1bHRcclxuIH0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgY29uc29sZS5sb2coXCJsZSByZXN1bHQgZGFucyBsZSB0aGVuXCIpXHJcbiAgY29uc29sZS5sb2cocmVzdWx0KSAvLyBcIlNvbWUgVXNlciB0b2tlblwiXHJcbiAgcmV0b3VyRHVDYWxsR2V0ID0gcmVzdWx0O1xyXG4gIHJldHVybiByZXN1bHRcclxufSkpKi9cclxuICBjb25zb2xlLmxvZyhcInJldG91ckR1Q2FsbEdldFwiKVxyXG4gIGNvbnNvbGUubG9nKHJldG91ckR1Q2FsbEdldClcclxuICAvKnJldG91ckR1Q2FsbEdldC5mb3JFYWNoKCh2YWx1ZSwga2V5KT0+IHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKVxyXG5cclxuICAgIHJvd3NGcm9tREJba2V5XSA9IG5vZGVUb1Jvd3ModmFsdWUsW10pIFxyXG4gICB9KSovXHJcbiAgY29uc29sZS5sb2coXCJyb3dzRnJvbURCXCIpXHJcbiAgY29uc29sZS5sb2cocm93c0Zyb21EQilcclxuXHJcblxyXG4gIGNvbnNvbGUubG9nKFwiUk9XU1NcIilcclxuICBjb25zb2xlLmxvZyhyb3dzKVxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZSBmdWxsV2lkdGg9XCJ0cnVlXCI+XHJcbiAgICAgIDxDYXJkPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gY2FsbEdldCgpfT5FeGFtcGxlIGJ1dHRvbjwvQnV0dG9uPlxyXG4gICAgICAgIHsvL3JldG91ckR1R2V0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxEYXRhVGFibGVcclxuICAgICAgICAgIGNvbHVtbkNvbnRlbnRUeXBlcz17W1xyXG4gICAgICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgICAgICd0ZXh0JyxcclxuICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgICAgICd0ZXh0JyxcclxuICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgICAgaGVhZGluZ3M9e1tcclxuICAgICAgICAgICAgJ2lkJyxcclxuICAgICAgICAgICAgJ25vbSBldCBwcsOpbm9tJyxcclxuICAgICAgICAgICAgJ2RhdGUgZGUgbGEgY29tbWFuZGUnLFxyXG4gICAgICAgICAgICAnw6l0YXQgZGUgbGEgY29tbWFuZGUnLFxyXG4gICAgICAgICAgICAndHJhbnNwb3J0ZXVyJyxcclxuICAgICAgICAgICAgJ251bcOpcm8gZGUgc3VpdmknLFxyXG4gICAgICAgICAgICAnZGF0ZSBwcsOpdnVlIGRlIGxpdnJhaXNvbicsXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgICAgLy9pbCBmYXV0IHLDqWN1cMOpcmVyIGxlcyBvcmRlciBzdGF0ZXMgZGUgbGEgZGIgZXQgcGV1dCBldHJlIGxlcyBtZXR0cmUgZW4gY2FjaGUgY2Egc2VyYWl0IGNvb2xcclxuICAgICAgICAgIHJvd3M9e3Jvd3N9XHJcbiAgICAgICAgLy8nPGltZyBzcmM9XCInK2RhdGErJ1wiPidcclxuXHJcbiAgICAgICAgLypzb3VyY2U9e1xyXG4gICAgICAgICAgaXRlbS5ub2RlLmxpbmVJdGVtcy5lZGdlc1swXVxyXG4gICAgICAgICAgICA/IGl0ZW0ubm9kZS5saW5lSXRlbXMuZWRnZXNbMF0ubm9kZS5pbWFnZS5vcmlnaW5hbFNyY1xyXG4gICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgfSovXHJcbiAgICAgICAgLy90b3RhbHM9e1snJywgJycsICcnLCAyNTUsICckMTU1LDgzMC4wMCddfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvUGFnZT5cclxuXHJcblxyXG4gICk7XHJcbn1cclxuXHJcbmNsYXNzIFJlc291cmNlTGlzdFdpdGhPcmRlcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UXVlcnkgcXVlcnk9e0dFVF9PUkRFUlNfQllfSUR9PlxyXG4gICAgICAgIHsoeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkRBVEFcIilcclxuICAgICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5n4oCmPC9kaXY+O1xyXG4gICAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEub3JkZXJzLmVkZ2VzKTtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YS5vcmRlcnMuZWRnZXNbMF0ubm9kZS5saW5lSXRlbXMuZWRnZXNbMF0ubm9kZS5pbWFnZS5vcmlnaW5hbFNyYyk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgRGF0YVRhYmxlRXhhbXBsZShkYXRhKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9fVxyXG4gICAgICA8L1F1ZXJ5PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbi8qPENhcmQ+XHJcbiAgPHA+TGVzIDUwIGRlcm5pw6hyZXMgY29tbWFuZGVzPC9wPlxyXG4gIDxSZXNvdXJjZUxpc3RcclxuICAgIHNob3dIZWFkZXJcclxuICAgIHJlc291cmNlTmFtZT17eyBzaW5ndWxhcjogJ09yZGVyJywgcGx1cmFsOiAnT3JkZXJzJyB9fVxyXG4gICAgaXRlbXM9e2RhdGEub3JkZXJzLmVkZ2VzfVxyXG4gICAgcmVuZGVySXRlbT17aXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IG9yZGVyTmFtZSA9IGl0ZW0ubm9kZS5uYW1lXHJcbiAgICAgIGNvbnN0IG1lZGlhID0gKFxyXG4gICAgICAgIDxUaHVtYm5haWxcclxuICAgICAgICAgIHNvdXJjZT17XHJcbiAgICAgICAgICAgIGl0ZW0ubm9kZS5saW5lSXRlbXMuZWRnZXNbMF1cclxuICAgICAgICAgICAgICA/IGl0ZW0ubm9kZS5saW5lSXRlbXMuZWRnZXNbMF0ubm9kZS5pbWFnZS5vcmlnaW5hbFNyY1xyXG4gICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBwcmljZSA9IGl0ZW0ubm9kZS5uZXRQYXltZW50U2V0LnNob3BNb25leS5hbW91bnQ7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgXHJcbiAgICAgICAgPFJlc291cmNlTGlzdC5JdGVtXHJcbiAgICAgICAgbWVkaWEgPSB7b3JkZXJOYW1lfVxyXG4gICAgICAgICAvLyBpZD17aXRlbS5pZH1cclxuICAgICAgICAgIG1lZGlhPXttZWRpYX1cclxuICAgICAgICAgIC8vYWNjZXNzaWJpbGl0eUxhYmVsPXtgVmlldyBkZXRhaWxzIGZvciAke2l0ZW0udGl0bGV9YH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgLy9zdG9yZS5zZXQoJ2l0ZW0nLCBpdGVtKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0b3JlLnNldCcpXHJcbiAgICAgICAgICAgIC8vcmVkaXJlY3RUb1Byb2R1Y3QoKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFN0YWNrPlxyXG4gICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPHA+e29yZGVyTmFtZX08L3A+XHJcbiAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgPFN0YWNrLkl0ZW0gZmlsbD5cclxuICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0ubm9kZS5pZH1cclxuICAgICAgICAgICAgICAgIDwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPHA+JHtwcmljZX08L3A+XHJcbiAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPHA+RXhwaXJlcyBvbiBSIDwvcD5cclxuICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICA8L1Jlc291cmNlTGlzdC5JdGVtPlxyXG4gICAgICApO1xyXG4gICAgfX1cclxuICAvPlxyXG48L0NhcmQ+XHJcbik7XHJcbn19XHJcbjwvUXVlcnk+XHJcbik7XHJcbn1cclxufSovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNvdXJjZUxpc3RXaXRoT3JkZXJzOyJdLCJzb3VyY2VSb290IjoiIn0=