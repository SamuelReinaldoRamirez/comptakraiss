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
      //l'id qu'on envoie en params est l'id du select dans la page concernée. il faudra le faire correspondre au vrai ID en fonction de la pagination et du tri de la datatable

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.put("https://63167fceb920.ngrok.io/handle", {
        data: {
          "order_state": "669"
        }
      }, {
        params: {
          id: _this.props.id
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWxlY3Rkcm9wLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJTZWxlY3QiLCJvcHRpb25zIiwibmFtZSIsInZhbHVlIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInN0b3JlIiwic2V0IiwicHJvcHMiLCJpZCIsImNob2l4IiwiYXhpb3MiLCJwdXQiLCJkYXRhIiwicGFyYW1zIiwiaGVhZGVycyIsInN0YXRlIiwiY3VycmVudElkIiwiZXRhdEZyb21TdG9yZSIsInZhbCIsImdldCIsInVuZGVmaW5lZCIsImhhbmRsZUNoYW5nZSIsIm1hcCIsIml0ZW0iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUs7QUFHTDtBQUNBOztBQUNBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWixFLENBQ0E7QUFFQTs7SUFDTUMsTTs7Ozs7Ozs7Ozs7Ozs7OztnVUFDTTtBQUNOQyxhQUFPLEVBQUUsQ0FDUDtBQUNFQyxZQUFJLEVBQUUsU0FEUjtBQUVFQyxhQUFLLEVBQUU7QUFGVCxPQURPLEVBS1A7QUFDRUQsWUFBSSxFQUFFLEdBRFI7QUFFRUMsYUFBSyxFQUFFO0FBRlQsT0FMTyxFQVNQO0FBQ0VELFlBQUksRUFBRSxHQURSO0FBRUVDLGFBQUssRUFBRTtBQUZULE9BVE8sRUFhUDtBQUNFRCxZQUFJLEVBQUUsR0FEUjtBQUVFQyxhQUFLLEVBQUU7QUFGVCxPQWJPLENBREg7QUFtQk5BLFdBQUssRUFBRTtBQW5CRCxLOzt1VUF5Qk8sVUFBQ0MsS0FBRCxFQUFXO0FBQ3hCLFlBQUtDLFFBQUwsQ0FBYztBQUFFRixhQUFLLEVBQUVDLEtBQUssQ0FBQ0UsTUFBTixDQUFhSDtBQUF0QixPQUFkLEVBRHdCLENBRXpCO0FBQ0M7OztBQUNBSSxzREFBSyxDQUFDQyxHQUFOLENBQVUsU0FBTyxNQUFLQyxLQUFMLENBQVdDLEVBQTVCLEVBQWdDO0FBQUVBLFVBQUUsRUFBRyxNQUFLRCxLQUFMLENBQVdDLEVBQWxCO0FBQXNCQyxhQUFLLEVBQUdQLEtBQUssQ0FBQ0UsTUFBTixDQUFhSDtBQUEzQyxPQUFoQztBQUNBTCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxzQ0FBWixFQUx3QixDQU14QjtBQUVBOztBQUNBYSxrREFBSyxDQUFDQyxHQUFOLENBQ0Usc0NBREYsRUFFRTtBQUFFQyxZQUFJLEVBQUU7QUFBQyx5QkFBZ0I7QUFBakI7QUFBUixPQUZGLEVBR0U7QUFBQ0MsY0FBTSxFQUFFO0FBQUVMLFlBQUUsRUFBQyxNQUFLRCxLQUFMLENBQVdDO0FBQWhCLFNBQVQ7QUFBK0JNLGVBQU8sRUFBRTtBQUFDLDBCQUFnQjtBQUFqQjtBQUF4QyxPQUhGLEVBVHdCLENBZ0J4QjtBQUNEO0FBR0M7O0FBRUE7QUFDTjtBQUNBO0FBQ0E7O0FBR007QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNLLEs7Ozs7Ozs7NkJBRVE7QUFBQSx3QkFDb0IsS0FBS0MsS0FEekI7QUFBQSxVQUNDaEIsT0FERCxlQUNDQSxPQUREO0FBQUEsVUFDVUUsS0FEVixlQUNVQSxLQURWO0FBRVAsVUFBSWUsU0FBSjtBQUNBLFVBQUlDLGFBQUo7QUFDQSxVQUFJQyxHQUFKO0FBRUFGLGVBQVMsR0FBRyxLQUFLVCxLQUFMLENBQVdDLEVBQXZCLEVBQ0FTLGFBQWEsR0FBR1osZ0RBQUssQ0FBQ2MsR0FBTixDQUFVLFNBQU9ILFNBQWpCLENBRGhCLEVBRUFFLEdBQUcsR0FBR2pCLEtBRk4sQ0FOTyxDQVVQO0FBQ0E7O0FBRUFnQixtQkFBYSxJQUFJRyxTQUFqQixHQUNBZixnREFBSyxDQUFDQyxHQUFOLENBQVUsU0FBT1UsU0FBakIsRUFBMkI7QUFBRVIsVUFBRSxFQUFHUSxTQUFQO0FBQWtCUCxhQUFLLEVBQUdTO0FBQTFCLE9BQTNCLENBREEsR0FFQUEsR0FBRyxHQUFDRCxhQUFhLENBQUNSLEtBRmxCLENBYk8sQ0FnQlA7QUFDQTtBQUNBO0FBSUQ7QUFDQztBQUlEOztBQUdDLDBCQUNFLCtEQUFDLDhDQUFEO0FBQUEsZ0NBQ0U7QUFBUSxrQkFBUSxFQUFFLEtBQUtZLFlBQXZCO0FBQXFDLGVBQUssRUFBRUgsR0FBNUM7QUFBQSxvQkFDR25CLE9BQU8sQ0FBQ3VCLEdBQVIsQ0FBWSxVQUFBQyxJQUFJO0FBQUE7QUFBQTs7QUFLZjtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDYztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUF5QixxQkFBSyxFQUFFQSxJQUFJLENBQUN0QixLQUFyQztBQUFBLDBCQUNHc0IsSUFBSSxDQUFDdkI7QUFEUixpQkFBYXVCLElBQUksQ0FBQ3RCLEtBQWxCO0FBZmU7QUFBQSxXQUFoQjtBQURILFVBREYsZUFzQkU7QUFBQSwwQ0FBc0JBLEtBQXRCO0FBQUEsVUF0QkY7QUFBQSxRQURGO0FBMEJEOzs7O0VBckhnQnVCLDRDQUFLLENBQUNDLFM7O0FBdUhWM0IscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODcyNjk2YWY0NmE2M2RjYThhZGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICdzdG9yZS1qcyc7XHJcblxyXG4vKmNvbnN0IGRvdGVudiA9IHJlcXVpcmUoJ2RvdGVudicpO1xyXG5jb25zdCBuZXh0ID0gcmVxdWlyZSgnbmV4dCcpO1xyXG5kb3RlbnYuY29uZmlnKCk7XHJcbmNvbnN0IGRldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbic7XHJcbmNvbnN0IGFwcCA9IG5leHQoeyBkZXYgfSk7XHJcbmNvbnN0IHsgUkVBQ1RfQVBQX25ncm9rQmFjayB9ID0gcHJvY2Vzcy5lbnY7XHJcblxyXG5hcHAucHJlcGFyZSgpLnRoZW4oKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiaW4gYXBwIHByZXBhcmVcIilcclxuICBjb25zb2xlLmxvZyhSRUFDVF9BUFBfbmdyb2tCYWNrKVxyXG59KTsqLy8vXHJcblxyXG5cclxuLy9jb25zdCB7UkVBQ1RfQVBQX25ncm9rQmFja30gPSBwcm9jZXNzLmVudjtcclxuLy9jb25zdCBuZ3Jva0JhY2sgPSBSRUFDVF9BUFBfbmdyb2tCYWNrO1xyXG5jb25zb2xlLmxvZygnWUFUQUFBQUFBQUFBQUFBQUFBQUFBQUFBJylcclxuLy9jb25zb2xlLmxvZyggUkVBQ1RfQVBQX25ncm9rQmFjayApO1xyXG5cclxuLy9jbGFzcyBTZWxlY3QgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcclxuY2xhc3MgU2VsZWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAnU2VsZWN04oCmJyxcclxuICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ0EnLFxyXG4gICAgICAgICAgdmFsdWU6ICdhJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICdCJyxcclxuICAgICAgICAgIHZhbHVlOiAnYicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAnQycsXHJcbiAgICAgICAgICB2YWx1ZTogJ2MnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIHZhbHVlOiAnPycsXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBcclxuICBcclxuICAgIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmlkKVxyXG4gICAgICAvL2NvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgc3RvcmUuc2V0KCdldGF0Jyt0aGlzLnByb3BzLmlkLCB7IGlkIDogdGhpcy5wcm9wcy5pZCwgY2hvaXggOiBldmVudC50YXJnZXQudmFsdWV9KVxyXG4gICAgICBjb25zb2xlLmxvZyhcIlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaelwiKVxyXG4gICAgICAvL2NvbnNvbGUubG9nKFJFQUNUX0FQUF9uZ3Jva0JhY2spXHJcblxyXG4gICAgICAvL2wnaWQgcXUnb24gZW52b2llIGVuIHBhcmFtcyBlc3QgbCdpZCBkdSBzZWxlY3QgZGFucyBsYSBwYWdlIGNvbmNlcm7DqWUuIGlsIGZhdWRyYSBsZSBmYWlyZSBjb3JyZXNwb25kcmUgYXUgdnJhaSBJRCBlbiBmb25jdGlvbiBkZSBsYSBwYWdpbmF0aW9uIGV0IGR1IHRyaSBkZSBsYSBkYXRhdGFibGVcclxuICAgICAgYXhpb3MucHV0KFxyXG4gICAgICAgIFwiaHR0cHM6Ly82MzE2N2ZjZWI5MjAubmdyb2suaW8vaGFuZGxlXCIsIFxyXG4gICAgICAgIHsgZGF0YToge1wib3JkZXJfc3RhdGVcIiA6IFwiNjY5XCJ9IH0sIFxyXG4gICAgICAgIHtwYXJhbXM6IHsgaWQ6dGhpcy5wcm9wcy5pZCB9LCBoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nfX1cclxuICAgIClcclxuXHJcblxyXG4gICAgICAvL2F4aW9zLnB1dChcImh0dHBzOi8vXCIrUkVBQ1RfQVBQX25ncm9rQmFjaytcIi5uZ3Jvay5pby9oYW5kbGVcIiwge30pXHJcbiAgICAgLy8gXCJwcm94eVwiOiBcImh0dHA6Ly8ke1JFQUNUX0FQUF9uZ3Jva0JhY2t9Lm5ncm9rLmlvXCIsXHJcblxyXG5cclxuICAgICAgLy9heGlvcy5wdXQoXCJsb2NhbGhvc3Q6NTAwMC9oYW5kbGVcIiwge30pXHJcblxyXG4gICAgICAvKi50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuICAgICAgICBjb25zb2xlLmxvZygneXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXknKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICB9KSovXHJcblxyXG5cclxuICAgICAgLyogdmFyIHNxbCA9IFwiVVBEQVRFIG9yZGVycyBTRVQgb3JkZXJfc3RhdGUgPSA2IFdIRVJFIG9yZGVyX2lkPTFcIjtcclxuICAgICAgICBjb24ucXVlcnkoc3FsLCBmdW5jdGlvbiAoZXJyLCByZXN1bHQpIHtcclxuICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5hZmZlY3RlZFJvd3MgKyBcIiByZWNvcmQocykgdXBkYXRlZFwiKTtcclxuICAgICAgICB9KTsqL1xyXG4gICAgfTtcclxuICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgY29uc3QgeyBvcHRpb25zLCB2YWx1ZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgdmFyIGN1cnJlbnRJZDtcclxuICAgICAgdmFyIGV0YXRGcm9tU3RvcmU7XHJcbiAgICAgIHZhciB2YWw7XHJcblxyXG4gICAgICBjdXJyZW50SWQgPSB0aGlzLnByb3BzLmlkLFxyXG4gICAgICBldGF0RnJvbVN0b3JlID0gc3RvcmUuZ2V0KCdldGF0JytjdXJyZW50SWQpLFxyXG4gICAgICB2YWwgPSB2YWx1ZTtcclxuXHJcbiAgICAgIC8vcG91ciBzZXR0ZXIgbGEgbGlnbmUgMSAocGFzIGxhIDApIMOgIHVuZGVmaW5lZFxyXG4gICAgICAvL2V0YXRGcm9tU3RvcmUuaWQgPT0gMSA/IGV0YXRGcm9tU3RvcmUgPSB1bmRlZmluZWQgOiAnJyxcclxuXHJcbiAgICAgIGV0YXRGcm9tU3RvcmUgPT0gdW5kZWZpbmVkID8gXHJcbiAgICAgIHN0b3JlLnNldCgnZXRhdCcrY3VycmVudElkLHsgaWQgOiBjdXJyZW50SWQsIGNob2l4IDogdmFsfSkgOiBcclxuICAgICAgdmFsPWV0YXRGcm9tU3RvcmUuY2hvaXg7XHJcbiAgICAgIC8vY29uc29sZS5sb2coJ2V0YXQnICsgY3VycmVudElkKSxcclxuICAgICAgLy9jb25zb2xlLmxvZyhldGF0RnJvbVN0b3JlKVxyXG4gICAgICAvL2NvbnNvbGUubG9nKGV0YXRGcm9tU3RvcmUgPT0gdW5kZWZpbmVkID8gJ3BhcyBkXFwnaWQnIDogZXRhdEZyb21TdG9yZS5pZCksXHJcblxyXG5cclxuXHJcbiAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMnKVxyXG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMpXHJcblxyXG4gIFxyXG5cclxuICAgICAvLyA8c2VsZWN0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3ZhbHVlfT5cclxuXHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dmFsfT5cclxuICAgICAgICAgICAge29wdGlvbnMubWFwKGl0ZW0gPT4gKFxyXG5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuIFxyXG4gICAgICAgICAgICAgIC8qY29uc29sZS5sb2coJ2V0YXQnK2N1cnJlbnRJZCksXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXRhdEZyb21TdG9yZSksXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXRhdEZyb21TdG9yZSA9PSB1bmRlZmluZWQpLFxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV0YXRGcm9tU3RvcmUgPT0gdW5kZWZpbmVkID8gJ3BhcyBkXFwnaWQnIDogZXRhdEZyb21TdG9yZS5pZCksXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXRhdEZyb21TdG9yZSA9PSB1bmRlZmluZWQgPyAncGFzIGRlIGNob2l4IGNob2lzaScgOiBldGF0RnJvbVN0b3JlLmNob2l4KSxcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIm9wdGlvblwiKSxcclxuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGl0ZW0pLFxyXG4gICAgICAgICAgICAgIC8vY29uc29sZS5sb2coe3ZhbHVlfSksXHJcbiAgICAgICAgICAgICAgLypjb25zb2xlLmxvZyh0aGlzKSwqL1xyXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpdGVtLnZhbHVlfSB2YWx1ZT17aXRlbS52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPGgxPkZhdm9yaXRlIGxldHRlcjoge3ZhbHVlfTwvaDE+XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbiAgZXhwb3J0IGRlZmF1bHQgU2VsZWN0OyJdLCJzb3VyY2VSb290IjoiIn0=