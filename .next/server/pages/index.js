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



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

class Index extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      open: false
    });

    _defineProperty(this, "handleSelection", resources => {
      const idsFromResources = resources.selection.map(product => product.id);
      this.setState({
        open: false
      });
      console.log(resources);
      console.log(idsFromResources);
      console.log(resources.id);
      store_js__WEBPACK_IMPORTED_MODULE_5___default.a.set('ids', idsFromResources);
    });
  }

  render() {
    const emptyState = !store_js__WEBPACK_IMPORTED_MODULE_5___default.a.get('ids');
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__["TitleBar"], {
        title: "Sample App",
        primaryAction: {
          content: 'Select products',
          //comment faire 2 lambdas à la suite pour avoir aussi le console log?
          onAction: () => this.setState({
            open: true
          }) //onAction: () => console.log('clickedd'),

        }
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__["ResourcePicker"], {
        resourceType: "Product",
        showVariants: false,
        open: this.state.open,
        onSelection: resources => this.handleSelection(resources),
        onCancel: () => this.setState({
          open: false
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["EmptyState"], {
          heading: "Select products to start",
          action: {
            content: 'Select products',
            onAction: () => this.setState({
              open: true
            })
          },
          image: img,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            children: "Select products and change their price temporarily"
          })
        })
      }), emptyState ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], {}) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_ResourceList__WEBPACK_IMPORTED_MODULE_6__["default"], {})]
    });
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXNvdXJjZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L3BvbGFyaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYXBvbGxvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdG9yZS1qc1wiIl0sIm5hbWVzIjpbIkdFVF9QUk9EVUNUU19CWV9JRCIsImdxbCIsIlJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVyIiwiYXBwIiwiY29udGV4dCIsInJlZGlyZWN0VG9Qcm9kdWN0IiwicmVkaXJlY3QiLCJSZWRpcmVjdCIsImNyZWF0ZSIsImRpc3BhdGNoIiwiQWN0aW9uIiwiQVBQIiwidHdvV2Vla3NGcm9tTm93IiwiRGF0ZSIsIm5vdyIsInRvRGF0ZVN0cmluZyIsImlkcyIsInN0b3JlIiwiZ2V0IiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJub2RlcyIsIml0ZW0iLCJtZWRpYSIsImltYWdlcyIsImVkZ2VzIiwibm9kZSIsIm9yaWdpbmFsU3JjIiwiYWx0VGV4dCIsInByaWNlIiwidmFyaWFudHMiLCJpZCIsInRpdGxlIiwic2V0IiwiQ29udGV4dCIsImltZyIsIkluZGV4Iiwib3BlbiIsInJlc291cmNlcyIsImlkc0Zyb21SZXNvdXJjZXMiLCJzZWxlY3Rpb24iLCJtYXAiLCJwcm9kdWN0Iiwic2V0U3RhdGUiLCJlbXB0eVN0YXRlIiwiY29udGVudCIsIm9uQWN0aW9uIiwic3RhdGUiLCJoYW5kbGVTZWxlY3Rpb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsa0JBQWtCLEdBQUdDLGtEQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAncmVhY3QtYXBvbGxvJztcclxuaW1wb3J0IHsgQ2FyZCxcclxuICAgIFJlc291cmNlTGlzdCxcclxuICAgIFN0YWNrLFxyXG4gICAgVGV4dFN0eWxlLFxyXG4gICAgVGh1bWJuYWlsLCB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnc3RvcmUtanMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucyc7XHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcclxuXHJcbmNvbnN0IEdFVF9QUk9EVUNUU19CWV9JRCA9IGdxbGBcclxuICBxdWVyeSBnZXRQcm9kdWN0cygkaWRzOiBbSUQhXSEpIHtcclxuICAgIG5vZGVzKGlkczogJGlkcykge1xyXG4gICAgICAuLi4gb24gUHJvZHVjdCB7XHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBoYW5kbGVcclxuICAgICAgICBkZXNjcmlwdGlvbkh0bWxcclxuICAgICAgICBpZFxyXG4gICAgICAgIGltYWdlcyhmaXJzdDogMSkge1xyXG4gICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICBvcmlnaW5hbFNyY1xyXG4gICAgICAgICAgICAgIGFsdFRleHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXJpYW50cyhmaXJzdDogMSkge1xyXG4gICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5cclxuY2xhc3MgUmVzb3VyY2VMaXN0V2l0aFByb2R1Y3RzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBjb250ZXh0VHlwZSA9IENvbnRleHQ7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGFwcCA9IHRoaXMuY29udGV4dDtcclxuICAgIGNvbnN0IHJlZGlyZWN0VG9Qcm9kdWN0ID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCByZWRpcmVjdCA9IFJlZGlyZWN0LmNyZWF0ZShhcHApO1xyXG4gICAgICByZWRpcmVjdC5kaXNwYXRjaChcclxuICAgICAgICBSZWRpcmVjdC5BY3Rpb24uQVBQLFxyXG4gICAgICAgICcvZWRpdC1wcm9kdWN0cycsXHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCB0d29XZWVrc0Zyb21Ob3cgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgMTIwOTZlNSkudG9EYXRlU3RyaW5nKCk7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgLy88UXVlcnkgcXVlcnk9e0dFVF9QUk9EVUNUU19CWV9JRH0+XHJcbiAgICAgICAgPFF1ZXJ5IHF1ZXJ5PXtHRVRfUFJPRFVDVFNfQllfSUR9IHZhcmlhYmxlcz17eyBpZHM6IHN0b3JlLmdldCgnaWRzJykgfX0+XHJcbiAgICAgICAgICB7KHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZ+KApjwvZGl2PjtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgPFJlc291cmNlTGlzdFxyXG4gICAgICAgICAgICAgICAgc2hvd0hlYWRlclxyXG4gICAgICAgICAgICAgICAgcmVzb3VyY2VOYW1lPXt7IHNpbmd1bGFyOiAnUHJvZHVjdCcsIHBsdXJhbDogJ1Byb2R1Y3RzJyB9fVxyXG4gICAgICAgICAgICAgICAgaXRlbXM9e2RhdGEubm9kZXN9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgbWVkaWEgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFRodW1ibmFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZXMuZWRnZXNbMF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW0uaW1hZ2VzLmVkZ2VzWzBdLm5vZGUub3JpZ2luYWxTcmNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlcy5lZGdlc1swXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5pbWFnZXMuZWRnZXNbMF0ubm9kZS5hbHRUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gaXRlbS52YXJpYW50cy5lZGdlc1swXS5ub2RlLnByaWNlO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3QuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBtZWRpYT17bWVkaWF9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5TGFiZWw9e2BWaWV3IGRldGFpbHMgZm9yICR7aXRlbS50aXRsZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5zZXQoJ2l0ZW0nLCBpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0b3JlLnNldCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0VG9Qcm9kdWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0gZmlsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtwcmljZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RXhwaXJlcyBvbiB7dHdvV2Vla3NGcm9tTm93fSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZXNvdXJjZUxpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIDwvUXVlcnk+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICBleHBvcnQgZGVmYXVsdCBSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHM7XHJcbiIsImltcG9ydCB7IEVtcHR5U3RhdGUsIExheW91dCwgUGFnZSB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgeyBSZXNvdXJjZVBpY2tlciwgVGl0bGVCYXIgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICdzdG9yZS1qcyc7XHJcbmltcG9ydCBSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHMgZnJvbSAnLi4vY29tcG9uZW50cy9SZXNvdXJjZUxpc3QnO1xyXG5cclxuY29uc3QgaW1nID0gJ2h0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wNzU3Lzk5NTUvZmlsZXMvZW1wdHktc3RhdGUuc3ZnJztcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHsgb3BlbjogZmFsc2UgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBlbXB0eVN0YXRlID0gIXN0b3JlLmdldCgnaWRzJyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UGFnZT5cclxuICAgICAgICA8VGl0bGVCYXJcclxuICAgICAgICAgIHRpdGxlPVwiU2FtcGxlIEFwcFwiXHJcbiAgICAgICAgICBwcmltYXJ5QWN0aW9uPXt7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdTZWxlY3QgcHJvZHVjdHMnLFxyXG4gICAgICAgICAgICAvL2NvbW1lbnQgZmFpcmUgMiBsYW1iZGFzIMOgIGxhIHN1aXRlIHBvdXIgYXZvaXIgYXVzc2kgbGUgY29uc29sZSBsb2c/XHJcbiAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KSxcclxuICAgICAgICAgICAgLy9vbkFjdGlvbjogKCkgPT4gY29uc29sZS5sb2coJ2NsaWNrZWRkJyksXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFJlc291cmNlUGlja2VyXHJcbiAgICAgICAgICByZXNvdXJjZVR5cGU9XCJQcm9kdWN0XCJcclxuICAgICAgICAgIHNob3dWYXJpYW50cz17ZmFsc2V9XHJcbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59XHJcbiAgICAgICAgICBvblNlbGVjdGlvbj17KHJlc291cmNlcykgPT4gdGhpcy5oYW5kbGVTZWxlY3Rpb24ocmVzb3VyY2VzKX1cclxuICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxFbXB0eVN0YXRlXHJcbiAgICAgICAgICAgICAgaGVhZGluZz1cIlNlbGVjdCBwcm9kdWN0cyB0byBzdGFydFwiXHJcbiAgICAgICAgICAgICAgYWN0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnU2VsZWN0IHByb2R1Y3RzJyxcclxuICAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGltYWdlPXtpbWd9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cD5TZWxlY3QgcHJvZHVjdHMgYW5kIGNoYW5nZSB0aGVpciBwcmljZSB0ZW1wb3JhcmlseTwvcD5cclxuICAgICAgICAgICAgPC9FbXB0eVN0YXRlPlxyXG4gICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICB7ZW1wdHlTdGF0ZSA/IChcclxuICAgICAgICAgICAgPExheW91dD48L0xheW91dD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8UmVzb3VyY2VMaXN0V2l0aFByb2R1Y3RzIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9QYWdlPlxyXG4gICAgKTtcclxuICB9XHJcbiAgaGFuZGxlU2VsZWN0aW9uID0gKHJlc291cmNlcykgPT4ge1xyXG4gICAgY29uc3QgaWRzRnJvbVJlc291cmNlcyA9IHJlc291cmNlcy5zZWxlY3Rpb24ubWFwKChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KVxyXG4gICAgY29uc29sZS5sb2cocmVzb3VyY2VzKVxyXG4gICAgY29uc29sZS5sb2coaWRzRnJvbVJlc291cmNlcylcclxuICAgIGNvbnNvbGUubG9nKHJlc291cmNlcy5pZClcclxuICAgIHN0b3JlLnNldCgnaWRzJywgaWRzRnJvbVJlc291cmNlcyk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hcG9sbG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0b3JlLWpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=