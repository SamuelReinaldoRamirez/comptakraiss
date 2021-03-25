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
  varrows = ["a", "b"];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRQYWdlMi5qcyJdLCJuYW1lcyI6WyJHRVRfUEFHRTIiLCJncWwiLCJEYXRhVGFibGVFeGFtcGxlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ2YXJyb3dzIiwicm93cyIsIlJlc291cmNlTGlzdFBhZ2UyIiwibG9hZGluZyIsImVycm9yIiwibWVzc2FnZSIsIm9yZGVycyIsImVkZ2VzIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBT0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLGtEQUFILG1CQUFmOztBQWtDQSxTQUFTQyxnQkFBVCxDQUEwQkMsSUFBMUIsRUFBZ0M7QUFDNUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0FHLFNBQU8sR0FBRyxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQVY7QUFDQSxzQkFDSSw4REFBQyxxREFBRDtBQUFNLGFBQVMsRUFBQyxNQUFoQjtBQUFBLDJCQUNFLDhEQUFDLHFEQUFEO0FBQUEsNkJBQ0UsOERBQUMsMERBQUQ7QUFDRSwwQkFBa0IsRUFBRSxDQUNsQixNQURrQixFQUVsQixNQUZrQixDQUR0QjtBQUtFLGdCQUFRLEVBQUUsQ0FDUixJQURRLEVBRVIsTUFGUSxDQUxaO0FBU0UsWUFBSSxFQUFFQztBQVRSO0FBREY7QUFERixJQURKO0FBaUJIOztLQXBCUUwsZ0I7O0lBdUJITSxpQjs7Ozs7Ozs7Ozs7Ozs2QkFDTztBQUNMLDBCQUNFLDhEQUFDLGtEQUFEO0FBQU8sYUFBSyxFQUFFUixTQUFkO0FBQUEsa0JBQ0csd0JBQThCO0FBQUEsY0FBM0JHLElBQTJCLFFBQTNCQSxJQUEyQjtBQUFBLGNBQXJCTSxPQUFxQixRQUFyQkEsT0FBcUI7QUFBQSxjQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDN0JOLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0EsY0FBSUksT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQSxZQUFQO0FBQ2IsY0FBSUMsS0FBSixFQUFXLG9CQUFPO0FBQUEsc0JBQU1BLEtBQUssQ0FBQ0M7QUFBWixZQUFQO0FBQ1hQLGlCQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBQyxpQkFBTyxDQUFDQyxHQUFSLENBQVlGLElBQUksQ0FBQ1MsTUFBTCxDQUFZQyxLQUF4QixFQUw2QixDQU03Qjs7QUFFQSxpQkFDRVgsZ0JBQWdCLENBQUNDLElBQUQsQ0FEbEI7QUFHRDtBQVpILFFBREY7QUFnQkQ7Ozs7RUFsQnlCVyw2Q0FBSyxDQUFDQyxTOztBQXFCdkJQLGdGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZpbmFuY2VzLmM5N2Q1Y2NkYzI1MDZiZTc2ZjQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xyXG5pbXBvcnQge1xyXG4gIENhcmQsXHJcbiAgUGFnZSxcclxuICBEYXRhVGFibGUsXHJcbiAgUGFnaW5hdGlvbixcclxuICBCdXR0b25cclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgR0VUX1BBR0UyID0gZ3FsYFxyXG5xdWVyeSB7XHJcbiAgb3JkZXJzKGZpcnN0OiA1MCkge1xyXG4gICAgZWRnZXMge1xyXG4gICAgICBjdXJzb3JcclxuICAgICAgbm9kZSB7XHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIGVtYWlsXHJcbiAgICAgICAgY3JlYXRlZEF0XHJcbiAgICAgICAgZnVsZmlsbG1lbnRze1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIHRyYWNraW5nSW5mb3tcclxuICAgICAgICAgICAgY29tcGFueVxyXG4gICAgICAgICAgICBudW1iZXJcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVzdGltYXRlZERlbGl2ZXJ5QXRcclxuICAgICAgICAgIGRlbGl2ZXJlZEF0XHJcbiAgICAgICAgICBkaXNwbGF5U3RhdHVzXHJcbiAgICAgICAgICBzdGF0dXNcclxuICAgICAgICB9XHJcbiAgICAgICAgc2hpcHBpbmdMaW5le1xyXG4gICAgICAgICAgY2FycmllcklkZW50aWZpZXJcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VzdG9tZXJ7XHJcbiAgICAgICAgICBmaXJzdE5hbWVcclxuICAgICAgICAgIGxhc3ROYW1lXHJcbiAgICAgICAgICBlbWFpbFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufWA7XHJcblxyXG5mdW5jdGlvbiBEYXRhVGFibGVFeGFtcGxlKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICB2YXJyb3dzID0gW1wiYVwiLCBcImJcIl07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQYWdlIGZ1bGxXaWR0aD1cInRydWVcIj5cclxuICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgICAgICAgY29sdW1uQ29udGVudFR5cGVzPXtbXHJcbiAgICAgICAgICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICAndGV4dCcsXHJcbiAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICBoZWFkaW5ncz17W1xyXG4gICAgICAgICAgICAgICAgJ2lkJyxcclxuICAgICAgICAgICAgICAgICduYW1lJyxcclxuICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgIHJvd3M9e3Jvd3N9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9QYWdlPlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbmNsYXNzIFJlc291cmNlTGlzdFBhZ2UyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPFF1ZXJ5IHF1ZXJ5PXtHRVRfUEFHRTJ9PlxyXG4gICAgICAgICAgICB7KHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiREFUQVwiKVxyXG4gICAgICAgICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5n4oCmPC9kaXY+O1xyXG4gICAgICAgICAgICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEub3JkZXJzLmVkZ2VzKTtcclxuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEub3JkZXJzLmVkZ2VzWzBdLm5vZGUubGluZUl0ZW1zLmVkZ2VzWzBdLm5vZGUuaW1hZ2Uub3JpZ2luYWxTcmMpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIERhdGFUYWJsZUV4YW1wbGUoZGF0YSlcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPC9RdWVyeT5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc291cmNlTGlzdFBhZ2UyOyJdLCJzb3VyY2VSb290IjoiIn0=