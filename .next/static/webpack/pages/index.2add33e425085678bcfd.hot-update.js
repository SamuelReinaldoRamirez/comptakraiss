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

function callGetStateOrder() {
  console.log("axios cal get state order");
  axios__WEBPACK_IMPORTED_MODULE_15___default.a.get("https://" + "bb50b25f12bb" + ".ngrok.io/getStateOrder", {
    headers: {
      "Content-Type": 'application/json'
    }
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
      rows[index] = [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_selectdrop__WEBPACK_IMPORTED_MODULE_14__["default"], {
        id: index
      })].concat(part);
    }, rows);
    var coloneDesEtatsASetter = getCol(rows, 0);
    var coloneDesNamesIds = getCol(rows, 1);
    var rowsFromDB = [];
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRPcmRlcnMuanMiXSwibmFtZXMiOlsiR0VUX09SREVSU19CWV9JRCIsImdxbCIsInJldG91ckR1R2V0IiwiY2FsbEdldCIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsImdldCIsIktFWV9OR1JPS0JBQ0siLCJoZWFkZXJzIiwidGhlbiIsInJlc3VsdCIsImRhdGEiLCJjYWxsR2V0U3RhdGVPcmRlciIsImdldENvbCIsIm1hdHJpeCIsImNvbCIsImNvbHVtbiIsImkiLCJsZW5ndGgiLCJwdXNoIiwiRGF0YVRhYmxlRXhhbXBsZSIsIml0ZW1zIiwib3JkZXJzIiwiZWRnZXMiLCJpdGVtc1RvTm9kZSIsImN1cnNvciIsIm5vZGUiLCJub2RlVG9Sb3dzIiwiYnVpbGRpbmdSYXciLCJPYmplY3QiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpbmRleCIsImNvbmNhdCIsInJvd3MiLCJtYXAiLCJ2YWx1ZSIsImtleSIsImluaXRSb3dzIiwicGFydCIsImNvbG9uZURlc0V0YXRzQVNldHRlciIsImNvbG9uZURlc05hbWVzSWRzIiwicm93c0Zyb21EQiIsInJldG91ckR1Q2FsbEdldCIsIlJlc291cmNlTGlzdFdpdGhPcmRlcnMiLCJsb2FkaW5nIiwiZXJyb3IiLCJtZXNzYWdlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLGdCQUFnQixHQUFHQyxrREFBSCxtQkFBdEI7QUFrQ0EsSUFBSUMsV0FBVyxHQUFHLEVBQWxCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0MsR0FBUixDQUFZTyxJQUFaO0FBQ0FSLGlCQUFPLENBQUNDLEdBQVIsQ0FBWU8sSUFBSSxDQUFDVyxNQUFMLENBQVlDLEtBQXhCLEVBSjZCLENBSzdCOztBQUVBLGlCQUNFSCxnQkFBZ0IsQ0FBQ1QsSUFBRCxDQURsQjtBQUdEO0FBWEgsUUFERjtBQWVEOzs7O0VBbEJrQ3NDLDZDQUFLLENBQUNDLFM7QUFxQjNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFZUwscUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmFkZDMzZTQyNTA4NTY3OGJjZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XHJcbmltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBQYWdlLFxyXG4gIERhdGFUYWJsZSxcclxuICBQYWdpbmF0aW9uLFxyXG4gIEJ1dHRvblxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucyc7XHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcclxuaW1wb3J0IFNlbGVjdCBmcm9tICcuL3NlbGVjdGRyb3AnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcblxyXG5jb25zdCBHRVRfT1JERVJTX0JZX0lEID0gZ3FsYFxyXG5xdWVyeSB7XHJcbiAgb3JkZXJzKGZpcnN0OiA1MCkge1xyXG4gICAgZWRnZXMge1xyXG4gICAgICBjdXJzb3JcclxuICAgICAgbm9kZSB7XHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIGVtYWlsXHJcbiAgICAgICAgY3JlYXRlZEF0XHJcbiAgICAgICAgZnVsZmlsbG1lbnRze1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIHRyYWNraW5nSW5mb3tcclxuICAgICAgICAgICAgY29tcGFueVxyXG4gICAgICAgICAgICBudW1iZXJcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVzdGltYXRlZERlbGl2ZXJ5QXRcclxuICAgICAgICAgIGRlbGl2ZXJlZEF0XHJcbiAgICAgICAgICBkaXNwbGF5U3RhdHVzXHJcbiAgICAgICAgICBzdGF0dXNcclxuICAgICAgICB9XHJcbiAgICAgICAgc2hpcHBpbmdMaW5le1xyXG4gICAgICAgICAgY2FycmllcklkZW50aWZpZXJcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VzdG9tZXJ7XHJcbiAgICAgICAgICBmaXJzdE5hbWVcclxuICAgICAgICAgIGxhc3ROYW1lXHJcbiAgICAgICAgICBlbWFpbFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufWA7XHJcblxyXG52YXIgcmV0b3VyRHVHZXQgPSBbXTtcclxuXHJcbi8qbGV0IEF1dGhVc2VyID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICByZXR1cm4gZ29vZ2xlLmxvZ2luKGRhdGEudXNlcm5hbWUsIGRhdGEucGFzc3dvcmQpLnRoZW4odG9rZW4gPT4geyByZXR1cm4gdG9rZW4gfSApXHJcbiB9XHJcbiBsZXQgdXNlclRva2VuID0gYXdhaXQgQXV0aFVzZXIoZGF0YSlcclxuIGNvbnNvbGUubG9nKHVzZXJUb2tlbikqL1xyXG5cclxuLyogbGV0IGNhbGxHZXQgPSBmdW5jdGlvbigpe1xyXG4gICBjb25zb2xlLmxvZyhcImF4aW9zXCIpIFxyXG4gdmFyIHJldG91ckRlRmluO1xyXG4gcmV0b3VyRHVHZXQgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL1wiK0tFWV9OR1JPS0JBQ0srXCIubmdyb2suaW8vZ2V0U3RhdGVPcmRlclwiLCB7aGVhZGVyczoge1wiQ29udGVudC1UeXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG4gLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgIGNvbnNvbGUubG9nKFwicmVzdWx0IGRhbnMgbGUgdGhlbiBkYW5zIGxlIGNhbGxcIilcclxuICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpXHJcbiAgIHJldG91ckRlRmluID0gcmVzdWx0LmRhdGFcclxuICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gfSlcclxuIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKVxyXG4vLyByZXRvdXJEdUdldCA9IGF4aW9zLmdldChcImh0dHBzOi8vXCIrS0VZX05HUk9LQkFDSytcIi5uZ3Jvay5pby9nZXRTdGF0ZU9yZGVyXCIsIHtoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nfX0pLnZhbHVlLmRhdGFcclxuY29uc29sZS5sb2coXCJyZXN1bHQgw6AgbGEgZmluIGR1IGNhbGxcIilcclxuY29uc29sZS5sb2cocmV0b3VyRGVGaW4pIFxyXG5yZXR1cm4gcmV0b3VyRGVGaW5cclxufSovXHJcblxyXG4vKmFzeW5jIGZ1bmN0aW9uIGNhbGxHZXQoKXtcclxuICBjb25zb2xlLmxvZyhcImF4aW9zXCIpIFxyXG4gIHZhciByZXRvdXJEZUZpbjtcclxuICByZXRvdXJEdUdldCA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vXCIrS0VZX05HUk9LQkFDSytcIi5uZ3Jvay5pby9nZXRTdGF0ZU9yZGVyXCIsIHtoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBkYW5zIGxlIHRoZW4gZGFucyBsZSBjYWxsXCIpXHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSlcclxuICAgIHJldG91ckRlRmluID0gcmVzdWx0LmRhdGFcclxuICAgIHJldHVybiByZXN1bHQuZGF0YTtcclxuICB9KVxyXG4gIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKVxyXG4gLy8gcmV0b3VyRHVHZXQgPSBheGlvcy5nZXQoXCJodHRwczovL1wiK0tFWV9OR1JPS0JBQ0srXCIubmdyb2suaW8vZ2V0U3RhdGVPcmRlclwiLCB7aGVhZGVyczoge1wiQ29udGVudC1UeXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJ319KS52YWx1ZS5kYXRhXHJcbiBjb25zb2xlLmxvZyhcInJlc3VsdCDDoCBsYSBmaW4gZHUgY2FsbFwiKVxyXG4gY29uc29sZS5sb2cocmV0b3VyRGVGaW4pIFxyXG4gcmV0dXJuIHJldG91ckRlRmluXHJcbn0qL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNhbGxHZXQoKSB7XHJcbiAgY29uc29sZS5sb2coXCJheGlvc1wiKVxyXG4gIGF4aW9zLmdldChcImh0dHBzOi8vXCIgKyBLRVlfTkdST0tCQUNLICsgXCIubmdyb2suaW8vZ2V0U3RhdGVPcmRlclwiLCB7IGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nIH0gfSlcclxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJycnJ0XCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKVxyXG4gICAgICByZXR1cm4gcmVzdWx0LmRhdGFcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGxHZXRTdGF0ZU9yZGVyKCkge1xyXG4gIGNvbnNvbGUubG9nKFwiYXhpb3MgY2FsIGdldCBzdGF0ZSBvcmRlclwiKVxyXG4gIGF4aW9zLmdldChcImh0dHBzOi8vXCIgKyBLRVlfTkdST0tCQUNLICsgXCIubmdyb2suaW8vZ2V0U3RhdGVPcmRlclwiLCB7IGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nIH0gfSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldENvbChtYXRyaXgsIGNvbCkge1xyXG4gIHZhciBjb2x1bW4gPSBbXTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdHJpeC5sZW5ndGg7IGkrKykge1xyXG4gICAgY29sdW1uLnB1c2gobWF0cml4W2ldW2NvbF0pO1xyXG4gIH1cclxuICByZXR1cm4gY29sdW1uO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gRGF0YVRhYmxlRXhhbXBsZShkYXRhKSB7XHJcbiAgY29uc3QgaXRlbXMgPSBkYXRhLm9yZGVycy5lZGdlcztcclxuICBjb25zb2xlLmxvZyhcImFscGhhIHBoYXNlXCIpXHJcbiAgY2FsbEdldCgpXHJcbiAgLy9jb25zb2xlLmxvZyhjYWxsR2V0KCkpXHJcbiAgLy9jb25zb2xlLmxvZygoKSA9PiBjYWxsR2V0KCkpXHJcblxyXG5cclxuICBmdW5jdGlvbiBpdGVtc1RvTm9kZSh7IGN1cnNvciwgbm9kZSB9KSB7XHJcbiAgICByZXR1cm4geyBub2RlIH0ubm9kZVxyXG4gIH07XHJcblxyXG5cclxuICBmdW5jdGlvbiBub2RlVG9Sb3dzKG5vZGUsIGJ1aWxkaW5nUmF3KSB7XHJcbiAgICAvKmNvbnNvbGUubG9nKFwibm9kZVwiKVxyXG4gICAgY29uc29sZS5sb2cobm9kZSlcclxuICAgIGNvbnNvbGUubG9nKCdkYW5zIGxhIGxhbWJkYSBwcm9mb25kZScpKi9cclxuICAgIE9iamVjdC5lbnRyaWVzKG5vZGUpLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAvKmNvbnNvbGUubG9nKGVsZW1lbnRbMF0gIT09ICdfX3R5cGVuYW1lJylcclxuICAgICAgY29uc29sZS5sb2coZWxlbWVudFswXSAhPSAnX190eXBlbmFtZScpXHJcbiAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnRbMF0pKi9cclxuXHJcbiAgICAgIGlmIChlbGVtZW50WzBdICE9PSAnX190eXBlbmFtZScpIHtcclxuICAgICAgICAvKiBjb25zb2xlLmxvZyhidWlsZGluZ1JhdylcclxuICAgICAgICAgY29uc29sZS5sb2coW2VsZW1lbnRbMV1dKVxyXG4gICAgICAgICBjb25zb2xlLmxvZyhidWlsZGluZ1Jhdy5jb25jYXQoW2VsZW1lbnRbMV1dKSlcclxuICAgICAgICAgY29uc29sZS5sb2coJ19fX19fX19fX19fXycpKi9cclxuICAgICAgICBidWlsZGluZ1JhdyA9ICh0eXBlb2YgZWxlbWVudFsxXSA9PT0gJ29iamVjdCcgJiYgZWxlbWVudFsxXSAhPT0gbnVsbCkgPyBub2RlVG9Sb3dzKGVsZW1lbnRbMV0sIGJ1aWxkaW5nUmF3KSA6IGJ1aWxkaW5nUmF3LmNvbmNhdChbZWxlbWVudFsxXV0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBidWlsZGluZ1JhdztcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuICAvKiBjb25zb2xlLmxvZygnaXRlbXMubWFwKGl0ZW1zVG9Ob2RlKScpXHJcbiAgIGNvbnNvbGUubG9nKGl0ZW1zLm1hcChpdGVtc1RvTm9kZSkpKi9cclxuICB2YXIgcm93cyA9IFtdO1xyXG4gIGl0ZW1zLm1hcChpdGVtc1RvTm9kZSkuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xyXG4gICAgLyogY29uc29sZS5sb2coJ2tleSx2YWx1ZScpXHJcbiAgICAgY29uc29sZS5sb2coa2V5KVxyXG4gICAgIGNvbnNvbGUubG9nKHZhbHVlKSovXHJcbiAgICByb3dzW2tleV0gPSBub2RlVG9Sb3dzKHZhbHVlLCBbXSlcclxuICB9KVxyXG5cclxuICBmdW5jdGlvbiBpbml0Um93cyhkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZygnSW5pdCByb3dzJylcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICByb3dzLmZvckVhY2goZnVuY3Rpb24gKHBhcnQsIGluZGV4KSB7XHJcbiAgICAgIHJvd3NbaW5kZXhdID0gWzxTZWxlY3QgaWQ9e2luZGV4fT48L1NlbGVjdD5dLmNvbmNhdChwYXJ0KTtcclxuICAgIH0sIHJvd3MpO1xyXG4gIFxyXG4gICAgdmFyIGNvbG9uZURlc0V0YXRzQVNldHRlciA9IGdldENvbChyb3dzLCAwKVxyXG4gICAgdmFyIGNvbG9uZURlc05hbWVzSWRzID0gZ2V0Q29sKHJvd3MsIDEpXHJcbiAgXHJcbiAgICB2YXIgcm93c0Zyb21EQiA9IFtdO1xyXG4gIH1cclxuXHJcbiAgY2FsbEdldFN0YXRlT3JkZXIoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2FsbCBnZXQgc3RhdGUgb3JkZXIgY2FsbGJhY2tcIilcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKVxyXG4gICAgaW5pdFJvd3MocmVzdWx0LmRhdGEpXHJcbiAgfSlcclxuXHJcbiAgLyoqIFNBTUlBIERFQlVUXHJcbiAgcm93cy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJ0LCBpbmRleCkge1xyXG4gICAgLy9heGlvcy5nZXRFdGF0IGR1IHNlbGVjdCDDoCBzZXR0ZXIgKGVuIGZvbmN0aW9uIGRlIGxhIHBhZ2UgZXQgZHUgdHJpIChsZSB0cmkgZG9pdCBldHJlIGdsb2JhbCBkYW5zIHVuIHByZW1pZXIgdGVtcHMgZXQgcHVpcyBvbiBwb3VycmEgZmFpcmUgdW4gdHJpIHN1ciBsZXMgc2V1bHMgw6lsw6ltZW50cyBkZSBsYSBwYWdlIGF1c3NpKSlcclxuICAgIHJvd3NbaW5kZXhdID0gWzxTZWxlY3QgaWQ9e2luZGV4fT48L1NlbGVjdD5dLmNvbmNhdChwYXJ0KTtcclxuICB9LCByb3dzKTtcclxuXHJcbiAgY29uc29sZS5sb2coJ3Jvd3MnKTtcclxuICBjb25zb2xlLmxvZyhyb3dzKTtcclxuXHJcbiAgLy9vbiBuZSB0aWVudCBwYXMgZW5jb3JlIGNvbXB0ZSBkZSBsYSBwYWdpbmF0aW9uXHJcbiAgdmFyIGNvbG9uZURlc0V0YXRzQVNldHRlciA9IGdldENvbChyb3dzLCAwKVxyXG4gIGNvbnNvbGUubG9nKCd2aWRlPycpXHJcbiAgY29uc29sZS5sb2coY29sb25lRGVzRXRhdHNBU2V0dGVyKVxyXG4gIHZhciBjb2xvbmVEZXNOYW1lc0lkcyA9IGdldENvbChyb3dzLCAxKVxyXG5cclxuICB2YXIgcm93c0Zyb21EQiA9IFtdO1xyXG4gIGNvbnNvbGUubG9nKHJvd3NGcm9tREIpXHJcbiAgY29uc29sZS5sb2coXCJiZXRhIHBoYXNlXCIpXHJcbiAgU0FNSUEgRklOICoqL1xyXG4gIFxyXG4gIC8qbGV0IEF1dGhVc2VyID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgcmV0dXJuIGdvb2dsZS5sb2dpbihkYXRhLnVzZXJuYW1lLCBkYXRhLnBhc3N3b3JkKS50aGVuKHRva2VuID0+IHsgcmV0dXJuIHRva2VuIH0gKVxyXG4gIH1cclxuICBsZXQgdXNlclRva2VuID0gYXdhaXQgQXV0aFVzZXIoZGF0YSlcclxuICBjb25zb2xlLmxvZyh1c2VyVG9rZW4pKi9cclxuXHJcblxyXG4gIGNvbnNvbGUubG9nKGNhbGxHZXQoKSlcclxuICB2YXIgcmV0b3VyRHVDYWxsR2V0O1xyXG4gIC8qY29uc29sZS5sb2coY2FsbEdldCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImxlIHJlc3VsdCBkYW5zIGxlIHRoZW5cIilcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCkgLy8gXCJTb21lIFVzZXIgdG9rZW5cIlxyXG4gICAgcmV0b3VyRHVDYWxsR2V0ID0gcmVzdWx0O1xyXG4gICAgY29uc29sZS5sb2coJ3Jlc29sZXZlZWUnKVxyXG4gICAgLy9yZXNvbHZlKHJlc3VsdClcclxuICAgIHJldHVybiByZXN1bHRcclxuIH0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgY29uc29sZS5sb2coXCJsZSByZXN1bHQgZGFucyBsZSB0aGVuXCIpXHJcbiAgY29uc29sZS5sb2cocmVzdWx0KSAvLyBcIlNvbWUgVXNlciB0b2tlblwiXHJcbiAgcmV0b3VyRHVDYWxsR2V0ID0gcmVzdWx0O1xyXG4gIHJldHVybiByZXN1bHRcclxufSkpKi9cclxuICBjb25zb2xlLmxvZyhcInJldG91ckR1Q2FsbEdldFwiKVxyXG4gIGNvbnNvbGUubG9nKHJldG91ckR1Q2FsbEdldClcclxuICAvKnJldG91ckR1Q2FsbEdldC5mb3JFYWNoKCh2YWx1ZSwga2V5KT0+IHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKVxyXG5cclxuICAgIHJvd3NGcm9tREJba2V5XSA9IG5vZGVUb1Jvd3ModmFsdWUsW10pIFxyXG4gICB9KSovXHJcbiAgY29uc29sZS5sb2coXCJyb3dzRnJvbURCXCIpXHJcbiAgY29uc29sZS5sb2cocm93c0Zyb21EQilcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZSBmdWxsV2lkdGg9XCJ0cnVlXCI+XHJcbiAgICAgIDxDYXJkPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gY2FsbEdldCgpfT5FeGFtcGxlIGJ1dHRvbjwvQnV0dG9uPlxyXG4gICAgICAgIHsvL3JldG91ckR1R2V0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxEYXRhVGFibGVcclxuICAgICAgICAgIGNvbHVtbkNvbnRlbnRUeXBlcz17W1xyXG4gICAgICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgICAgICd0ZXh0JyxcclxuICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgICAgICd0ZXh0JyxcclxuICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgICAgaGVhZGluZ3M9e1tcclxuICAgICAgICAgICAgJ2lkJyxcclxuICAgICAgICAgICAgJ25hbWUnLFxyXG4gICAgICAgICAgICAnZW1haWwnLFxyXG4gICAgICAgICAgICAnamNwJyxcclxuICAgICAgICAgICAgJ2pjcCcsXHJcbiAgICAgICAgICAgICdqY3AnLFxyXG4gICAgICAgICAgICAnamNwJyxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgICAvL2lsIGZhdXQgcsOpY3Vww6lyZXIgbGVzIG9yZGVyIHN0YXRlcyBkZSBsYSBkYiBldCBwZXV0IGV0cmUgbGVzIG1ldHRyZSBlbiBjYWNoZSBjYSBzZXJhaXQgY29vbFxyXG4gICAgICAgICAgcm93cz17cm93c31cclxuICAgICAgICAvLyc8aW1nIHNyYz1cIicrZGF0YSsnXCI+J1xyXG5cclxuICAgICAgICAvKnNvdXJjZT17XHJcbiAgICAgICAgICBpdGVtLm5vZGUubGluZUl0ZW1zLmVkZ2VzWzBdXHJcbiAgICAgICAgICAgID8gaXRlbS5ub2RlLmxpbmVJdGVtcy5lZGdlc1swXS5ub2RlLmltYWdlLm9yaWdpbmFsU3JjXHJcbiAgICAgICAgICAgIDogJydcclxuICAgICAgICB9Ki9cclxuICAgICAgICAvL3RvdGFscz17WycnLCAnJywgJycsIDI1NSwgJyQxNTUsODMwLjAwJ119XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9QYWdlPlxyXG5cclxuXHJcbiAgKTtcclxufVxyXG5cclxuY2xhc3MgUmVzb3VyY2VMaXN0V2l0aE9yZGVycyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxRdWVyeSBxdWVyeT17R0VUX09SREVSU19CWV9JRH0+XHJcbiAgICAgICAgeyh7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0pID0+IHtcclxuICAgICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5n4oCmPC9kaXY+O1xyXG4gICAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEub3JkZXJzLmVkZ2VzKTtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YS5vcmRlcnMuZWRnZXNbMF0ubm9kZS5saW5lSXRlbXMuZWRnZXNbMF0ubm9kZS5pbWFnZS5vcmlnaW5hbFNyYyk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgRGF0YVRhYmxlRXhhbXBsZShkYXRhKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9fVxyXG4gICAgICA8L1F1ZXJ5PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbi8qPENhcmQ+XHJcbiAgPHA+TGVzIDUwIGRlcm5pw6hyZXMgY29tbWFuZGVzPC9wPlxyXG4gIDxSZXNvdXJjZUxpc3RcclxuICAgIHNob3dIZWFkZXJcclxuICAgIHJlc291cmNlTmFtZT17eyBzaW5ndWxhcjogJ09yZGVyJywgcGx1cmFsOiAnT3JkZXJzJyB9fVxyXG4gICAgaXRlbXM9e2RhdGEub3JkZXJzLmVkZ2VzfVxyXG4gICAgcmVuZGVySXRlbT17aXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IG9yZGVyTmFtZSA9IGl0ZW0ubm9kZS5uYW1lXHJcbiAgICAgIGNvbnN0IG1lZGlhID0gKFxyXG4gICAgICAgIDxUaHVtYm5haWxcclxuICAgICAgICAgIHNvdXJjZT17XHJcbiAgICAgICAgICAgIGl0ZW0ubm9kZS5saW5lSXRlbXMuZWRnZXNbMF1cclxuICAgICAgICAgICAgICA/IGl0ZW0ubm9kZS5saW5lSXRlbXMuZWRnZXNbMF0ubm9kZS5pbWFnZS5vcmlnaW5hbFNyY1xyXG4gICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBwcmljZSA9IGl0ZW0ubm9kZS5uZXRQYXltZW50U2V0LnNob3BNb25leS5hbW91bnQ7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgXHJcbiAgICAgICAgPFJlc291cmNlTGlzdC5JdGVtXHJcbiAgICAgICAgbWVkaWEgPSB7b3JkZXJOYW1lfVxyXG4gICAgICAgICAvLyBpZD17aXRlbS5pZH1cclxuICAgICAgICAgIG1lZGlhPXttZWRpYX1cclxuICAgICAgICAgIC8vYWNjZXNzaWJpbGl0eUxhYmVsPXtgVmlldyBkZXRhaWxzIGZvciAke2l0ZW0udGl0bGV9YH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgLy9zdG9yZS5zZXQoJ2l0ZW0nLCBpdGVtKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0b3JlLnNldCcpXHJcbiAgICAgICAgICAgIC8vcmVkaXJlY3RUb1Byb2R1Y3QoKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFN0YWNrPlxyXG4gICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPHA+e29yZGVyTmFtZX08L3A+XHJcbiAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgPFN0YWNrLkl0ZW0gZmlsbD5cclxuICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0ubm9kZS5pZH1cclxuICAgICAgICAgICAgICAgIDwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPHA+JHtwcmljZX08L3A+XHJcbiAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPHA+RXhwaXJlcyBvbiBSIDwvcD5cclxuICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICA8L1Jlc291cmNlTGlzdC5JdGVtPlxyXG4gICAgICApO1xyXG4gICAgfX1cclxuICAvPlxyXG48L0NhcmQ+XHJcbik7XHJcbn19XHJcbjwvUXVlcnk+XHJcbik7XHJcbn1cclxufSovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNvdXJjZUxpc3RXaXRoT3JkZXJzOyJdLCJzb3VyY2VSb290IjoiIn0=