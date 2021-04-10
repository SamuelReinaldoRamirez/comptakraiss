module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ResourceList.js":
/*!************************************!*\
  !*** ./components/ResourceList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store-js */ "store-js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopify/app-bridge/actions */ "@shopify/app-bridge/actions");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopify/app-bridge-react */ "@shopify/app-bridge-react");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_7__);



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const GET_PRODUCTS_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
  query getProducts($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Product {
        title
        handle
        descriptionHtml
        id
        images(first: 1) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
        variants(first: 1) {
          edges {
            node {
              price
              id
            }
          }
        }
      }
    }
  }
`;

class ResourceListWithProducts extends react__WEBPACK_IMPORTED_MODULE_5___default.a.Component {
  render() {
    const app = this.context;

    const redirectToProduct = () => {
      const redirect = _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_6__["Redirect"].create(app);
      redirect.dispatch(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_6__["Redirect"].Action.APP, '/edit-products');
    };

    const twoWeeksFromNow = new Date(Date.now() + 12096e5).toDateString();
    return (
      /*#__PURE__*/
      //<Query query={GET_PRODUCTS_BY_ID}>
      Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: GET_PRODUCTS_BY_ID,
        variables: {
          ids: store_js__WEBPACK_IMPORTED_MODULE_4___default.a.get('ids')
        },
        children: ({
          data,
          loading,
          error
        }) => {
          if (loading) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            children: "Loading\u2026"
          });
          if (error) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            children: error.message
          });
          console.log(data);
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Card"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["ResourceList"], {
              showHeader: true,
              resourceName: {
                singular: 'Product',
                plural: 'Products'
              },
              items: data.nodes,
              renderItem: item => {
                const media = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Thumbnail"], {
                  source: item.images.edges[0] ? item.images.edges[0].node.originalSrc : '',
                  alt: item.images.edges[0] ? item.images.edges[0].node.altText : ''
                });

                const price = item.variants.edges[0].node.price;
                return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["ResourceList"].Item, {
                  id: item.id,
                  media: media,
                  accessibilityLabel: `View details for ${item.title}`,
                  onClick: () => {
                    store_js__WEBPACK_IMPORTED_MODULE_4___default.a.set('item', item);
                    console.log('store.set');
                    redirectToProduct();
                  },
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"], {
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"].Item, {
                      fill: true,
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TextStyle"], {
                          variation: "strong",
                          children: item.title
                        })
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"].Item, {
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
                        children: ["$", price]
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"].Item, {
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
                        children: ["Expires on ", twoWeeksFromNow, " "]
                      })
                    })]
                  })
                });
              }
            })
          });
        }
      })
    );
  }

}

_defineProperty(ResourceListWithProducts, "contextType", _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_7__["Context"]);

/* harmony default export */ __webpack_exports__["default"] = (ResourceListWithProducts);

/***/ }),

/***/ "./components/getOrders.js":
/*!*********************************!*\
  !*** ./components/getOrders.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopify/app-bridge/actions */ "@shopify/app-bridge/actions");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopify/app-bridge-react */ "@shopify/app-bridge-react");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _selectdrop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./selectdrop */ "./components/selectdrop.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);











const GET_ORDERS_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
query {
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
        createdAt
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
        shippingLine{
          carrierIdentifier
        }
      }
    }
  }
}`;
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
  axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("https://" + "7f71e23d489f" + ".ngrok.io/getStateOrder", {
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
    return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("https://" + "7f71e23d489f" + ".ngrok.io/getStateOrder", {
      headers: {
        "Content-Type": 'application/json'
      }
    });
  }

  const items = data.orders.edges;
  console.log("alpha phase");
  callGet(); //console.log(callGet())
  //console.log(() => callGet())

  function itemsToNode({
    cursor,
    node
  }) {
    return {
      node
    }.node;
  }

  ;

  function nodeToRows(node, buildingRaw) {
    /*console.log("node")
    console.log(node)
    console.log('dans la lambda profonde')*/
    Object.entries(node).forEach((element, index) => {
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
  items.map(itemsToNode).forEach((value, key) => {
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
      var nomPrenomCustomer = part[1] == null ? null : part[1] + " " + part[2];
      nomPrenomCustomer == null ? null : (part.splice(2, 1), part[2] = part[3], part.splice(3, 1));
      part[1] = nomPrenomCustomer;
      part.splice(3, 0, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_selectdrop__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Page"], {
    fullWidth: "true",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        onClick: () => callGet(),
        children: "Example button"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["DataTable"], {
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

class ResourceListWithOrders extends react__WEBPACK_IMPORTED_MODULE_4___default.a.Component {
  render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
      query: GET_ORDERS_BY_ID,
      children: ({
        data,
        loading,
        error
      }) => {
        console.log("DATA");
        if (loading) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          children: "Loading\u2026"
        });
        if (error) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          children: error.message
        });
        console.log(data);
        console.log(data.orders.edges); //console.log(data.orders.edges[0].node.lineItems.edges[0].node.image.originalSrc);

        return DataTableExample(data);
      }
    });
  }

}
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

/***/ }),

/***/ "./components/selectdrop.js":
/*!**********************************!*\
  !*** ./components/selectdrop.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store-js */ "store-js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_4__);



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/*const dotenv = require('dotenv');
const next = require('next');
dotenv.config();
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const { REACT_APP_NGROKBACK } = process.env;
const handle = app.getRequestHandler();

console.log(process.env)
app.prepare().then(() => {
  console.log("in app prepare")
  console.log(REACT_APP_NGROKBACK)
});*/
//const {REACT_APP_ngrokBack} = process.env;
//const ngrokBack = REACT_APP_ngrokBack;

console.log('cAcAAAAAAAAAAAAAAAAAAAAA');
console.log("7f71e23d489f"); //class Select extends PureComponent {

class Select extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      options: [{
        name: 'Select…',
        value: null
      }, {
        name: 'A',
        value: 444
      }, {
        name: 'B',
        value: 333
      }, {
        name: 'C',
        value: 222
      }],
      value: '?',
      valueDeDbState: ''
    });

    _defineProperty(this, "handleChange", event => {
      this.setState({
        value: event.target.value
      });
      console.log("azertyuiop");
      console.log(this);
      console.log(this.state.value);
      console.log(event.target.value);
      console.log(this.props); //L4ERREUR EST ICI, il faut arreter d'utiliser ValueDeDb de props mais utiliser ValueDeDBState du State :)

      /* Object.defineProperty(this, 'state', {
         valueDeDbState: event.target.value,
         writable: false
       });*/
      //exemple sur lequel s'appuyer pour setter le state

      /*  this.setState(prevState => {
          let jasper = Object.assign({}, prevState.jasper);  // creating copy of state variable jasper
          jasper.name = 'someothername';                     // update the name property, assign a new value                 
          return { jasper };                                 // return new object jasper object
        })*/

      console.log(this.state.valueDeDbState);
      this.state.valueDeDbState = event.target.value;
      this.state.value = event.target.value;
      console.log(this.state.valueDeDbState); //this.props.valueDeDB = event.target.value

      store_js__WEBPACK_IMPORTED_MODULE_4___default.a.set('etat' + this.props.id, {
        id: this.props.id,
        choix: event.target.value
      });
      var orderState = event.target.value == "Select…" ? null : event.target.value;
      console.log(orderState); //console.log(REACT_APP_ngrokBack)
      //l'id qu'on envoie en params est l'id du select dans la page concernée. il faudra le faire correspondre au vrai ID en fonction de la pagination et du tri de la datatable

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.put( //"https://547f417cc329.ngrok.io/handle", 
      "https://" + "7f71e23d489f" + ".ngrok.io/handle", {
        "order_state": orderState
      }, {
        params: {
          id: this.props.id + 1
        },
        headers: {
          "Content-Type": 'application/json'
        }
      }); //axios.put("https://"+REACT_APP_ngrokBack+".ngrok.io/handle", {})
      // "proxy": "http://${REACT_APP_ngrokBack}.ngrok.io",
      //axios.put("localhost:5000/handle", {})

      /*.then(function(response){
        console.log('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy')
        console.log(response)
      })*/

      /* var sql = "UPDATE orders SET order_state = 6 WHERE order_id=1";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result.affectedRows + " record(s) updated");
        });*/
    });

    console.log("dans constructeur, pprops puis this");
    console.log(props);
    console.log(this);
    this.state.valueDeDbState = props.valueDeDB;
  }

  render() {
    console.log('render');
    console.log(this.state);
    console.log('value');
    console.log(this.props.valueDeDB);
    console.log(this.state.valueDeDbState);
    var {
      options,
      value
    } = this.state;
    var currentId;
    var etatFromStore; //ici, il faut choisir si value est celui de la bdd (à l'initialisation), ou celui qu'on vien de choisir,( apres un put)
    //value = this.props.valueDeDB == null ? 9949 : this.props.valueDeDB;

    console.log(this.state.valueDeDbState == null || this.state.valueDeDbState == 'Select…');
    console.log(this.state.valueDeDbState == null);
    console.log(this.state.valueDeDbState == 'Select…');
    console.log( true || false);
    value = this.state.valueDeDbState == null || this.state.valueDeDbState == 'Select…' ? 9949 : this.state.valueDeDbState;
    var val;
    currentId = this.props.id, etatFromStore = store_js__WEBPACK_IMPORTED_MODULE_4___default.a.get('etat' + currentId), val = value; //pour setter la ligne 1 (pas la 0) à undefined
    //etatFromStore.id == 1 ? etatFromStore = undefined : '',

    etatFromStore == undefined ? store_js__WEBPACK_IMPORTED_MODULE_4___default.a.set('etat' + currentId, {
      id: currentId,
      choix: val
    }) : val = etatFromStore.choix == null ? 9949 : etatFromStore.choix; //console.log('etat' + currentId),
    //console.log(etatFromStore)
    //console.log(etatFromStore == undefined ? 'pas d\'id' : etatFromStore.id),
    // console.log('this')
    //console.log(this)
    // <select onChange={this.handleChange} value={value}>

    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("select", {
        onChange: this.handleChange,
        value: val,
        children: options.map(item =>
        /*#__PURE__*/

        /*console.log('etat'+currentId),
        console.log(etatFromStore),
        console.log(etatFromStore == undefined),
        console.log(etatFromStore == undefined ? 'pas d\'id' : etatFromStore.id),
        console.log(etatFromStore == undefined ? 'pas de choix choisi' : etatFromStore.choix),
        */
        //console.log("option"),
        //console.log(item),
        //console.log({value}),

        /*console.log(this),*/
        Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: item.value,
          children: item.name
        }, item.value))
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("h1", {
        children: ["Favorite letter: ", value]
      })]
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Select);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/app-bridge-react */ "@shopify/app-bridge-react");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! store-js */ "store-js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ResourceList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ResourceList */ "./components/ResourceList.js");
/* harmony import */ var _components_getOrders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/getOrders */ "./components/getOrders.js");


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 //const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

class Index extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      open: false
    });
  }

  render() {
    const emptyState = !store_js__WEBPACK_IMPORTED_MODULE_5___default.a.get('ids');
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_getOrders__WEBPACK_IMPORTED_MODULE_7__["default"], {});
  }
  /*return (
    <Page>
      <TitleBar
        title="Sample App"
        primaryAction={{
          content: 'Select products',
          //comment faire 2 lambdas à la suite pour avoir aussi le console log?
          onAction: () => this.setState({ open: true }),
          //onAction: () => console.log('clickedd'),
        }}
      />
      <ResourcePicker
        resourceType="Product"
        showVariants={false}
        open={this.state.open}
        onSelection={(resources) => this.handleSelection(resources)}
        onCancel={() => this.setState({ open: false })}
      />
        <Layout>
          <EmptyState
            heading="Select products to start"
            action={{
              content: 'Select products',
              onAction: () => this.setState({ open: true }),
            }}
            //image={img}
          >
            <p>Select products and change their price temporarily</p>
          </EmptyState>
        </Layout>
        {emptyState ? (
          <ResourceListWithOrders />
          ) : (
          //<ResourceListWithProducts />
          <ResourceListWithOrders />
      )}
    </Page>
  );
  }
  handleSelection = (resources) => {
  const idsFromResources = resources.selection.map((product) => product.id);
  this.setState({ open: false })
  console.log(resources)
  console.log(idsFromResources)
  console.log(resources.id)
  store.set('ids', idsFromResources);
  };*/


}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "@shopify/app-bridge-react":
/*!********************************************!*\
  !*** external "@shopify/app-bridge-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/app-bridge-react");

/***/ }),

/***/ "@shopify/app-bridge/actions":
/*!**********************************************!*\
  !*** external "@shopify/app-bridge/actions" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/app-bridge/actions");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "store-js":
/*!***************************!*\
  !*** external "store-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("store-js");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXNvdXJjZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nZXRPcmRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWxlY3Rkcm9wLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYXBvbGxvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdG9yZS1qc1wiIl0sIm5hbWVzIjpbIkdFVF9QUk9EVUNUU19CWV9JRCIsImdxbCIsIlJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVyIiwiYXBwIiwiY29udGV4dCIsInJlZGlyZWN0VG9Qcm9kdWN0IiwicmVkaXJlY3QiLCJSZWRpcmVjdCIsImNyZWF0ZSIsImRpc3BhdGNoIiwiQWN0aW9uIiwiQVBQIiwidHdvV2Vla3NGcm9tTm93IiwiRGF0ZSIsIm5vdyIsInRvRGF0ZVN0cmluZyIsImlkcyIsInN0b3JlIiwiZ2V0IiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJub2RlcyIsIml0ZW0iLCJtZWRpYSIsImltYWdlcyIsImVkZ2VzIiwibm9kZSIsIm9yaWdpbmFsU3JjIiwiYWx0VGV4dCIsInByaWNlIiwidmFyaWFudHMiLCJpZCIsInRpdGxlIiwic2V0IiwiQ29udGV4dCIsIkdFVF9PUkRFUlNfQllfSUQiLCJyZXRvdXJEdUdldCIsImNhbGxHZXQiLCJheGlvcyIsIktFWV9OR1JPS0JBQ0siLCJoZWFkZXJzIiwidGhlbiIsInJlc3VsdCIsImdldENvbCIsIm1hdHJpeCIsImNvbCIsImNvbHVtbiIsImkiLCJsZW5ndGgiLCJwdXNoIiwiRGF0YVRhYmxlRXhhbXBsZSIsImNhbGxHZXRTdGF0ZU9yZGVyIiwiaXRlbXMiLCJvcmRlcnMiLCJpdGVtc1RvTm9kZSIsImN1cnNvciIsIm5vZGVUb1Jvd3MiLCJidWlsZGluZ1JhdyIsIk9iamVjdCIsImVudHJpZXMiLCJmb3JFYWNoIiwiZWxlbWVudCIsImluZGV4IiwiY29uY2F0Iiwicm93cyIsIm1hcCIsInZhbHVlIiwia2V5IiwiaW5pdFJvd3MiLCJwYXJ0Iiwibm9tUHJlbm9tQ3VzdG9tZXIiLCJzcGxpY2UiLCJvcmRlcl9zdGF0ZSIsImNvbG9uZURlc0V0YXRzQVNldHRlciIsImNvbG9uZURlc05hbWVzSWRzIiwicm93c0Zyb21EQiIsInJldG91ckR1Q2FsbEdldCIsIlJlc291cmNlTGlzdFdpdGhPcmRlcnMiLCJTZWxlY3QiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwib3B0aW9ucyIsIm5hbWUiLCJ2YWx1ZURlRGJTdGF0ZSIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJzdGF0ZSIsImNob2l4Iiwib3JkZXJTdGF0ZSIsInB1dCIsInBhcmFtcyIsInZhbHVlRGVEQiIsImN1cnJlbnRJZCIsImV0YXRGcm9tU3RvcmUiLCJ2YWwiLCJ1bmRlZmluZWQiLCJoYW5kbGVDaGFuZ2UiLCJJbmRleCIsIm9wZW4iLCJlbXB0eVN0YXRlIl0sIm1hcHBpbmdzIjoi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QUFBRXdHLFVBQUksRUFBRTtBQUFSLEtBRDBCO0FBQUE7O0FBRWxDdkcsUUFBTSxHQUFHO0FBQ1AsVUFBTXdHLFVBQVUsR0FBRyxDQUFDekYsK0NBQUssQ0FBQ0MsR0FBTixDQUFVLEtBQVYsQ0FBcEI7QUFDQSx3QkFDRSw4REFBQyw2REFBRCxLQURGO0FBRUc7QUFDSDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFyRG9DOztBQXdEckJzRixvRUFBZixFOzs7Ozs7Ozs7OztBQ3BFQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xyXG5pbXBvcnQgeyBDYXJkLFxyXG4gICAgUmVzb3VyY2VMaXN0LFxyXG4gICAgU3RhY2ssXHJcbiAgICBUZXh0U3R5bGUsXHJcbiAgICBUaHVtYm5haWwsIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICdzdG9yZS1qcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zJztcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3QnO1xyXG5cclxuY29uc3QgR0VUX1BST0RVQ1RTX0JZX0lEID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldFByb2R1Y3RzKCRpZHM6IFtJRCFdISkge1xyXG4gICAgbm9kZXMoaWRzOiAkaWRzKSB7XHJcbiAgICAgIC4uLiBvbiBQcm9kdWN0IHtcclxuICAgICAgICB0aXRsZVxyXG4gICAgICAgIGhhbmRsZVxyXG4gICAgICAgIGRlc2NyaXB0aW9uSHRtbFxyXG4gICAgICAgIGlkXHJcbiAgICAgICAgaW1hZ2VzKGZpcnN0OiAxKSB7XHJcbiAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgIG9yaWdpbmFsU3JjXHJcbiAgICAgICAgICAgICAgYWx0VGV4dFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhcmlhbnRzKGZpcnN0OiAxKSB7XHJcbiAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcblxyXG5jbGFzcyBSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIGNvbnRleHRUeXBlID0gQ29udGV4dDtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgYXBwID0gdGhpcy5jb250ZXh0O1xyXG4gICAgY29uc3QgcmVkaXJlY3RUb1Byb2R1Y3QgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlZGlyZWN0ID0gUmVkaXJlY3QuY3JlYXRlKGFwcCk7XHJcbiAgICAgIHJlZGlyZWN0LmRpc3BhdGNoKFxyXG4gICAgICAgIFJlZGlyZWN0LkFjdGlvbi5BUFAsXHJcbiAgICAgICAgJy9lZGl0LXByb2R1Y3RzJyxcclxuICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHR3b1dlZWtzRnJvbU5vdyA9IG5ldyBEYXRlKERhdGUubm93KCkgKyAxMjA5NmU1KS50b0RhdGVTdHJpbmcoKTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAvLzxRdWVyeSBxdWVyeT17R0VUX1BST0RVQ1RTX0JZX0lEfT5cclxuICAgICAgICA8UXVlcnkgcXVlcnk9e0dFVF9QUk9EVUNUU19CWV9JRH0gdmFyaWFibGVzPXt7IGlkczogc3RvcmUuZ2V0KCdpZHMnKSB9fT5cclxuICAgICAgICAgIHsoeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5n4oCmPC9kaXY+O1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICA8UmVzb3VyY2VMaXN0XHJcbiAgICAgICAgICAgICAgICBzaG93SGVhZGVyXHJcbiAgICAgICAgICAgICAgICByZXNvdXJjZU5hbWU9e3sgc2luZ3VsYXI6ICdQcm9kdWN0JywgcGx1cmFsOiAnUHJvZHVjdHMnIH19XHJcbiAgICAgICAgICAgICAgICBpdGVtcz17ZGF0YS5ub2Rlc31cclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBtZWRpYSA9IChcclxuICAgICAgICAgICAgICAgICAgICA8VGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlcy5lZGdlc1swXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5pbWFnZXMuZWRnZXNbMF0ubm9kZS5vcmlnaW5hbFNyY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2VzLmVkZ2VzWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLmltYWdlcy5lZGdlc1swXS5ub2RlLmFsdFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBpdGVtLnZhcmlhbnRzLmVkZ2VzWzBdLm5vZGUucHJpY2U7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFJlc291cmNlTGlzdC5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIG1lZGlhPXttZWRpYX1cclxuICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlMYWJlbD17YFZpZXcgZGV0YWlscyBmb3IgJHtpdGVtLnRpdGxlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlLnNldCgnaXRlbScsIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3RvcmUuc2V0JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RUb1Byb2R1Y3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFN0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbSBmaWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3ByaWNlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5FeHBpcmVzIG9uIHt0d29XZWVrc0Zyb21Ob3d9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jlc291cmNlTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPC9RdWVyeT5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgIGV4cG9ydCBkZWZhdWx0IFJlc291cmNlTGlzdFdpdGhQcm9kdWN0cztcclxuIiwiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAncmVhY3QtYXBvbGxvJztcclxuaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIFBhZ2UsXHJcbiAgRGF0YVRhYmxlLFxyXG4gIFBhZ2luYXRpb24sXHJcbiAgQnV0dG9uXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zJztcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3QnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vc2VsZWN0ZHJvcCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuXHJcbmNvbnN0IEdFVF9PUkRFUlNfQllfSUQgPSBncWxgXHJcbnF1ZXJ5IHtcclxuICBvcmRlcnMoZmlyc3Q6IDUwKSB7XHJcbiAgICBlZGdlcyB7XHJcbiAgICAgIGN1cnNvclxyXG4gICAgICBub2RlIHtcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgY3VzdG9tZXJ7XHJcbiAgICAgICAgICBmaXJzdE5hbWVcclxuICAgICAgICAgIGxhc3ROYW1lXHJcbiAgICAgICAgICBlbWFpbFxyXG4gICAgICAgIH1cclxuICAgICAgICBjcmVhdGVkQXRcclxuICAgICAgICBmdWxmaWxsbWVudHN7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgdHJhY2tpbmdJbmZve1xyXG4gICAgICAgICAgICBjb21wYW55XHJcbiAgICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZXN0aW1hdGVkRGVsaXZlcnlBdFxyXG4gICAgICAgICAgZGVsaXZlcmVkQXRcclxuICAgICAgICAgIGRpc3BsYXlTdGF0dXNcclxuICAgICAgICAgIHN0YXR1c1xyXG4gICAgICAgIH1cclxuICAgICAgICBzaGlwcGluZ0xpbmV7XHJcbiAgICAgICAgICBjYXJyaWVySWRlbnRpZmllclxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufWA7XHJcblxyXG52YXIgcmV0b3VyRHVHZXQgPSBbXTtcclxuXHJcbi8qbGV0IEF1dGhVc2VyID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICByZXR1cm4gZ29vZ2xlLmxvZ2luKGRhdGEudXNlcm5hbWUsIGRhdGEucGFzc3dvcmQpLnRoZW4odG9rZW4gPT4geyByZXR1cm4gdG9rZW4gfSApXHJcbiB9XHJcbiBsZXQgdXNlclRva2VuID0gYXdhaXQgQXV0aFVzZXIoZGF0YSlcclxuIGNvbnNvbGUubG9nKHVzZXJUb2tlbikqL1xyXG5cclxuLyogbGV0IGNhbGxHZXQgPSBmdW5jdGlvbigpe1xyXG4gICBjb25zb2xlLmxvZyhcImF4aW9zXCIpIFxyXG4gdmFyIHJldG91ckRlRmluO1xyXG4gcmV0b3VyRHVHZXQgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL1wiK0tFWV9OR1JPS0JBQ0srXCIubmdyb2suaW8vZ2V0U3RhdGVPcmRlclwiLCB7aGVhZGVyczoge1wiQ29udGVudC1UeXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG4gLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgIGNvbnNvbGUubG9nKFwicmVzdWx0IGRhbnMgbGUgdGhlbiBkYW5zIGxlIGNhbGxcIilcclxuICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpXHJcbiAgIHJldG91ckRlRmluID0gcmVzdWx0LmRhdGFcclxuICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gfSlcclxuIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKVxyXG4vLyByZXRvdXJEdUdldCA9IGF4aW9zLmdldChcImh0dHBzOi8vXCIrS0VZX05HUk9LQkFDSytcIi5uZ3Jvay5pby9nZXRTdGF0ZU9yZGVyXCIsIHtoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nfX0pLnZhbHVlLmRhdGFcclxuY29uc29sZS5sb2coXCJyZXN1bHQgw6AgbGEgZmluIGR1IGNhbGxcIilcclxuY29uc29sZS5sb2cocmV0b3VyRGVGaW4pIFxyXG5yZXR1cm4gcmV0b3VyRGVGaW5cclxufSovXHJcblxyXG4vKmFzeW5jIGZ1bmN0aW9uIGNhbGxHZXQoKXtcclxuICBjb25zb2xlLmxvZyhcImF4aW9zXCIpIFxyXG4gIHZhciByZXRvdXJEZUZpbjtcclxuICByZXRvdXJEdUdldCA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vXCIrS0VZX05HUk9LQkFDSytcIi5uZ3Jvay5pby9nZXRTdGF0ZU9yZGVyXCIsIHtoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBkYW5zIGxlIHRoZW4gZGFucyBsZSBjYWxsXCIpXHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSlcclxuICAgIHJldG91ckRlRmluID0gcmVzdWx0LmRhdGFcclxuICAgIHJldHVybiByZXN1bHQuZGF0YTtcclxuICB9KVxyXG4gIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKVxyXG4gLy8gcmV0b3VyRHVHZXQgPSBheGlvcy5nZXQoXCJodHRwczovL1wiK0tFWV9OR1JPS0JBQ0srXCIubmdyb2suaW8vZ2V0U3RhdGVPcmRlclwiLCB7aGVhZGVyczoge1wiQ29udGVudC1UeXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJ319KS52YWx1ZS5kYXRhXHJcbiBjb25zb2xlLmxvZyhcInJlc3VsdCDDoCBsYSBmaW4gZHUgY2FsbFwiKVxyXG4gY29uc29sZS5sb2cocmV0b3VyRGVGaW4pIFxyXG4gcmV0dXJuIHJldG91ckRlRmluXHJcbn0qL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNhbGxHZXQoKSB7XHJcbiAgY29uc29sZS5sb2coXCJheGlvc1wiKVxyXG4gIGF4aW9zLmdldChcImh0dHBzOi8vXCIgKyBLRVlfTkdST0tCQUNLICsgXCIubmdyb2suaW8vZ2V0U3RhdGVPcmRlclwiLCB7IGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nIH0gfSlcclxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJycnJ0XCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKVxyXG4gICAgICByZXR1cm4gcmVzdWx0LmRhdGFcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldENvbChtYXRyaXgsIGNvbCkge1xyXG4gIHZhciBjb2x1bW4gPSBbXTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdHJpeC5sZW5ndGg7IGkrKykge1xyXG4gICAgY29sdW1uLnB1c2gobWF0cml4W2ldW2NvbF0pO1xyXG4gIH1cclxuICByZXR1cm4gY29sdW1uO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gRGF0YVRhYmxlRXhhbXBsZShkYXRhKSB7XHJcblxyXG4gIGZ1bmN0aW9uIGNhbGxHZXRTdGF0ZU9yZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJkYW5zIGdldE9yZGVycyBheGlvcyBjYWxsIGdldCBzdGF0ZSBvcmRlclwiKVxyXG4gICAgY29uc29sZS5sb2coXCJodHRwczovL1wiICsgS0VZX05HUk9LQkFDSyArIFwiLm5ncm9rLmlvL2dldFN0YXRlT3JkZXJcIiwgeyBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH0pXHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KFwiaHR0cHM6Ly9cIiArIEtFWV9OR1JPS0JBQ0sgKyBcIi5uZ3Jvay5pby9nZXRTdGF0ZU9yZGVyXCIsIHsgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiAnYXBwbGljYXRpb24vanNvbicgfSB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaXRlbXMgPSBkYXRhLm9yZGVycy5lZGdlcztcclxuICBjb25zb2xlLmxvZyhcImFscGhhIHBoYXNlXCIpXHJcbiAgY2FsbEdldCgpXHJcbiAgLy9jb25zb2xlLmxvZyhjYWxsR2V0KCkpXHJcbiAgLy9jb25zb2xlLmxvZygoKSA9PiBjYWxsR2V0KCkpXHJcblxyXG5cclxuICBmdW5jdGlvbiBpdGVtc1RvTm9kZSh7IGN1cnNvciwgbm9kZSB9KSB7XHJcbiAgICByZXR1cm4geyBub2RlIH0ubm9kZVxyXG4gIH07XHJcblxyXG5cclxuICBmdW5jdGlvbiBub2RlVG9Sb3dzKG5vZGUsIGJ1aWxkaW5nUmF3KSB7XHJcbiAgICAvKmNvbnNvbGUubG9nKFwibm9kZVwiKVxyXG4gICAgY29uc29sZS5sb2cobm9kZSlcclxuICAgIGNvbnNvbGUubG9nKCdkYW5zIGxhIGxhbWJkYSBwcm9mb25kZScpKi9cclxuICAgIE9iamVjdC5lbnRyaWVzKG5vZGUpLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAvKmNvbnNvbGUubG9nKGVsZW1lbnRbMF0gIT09ICdfX3R5cGVuYW1lJylcclxuICAgICAgY29uc29sZS5sb2coZWxlbWVudFswXSAhPSAnX190eXBlbmFtZScpXHJcbiAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnRbMF0pKi9cclxuXHJcbiAgICAgIGlmIChlbGVtZW50WzBdICE9PSAnX190eXBlbmFtZScpIHtcclxuICAgICAgICAvKiBjb25zb2xlLmxvZyhidWlsZGluZ1JhdylcclxuICAgICAgICAgY29uc29sZS5sb2coW2VsZW1lbnRbMV1dKVxyXG4gICAgICAgICBjb25zb2xlLmxvZyhidWlsZGluZ1Jhdy5jb25jYXQoW2VsZW1lbnRbMV1dKSlcclxuICAgICAgICAgY29uc29sZS5sb2coJ19fX19fX19fX19fXycpKi9cclxuICAgICAgICBidWlsZGluZ1JhdyA9ICh0eXBlb2YgZWxlbWVudFsxXSA9PT0gJ29iamVjdCcgJiYgZWxlbWVudFsxXSAhPT0gbnVsbCkgPyBub2RlVG9Sb3dzKGVsZW1lbnRbMV0sIGJ1aWxkaW5nUmF3KSA6IGJ1aWxkaW5nUmF3LmNvbmNhdChbZWxlbWVudFsxXV0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBidWlsZGluZ1JhdztcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuICAvKiBjb25zb2xlLmxvZygnaXRlbXMubWFwKGl0ZW1zVG9Ob2RlKScpXHJcbiAgIGNvbnNvbGUubG9nKGl0ZW1zLm1hcChpdGVtc1RvTm9kZSkpKi9cclxuICB2YXIgcm93cyA9IFtdO1xyXG4gIGl0ZW1zLm1hcChpdGVtc1RvTm9kZSkuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xyXG4gICAgLyogY29uc29sZS5sb2coJ2tleSx2YWx1ZScpXHJcbiAgICAgY29uc29sZS5sb2coa2V5KVxyXG4gICAgIGNvbnNvbGUubG9nKHZhbHVlKSovXHJcbiAgICByb3dzW2tleV0gPSBub2RlVG9Sb3dzKHZhbHVlLCBbXSlcclxuICB9KVxyXG5cclxuICBmdW5jdGlvbiBpbml0Um93cyhkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZygnSW5pdCByb3dzJylcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICByb3dzLmZvckVhY2goZnVuY3Rpb24gKHBhcnQsIGluZGV4KSB7XHJcblxyXG4gICAgIC8qIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgc3RvcmUuc2V0KCdldGF0Jyt0aGlzLnByb3BzLmlkLCB7IGlkIDogdGhpcy5wcm9wcy5pZCwgY2hvaXggOiBldmVudC50YXJnZXQudmFsdWV9KVxyXG4gICAgICAgdmFyIG9yZGVyU3RhdGUgPSAoZXZlbnQudGFyZ2V0LnZhbHVlID09IFwiU2VsZWN04oCmXCIpID8gbnVsbCA6IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgIGNvbnNvbGUubG9nKG9yZGVyU3RhdGUpKi9cclxuXHJcbiAgICAgICAvL2lsIGZhdXQgc2V0dGVyIHZhbHVlZGVEYlN0YXRlIGlzc3VlIGR1IHN0YXRlIHBsdXRvdCBxdWUgZGUgY3LDqWVyIHVuZSBub3V2ZWxsZSBwcm9wXHJcbiAgICAgIHZhciBub21QcmVub21DdXN0b21lciA9IHBhcnRbMV0gPT0gbnVsbCA/IG51bGwgOiBwYXJ0WzFdICsgXCIgXCIgKyBwYXJ0WzJdXHJcbiAgICAgIG5vbVByZW5vbUN1c3RvbWVyID09IG51bGwgPyBudWxsIDogKHBhcnQuc3BsaWNlKDIsMSksIHBhcnRbMl0gPSBwYXJ0WzNdLCBwYXJ0LnNwbGljZSgzLDEpKVxyXG4gICAgICBwYXJ0WzFdID0gbm9tUHJlbm9tQ3VzdG9tZXI7XHJcbiAgICAgIHBhcnQuc3BsaWNlKDMsIDAsIDxTZWxlY3QgaWQ9e2luZGV4fSB2YWx1ZURlREI9eyBkYXRhW2luZGV4XS5vcmRlcl9zdGF0ZSA9PSBudWxsID8gOTk0OSA6IGRhdGFbaW5kZXhdLm9yZGVyX3N0YXRlfT48L1NlbGVjdD4pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlBBUlRcIikgXHJcbiAgICAgIGNvbnNvbGUubG9nKHBhcnQpXHJcbiAgICAgIHJvd3NbaW5kZXhdID0gcGFydDtcclxuXHJcbiAgICAgIC8vcm93c1tpbmRleF0gPSBbPFNlbGVjdCBpZD17aW5kZXh9IHZhbHVlRGVEQj17IGRhdGFbaW5kZXhdLm9yZGVyX3N0YXRlID09IG51bGwgPyA5OTQ5IDogZGF0YVtpbmRleF0ub3JkZXJfc3RhdGV9PjwvU2VsZWN0Pl0uY29uY2F0KHBhcnQpO1xyXG4gICAgICAgIC8vLnNldFN0YXRlKHt2YWx1ZSA6IGRhdGFbaW5kZXhdLm9yZGVyX3N0YXRlfSldXHJcbiAgICB9LCByb3dzKTtcclxuICBcclxuICAgIHZhciBjb2xvbmVEZXNFdGF0c0FTZXR0ZXIgPSBnZXRDb2wocm93cywgMClcclxuICAgIGNvbnNvbGUubG9nKFwiY29sb25uZSBkZXMgc2VsZWN0XCIpXHJcbiAgICBjb25zb2xlLmxvZyhjb2xvbmVEZXNFdGF0c0FTZXR0ZXIpXHJcbiAgICB2YXIgY29sb25lRGVzTmFtZXNJZHMgPSBnZXRDb2wocm93cywgMSlcclxuICBcclxuICB9XHJcblxyXG4gIHZhciByb3dzRnJvbURCID0gW107XHJcblxyXG4gIGNhbGxHZXRTdGF0ZU9yZGVyKCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNhbGwgZ2V0IHN0YXRlIG9yZGVyIGNhbGxiYWNrXCIpXHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSlcclxuICAgIGluaXRSb3dzKHJlc3VsdC5kYXRhKVxyXG4gIH0pXHJcblxyXG4gIC8qKiBTQU1JQSBERUJVVFxyXG4gIHJvd3MuZm9yRWFjaChmdW5jdGlvbiAocGFydCwgaW5kZXgpIHtcclxuICAgIC8vYXhpb3MuZ2V0RXRhdCBkdSBzZWxlY3Qgw6Agc2V0dGVyIChlbiBmb25jdGlvbiBkZSBsYSBwYWdlIGV0IGR1IHRyaSAobGUgdHJpIGRvaXQgZXRyZSBnbG9iYWwgZGFucyB1biBwcmVtaWVyIHRlbXBzIGV0IHB1aXMgb24gcG91cnJhIGZhaXJlIHVuIHRyaSBzdXIgbGVzIHNldWxzIMOpbMOpbWVudHMgZGUgbGEgcGFnZSBhdXNzaSkpXHJcbiAgICByb3dzW2luZGV4XSA9IFs8U2VsZWN0IGlkPXtpbmRleH0+PC9TZWxlY3Q+XS5jb25jYXQocGFydCk7XHJcbiAgfSwgcm93cyk7XHJcblxyXG4gIGNvbnNvbGUubG9nKCdyb3dzJyk7XHJcbiAgY29uc29sZS5sb2cocm93cyk7XHJcblxyXG4gIC8vb24gbmUgdGllbnQgcGFzIGVuY29yZSBjb21wdGUgZGUgbGEgcGFnaW5hdGlvblxyXG4gIHZhciBjb2xvbmVEZXNFdGF0c0FTZXR0ZXIgPSBnZXRDb2wocm93cywgMClcclxuICBjb25zb2xlLmxvZygndmlkZT8nKVxyXG4gIGNvbnNvbGUubG9nKGNvbG9uZURlc0V0YXRzQVNldHRlcilcclxuICB2YXIgY29sb25lRGVzTmFtZXNJZHMgPSBnZXRDb2wocm93cywgMSlcclxuXHJcbiAgdmFyIHJvd3NGcm9tREIgPSBbXTtcclxuICBjb25zb2xlLmxvZyhyb3dzRnJvbURCKVxyXG4gIGNvbnNvbGUubG9nKFwiYmV0YSBwaGFzZVwiKVxyXG4gIFNBTUlBIEZJTiAqKi9cclxuXHJcbiAgLypsZXQgQXV0aFVzZXIgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICByZXR1cm4gZ29vZ2xlLmxvZ2luKGRhdGEudXNlcm5hbWUsIGRhdGEucGFzc3dvcmQpLnRoZW4odG9rZW4gPT4geyByZXR1cm4gdG9rZW4gfSApXHJcbiAgfVxyXG4gIGxldCB1c2VyVG9rZW4gPSBhd2FpdCBBdXRoVXNlcihkYXRhKVxyXG4gIGNvbnNvbGUubG9nKHVzZXJUb2tlbikqL1xyXG5cclxuXHJcbiAgY29uc29sZS5sb2coY2FsbEdldCgpKVxyXG4gIHZhciByZXRvdXJEdUNhbGxHZXQ7XHJcbiAgLypjb25zb2xlLmxvZyhjYWxsR2V0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgIGNvbnNvbGUubG9nKFwibGUgcmVzdWx0IGRhbnMgbGUgdGhlblwiKVxyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KSAvLyBcIlNvbWUgVXNlciB0b2tlblwiXHJcbiAgICByZXRvdXJEdUNhbGxHZXQgPSByZXN1bHQ7XHJcbiAgICBjb25zb2xlLmxvZygncmVzb2xldmVlZScpXHJcbiAgICAvL3Jlc29sdmUocmVzdWx0KVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG4gfSkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcclxuICBjb25zb2xlLmxvZyhcImxlIHJlc3VsdCBkYW5zIGxlIHRoZW5cIilcclxuICBjb25zb2xlLmxvZyhyZXN1bHQpIC8vIFwiU29tZSBVc2VyIHRva2VuXCJcclxuICByZXRvdXJEdUNhbGxHZXQgPSByZXN1bHQ7XHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59KSkqL1xyXG4gIGNvbnNvbGUubG9nKFwicmV0b3VyRHVDYWxsR2V0XCIpXHJcbiAgY29uc29sZS5sb2cocmV0b3VyRHVDYWxsR2V0KVxyXG4gIC8qcmV0b3VyRHVDYWxsR2V0LmZvckVhY2goKHZhbHVlLCBrZXkpPT4ge1xyXG4gICAgY29uc29sZS5sb2codmFsdWUpXHJcblxyXG4gICAgcm93c0Zyb21EQltrZXldID0gbm9kZVRvUm93cyh2YWx1ZSxbXSkgXHJcbiAgIH0pKi9cclxuICBjb25zb2xlLmxvZyhcInJvd3NGcm9tREJcIilcclxuICBjb25zb2xlLmxvZyhyb3dzRnJvbURCKVxyXG5cclxuXHJcbiAgY29uc29sZS5sb2coXCJST1dTU1wiKVxyXG4gIGNvbnNvbGUubG9nKHJvd3MpXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlIGZ1bGxXaWR0aD1cInRydWVcIj5cclxuICAgICAgPENhcmQ+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjYWxsR2V0KCl9PkV4YW1wbGUgYnV0dG9uPC9CdXR0b24+XHJcbiAgICAgICAgey8vcmV0b3VyRHVHZXRcclxuICAgICAgICB9XHJcbiAgICAgICAgPERhdGFUYWJsZVxyXG4gICAgICAgICAgY29sdW1uQ29udGVudFR5cGVzPXtbXHJcbiAgICAgICAgICAgICd0ZXh0JyxcclxuICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgICAgICd0ZXh0JyxcclxuICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgICAgICd0ZXh0JyxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgICBoZWFkaW5ncz17W1xyXG4gICAgICAgICAgICAnaWQnLFxyXG4gICAgICAgICAgICAnbm9tIGV0IHByw6lub20nLFxyXG4gICAgICAgICAgICAnZGF0ZSBkZSBsYSBjb21tYW5kZScsXHJcbiAgICAgICAgICAgICfDqXRhdCBkZSBsYSBjb21tYW5kZScsXHJcbiAgICAgICAgICAgICd0cmFuc3BvcnRldXInLFxyXG4gICAgICAgICAgICAnbnVtw6lybyBkZSBzdWl2aScsXHJcbiAgICAgICAgICAgICdkYXRlIHByw6l2dWUgZGUgbGl2cmFpc29uJyxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgICAvL2lsIGZhdXQgcsOpY3Vww6lyZXIgbGVzIG9yZGVyIHN0YXRlcyBkZSBsYSBkYiBldCBwZXV0IGV0cmUgbGVzIG1ldHRyZSBlbiBjYWNoZSBjYSBzZXJhaXQgY29vbFxyXG4gICAgICAgICAgcm93cz17cm93c31cclxuICAgICAgICAvLyc8aW1nIHNyYz1cIicrZGF0YSsnXCI+J1xyXG5cclxuICAgICAgICAvKnNvdXJjZT17XHJcbiAgICAgICAgICBpdGVtLm5vZGUubGluZUl0ZW1zLmVkZ2VzWzBdXHJcbiAgICAgICAgICAgID8gaXRlbS5ub2RlLmxpbmVJdGVtcy5lZGdlc1swXS5ub2RlLmltYWdlLm9yaWdpbmFsU3JjXHJcbiAgICAgICAgICAgIDogJydcclxuICAgICAgICB9Ki9cclxuICAgICAgICAvL3RvdGFscz17WycnLCAnJywgJycsIDI1NSwgJyQxNTUsODMwLjAwJ119XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9QYWdlPlxyXG5cclxuXHJcbiAgKTtcclxufVxyXG5cclxuY2xhc3MgUmVzb3VyY2VMaXN0V2l0aE9yZGVycyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxRdWVyeSBxdWVyeT17R0VUX09SREVSU19CWV9JRH0+XHJcbiAgICAgICAgeyh7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0pID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiREFUQVwiKVxyXG4gICAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmfigKY8L2Rpdj47XHJcbiAgICAgICAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YS5vcmRlcnMuZWRnZXMpO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhLm9yZGVycy5lZGdlc1swXS5ub2RlLmxpbmVJdGVtcy5lZGdlc1swXS5ub2RlLmltYWdlLm9yaWdpbmFsU3JjKTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBEYXRhVGFibGVFeGFtcGxlKGRhdGEpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH19XHJcbiAgICAgIDwvUXVlcnk+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuLyo8Q2FyZD5cclxuICA8cD5MZXMgNTAgZGVybmnDqHJlcyBjb21tYW5kZXM8L3A+XHJcbiAgPFJlc291cmNlTGlzdFxyXG4gICAgc2hvd0hlYWRlclxyXG4gICAgcmVzb3VyY2VOYW1lPXt7IHNpbmd1bGFyOiAnT3JkZXInLCBwbHVyYWw6ICdPcmRlcnMnIH19XHJcbiAgICBpdGVtcz17ZGF0YS5vcmRlcnMuZWRnZXN9XHJcbiAgICByZW5kZXJJdGVtPXtpdGVtID0+IHtcclxuICAgICAgY29uc3Qgb3JkZXJOYW1lID0gaXRlbS5ub2RlLm5hbWVcclxuICAgICAgY29uc3QgbWVkaWEgPSAoXHJcbiAgICAgICAgPFRodW1ibmFpbFxyXG4gICAgICAgICAgc291cmNlPXtcclxuICAgICAgICAgICAgaXRlbS5ub2RlLmxpbmVJdGVtcy5lZGdlc1swXVxyXG4gICAgICAgICAgICAgID8gaXRlbS5ub2RlLmxpbmVJdGVtcy5lZGdlc1swXS5ub2RlLmltYWdlLm9yaWdpbmFsU3JjXHJcbiAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHByaWNlID0gaXRlbS5ub2RlLm5ldFBheW1lbnRTZXQuc2hvcE1vbmV5LmFtb3VudDtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICBcclxuICAgICAgICA8UmVzb3VyY2VMaXN0Lkl0ZW1cclxuICAgICAgICBtZWRpYSA9IHtvcmRlck5hbWV9XHJcbiAgICAgICAgIC8vIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgbWVkaWE9e21lZGlhfVxyXG4gICAgICAgICAgLy9hY2Nlc3NpYmlsaXR5TGFiZWw9e2BWaWV3IGRldGFpbHMgZm9yICR7aXRlbS50aXRsZX1gfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAvL3N0b3JlLnNldCgnaXRlbScsIGl0ZW0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3RvcmUuc2V0JylcclxuICAgICAgICAgICAgLy9yZWRpcmVjdFRvUHJvZHVjdCgpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U3RhY2s+XHJcbiAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICA8cD57b3JkZXJOYW1lfTwvcD5cclxuICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICA8U3RhY2suSXRlbSBmaWxsPlxyXG4gICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5ub2RlLmlkfVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICA8cD4ke3ByaWNlfTwvcD5cclxuICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICA8cD5FeHBpcmVzIG9uIFIgPC9wPlxyXG4gICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgIDwvUmVzb3VyY2VMaXN0Lkl0ZW0+XHJcbiAgICAgICk7XHJcbiAgICB9fVxyXG4gIC8+XHJcbjwvQ2FyZD5cclxuKTtcclxufX1cclxuPC9RdWVyeT5cclxuKTtcclxufVxyXG59Ki9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc291cmNlTGlzdFdpdGhPcmRlcnM7IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJztcclxuXHJcbi8qY29uc3QgZG90ZW52ID0gcmVxdWlyZSgnZG90ZW52Jyk7XHJcbmNvbnN0IG5leHQgPSByZXF1aXJlKCduZXh0Jyk7XHJcbmRvdGVudi5jb25maWcoKTtcclxuY29uc3QgZGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJztcclxuY29uc3QgYXBwID0gbmV4dCh7IGRldiB9KTtcclxuY29uc3QgeyBSRUFDVF9BUFBfTkdST0tCQUNLIH0gPSBwcm9jZXNzLmVudjtcclxuY29uc3QgaGFuZGxlID0gYXBwLmdldFJlcXVlc3RIYW5kbGVyKCk7XHJcblxyXG5jb25zb2xlLmxvZyhwcm9jZXNzLmVudilcclxuYXBwLnByZXBhcmUoKS50aGVuKCgpID0+IHtcclxuICBjb25zb2xlLmxvZyhcImluIGFwcCBwcmVwYXJlXCIpXHJcbiAgY29uc29sZS5sb2coUkVBQ1RfQVBQX05HUk9LQkFDSylcclxufSk7Ki9cclxuXHJcblxyXG4vL2NvbnN0IHtSRUFDVF9BUFBfbmdyb2tCYWNrfSA9IHByb2Nlc3MuZW52O1xyXG4vL2NvbnN0IG5ncm9rQmFjayA9IFJFQUNUX0FQUF9uZ3Jva0JhY2s7XHJcbmNvbnNvbGUubG9nKCdjQWNBQUFBQUFBQUFBQUFBQUFBQUFBQUEnKVxyXG5jb25zb2xlLmxvZyhLRVlfTkdST0tCQUNLKVxyXG5cclxuLy9jbGFzcyBTZWxlY3QgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcclxuY2xhc3MgU2VsZWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIGNvbnNvbGUubG9nKFwiZGFucyBjb25zdHJ1Y3RldXIsIHBwcm9wcyBwdWlzIHRoaXNcIilcclxuICAgIGNvbnNvbGUubG9nKHByb3BzKVxyXG4gICAgY29uc29sZS5sb2codGhpcylcclxuICAgIHRoaXMuc3RhdGUudmFsdWVEZURiU3RhdGUgPSBwcm9wcy52YWx1ZURlREJcclxuICB9XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICdTZWxlY3TigKYnLFxyXG4gICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAnQScsXHJcbiAgICAgICAgICB2YWx1ZTogNDQ0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ0InLFxyXG4gICAgICAgICAgdmFsdWU6IDMzMyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICdDJyxcclxuICAgICAgICAgIHZhbHVlOiAyMjIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgdmFsdWU6ICc/JyxcclxuICAgICAgdmFsdWVEZURiU3RhdGUgOiAnJyxcclxuICAgIH07XHJcblxyXG5cclxuICAgIFxyXG4gIFxyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImF6ZXJ0eXVpb3BcIilcclxuICAgICAgY29uc29sZS5sb2codGhpcylcclxuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS52YWx1ZSlcclxuICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKVxyXG5cclxuXHJcbi8vTDRFUlJFVVIgRVNUIElDSSwgaWwgZmF1dCBhcnJldGVyIGQndXRpbGlzZXIgVmFsdWVEZURiIGRlIHByb3BzIG1haXMgdXRpbGlzZXIgVmFsdWVEZURCU3RhdGUgZHUgU3RhdGUgOilcclxuICAgICAvKiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3N0YXRlJywge1xyXG4gICAgICAgIHZhbHVlRGVEYlN0YXRlOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXHJcbiAgICAgIH0pOyovXHJcblxyXG4gICAgICAvL2V4ZW1wbGUgc3VyIGxlcXVlbCBzJ2FwcHV5ZXIgcG91ciBzZXR0ZXIgbGUgc3RhdGVcclxuICAgIC8qICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XHJcbiAgICAgICAgbGV0IGphc3BlciA9IE9iamVjdC5hc3NpZ24oe30sIHByZXZTdGF0ZS5qYXNwZXIpOyAgLy8gY3JlYXRpbmcgY29weSBvZiBzdGF0ZSB2YXJpYWJsZSBqYXNwZXJcclxuICAgICAgICBqYXNwZXIubmFtZSA9ICdzb21lb3RoZXJuYW1lJzsgICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIG5hbWUgcHJvcGVydHksIGFzc2lnbiBhIG5ldyB2YWx1ZSAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHsgamFzcGVyIH07ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIG5ldyBvYmplY3QgamFzcGVyIG9iamVjdFxyXG4gICAgICB9KSovXHJcblxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZhbHVlRGVEYlN0YXRlKVxyXG4gICAgICB0aGlzLnN0YXRlLnZhbHVlRGVEYlN0YXRlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICB0aGlzLnN0YXRlLnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZhbHVlRGVEYlN0YXRlKVxyXG5cclxuICAgICAgLy90aGlzLnByb3BzLnZhbHVlRGVEQiA9IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICBzdG9yZS5zZXQoJ2V0YXQnK3RoaXMucHJvcHMuaWQsIHsgaWQgOiB0aGlzLnByb3BzLmlkLCBjaG9peCA6IGV2ZW50LnRhcmdldC52YWx1ZX0pXHJcblxyXG4gICAgICB2YXIgb3JkZXJTdGF0ZSA9IChldmVudC50YXJnZXQudmFsdWUgPT0gXCJTZWxlY3TigKZcIikgPyBudWxsIDogZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICBjb25zb2xlLmxvZyhvcmRlclN0YXRlKVxyXG5cclxuXHJcbiAgICAgIC8vY29uc29sZS5sb2coUkVBQ1RfQVBQX25ncm9rQmFjaylcclxuXHJcbiAgICAgIC8vbCdpZCBxdSdvbiBlbnZvaWUgZW4gcGFyYW1zIGVzdCBsJ2lkIGR1IHNlbGVjdCBkYW5zIGxhIHBhZ2UgY29uY2VybsOpZS4gaWwgZmF1ZHJhIGxlIGZhaXJlIGNvcnJlc3BvbmRyZSBhdSB2cmFpIElEIGVuIGZvbmN0aW9uIGRlIGxhIHBhZ2luYXRpb24gZXQgZHUgdHJpIGRlIGxhIGRhdGF0YWJsZVxyXG4gICAgICBheGlvcy5wdXQoXHJcbiAgICAgICAgLy9cImh0dHBzOi8vNTQ3ZjQxN2NjMzI5Lm5ncm9rLmlvL2hhbmRsZVwiLCBcclxuICAgICAgICBcImh0dHBzOi8vXCIrS0VZX05HUk9LQkFDSytcIi5uZ3Jvay5pby9oYW5kbGVcIiwgXHJcbiAgICAgICAge1wib3JkZXJfc3RhdGVcIiA6IG9yZGVyU3RhdGV9LCBcclxuICAgICAgICB7cGFyYW1zOiB7IGlkOnRoaXMucHJvcHMuaWQrMSB9LCBoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nfX1cclxuICAgIClcclxuICAgIFxyXG5cclxuXHJcbiAgICAgIC8vYXhpb3MucHV0KFwiaHR0cHM6Ly9cIitSRUFDVF9BUFBfbmdyb2tCYWNrK1wiLm5ncm9rLmlvL2hhbmRsZVwiLCB7fSlcclxuICAgICAvLyBcInByb3h5XCI6IFwiaHR0cDovLyR7UkVBQ1RfQVBQX25ncm9rQmFja30ubmdyb2suaW9cIixcclxuXHJcblxyXG4gICAgICAvL2F4aW9zLnB1dChcImxvY2FsaG9zdDo1MDAwL2hhbmRsZVwiLCB7fSlcclxuXHJcbiAgICAgIC8qLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eScpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgIH0pKi9cclxuXHJcblxyXG4gICAgICAvKiB2YXIgc3FsID0gXCJVUERBVEUgb3JkZXJzIFNFVCBvcmRlcl9zdGF0ZSA9IDYgV0hFUkUgb3JkZXJfaWQ9MVwiO1xyXG4gICAgICAgIGNvbi5xdWVyeShzcWwsIGZ1bmN0aW9uIChlcnIsIHJlc3VsdCkge1xyXG4gICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmFmZmVjdGVkUm93cyArIFwiIHJlY29yZChzKSB1cGRhdGVkXCIpO1xyXG4gICAgICAgIH0pOyovXHJcbiAgICB9O1xyXG4gIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygncmVuZGVyJylcclxuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcclxuICAgICAgY29uc29sZS5sb2coJ3ZhbHVlJylcclxuICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy52YWx1ZURlREIpXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudmFsdWVEZURiU3RhdGUpXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgdmFyIHsgb3B0aW9ucywgdmFsdWUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgIHZhciBjdXJyZW50SWQ7XHJcbiAgICAgIHZhciBldGF0RnJvbVN0b3JlO1xyXG4gICAgICAvL2ljaSwgaWwgZmF1dCBjaG9pc2lyIHNpIHZhbHVlIGVzdCBjZWx1aSBkZSBsYSBiZGQgKMOgIGwnaW5pdGlhbGlzYXRpb24pLCBvdSBjZWx1aSBxdSdvbiB2aWVuIGRlIGNob2lzaXIsKCBhcHJlcyB1biBwdXQpXHJcbiAgICAgIC8vdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlRGVEQiA9PSBudWxsID8gOTk0OSA6IHRoaXMucHJvcHMudmFsdWVEZURCO1xyXG5cclxuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS52YWx1ZURlRGJTdGF0ZSA9PSBudWxsIHx8IHRoaXMuc3RhdGUudmFsdWVEZURiU3RhdGUgPT0gJ1NlbGVjdOKApicgKVxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZhbHVlRGVEYlN0YXRlID09IG51bGwgKVxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZhbHVlRGVEYlN0YXRlID09ICdTZWxlY3TigKYnIClcclxuICAgICAgY29uc29sZS5sb2codHJ1ZSB8fCBmYWxzZSlcclxuXHJcbiAgICAgIHZhbHVlID0gKHRoaXMuc3RhdGUudmFsdWVEZURiU3RhdGUgPT0gbnVsbCB8fCB0aGlzLnN0YXRlLnZhbHVlRGVEYlN0YXRlID09ICdTZWxlY3TigKYnICk/IDk5NDkgOiB0aGlzLnN0YXRlLnZhbHVlRGVEYlN0YXRlO1xyXG4gICAgICB2YXIgdmFsO1xyXG5cclxuICAgICAgY3VycmVudElkID0gdGhpcy5wcm9wcy5pZCxcclxuICAgICAgZXRhdEZyb21TdG9yZSA9IHN0b3JlLmdldCgnZXRhdCcrY3VycmVudElkKSxcclxuICAgICAgdmFsID0gdmFsdWU7XHJcblxyXG4gICAgICAvL3BvdXIgc2V0dGVyIGxhIGxpZ25lIDEgKHBhcyBsYSAwKSDDoCB1bmRlZmluZWRcclxuICAgICAgLy9ldGF0RnJvbVN0b3JlLmlkID09IDEgPyBldGF0RnJvbVN0b3JlID0gdW5kZWZpbmVkIDogJycsXHJcblxyXG4gICAgICBldGF0RnJvbVN0b3JlID09IHVuZGVmaW5lZCA/IFxyXG4gICAgICBzdG9yZS5zZXQoJ2V0YXQnK2N1cnJlbnRJZCx7IGlkIDogY3VycmVudElkLCBjaG9peCA6IHZhbH0pIDogXHJcbiAgICAgIHZhbD1ldGF0RnJvbVN0b3JlLmNob2l4ID09IG51bGwgPyA5OTQ5IDogZXRhdEZyb21TdG9yZS5jaG9peDtcclxuICAgICAgLy9jb25zb2xlLmxvZygnZXRhdCcgKyBjdXJyZW50SWQpLFxyXG4gICAgICAvL2NvbnNvbGUubG9nKGV0YXRGcm9tU3RvcmUpXHJcbiAgICAgIC8vY29uc29sZS5sb2coZXRhdEZyb21TdG9yZSA9PSB1bmRlZmluZWQgPyAncGFzIGRcXCdpZCcgOiBldGF0RnJvbVN0b3JlLmlkKSxcclxuXHJcblxyXG5cclxuICAgICAvLyBjb25zb2xlLmxvZygndGhpcycpXHJcbiAgICAgIC8vY29uc29sZS5sb2codGhpcylcclxuXHJcbiAgXHJcblxyXG4gICAgIC8vIDxzZWxlY3Qgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dmFsdWV9PlxyXG5cclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt2YWx9PlxyXG4gICAgICAgICAgICB7b3B0aW9ucy5tYXAoaXRlbSA9PiAoXHJcblxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gXHJcbiAgICAgICAgICAgICAgLypjb25zb2xlLmxvZygnZXRhdCcrY3VycmVudElkKSxcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldGF0RnJvbVN0b3JlKSxcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldGF0RnJvbVN0b3JlID09IHVuZGVmaW5lZCksXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXRhdEZyb21TdG9yZSA9PSB1bmRlZmluZWQgPyAncGFzIGRcXCdpZCcgOiBldGF0RnJvbVN0b3JlLmlkKSxcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldGF0RnJvbVN0b3JlID09IHVuZGVmaW5lZCA/ICdwYXMgZGUgY2hvaXggY2hvaXNpJyA6IGV0YXRGcm9tU3RvcmUuY2hvaXgpLFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwib3B0aW9uXCIpLFxyXG4gICAgICAgICAgICAgIC8vY29uc29sZS5sb2coaXRlbSksXHJcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh7dmFsdWV9KSxcclxuICAgICAgICAgICAgICAvKmNvbnNvbGUubG9nKHRoaXMpLCovXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW0udmFsdWV9IHZhbHVlPXtpdGVtLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8aDE+RmF2b3JpdGUgbGV0dGVyOiB7dmFsdWV9PC9oMT5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICBleHBvcnQgZGVmYXVsdCBTZWxlY3Q7IiwiaW1wb3J0IHsgRW1wdHlTdGF0ZSwgTGF5b3V0LCBQYWdlIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCB7IFJlc291cmNlUGlja2VyLCBUaXRsZUJhciB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3QnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJztcclxuaW1wb3J0IFJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyBmcm9tICcuLi9jb21wb25lbnRzL1Jlc291cmNlTGlzdCc7XHJcbmltcG9ydCBSZXNvdXJjZUxpc3RXaXRoT3JkZXJzIGZyb20gJy4uL2NvbXBvbmVudHMvZ2V0T3JkZXJzJztcclxuXHJcblxyXG5cclxuLy9jb25zdCBpbWcgPSAnaHR0cHM6Ly9jZG4uc2hvcGlmeS5jb20vcy9maWxlcy8xLzA3NTcvOTk1NS9maWxlcy9lbXB0eS1zdGF0ZS5zdmcnO1xyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRlID0geyBvcGVuOiBmYWxzZSB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGVtcHR5U3RhdGUgPSAhc3RvcmUuZ2V0KCdpZHMnKTtcclxuICAgIHJldHVybihcclxuICAgICAgPFJlc291cmNlTGlzdFdpdGhPcmRlcnMgLz5cclxuICAgICk7fVxyXG4gICAgLypyZXR1cm4gKFxyXG4gICAgICA8UGFnZT5cclxuICAgICAgICA8VGl0bGVCYXJcclxuICAgICAgICAgIHRpdGxlPVwiU2FtcGxlIEFwcFwiXHJcbiAgICAgICAgICBwcmltYXJ5QWN0aW9uPXt7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdTZWxlY3QgcHJvZHVjdHMnLFxyXG4gICAgICAgICAgICAvL2NvbW1lbnQgZmFpcmUgMiBsYW1iZGFzIMOgIGxhIHN1aXRlIHBvdXIgYXZvaXIgYXVzc2kgbGUgY29uc29sZSBsb2c/XHJcbiAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KSxcclxuICAgICAgICAgICAgLy9vbkFjdGlvbjogKCkgPT4gY29uc29sZS5sb2coJ2NsaWNrZWRkJyksXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFJlc291cmNlUGlja2VyXHJcbiAgICAgICAgICByZXNvdXJjZVR5cGU9XCJQcm9kdWN0XCJcclxuICAgICAgICAgIHNob3dWYXJpYW50cz17ZmFsc2V9XHJcbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59XHJcbiAgICAgICAgICBvblNlbGVjdGlvbj17KHJlc291cmNlcykgPT4gdGhpcy5oYW5kbGVTZWxlY3Rpb24ocmVzb3VyY2VzKX1cclxuICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxFbXB0eVN0YXRlXHJcbiAgICAgICAgICAgICAgaGVhZGluZz1cIlNlbGVjdCBwcm9kdWN0cyB0byBzdGFydFwiXHJcbiAgICAgICAgICAgICAgYWN0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnU2VsZWN0IHByb2R1Y3RzJyxcclxuICAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8vaW1hZ2U9e2ltZ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwPlNlbGVjdCBwcm9kdWN0cyBhbmQgY2hhbmdlIHRoZWlyIHByaWNlIHRlbXBvcmFyaWx5PC9wPlxyXG4gICAgICAgICAgICA8L0VtcHR5U3RhdGU+XHJcbiAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgIHtlbXB0eVN0YXRlID8gKFxyXG4gICAgICAgICAgICA8UmVzb3VyY2VMaXN0V2l0aE9yZGVycyAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAvLzxSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHMgLz5cclxuICAgICAgICAgICAgPFJlc291cmNlTGlzdFdpdGhPcmRlcnMgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L1BhZ2U+XHJcbiAgICApO1xyXG4gIH1cclxuICBoYW5kbGVTZWxlY3Rpb24gPSAocmVzb3VyY2VzKSA9PiB7XHJcbiAgICBjb25zdCBpZHNGcm9tUmVzb3VyY2VzID0gcmVzb3VyY2VzLnNlbGVjdGlvbi5tYXAoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pXHJcbiAgICBjb25zb2xlLmxvZyhyZXNvdXJjZXMpXHJcbiAgICBjb25zb2xlLmxvZyhpZHNGcm9tUmVzb3VyY2VzKVxyXG4gICAgY29uc29sZS5sb2cocmVzb3VyY2VzLmlkKVxyXG4gICAgc3RvcmUuc2V0KCdpZHMnLCBpZHNGcm9tUmVzb3VyY2VzKTtcclxuICB9OyovXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L3BvbGFyaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYXBvbGxvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdG9yZS1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9