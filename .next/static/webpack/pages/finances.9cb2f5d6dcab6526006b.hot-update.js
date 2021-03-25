webpackHotUpdate_N_E("pages/finances",{

/***/ "./components/getPage2.js":
/*!********************************!*\
  !*** ./components/getPage2.js ***!
  \********************************/
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








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\nquery {\n  orders(first: 50) {\n    edges {\n      cursor\n      node {\n        name\n        email\n        createdAt\n        fulfillments{\n          id\n          name\n          trackingInfo{\n            company\n            number\n          }\n          estimatedDeliveryAt\n          deliveredAt\n          displayStatus\n          status\n        }\n        shippingLine{\n          carrierIdentifier\n        }\n        customer{\n          firstName\n          lastName\n          email\n        }\n      }\n    }\n  }\n}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var GET_PAGE2 = graphql_tag__WEBPACK_IMPORTED_MODULE_7___default()(_templateObject());

function DataTableExample(data) {
  console.log(data);
  var rows = [["a", "b"], ["b", "c"]];
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Page"], {
    fullWidth: "true",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Card"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["DataTable"], {
        columnContentTypes: ['text', 'text'],
        headings: ['id', 'name'],
        rows: rows
      })
    })
  });
}

_c = DataTableExample;

var ResourceListPage2 = /*#__PURE__*/function (_React$Component) {
  Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ResourceListPage2, _React$Component);

  var _super = _createSuper(ResourceListPage2);

  function ResourceListPage2() {
    Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ResourceListPage2);

    return _super.apply(this, arguments);
  }

  Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ResourceListPage2, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_8__["Query"], {
        query: GET_PAGE2,
        children: function children(_ref) {
          var data = _ref.data,
              loading = _ref.loading,
              error = _ref.error;
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

  return ResourceListPage2;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ResourceListPage2);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRQYWdlMi5qcyJdLCJuYW1lcyI6WyJHRVRfUEFHRTIiLCJncWwiLCJEYXRhVGFibGVFeGFtcGxlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyb3dzIiwiUmVzb3VyY2VMaXN0UGFnZTIiLCJsb2FkaW5nIiwiZXJyb3IiLCJtZXNzYWdlIiwib3JkZXJzIiwiZWRnZXMiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msa0RBQUgsbUJBQWY7O0FBa0NBLFNBQVNDLGdCQUFULENBQTBCQyxJQUExQixFQUFnQztBQUM1QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQSxNQUFJRyxJQUFJLEdBQUcsQ0FDUCxDQUFDLEdBQUQsRUFBTSxHQUFOLENBRE8sRUFFUCxDQUFDLEdBQUQsRUFBTSxHQUFOLENBRk8sQ0FBWDtBQUlBLHNCQUNJLDhEQUFDLHFEQUFEO0FBQU0sYUFBUyxFQUFDLE1BQWhCO0FBQUEsMkJBQ0UsOERBQUMscURBQUQ7QUFBQSw2QkFDRSw4REFBQywwREFBRDtBQUNFLDBCQUFrQixFQUFFLENBQ2xCLE1BRGtCLEVBRWxCLE1BRmtCLENBRHRCO0FBS0UsZ0JBQVEsRUFBRSxDQUNSLElBRFEsRUFFUixNQUZRLENBTFo7QUFTRSxZQUFJLEVBQUVBO0FBVFI7QUFERjtBQURGLElBREo7QUFpQkg7O0tBdkJRSixnQjs7SUEwQkhLLGlCOzs7Ozs7Ozs7Ozs7OzZCQUNPO0FBQ0wsMEJBQ0UsOERBQUMsa0RBQUQ7QUFBTyxhQUFLLEVBQUVQLFNBQWQ7QUFBQSxrQkFDRyx3QkFBOEI7QUFBQSxjQUEzQkcsSUFBMkIsUUFBM0JBLElBQTJCO0FBQUEsY0FBckJLLE9BQXFCLFFBQXJCQSxPQUFxQjtBQUFBLGNBQVpDLEtBQVksUUFBWkEsS0FBWTtBQUM3QkwsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQSxjQUFJRyxPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBLFlBQVA7QUFDYixjQUFJQyxLQUFKLEVBQVcsb0JBQU87QUFBQSxzQkFBTUEsS0FBSyxDQUFDQztBQUFaLFlBQVA7QUFDWE4saUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0FDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBSSxDQUFDUSxNQUFMLENBQVlDLEtBQXhCLEVBTDZCLENBTTdCOztBQUVBLGlCQUNFVixnQkFBZ0IsQ0FBQ0MsSUFBRCxDQURsQjtBQUdEO0FBWkgsUUFERjtBQWdCRDs7OztFQWxCeUJVLDZDQUFLLENBQUNDLFM7O0FBcUJ2QlAsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmluYW5jZXMuOWNiMmY1ZDZkY2FiNjUyNjAwNmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XHJcbmltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBQYWdlLFxyXG4gIERhdGFUYWJsZSxcclxuICBQYWdpbmF0aW9uLFxyXG4gIEJ1dHRvblxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBHRVRfUEFHRTIgPSBncWxgXHJcbnF1ZXJ5IHtcclxuICBvcmRlcnMoZmlyc3Q6IDUwKSB7XHJcbiAgICBlZGdlcyB7XHJcbiAgICAgIGN1cnNvclxyXG4gICAgICBub2RlIHtcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgZW1haWxcclxuICAgICAgICBjcmVhdGVkQXRcclxuICAgICAgICBmdWxmaWxsbWVudHN7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgdHJhY2tpbmdJbmZve1xyXG4gICAgICAgICAgICBjb21wYW55XHJcbiAgICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZXN0aW1hdGVkRGVsaXZlcnlBdFxyXG4gICAgICAgICAgZGVsaXZlcmVkQXRcclxuICAgICAgICAgIGRpc3BsYXlTdGF0dXNcclxuICAgICAgICAgIHN0YXR1c1xyXG4gICAgICAgIH1cclxuICAgICAgICBzaGlwcGluZ0xpbmV7XHJcbiAgICAgICAgICBjYXJyaWVySWRlbnRpZmllclxyXG4gICAgICAgIH1cclxuICAgICAgICBjdXN0b21lcntcclxuICAgICAgICAgIGZpcnN0TmFtZVxyXG4gICAgICAgICAgbGFzdE5hbWVcclxuICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59YDtcclxuXHJcbmZ1bmN0aW9uIERhdGFUYWJsZUV4YW1wbGUoZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHZhciByb3dzID0gW1xyXG4gICAgICAgIFtcImFcIiwgXCJiXCJdLFxyXG4gICAgICAgIFtcImJcIiwgXCJjXCJdXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UGFnZSBmdWxsV2lkdGg9XCJ0cnVlXCI+XHJcbiAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgPERhdGFUYWJsZVxyXG4gICAgICAgICAgICAgIGNvbHVtbkNvbnRlbnRUeXBlcz17W1xyXG4gICAgICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgaGVhZGluZ3M9e1tcclxuICAgICAgICAgICAgICAgICdpZCcsXHJcbiAgICAgICAgICAgICAgICAnbmFtZScsXHJcbiAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICByb3dzPXtyb3dzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvUGFnZT5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5jbGFzcyBSZXNvdXJjZUxpc3RQYWdlMiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxRdWVyeSBxdWVyeT17R0VUX1BBR0UyfT5cclxuICAgICAgICAgICAgeyh7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0pID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRBVEFcIilcclxuICAgICAgICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZ+KApjwvZGl2PjtcclxuICAgICAgICAgICAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLm9yZGVycy5lZGdlcyk7XHJcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhLm9yZGVycy5lZGdlc1swXS5ub2RlLmxpbmVJdGVtcy5lZGdlc1swXS5ub2RlLmltYWdlLm9yaWdpbmFsU3JjKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICBEYXRhVGFibGVFeGFtcGxlKGRhdGEpXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIDwvUXVlcnk+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNvdXJjZUxpc3RQYWdlMjsiXSwic291cmNlUm9vdCI6IiJ9