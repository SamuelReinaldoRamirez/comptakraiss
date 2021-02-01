webpackHotUpdate_N_E("pages/index",{

/***/ "./components/selectdrop.js":
/*!**********************************!*\
  !*** ./components/selectdrop.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! store-js */ "./node_modules/store-js/dist/store.legacy.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_11__);










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





/*const dotenv = require('dotenv');
const next = require('next');
dotenv.config();
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const { REACT_APP_ngrokBack } = process.env;

app.prepare().then(() => {
  console.log("in app prepare")
  console.log(REACT_APP_ngrokBack)
});*/
//
//const {REACT_APP_ngrokBack} = process.env;
//const ngrokBack = REACT_APP_ngrokBack;

console.log('YATAAAAAAAAAAAAAAAAAAAAA'); //console.log( REACT_APP_ngrokBack );
//class Select extends PureComponent {

var Select = /*#__PURE__*/function (_React$Component) {
  Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Select, _React$Component);

  var _super = _createSuper(Select);

  function Select() {
    var _this;

    Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Select);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      options: [{
        name: 'Select…',
        value: null
      }, {
        name: 'A',
        value: 'a'
      }, {
        name: 'B',
        value: 'b'
      }, {
        name: 'C',
        value: 'c'
      }],
      value: '?'
    });

    Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleChange", function (event) {
      _this.setState({
        value: event.target.value
      }); // console.log(this.props.id)
      //console.log(event.target.value)


      store_js__WEBPACK_IMPORTED_MODULE_11___default.a.set('etat' + _this.props.id, {
        id: _this.props.id,
        choix: event.target.value
      });
      console.log("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZz"); //console.log(REACT_APP_ngrokBack)

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.put("https://63167fceb920.ngrok.io/handle", {
        data: {
          "order_state": "669"
        },
        query: {
          id: 1
        }
      }, {
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

    return _this;
  }

  Object(C_Users_samue_Documents_compta_kraiss_nodee_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Select, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          options = _this$state.options,
          value = _this$state.value;
      var currentId;
      var etatFromStore;
      var val;
      currentId = this.props.id, etatFromStore = store_js__WEBPACK_IMPORTED_MODULE_11___default.a.get('etat' + currentId), val = value; //pour setter la ligne 1 (pas la 0) à undefined
      //etatFromStore.id == 1 ? etatFromStore = undefined : '',

      etatFromStore == undefined ? store_js__WEBPACK_IMPORTED_MODULE_11___default.a.set('etat' + currentId, {
        id: currentId,
        choix: val
      }) : val = etatFromStore.choix; //console.log('etat' + currentId),
      //console.log(etatFromStore)
      //console.log(etatFromStore == undefined ? 'pas d\'id' : etatFromStore.id),
      // console.log('this')
      //console.log(this)
      // <select onChange={this.handleChange} value={value}>

      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(react__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("select", {
          onChange: this.handleChange,
          value: val,
          children: options.map(function (item) {
            return (
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
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("option", {
                value: item.value,
                children: item.name
              }, item.value)
            );
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])("h1", {
          children: ["Favorite letter: ", value]
        })]
      });
    }
  }]);

  return Select;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Select);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWxlY3Rkcm9wLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJTZWxlY3QiLCJvcHRpb25zIiwibmFtZSIsInZhbHVlIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInN0b3JlIiwic2V0IiwicHJvcHMiLCJpZCIsImNob2l4IiwiYXhpb3MiLCJwdXQiLCJkYXRhIiwicXVlcnkiLCJoZWFkZXJzIiwic3RhdGUiLCJjdXJyZW50SWQiLCJldGF0RnJvbVN0b3JlIiwidmFsIiwiZ2V0IiwidW5kZWZpbmVkIiwiaGFuZGxlQ2hhbmdlIiwibWFwIiwiaXRlbSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBSztBQUdMO0FBQ0E7O0FBQ0FBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDBCQUFaLEUsQ0FDQTtBQUVBOztJQUNNQyxNOzs7Ozs7Ozs7Ozs7Ozs7O2dVQUNNO0FBQ05DLGFBQU8sRUFBRSxDQUNQO0FBQ0VDLFlBQUksRUFBRSxTQURSO0FBRUVDLGFBQUssRUFBRTtBQUZULE9BRE8sRUFLUDtBQUNFRCxZQUFJLEVBQUUsR0FEUjtBQUVFQyxhQUFLLEVBQUU7QUFGVCxPQUxPLEVBU1A7QUFDRUQsWUFBSSxFQUFFLEdBRFI7QUFFRUMsYUFBSyxFQUFFO0FBRlQsT0FUTyxFQWFQO0FBQ0VELFlBQUksRUFBRSxHQURSO0FBRUVDLGFBQUssRUFBRTtBQUZULE9BYk8sQ0FESDtBQW1CTkEsV0FBSyxFQUFFO0FBbkJELEs7O3VVQXlCTyxVQUFDQyxLQUFELEVBQVc7QUFDeEIsWUFBS0MsUUFBTCxDQUFjO0FBQUVGLGFBQUssRUFBRUMsS0FBSyxDQUFDRSxNQUFOLENBQWFIO0FBQXRCLE9BQWQsRUFEd0IsQ0FFekI7QUFDQzs7O0FBQ0FJLHNEQUFLLENBQUNDLEdBQU4sQ0FBVSxTQUFPLE1BQUtDLEtBQUwsQ0FBV0MsRUFBNUIsRUFBZ0M7QUFBRUEsVUFBRSxFQUFHLE1BQUtELEtBQUwsQ0FBV0MsRUFBbEI7QUFBc0JDLGFBQUssRUFBR1AsS0FBSyxDQUFDRSxNQUFOLENBQWFIO0FBQTNDLE9BQWhDO0FBQ0FMLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHNDQUFaLEVBTHdCLENBTXhCOztBQUdBYSxrREFBSyxDQUFDQyxHQUFOLENBQ0Usc0NBREYsRUFFRTtBQUFFQyxZQUFJLEVBQUU7QUFBQyx5QkFBZ0I7QUFBakIsU0FBUjtBQUFpQ0MsYUFBSyxFQUFFO0FBQUVMLFlBQUUsRUFBQztBQUFMO0FBQXhDLE9BRkYsRUFHRTtBQUFDTSxlQUFPLEVBQUU7QUFBQywwQkFBZ0I7QUFBakI7QUFBVixPQUhGLEVBVHdCLENBZ0J4QjtBQUNEO0FBR0M7O0FBRUE7QUFDTjtBQUNBO0FBQ0E7O0FBR007QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNLLEs7Ozs7Ozs7NkJBRVE7QUFBQSx3QkFDb0IsS0FBS0MsS0FEekI7QUFBQSxVQUNDaEIsT0FERCxlQUNDQSxPQUREO0FBQUEsVUFDVUUsS0FEVixlQUNVQSxLQURWO0FBRVAsVUFBSWUsU0FBSjtBQUNBLFVBQUlDLGFBQUo7QUFDQSxVQUFJQyxHQUFKO0FBRUFGLGVBQVMsR0FBRyxLQUFLVCxLQUFMLENBQVdDLEVBQXZCLEVBQ0FTLGFBQWEsR0FBR1osZ0RBQUssQ0FBQ2MsR0FBTixDQUFVLFNBQU9ILFNBQWpCLENBRGhCLEVBRUFFLEdBQUcsR0FBR2pCLEtBRk4sQ0FOTyxDQVVQO0FBQ0E7O0FBRUFnQixtQkFBYSxJQUFJRyxTQUFqQixHQUNBZixnREFBSyxDQUFDQyxHQUFOLENBQVUsU0FBT1UsU0FBakIsRUFBMkI7QUFBRVIsVUFBRSxFQUFHUSxTQUFQO0FBQWtCUCxhQUFLLEVBQUdTO0FBQTFCLE9BQTNCLENBREEsR0FFQUEsR0FBRyxHQUFDRCxhQUFhLENBQUNSLEtBRmxCLENBYk8sQ0FnQlA7QUFDQTtBQUNBO0FBSUQ7QUFDQztBQUlEOztBQUdDLDBCQUNFLCtEQUFDLDhDQUFEO0FBQUEsZ0NBQ0U7QUFBUSxrQkFBUSxFQUFFLEtBQUtZLFlBQXZCO0FBQXFDLGVBQUssRUFBRUgsR0FBNUM7QUFBQSxvQkFDR25CLE9BQU8sQ0FBQ3VCLEdBQVIsQ0FBWSxVQUFBQyxJQUFJO0FBQUE7QUFBQTs7QUFLZjtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDYztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUF5QixxQkFBSyxFQUFFQSxJQUFJLENBQUN0QixLQUFyQztBQUFBLDBCQUNHc0IsSUFBSSxDQUFDdkI7QUFEUixpQkFBYXVCLElBQUksQ0FBQ3RCLEtBQWxCO0FBZmU7QUFBQSxXQUFoQjtBQURILFVBREYsZUFzQkU7QUFBQSwwQ0FBc0JBLEtBQXRCO0FBQUEsVUF0QkY7QUFBQSxRQURGO0FBMEJEOzs7O0VBckhnQnVCLDRDQUFLLENBQUNDLFM7O0FBdUhWM0IscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTAyZGM2M2QwODViODM5OWY0NmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICdzdG9yZS1qcyc7XHJcblxyXG4vKmNvbnN0IGRvdGVudiA9IHJlcXVpcmUoJ2RvdGVudicpO1xyXG5jb25zdCBuZXh0ID0gcmVxdWlyZSgnbmV4dCcpO1xyXG5kb3RlbnYuY29uZmlnKCk7XHJcbmNvbnN0IGRldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbic7XHJcbmNvbnN0IGFwcCA9IG5leHQoeyBkZXYgfSk7XHJcbmNvbnN0IHsgUkVBQ1RfQVBQX25ncm9rQmFjayB9ID0gcHJvY2Vzcy5lbnY7XHJcblxyXG5hcHAucHJlcGFyZSgpLnRoZW4oKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiaW4gYXBwIHByZXBhcmVcIilcclxuICBjb25zb2xlLmxvZyhSRUFDVF9BUFBfbmdyb2tCYWNrKVxyXG59KTsqLy8vXHJcblxyXG5cclxuLy9jb25zdCB7UkVBQ1RfQVBQX25ncm9rQmFja30gPSBwcm9jZXNzLmVudjtcclxuLy9jb25zdCBuZ3Jva0JhY2sgPSBSRUFDVF9BUFBfbmdyb2tCYWNrO1xyXG5jb25zb2xlLmxvZygnWUFUQUFBQUFBQUFBQUFBQUFBQUFBQUFBJylcclxuLy9jb25zb2xlLmxvZyggUkVBQ1RfQVBQX25ncm9rQmFjayApO1xyXG5cclxuLy9jbGFzcyBTZWxlY3QgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcclxuY2xhc3MgU2VsZWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAnU2VsZWN04oCmJyxcclxuICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ0EnLFxyXG4gICAgICAgICAgdmFsdWU6ICdhJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICdCJyxcclxuICAgICAgICAgIHZhbHVlOiAnYicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAnQycsXHJcbiAgICAgICAgICB2YWx1ZTogJ2MnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIHZhbHVlOiAnPycsXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBcclxuICBcclxuICAgIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmlkKVxyXG4gICAgICAvL2NvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgc3RvcmUuc2V0KCdldGF0Jyt0aGlzLnByb3BzLmlkLCB7IGlkIDogdGhpcy5wcm9wcy5pZCwgY2hvaXggOiBldmVudC50YXJnZXQudmFsdWV9KVxyXG4gICAgICBjb25zb2xlLmxvZyhcIlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaelwiKVxyXG4gICAgICAvL2NvbnNvbGUubG9nKFJFQUNUX0FQUF9uZ3Jva0JhY2spXHJcblxyXG4gICAgICBcclxuICAgICAgYXhpb3MucHV0KFxyXG4gICAgICAgIFwiaHR0cHM6Ly82MzE2N2ZjZWI5MjAubmdyb2suaW8vaGFuZGxlXCIsIFxyXG4gICAgICAgIHsgZGF0YToge1wib3JkZXJfc3RhdGVcIiA6IFwiNjY5XCJ9LCBxdWVyeTogeyBpZDoxIH0gfSwgXHJcbiAgICAgICAge2hlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiAnYXBwbGljYXRpb24vanNvbid9fVxyXG4gICAgKVxyXG5cclxuXHJcbiAgICAgIC8vYXhpb3MucHV0KFwiaHR0cHM6Ly9cIitSRUFDVF9BUFBfbmdyb2tCYWNrK1wiLm5ncm9rLmlvL2hhbmRsZVwiLCB7fSlcclxuICAgICAvLyBcInByb3h5XCI6IFwiaHR0cDovLyR7UkVBQ1RfQVBQX25ncm9rQmFja30ubmdyb2suaW9cIixcclxuXHJcblxyXG4gICAgICAvL2F4aW9zLnB1dChcImxvY2FsaG9zdDo1MDAwL2hhbmRsZVwiLCB7fSlcclxuXHJcbiAgICAgIC8qLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eScpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgIH0pKi9cclxuXHJcblxyXG4gICAgICAvKiB2YXIgc3FsID0gXCJVUERBVEUgb3JkZXJzIFNFVCBvcmRlcl9zdGF0ZSA9IDYgV0hFUkUgb3JkZXJfaWQ9MVwiO1xyXG4gICAgICAgIGNvbi5xdWVyeShzcWwsIGZ1bmN0aW9uIChlcnIsIHJlc3VsdCkge1xyXG4gICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmFmZmVjdGVkUm93cyArIFwiIHJlY29yZChzKSB1cGRhdGVkXCIpO1xyXG4gICAgICAgIH0pOyovXHJcbiAgICB9O1xyXG4gIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB7IG9wdGlvbnMsIHZhbHVlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICB2YXIgY3VycmVudElkO1xyXG4gICAgICB2YXIgZXRhdEZyb21TdG9yZTtcclxuICAgICAgdmFyIHZhbDtcclxuXHJcbiAgICAgIGN1cnJlbnRJZCA9IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgIGV0YXRGcm9tU3RvcmUgPSBzdG9yZS5nZXQoJ2V0YXQnK2N1cnJlbnRJZCksXHJcbiAgICAgIHZhbCA9IHZhbHVlO1xyXG5cclxuICAgICAgLy9wb3VyIHNldHRlciBsYSBsaWduZSAxIChwYXMgbGEgMCkgw6AgdW5kZWZpbmVkXHJcbiAgICAgIC8vZXRhdEZyb21TdG9yZS5pZCA9PSAxID8gZXRhdEZyb21TdG9yZSA9IHVuZGVmaW5lZCA6ICcnLFxyXG5cclxuICAgICAgZXRhdEZyb21TdG9yZSA9PSB1bmRlZmluZWQgPyBcclxuICAgICAgc3RvcmUuc2V0KCdldGF0JytjdXJyZW50SWQseyBpZCA6IGN1cnJlbnRJZCwgY2hvaXggOiB2YWx9KSA6IFxyXG4gICAgICB2YWw9ZXRhdEZyb21TdG9yZS5jaG9peDtcclxuICAgICAgLy9jb25zb2xlLmxvZygnZXRhdCcgKyBjdXJyZW50SWQpLFxyXG4gICAgICAvL2NvbnNvbGUubG9nKGV0YXRGcm9tU3RvcmUpXHJcbiAgICAgIC8vY29uc29sZS5sb2coZXRhdEZyb21TdG9yZSA9PSB1bmRlZmluZWQgPyAncGFzIGRcXCdpZCcgOiBldGF0RnJvbVN0b3JlLmlkKSxcclxuXHJcblxyXG5cclxuICAgICAvLyBjb25zb2xlLmxvZygndGhpcycpXHJcbiAgICAgIC8vY29uc29sZS5sb2codGhpcylcclxuXHJcbiAgXHJcblxyXG4gICAgIC8vIDxzZWxlY3Qgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dmFsdWV9PlxyXG5cclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt2YWx9PlxyXG4gICAgICAgICAgICB7b3B0aW9ucy5tYXAoaXRlbSA9PiAoXHJcblxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gXHJcbiAgICAgICAgICAgICAgLypjb25zb2xlLmxvZygnZXRhdCcrY3VycmVudElkKSxcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldGF0RnJvbVN0b3JlKSxcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldGF0RnJvbVN0b3JlID09IHVuZGVmaW5lZCksXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXRhdEZyb21TdG9yZSA9PSB1bmRlZmluZWQgPyAncGFzIGRcXCdpZCcgOiBldGF0RnJvbVN0b3JlLmlkKSxcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldGF0RnJvbVN0b3JlID09IHVuZGVmaW5lZCA/ICdwYXMgZGUgY2hvaXggY2hvaXNpJyA6IGV0YXRGcm9tU3RvcmUuY2hvaXgpLFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwib3B0aW9uXCIpLFxyXG4gICAgICAgICAgICAgIC8vY29uc29sZS5sb2coaXRlbSksXHJcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh7dmFsdWV9KSxcclxuICAgICAgICAgICAgICAvKmNvbnNvbGUubG9nKHRoaXMpLCovXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW0udmFsdWV9IHZhbHVlPXtpdGVtLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8aDE+RmF2b3JpdGUgbGV0dGVyOiB7dmFsdWV9PC9oMT5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICBleHBvcnQgZGVmYXVsdCBTZWxlY3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==