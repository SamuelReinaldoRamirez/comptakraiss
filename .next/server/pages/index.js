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
  axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("https://" + "dc361f0796f5" + ".ngrok.io/getStateOrder", {
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
    console.log("https://" + "dc361f0796f5" + ".ngrok.io/getStateOrder", {
      headers: {
        "Content-Type": 'application/json'
      }
    });
    return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("https://" + "dc361f0796f5" + ".ngrok.io/getStateOrder", {
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
console.log("dc361f0796f5"); //class Select extends PureComponent {

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
      "https://" + "dc361f0796f5" + ".ngrok.io/handle", {
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

    this.state.valueDeDbState = props.valueDeDB;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXNvdXJjZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nZXRPcmRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWxlY3Rkcm9wLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYXBvbGxvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdG9yZS1qc1wiIl0sIm5hbWVzIjpbIkdFVF9QUk9EVUNUU19CWV9JRCIsImdxbCIsIlJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVyIiwiYXBwIiwiY29udGV4dCIsInJlZGlyZWN0VG9Qcm9kdWN0IiwicmVkaXJlY3QiLCJSZWRpcmVjdCIsImNyZWF0ZSIsImRpc3BhdGNoIiwiQWN0aW9uIiwiQVBQIiwidHdvV2Vla3NGcm9tTm93IiwiRGF0ZSIsIm5vdyIsInRvRGF0ZVN0cmluZyIsImlkcyIsInN0b3JlIiwiZ2V0IiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJub2RlcyIsIml0ZW0iLCJtZWRpYSIsImltYWdlcyIsImVkZ2VzIiwibm9kZSIsIm9yaWdpbmFsU3JjIiwiYWx0VGV4dCIsInByaWNlIiwidmFyaWFudHMiLCJpZCIsInRpdGxlIiwic2V0IiwiQ29udGV4dCIsIkdFVF9PUkRFUlNfQllfSUQiLCJyZXRvdXJEdUdldCIsImNhbGxHZXQiLCJheGlvcyIsIktFWV9OR1JPS0JBQ0siLCJoZWFkZXJzIiwidGhlbiIsInJlc3VsdCIsImdldENvbCIsIm1hdHJpeCIsImNvbCIsImNvbHVtbiIsImkiLCJsZW5ndGgiLCJwdXNoIiwiRGF0YVRhYmxlRXhhbXBsZSIsImNhbGxHZXRTdGF0ZU9yZGVyIiwiaXRlbXMiLCJvcmRlcnMiLCJpdGVtc1RvTm9kZSIsImN1cnNvciIsIm5vZGVUb1Jvd3MiLCJidWlsZGluZ1JhdyIsIk9iamVjdCIsImVudHJpZXMiLCJmb3JFYWNoIiwiZWxlbWVudCIsImluZGV4IiwiY29uY2F0Iiwicm93cyIsIm1hcCIsInZhbHVlIiwia2V5IiwiaW5pdFJvd3MiLCJwYXJ0Iiwib3JkZXJfc3RhdGUiLCJjb2xvbmVEZXNFdGF0c0FTZXR0ZXIiLCJjb2xvbmVEZXNOYW1lc0lkcyIsInJvd3NGcm9tREIiLCJyZXRvdXJEdUNhbGxHZXQiLCJSZXNvdXJjZUxpc3RXaXRoT3JkZXJzIiwiU2VsZWN0IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsIm9wdGlvbnMiLCJuYW1lIiwidmFsdWVEZURiU3RhdGUiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0Iiwic3RhdGUiLCJjaG9peCIsIm9yZGVyU3RhdGUiLCJwdXQiLCJwYXJhbXMiLCJ2YWx1ZURlREIiLCJjdXJyZW50SWQiLCJldGF0RnJvbVN0b3JlIiwidmFsIiwidW5kZWZpbmVkIiwiaGFuZGxlQ2hhbmdlIiwiSW5kZXgiLCJvcGVuIiwiZW1wdHlTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7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RSw4REFBQyw2REFBRCxLQURGO0FBRUc7QUFDSDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFyRG9DOztBQXdEckJvRixvRUFBZixFOzs7Ozs7Ozs7OztBQ3BFQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xyXG5pbXBvcnQgeyBDYXJkLFxyXG4gICAgUmVzb3VyY2VMaXN0LFxyXG4gICAgU3RhY2ssXHJcbiAgICBUZXh0U3R5bGUsXHJcbiAgICBUaHVtYm5haWwsIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICdzdG9yZS1qcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zJztcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3QnO1xyXG5cclxuY29uc3QgR0VUX1BST0RVQ1RTX0JZX0lEID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldFByb2R1Y3RzKCRpZHM6IFtJRCFdISkge1xyXG4gICAgbm9kZXMoaWRzOiAkaWRzKSB7XHJcbiAgICAgIC4uLiBvbiBQcm9kdWN0IHtcclxuICAgICAgICB0aXRsZVxyXG4gICAgICAgIGhhbmRsZVxyXG4gICAgICAgIGRlc2NyaXB0aW9uSHRtbFxyXG4gICAgICAgIGlkXHJcbiAgICAgICAgaW1hZ2VzKGZpcnN0OiAxKSB7XHJcbiAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgIG9yaWdpbmFsU3JjXHJcbiAgICAgICAgICAgICAgYWx0VGV4dFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhcmlhbnRzKGZpcnN0OiAxKSB7XHJcbiAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcblxyXG5jbGFzcyBSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIGNvbnRleHRUeXBlID0gQ29udGV4dDtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgYXBwID0gdGhpcy5jb250ZXh0O1xyXG4gICAgY29uc3QgcmVkaXJlY3RUb1Byb2R1Y3QgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlZGlyZWN0ID0gUmVkaXJlY3QuY3JlYXRlKGFwcCk7XHJcbiAgICAgIHJlZGlyZWN0LmRpc3BhdGNoKFxyXG4gICAgICAgIFJlZGlyZWN0LkFjdGlvbi5BUFAsXHJcbiAgICAgICAgJy9lZGl0LXByb2R1Y3RzJyxcclxuICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHR3b1dlZWtzRnJvbU5vdyA9IG5ldyBEYXRlKERhdGUubm93KCkgKyAxMjA5NmU1KS50b0RhdGVTdHJpbmcoKTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAvLzxRdWVyeSBxdWVyeT17R0VUX1BST0RVQ1RTX0JZX0lEfT5cclxuICAgICAgICA8UXVlcnkgcXVlcnk9e0dFVF9QUk9EVUNUU19CWV9JRH0gdmFyaWFibGVzPXt7IGlkczogc3RvcmUuZ2V0KCdpZHMnKSB9fT5cclxuICAgICAgICAgIHsoeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5n4oCmPC9kaXY+O1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICA8UmVzb3VyY2VMaXN0XHJcbiAgICAgICAgICAgICAgICBzaG93SGVhZGVyXHJcbiAgICAgICAgICAgICAgICByZXNvdXJjZU5hbWU9e3sgc2luZ3VsYXI6ICdQcm9kdWN0JywgcGx1cmFsOiAnUHJvZHVjdHMnIH19XHJcbiAgICAgICAgICAgICAgICBpdGVtcz17ZGF0YS5ub2Rlc31cclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBtZWRpYSA9IChcclxuICAgICAgICAgICAgICAgICAgICA8VGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlcy5lZGdlc1swXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5pbWFnZXMuZWRnZXNbMF0ubm9kZS5vcmlnaW5hbFNyY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2VzLmVkZ2VzWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLmltYWdlcy5lZGdlc1swXS5ub2RlLmFsdFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBpdGVtLnZhcmlhbnRzLmVkZ2VzWzBdLm5vZGUucHJpY2U7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFJlc291cmNlTGlzdC5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIG1lZGlhPXttZWRpYX1cclxuICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlMYWJlbD17YFZpZXcgZGV0YWlscyBmb3IgJHtpdGVtLnRpdGxlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlLnNldCgnaXRlbScsIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3RvcmUuc2V0JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RUb1Byb2R1Y3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFN0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbSBmaWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3ByaWNlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5FeHBpcmVzIG9uIHt0d29XZWVrc0Zyb21Ob3d9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jlc291cmNlTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPC9RdWVyeT5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgIGV4cG9ydCBkZWZhdWx0IFJlc291cmNlTGlzdFdpdGhQcm9kdWN0cztcclxuIiwiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAncmVhY3QtYXBvbGxvJztcclxuaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIFBhZ2UsXHJcbiAgRGF0YVRhYmxlLFxyXG4gIFBhZ2luYXRpb24sXHJcbiAgQnV0dG9uXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zJztcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3QnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vc2VsZWN0ZHJvcCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuXHJcbmNvbnN0IEdFVF9PUkRFUlNfQllfSUQgPSBncWxgXHJcbnF1ZXJ5IHtcclxuICBvcmRlcnMoZmlyc3Q6IDUwKSB7XHJcbiAgICBlZGdlcyB7XHJcbiAgICAgIGN1cnNvclxyXG4gICAgICBub2RlIHtcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgZW1haWxcclxuICAgICAgICBjcmVhdGVkQXRcclxuICAgICAgICBmdWxmaWxsbWVudHN7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgdHJhY2tpbmdJbmZve1xyXG4gICAgICAgICAgICBjb21wYW55XHJcbiAgICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZXN0aW1hdGVkRGVsaXZlcnlBdFxyXG4gICAgICAgICAgZGVsaXZlcmVkQXRcclxuICAgICAgICAgIGRpc3BsYXlTdGF0dXNcclxuICAgICAgICAgIHN0YXR1c1xyXG4gICAgICAgIH1cclxuICAgICAgICBzaGlwcGluZ0xpbmV7XHJcbiAgICAgICAgICBjYXJyaWVySWRlbnRpZmllclxyXG4gICAgICAgIH1cclxuICAgICAgICBjdXN0b21lcntcclxuICAgICAgICAgIGZpcnN0TmFtZVxyXG4gICAgICAgICAgbGFzdE5hbWVcclxuICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59YDtcclxuXHJcbnZhciByZXRvdXJEdUdldCA9IFtdO1xyXG5cclxuLypsZXQgQXV0aFVzZXIgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgIHJldHVybiBnb29nbGUubG9naW4oZGF0YS51c2VybmFtZSwgZGF0YS5wYXNzd29yZCkudGhlbih0b2tlbiA9PiB7IHJldHVybiB0b2tlbiB9IClcclxuIH1cclxuIGxldCB1c2VyVG9rZW4gPSBhd2FpdCBBdXRoVXNlcihkYXRhKVxyXG4gY29uc29sZS5sb2codXNlclRva2VuKSovXHJcblxyXG4vKiBsZXQgY2FsbEdldCA9IGZ1bmN0aW9uKCl7XHJcbiAgIGNvbnNvbGUubG9nKFwiYXhpb3NcIikgXHJcbiB2YXIgcmV0b3VyRGVGaW47XHJcbiByZXRvdXJEdUdldCA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vXCIrS0VZX05HUk9LQkFDSytcIi5uZ3Jvay5pby9nZXRTdGF0ZU9yZGVyXCIsIHtoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nfX0pXHJcbiAudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgY29uc29sZS5sb2coXCJyZXN1bHQgZGFucyBsZSB0aGVuIGRhbnMgbGUgY2FsbFwiKVxyXG4gICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSlcclxuICAgcmV0b3VyRGVGaW4gPSByZXN1bHQuZGF0YVxyXG4gICByZXR1cm4gcmVzdWx0LmRhdGE7XHJcbiB9KVxyXG4gLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpXHJcbi8vIHJldG91ckR1R2V0ID0gYXhpb3MuZ2V0KFwiaHR0cHM6Ly9cIitLRVlfTkdST0tCQUNLK1wiLm5ncm9rLmlvL2dldFN0YXRlT3JkZXJcIiwge2hlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiAnYXBwbGljYXRpb24vanNvbid9fSkudmFsdWUuZGF0YVxyXG5jb25zb2xlLmxvZyhcInJlc3VsdCDDoCBsYSBmaW4gZHUgY2FsbFwiKVxyXG5jb25zb2xlLmxvZyhyZXRvdXJEZUZpbikgXHJcbnJldHVybiByZXRvdXJEZUZpblxyXG59Ki9cclxuXHJcbi8qYXN5bmMgZnVuY3Rpb24gY2FsbEdldCgpe1xyXG4gIGNvbnNvbGUubG9nKFwiYXhpb3NcIikgXHJcbiAgdmFyIHJldG91ckRlRmluO1xyXG4gIHJldG91ckR1R2V0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9cIitLRVlfTkdST0tCQUNLK1wiLm5ncm9rLmlvL2dldFN0YXRlT3JkZXJcIiwge2hlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiAnYXBwbGljYXRpb24vanNvbid9fSlcclxuICAudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgIGNvbnNvbGUubG9nKFwicmVzdWx0IGRhbnMgbGUgdGhlbiBkYW5zIGxlIGNhbGxcIilcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKVxyXG4gICAgcmV0b3VyRGVGaW4gPSByZXN1bHQuZGF0YVxyXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gIH0pXHJcbiAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpXHJcbiAvLyByZXRvdXJEdUdldCA9IGF4aW9zLmdldChcImh0dHBzOi8vXCIrS0VZX05HUk9LQkFDSytcIi5uZ3Jvay5pby9nZXRTdGF0ZU9yZGVyXCIsIHtoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nfX0pLnZhbHVlLmRhdGFcclxuIGNvbnNvbGUubG9nKFwicmVzdWx0IMOgIGxhIGZpbiBkdSBjYWxsXCIpXHJcbiBjb25zb2xlLmxvZyhyZXRvdXJEZUZpbikgXHJcbiByZXR1cm4gcmV0b3VyRGVGaW5cclxufSovXHJcblxyXG5cclxuZnVuY3Rpb24gY2FsbEdldCgpIHtcclxuICBjb25zb2xlLmxvZyhcImF4aW9zXCIpXHJcbiAgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9cIiArIEtFWV9OR1JPS0JBQ0sgKyBcIi5uZ3Jvay5pby9nZXRTdGF0ZU9yZGVyXCIsIHsgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiAnYXBwbGljYXRpb24vanNvbicgfSB9KVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInJycnRcIilcclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpXHJcbiAgICAgIHJldHVybiByZXN1bHQuZGF0YVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0Q29sKG1hdHJpeCwgY29sKSB7XHJcbiAgdmFyIGNvbHVtbiA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWF0cml4Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb2x1bW4ucHVzaChtYXRyaXhbaV1bY29sXSk7XHJcbiAgfVxyXG4gIHJldHVybiBjb2x1bW47XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBEYXRhVGFibGVFeGFtcGxlKGRhdGEpIHtcclxuXHJcbiAgZnVuY3Rpb24gY2FsbEdldFN0YXRlT3JkZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImRhbnMgZ2V0T3JkZXJzIGF4aW9zIGNhbGwgZ2V0IHN0YXRlIG9yZGVyXCIpXHJcbiAgICBjb25zb2xlLmxvZyhcImh0dHBzOi8vXCIgKyBLRVlfTkdST0tCQUNLICsgXCIubmdyb2suaW8vZ2V0U3RhdGVPcmRlclwiLCB7IGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nIH0gfSlcclxuICAgIHJldHVybiBheGlvcy5nZXQoXCJodHRwczovL1wiICsgS0VZX05HUk9LQkFDSyArIFwiLm5ncm9rLmlvL2dldFN0YXRlT3JkZXJcIiwgeyBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBpdGVtcyA9IGRhdGEub3JkZXJzLmVkZ2VzO1xyXG4gIGNvbnNvbGUubG9nKFwiYWxwaGEgcGhhc2VcIilcclxuICBjYWxsR2V0KClcclxuICAvL2NvbnNvbGUubG9nKGNhbGxHZXQoKSlcclxuICAvL2NvbnNvbGUubG9nKCgpID0+IGNhbGxHZXQoKSlcclxuXHJcblxyXG4gIGZ1bmN0aW9uIGl0ZW1zVG9Ob2RlKHsgY3Vyc29yLCBub2RlIH0pIHtcclxuICAgIHJldHVybiB7IG5vZGUgfS5ub2RlXHJcbiAgfTtcclxuXHJcblxyXG4gIGZ1bmN0aW9uIG5vZGVUb1Jvd3Mobm9kZSwgYnVpbGRpbmdSYXcpIHtcclxuICAgIC8qY29uc29sZS5sb2coXCJub2RlXCIpXHJcbiAgICBjb25zb2xlLmxvZyhub2RlKVxyXG4gICAgY29uc29sZS5sb2coJ2RhbnMgbGEgbGFtYmRhIHByb2ZvbmRlJykqL1xyXG4gICAgT2JqZWN0LmVudHJpZXMobm9kZSkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuXHJcbiAgICAgIC8qY29uc29sZS5sb2coZWxlbWVudFswXSAhPT0gJ19fdHlwZW5hbWUnKVxyXG4gICAgICBjb25zb2xlLmxvZyhlbGVtZW50WzBdICE9ICdfX3R5cGVuYW1lJylcclxuICAgICAgY29uc29sZS5sb2coZWxlbWVudFswXSkqL1xyXG5cclxuICAgICAgaWYgKGVsZW1lbnRbMF0gIT09ICdfX3R5cGVuYW1lJykge1xyXG4gICAgICAgIC8qIGNvbnNvbGUubG9nKGJ1aWxkaW5nUmF3KVxyXG4gICAgICAgICBjb25zb2xlLmxvZyhbZWxlbWVudFsxXV0pXHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGJ1aWxkaW5nUmF3LmNvbmNhdChbZWxlbWVudFsxXV0pKVxyXG4gICAgICAgICBjb25zb2xlLmxvZygnX19fX19fX19fX19fJykqL1xyXG4gICAgICAgIGJ1aWxkaW5nUmF3ID0gKHR5cGVvZiBlbGVtZW50WzFdID09PSAnb2JqZWN0JyAmJiBlbGVtZW50WzFdICE9PSBudWxsKSA/IG5vZGVUb1Jvd3MoZWxlbWVudFsxXSwgYnVpbGRpbmdSYXcpIDogYnVpbGRpbmdSYXcuY29uY2F0KFtlbGVtZW50WzFdXSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGJ1aWxkaW5nUmF3O1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIC8qIGNvbnNvbGUubG9nKCdpdGVtcy5tYXAoaXRlbXNUb05vZGUpJylcclxuICAgY29uc29sZS5sb2coaXRlbXMubWFwKGl0ZW1zVG9Ob2RlKSkqL1xyXG4gIHZhciByb3dzID0gW107XHJcbiAgaXRlbXMubWFwKGl0ZW1zVG9Ob2RlKS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICAvKiBjb25zb2xlLmxvZygna2V5LHZhbHVlJylcclxuICAgICBjb25zb2xlLmxvZyhrZXkpXHJcbiAgICAgY29uc29sZS5sb2codmFsdWUpKi9cclxuICAgIHJvd3Nba2V5XSA9IG5vZGVUb1Jvd3ModmFsdWUsIFtdKVxyXG4gIH0pXHJcblxyXG4gIGZ1bmN0aW9uIGluaXRSb3dzKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKCdJbml0IHJvd3MnKVxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHJvd3MuZm9yRWFjaChmdW5jdGlvbiAocGFydCwgaW5kZXgpIHtcclxuXHJcbiAgICAgLyogdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICBzdG9yZS5zZXQoJ2V0YXQnK3RoaXMucHJvcHMuaWQsIHsgaWQgOiB0aGlzLnByb3BzLmlkLCBjaG9peCA6IGV2ZW50LnRhcmdldC52YWx1ZX0pXHJcbiAgICAgICB2YXIgb3JkZXJTdGF0ZSA9IChldmVudC50YXJnZXQudmFsdWUgPT0gXCJTZWxlY3TigKZcIikgPyBudWxsIDogZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgY29uc29sZS5sb2cob3JkZXJTdGF0ZSkqL1xyXG5cclxuICAgICAgIC8vaWwgZmF1dCBzZXR0ZXIgdmFsdWVkZURiU3RhdGUgaXNzdWUgZHUgc3RhdGUgcGx1dG90IHF1ZSBkZSBjcsOpZXIgdW5lIG5vdXZlbGxlIHByb3BcclxuICAgICAgcm93c1tpbmRleF0gPSBbPFNlbGVjdCBpZD17aW5kZXh9IHZhbHVlRGVEQj17IGRhdGFbaW5kZXhdLm9yZGVyX3N0YXRlID09IG51bGwgPyA5OTQ5IDogZGF0YVtpbmRleF0ub3JkZXJfc3RhdGV9PjwvU2VsZWN0Pl0uY29uY2F0KHBhcnQpO1xyXG4gICAgICAgIC8vLnNldFN0YXRlKHt2YWx1ZSA6IGRhdGFbaW5kZXhdLm9yZGVyX3N0YXRlfSldXHJcbiAgICB9LCByb3dzKTtcclxuICBcclxuICAgIHZhciBjb2xvbmVEZXNFdGF0c0FTZXR0ZXIgPSBnZXRDb2wocm93cywgMClcclxuICAgIGNvbnNvbGUubG9nKFwiY29sb25uZSBkZXMgc2VsZWN0XCIpXHJcbiAgICBjb25zb2xlLmxvZyhjb2xvbmVEZXNFdGF0c0FTZXR0ZXIpXHJcbiAgICB2YXIgY29sb25lRGVzTmFtZXNJZHMgPSBnZXRDb2wocm93cywgMSlcclxuICBcclxuICB9XHJcblxyXG4gIHZhciByb3dzRnJvbURCID0gW107XHJcblxyXG4gIGNhbGxHZXRTdGF0ZU9yZGVyKCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNhbGwgZ2V0IHN0YXRlIG9yZGVyIGNhbGxiYWNrXCIpXHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSlcclxuICAgIGluaXRSb3dzKHJlc3VsdC5kYXRhKVxyXG4gIH0pXHJcblxyXG4gIC8qKiBTQU1JQSBERUJVVFxyXG4gIHJvd3MuZm9yRWFjaChmdW5jdGlvbiAocGFydCwgaW5kZXgpIHtcclxuICAgIC8vYXhpb3MuZ2V0RXRhdCBkdSBzZWxlY3Qgw6Agc2V0dGVyIChlbiBmb25jdGlvbiBkZSBsYSBwYWdlIGV0IGR1IHRyaSAobGUgdHJpIGRvaXQgZXRyZSBnbG9iYWwgZGFucyB1biBwcmVtaWVyIHRlbXBzIGV0IHB1aXMgb24gcG91cnJhIGZhaXJlIHVuIHRyaSBzdXIgbGVzIHNldWxzIMOpbMOpbWVudHMgZGUgbGEgcGFnZSBhdXNzaSkpXHJcbiAgICByb3dzW2luZGV4XSA9IFs8U2VsZWN0IGlkPXtpbmRleH0+PC9TZWxlY3Q+XS5jb25jYXQocGFydCk7XHJcbiAgfSwgcm93cyk7XHJcblxyXG4gIGNvbnNvbGUubG9nKCdyb3dzJyk7XHJcbiAgY29uc29sZS5sb2cocm93cyk7XHJcblxyXG4gIC8vb24gbmUgdGllbnQgcGFzIGVuY29yZSBjb21wdGUgZGUgbGEgcGFnaW5hdGlvblxyXG4gIHZhciBjb2xvbmVEZXNFdGF0c0FTZXR0ZXIgPSBnZXRDb2wocm93cywgMClcclxuICBjb25zb2xlLmxvZygndmlkZT8nKVxyXG4gIGNvbnNvbGUubG9nKGNvbG9uZURlc0V0YXRzQVNldHRlcilcclxuICB2YXIgY29sb25lRGVzTmFtZXNJZHMgPSBnZXRDb2wocm93cywgMSlcclxuXHJcbiAgdmFyIHJvd3NGcm9tREIgPSBbXTtcclxuICBjb25zb2xlLmxvZyhyb3dzRnJvbURCKVxyXG4gIGNvbnNvbGUubG9nKFwiYmV0YSBwaGFzZVwiKVxyXG4gIFNBTUlBIEZJTiAqKi9cclxuXHJcbiAgLypsZXQgQXV0aFVzZXIgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICByZXR1cm4gZ29vZ2xlLmxvZ2luKGRhdGEudXNlcm5hbWUsIGRhdGEucGFzc3dvcmQpLnRoZW4odG9rZW4gPT4geyByZXR1cm4gdG9rZW4gfSApXHJcbiAgfVxyXG4gIGxldCB1c2VyVG9rZW4gPSBhd2FpdCBBdXRoVXNlcihkYXRhKVxyXG4gIGNvbnNvbGUubG9nKHVzZXJUb2tlbikqL1xyXG5cclxuXHJcbiAgY29uc29sZS5sb2coY2FsbEdldCgpKVxyXG4gIHZhciByZXRvdXJEdUNhbGxHZXQ7XHJcbiAgLypjb25zb2xlLmxvZyhjYWxsR2V0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgIGNvbnNvbGUubG9nKFwibGUgcmVzdWx0IGRhbnMgbGUgdGhlblwiKVxyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KSAvLyBcIlNvbWUgVXNlciB0b2tlblwiXHJcbiAgICByZXRvdXJEdUNhbGxHZXQgPSByZXN1bHQ7XHJcbiAgICBjb25zb2xlLmxvZygncmVzb2xldmVlZScpXHJcbiAgICAvL3Jlc29sdmUocmVzdWx0KVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG4gfSkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcclxuICBjb25zb2xlLmxvZyhcImxlIHJlc3VsdCBkYW5zIGxlIHRoZW5cIilcclxuICBjb25zb2xlLmxvZyhyZXN1bHQpIC8vIFwiU29tZSBVc2VyIHRva2VuXCJcclxuICByZXRvdXJEdUNhbGxHZXQgPSByZXN1bHQ7XHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59KSkqL1xyXG4gIGNvbnNvbGUubG9nKFwicmV0b3VyRHVDYWxsR2V0XCIpXHJcbiAgY29uc29sZS5sb2cocmV0b3VyRHVDYWxsR2V0KVxyXG4gIC8qcmV0b3VyRHVDYWxsR2V0LmZvckVhY2goKHZhbHVlLCBrZXkpPT4ge1xyXG4gICAgY29uc29sZS5sb2codmFsdWUpXHJcblxyXG4gICAgcm93c0Zyb21EQltrZXldID0gbm9kZVRvUm93cyh2YWx1ZSxbXSkgXHJcbiAgIH0pKi9cclxuICBjb25zb2xlLmxvZyhcInJvd3NGcm9tREJcIilcclxuICBjb25zb2xlLmxvZyhyb3dzRnJvbURCKVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlIGZ1bGxXaWR0aD1cInRydWVcIj5cclxuICAgICAgPENhcmQ+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjYWxsR2V0KCl9PkV4YW1wbGUgYnV0dG9uPC9CdXR0b24+XHJcbiAgICAgICAgey8vcmV0b3VyRHVHZXRcclxuICAgICAgICB9XHJcbiAgICAgICAgPERhdGFUYWJsZVxyXG4gICAgICAgICAgY29sdW1uQ29udGVudFR5cGVzPXtbXHJcbiAgICAgICAgICAgICd0ZXh0JyxcclxuICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgICAgICd0ZXh0JyxcclxuICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgICAgICd0ZXh0JyxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgICBoZWFkaW5ncz17W1xyXG4gICAgICAgICAgICAnaWQnLFxyXG4gICAgICAgICAgICAnbmFtZScsXHJcbiAgICAgICAgICAgICdlbWFpbCcsXHJcbiAgICAgICAgICAgICdqY3AnLFxyXG4gICAgICAgICAgICAnamNwJyxcclxuICAgICAgICAgICAgJ2pjcCcsXHJcbiAgICAgICAgICAgICdqY3AnLFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICAgIC8vaWwgZmF1dCByw6ljdXDDqXJlciBsZXMgb3JkZXIgc3RhdGVzIGRlIGxhIGRiIGV0IHBldXQgZXRyZSBsZXMgbWV0dHJlIGVuIGNhY2hlIGNhIHNlcmFpdCBjb29sXHJcbiAgICAgICAgICByb3dzPXtyb3dzfVxyXG4gICAgICAgIC8vJzxpbWcgc3JjPVwiJytkYXRhKydcIj4nXHJcblxyXG4gICAgICAgIC8qc291cmNlPXtcclxuICAgICAgICAgIGl0ZW0ubm9kZS5saW5lSXRlbXMuZWRnZXNbMF1cclxuICAgICAgICAgICAgPyBpdGVtLm5vZGUubGluZUl0ZW1zLmVkZ2VzWzBdLm5vZGUuaW1hZ2Uub3JpZ2luYWxTcmNcclxuICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgIH0qL1xyXG4gICAgICAgIC8vdG90YWxzPXtbJycsICcnLCAnJywgMjU1LCAnJDE1NSw4MzAuMDAnXX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L1BhZ2U+XHJcblxyXG5cclxuICApO1xyXG59XHJcblxyXG5jbGFzcyBSZXNvdXJjZUxpc3RXaXRoT3JkZXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFF1ZXJ5IHF1ZXJ5PXtHRVRfT1JERVJTX0JZX0lEfT5cclxuICAgICAgICB7KHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJEQVRBXCIpXHJcbiAgICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZ+KApjwvZGl2PjtcclxuICAgICAgICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLm9yZGVycy5lZGdlcyk7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEub3JkZXJzLmVkZ2VzWzBdLm5vZGUubGluZUl0ZW1zLmVkZ2VzWzBdLm5vZGUuaW1hZ2Uub3JpZ2luYWxTcmMpO1xyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIERhdGFUYWJsZUV4YW1wbGUoZGF0YSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPC9RdWVyeT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vKjxDYXJkPlxyXG4gIDxwPkxlcyA1MCBkZXJuacOocmVzIGNvbW1hbmRlczwvcD5cclxuICA8UmVzb3VyY2VMaXN0XHJcbiAgICBzaG93SGVhZGVyXHJcbiAgICByZXNvdXJjZU5hbWU9e3sgc2luZ3VsYXI6ICdPcmRlcicsIHBsdXJhbDogJ09yZGVycycgfX1cclxuICAgIGl0ZW1zPXtkYXRhLm9yZGVycy5lZGdlc31cclxuICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4ge1xyXG4gICAgICBjb25zdCBvcmRlck5hbWUgPSBpdGVtLm5vZGUubmFtZVxyXG4gICAgICBjb25zdCBtZWRpYSA9IChcclxuICAgICAgICA8VGh1bWJuYWlsXHJcbiAgICAgICAgICBzb3VyY2U9e1xyXG4gICAgICAgICAgICBpdGVtLm5vZGUubGluZUl0ZW1zLmVkZ2VzWzBdXHJcbiAgICAgICAgICAgICAgPyBpdGVtLm5vZGUubGluZUl0ZW1zLmVkZ2VzWzBdLm5vZGUuaW1hZ2Uub3JpZ2luYWxTcmNcclxuICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgICAgY29uc3QgcHJpY2UgPSBpdGVtLm5vZGUubmV0UGF5bWVudFNldC5zaG9wTW9uZXkuYW1vdW50O1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxSZXNvdXJjZUxpc3QuSXRlbVxyXG4gICAgICAgIG1lZGlhID0ge29yZGVyTmFtZX1cclxuICAgICAgICAgLy8gaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICBtZWRpYT17bWVkaWF9XHJcbiAgICAgICAgICAvL2FjY2Vzc2liaWxpdHlMYWJlbD17YFZpZXcgZGV0YWlscyBmb3IgJHtpdGVtLnRpdGxlfWB9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vc3RvcmUuc2V0KCdpdGVtJywgaXRlbSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdG9yZS5zZXQnKVxyXG4gICAgICAgICAgICAvL3JlZGlyZWN0VG9Qcm9kdWN0KCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTdGFjaz5cclxuICAgICAgICAgIDxTdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgIDxwPntvcmRlck5hbWV9PC9wPlxyXG4gICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgIDxTdGFjay5JdGVtIGZpbGw+XHJcbiAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLm5vZGUuaWR9XHJcbiAgICAgICAgICAgICAgICA8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgIDxTdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgIDxwPiR7cHJpY2V9PC9wPlxyXG4gICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgIDxTdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgIDxwPkV4cGlyZXMgb24gUiA8L3A+XHJcbiAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgPC9SZXNvdXJjZUxpc3QuSXRlbT5cclxuICAgICAgKTtcclxuICAgIH19XHJcbiAgLz5cclxuPC9DYXJkPlxyXG4pO1xyXG59fVxyXG48L1F1ZXJ5PlxyXG4pO1xyXG59XHJcbn0qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzb3VyY2VMaXN0V2l0aE9yZGVyczsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnc3RvcmUtanMnO1xyXG5cclxuLypjb25zdCBkb3RlbnYgPSByZXF1aXJlKCdkb3RlbnYnKTtcclxuY29uc3QgbmV4dCA9IHJlcXVpcmUoJ25leHQnKTtcclxuZG90ZW52LmNvbmZpZygpO1xyXG5jb25zdCBkZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nO1xyXG5jb25zdCBhcHAgPSBuZXh0KHsgZGV2IH0pO1xyXG5jb25zdCB7IFJFQUNUX0FQUF9OR1JPS0JBQ0sgfSA9IHByb2Nlc3MuZW52O1xyXG5jb25zdCBoYW5kbGUgPSBhcHAuZ2V0UmVxdWVzdEhhbmRsZXIoKTtcclxuXHJcbmNvbnNvbGUubG9nKHByb2Nlc3MuZW52KVxyXG5hcHAucHJlcGFyZSgpLnRoZW4oKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiaW4gYXBwIHByZXBhcmVcIilcclxuICBjb25zb2xlLmxvZyhSRUFDVF9BUFBfTkdST0tCQUNLKVxyXG59KTsqL1xyXG5cclxuXHJcbi8vY29uc3Qge1JFQUNUX0FQUF9uZ3Jva0JhY2t9ID0gcHJvY2Vzcy5lbnY7XHJcbi8vY29uc3Qgbmdyb2tCYWNrID0gUkVBQ1RfQVBQX25ncm9rQmFjaztcclxuY29uc29sZS5sb2coJ2NBY0FBQUFBQUFBQUFBQUFBQUFBQUFBQScpXHJcbmNvbnNvbGUubG9nKEtFWV9OR1JPS0JBQ0spXHJcblxyXG4vL2NsYXNzIFNlbGVjdCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xyXG5jbGFzcyBTZWxlY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZS52YWx1ZURlRGJTdGF0ZSA9IHByb3BzLnZhbHVlRGVEQlxyXG4gIH1cclxuICAgIHN0YXRlID0ge1xyXG4gICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ1NlbGVjdOKApicsXHJcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICdBJyxcclxuICAgICAgICAgIHZhbHVlOiA0NDQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAnQicsXHJcbiAgICAgICAgICB2YWx1ZTogMzMzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ0MnLFxyXG4gICAgICAgICAgdmFsdWU6IDIyMixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICB2YWx1ZTogJz8nLFxyXG4gICAgICB2YWx1ZURlRGJTdGF0ZSA6ICcnLFxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgXHJcbiAgXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYXplcnR5dWlvcFwiKVxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzKVxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZhbHVlKVxyXG4gICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXHJcblxyXG5cclxuLy9MNEVSUkVVUiBFU1QgSUNJLCBpbCBmYXV0IGFycmV0ZXIgZCd1dGlsaXNlciBWYWx1ZURlRGIgZGUgcHJvcHMgbWFpcyB1dGlsaXNlciBWYWx1ZURlREJTdGF0ZSBkdSBTdGF0ZSA6KVxyXG4gICAgIC8qIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnc3RhdGUnLCB7XHJcbiAgICAgICAgdmFsdWVEZURiU3RhdGU6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgICB3cml0YWJsZTogZmFsc2VcclxuICAgICAgfSk7Ki9cclxuXHJcbiAgICAgIC8vZXhlbXBsZSBzdXIgbGVxdWVsIHMnYXBwdXllciBwb3VyIHNldHRlciBsZSBzdGF0ZVxyXG4gICAgLyogIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcclxuICAgICAgICBsZXQgamFzcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgcHJldlN0YXRlLmphc3Blcik7ICAvLyBjcmVhdGluZyBjb3B5IG9mIHN0YXRlIHZhcmlhYmxlIGphc3BlclxyXG4gICAgICAgIGphc3Blci5uYW1lID0gJ3NvbWVvdGhlcm5hbWUnOyAgICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgbmFtZSBwcm9wZXJ0eSwgYXNzaWduIGEgbmV3IHZhbHVlICAgICAgICAgICAgICAgICBcclxuICAgICAgICByZXR1cm4geyBqYXNwZXIgfTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gbmV3IG9iamVjdCBqYXNwZXIgb2JqZWN0XHJcbiAgICAgIH0pKi9cclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudmFsdWVEZURiU3RhdGUpXHJcbiAgICAgIHRoaXMuc3RhdGUudmFsdWVEZURiU3RhdGUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgIHRoaXMuc3RhdGUudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudmFsdWVEZURiU3RhdGUpXHJcblxyXG4gICAgICAvL3RoaXMucHJvcHMudmFsdWVEZURCID0gZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgIHN0b3JlLnNldCgnZXRhdCcrdGhpcy5wcm9wcy5pZCwgeyBpZCA6IHRoaXMucHJvcHMuaWQsIGNob2l4IDogZXZlbnQudGFyZ2V0LnZhbHVlfSlcclxuXHJcbiAgICAgIHZhciBvcmRlclN0YXRlID0gKGV2ZW50LnRhcmdldC52YWx1ZSA9PSBcIlNlbGVjdOKAplwiKSA/IG51bGwgOiBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKG9yZGVyU3RhdGUpXHJcblxyXG5cclxuICAgICAgLy9jb25zb2xlLmxvZyhSRUFDVF9BUFBfbmdyb2tCYWNrKVxyXG5cclxuICAgICAgLy9sJ2lkIHF1J29uIGVudm9pZSBlbiBwYXJhbXMgZXN0IGwnaWQgZHUgc2VsZWN0IGRhbnMgbGEgcGFnZSBjb25jZXJuw6llLiBpbCBmYXVkcmEgbGUgZmFpcmUgY29ycmVzcG9uZHJlIGF1IHZyYWkgSUQgZW4gZm9uY3Rpb24gZGUgbGEgcGFnaW5hdGlvbiBldCBkdSB0cmkgZGUgbGEgZGF0YXRhYmxlXHJcbiAgICAgIGF4aW9zLnB1dChcclxuICAgICAgICAvL1wiaHR0cHM6Ly81NDdmNDE3Y2MzMjkubmdyb2suaW8vaGFuZGxlXCIsIFxyXG4gICAgICAgIFwiaHR0cHM6Ly9cIitLRVlfTkdST0tCQUNLK1wiLm5ncm9rLmlvL2hhbmRsZVwiLCBcclxuICAgICAgICB7XCJvcmRlcl9zdGF0ZVwiIDogb3JkZXJTdGF0ZX0sIFxyXG4gICAgICAgIHtwYXJhbXM6IHsgaWQ6dGhpcy5wcm9wcy5pZCsxIH0sIGhlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiAnYXBwbGljYXRpb24vanNvbid9fVxyXG4gICAgKVxyXG4gICAgXHJcblxyXG5cclxuICAgICAgLy9heGlvcy5wdXQoXCJodHRwczovL1wiK1JFQUNUX0FQUF9uZ3Jva0JhY2srXCIubmdyb2suaW8vaGFuZGxlXCIsIHt9KVxyXG4gICAgIC8vIFwicHJveHlcIjogXCJodHRwOi8vJHtSRUFDVF9BUFBfbmdyb2tCYWNrfS5uZ3Jvay5pb1wiLFxyXG5cclxuXHJcbiAgICAgIC8vYXhpb3MucHV0KFwibG9jYWxob3N0OjUwMDAvaGFuZGxlXCIsIHt9KVxyXG5cclxuICAgICAgLyoudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3l5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5JylcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgfSkqL1xyXG5cclxuXHJcbiAgICAgIC8qIHZhciBzcWwgPSBcIlVQREFURSBvcmRlcnMgU0VUIG9yZGVyX3N0YXRlID0gNiBXSEVSRSBvcmRlcl9pZD0xXCI7XHJcbiAgICAgICAgY29uLnF1ZXJ5KHNxbCwgZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7XHJcbiAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuYWZmZWN0ZWRSb3dzICsgXCIgcmVjb3JkKHMpIHVwZGF0ZWRcIik7XHJcbiAgICAgICAgfSk7Ki9cclxuICAgIH07XHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdyZW5kZXInKVxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxyXG4gICAgICBjb25zb2xlLmxvZygndmFsdWUnKVxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnZhbHVlRGVEQilcclxuXHJcblxyXG5cclxuXHJcbiAgICAgIHZhciB7IG9wdGlvbnMsIHZhbHVlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICB2YXIgY3VycmVudElkO1xyXG4gICAgICB2YXIgZXRhdEZyb21TdG9yZTtcclxuICAgICAgLy9pY2ksIGlsIGZhdXQgY2hvaXNpciBzaSB2YWx1ZSBlc3QgY2VsdWkgZGUgbGEgYmRkICjDoCBsJ2luaXRpYWxpc2F0aW9uKSwgb3UgY2VsdWkgcXUnb24gdmllbiBkZSBjaG9pc2lyLCggYXByZXMgdW4gcHV0KVxyXG4gICAgICB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWVEZURCID09IG51bGwgPyA5OTQ5IDogdGhpcy5wcm9wcy52YWx1ZURlREI7XHJcbiAgICAgIHZhciB2YWw7XHJcblxyXG4gICAgICBjdXJyZW50SWQgPSB0aGlzLnByb3BzLmlkLFxyXG4gICAgICBldGF0RnJvbVN0b3JlID0gc3RvcmUuZ2V0KCdldGF0JytjdXJyZW50SWQpLFxyXG4gICAgICB2YWwgPSB2YWx1ZTtcclxuXHJcbiAgICAgIC8vcG91ciBzZXR0ZXIgbGEgbGlnbmUgMSAocGFzIGxhIDApIMOgIHVuZGVmaW5lZFxyXG4gICAgICAvL2V0YXRGcm9tU3RvcmUuaWQgPT0gMSA/IGV0YXRGcm9tU3RvcmUgPSB1bmRlZmluZWQgOiAnJyxcclxuXHJcbiAgICAgIGV0YXRGcm9tU3RvcmUgPT0gdW5kZWZpbmVkID8gXHJcbiAgICAgIHN0b3JlLnNldCgnZXRhdCcrY3VycmVudElkLHsgaWQgOiBjdXJyZW50SWQsIGNob2l4IDogdmFsfSkgOiBcclxuICAgICAgdmFsPWV0YXRGcm9tU3RvcmUuY2hvaXggPT0gbnVsbCA/IDk5NDkgOiBldGF0RnJvbVN0b3JlLmNob2l4O1xyXG4gICAgICAvL2NvbnNvbGUubG9nKCdldGF0JyArIGN1cnJlbnRJZCksXHJcbiAgICAgIC8vY29uc29sZS5sb2coZXRhdEZyb21TdG9yZSlcclxuICAgICAgLy9jb25zb2xlLmxvZyhldGF0RnJvbVN0b3JlID09IHVuZGVmaW5lZCA/ICdwYXMgZFxcJ2lkJyA6IGV0YXRGcm9tU3RvcmUuaWQpLFxyXG5cclxuXHJcblxyXG4gICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzJylcclxuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzKVxyXG5cclxuICBcclxuXHJcbiAgICAgLy8gPHNlbGVjdCBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt2YWx1ZX0+XHJcblxyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3ZhbH0+XHJcbiAgICAgICAgICAgIHtvcHRpb25zLm1hcChpdGVtID0+IChcclxuXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiBcclxuICAgICAgICAgICAgICAvKmNvbnNvbGUubG9nKCdldGF0JytjdXJyZW50SWQpLFxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV0YXRGcm9tU3RvcmUpLFxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV0YXRGcm9tU3RvcmUgPT0gdW5kZWZpbmVkKSxcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldGF0RnJvbVN0b3JlID09IHVuZGVmaW5lZCA/ICdwYXMgZFxcJ2lkJyA6IGV0YXRGcm9tU3RvcmUuaWQpLFxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV0YXRGcm9tU3RvcmUgPT0gdW5kZWZpbmVkID8gJ3BhcyBkZSBjaG9peCBjaG9pc2knIDogZXRhdEZyb21TdG9yZS5jaG9peCksXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJvcHRpb25cIiksXHJcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhpdGVtKSxcclxuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHt2YWx1ZX0pLFxyXG4gICAgICAgICAgICAgIC8qY29uc29sZS5sb2codGhpcyksKi9cclxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aXRlbS52YWx1ZX0gdmFsdWU9e2l0ZW0udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDxoMT5GYXZvcml0ZSBsZXR0ZXI6IHt2YWx1ZX08L2gxPlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGV4cG9ydCBkZWZhdWx0IFNlbGVjdDsiLCJpbXBvcnQgeyBFbXB0eVN0YXRlLCBMYXlvdXQsIFBhZ2UgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IHsgUmVzb3VyY2VQaWNrZXIsIFRpdGxlQmFyIH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnc3RvcmUtanMnO1xyXG5pbXBvcnQgUmVzb3VyY2VMaXN0V2l0aFByb2R1Y3RzIGZyb20gJy4uL2NvbXBvbmVudHMvUmVzb3VyY2VMaXN0JztcclxuaW1wb3J0IFJlc291cmNlTGlzdFdpdGhPcmRlcnMgZnJvbSAnLi4vY29tcG9uZW50cy9nZXRPcmRlcnMnO1xyXG5cclxuXHJcblxyXG4vL2NvbnN0IGltZyA9ICdodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDc1Ny85OTU1L2ZpbGVzL2VtcHR5LXN0YXRlLnN2Zyc7XHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7IG9wZW46IGZhbHNlIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgZW1wdHlTdGF0ZSA9ICFzdG9yZS5nZXQoJ2lkcycpO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8UmVzb3VyY2VMaXN0V2l0aE9yZGVycyAvPlxyXG4gICAgKTt9XHJcbiAgICAvKnJldHVybiAoXHJcbiAgICAgIDxQYWdlPlxyXG4gICAgICAgIDxUaXRsZUJhclxyXG4gICAgICAgICAgdGl0bGU9XCJTYW1wbGUgQXBwXCJcclxuICAgICAgICAgIHByaW1hcnlBY3Rpb249e3tcclxuICAgICAgICAgICAgY29udGVudDogJ1NlbGVjdCBwcm9kdWN0cycsXHJcbiAgICAgICAgICAgIC8vY29tbWVudCBmYWlyZSAyIGxhbWJkYXMgw6AgbGEgc3VpdGUgcG91ciBhdm9pciBhdXNzaSBsZSBjb25zb2xlIGxvZz9cclxuICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pLFxyXG4gICAgICAgICAgICAvL29uQWN0aW9uOiAoKSA9PiBjb25zb2xlLmxvZygnY2xpY2tlZGQnKSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8UmVzb3VyY2VQaWNrZXJcclxuICAgICAgICAgIHJlc291cmNlVHlwZT1cIlByb2R1Y3RcIlxyXG4gICAgICAgICAgc2hvd1ZhcmlhbnRzPXtmYWxzZX1cclxuICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cclxuICAgICAgICAgIG9uU2VsZWN0aW9uPXsocmVzb3VyY2VzKSA9PiB0aGlzLmhhbmRsZVNlbGVjdGlvbihyZXNvdXJjZXMpfVxyXG4gICAgICAgICAgb25DYW5jZWw9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KX1cclxuICAgICAgICAvPlxyXG4gICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPEVtcHR5U3RhdGVcclxuICAgICAgICAgICAgICBoZWFkaW5nPVwiU2VsZWN0IHByb2R1Y3RzIHRvIHN0YXJ0XCJcclxuICAgICAgICAgICAgICBhY3Rpb249e3tcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdTZWxlY3QgcHJvZHVjdHMnLFxyXG4gICAgICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLy9pbWFnZT17aW1nfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHA+U2VsZWN0IHByb2R1Y3RzIGFuZCBjaGFuZ2UgdGhlaXIgcHJpY2UgdGVtcG9yYXJpbHk8L3A+XHJcbiAgICAgICAgICAgIDwvRW1wdHlTdGF0ZT5cclxuICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAge2VtcHR5U3RhdGUgPyAoXHJcbiAgICAgICAgICAgIDxSZXNvdXJjZUxpc3RXaXRoT3JkZXJzIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIC8vPFJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyAvPlxyXG4gICAgICAgICAgICA8UmVzb3VyY2VMaXN0V2l0aE9yZGVycyAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvUGFnZT5cclxuICAgICk7XHJcbiAgfVxyXG4gIGhhbmRsZVNlbGVjdGlvbiA9IChyZXNvdXJjZXMpID0+IHtcclxuICAgIGNvbnN0IGlkc0Zyb21SZXNvdXJjZXMgPSByZXNvdXJjZXMuc2VsZWN0aW9uLm1hcCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSlcclxuICAgIGNvbnNvbGUubG9nKHJlc291cmNlcylcclxuICAgIGNvbnNvbGUubG9nKGlkc0Zyb21SZXNvdXJjZXMpXHJcbiAgICBjb25zb2xlLmxvZyhyZXNvdXJjZXMuaWQpXHJcbiAgICBzdG9yZS5zZXQoJ2lkcycsIGlkc0Zyb21SZXNvdXJjZXMpO1xyXG4gIH07Ki9cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hcG9sbG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0b3JlLWpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=