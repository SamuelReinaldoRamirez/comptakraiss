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
  axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("https://" + "05ceedb332d7" + ".ngrok.io/getStateOrder", {
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
    console.log("https://" + "05ceedb332d7" + ".ngrok.io/getStateOrder", {
      headers: {
        "Content-Type": 'application/json'
      }
    });
    return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("https://" + "05ceedb332d7" + ".ngrok.io/getStateOrder", {
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
console.log("05ceedb332d7"); //class Select extends PureComponent {

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
      "https://" + "05ceedb332d7" + ".ngrok.io/handle", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXNvdXJjZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nZXRPcmRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWxlY3Rkcm9wLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYXBvbGxvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdG9yZS1qc1wiIl0sIm5hbWVzIjpbIkdFVF9QUk9EVUNUU19CWV9JRCIsImdxbCIsIlJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVyIiwiYXBwIiwiY29udGV4dCIsInJlZGlyZWN0VG9Qcm9kdWN0IiwicmVkaXJlY3QiLCJSZWRpcmVjdCIsImNyZWF0ZSIsImRpc3BhdGNoIiwiQWN0aW9uIiwiQVBQIiwidHdvV2Vla3NGcm9tTm93IiwiRGF0ZSIsIm5vdyIsInRvRGF0ZVN0cmluZyIsImlkcyIsInN0b3JlIiwiZ2V0IiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJub2RlcyIsIml0ZW0iLCJtZWRpYSIsImltYWdlcyIsImVkZ2VzIiwibm9kZSIsIm9yaWdpbmFsU3JjIiwiYWx0VGV4dCIsInByaWNlIiwidmFyaWFudHMiLCJpZCIsInRpdGxlIiwic2V0IiwiQ29udGV4dCIsIkdFVF9PUkRFUlNfQllfSUQiLCJyZXRvdXJEdUdldCIsImNhbGxHZXQiLCJheGlvcyIsIktFWV9OR1JPS0JBQ0siLCJoZWFkZXJzIiwidGhlbiIsInJlc3VsdCIsImdldENvbCIsIm1hdHJpeCIsImNvbCIsImNvbHVtbiIsImkiLCJsZW5ndGgiLCJwdXNoIiwiRGF0YVRhYmxlRXhhbXBsZSIsImNhbGxHZXRTdGF0ZU9yZGVyIiwiaXRlbXMiLCJvcmRlcnMiLCJpdGVtc1RvTm9kZSIsImN1cnNvciIsIm5vZGVUb1Jvd3MiLCJidWlsZGluZ1JhdyIsIk9iamVjdCIsImVudHJpZXMiLCJmb3JFYWNoIiwiZWxlbWVudCIsImluZGV4IiwiY29uY2F0Iiwicm93cyIsIm1hcCIsInZhbHVlIiwia2V5IiwiaW5pdFJvd3MiLCJwYXJ0Iiwib3JkZXJfc3RhdGUiLCJjb2xvbmVEZXNFdGF0c0FTZXR0ZXIiLCJjb2xvbmVEZXNOYW1lc0lkcyIsInJvd3NGcm9tREIiLCJyZXRvdXJEdUNhbGxHZXQiLCJSZXNvdXJjZUxpc3RXaXRoT3JkZXJzIiwiU2VsZWN0IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsIm9wdGlvbnMiLCJuYW1lIiwidmFsdWVEZURiU3RhdGUiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0Iiwic3RhdGUiLCJjaG9peCIsIm9yZGVyU3RhdGUiLCJwdXQiLCJwYXJhbXMiLCJ2YWx1ZURlREIiLCJjdXJyZW50SWQiLCJldGF0RnJvbVN0b3JlIiwidmFsIiwidW5kZWZpbmVkIiwiaGFuZGxlQ2hhbmdlIiwiSW5kZXgiLCJvcGVuIiwiZW1wdHlTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7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c0M7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAncmVhY3QtYXBvbGxvJztcclxuaW1wb3J0IHsgQ2FyZCxcclxuICAgIFJlc291cmNlTGlzdCxcclxuICAgIFN0YWNrLFxyXG4gICAgVGV4dFN0eWxlLFxyXG4gICAgVGh1bWJuYWlsLCB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnc3RvcmUtanMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucyc7XHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcclxuXHJcbmNvbnN0IEdFVF9QUk9EVUNUU19CWV9JRCA9IGdxbGBcclxuICBxdWVyeSBnZXRQcm9kdWN0cygkaWRzOiBbSUQhXSEpIHtcclxuICAgIG5vZGVzKGlkczogJGlkcykge1xyXG4gICAgICAuLi4gb24gUHJvZHVjdCB7XHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBoYW5kbGVcclxuICAgICAgICBkZXNjcmlwdGlvbkh0bWxcclxuICAgICAgICBpZFxyXG4gICAgICAgIGltYWdlcyhmaXJzdDogMSkge1xyXG4gICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICBvcmlnaW5hbFNyY1xyXG4gICAgICAgICAgICAgIGFsdFRleHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXJpYW50cyhmaXJzdDogMSkge1xyXG4gICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5cclxuY2xhc3MgUmVzb3VyY2VMaXN0V2l0aFByb2R1Y3RzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBjb250ZXh0VHlwZSA9IENvbnRleHQ7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGFwcCA9IHRoaXMuY29udGV4dDtcclxuICAgIGNvbnN0IHJlZGlyZWN0VG9Qcm9kdWN0ID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCByZWRpcmVjdCA9IFJlZGlyZWN0LmNyZWF0ZShhcHApO1xyXG4gICAgICByZWRpcmVjdC5kaXNwYXRjaChcclxuICAgICAgICBSZWRpcmVjdC5BY3Rpb24uQVBQLFxyXG4gICAgICAgICcvZWRpdC1wcm9kdWN0cycsXHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCB0d29XZWVrc0Zyb21Ob3cgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgMTIwOTZlNSkudG9EYXRlU3RyaW5nKCk7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgLy88UXVlcnkgcXVlcnk9e0dFVF9QUk9EVUNUU19CWV9JRH0+XHJcbiAgICAgICAgPFF1ZXJ5IHF1ZXJ5PXtHRVRfUFJPRFVDVFNfQllfSUR9IHZhcmlhYmxlcz17eyBpZHM6IHN0b3JlLmdldCgnaWRzJykgfX0+XHJcbiAgICAgICAgICB7KHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZ+KApjwvZGl2PjtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgPFJlc291cmNlTGlzdFxyXG4gICAgICAgICAgICAgICAgc2hvd0hlYWRlclxyXG4gICAgICAgICAgICAgICAgcmVzb3VyY2VOYW1lPXt7IHNpbmd1bGFyOiAnUHJvZHVjdCcsIHBsdXJhbDogJ1Byb2R1Y3RzJyB9fVxyXG4gICAgICAgICAgICAgICAgaXRlbXM9e2RhdGEubm9kZXN9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgbWVkaWEgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFRodW1ibmFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZXMuZWRnZXNbMF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW0uaW1hZ2VzLmVkZ2VzWzBdLm5vZGUub3JpZ2luYWxTcmNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlcy5lZGdlc1swXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5pbWFnZXMuZWRnZXNbMF0ubm9kZS5hbHRUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gaXRlbS52YXJpYW50cy5lZGdlc1swXS5ub2RlLnByaWNlO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3QuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBtZWRpYT17bWVkaWF9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5TGFiZWw9e2BWaWV3IGRldGFpbHMgZm9yICR7aXRlbS50aXRsZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5zZXQoJ2l0ZW0nLCBpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0b3JlLnNldCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0VG9Qcm9kdWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0gZmlsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtwcmljZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RXhwaXJlcyBvbiB7dHdvV2Vla3NGcm9tTm93fSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZXNvdXJjZUxpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIDwvUXVlcnk+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICBleHBvcnQgZGVmYXVsdCBSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHM7XHJcbiIsImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XHJcbmltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBQYWdlLFxyXG4gIERhdGFUYWJsZSxcclxuICBQYWdpbmF0aW9uLFxyXG4gIEJ1dHRvblxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucyc7XHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcclxuaW1wb3J0IFNlbGVjdCBmcm9tICcuL3NlbGVjdGRyb3AnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcblxyXG5jb25zdCBHRVRfT1JERVJTX0JZX0lEID0gZ3FsYFxyXG5xdWVyeSB7XHJcbiAgb3JkZXJzKGZpcnN0OiA1MCkge1xyXG4gICAgZWRnZXMge1xyXG4gICAgICBjdXJzb3JcclxuICAgICAgbm9kZSB7XHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIGVtYWlsXHJcbiAgICAgICAgY3JlYXRlZEF0XHJcbiAgICAgICAgZnVsZmlsbG1lbnRze1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIHRyYWNraW5nSW5mb3tcclxuICAgICAgICAgICAgY29tcGFueVxyXG4gICAgICAgICAgICBudW1iZXJcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVzdGltYXRlZERlbGl2ZXJ5QXRcclxuICAgICAgICAgIGRlbGl2ZXJlZEF0XHJcbiAgICAgICAgICBkaXNwbGF5U3RhdHVzXHJcbiAgICAgICAgICBzdGF0dXNcclxuICAgICAgICB9XHJcbiAgICAgICAgc2hpcHBpbmdMaW5le1xyXG4gICAgICAgICAgY2FycmllcklkZW50aWZpZXJcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VzdG9tZXJ7XHJcbiAgICAgICAgICBmaXJzdE5hbWVcclxuICAgICAgICAgIGxhc3ROYW1lXHJcbiAgICAgICAgICBlbWFpbFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufWA7XHJcblxyXG52YXIgcmV0b3VyRHVHZXQgPSBbXTtcclxuXHJcbi8qbGV0IEF1dGhVc2VyID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICByZXR1cm4gZ29vZ2xlLmxvZ2luKGRhdGEudXNlcm5hbWUsIGRhdGEucGFzc3dvcmQpLnRoZW4odG9rZW4gPT4geyByZXR1cm4gdG9rZW4gfSApXHJcbiB9XHJcbiBsZXQgdXNlclRva2VuID0gYXdhaXQgQXV0aFVzZXIoZGF0YSlcclxuIGNvbnNvbGUubG9nKHVzZXJUb2tlbikqL1xyXG5cclxuLyogbGV0IGNhbGxHZXQgPSBmdW5jdGlvbigpe1xyXG4gICBjb25zb2xlLmxvZyhcImF4aW9zXCIpIFxyXG4gdmFyIHJldG91ckRlRmluO1xyXG4gcmV0b3VyRHVHZXQgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL1wiK0tFWV9OR1JPS0JBQ0srXCIubmdyb2suaW8vZ2V0U3RhdGVPcmRlclwiLCB7aGVhZGVyczoge1wiQ29udGVudC1UeXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG4gLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgIGNvbnNvbGUubG9nKFwicmVzdWx0IGRhbnMgbGUgdGhlbiBkYW5zIGxlIGNhbGxcIilcclxuICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpXHJcbiAgIHJldG91ckRlRmluID0gcmVzdWx0LmRhdGFcclxuICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gfSlcclxuIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKVxyXG4vLyByZXRvdXJEdUdldCA9IGF4aW9zLmdldChcImh0dHBzOi8vXCIrS0VZX05HUk9LQkFDSytcIi5uZ3Jvay5pby9nZXRTdGF0ZU9yZGVyXCIsIHtoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nfX0pLnZhbHVlLmRhdGFcclxuY29uc29sZS5sb2coXCJyZXN1bHQgw6AgbGEgZmluIGR1IGNhbGxcIilcclxuY29uc29sZS5sb2cocmV0b3VyRGVGaW4pIFxyXG5yZXR1cm4gcmV0b3VyRGVGaW5cclxufSovXHJcblxyXG4vKmFzeW5jIGZ1bmN0aW9uIGNhbGxHZXQoKXtcclxuICBjb25zb2xlLmxvZyhcImF4aW9zXCIpIFxyXG4gIHZhciByZXRvdXJEZUZpbjtcclxuICByZXRvdXJEdUdldCA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vXCIrS0VZX05HUk9LQkFDSytcIi5uZ3Jvay5pby9nZXRTdGF0ZU9yZGVyXCIsIHtoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBkYW5zIGxlIHRoZW4gZGFucyBsZSBjYWxsXCIpXHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSlcclxuICAgIHJldG91ckRlRmluID0gcmVzdWx0LmRhdGFcclxuICAgIHJldHVybiByZXN1bHQuZGF0YTtcclxuICB9KVxyXG4gIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKVxyXG4gLy8gcmV0b3VyRHVHZXQgPSBheGlvcy5nZXQoXCJodHRwczovL1wiK0tFWV9OR1JPS0JBQ0srXCIubmdyb2suaW8vZ2V0U3RhdGVPcmRlclwiLCB7aGVhZGVyczoge1wiQ29udGVudC1UeXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJ319KS52YWx1ZS5kYXRhXHJcbiBjb25zb2xlLmxvZyhcInJlc3VsdCDDoCBsYSBmaW4gZHUgY2FsbFwiKVxyXG4gY29uc29sZS5sb2cocmV0b3VyRGVGaW4pIFxyXG4gcmV0dXJuIHJldG91ckRlRmluXHJcbn0qL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNhbGxHZXQoKSB7XHJcbiAgY29uc29sZS5sb2coXCJheGlvc1wiKVxyXG4gIGF4aW9zLmdldChcImh0dHBzOi8vXCIgKyBLRVlfTkdST0tCQUNLICsgXCIubmdyb2suaW8vZ2V0U3RhdGVPcmRlclwiLCB7IGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nIH0gfSlcclxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJycnJ0XCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKVxyXG4gICAgICByZXR1cm4gcmVzdWx0LmRhdGFcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldENvbChtYXRyaXgsIGNvbCkge1xyXG4gIHZhciBjb2x1bW4gPSBbXTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdHJpeC5sZW5ndGg7IGkrKykge1xyXG4gICAgY29sdW1uLnB1c2gobWF0cml4W2ldW2NvbF0pO1xyXG4gIH1cclxuICByZXR1cm4gY29sdW1uO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gRGF0YVRhYmxlRXhhbXBsZShkYXRhKSB7XHJcblxyXG4gIGZ1bmN0aW9uIGNhbGxHZXRTdGF0ZU9yZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJkYW5zIGdldE9yZGVycyBheGlvcyBjYWxsIGdldCBzdGF0ZSBvcmRlclwiKVxyXG4gICAgY29uc29sZS5sb2coXCJodHRwczovL1wiICsgS0VZX05HUk9LQkFDSyArIFwiLm5ncm9rLmlvL2dldFN0YXRlT3JkZXJcIiwgeyBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH0pXHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KFwiaHR0cHM6Ly9cIiArIEtFWV9OR1JPS0JBQ0sgKyBcIi5uZ3Jvay5pby9nZXRTdGF0ZU9yZGVyXCIsIHsgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiAnYXBwbGljYXRpb24vanNvbicgfSB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaXRlbXMgPSBkYXRhLm9yZGVycy5lZGdlcztcclxuICBjb25zb2xlLmxvZyhcImFscGhhIHBoYXNlXCIpXHJcbiAgY2FsbEdldCgpXHJcbiAgLy9jb25zb2xlLmxvZyhjYWxsR2V0KCkpXHJcbiAgLy9jb25zb2xlLmxvZygoKSA9PiBjYWxsR2V0KCkpXHJcblxyXG5cclxuICBmdW5jdGlvbiBpdGVtc1RvTm9kZSh7IGN1cnNvciwgbm9kZSB9KSB7XHJcbiAgICByZXR1cm4geyBub2RlIH0ubm9kZVxyXG4gIH07XHJcblxyXG5cclxuICBmdW5jdGlvbiBub2RlVG9Sb3dzKG5vZGUsIGJ1aWxkaW5nUmF3KSB7XHJcbiAgICAvKmNvbnNvbGUubG9nKFwibm9kZVwiKVxyXG4gICAgY29uc29sZS5sb2cobm9kZSlcclxuICAgIGNvbnNvbGUubG9nKCdkYW5zIGxhIGxhbWJkYSBwcm9mb25kZScpKi9cclxuICAgIE9iamVjdC5lbnRyaWVzKG5vZGUpLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAvKmNvbnNvbGUubG9nKGVsZW1lbnRbMF0gIT09ICdfX3R5cGVuYW1lJylcclxuICAgICAgY29uc29sZS5sb2coZWxlbWVudFswXSAhPSAnX190eXBlbmFtZScpXHJcbiAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnRbMF0pKi9cclxuXHJcbiAgICAgIGlmIChlbGVtZW50WzBdICE9PSAnX190eXBlbmFtZScpIHtcclxuICAgICAgICAvKiBjb25zb2xlLmxvZyhidWlsZGluZ1JhdylcclxuICAgICAgICAgY29uc29sZS5sb2coW2VsZW1lbnRbMV1dKVxyXG4gICAgICAgICBjb25zb2xlLmxvZyhidWlsZGluZ1Jhdy5jb25jYXQoW2VsZW1lbnRbMV1dKSlcclxuICAgICAgICAgY29uc29sZS5sb2coJ19fX19fX19fX19fXycpKi9cclxuICAgICAgICBidWlsZGluZ1JhdyA9ICh0eXBlb2YgZWxlbWVudFsxXSA9PT0gJ29iamVjdCcgJiYgZWxlbWVudFsxXSAhPT0gbnVsbCkgPyBub2RlVG9Sb3dzKGVsZW1lbnRbMV0sIGJ1aWxkaW5nUmF3KSA6IGJ1aWxkaW5nUmF3LmNvbmNhdChbZWxlbWVudFsxXV0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBidWlsZGluZ1JhdztcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuICAvKiBjb25zb2xlLmxvZygnaXRlbXMubWFwKGl0ZW1zVG9Ob2RlKScpXHJcbiAgIGNvbnNvbGUubG9nKGl0ZW1zLm1hcChpdGVtc1RvTm9kZSkpKi9cclxuICB2YXIgcm93cyA9IFtdO1xyXG4gIGl0ZW1zLm1hcChpdGVtc1RvTm9kZSkuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xyXG4gICAgLyogY29uc29sZS5sb2coJ2tleSx2YWx1ZScpXHJcbiAgICAgY29uc29sZS5sb2coa2V5KVxyXG4gICAgIGNvbnNvbGUubG9nKHZhbHVlKSovXHJcbiAgICByb3dzW2tleV0gPSBub2RlVG9Sb3dzKHZhbHVlLCBbXSlcclxuICB9KVxyXG5cclxuICBmdW5jdGlvbiBpbml0Um93cyhkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZygnSW5pdCByb3dzJylcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICByb3dzLmZvckVhY2goZnVuY3Rpb24gKHBhcnQsIGluZGV4KSB7XHJcblxyXG4gICAgIC8qIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgc3RvcmUuc2V0KCdldGF0Jyt0aGlzLnByb3BzLmlkLCB7IGlkIDogdGhpcy5wcm9wcy5pZCwgY2hvaXggOiBldmVudC50YXJnZXQudmFsdWV9KVxyXG4gICAgICAgdmFyIG9yZGVyU3RhdGUgPSAoZXZlbnQudGFyZ2V0LnZhbHVlID09IFwiU2VsZWN04oCmXCIpID8gbnVsbCA6IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgIGNvbnNvbGUubG9nKG9yZGVyU3RhdGUpKi9cclxuXHJcbiAgICAgICAvL2lsIGZhdXQgc2V0dGVyIHZhbHVlZGVEYlN0YXRlIGlzc3VlIGR1IHN0YXRlIHBsdXRvdCBxdWUgZGUgY3LDqWVyIHVuZSBub3V2ZWxsZSBwcm9wXHJcbiAgICAgIHJvd3NbaW5kZXhdID0gWzxTZWxlY3QgaWQ9e2luZGV4fSB2YWx1ZURlREI9eyBkYXRhW2luZGV4XS5vcmRlcl9zdGF0ZSA9PSBudWxsID8gOTk0OSA6IGRhdGFbaW5kZXhdLm9yZGVyX3N0YXRlfT48L1NlbGVjdD5dLmNvbmNhdChwYXJ0KTtcclxuICAgICAgICAvLy5zZXRTdGF0ZSh7dmFsdWUgOiBkYXRhW2luZGV4XS5vcmRlcl9zdGF0ZX0pXVxyXG4gICAgfSwgcm93cyk7XHJcbiAgXHJcbiAgICB2YXIgY29sb25lRGVzRXRhdHNBU2V0dGVyID0gZ2V0Q29sKHJvd3MsIDApXHJcbiAgICBjb25zb2xlLmxvZyhcImNvbG9ubmUgZGVzIHNlbGVjdFwiKVxyXG4gICAgY29uc29sZS5sb2coY29sb25lRGVzRXRhdHNBU2V0dGVyKVxyXG4gICAgdmFyIGNvbG9uZURlc05hbWVzSWRzID0gZ2V0Q29sKHJvd3MsIDEpXHJcbiAgXHJcbiAgfVxyXG5cclxuICB2YXIgcm93c0Zyb21EQiA9IFtdO1xyXG5cclxuICBjYWxsR2V0U3RhdGVPcmRlcigpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgY29uc29sZS5sb2coXCJjYWxsIGdldCBzdGF0ZSBvcmRlciBjYWxsYmFja1wiKVxyXG4gICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpXHJcbiAgICBpbml0Um93cyhyZXN1bHQuZGF0YSlcclxuICB9KVxyXG5cclxuICAvKiogU0FNSUEgREVCVVRcclxuICByb3dzLmZvckVhY2goZnVuY3Rpb24gKHBhcnQsIGluZGV4KSB7XHJcbiAgICAvL2F4aW9zLmdldEV0YXQgZHUgc2VsZWN0IMOgIHNldHRlciAoZW4gZm9uY3Rpb24gZGUgbGEgcGFnZSBldCBkdSB0cmkgKGxlIHRyaSBkb2l0IGV0cmUgZ2xvYmFsIGRhbnMgdW4gcHJlbWllciB0ZW1wcyBldCBwdWlzIG9uIHBvdXJyYSBmYWlyZSB1biB0cmkgc3VyIGxlcyBzZXVscyDDqWzDqW1lbnRzIGRlIGxhIHBhZ2UgYXVzc2kpKVxyXG4gICAgcm93c1tpbmRleF0gPSBbPFNlbGVjdCBpZD17aW5kZXh9PjwvU2VsZWN0Pl0uY29uY2F0KHBhcnQpO1xyXG4gIH0sIHJvd3MpO1xyXG5cclxuICBjb25zb2xlLmxvZygncm93cycpO1xyXG4gIGNvbnNvbGUubG9nKHJvd3MpO1xyXG5cclxuICAvL29uIG5lIHRpZW50IHBhcyBlbmNvcmUgY29tcHRlIGRlIGxhIHBhZ2luYXRpb25cclxuICB2YXIgY29sb25lRGVzRXRhdHNBU2V0dGVyID0gZ2V0Q29sKHJvd3MsIDApXHJcbiAgY29uc29sZS5sb2coJ3ZpZGU/JylcclxuICBjb25zb2xlLmxvZyhjb2xvbmVEZXNFdGF0c0FTZXR0ZXIpXHJcbiAgdmFyIGNvbG9uZURlc05hbWVzSWRzID0gZ2V0Q29sKHJvd3MsIDEpXHJcblxyXG4gIHZhciByb3dzRnJvbURCID0gW107XHJcbiAgY29uc29sZS5sb2cocm93c0Zyb21EQilcclxuICBjb25zb2xlLmxvZyhcImJldGEgcGhhc2VcIilcclxuICBTQU1JQSBGSU4gKiovXHJcblxyXG4gIC8qbGV0IEF1dGhVc2VyID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgcmV0dXJuIGdvb2dsZS5sb2dpbihkYXRhLnVzZXJuYW1lLCBkYXRhLnBhc3N3b3JkKS50aGVuKHRva2VuID0+IHsgcmV0dXJuIHRva2VuIH0gKVxyXG4gIH1cclxuICBsZXQgdXNlclRva2VuID0gYXdhaXQgQXV0aFVzZXIoZGF0YSlcclxuICBjb25zb2xlLmxvZyh1c2VyVG9rZW4pKi9cclxuXHJcblxyXG4gIGNvbnNvbGUubG9nKGNhbGxHZXQoKSlcclxuICB2YXIgcmV0b3VyRHVDYWxsR2V0O1xyXG4gIC8qY29uc29sZS5sb2coY2FsbEdldCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImxlIHJlc3VsdCBkYW5zIGxlIHRoZW5cIilcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCkgLy8gXCJTb21lIFVzZXIgdG9rZW5cIlxyXG4gICAgcmV0b3VyRHVDYWxsR2V0ID0gcmVzdWx0O1xyXG4gICAgY29uc29sZS5sb2coJ3Jlc29sZXZlZWUnKVxyXG4gICAgLy9yZXNvbHZlKHJlc3VsdClcclxuICAgIHJldHVybiByZXN1bHRcclxuIH0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgY29uc29sZS5sb2coXCJsZSByZXN1bHQgZGFucyBsZSB0aGVuXCIpXHJcbiAgY29uc29sZS5sb2cocmVzdWx0KSAvLyBcIlNvbWUgVXNlciB0b2tlblwiXHJcbiAgcmV0b3VyRHVDYWxsR2V0ID0gcmVzdWx0O1xyXG4gIHJldHVybiByZXN1bHRcclxufSkpKi9cclxuICBjb25zb2xlLmxvZyhcInJldG91ckR1Q2FsbEdldFwiKVxyXG4gIGNvbnNvbGUubG9nKHJldG91ckR1Q2FsbEdldClcclxuICAvKnJldG91ckR1Q2FsbEdldC5mb3JFYWNoKCh2YWx1ZSwga2V5KT0+IHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKVxyXG5cclxuICAgIHJvd3NGcm9tREJba2V5XSA9IG5vZGVUb1Jvd3ModmFsdWUsW10pIFxyXG4gICB9KSovXHJcbiAgY29uc29sZS5sb2coXCJyb3dzRnJvbURCXCIpXHJcbiAgY29uc29sZS5sb2cocm93c0Zyb21EQilcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZSBmdWxsV2lkdGg9XCJ0cnVlXCI+XHJcbiAgICAgIDxDYXJkPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gY2FsbEdldCgpfT5FeGFtcGxlIGJ1dHRvbjwvQnV0dG9uPlxyXG4gICAgICAgIHsvL3JldG91ckR1R2V0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxEYXRhVGFibGVcclxuICAgICAgICAgIGNvbHVtbkNvbnRlbnRUeXBlcz17W1xyXG4gICAgICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgICAgICd0ZXh0JyxcclxuICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgICAgICd0ZXh0JyxcclxuICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgICAgaGVhZGluZ3M9e1tcclxuICAgICAgICAgICAgJ2lkJyxcclxuICAgICAgICAgICAgJ25hbWUnLFxyXG4gICAgICAgICAgICAnZW1haWwnLFxyXG4gICAgICAgICAgICAnamNwJyxcclxuICAgICAgICAgICAgJ2pjcCcsXHJcbiAgICAgICAgICAgICdqY3AnLFxyXG4gICAgICAgICAgICAnamNwJyxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgICAvL2lsIGZhdXQgcsOpY3Vww6lyZXIgbGVzIG9yZGVyIHN0YXRlcyBkZSBsYSBkYiBldCBwZXV0IGV0cmUgbGVzIG1ldHRyZSBlbiBjYWNoZSBjYSBzZXJhaXQgY29vbFxyXG4gICAgICAgICAgcm93cz17cm93c31cclxuICAgICAgICAvLyc8aW1nIHNyYz1cIicrZGF0YSsnXCI+J1xyXG5cclxuICAgICAgICAvKnNvdXJjZT17XHJcbiAgICAgICAgICBpdGVtLm5vZGUubGluZUl0ZW1zLmVkZ2VzWzBdXHJcbiAgICAgICAgICAgID8gaXRlbS5ub2RlLmxpbmVJdGVtcy5lZGdlc1swXS5ub2RlLmltYWdlLm9yaWdpbmFsU3JjXHJcbiAgICAgICAgICAgIDogJydcclxuICAgICAgICB9Ki9cclxuICAgICAgICAvL3RvdGFscz17WycnLCAnJywgJycsIDI1NSwgJyQxNTUsODMwLjAwJ119XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9QYWdlPlxyXG5cclxuXHJcbiAgKTtcclxufVxyXG5cclxuY2xhc3MgUmVzb3VyY2VMaXN0V2l0aE9yZGVycyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxRdWVyeSBxdWVyeT17R0VUX09SREVSU19CWV9JRH0+XHJcbiAgICAgICAgeyh7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0pID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiREFUQVwiKVxyXG4gICAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmfigKY8L2Rpdj47XHJcbiAgICAgICAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YS5vcmRlcnMuZWRnZXMpO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhLm9yZGVycy5lZGdlc1swXS5ub2RlLmxpbmVJdGVtcy5lZGdlc1swXS5ub2RlLmltYWdlLm9yaWdpbmFsU3JjKTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBEYXRhVGFibGVFeGFtcGxlKGRhdGEpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH19XHJcbiAgICAgIDwvUXVlcnk+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuLyo8Q2FyZD5cclxuICA8cD5MZXMgNTAgZGVybmnDqHJlcyBjb21tYW5kZXM8L3A+XHJcbiAgPFJlc291cmNlTGlzdFxyXG4gICAgc2hvd0hlYWRlclxyXG4gICAgcmVzb3VyY2VOYW1lPXt7IHNpbmd1bGFyOiAnT3JkZXInLCBwbHVyYWw6ICdPcmRlcnMnIH19XHJcbiAgICBpdGVtcz17ZGF0YS5vcmRlcnMuZWRnZXN9XHJcbiAgICByZW5kZXJJdGVtPXtpdGVtID0+IHtcclxuICAgICAgY29uc3Qgb3JkZXJOYW1lID0gaXRlbS5ub2RlLm5hbWVcclxuICAgICAgY29uc3QgbWVkaWEgPSAoXHJcbiAgICAgICAgPFRodW1ibmFpbFxyXG4gICAgICAgICAgc291cmNlPXtcclxuICAgICAgICAgICAgaXRlbS5ub2RlLmxpbmVJdGVtcy5lZGdlc1swXVxyXG4gICAgICAgICAgICAgID8gaXRlbS5ub2RlLmxpbmVJdGVtcy5lZGdlc1swXS5ub2RlLmltYWdlLm9yaWdpbmFsU3JjXHJcbiAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHByaWNlID0gaXRlbS5ub2RlLm5ldFBheW1lbnRTZXQuc2hvcE1vbmV5LmFtb3VudDtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICBcclxuICAgICAgICA8UmVzb3VyY2VMaXN0Lkl0ZW1cclxuICAgICAgICBtZWRpYSA9IHtvcmRlck5hbWV9XHJcbiAgICAgICAgIC8vIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgbWVkaWE9e21lZGlhfVxyXG4gICAgICAgICAgLy9hY2Nlc3NpYmlsaXR5TGFiZWw9e2BWaWV3IGRldGFpbHMgZm9yICR7aXRlbS50aXRsZX1gfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAvL3N0b3JlLnNldCgnaXRlbScsIGl0ZW0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3RvcmUuc2V0JylcclxuICAgICAgICAgICAgLy9yZWRpcmVjdFRvUHJvZHVjdCgpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U3RhY2s+XHJcbiAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICA8cD57b3JkZXJOYW1lfTwvcD5cclxuICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICA8U3RhY2suSXRlbSBmaWxsPlxyXG4gICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5ub2RlLmlkfVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICA8cD4ke3ByaWNlfTwvcD5cclxuICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICA8cD5FeHBpcmVzIG9uIFIgPC9wPlxyXG4gICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgIDwvUmVzb3VyY2VMaXN0Lkl0ZW0+XHJcbiAgICAgICk7XHJcbiAgICB9fVxyXG4gIC8+XHJcbjwvQ2FyZD5cclxuKTtcclxufX1cclxuPC9RdWVyeT5cclxuKTtcclxufVxyXG59Ki9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc291cmNlTGlzdFdpdGhPcmRlcnM7IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJztcclxuXHJcbi8qY29uc3QgZG90ZW52ID0gcmVxdWlyZSgnZG90ZW52Jyk7XHJcbmNvbnN0IG5leHQgPSByZXF1aXJlKCduZXh0Jyk7XHJcbmRvdGVudi5jb25maWcoKTtcclxuY29uc3QgZGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJztcclxuY29uc3QgYXBwID0gbmV4dCh7IGRldiB9KTtcclxuY29uc3QgeyBSRUFDVF9BUFBfTkdST0tCQUNLIH0gPSBwcm9jZXNzLmVudjtcclxuY29uc3QgaGFuZGxlID0gYXBwLmdldFJlcXVlc3RIYW5kbGVyKCk7XHJcblxyXG5jb25zb2xlLmxvZyhwcm9jZXNzLmVudilcclxuYXBwLnByZXBhcmUoKS50aGVuKCgpID0+IHtcclxuICBjb25zb2xlLmxvZyhcImluIGFwcCBwcmVwYXJlXCIpXHJcbiAgY29uc29sZS5sb2coUkVBQ1RfQVBQX05HUk9LQkFDSylcclxufSk7Ki9cclxuXHJcblxyXG4vL2NvbnN0IHtSRUFDVF9BUFBfbmdyb2tCYWNrfSA9IHByb2Nlc3MuZW52O1xyXG4vL2NvbnN0IG5ncm9rQmFjayA9IFJFQUNUX0FQUF9uZ3Jva0JhY2s7XHJcbmNvbnNvbGUubG9nKCdjQWNBQUFBQUFBQUFBQUFBQUFBQUFBQUEnKVxyXG5jb25zb2xlLmxvZyhLRVlfTkdST0tCQUNLKVxyXG5cclxuLy9jbGFzcyBTZWxlY3QgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcclxuY2xhc3MgU2VsZWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIGNvbnNvbGUubG9nKFwiZGFucyBjb25zdHJ1Y3RldXIsIHBwcm9wcyBwdWlzIHRoaXNcIilcclxuICAgIGNvbnNvbGUubG9nKHByb3BzKVxyXG4gICAgY29uc29sZS5sb2codGhpcylcclxuICAgIHRoaXMuc3RhdGUudmFsdWVEZURiU3RhdGUgPSBwcm9wcy52YWx1ZURlREJcclxuICB9XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICdTZWxlY3TigKYnLFxyXG4gICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAnQScsXHJcbiAgICAgICAgICB2YWx1ZTogNDQ0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ0InLFxyXG4gICAgICAgICAgdmFsdWU6IDMzMyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICdDJyxcclxuICAgICAgICAgIHZhbHVlOiAyMjIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgdmFsdWU6ICc/JyxcclxuICAgICAgdmFsdWVEZURiU3RhdGUgOiAnJyxcclxuICAgIH07XHJcblxyXG5cclxuICAgIFxyXG4gIFxyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImF6ZXJ0eXVpb3BcIilcclxuICAgICAgY29uc29sZS5sb2codGhpcylcclxuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS52YWx1ZSlcclxuICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKVxyXG5cclxuXHJcbi8vTDRFUlJFVVIgRVNUIElDSSwgaWwgZmF1dCBhcnJldGVyIGQndXRpbGlzZXIgVmFsdWVEZURiIGRlIHByb3BzIG1haXMgdXRpbGlzZXIgVmFsdWVEZURCU3RhdGUgZHUgU3RhdGUgOilcclxuICAgICAvKiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3N0YXRlJywge1xyXG4gICAgICAgIHZhbHVlRGVEYlN0YXRlOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXHJcbiAgICAgIH0pOyovXHJcblxyXG4gICAgICAvL2V4ZW1wbGUgc3VyIGxlcXVlbCBzJ2FwcHV5ZXIgcG91ciBzZXR0ZXIgbGUgc3RhdGVcclxuICAgIC8qICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XHJcbiAgICAgICAgbGV0IGphc3BlciA9IE9iamVjdC5hc3NpZ24oe30sIHByZXZTdGF0ZS5qYXNwZXIpOyAgLy8gY3JlYXRpbmcgY29weSBvZiBzdGF0ZSB2YXJpYWJsZSBqYXNwZXJcclxuICAgICAgICBqYXNwZXIubmFtZSA9ICdzb21lb3RoZXJuYW1lJzsgICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIG5hbWUgcHJvcGVydHksIGFzc2lnbiBhIG5ldyB2YWx1ZSAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHsgamFzcGVyIH07ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIG5ldyBvYmplY3QgamFzcGVyIG9iamVjdFxyXG4gICAgICB9KSovXHJcblxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZhbHVlRGVEYlN0YXRlKVxyXG4gICAgICB0aGlzLnN0YXRlLnZhbHVlRGVEYlN0YXRlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICB0aGlzLnN0YXRlLnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZhbHVlRGVEYlN0YXRlKVxyXG5cclxuICAgICAgLy90aGlzLnByb3BzLnZhbHVlRGVEQiA9IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICBzdG9yZS5zZXQoJ2V0YXQnK3RoaXMucHJvcHMuaWQsIHsgaWQgOiB0aGlzLnByb3BzLmlkLCBjaG9peCA6IGV2ZW50LnRhcmdldC52YWx1ZX0pXHJcblxyXG4gICAgICB2YXIgb3JkZXJTdGF0ZSA9IChldmVudC50YXJnZXQudmFsdWUgPT0gXCJTZWxlY3TigKZcIikgPyBudWxsIDogZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICBjb25zb2xlLmxvZyhvcmRlclN0YXRlKVxyXG5cclxuXHJcbiAgICAgIC8vY29uc29sZS5sb2coUkVBQ1RfQVBQX25ncm9rQmFjaylcclxuXHJcbiAgICAgIC8vbCdpZCBxdSdvbiBlbnZvaWUgZW4gcGFyYW1zIGVzdCBsJ2lkIGR1IHNlbGVjdCBkYW5zIGxhIHBhZ2UgY29uY2VybsOpZS4gaWwgZmF1ZHJhIGxlIGZhaXJlIGNvcnJlc3BvbmRyZSBhdSB2cmFpIElEIGVuIGZvbmN0aW9uIGRlIGxhIHBhZ2luYXRpb24gZXQgZHUgdHJpIGRlIGxhIGRhdGF0YWJsZVxyXG4gICAgICBheGlvcy5wdXQoXHJcbiAgICAgICAgLy9cImh0dHBzOi8vNTQ3ZjQxN2NjMzI5Lm5ncm9rLmlvL2hhbmRsZVwiLCBcclxuICAgICAgICBcImh0dHBzOi8vXCIrS0VZX05HUk9LQkFDSytcIi5uZ3Jvay5pby9oYW5kbGVcIiwgXHJcbiAgICAgICAge1wib3JkZXJfc3RhdGVcIiA6IG9yZGVyU3RhdGV9LCBcclxuICAgICAgICB7cGFyYW1zOiB7IGlkOnRoaXMucHJvcHMuaWQrMSB9LCBoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nfX1cclxuICAgIClcclxuICAgIFxyXG5cclxuXHJcbiAgICAgIC8vYXhpb3MucHV0KFwiaHR0cHM6Ly9cIitSRUFDVF9BUFBfbmdyb2tCYWNrK1wiLm5ncm9rLmlvL2hhbmRsZVwiLCB7fSlcclxuICAgICAvLyBcInByb3h5XCI6IFwiaHR0cDovLyR7UkVBQ1RfQVBQX25ncm9rQmFja30ubmdyb2suaW9cIixcclxuXHJcblxyXG4gICAgICAvL2F4aW9zLnB1dChcImxvY2FsaG9zdDo1MDAwL2hhbmRsZVwiLCB7fSlcclxuXHJcbiAgICAgIC8qLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eScpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgIH0pKi9cclxuXHJcblxyXG4gICAgICAvKiB2YXIgc3FsID0gXCJVUERBVEUgb3JkZXJzIFNFVCBvcmRlcl9zdGF0ZSA9IDYgV0hFUkUgb3JkZXJfaWQ9MVwiO1xyXG4gICAgICAgIGNvbi5xdWVyeShzcWwsIGZ1bmN0aW9uIChlcnIsIHJlc3VsdCkge1xyXG4gICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmFmZmVjdGVkUm93cyArIFwiIHJlY29yZChzKSB1cGRhdGVkXCIpO1xyXG4gICAgICAgIH0pOyovXHJcbiAgICB9O1xyXG4gIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygncmVuZGVyJylcclxuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcclxuICAgICAgY29uc29sZS5sb2coJ3ZhbHVlJylcclxuICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy52YWx1ZURlREIpXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudmFsdWVEZURiU3RhdGUpXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgdmFyIHsgb3B0aW9ucywgdmFsdWUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgIHZhciBjdXJyZW50SWQ7XHJcbiAgICAgIHZhciBldGF0RnJvbVN0b3JlO1xyXG4gICAgICAvL2ljaSwgaWwgZmF1dCBjaG9pc2lyIHNpIHZhbHVlIGVzdCBjZWx1aSBkZSBsYSBiZGQgKMOgIGwnaW5pdGlhbGlzYXRpb24pLCBvdSBjZWx1aSBxdSdvbiB2aWVuIGRlIGNob2lzaXIsKCBhcHJlcyB1biBwdXQpXHJcbiAgICAgIC8vdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlRGVEQiA9PSBudWxsID8gOTk0OSA6IHRoaXMucHJvcHMudmFsdWVEZURCO1xyXG5cclxuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS52YWx1ZURlRGJTdGF0ZSA9PSBudWxsIHx8IHRoaXMuc3RhdGUudmFsdWVEZURiU3RhdGUgPT0gJ1NlbGVjdOKApicgKVxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZhbHVlRGVEYlN0YXRlID09IG51bGwgKVxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZhbHVlRGVEYlN0YXRlID09ICdTZWxlY3TigKYnIClcclxuICAgICAgY29uc29sZS5sb2codHJ1ZSB8fCBmYWxzZSlcclxuXHJcbiAgICAgIHZhbHVlID0gKHRoaXMuc3RhdGUudmFsdWVEZURiU3RhdGUgPT0gbnVsbCB8fCB0aGlzLnN0YXRlLnZhbHVlRGVEYlN0YXRlID09ICdTZWxlY3TigKYnICk/IDk5NDkgOiB0aGlzLnN0YXRlLnZhbHVlRGVEYlN0YXRlO1xyXG4gICAgICB2YXIgdmFsO1xyXG5cclxuICAgICAgY3VycmVudElkID0gdGhpcy5wcm9wcy5pZCxcclxuICAgICAgZXRhdEZyb21TdG9yZSA9IHN0b3JlLmdldCgnZXRhdCcrY3VycmVudElkKSxcclxuICAgICAgdmFsID0gdmFsdWU7XHJcblxyXG4gICAgICAvL3BvdXIgc2V0dGVyIGxhIGxpZ25lIDEgKHBhcyBsYSAwKSDDoCB1bmRlZmluZWRcclxuICAgICAgLy9ldGF0RnJvbVN0b3JlLmlkID09IDEgPyBldGF0RnJvbVN0b3JlID0gdW5kZWZpbmVkIDogJycsXHJcblxyXG4gICAgICBldGF0RnJvbVN0b3JlID09IHVuZGVmaW5lZCA/IFxyXG4gICAgICBzdG9yZS5zZXQoJ2V0YXQnK2N1cnJlbnRJZCx7IGlkIDogY3VycmVudElkLCBjaG9peCA6IHZhbH0pIDogXHJcbiAgICAgIHZhbD1ldGF0RnJvbVN0b3JlLmNob2l4ID09IG51bGwgPyA5OTQ5IDogZXRhdEZyb21TdG9yZS5jaG9peDtcclxuICAgICAgLy9jb25zb2xlLmxvZygnZXRhdCcgKyBjdXJyZW50SWQpLFxyXG4gICAgICAvL2NvbnNvbGUubG9nKGV0YXRGcm9tU3RvcmUpXHJcbiAgICAgIC8vY29uc29sZS5sb2coZXRhdEZyb21TdG9yZSA9PSB1bmRlZmluZWQgPyAncGFzIGRcXCdpZCcgOiBldGF0RnJvbVN0b3JlLmlkKSxcclxuXHJcblxyXG5cclxuICAgICAvLyBjb25zb2xlLmxvZygndGhpcycpXHJcbiAgICAgIC8vY29uc29sZS5sb2codGhpcylcclxuXHJcbiAgXHJcblxyXG4gICAgIC8vIDxzZWxlY3Qgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dmFsdWV9PlxyXG5cclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt2YWx9PlxyXG4gICAgICAgICAgICB7b3B0aW9ucy5tYXAoaXRlbSA9PiAoXHJcblxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gXHJcbiAgICAgICAgICAgICAgLypjb25zb2xlLmxvZygnZXRhdCcrY3VycmVudElkKSxcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldGF0RnJvbVN0b3JlKSxcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldGF0RnJvbVN0b3JlID09IHVuZGVmaW5lZCksXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXRhdEZyb21TdG9yZSA9PSB1bmRlZmluZWQgPyAncGFzIGRcXCdpZCcgOiBldGF0RnJvbVN0b3JlLmlkKSxcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldGF0RnJvbVN0b3JlID09IHVuZGVmaW5lZCA/ICdwYXMgZGUgY2hvaXggY2hvaXNpJyA6IGV0YXRGcm9tU3RvcmUuY2hvaXgpLFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwib3B0aW9uXCIpLFxyXG4gICAgICAgICAgICAgIC8vY29uc29sZS5sb2coaXRlbSksXHJcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh7dmFsdWV9KSxcclxuICAgICAgICAgICAgICAvKmNvbnNvbGUubG9nKHRoaXMpLCovXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW0udmFsdWV9IHZhbHVlPXtpdGVtLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8aDE+RmF2b3JpdGUgbGV0dGVyOiB7dmFsdWV9PC9oMT5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICBleHBvcnQgZGVmYXVsdCBTZWxlY3Q7IiwiaW1wb3J0IHsgRW1wdHlTdGF0ZSwgTGF5b3V0LCBQYWdlIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCB7IFJlc291cmNlUGlja2VyLCBUaXRsZUJhciB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3QnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJztcclxuaW1wb3J0IFJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyBmcm9tICcuLi9jb21wb25lbnRzL1Jlc291cmNlTGlzdCc7XHJcbmltcG9ydCBSZXNvdXJjZUxpc3RXaXRoT3JkZXJzIGZyb20gJy4uL2NvbXBvbmVudHMvZ2V0T3JkZXJzJztcclxuXHJcblxyXG5cclxuLy9jb25zdCBpbWcgPSAnaHR0cHM6Ly9jZG4uc2hvcGlmeS5jb20vcy9maWxlcy8xLzA3NTcvOTk1NS9maWxlcy9lbXB0eS1zdGF0ZS5zdmcnO1xyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRlID0geyBvcGVuOiBmYWxzZSB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGVtcHR5U3RhdGUgPSAhc3RvcmUuZ2V0KCdpZHMnKTtcclxuICAgIHJldHVybihcclxuICAgICAgPFJlc291cmNlTGlzdFdpdGhPcmRlcnMgLz5cclxuICAgICk7fVxyXG4gICAgLypyZXR1cm4gKFxyXG4gICAgICA8UGFnZT5cclxuICAgICAgICA8VGl0bGVCYXJcclxuICAgICAgICAgIHRpdGxlPVwiU2FtcGxlIEFwcFwiXHJcbiAgICAgICAgICBwcmltYXJ5QWN0aW9uPXt7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdTZWxlY3QgcHJvZHVjdHMnLFxyXG4gICAgICAgICAgICAvL2NvbW1lbnQgZmFpcmUgMiBsYW1iZGFzIMOgIGxhIHN1aXRlIHBvdXIgYXZvaXIgYXVzc2kgbGUgY29uc29sZSBsb2c/XHJcbiAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KSxcclxuICAgICAgICAgICAgLy9vbkFjdGlvbjogKCkgPT4gY29uc29sZS5sb2coJ2NsaWNrZWRkJyksXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFJlc291cmNlUGlja2VyXHJcbiAgICAgICAgICByZXNvdXJjZVR5cGU9XCJQcm9kdWN0XCJcclxuICAgICAgICAgIHNob3dWYXJpYW50cz17ZmFsc2V9XHJcbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59XHJcbiAgICAgICAgICBvblNlbGVjdGlvbj17KHJlc291cmNlcykgPT4gdGhpcy5oYW5kbGVTZWxlY3Rpb24ocmVzb3VyY2VzKX1cclxuICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxFbXB0eVN0YXRlXHJcbiAgICAgICAgICAgICAgaGVhZGluZz1cIlNlbGVjdCBwcm9kdWN0cyB0byBzdGFydFwiXHJcbiAgICAgICAgICAgICAgYWN0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnU2VsZWN0IHByb2R1Y3RzJyxcclxuICAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8vaW1hZ2U9e2ltZ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwPlNlbGVjdCBwcm9kdWN0cyBhbmQgY2hhbmdlIHRoZWlyIHByaWNlIHRlbXBvcmFyaWx5PC9wPlxyXG4gICAgICAgICAgICA8L0VtcHR5U3RhdGU+XHJcbiAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgIHtlbXB0eVN0YXRlID8gKFxyXG4gICAgICAgICAgICA8UmVzb3VyY2VMaXN0V2l0aE9yZGVycyAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAvLzxSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHMgLz5cclxuICAgICAgICAgICAgPFJlc291cmNlTGlzdFdpdGhPcmRlcnMgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L1BhZ2U+XHJcbiAgICApO1xyXG4gIH1cclxuICBoYW5kbGVTZWxlY3Rpb24gPSAocmVzb3VyY2VzKSA9PiB7XHJcbiAgICBjb25zdCBpZHNGcm9tUmVzb3VyY2VzID0gcmVzb3VyY2VzLnNlbGVjdGlvbi5tYXAoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pXHJcbiAgICBjb25zb2xlLmxvZyhyZXNvdXJjZXMpXHJcbiAgICBjb25zb2xlLmxvZyhpZHNGcm9tUmVzb3VyY2VzKVxyXG4gICAgY29uc29sZS5sb2cocmVzb3VyY2VzLmlkKVxyXG4gICAgc3RvcmUuc2V0KCdpZHMnLCBpZHNGcm9tUmVzb3VyY2VzKTtcclxuICB9OyovXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L3BvbGFyaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYXBvbGxvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdG9yZS1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9