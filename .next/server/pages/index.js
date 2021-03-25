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
        email
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
        customer{
          firstName
          lastName
          email
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
  axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("https://" + "6accba50595a" + ".ngrok.io/getStateOrder", {
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
    console.log("https://" + "6accba50595a" + ".ngrok.io/getStateOrder", {
      headers: {
        "Content-Type": 'application/json'
      }
    });
    return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("https://" + "6accba50595a" + ".ngrok.io/getStateOrder", {
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
      rows[index] = [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_selectdrop__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: index,
        valueDeDB: data[index].order_state == null ? 9949 : data[index].order_state
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
console.log("6accba50595a"); //class Select extends PureComponent {

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
      "https://" + "6accba50595a" + ".ngrok.io/handle", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXNvdXJjZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nZXRPcmRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWxlY3Rkcm9wLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYXBvbGxvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdG9yZS1qc1wiIl0sIm5hbWVzIjpbIkdFVF9QUk9EVUNUU19CWV9JRCIsImdxbCIsIlJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVyIiwiYXBwIiwiY29udGV4dCIsInJlZGlyZWN0VG9Qcm9kdWN0IiwicmVkaXJlY3QiLCJSZWRpcmVjdCIsImNyZWF0ZSIsImRpc3BhdGNoIiwiQWN0aW9uIiwiQVBQIiwidHdvV2Vla3NGcm9tTm93IiwiRGF0ZSIsIm5vdyIsInRvRGF0ZVN0cmluZyIsImlkcyIsInN0b3JlIiwiZ2V0IiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJub2RlcyIsIml0ZW0iLCJtZWRpYSIsImltYWdlcyIsImVkZ2VzIiwibm9kZSIsIm9yaWdpbmFsU3JjIiwiYWx0VGV4dCIsInByaWNlIiwidmFyaWFudHMiLCJpZCIsInRpdGxlIiwic2V0IiwiQ29udGV4dCIsIkdFVF9PUkRFUlNfQllfSUQiLCJyZXRvdXJEdUdldCIsImNhbGxHZXQiLCJheGlvcyIsIktFWV9OR1JPS0JBQ0siLCJoZWFkZXJzIiwidGhlbiIsInJlc3VsdCIsImdldENvbCIsIm1hdHJpeCIsImNvbCIsImNvbHVtbiIsImkiLCJsZW5ndGgiLCJwdXNoIiwiRGF0YVRhYmxlRXhhbXBsZSIsImNhbGxHZXRTdGF0ZU9yZGVyIiwiaXRlbXMiLCJvcmRlcnMiLCJpdGVtc1RvTm9kZSIsImN1cnNvciIsIm5vZGVUb1Jvd3MiLCJidWlsZGluZ1JhdyIsIk9iamVjdCIsImVudHJpZXMiLCJmb3JFYWNoIiwiZWxlbWVudCIsImluZGV4IiwiY29uY2F0Iiwicm93cyIsIm1hcCIsInZhbHVlIiwia2V5IiwiaW5pdFJvd3MiLCJwYXJ0Iiwib3JkZXJfc3RhdGUiLCJjb2xvbmVEZXNFdGF0c0FTZXR0ZXIiLCJjb2xvbmVEZXNOYW1lc0lkcyIsInJvd3NGcm9tREIiLCJyZXRvdXJEdUNhbGxHZXQiLCJSZXNvdXJjZUxpc3RXaXRoT3JkZXJzIiwiU2VsZWN0IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsIm9wdGlvbnMiLCJuYW1lIiwidmFsdWVEZURiU3RhdGUiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0Iiwic3RhdGUiLCJjaG9peCIsIm9yZGVyU3RhdGUiLCJwdXQiLCJwYXJhbXMiLCJ2YWx1ZURlREIiLCJjdXJyZW50SWQiLCJldGF0RnJvbVN0b3JlIiwidmFsIiwidW5kZWZpbmVkIiwiaGFuZGxlQ2hhbmdlIiwiSW5kZXgiLCJvcGVuIiwiZW1wdHlTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7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Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XHJcbmltcG9ydCB7IENhcmQsXHJcbiAgICBSZXNvdXJjZUxpc3QsXHJcbiAgICBTdGFjayxcclxuICAgIFRleHRTdHlsZSxcclxuICAgIFRodW1ibmFpbCwgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdCc7XHJcblxyXG5jb25zdCBHRVRfUFJPRFVDVFNfQllfSUQgPSBncWxgXHJcbiAgcXVlcnkgZ2V0UHJvZHVjdHMoJGlkczogW0lEIV0hKSB7XHJcbiAgICBub2RlcyhpZHM6ICRpZHMpIHtcclxuICAgICAgLi4uIG9uIFByb2R1Y3Qge1xyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgaGFuZGxlXHJcbiAgICAgICAgZGVzY3JpcHRpb25IdG1sXHJcbiAgICAgICAgaWRcclxuICAgICAgICBpbWFnZXMoZmlyc3Q6IDEpIHtcclxuICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgb3JpZ2luYWxTcmNcclxuICAgICAgICAgICAgICBhbHRUZXh0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyaWFudHMoZmlyc3Q6IDEpIHtcclxuICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcbmNsYXNzIFJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgY29udGV4dFR5cGUgPSBDb250ZXh0O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBhcHAgPSB0aGlzLmNvbnRleHQ7XHJcbiAgICBjb25zdCByZWRpcmVjdFRvUHJvZHVjdCA9ICgpID0+IHtcclxuICAgICAgY29uc3QgcmVkaXJlY3QgPSBSZWRpcmVjdC5jcmVhdGUoYXBwKTtcclxuICAgICAgcmVkaXJlY3QuZGlzcGF0Y2goXHJcbiAgICAgICAgUmVkaXJlY3QuQWN0aW9uLkFQUCxcclxuICAgICAgICAnL2VkaXQtcHJvZHVjdHMnLFxyXG4gICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgdHdvV2Vla3NGcm9tTm93ID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIDEyMDk2ZTUpLnRvRGF0ZVN0cmluZygpO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vPFF1ZXJ5IHF1ZXJ5PXtHRVRfUFJPRFVDVFNfQllfSUR9PlxyXG4gICAgICAgIDxRdWVyeSBxdWVyeT17R0VUX1BST0RVQ1RTX0JZX0lEfSB2YXJpYWJsZXM9e3sgaWRzOiBzdG9yZS5nZXQoJ2lkcycpIH19PlxyXG4gICAgICAgICAgeyh7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmfigKY8L2Rpdj47XHJcbiAgICAgICAgICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3RcclxuICAgICAgICAgICAgICAgIHNob3dIZWFkZXJcclxuICAgICAgICAgICAgICAgIHJlc291cmNlTmFtZT17eyBzaW5ndWxhcjogJ1Byb2R1Y3QnLCBwbHVyYWw6ICdQcm9kdWN0cycgfX1cclxuICAgICAgICAgICAgICAgIGl0ZW1zPXtkYXRhLm5vZGVzfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1lZGlhID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxUaHVtYm5haWxcclxuICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2VzLmVkZ2VzWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLmltYWdlcy5lZGdlc1swXS5ub2RlLm9yaWdpbmFsU3JjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZXMuZWRnZXNbMF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW0uaW1hZ2VzLmVkZ2VzWzBdLm5vZGUuYWx0VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IGl0ZW0udmFyaWFudHMuZWRnZXNbMF0ubm9kZS5wcmljZTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8UmVzb3VyY2VMaXN0Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbWVkaWE9e21lZGlhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWNjZXNzaWJpbGl0eUxhYmVsPXtgVmlldyBkZXRhaWxzIGZvciAke2l0ZW0udGl0bGV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUuc2V0KCdpdGVtJywgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdG9yZS5zZXQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdFRvUHJvZHVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtIGZpbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7cHJpY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkV4cGlyZXMgb24ge3R3b1dlZWtzRnJvbU5vd30gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUmVzb3VyY2VMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA8L1F1ZXJ5PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAgZXhwb3J0IGRlZmF1bHQgUmVzb3VyY2VMaXN0V2l0aFByb2R1Y3RzO1xyXG4iLCJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xyXG5pbXBvcnQge1xyXG4gIENhcmQsXHJcbiAgUGFnZSxcclxuICBEYXRhVGFibGUsXHJcbiAgUGFnaW5hdGlvbixcclxuICBCdXR0b25cclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdCc7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9zZWxlY3Rkcm9wJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcblxyXG5cclxuY29uc3QgR0VUX09SREVSU19CWV9JRCA9IGdxbGBcclxucXVlcnkge1xyXG4gIG9yZGVycyhmaXJzdDogNTApIHtcclxuICAgIGVkZ2VzIHtcclxuICAgICAgY3Vyc29yXHJcbiAgICAgIG5vZGUge1xyXG4gICAgICAgIG5hbWVcclxuICAgICAgICBlbWFpbFxyXG4gICAgICAgIGNyZWF0ZWRBdFxyXG4gICAgICAgIGZ1bGZpbGxtZW50c3tcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICB0cmFja2luZ0luZm97XHJcbiAgICAgICAgICAgIGNvbXBhbnlcclxuICAgICAgICAgICAgbnVtYmVyXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlc3RpbWF0ZWREZWxpdmVyeUF0XHJcbiAgICAgICAgICBkZWxpdmVyZWRBdFxyXG4gICAgICAgICAgZGlzcGxheVN0YXR1c1xyXG4gICAgICAgICAgc3RhdHVzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNoaXBwaW5nTGluZXtcclxuICAgICAgICAgIGNhcnJpZXJJZGVudGlmaWVyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1c3RvbWVye1xyXG4gICAgICAgICAgZmlyc3ROYW1lXHJcbiAgICAgICAgICBsYXN0TmFtZVxyXG4gICAgICAgICAgZW1haWxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1gO1xyXG5cclxudmFyIHJldG91ckR1R2V0ID0gW107XHJcblxyXG4vKmxldCBBdXRoVXNlciA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgcmV0dXJuIGdvb2dsZS5sb2dpbihkYXRhLnVzZXJuYW1lLCBkYXRhLnBhc3N3b3JkKS50aGVuKHRva2VuID0+IHsgcmV0dXJuIHRva2VuIH0gKVxyXG4gfVxyXG4gbGV0IHVzZXJUb2tlbiA9IGF3YWl0IEF1dGhVc2VyKGRhdGEpXHJcbiBjb25zb2xlLmxvZyh1c2VyVG9rZW4pKi9cclxuXHJcbi8qIGxldCBjYWxsR2V0ID0gZnVuY3Rpb24oKXtcclxuICAgY29uc29sZS5sb2coXCJheGlvc1wiKSBcclxuIHZhciByZXRvdXJEZUZpbjtcclxuIHJldG91ckR1R2V0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9cIitLRVlfTkdST0tCQUNLK1wiLm5ncm9rLmlvL2dldFN0YXRlT3JkZXJcIiwge2hlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuIC50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICBjb25zb2xlLmxvZyhcInJlc3VsdCBkYW5zIGxlIHRoZW4gZGFucyBsZSBjYWxsXCIpXHJcbiAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKVxyXG4gICByZXRvdXJEZUZpbiA9IHJlc3VsdC5kYXRhXHJcbiAgIHJldHVybiByZXN1bHQuZGF0YTtcclxuIH0pXHJcbiAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcclxuLy8gcmV0b3VyRHVHZXQgPSBheGlvcy5nZXQoXCJodHRwczovL1wiK0tFWV9OR1JPS0JBQ0srXCIubmdyb2suaW8vZ2V0U3RhdGVPcmRlclwiLCB7aGVhZGVyczoge1wiQ29udGVudC1UeXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJ319KS52YWx1ZS5kYXRhXHJcbmNvbnNvbGUubG9nKFwicmVzdWx0IMOgIGxhIGZpbiBkdSBjYWxsXCIpXHJcbmNvbnNvbGUubG9nKHJldG91ckRlRmluKSBcclxucmV0dXJuIHJldG91ckRlRmluXHJcbn0qL1xyXG5cclxuLyphc3luYyBmdW5jdGlvbiBjYWxsR2V0KCl7XHJcbiAgY29uc29sZS5sb2coXCJheGlvc1wiKSBcclxuICB2YXIgcmV0b3VyRGVGaW47XHJcbiAgcmV0b3VyRHVHZXQgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL1wiK0tFWV9OR1JPS0JBQ0srXCIubmdyb2suaW8vZ2V0U3RhdGVPcmRlclwiLCB7aGVhZGVyczoge1wiQ29udGVudC1UeXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG4gIC50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgY29uc29sZS5sb2coXCJyZXN1bHQgZGFucyBsZSB0aGVuIGRhbnMgbGUgY2FsbFwiKVxyXG4gICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpXHJcbiAgICByZXRvdXJEZUZpbiA9IHJlc3VsdC5kYXRhXHJcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XHJcbiAgfSlcclxuICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcclxuIC8vIHJldG91ckR1R2V0ID0gYXhpb3MuZ2V0KFwiaHR0cHM6Ly9cIitLRVlfTkdST0tCQUNLK1wiLm5ncm9rLmlvL2dldFN0YXRlT3JkZXJcIiwge2hlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiAnYXBwbGljYXRpb24vanNvbid9fSkudmFsdWUuZGF0YVxyXG4gY29uc29sZS5sb2coXCJyZXN1bHQgw6AgbGEgZmluIGR1IGNhbGxcIilcclxuIGNvbnNvbGUubG9nKHJldG91ckRlRmluKSBcclxuIHJldHVybiByZXRvdXJEZUZpblxyXG59Ki9cclxuXHJcblxyXG5mdW5jdGlvbiBjYWxsR2V0KCkge1xyXG4gIGNvbnNvbGUubG9nKFwiYXhpb3NcIilcclxuICBheGlvcy5nZXQoXCJodHRwczovL1wiICsgS0VZX05HUk9LQkFDSyArIFwiLm5ncm9rLmlvL2dldFN0YXRlT3JkZXJcIiwgeyBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH0pXHJcbiAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicnJydFwiKVxyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSlcclxuICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhXHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRDb2wobWF0cml4LCBjb2wpIHtcclxuICB2YXIgY29sdW1uID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRyaXgubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbHVtbi5wdXNoKG1hdHJpeFtpXVtjb2xdKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbHVtbjtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIERhdGFUYWJsZUV4YW1wbGUoZGF0YSkge1xyXG5cclxuICBmdW5jdGlvbiBjYWxsR2V0U3RhdGVPcmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZGFucyBnZXRPcmRlcnMgYXhpb3MgY2FsbCBnZXQgc3RhdGUgb3JkZXJcIilcclxuICAgIGNvbnNvbGUubG9nKFwiaHR0cHM6Ly9cIiArIEtFWV9OR1JPS0JBQ0sgKyBcIi5uZ3Jvay5pby9nZXRTdGF0ZU9yZGVyXCIsIHsgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiAnYXBwbGljYXRpb24vanNvbicgfSB9KVxyXG4gICAgcmV0dXJuIGF4aW9zLmdldChcImh0dHBzOi8vXCIgKyBLRVlfTkdST0tCQUNLICsgXCIubmdyb2suaW8vZ2V0U3RhdGVPcmRlclwiLCB7IGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nIH0gfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGl0ZW1zID0gZGF0YS5vcmRlcnMuZWRnZXM7XHJcbiAgY29uc29sZS5sb2coXCJhbHBoYSBwaGFzZVwiKVxyXG4gIGNhbGxHZXQoKVxyXG4gIC8vY29uc29sZS5sb2coY2FsbEdldCgpKVxyXG4gIC8vY29uc29sZS5sb2coKCkgPT4gY2FsbEdldCgpKVxyXG5cclxuXHJcbiAgZnVuY3Rpb24gaXRlbXNUb05vZGUoeyBjdXJzb3IsIG5vZGUgfSkge1xyXG4gICAgcmV0dXJuIHsgbm9kZSB9Lm5vZGVcclxuICB9O1xyXG5cclxuXHJcbiAgZnVuY3Rpb24gbm9kZVRvUm93cyhub2RlLCBidWlsZGluZ1Jhdykge1xyXG4gICAgLypjb25zb2xlLmxvZyhcIm5vZGVcIilcclxuICAgIGNvbnNvbGUubG9nKG5vZGUpXHJcbiAgICBjb25zb2xlLmxvZygnZGFucyBsYSBsYW1iZGEgcHJvZm9uZGUnKSovXHJcbiAgICBPYmplY3QuZW50cmllcyhub2RlKS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgLypjb25zb2xlLmxvZyhlbGVtZW50WzBdICE9PSAnX190eXBlbmFtZScpXHJcbiAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnRbMF0gIT0gJ19fdHlwZW5hbWUnKVxyXG4gICAgICBjb25zb2xlLmxvZyhlbGVtZW50WzBdKSovXHJcblxyXG4gICAgICBpZiAoZWxlbWVudFswXSAhPT0gJ19fdHlwZW5hbWUnKSB7XHJcbiAgICAgICAgLyogY29uc29sZS5sb2coYnVpbGRpbmdSYXcpXHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFtlbGVtZW50WzFdXSlcclxuICAgICAgICAgY29uc29sZS5sb2coYnVpbGRpbmdSYXcuY29uY2F0KFtlbGVtZW50WzFdXSkpXHJcbiAgICAgICAgIGNvbnNvbGUubG9nKCdfX19fX19fX19fX18nKSovXHJcbiAgICAgICAgYnVpbGRpbmdSYXcgPSAodHlwZW9mIGVsZW1lbnRbMV0gPT09ICdvYmplY3QnICYmIGVsZW1lbnRbMV0gIT09IG51bGwpID8gbm9kZVRvUm93cyhlbGVtZW50WzFdLCBidWlsZGluZ1JhdykgOiBidWlsZGluZ1Jhdy5jb25jYXQoW2VsZW1lbnRbMV1dKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYnVpbGRpbmdSYXc7XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbiAgLyogY29uc29sZS5sb2coJ2l0ZW1zLm1hcChpdGVtc1RvTm9kZSknKVxyXG4gICBjb25zb2xlLmxvZyhpdGVtcy5tYXAoaXRlbXNUb05vZGUpKSovXHJcbiAgdmFyIHJvd3MgPSBbXTtcclxuICBpdGVtcy5tYXAoaXRlbXNUb05vZGUpLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuICAgIC8qIGNvbnNvbGUubG9nKCdrZXksdmFsdWUnKVxyXG4gICAgIGNvbnNvbGUubG9nKGtleSlcclxuICAgICBjb25zb2xlLmxvZyh2YWx1ZSkqL1xyXG4gICAgcm93c1trZXldID0gbm9kZVRvUm93cyh2YWx1ZSwgW10pXHJcbiAgfSlcclxuXHJcbiAgZnVuY3Rpb24gaW5pdFJvd3MoZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coJ0luaXQgcm93cycpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgcm93cy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJ0LCBpbmRleCkge1xyXG5cclxuICAgICAvKiB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgIHN0b3JlLnNldCgnZXRhdCcrdGhpcy5wcm9wcy5pZCwgeyBpZCA6IHRoaXMucHJvcHMuaWQsIGNob2l4IDogZXZlbnQudGFyZ2V0LnZhbHVlfSlcclxuICAgICAgIHZhciBvcmRlclN0YXRlID0gKGV2ZW50LnRhcmdldC52YWx1ZSA9PSBcIlNlbGVjdOKAplwiKSA/IG51bGwgOiBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICBjb25zb2xlLmxvZyhvcmRlclN0YXRlKSovXHJcblxyXG4gICAgICAgLy9pbCBmYXV0IHNldHRlciB2YWx1ZWRlRGJTdGF0ZSBpc3N1ZSBkdSBzdGF0ZSBwbHV0b3QgcXVlIGRlIGNyw6llciB1bmUgbm91dmVsbGUgcHJvcFxyXG4gICAgICByb3dzW2luZGV4XSA9IFs8U2VsZWN0IGlkPXtpbmRleH0gdmFsdWVEZURCPXsgZGF0YVtpbmRleF0ub3JkZXJfc3RhdGUgPT0gbnVsbCA/IDk5NDkgOiBkYXRhW2luZGV4XS5vcmRlcl9zdGF0ZX0+PC9TZWxlY3Q+XS5jb25jYXQocGFydCk7XHJcbiAgICAgICAgLy8uc2V0U3RhdGUoe3ZhbHVlIDogZGF0YVtpbmRleF0ub3JkZXJfc3RhdGV9KV1cclxuICAgIH0sIHJvd3MpO1xyXG4gIFxyXG4gICAgdmFyIGNvbG9uZURlc0V0YXRzQVNldHRlciA9IGdldENvbChyb3dzLCAwKVxyXG4gICAgY29uc29sZS5sb2coXCJjb2xvbm5lIGRlcyBzZWxlY3RcIilcclxuICAgIGNvbnNvbGUubG9nKGNvbG9uZURlc0V0YXRzQVNldHRlcilcclxuICAgIHZhciBjb2xvbmVEZXNOYW1lc0lkcyA9IGdldENvbChyb3dzLCAxKVxyXG4gIFxyXG4gIH1cclxuXHJcbiAgdmFyIHJvd3NGcm9tREIgPSBbXTtcclxuXHJcbiAgY2FsbEdldFN0YXRlT3JkZXIoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2FsbCBnZXQgc3RhdGUgb3JkZXIgY2FsbGJhY2tcIilcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKVxyXG4gICAgaW5pdFJvd3MocmVzdWx0LmRhdGEpXHJcbiAgfSlcclxuXHJcbiAgLyoqIFNBTUlBIERFQlVUXHJcbiAgcm93cy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJ0LCBpbmRleCkge1xyXG4gICAgLy9heGlvcy5nZXRFdGF0IGR1IHNlbGVjdCDDoCBzZXR0ZXIgKGVuIGZvbmN0aW9uIGRlIGxhIHBhZ2UgZXQgZHUgdHJpIChsZSB0cmkgZG9pdCBldHJlIGdsb2JhbCBkYW5zIHVuIHByZW1pZXIgdGVtcHMgZXQgcHVpcyBvbiBwb3VycmEgZmFpcmUgdW4gdHJpIHN1ciBsZXMgc2V1bHMgw6lsw6ltZW50cyBkZSBsYSBwYWdlIGF1c3NpKSlcclxuICAgIHJvd3NbaW5kZXhdID0gWzxTZWxlY3QgaWQ9e2luZGV4fT48L1NlbGVjdD5dLmNvbmNhdChwYXJ0KTtcclxuICB9LCByb3dzKTtcclxuXHJcbiAgY29uc29sZS5sb2coJ3Jvd3MnKTtcclxuICBjb25zb2xlLmxvZyhyb3dzKTtcclxuXHJcbiAgLy9vbiBuZSB0aWVudCBwYXMgZW5jb3JlIGNvbXB0ZSBkZSBsYSBwYWdpbmF0aW9uXHJcbiAgdmFyIGNvbG9uZURlc0V0YXRzQVNldHRlciA9IGdldENvbChyb3dzLCAwKVxyXG4gIGNvbnNvbGUubG9nKCd2aWRlPycpXHJcbiAgY29uc29sZS5sb2coY29sb25lRGVzRXRhdHNBU2V0dGVyKVxyXG4gIHZhciBjb2xvbmVEZXNOYW1lc0lkcyA9IGdldENvbChyb3dzLCAxKVxyXG5cclxuICB2YXIgcm93c0Zyb21EQiA9IFtdO1xyXG4gIGNvbnNvbGUubG9nKHJvd3NGcm9tREIpXHJcbiAgY29uc29sZS5sb2coXCJiZXRhIHBoYXNlXCIpXHJcbiAgU0FNSUEgRklOICoqL1xyXG5cclxuICAvKmxldCBBdXRoVXNlciA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgIHJldHVybiBnb29nbGUubG9naW4oZGF0YS51c2VybmFtZSwgZGF0YS5wYXNzd29yZCkudGhlbih0b2tlbiA9PiB7IHJldHVybiB0b2tlbiB9IClcclxuICB9XHJcbiAgbGV0IHVzZXJUb2tlbiA9IGF3YWl0IEF1dGhVc2VyKGRhdGEpXHJcbiAgY29uc29sZS5sb2codXNlclRva2VuKSovXHJcblxyXG5cclxuICBjb25zb2xlLmxvZyhjYWxsR2V0KCkpXHJcbiAgdmFyIHJldG91ckR1Q2FsbEdldDtcclxuICAvKmNvbnNvbGUubG9nKGNhbGxHZXQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgY29uc29sZS5sb2coXCJsZSByZXN1bHQgZGFucyBsZSB0aGVuXCIpXHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpIC8vIFwiU29tZSBVc2VyIHRva2VuXCJcclxuICAgIHJldG91ckR1Q2FsbEdldCA9IHJlc3VsdDtcclxuICAgIGNvbnNvbGUubG9nKCdyZXNvbGV2ZWVlJylcclxuICAgIC8vcmVzb2x2ZShyZXN1bHQpXHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbiB9KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gIGNvbnNvbGUubG9nKFwibGUgcmVzdWx0IGRhbnMgbGUgdGhlblwiKVxyXG4gIGNvbnNvbGUubG9nKHJlc3VsdCkgLy8gXCJTb21lIFVzZXIgdG9rZW5cIlxyXG4gIHJldG91ckR1Q2FsbEdldCA9IHJlc3VsdDtcclxuICByZXR1cm4gcmVzdWx0XHJcbn0pKSovXHJcbiAgY29uc29sZS5sb2coXCJyZXRvdXJEdUNhbGxHZXRcIilcclxuICBjb25zb2xlLmxvZyhyZXRvdXJEdUNhbGxHZXQpXHJcbiAgLypyZXRvdXJEdUNhbGxHZXQuZm9yRWFjaCgodmFsdWUsIGtleSk9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSlcclxuXHJcbiAgICByb3dzRnJvbURCW2tleV0gPSBub2RlVG9Sb3dzKHZhbHVlLFtdKSBcclxuICAgfSkqL1xyXG4gIGNvbnNvbGUubG9nKFwicm93c0Zyb21EQlwiKVxyXG4gIGNvbnNvbGUubG9nKHJvd3NGcm9tREIpXHJcblxyXG5cclxuICBjb25zb2xlLmxvZyhcIlJPV1NTXCIpXHJcbiAgY29uc29sZS5sb2cocm93cylcclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2UgZnVsbFdpZHRoPVwidHJ1ZVwiPlxyXG4gICAgICA8Q2FyZD5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGNhbGxHZXQoKX0+RXhhbXBsZSBidXR0b248L0J1dHRvbj5cclxuICAgICAgICB7Ly9yZXRvdXJEdUdldFxyXG4gICAgICAgIH1cclxuICAgICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgICBjb2x1bW5Db250ZW50VHlwZXM9e1tcclxuICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgICAgICd0ZXh0JyxcclxuICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgICAgICd0ZXh0JyxcclxuICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICAgIGhlYWRpbmdzPXtbXHJcbiAgICAgICAgICAgICdpZCcsXHJcbiAgICAgICAgICAgICduYW1lJyxcclxuICAgICAgICAgICAgJ2VtYWlsJyxcclxuICAgICAgICAgICAgJ2pjcCcsXHJcbiAgICAgICAgICAgICdqY3AnLFxyXG4gICAgICAgICAgICAnamNwJyxcclxuICAgICAgICAgICAgJ2pjcCcsXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgICAgLy9pbCBmYXV0IHLDqWN1cMOpcmVyIGxlcyBvcmRlciBzdGF0ZXMgZGUgbGEgZGIgZXQgcGV1dCBldHJlIGxlcyBtZXR0cmUgZW4gY2FjaGUgY2Egc2VyYWl0IGNvb2xcclxuICAgICAgICAgIHJvd3M9e3Jvd3N9XHJcbiAgICAgICAgLy8nPGltZyBzcmM9XCInK2RhdGErJ1wiPidcclxuXHJcbiAgICAgICAgLypzb3VyY2U9e1xyXG4gICAgICAgICAgaXRlbS5ub2RlLmxpbmVJdGVtcy5lZGdlc1swXVxyXG4gICAgICAgICAgICA/IGl0ZW0ubm9kZS5saW5lSXRlbXMuZWRnZXNbMF0ubm9kZS5pbWFnZS5vcmlnaW5hbFNyY1xyXG4gICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgfSovXHJcbiAgICAgICAgLy90b3RhbHM9e1snJywgJycsICcnLCAyNTUsICckMTU1LDgzMC4wMCddfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvUGFnZT5cclxuXHJcblxyXG4gICk7XHJcbn1cclxuXHJcbmNsYXNzIFJlc291cmNlTGlzdFdpdGhPcmRlcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UXVlcnkgcXVlcnk9e0dFVF9PUkRFUlNfQllfSUR9PlxyXG4gICAgICAgIHsoeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkRBVEFcIilcclxuICAgICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5n4oCmPC9kaXY+O1xyXG4gICAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEub3JkZXJzLmVkZ2VzKTtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YS5vcmRlcnMuZWRnZXNbMF0ubm9kZS5saW5lSXRlbXMuZWRnZXNbMF0ubm9kZS5pbWFnZS5vcmlnaW5hbFNyYyk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgRGF0YVRhYmxlRXhhbXBsZShkYXRhKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9fVxyXG4gICAgICA8L1F1ZXJ5PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbi8qPENhcmQ+XHJcbiAgPHA+TGVzIDUwIGRlcm5pw6hyZXMgY29tbWFuZGVzPC9wPlxyXG4gIDxSZXNvdXJjZUxpc3RcclxuICAgIHNob3dIZWFkZXJcclxuICAgIHJlc291cmNlTmFtZT17eyBzaW5ndWxhcjogJ09yZGVyJywgcGx1cmFsOiAnT3JkZXJzJyB9fVxyXG4gICAgaXRlbXM9e2RhdGEub3JkZXJzLmVkZ2VzfVxyXG4gICAgcmVuZGVySXRlbT17aXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IG9yZGVyTmFtZSA9IGl0ZW0ubm9kZS5uYW1lXHJcbiAgICAgIGNvbnN0IG1lZGlhID0gKFxyXG4gICAgICAgIDxUaHVtYm5haWxcclxuICAgICAgICAgIHNvdXJjZT17XHJcbiAgICAgICAgICAgIGl0ZW0ubm9kZS5saW5lSXRlbXMuZWRnZXNbMF1cclxuICAgICAgICAgICAgICA/IGl0ZW0ubm9kZS5saW5lSXRlbXMuZWRnZXNbMF0ubm9kZS5pbWFnZS5vcmlnaW5hbFNyY1xyXG4gICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBwcmljZSA9IGl0ZW0ubm9kZS5uZXRQYXltZW50U2V0LnNob3BNb25leS5hbW91bnQ7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgXHJcbiAgICAgICAgPFJlc291cmNlTGlzdC5JdGVtXHJcbiAgICAgICAgbWVkaWEgPSB7b3JkZXJOYW1lfVxyXG4gICAgICAgICAvLyBpZD17aXRlbS5pZH1cclxuICAgICAgICAgIG1lZGlhPXttZWRpYX1cclxuICAgICAgICAgIC8vYWNjZXNzaWJpbGl0eUxhYmVsPXtgVmlldyBkZXRhaWxzIGZvciAke2l0ZW0udGl0bGV9YH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgLy9zdG9yZS5zZXQoJ2l0ZW0nLCBpdGVtKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0b3JlLnNldCcpXHJcbiAgICAgICAgICAgIC8vcmVkaXJlY3RUb1Byb2R1Y3QoKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFN0YWNrPlxyXG4gICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPHA+e29yZGVyTmFtZX08L3A+XHJcbiAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgPFN0YWNrLkl0ZW0gZmlsbD5cclxuICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0ubm9kZS5pZH1cclxuICAgICAgICAgICAgICAgIDwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPHA+JHtwcmljZX08L3A+XHJcbiAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPHA+RXhwaXJlcyBvbiBSIDwvcD5cclxuICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICA8L1Jlc291cmNlTGlzdC5JdGVtPlxyXG4gICAgICApO1xyXG4gICAgfX1cclxuICAvPlxyXG48L0NhcmQ+XHJcbik7XHJcbn19XHJcbjwvUXVlcnk+XHJcbik7XHJcbn1cclxufSovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNvdXJjZUxpc3RXaXRoT3JkZXJzOyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICdzdG9yZS1qcyc7XHJcblxyXG4vKmNvbnN0IGRvdGVudiA9IHJlcXVpcmUoJ2RvdGVudicpO1xyXG5jb25zdCBuZXh0ID0gcmVxdWlyZSgnbmV4dCcpO1xyXG5kb3RlbnYuY29uZmlnKCk7XHJcbmNvbnN0IGRldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbic7XHJcbmNvbnN0IGFwcCA9IG5leHQoeyBkZXYgfSk7XHJcbmNvbnN0IHsgUkVBQ1RfQVBQX05HUk9LQkFDSyB9ID0gcHJvY2Vzcy5lbnY7XHJcbmNvbnN0IGhhbmRsZSA9IGFwcC5nZXRSZXF1ZXN0SGFuZGxlcigpO1xyXG5cclxuY29uc29sZS5sb2cocHJvY2Vzcy5lbnYpXHJcbmFwcC5wcmVwYXJlKCkudGhlbigoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJpbiBhcHAgcHJlcGFyZVwiKVxyXG4gIGNvbnNvbGUubG9nKFJFQUNUX0FQUF9OR1JPS0JBQ0spXHJcbn0pOyovXHJcblxyXG5cclxuLy9jb25zdCB7UkVBQ1RfQVBQX25ncm9rQmFja30gPSBwcm9jZXNzLmVudjtcclxuLy9jb25zdCBuZ3Jva0JhY2sgPSBSRUFDVF9BUFBfbmdyb2tCYWNrO1xyXG5jb25zb2xlLmxvZygnY0FjQUFBQUFBQUFBQUFBQUFBQUFBQUFBJylcclxuY29uc29sZS5sb2coS0VZX05HUk9LQkFDSylcclxuXHJcbi8vY2xhc3MgU2VsZWN0IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcbmNsYXNzIFNlbGVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICBjb25zb2xlLmxvZyhcImRhbnMgY29uc3RydWN0ZXVyLCBwcHJvcHMgcHVpcyB0aGlzXCIpXHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcylcclxuICAgIGNvbnNvbGUubG9nKHRoaXMpXHJcbiAgICB0aGlzLnN0YXRlLnZhbHVlRGVEYlN0YXRlID0gcHJvcHMudmFsdWVEZURCXHJcbiAgfVxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAnU2VsZWN04oCmJyxcclxuICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ0EnLFxyXG4gICAgICAgICAgdmFsdWU6IDQ0NCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICdCJyxcclxuICAgICAgICAgIHZhbHVlOiAzMzMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAnQycsXHJcbiAgICAgICAgICB2YWx1ZTogMjIyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIHZhbHVlOiAnPycsXHJcbiAgICAgIHZhbHVlRGVEYlN0YXRlIDogJycsXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBcclxuICBcclxuICAgIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgY29uc29sZS5sb2coXCJhemVydHl1aW9wXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMpXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudmFsdWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcylcclxuXHJcblxyXG4vL0w0RVJSRVVSIEVTVCBJQ0ksIGlsIGZhdXQgYXJyZXRlciBkJ3V0aWxpc2VyIFZhbHVlRGVEYiBkZSBwcm9wcyBtYWlzIHV0aWxpc2VyIFZhbHVlRGVEQlN0YXRlIGR1IFN0YXRlIDopXHJcbiAgICAgLyogT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdzdGF0ZScsIHtcclxuICAgICAgICB2YWx1ZURlRGJTdGF0ZTogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZVxyXG4gICAgICB9KTsqL1xyXG5cclxuICAgICAgLy9leGVtcGxlIHN1ciBsZXF1ZWwgcydhcHB1eWVyIHBvdXIgc2V0dGVyIGxlIHN0YXRlXHJcbiAgICAvKiAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xyXG4gICAgICAgIGxldCBqYXNwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBwcmV2U3RhdGUuamFzcGVyKTsgIC8vIGNyZWF0aW5nIGNvcHkgb2Ygc3RhdGUgdmFyaWFibGUgamFzcGVyXHJcbiAgICAgICAgamFzcGVyLm5hbWUgPSAnc29tZW90aGVybmFtZSc7ICAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBuYW1lIHByb3BlcnR5LCBhc3NpZ24gYSBuZXcgdmFsdWUgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7IGphc3BlciB9OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiBuZXcgb2JqZWN0IGphc3BlciBvYmplY3RcclxuICAgICAgfSkqL1xyXG5cclxuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS52YWx1ZURlRGJTdGF0ZSlcclxuICAgICAgdGhpcy5zdGF0ZS52YWx1ZURlRGJTdGF0ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgdGhpcy5zdGF0ZS52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS52YWx1ZURlRGJTdGF0ZSlcclxuXHJcbiAgICAgIC8vdGhpcy5wcm9wcy52YWx1ZURlREIgPSBldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgc3RvcmUuc2V0KCdldGF0Jyt0aGlzLnByb3BzLmlkLCB7IGlkIDogdGhpcy5wcm9wcy5pZCwgY2hvaXggOiBldmVudC50YXJnZXQudmFsdWV9KVxyXG5cclxuICAgICAgdmFyIG9yZGVyU3RhdGUgPSAoZXZlbnQudGFyZ2V0LnZhbHVlID09IFwiU2VsZWN04oCmXCIpID8gbnVsbCA6IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgY29uc29sZS5sb2cob3JkZXJTdGF0ZSlcclxuXHJcblxyXG4gICAgICAvL2NvbnNvbGUubG9nKFJFQUNUX0FQUF9uZ3Jva0JhY2spXHJcblxyXG4gICAgICAvL2wnaWQgcXUnb24gZW52b2llIGVuIHBhcmFtcyBlc3QgbCdpZCBkdSBzZWxlY3QgZGFucyBsYSBwYWdlIGNvbmNlcm7DqWUuIGlsIGZhdWRyYSBsZSBmYWlyZSBjb3JyZXNwb25kcmUgYXUgdnJhaSBJRCBlbiBmb25jdGlvbiBkZSBsYSBwYWdpbmF0aW9uIGV0IGR1IHRyaSBkZSBsYSBkYXRhdGFibGVcclxuICAgICAgYXhpb3MucHV0KFxyXG4gICAgICAgIC8vXCJodHRwczovLzU0N2Y0MTdjYzMyOS5uZ3Jvay5pby9oYW5kbGVcIiwgXHJcbiAgICAgICAgXCJodHRwczovL1wiK0tFWV9OR1JPS0JBQ0srXCIubmdyb2suaW8vaGFuZGxlXCIsIFxyXG4gICAgICAgIHtcIm9yZGVyX3N0YXRlXCIgOiBvcmRlclN0YXRlfSwgXHJcbiAgICAgICAge3BhcmFtczogeyBpZDp0aGlzLnByb3BzLmlkKzEgfSwgaGVhZGVyczoge1wiQ29udGVudC1UeXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJ319XHJcbiAgICApXHJcbiAgICBcclxuXHJcblxyXG4gICAgICAvL2F4aW9zLnB1dChcImh0dHBzOi8vXCIrUkVBQ1RfQVBQX25ncm9rQmFjaytcIi5uZ3Jvay5pby9oYW5kbGVcIiwge30pXHJcbiAgICAgLy8gXCJwcm94eVwiOiBcImh0dHA6Ly8ke1JFQUNUX0FQUF9uZ3Jva0JhY2t9Lm5ncm9rLmlvXCIsXHJcblxyXG5cclxuICAgICAgLy9heGlvcy5wdXQoXCJsb2NhbGhvc3Q6NTAwMC9oYW5kbGVcIiwge30pXHJcblxyXG4gICAgICAvKi50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuICAgICAgICBjb25zb2xlLmxvZygneXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXknKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICB9KSovXHJcblxyXG5cclxuICAgICAgLyogdmFyIHNxbCA9IFwiVVBEQVRFIG9yZGVycyBTRVQgb3JkZXJfc3RhdGUgPSA2IFdIRVJFIG9yZGVyX2lkPTFcIjtcclxuICAgICAgICBjb24ucXVlcnkoc3FsLCBmdW5jdGlvbiAoZXJyLCByZXN1bHQpIHtcclxuICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5hZmZlY3RlZFJvd3MgKyBcIiByZWNvcmQocykgdXBkYXRlZFwiKTtcclxuICAgICAgICB9KTsqL1xyXG4gICAgfTtcclxuICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3JlbmRlcicpXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXHJcbiAgICAgIGNvbnNvbGUubG9nKCd2YWx1ZScpXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMudmFsdWVEZURCKVxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZhbHVlRGVEYlN0YXRlKVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgIHZhciB7IG9wdGlvbnMsIHZhbHVlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICB2YXIgY3VycmVudElkO1xyXG4gICAgICB2YXIgZXRhdEZyb21TdG9yZTtcclxuICAgICAgLy9pY2ksIGlsIGZhdXQgY2hvaXNpciBzaSB2YWx1ZSBlc3QgY2VsdWkgZGUgbGEgYmRkICjDoCBsJ2luaXRpYWxpc2F0aW9uKSwgb3UgY2VsdWkgcXUnb24gdmllbiBkZSBjaG9pc2lyLCggYXByZXMgdW4gcHV0KVxyXG4gICAgICAvL3ZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZURlREIgPT0gbnVsbCA/IDk5NDkgOiB0aGlzLnByb3BzLnZhbHVlRGVEQjtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudmFsdWVEZURiU3RhdGUgPT0gbnVsbCB8fCB0aGlzLnN0YXRlLnZhbHVlRGVEYlN0YXRlID09ICdTZWxlY3TigKYnIClcclxuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS52YWx1ZURlRGJTdGF0ZSA9PSBudWxsIClcclxuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS52YWx1ZURlRGJTdGF0ZSA9PSAnU2VsZWN04oCmJyApXHJcbiAgICAgIGNvbnNvbGUubG9nKHRydWUgfHwgZmFsc2UpXHJcblxyXG4gICAgICB2YWx1ZSA9ICh0aGlzLnN0YXRlLnZhbHVlRGVEYlN0YXRlID09IG51bGwgfHwgdGhpcy5zdGF0ZS52YWx1ZURlRGJTdGF0ZSA9PSAnU2VsZWN04oCmJyApPyA5OTQ5IDogdGhpcy5zdGF0ZS52YWx1ZURlRGJTdGF0ZTtcclxuICAgICAgdmFyIHZhbDtcclxuXHJcbiAgICAgIGN1cnJlbnRJZCA9IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgIGV0YXRGcm9tU3RvcmUgPSBzdG9yZS5nZXQoJ2V0YXQnK2N1cnJlbnRJZCksXHJcbiAgICAgIHZhbCA9IHZhbHVlO1xyXG5cclxuICAgICAgLy9wb3VyIHNldHRlciBsYSBsaWduZSAxIChwYXMgbGEgMCkgw6AgdW5kZWZpbmVkXHJcbiAgICAgIC8vZXRhdEZyb21TdG9yZS5pZCA9PSAxID8gZXRhdEZyb21TdG9yZSA9IHVuZGVmaW5lZCA6ICcnLFxyXG5cclxuICAgICAgZXRhdEZyb21TdG9yZSA9PSB1bmRlZmluZWQgPyBcclxuICAgICAgc3RvcmUuc2V0KCdldGF0JytjdXJyZW50SWQseyBpZCA6IGN1cnJlbnRJZCwgY2hvaXggOiB2YWx9KSA6IFxyXG4gICAgICB2YWw9ZXRhdEZyb21TdG9yZS5jaG9peCA9PSBudWxsID8gOTk0OSA6IGV0YXRGcm9tU3RvcmUuY2hvaXg7XHJcbiAgICAgIC8vY29uc29sZS5sb2coJ2V0YXQnICsgY3VycmVudElkKSxcclxuICAgICAgLy9jb25zb2xlLmxvZyhldGF0RnJvbVN0b3JlKVxyXG4gICAgICAvL2NvbnNvbGUubG9nKGV0YXRGcm9tU3RvcmUgPT0gdW5kZWZpbmVkID8gJ3BhcyBkXFwnaWQnIDogZXRhdEZyb21TdG9yZS5pZCksXHJcblxyXG5cclxuXHJcbiAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMnKVxyXG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMpXHJcblxyXG4gIFxyXG5cclxuICAgICAvLyA8c2VsZWN0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3ZhbHVlfT5cclxuXHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dmFsfT5cclxuICAgICAgICAgICAge29wdGlvbnMubWFwKGl0ZW0gPT4gKFxyXG5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuIFxyXG4gICAgICAgICAgICAgIC8qY29uc29sZS5sb2coJ2V0YXQnK2N1cnJlbnRJZCksXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXRhdEZyb21TdG9yZSksXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXRhdEZyb21TdG9yZSA9PSB1bmRlZmluZWQpLFxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV0YXRGcm9tU3RvcmUgPT0gdW5kZWZpbmVkID8gJ3BhcyBkXFwnaWQnIDogZXRhdEZyb21TdG9yZS5pZCksXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXRhdEZyb21TdG9yZSA9PSB1bmRlZmluZWQgPyAncGFzIGRlIGNob2l4IGNob2lzaScgOiBldGF0RnJvbVN0b3JlLmNob2l4KSxcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIm9wdGlvblwiKSxcclxuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGl0ZW0pLFxyXG4gICAgICAgICAgICAgIC8vY29uc29sZS5sb2coe3ZhbHVlfSksXHJcbiAgICAgICAgICAgICAgLypjb25zb2xlLmxvZyh0aGlzKSwqL1xyXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpdGVtLnZhbHVlfSB2YWx1ZT17aXRlbS52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPGgxPkZhdm9yaXRlIGxldHRlcjoge3ZhbHVlfTwvaDE+XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbiAgZXhwb3J0IGRlZmF1bHQgU2VsZWN0OyIsImltcG9ydCB7IEVtcHR5U3RhdGUsIExheW91dCwgUGFnZSB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgeyBSZXNvdXJjZVBpY2tlciwgVGl0bGVCYXIgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICdzdG9yZS1qcyc7XHJcbmltcG9ydCBSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHMgZnJvbSAnLi4vY29tcG9uZW50cy9SZXNvdXJjZUxpc3QnO1xyXG5pbXBvcnQgUmVzb3VyY2VMaXN0V2l0aE9yZGVycyBmcm9tICcuLi9jb21wb25lbnRzL2dldE9yZGVycyc7XHJcblxyXG5cclxuXHJcbi8vY29uc3QgaW1nID0gJ2h0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wNzU3Lzk5NTUvZmlsZXMvZW1wdHktc3RhdGUuc3ZnJztcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHsgb3BlbjogZmFsc2UgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBlbXB0eVN0YXRlID0gIXN0b3JlLmdldCgnaWRzJyk7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxSZXNvdXJjZUxpc3RXaXRoT3JkZXJzIC8+XHJcbiAgICApO31cclxuICAgIC8qcmV0dXJuIChcclxuICAgICAgPFBhZ2U+XHJcbiAgICAgICAgPFRpdGxlQmFyXHJcbiAgICAgICAgICB0aXRsZT1cIlNhbXBsZSBBcHBcIlxyXG4gICAgICAgICAgcHJpbWFyeUFjdGlvbj17e1xyXG4gICAgICAgICAgICBjb250ZW50OiAnU2VsZWN0IHByb2R1Y3RzJyxcclxuICAgICAgICAgICAgLy9jb21tZW50IGZhaXJlIDIgbGFtYmRhcyDDoCBsYSBzdWl0ZSBwb3VyIGF2b2lyIGF1c3NpIGxlIGNvbnNvbGUgbG9nP1xyXG4gICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSksXHJcbiAgICAgICAgICAgIC8vb25BY3Rpb246ICgpID0+IGNvbnNvbGUubG9nKCdjbGlja2VkZCcpLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxSZXNvdXJjZVBpY2tlclxyXG4gICAgICAgICAgcmVzb3VyY2VUeXBlPVwiUHJvZHVjdFwiXHJcbiAgICAgICAgICBzaG93VmFyaWFudHM9e2ZhbHNlfVxyXG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxyXG4gICAgICAgICAgb25TZWxlY3Rpb249eyhyZXNvdXJjZXMpID0+IHRoaXMuaGFuZGxlU2VsZWN0aW9uKHJlc291cmNlcyl9XHJcbiAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8RW1wdHlTdGF0ZVxyXG4gICAgICAgICAgICAgIGhlYWRpbmc9XCJTZWxlY3QgcHJvZHVjdHMgdG8gc3RhcnRcIlxyXG4gICAgICAgICAgICAgIGFjdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ1NlbGVjdCBwcm9kdWN0cycsXHJcbiAgICAgICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSksXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvL2ltYWdlPXtpbWd9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cD5TZWxlY3QgcHJvZHVjdHMgYW5kIGNoYW5nZSB0aGVpciBwcmljZSB0ZW1wb3JhcmlseTwvcD5cclxuICAgICAgICAgICAgPC9FbXB0eVN0YXRlPlxyXG4gICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICB7ZW1wdHlTdGF0ZSA/IChcclxuICAgICAgICAgICAgPFJlc291cmNlTGlzdFdpdGhPcmRlcnMgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgLy88UmVzb3VyY2VMaXN0V2l0aFByb2R1Y3RzIC8+XHJcbiAgICAgICAgICAgIDxSZXNvdXJjZUxpc3RXaXRoT3JkZXJzIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9QYWdlPlxyXG4gICAgKTtcclxuICB9XHJcbiAgaGFuZGxlU2VsZWN0aW9uID0gKHJlc291cmNlcykgPT4ge1xyXG4gICAgY29uc3QgaWRzRnJvbVJlc291cmNlcyA9IHJlc291cmNlcy5zZWxlY3Rpb24ubWFwKChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KVxyXG4gICAgY29uc29sZS5sb2cocmVzb3VyY2VzKVxyXG4gICAgY29uc29sZS5sb2coaWRzRnJvbVJlc291cmNlcylcclxuICAgIGNvbnNvbGUubG9nKHJlc291cmNlcy5pZClcclxuICAgIHN0b3JlLnNldCgnaWRzJywgaWRzRnJvbVJlc291cmNlcyk7XHJcbiAgfTsqL1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2hvcGlmeS9wb2xhcmlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwb2xsb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RvcmUtanNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==