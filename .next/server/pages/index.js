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
  axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("https://" + "32c4406386a4" + ".ngrok.io/getStateOrder", {
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
    console.log("https://" + "32c4406386a4" + ".ngrok.io/getStateOrder", {
      headers: {
        "Content-Type": 'application/json'
      }
    });
    return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("https://" + "32c4406386a4" + ".ngrok.io/getStateOrder", {
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
console.log("32c4406386a4"); //class Select extends PureComponent {

class Select extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(...args) {
    super(...args);

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
      console.log(this.value);
      console.log(event.target.value);
      console.log(this.props); //L4ERREUR EST ICI, il faut arreter d'utiliser ValueDeDb de props mais utiliser ValueDeDBState du State :)

      Object.defineProperty(this, 'props', {
        value: {
          id: this.props.id,
          valueDeDB: event.target.value
        },
        writable: false
      }); //this.props.valueDeDB = event.target.value

      store_js__WEBPACK_IMPORTED_MODULE_4___default.a.set('etat' + this.props.id, {
        id: this.props.id,
        choix: event.target.value
      });
      var orderState = event.target.value == "Select…" ? null : event.target.value;
      console.log(orderState); //console.log(REACT_APP_ngrokBack)
      //l'id qu'on envoie en params est l'id du select dans la page concernée. il faudra le faire correspondre au vrai ID en fonction de la pagination et du tri de la datatable

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.put( //"https://547f417cc329.ngrok.io/handle", 
      "https://" + "32c4406386a4" + ".ngrok.io/handle", {
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
  }

  render() {
    console.log('render');
    console.log(this.state);
    console.log('value');
    console.log(this.props.valueDeDB);
    var {
      options,
      value
    } = this.state;
    var currentId;
    var etatFromStore; //ici, il faut choisir si value est celui de la bdd (à l'initialisation), ou celui qu'on vien de choisir,( apres un put)

    value = this.props.valueDeDB == null ? 9949 : this.props.valueDeDB;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXNvdXJjZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nZXRPcmRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWxlY3Rkcm9wLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYXBvbGxvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdG9yZS1qc1wiIl0sIm5hbWVzIjpbIkdFVF9QUk9EVUNUU19CWV9JRCIsImdxbCIsIlJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVyIiwiYXBwIiwiY29udGV4dCIsInJlZGlyZWN0VG9Qcm9kdWN0IiwicmVkaXJlY3QiLCJSZWRpcmVjdCIsImNyZWF0ZSIsImRpc3BhdGNoIiwiQWN0aW9uIiwiQVBQIiwidHdvV2Vla3NGcm9tTm93IiwiRGF0ZSIsIm5vdyIsInRvRGF0ZVN0cmluZyIsImlkcyIsInN0b3JlIiwiZ2V0IiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJub2RlcyIsIml0ZW0iLCJtZWRpYSIsImltYWdlcyIsImVkZ2VzIiwibm9kZSIsIm9yaWdpbmFsU3JjIiwiYWx0VGV4dCIsInByaWNlIiwidmFyaWFudHMiLCJpZCIsInRpdGxlIiwic2V0IiwiQ29udGV4dCIsIkdFVF9PUkRFUlNfQllfSUQiLCJyZXRvdXJEdUdldCIsImNhbGxHZXQiLCJheGlvcyIsIktFWV9OR1JPS0JBQ0siLCJoZWFkZXJzIiwidGhlbiIsInJlc3VsdCIsImdldENvbCIsIm1hdHJpeCIsImNvbCIsImNvbHVtbiIsImkiLCJsZW5ndGgiLCJwdXNoIiwiRGF0YVRhYmxlRXhhbXBsZSIsImNhbGxHZXRTdGF0ZU9yZGVyIiwiaXRlbXMiLCJvcmRlcnMiLCJpdGVtc1RvTm9kZSIsImN1cnNvciIsIm5vZGVUb1Jvd3MiLCJidWlsZGluZ1JhdyIsIk9iamVjdCIsImVudHJpZXMiLCJmb3JFYWNoIiwiZWxlbWVudCIsImluZGV4IiwiY29uY2F0Iiwicm93cyIsIm1hcCIsInZhbHVlIiwia2V5IiwiaW5pdFJvd3MiLCJwYXJ0Iiwib3JkZXJfc3RhdGUiLCJjb2xvbmVEZXNFdGF0c0FTZXR0ZXIiLCJjb2xvbmVEZXNOYW1lc0lkcyIsInJvd3NGcm9tREIiLCJyZXRvdXJEdUNhbGxHZXQiLCJSZXNvdXJjZUxpc3RXaXRoT3JkZXJzIiwiU2VsZWN0Iiwib3B0aW9ucyIsIm5hbWUiLCJ2YWx1ZURlRGJTdGF0ZSIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJwcm9wcyIsImRlZmluZVByb3BlcnR5IiwidmFsdWVEZURCIiwid3JpdGFibGUiLCJjaG9peCIsIm9yZGVyU3RhdGUiLCJwdXQiLCJwYXJhbXMiLCJzdGF0ZSIsImN1cnJlbnRJZCIsImV0YXRGcm9tU3RvcmUiLCJ2YWwiLCJ1bmRlZmluZWQiLCJoYW5kbGVDaGFuZ2UiLCJJbmRleCIsIm9wZW4iLCJlbXB0eVN0YXRlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBckRvQzs7QUF3RHJCcUYsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUNwRUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAncmVhY3QtYXBvbGxvJztcclxuaW1wb3J0IHsgQ2FyZCxcclxuICAgIFJlc291cmNlTGlzdCxcclxuICAgIFN0YWNrLFxyXG4gICAgVGV4dFN0eWxlLFxyXG4gICAgVGh1bWJuYWlsLCB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnc3RvcmUtanMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucyc7XHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcclxuXHJcbmNvbnN0IEdFVF9QUk9EVUNUU19CWV9JRCA9IGdxbGBcclxuICBxdWVyeSBnZXRQcm9kdWN0cygkaWRzOiBbSUQhXSEpIHtcclxuICAgIG5vZGVzKGlkczogJGlkcykge1xyXG4gICAgICAuLi4gb24gUHJvZHVjdCB7XHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBoYW5kbGVcclxuICAgICAgICBkZXNjcmlwdGlvbkh0bWxcclxuICAgICAgICBpZFxyXG4gICAgICAgIGltYWdlcyhmaXJzdDogMSkge1xyXG4gICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICBvcmlnaW5hbFNyY1xyXG4gICAgICAgICAgICAgIGFsdFRleHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXJpYW50cyhmaXJzdDogMSkge1xyXG4gICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5cclxuY2xhc3MgUmVzb3VyY2VMaXN0V2l0aFByb2R1Y3RzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBjb250ZXh0VHlwZSA9IENvbnRleHQ7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGFwcCA9IHRoaXMuY29udGV4dDtcclxuICAgIGNvbnN0IHJlZGlyZWN0VG9Qcm9kdWN0ID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCByZWRpcmVjdCA9IFJlZGlyZWN0LmNyZWF0ZShhcHApO1xyXG4gICAgICByZWRpcmVjdC5kaXNwYXRjaChcclxuICAgICAgICBSZWRpcmVjdC5BY3Rpb24uQVBQLFxyXG4gICAgICAgICcvZWRpdC1wcm9kdWN0cycsXHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCB0d29XZWVrc0Zyb21Ob3cgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgMTIwOTZlNSkudG9EYXRlU3RyaW5nKCk7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgLy88UXVlcnkgcXVlcnk9e0dFVF9QUk9EVUNUU19CWV9JRH0+XHJcbiAgICAgICAgPFF1ZXJ5IHF1ZXJ5PXtHRVRfUFJPRFVDVFNfQllfSUR9IHZhcmlhYmxlcz17eyBpZHM6IHN0b3JlLmdldCgnaWRzJykgfX0+XHJcbiAgICAgICAgICB7KHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZ+KApjwvZGl2PjtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgPFJlc291cmNlTGlzdFxyXG4gICAgICAgICAgICAgICAgc2hvd0hlYWRlclxyXG4gICAgICAgICAgICAgICAgcmVzb3VyY2VOYW1lPXt7IHNpbmd1bGFyOiAnUHJvZHVjdCcsIHBsdXJhbDogJ1Byb2R1Y3RzJyB9fVxyXG4gICAgICAgICAgICAgICAgaXRlbXM9e2RhdGEubm9kZXN9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgbWVkaWEgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFRodW1ibmFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZXMuZWRnZXNbMF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW0uaW1hZ2VzLmVkZ2VzWzBdLm5vZGUub3JpZ2luYWxTcmNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlcy5lZGdlc1swXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5pbWFnZXMuZWRnZXNbMF0ubm9kZS5hbHRUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gaXRlbS52YXJpYW50cy5lZGdlc1swXS5ub2RlLnByaWNlO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3QuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBtZWRpYT17bWVkaWF9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5TGFiZWw9e2BWaWV3IGRldGFpbHMgZm9yICR7aXRlbS50aXRsZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5zZXQoJ2l0ZW0nLCBpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0b3JlLnNldCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0VG9Qcm9kdWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0gZmlsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtwcmljZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RXhwaXJlcyBvbiB7dHdvV2Vla3NGcm9tTm93fSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZXNvdXJjZUxpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIDwvUXVlcnk+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICBleHBvcnQgZGVmYXVsdCBSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHM7XHJcbiIsImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XHJcbmltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBQYWdlLFxyXG4gIERhdGFUYWJsZSxcclxuICBQYWdpbmF0aW9uLFxyXG4gIEJ1dHRvblxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucyc7XHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcclxuaW1wb3J0IFNlbGVjdCBmcm9tICcuL3NlbGVjdGRyb3AnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcblxyXG5jb25zdCBHRVRfT1JERVJTX0JZX0lEID0gZ3FsYFxyXG5xdWVyeSB7XHJcbiAgb3JkZXJzKGZpcnN0OiA1MCkge1xyXG4gICAgZWRnZXMge1xyXG4gICAgICBjdXJzb3JcclxuICAgICAgbm9kZSB7XHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIGVtYWlsXHJcbiAgICAgICAgY3JlYXRlZEF0XHJcbiAgICAgICAgZnVsZmlsbG1lbnRze1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIHRyYWNraW5nSW5mb3tcclxuICAgICAgICAgICAgY29tcGFueVxyXG4gICAgICAgICAgICBudW1iZXJcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVzdGltYXRlZERlbGl2ZXJ5QXRcclxuICAgICAgICAgIGRlbGl2ZXJlZEF0XHJcbiAgICAgICAgICBkaXNwbGF5U3RhdHVzXHJcbiAgICAgICAgICBzdGF0dXNcclxuICAgICAgICB9XHJcbiAgICAgICAgc2hpcHBpbmdMaW5le1xyXG4gICAgICAgICAgY2FycmllcklkZW50aWZpZXJcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VzdG9tZXJ7XHJcbiAgICAgICAgICBmaXJzdE5hbWVcclxuICAgICAgICAgIGxhc3ROYW1lXHJcbiAgICAgICAgICBlbWFpbFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufWA7XHJcblxyXG52YXIgcmV0b3VyRHVHZXQgPSBbXTtcclxuXHJcbi8qbGV0IEF1dGhVc2VyID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICByZXR1cm4gZ29vZ2xlLmxvZ2luKGRhdGEudXNlcm5hbWUsIGRhdGEucGFzc3dvcmQpLnRoZW4odG9rZW4gPT4geyByZXR1cm4gdG9rZW4gfSApXHJcbiB9XHJcbiBsZXQgdXNlclRva2VuID0gYXdhaXQgQXV0aFVzZXIoZGF0YSlcclxuIGNvbnNvbGUubG9nKHVzZXJUb2tlbikqL1xyXG5cclxuLyogbGV0IGNhbGxHZXQgPSBmdW5jdGlvbigpe1xyXG4gICBjb25zb2xlLmxvZyhcImF4aW9zXCIpIFxyXG4gdmFyIHJldG91ckRlRmluO1xyXG4gcmV0b3VyRHVHZXQgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL1wiK0tFWV9OR1JPS0JBQ0srXCIubmdyb2suaW8vZ2V0U3RhdGVPcmRlclwiLCB7aGVhZGVyczoge1wiQ29udGVudC1UeXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxyXG4gLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgIGNvbnNvbGUubG9nKFwicmVzdWx0IGRhbnMgbGUgdGhlbiBkYW5zIGxlIGNhbGxcIilcclxuICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpXHJcbiAgIHJldG91ckRlRmluID0gcmVzdWx0LmRhdGFcclxuICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gfSlcclxuIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKVxyXG4vLyByZXRvdXJEdUdldCA9IGF4aW9zLmdldChcImh0dHBzOi8vXCIrS0VZX05HUk9LQkFDSytcIi5uZ3Jvay5pby9nZXRTdGF0ZU9yZGVyXCIsIHtoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nfX0pLnZhbHVlLmRhdGFcclxuY29uc29sZS5sb2coXCJyZXN1bHQgw6AgbGEgZmluIGR1IGNhbGxcIilcclxuY29uc29sZS5sb2cocmV0b3VyRGVGaW4pIFxyXG5yZXR1cm4gcmV0b3VyRGVGaW5cclxufSovXHJcblxyXG4vKmFzeW5jIGZ1bmN0aW9uIGNhbGxHZXQoKXtcclxuICBjb25zb2xlLmxvZyhcImF4aW9zXCIpIFxyXG4gIHZhciByZXRvdXJEZUZpbjtcclxuICByZXRvdXJEdUdldCA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vXCIrS0VZX05HUk9LQkFDSytcIi5uZ3Jvay5pby9nZXRTdGF0ZU9yZGVyXCIsIHtoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBkYW5zIGxlIHRoZW4gZGFucyBsZSBjYWxsXCIpXHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSlcclxuICAgIHJldG91ckRlRmluID0gcmVzdWx0LmRhdGFcclxuICAgIHJldHVybiByZXN1bHQuZGF0YTtcclxuICB9KVxyXG4gIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKVxyXG4gLy8gcmV0b3VyRHVHZXQgPSBheGlvcy5nZXQoXCJodHRwczovL1wiK0tFWV9OR1JPS0JBQ0srXCIubmdyb2suaW8vZ2V0U3RhdGVPcmRlclwiLCB7aGVhZGVyczoge1wiQ29udGVudC1UeXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJ319KS52YWx1ZS5kYXRhXHJcbiBjb25zb2xlLmxvZyhcInJlc3VsdCDDoCBsYSBmaW4gZHUgY2FsbFwiKVxyXG4gY29uc29sZS5sb2cocmV0b3VyRGVGaW4pIFxyXG4gcmV0dXJuIHJldG91ckRlRmluXHJcbn0qL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNhbGxHZXQoKSB7XHJcbiAgY29uc29sZS5sb2coXCJheGlvc1wiKVxyXG4gIGF4aW9zLmdldChcImh0dHBzOi8vXCIgKyBLRVlfTkdST0tCQUNLICsgXCIubmdyb2suaW8vZ2V0U3RhdGVPcmRlclwiLCB7IGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nIH0gfSlcclxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJycnJ0XCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKVxyXG4gICAgICByZXR1cm4gcmVzdWx0LmRhdGFcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldENvbChtYXRyaXgsIGNvbCkge1xyXG4gIHZhciBjb2x1bW4gPSBbXTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdHJpeC5sZW5ndGg7IGkrKykge1xyXG4gICAgY29sdW1uLnB1c2gobWF0cml4W2ldW2NvbF0pO1xyXG4gIH1cclxuICByZXR1cm4gY29sdW1uO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gRGF0YVRhYmxlRXhhbXBsZShkYXRhKSB7XHJcblxyXG4gIGZ1bmN0aW9uIGNhbGxHZXRTdGF0ZU9yZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJkYW5zIGdldE9yZGVycyBheGlvcyBjYWxsIGdldCBzdGF0ZSBvcmRlclwiKVxyXG4gICAgY29uc29sZS5sb2coXCJodHRwczovL1wiICsgS0VZX05HUk9LQkFDSyArIFwiLm5ncm9rLmlvL2dldFN0YXRlT3JkZXJcIiwgeyBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH0pXHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KFwiaHR0cHM6Ly9cIiArIEtFWV9OR1JPS0JBQ0sgKyBcIi5uZ3Jvay5pby9nZXRTdGF0ZU9yZGVyXCIsIHsgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiAnYXBwbGljYXRpb24vanNvbicgfSB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaXRlbXMgPSBkYXRhLm9yZGVycy5lZGdlcztcclxuICBjb25zb2xlLmxvZyhcImFscGhhIHBoYXNlXCIpXHJcbiAgY2FsbEdldCgpXHJcbiAgLy9jb25zb2xlLmxvZyhjYWxsR2V0KCkpXHJcbiAgLy9jb25zb2xlLmxvZygoKSA9PiBjYWxsR2V0KCkpXHJcblxyXG5cclxuICBmdW5jdGlvbiBpdGVtc1RvTm9kZSh7IGN1cnNvciwgbm9kZSB9KSB7XHJcbiAgICByZXR1cm4geyBub2RlIH0ubm9kZVxyXG4gIH07XHJcblxyXG5cclxuICBmdW5jdGlvbiBub2RlVG9Sb3dzKG5vZGUsIGJ1aWxkaW5nUmF3KSB7XHJcbiAgICAvKmNvbnNvbGUubG9nKFwibm9kZVwiKVxyXG4gICAgY29uc29sZS5sb2cobm9kZSlcclxuICAgIGNvbnNvbGUubG9nKCdkYW5zIGxhIGxhbWJkYSBwcm9mb25kZScpKi9cclxuICAgIE9iamVjdC5lbnRyaWVzKG5vZGUpLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAvKmNvbnNvbGUubG9nKGVsZW1lbnRbMF0gIT09ICdfX3R5cGVuYW1lJylcclxuICAgICAgY29uc29sZS5sb2coZWxlbWVudFswXSAhPSAnX190eXBlbmFtZScpXHJcbiAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnRbMF0pKi9cclxuXHJcbiAgICAgIGlmIChlbGVtZW50WzBdICE9PSAnX190eXBlbmFtZScpIHtcclxuICAgICAgICAvKiBjb25zb2xlLmxvZyhidWlsZGluZ1JhdylcclxuICAgICAgICAgY29uc29sZS5sb2coW2VsZW1lbnRbMV1dKVxyXG4gICAgICAgICBjb25zb2xlLmxvZyhidWlsZGluZ1Jhdy5jb25jYXQoW2VsZW1lbnRbMV1dKSlcclxuICAgICAgICAgY29uc29sZS5sb2coJ19fX19fX19fX19fXycpKi9cclxuICAgICAgICBidWlsZGluZ1JhdyA9ICh0eXBlb2YgZWxlbWVudFsxXSA9PT0gJ29iamVjdCcgJiYgZWxlbWVudFsxXSAhPT0gbnVsbCkgPyBub2RlVG9Sb3dzKGVsZW1lbnRbMV0sIGJ1aWxkaW5nUmF3KSA6IGJ1aWxkaW5nUmF3LmNvbmNhdChbZWxlbWVudFsxXV0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBidWlsZGluZ1JhdztcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuICAvKiBjb25zb2xlLmxvZygnaXRlbXMubWFwKGl0ZW1zVG9Ob2RlKScpXHJcbiAgIGNvbnNvbGUubG9nKGl0ZW1zLm1hcChpdGVtc1RvTm9kZSkpKi9cclxuICB2YXIgcm93cyA9IFtdO1xyXG4gIGl0ZW1zLm1hcChpdGVtc1RvTm9kZSkuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xyXG4gICAgLyogY29uc29sZS5sb2coJ2tleSx2YWx1ZScpXHJcbiAgICAgY29uc29sZS5sb2coa2V5KVxyXG4gICAgIGNvbnNvbGUubG9nKHZhbHVlKSovXHJcbiAgICByb3dzW2tleV0gPSBub2RlVG9Sb3dzKHZhbHVlLCBbXSlcclxuICB9KVxyXG5cclxuICBmdW5jdGlvbiBpbml0Um93cyhkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZygnSW5pdCByb3dzJylcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICByb3dzLmZvckVhY2goZnVuY3Rpb24gKHBhcnQsIGluZGV4KSB7XHJcblxyXG4gICAgIC8qIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgc3RvcmUuc2V0KCdldGF0Jyt0aGlzLnByb3BzLmlkLCB7IGlkIDogdGhpcy5wcm9wcy5pZCwgY2hvaXggOiBldmVudC50YXJnZXQudmFsdWV9KVxyXG4gICAgICAgdmFyIG9yZGVyU3RhdGUgPSAoZXZlbnQudGFyZ2V0LnZhbHVlID09IFwiU2VsZWN04oCmXCIpID8gbnVsbCA6IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgIGNvbnNvbGUubG9nKG9yZGVyU3RhdGUpKi9cclxuXHJcbiAgICAgIHJvd3NbaW5kZXhdID0gWzxTZWxlY3QgaWQ9e2luZGV4fSB2YWx1ZURlREI9eyBkYXRhW2luZGV4XS5vcmRlcl9zdGF0ZSA9PSBudWxsID8gOTk0OSA6IGRhdGFbaW5kZXhdLm9yZGVyX3N0YXRlfT48L1NlbGVjdD5dLmNvbmNhdChwYXJ0KTtcclxuICAgICAgICAvLy5zZXRTdGF0ZSh7dmFsdWUgOiBkYXRhW2luZGV4XS5vcmRlcl9zdGF0ZX0pXVxyXG4gICAgfSwgcm93cyk7XHJcbiAgXHJcbiAgICB2YXIgY29sb25lRGVzRXRhdHNBU2V0dGVyID0gZ2V0Q29sKHJvd3MsIDApXHJcbiAgICBjb25zb2xlLmxvZyhcImNvbG9ubmUgZGVzIHNlbGVjdFwiKVxyXG4gICAgY29uc29sZS5sb2coY29sb25lRGVzRXRhdHNBU2V0dGVyKVxyXG4gICAgdmFyIGNvbG9uZURlc05hbWVzSWRzID0gZ2V0Q29sKHJvd3MsIDEpXHJcbiAgXHJcbiAgfVxyXG5cclxuICB2YXIgcm93c0Zyb21EQiA9IFtdO1xyXG5cclxuICBjYWxsR2V0U3RhdGVPcmRlcigpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgY29uc29sZS5sb2coXCJjYWxsIGdldCBzdGF0ZSBvcmRlciBjYWxsYmFja1wiKVxyXG4gICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpXHJcbiAgICBpbml0Um93cyhyZXN1bHQuZGF0YSlcclxuICB9KVxyXG5cclxuICAvKiogU0FNSUEgREVCVVRcclxuICByb3dzLmZvckVhY2goZnVuY3Rpb24gKHBhcnQsIGluZGV4KSB7XHJcbiAgICAvL2F4aW9zLmdldEV0YXQgZHUgc2VsZWN0IMOgIHNldHRlciAoZW4gZm9uY3Rpb24gZGUgbGEgcGFnZSBldCBkdSB0cmkgKGxlIHRyaSBkb2l0IGV0cmUgZ2xvYmFsIGRhbnMgdW4gcHJlbWllciB0ZW1wcyBldCBwdWlzIG9uIHBvdXJyYSBmYWlyZSB1biB0cmkgc3VyIGxlcyBzZXVscyDDqWzDqW1lbnRzIGRlIGxhIHBhZ2UgYXVzc2kpKVxyXG4gICAgcm93c1tpbmRleF0gPSBbPFNlbGVjdCBpZD17aW5kZXh9PjwvU2VsZWN0Pl0uY29uY2F0KHBhcnQpO1xyXG4gIH0sIHJvd3MpO1xyXG5cclxuICBjb25zb2xlLmxvZygncm93cycpO1xyXG4gIGNvbnNvbGUubG9nKHJvd3MpO1xyXG5cclxuICAvL29uIG5lIHRpZW50IHBhcyBlbmNvcmUgY29tcHRlIGRlIGxhIHBhZ2luYXRpb25cclxuICB2YXIgY29sb25lRGVzRXRhdHNBU2V0dGVyID0gZ2V0Q29sKHJvd3MsIDApXHJcbiAgY29uc29sZS5sb2coJ3ZpZGU/JylcclxuICBjb25zb2xlLmxvZyhjb2xvbmVEZXNFdGF0c0FTZXR0ZXIpXHJcbiAgdmFyIGNvbG9uZURlc05hbWVzSWRzID0gZ2V0Q29sKHJvd3MsIDEpXHJcblxyXG4gIHZhciByb3dzRnJvbURCID0gW107XHJcbiAgY29uc29sZS5sb2cocm93c0Zyb21EQilcclxuICBjb25zb2xlLmxvZyhcImJldGEgcGhhc2VcIilcclxuICBTQU1JQSBGSU4gKiovXHJcblxyXG4gIC8qbGV0IEF1dGhVc2VyID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgcmV0dXJuIGdvb2dsZS5sb2dpbihkYXRhLnVzZXJuYW1lLCBkYXRhLnBhc3N3b3JkKS50aGVuKHRva2VuID0+IHsgcmV0dXJuIHRva2VuIH0gKVxyXG4gIH1cclxuICBsZXQgdXNlclRva2VuID0gYXdhaXQgQXV0aFVzZXIoZGF0YSlcclxuICBjb25zb2xlLmxvZyh1c2VyVG9rZW4pKi9cclxuXHJcblxyXG4gIGNvbnNvbGUubG9nKGNhbGxHZXQoKSlcclxuICB2YXIgcmV0b3VyRHVDYWxsR2V0O1xyXG4gIC8qY29uc29sZS5sb2coY2FsbEdldCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImxlIHJlc3VsdCBkYW5zIGxlIHRoZW5cIilcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCkgLy8gXCJTb21lIFVzZXIgdG9rZW5cIlxyXG4gICAgcmV0b3VyRHVDYWxsR2V0ID0gcmVzdWx0O1xyXG4gICAgY29uc29sZS5sb2coJ3Jlc29sZXZlZWUnKVxyXG4gICAgLy9yZXNvbHZlKHJlc3VsdClcclxuICAgIHJldHVybiByZXN1bHRcclxuIH0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgY29uc29sZS5sb2coXCJsZSByZXN1bHQgZGFucyBsZSB0aGVuXCIpXHJcbiAgY29uc29sZS5sb2cocmVzdWx0KSAvLyBcIlNvbWUgVXNlciB0b2tlblwiXHJcbiAgcmV0b3VyRHVDYWxsR2V0ID0gcmVzdWx0O1xyXG4gIHJldHVybiByZXN1bHRcclxufSkpKi9cclxuICBjb25zb2xlLmxvZyhcInJldG91ckR1Q2FsbEdldFwiKVxyXG4gIGNvbnNvbGUubG9nKHJldG91ckR1Q2FsbEdldClcclxuICAvKnJldG91ckR1Q2FsbEdldC5mb3JFYWNoKCh2YWx1ZSwga2V5KT0+IHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKVxyXG5cclxuICAgIHJvd3NGcm9tREJba2V5XSA9IG5vZGVUb1Jvd3ModmFsdWUsW10pIFxyXG4gICB9KSovXHJcbiAgY29uc29sZS5sb2coXCJyb3dzRnJvbURCXCIpXHJcbiAgY29uc29sZS5sb2cocm93c0Zyb21EQilcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZSBmdWxsV2lkdGg9XCJ0cnVlXCI+XHJcbiAgICAgIDxDYXJkPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gY2FsbEdldCgpfT5FeGFtcGxlIGJ1dHRvbjwvQnV0dG9uPlxyXG4gICAgICAgIHsvL3JldG91ckR1R2V0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxEYXRhVGFibGVcclxuICAgICAgICAgIGNvbHVtbkNvbnRlbnRUeXBlcz17W1xyXG4gICAgICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgICAgICd0ZXh0JyxcclxuICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgICAgICd0ZXh0JyxcclxuICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgICAgaGVhZGluZ3M9e1tcclxuICAgICAgICAgICAgJ2lkJyxcclxuICAgICAgICAgICAgJ25hbWUnLFxyXG4gICAgICAgICAgICAnZW1haWwnLFxyXG4gICAgICAgICAgICAnamNwJyxcclxuICAgICAgICAgICAgJ2pjcCcsXHJcbiAgICAgICAgICAgICdqY3AnLFxyXG4gICAgICAgICAgICAnamNwJyxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgICAvL2lsIGZhdXQgcsOpY3Vww6lyZXIgbGVzIG9yZGVyIHN0YXRlcyBkZSBsYSBkYiBldCBwZXV0IGV0cmUgbGVzIG1ldHRyZSBlbiBjYWNoZSBjYSBzZXJhaXQgY29vbFxyXG4gICAgICAgICAgcm93cz17cm93c31cclxuICAgICAgICAvLyc8aW1nIHNyYz1cIicrZGF0YSsnXCI+J1xyXG5cclxuICAgICAgICAvKnNvdXJjZT17XHJcbiAgICAgICAgICBpdGVtLm5vZGUubGluZUl0ZW1zLmVkZ2VzWzBdXHJcbiAgICAgICAgICAgID8gaXRlbS5ub2RlLmxpbmVJdGVtcy5lZGdlc1swXS5ub2RlLmltYWdlLm9yaWdpbmFsU3JjXHJcbiAgICAgICAgICAgIDogJydcclxuICAgICAgICB9Ki9cclxuICAgICAgICAvL3RvdGFscz17WycnLCAnJywgJycsIDI1NSwgJyQxNTUsODMwLjAwJ119XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9QYWdlPlxyXG5cclxuXHJcbiAgKTtcclxufVxyXG5cclxuY2xhc3MgUmVzb3VyY2VMaXN0V2l0aE9yZGVycyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxRdWVyeSBxdWVyeT17R0VUX09SREVSU19CWV9JRH0+XHJcbiAgICAgICAgeyh7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0pID0+IHtcclxuICAgICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5n4oCmPC9kaXY+O1xyXG4gICAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEub3JkZXJzLmVkZ2VzKTtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YS5vcmRlcnMuZWRnZXNbMF0ubm9kZS5saW5lSXRlbXMuZWRnZXNbMF0ubm9kZS5pbWFnZS5vcmlnaW5hbFNyYyk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgRGF0YVRhYmxlRXhhbXBsZShkYXRhKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9fVxyXG4gICAgICA8L1F1ZXJ5PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbi8qPENhcmQ+XHJcbiAgPHA+TGVzIDUwIGRlcm5pw6hyZXMgY29tbWFuZGVzPC9wPlxyXG4gIDxSZXNvdXJjZUxpc3RcclxuICAgIHNob3dIZWFkZXJcclxuICAgIHJlc291cmNlTmFtZT17eyBzaW5ndWxhcjogJ09yZGVyJywgcGx1cmFsOiAnT3JkZXJzJyB9fVxyXG4gICAgaXRlbXM9e2RhdGEub3JkZXJzLmVkZ2VzfVxyXG4gICAgcmVuZGVySXRlbT17aXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IG9yZGVyTmFtZSA9IGl0ZW0ubm9kZS5uYW1lXHJcbiAgICAgIGNvbnN0IG1lZGlhID0gKFxyXG4gICAgICAgIDxUaHVtYm5haWxcclxuICAgICAgICAgIHNvdXJjZT17XHJcbiAgICAgICAgICAgIGl0ZW0ubm9kZS5saW5lSXRlbXMuZWRnZXNbMF1cclxuICAgICAgICAgICAgICA/IGl0ZW0ubm9kZS5saW5lSXRlbXMuZWRnZXNbMF0ubm9kZS5pbWFnZS5vcmlnaW5hbFNyY1xyXG4gICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBwcmljZSA9IGl0ZW0ubm9kZS5uZXRQYXltZW50U2V0LnNob3BNb25leS5hbW91bnQ7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgXHJcbiAgICAgICAgPFJlc291cmNlTGlzdC5JdGVtXHJcbiAgICAgICAgbWVkaWEgPSB7b3JkZXJOYW1lfVxyXG4gICAgICAgICAvLyBpZD17aXRlbS5pZH1cclxuICAgICAgICAgIG1lZGlhPXttZWRpYX1cclxuICAgICAgICAgIC8vYWNjZXNzaWJpbGl0eUxhYmVsPXtgVmlldyBkZXRhaWxzIGZvciAke2l0ZW0udGl0bGV9YH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgLy9zdG9yZS5zZXQoJ2l0ZW0nLCBpdGVtKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0b3JlLnNldCcpXHJcbiAgICAgICAgICAgIC8vcmVkaXJlY3RUb1Byb2R1Y3QoKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFN0YWNrPlxyXG4gICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPHA+e29yZGVyTmFtZX08L3A+XHJcbiAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgPFN0YWNrLkl0ZW0gZmlsbD5cclxuICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0ubm9kZS5pZH1cclxuICAgICAgICAgICAgICAgIDwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPHA+JHtwcmljZX08L3A+XHJcbiAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPHA+RXhwaXJlcyBvbiBSIDwvcD5cclxuICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICA8L1Jlc291cmNlTGlzdC5JdGVtPlxyXG4gICAgICApO1xyXG4gICAgfX1cclxuICAvPlxyXG48L0NhcmQ+XHJcbik7XHJcbn19XHJcbjwvUXVlcnk+XHJcbik7XHJcbn1cclxufSovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNvdXJjZUxpc3RXaXRoT3JkZXJzOyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICdzdG9yZS1qcyc7XHJcblxyXG4vKmNvbnN0IGRvdGVudiA9IHJlcXVpcmUoJ2RvdGVudicpO1xyXG5jb25zdCBuZXh0ID0gcmVxdWlyZSgnbmV4dCcpO1xyXG5kb3RlbnYuY29uZmlnKCk7XHJcbmNvbnN0IGRldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbic7XHJcbmNvbnN0IGFwcCA9IG5leHQoeyBkZXYgfSk7XHJcbmNvbnN0IHsgUkVBQ1RfQVBQX05HUk9LQkFDSyB9ID0gcHJvY2Vzcy5lbnY7XHJcbmNvbnN0IGhhbmRsZSA9IGFwcC5nZXRSZXF1ZXN0SGFuZGxlcigpO1xyXG5cclxuY29uc29sZS5sb2cocHJvY2Vzcy5lbnYpXHJcbmFwcC5wcmVwYXJlKCkudGhlbigoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJpbiBhcHAgcHJlcGFyZVwiKVxyXG4gIGNvbnNvbGUubG9nKFJFQUNUX0FQUF9OR1JPS0JBQ0spXHJcbn0pOyovXHJcblxyXG5cclxuLy9jb25zdCB7UkVBQ1RfQVBQX25ncm9rQmFja30gPSBwcm9jZXNzLmVudjtcclxuLy9jb25zdCBuZ3Jva0JhY2sgPSBSRUFDVF9BUFBfbmdyb2tCYWNrO1xyXG5jb25zb2xlLmxvZygnY0FjQUFBQUFBQUFBQUFBQUFBQUFBQUFBJylcclxuY29uc29sZS5sb2coS0VZX05HUk9LQkFDSylcclxuXHJcbi8vY2xhc3MgU2VsZWN0IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcbmNsYXNzIFNlbGVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ1NlbGVjdOKApicsXHJcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICdBJyxcclxuICAgICAgICAgIHZhbHVlOiA0NDQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAnQicsXHJcbiAgICAgICAgICB2YWx1ZTogMzMzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ0MnLFxyXG4gICAgICAgICAgdmFsdWU6IDIyMixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICB2YWx1ZTogJz8nLFxyXG4gICAgICB2YWx1ZURlRGJTdGF0ZSA6ICcnLFxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgXHJcbiAgXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYXplcnR5dWlvcFwiKVxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzKVxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnZhbHVlKVxyXG4gICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXHJcblxyXG5cclxuLy9MNEVSUkVVUiBFU1QgSUNJLCBpbCBmYXV0IGFycmV0ZXIgZCd1dGlsaXNlciBWYWx1ZURlRGIgZGUgcHJvcHMgbWFpcyB1dGlsaXNlciBWYWx1ZURlREJTdGF0ZSBkdSBTdGF0ZSA6KVxyXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3Byb3BzJywge1xyXG4gICAgICAgIHZhbHVlOiB7aWQ6IHRoaXMucHJvcHMuaWQsIHZhbHVlRGVEQjogZXZlbnQudGFyZ2V0LnZhbHVlfSxcclxuICAgICAgICB3cml0YWJsZTogZmFsc2VcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvL3RoaXMucHJvcHMudmFsdWVEZURCID0gZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgIHN0b3JlLnNldCgnZXRhdCcrdGhpcy5wcm9wcy5pZCwgeyBpZCA6IHRoaXMucHJvcHMuaWQsIGNob2l4IDogZXZlbnQudGFyZ2V0LnZhbHVlfSlcclxuXHJcbiAgICAgIHZhciBvcmRlclN0YXRlID0gKGV2ZW50LnRhcmdldC52YWx1ZSA9PSBcIlNlbGVjdOKAplwiKSA/IG51bGwgOiBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKG9yZGVyU3RhdGUpXHJcblxyXG5cclxuICAgICAgLy9jb25zb2xlLmxvZyhSRUFDVF9BUFBfbmdyb2tCYWNrKVxyXG5cclxuICAgICAgLy9sJ2lkIHF1J29uIGVudm9pZSBlbiBwYXJhbXMgZXN0IGwnaWQgZHUgc2VsZWN0IGRhbnMgbGEgcGFnZSBjb25jZXJuw6llLiBpbCBmYXVkcmEgbGUgZmFpcmUgY29ycmVzcG9uZHJlIGF1IHZyYWkgSUQgZW4gZm9uY3Rpb24gZGUgbGEgcGFnaW5hdGlvbiBldCBkdSB0cmkgZGUgbGEgZGF0YXRhYmxlXHJcbiAgICAgIGF4aW9zLnB1dChcclxuICAgICAgICAvL1wiaHR0cHM6Ly81NDdmNDE3Y2MzMjkubmdyb2suaW8vaGFuZGxlXCIsIFxyXG4gICAgICAgIFwiaHR0cHM6Ly9cIitLRVlfTkdST0tCQUNLK1wiLm5ncm9rLmlvL2hhbmRsZVwiLCBcclxuICAgICAgICB7XCJvcmRlcl9zdGF0ZVwiIDogb3JkZXJTdGF0ZX0sIFxyXG4gICAgICAgIHtwYXJhbXM6IHsgaWQ6dGhpcy5wcm9wcy5pZCsxIH0sIGhlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiAnYXBwbGljYXRpb24vanNvbid9fVxyXG4gICAgKVxyXG4gICAgXHJcblxyXG5cclxuICAgICAgLy9heGlvcy5wdXQoXCJodHRwczovL1wiK1JFQUNUX0FQUF9uZ3Jva0JhY2srXCIubmdyb2suaW8vaGFuZGxlXCIsIHt9KVxyXG4gICAgIC8vIFwicHJveHlcIjogXCJodHRwOi8vJHtSRUFDVF9BUFBfbmdyb2tCYWNrfS5uZ3Jvay5pb1wiLFxyXG5cclxuXHJcbiAgICAgIC8vYXhpb3MucHV0KFwibG9jYWxob3N0OjUwMDAvaGFuZGxlXCIsIHt9KVxyXG5cclxuICAgICAgLyoudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3l5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5JylcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgfSkqL1xyXG5cclxuXHJcbiAgICAgIC8qIHZhciBzcWwgPSBcIlVQREFURSBvcmRlcnMgU0VUIG9yZGVyX3N0YXRlID0gNiBXSEVSRSBvcmRlcl9pZD0xXCI7XHJcbiAgICAgICAgY29uLnF1ZXJ5KHNxbCwgZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7XHJcbiAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuYWZmZWN0ZWRSb3dzICsgXCIgcmVjb3JkKHMpIHVwZGF0ZWRcIik7XHJcbiAgICAgICAgfSk7Ki9cclxuICAgIH07XHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdyZW5kZXInKVxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxyXG4gICAgICBjb25zb2xlLmxvZygndmFsdWUnKVxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnZhbHVlRGVEQilcclxuXHJcblxyXG5cclxuXHJcbiAgICAgIHZhciB7IG9wdGlvbnMsIHZhbHVlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICB2YXIgY3VycmVudElkO1xyXG4gICAgICB2YXIgZXRhdEZyb21TdG9yZTtcclxuICAgICAgLy9pY2ksIGlsIGZhdXQgY2hvaXNpciBzaSB2YWx1ZSBlc3QgY2VsdWkgZGUgbGEgYmRkICjDoCBsJ2luaXRpYWxpc2F0aW9uKSwgb3UgY2VsdWkgcXUnb24gdmllbiBkZSBjaG9pc2lyLCggYXByZXMgdW4gcHV0KVxyXG4gICAgICB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWVEZURCID09IG51bGwgPyA5OTQ5IDogdGhpcy5wcm9wcy52YWx1ZURlREI7XHJcbiAgICAgIHZhciB2YWw7XHJcblxyXG4gICAgICBjdXJyZW50SWQgPSB0aGlzLnByb3BzLmlkLFxyXG4gICAgICBldGF0RnJvbVN0b3JlID0gc3RvcmUuZ2V0KCdldGF0JytjdXJyZW50SWQpLFxyXG4gICAgICB2YWwgPSB2YWx1ZTtcclxuXHJcbiAgICAgIC8vcG91ciBzZXR0ZXIgbGEgbGlnbmUgMSAocGFzIGxhIDApIMOgIHVuZGVmaW5lZFxyXG4gICAgICAvL2V0YXRGcm9tU3RvcmUuaWQgPT0gMSA/IGV0YXRGcm9tU3RvcmUgPSB1bmRlZmluZWQgOiAnJyxcclxuXHJcbiAgICAgIGV0YXRGcm9tU3RvcmUgPT0gdW5kZWZpbmVkID8gXHJcbiAgICAgIHN0b3JlLnNldCgnZXRhdCcrY3VycmVudElkLHsgaWQgOiBjdXJyZW50SWQsIGNob2l4IDogdmFsfSkgOiBcclxuICAgICAgdmFsPWV0YXRGcm9tU3RvcmUuY2hvaXggPT0gbnVsbCA/IDk5NDkgOiBldGF0RnJvbVN0b3JlLmNob2l4O1xyXG4gICAgICAvL2NvbnNvbGUubG9nKCdldGF0JyArIGN1cnJlbnRJZCksXHJcbiAgICAgIC8vY29uc29sZS5sb2coZXRhdEZyb21TdG9yZSlcclxuICAgICAgLy9jb25zb2xlLmxvZyhldGF0RnJvbVN0b3JlID09IHVuZGVmaW5lZCA/ICdwYXMgZFxcJ2lkJyA6IGV0YXRGcm9tU3RvcmUuaWQpLFxyXG5cclxuXHJcblxyXG4gICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzJylcclxuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzKVxyXG5cclxuICBcclxuXHJcbiAgICAgLy8gPHNlbGVjdCBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt2YWx1ZX0+XHJcblxyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3ZhbH0+XHJcbiAgICAgICAgICAgIHtvcHRpb25zLm1hcChpdGVtID0+IChcclxuXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiBcclxuICAgICAgICAgICAgICAvKmNvbnNvbGUubG9nKCdldGF0JytjdXJyZW50SWQpLFxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV0YXRGcm9tU3RvcmUpLFxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV0YXRGcm9tU3RvcmUgPT0gdW5kZWZpbmVkKSxcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldGF0RnJvbVN0b3JlID09IHVuZGVmaW5lZCA/ICdwYXMgZFxcJ2lkJyA6IGV0YXRGcm9tU3RvcmUuaWQpLFxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV0YXRGcm9tU3RvcmUgPT0gdW5kZWZpbmVkID8gJ3BhcyBkZSBjaG9peCBjaG9pc2knIDogZXRhdEZyb21TdG9yZS5jaG9peCksXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJvcHRpb25cIiksXHJcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhpdGVtKSxcclxuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHt2YWx1ZX0pLFxyXG4gICAgICAgICAgICAgIC8qY29uc29sZS5sb2codGhpcyksKi9cclxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aXRlbS52YWx1ZX0gdmFsdWU9e2l0ZW0udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDxoMT5GYXZvcml0ZSBsZXR0ZXI6IHt2YWx1ZX08L2gxPlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGV4cG9ydCBkZWZhdWx0IFNlbGVjdDsiLCJpbXBvcnQgeyBFbXB0eVN0YXRlLCBMYXlvdXQsIFBhZ2UgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IHsgUmVzb3VyY2VQaWNrZXIsIFRpdGxlQmFyIH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnc3RvcmUtanMnO1xyXG5pbXBvcnQgUmVzb3VyY2VMaXN0V2l0aFByb2R1Y3RzIGZyb20gJy4uL2NvbXBvbmVudHMvUmVzb3VyY2VMaXN0JztcclxuaW1wb3J0IFJlc291cmNlTGlzdFdpdGhPcmRlcnMgZnJvbSAnLi4vY29tcG9uZW50cy9nZXRPcmRlcnMnO1xyXG5cclxuXHJcblxyXG4vL2NvbnN0IGltZyA9ICdodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDc1Ny85OTU1L2ZpbGVzL2VtcHR5LXN0YXRlLnN2Zyc7XHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7IG9wZW46IGZhbHNlIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgZW1wdHlTdGF0ZSA9ICFzdG9yZS5nZXQoJ2lkcycpO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8UmVzb3VyY2VMaXN0V2l0aE9yZGVycyAvPlxyXG4gICAgKTt9XHJcbiAgICAvKnJldHVybiAoXHJcbiAgICAgIDxQYWdlPlxyXG4gICAgICAgIDxUaXRsZUJhclxyXG4gICAgICAgICAgdGl0bGU9XCJTYW1wbGUgQXBwXCJcclxuICAgICAgICAgIHByaW1hcnlBY3Rpb249e3tcclxuICAgICAgICAgICAgY29udGVudDogJ1NlbGVjdCBwcm9kdWN0cycsXHJcbiAgICAgICAgICAgIC8vY29tbWVudCBmYWlyZSAyIGxhbWJkYXMgw6AgbGEgc3VpdGUgcG91ciBhdm9pciBhdXNzaSBsZSBjb25zb2xlIGxvZz9cclxuICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pLFxyXG4gICAgICAgICAgICAvL29uQWN0aW9uOiAoKSA9PiBjb25zb2xlLmxvZygnY2xpY2tlZGQnKSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8UmVzb3VyY2VQaWNrZXJcclxuICAgICAgICAgIHJlc291cmNlVHlwZT1cIlByb2R1Y3RcIlxyXG4gICAgICAgICAgc2hvd1ZhcmlhbnRzPXtmYWxzZX1cclxuICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cclxuICAgICAgICAgIG9uU2VsZWN0aW9uPXsocmVzb3VyY2VzKSA9PiB0aGlzLmhhbmRsZVNlbGVjdGlvbihyZXNvdXJjZXMpfVxyXG4gICAgICAgICAgb25DYW5jZWw9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KX1cclxuICAgICAgICAvPlxyXG4gICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPEVtcHR5U3RhdGVcclxuICAgICAgICAgICAgICBoZWFkaW5nPVwiU2VsZWN0IHByb2R1Y3RzIHRvIHN0YXJ0XCJcclxuICAgICAgICAgICAgICBhY3Rpb249e3tcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdTZWxlY3QgcHJvZHVjdHMnLFxyXG4gICAgICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLy9pbWFnZT17aW1nfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHA+U2VsZWN0IHByb2R1Y3RzIGFuZCBjaGFuZ2UgdGhlaXIgcHJpY2UgdGVtcG9yYXJpbHk8L3A+XHJcbiAgICAgICAgICAgIDwvRW1wdHlTdGF0ZT5cclxuICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAge2VtcHR5U3RhdGUgPyAoXHJcbiAgICAgICAgICAgIDxSZXNvdXJjZUxpc3RXaXRoT3JkZXJzIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIC8vPFJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyAvPlxyXG4gICAgICAgICAgICA8UmVzb3VyY2VMaXN0V2l0aE9yZGVycyAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvUGFnZT5cclxuICAgICk7XHJcbiAgfVxyXG4gIGhhbmRsZVNlbGVjdGlvbiA9IChyZXNvdXJjZXMpID0+IHtcclxuICAgIGNvbnN0IGlkc0Zyb21SZXNvdXJjZXMgPSByZXNvdXJjZXMuc2VsZWN0aW9uLm1hcCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSlcclxuICAgIGNvbnNvbGUubG9nKHJlc291cmNlcylcclxuICAgIGNvbnNvbGUubG9nKGlkc0Zyb21SZXNvdXJjZXMpXHJcbiAgICBjb25zb2xlLmxvZyhyZXNvdXJjZXMuaWQpXHJcbiAgICBzdG9yZS5zZXQoJ2lkcycsIGlkc0Zyb21SZXNvdXJjZXMpO1xyXG4gIH07Ki9cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hcG9sbG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0b3JlLWpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=