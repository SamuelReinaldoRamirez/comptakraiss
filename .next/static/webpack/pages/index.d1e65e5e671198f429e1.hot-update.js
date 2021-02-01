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
        value: '444'
      }, {
        name: 'B',
        value: '333'
      }, {
        name: 'C',
        value: '222'
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
          "order_state": "" + event.target.value
        }
      }, {
        params: {
          id: _this.props.id + 1
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWxlY3Rkcm9wLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJTZWxlY3QiLCJvcHRpb25zIiwibmFtZSIsInZhbHVlIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInN0b3JlIiwic2V0IiwicHJvcHMiLCJpZCIsImNob2l4IiwiYXhpb3MiLCJwdXQiLCJkYXRhIiwicGFyYW1zIiwiaGVhZGVycyIsInN0YXRlIiwiY3VycmVudElkIiwiZXRhdEZyb21TdG9yZSIsInZhbCIsImdldCIsInVuZGVmaW5lZCIsImhhbmRsZUNoYW5nZSIsIm1hcCIsIml0ZW0iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUs7QUFHTDtBQUNBOztBQUNBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWixFLENBQ0E7QUFFQTs7SUFDTUMsTTs7Ozs7Ozs7Ozs7Ozs7OztnVUFDTTtBQUNOQyxhQUFPLEVBQUUsQ0FDUDtBQUNFQyxZQUFJLEVBQUUsU0FEUjtBQUVFQyxhQUFLLEVBQUU7QUFGVCxPQURPLEVBS1A7QUFDRUQsWUFBSSxFQUFFLEdBRFI7QUFFRUMsYUFBSyxFQUFFO0FBRlQsT0FMTyxFQVNQO0FBQ0VELFlBQUksRUFBRSxHQURSO0FBRUVDLGFBQUssRUFBRTtBQUZULE9BVE8sRUFhUDtBQUNFRCxZQUFJLEVBQUUsR0FEUjtBQUVFQyxhQUFLLEVBQUU7QUFGVCxPQWJPLENBREg7QUFtQk5BLFdBQUssRUFBRTtBQW5CRCxLOzt1VUF5Qk8sVUFBQ0MsS0FBRCxFQUFXO0FBQ3hCLFlBQUtDLFFBQUwsQ0FBYztBQUFFRixhQUFLLEVBQUVDLEtBQUssQ0FBQ0UsTUFBTixDQUFhSDtBQUF0QixPQUFkLEVBRHdCLENBRXpCO0FBQ0M7OztBQUNBSSxzREFBSyxDQUFDQyxHQUFOLENBQVUsU0FBTyxNQUFLQyxLQUFMLENBQVdDLEVBQTVCLEVBQWdDO0FBQUVBLFVBQUUsRUFBRyxNQUFLRCxLQUFMLENBQVdDLEVBQWxCO0FBQXNCQyxhQUFLLEVBQUdQLEtBQUssQ0FBQ0UsTUFBTixDQUFhSDtBQUEzQyxPQUFoQztBQUNBTCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxzQ0FBWixFQUx3QixDQU14QjtBQUVBOztBQUNBYSxrREFBSyxDQUFDQyxHQUFOLENBQ0Usc0NBREYsRUFFRTtBQUFFQyxZQUFJLEVBQUU7QUFBQyx5QkFBZ0IsS0FBR1YsS0FBSyxDQUFDRSxNQUFOLENBQWFIO0FBQWpDO0FBQVIsT0FGRixFQUdFO0FBQUNZLGNBQU0sRUFBRTtBQUFFTCxZQUFFLEVBQUMsTUFBS0QsS0FBTCxDQUFXQyxFQUFYLEdBQWM7QUFBbkIsU0FBVDtBQUFpQ00sZUFBTyxFQUFFO0FBQUMsMEJBQWdCO0FBQWpCO0FBQTFDLE9BSEYsRUFUd0IsQ0FnQnhCO0FBQ0Q7QUFHQzs7QUFFQTtBQUNOO0FBQ0E7QUFDQTs7QUFHTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0ssSzs7Ozs7Ozs2QkFFUTtBQUFBLHdCQUNvQixLQUFLQyxLQUR6QjtBQUFBLFVBQ0NoQixPQURELGVBQ0NBLE9BREQ7QUFBQSxVQUNVRSxLQURWLGVBQ1VBLEtBRFY7QUFFUCxVQUFJZSxTQUFKO0FBQ0EsVUFBSUMsYUFBSjtBQUNBLFVBQUlDLEdBQUo7QUFFQUYsZUFBUyxHQUFHLEtBQUtULEtBQUwsQ0FBV0MsRUFBdkIsRUFDQVMsYUFBYSxHQUFHWixnREFBSyxDQUFDYyxHQUFOLENBQVUsU0FBT0gsU0FBakIsQ0FEaEIsRUFFQUUsR0FBRyxHQUFHakIsS0FGTixDQU5PLENBVVA7QUFDQTs7QUFFQWdCLG1CQUFhLElBQUlHLFNBQWpCLEdBQ0FmLGdEQUFLLENBQUNDLEdBQU4sQ0FBVSxTQUFPVSxTQUFqQixFQUEyQjtBQUFFUixVQUFFLEVBQUdRLFNBQVA7QUFBa0JQLGFBQUssRUFBR1M7QUFBMUIsT0FBM0IsQ0FEQSxHQUVBQSxHQUFHLEdBQUNELGFBQWEsQ0FBQ1IsS0FGbEIsQ0FiTyxDQWdCUDtBQUNBO0FBQ0E7QUFJRDtBQUNDO0FBSUQ7O0FBR0MsMEJBQ0UsK0RBQUMsOENBQUQ7QUFBQSxnQ0FDRTtBQUFRLGtCQUFRLEVBQUUsS0FBS1ksWUFBdkI7QUFBcUMsZUFBSyxFQUFFSCxHQUE1QztBQUFBLG9CQUNHbkIsT0FBTyxDQUFDdUIsR0FBUixDQUFZLFVBQUFDLElBQUk7QUFBQTtBQUFBOztBQUtmO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNjO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQXlCLHFCQUFLLEVBQUVBLElBQUksQ0FBQ3RCLEtBQXJDO0FBQUEsMEJBQ0dzQixJQUFJLENBQUN2QjtBQURSLGlCQUFhdUIsSUFBSSxDQUFDdEIsS0FBbEI7QUFmZTtBQUFBLFdBQWhCO0FBREgsVUFERixlQXNCRTtBQUFBLDBDQUFzQkEsS0FBdEI7QUFBQSxVQXRCRjtBQUFBLFFBREY7QUEwQkQ7Ozs7RUFySGdCdUIsNENBQUssQ0FBQ0MsUzs7QUF1SFYzQixxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMWU2NWU1ZTY3MTE5OGY0MjllMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJztcclxuXHJcbi8qY29uc3QgZG90ZW52ID0gcmVxdWlyZSgnZG90ZW52Jyk7XHJcbmNvbnN0IG5leHQgPSByZXF1aXJlKCduZXh0Jyk7XHJcbmRvdGVudi5jb25maWcoKTtcclxuY29uc3QgZGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJztcclxuY29uc3QgYXBwID0gbmV4dCh7IGRldiB9KTtcclxuY29uc3QgeyBSRUFDVF9BUFBfbmdyb2tCYWNrIH0gPSBwcm9jZXNzLmVudjtcclxuXHJcbmFwcC5wcmVwYXJlKCkudGhlbigoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJpbiBhcHAgcHJlcGFyZVwiKVxyXG4gIGNvbnNvbGUubG9nKFJFQUNUX0FQUF9uZ3Jva0JhY2spXHJcbn0pOyovLy9cclxuXHJcblxyXG4vL2NvbnN0IHtSRUFDVF9BUFBfbmdyb2tCYWNrfSA9IHByb2Nlc3MuZW52O1xyXG4vL2NvbnN0IG5ncm9rQmFjayA9IFJFQUNUX0FQUF9uZ3Jva0JhY2s7XHJcbmNvbnNvbGUubG9nKCdZQVRBQUFBQUFBQUFBQUFBQUFBQUFBQUEnKVxyXG4vL2NvbnNvbGUubG9nKCBSRUFDVF9BUFBfbmdyb2tCYWNrICk7XHJcblxyXG4vL2NsYXNzIFNlbGVjdCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xyXG5jbGFzcyBTZWxlY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICdTZWxlY3TigKYnLFxyXG4gICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAnQScsXHJcbiAgICAgICAgICB2YWx1ZTogJzQ0NCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAnQicsXHJcbiAgICAgICAgICB2YWx1ZTogJzMzMycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAnQycsXHJcbiAgICAgICAgICB2YWx1ZTogJzIyMicsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgdmFsdWU6ICc/JyxcclxuICAgIH07XHJcblxyXG5cclxuICAgIFxyXG4gIFxyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuaWQpXHJcbiAgICAgIC8vY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgICBzdG9yZS5zZXQoJ2V0YXQnK3RoaXMucHJvcHMuaWQsIHsgaWQgOiB0aGlzLnByb3BzLmlkLCBjaG9peCA6IGV2ZW50LnRhcmdldC52YWx1ZX0pXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlp6XCIpXHJcbiAgICAgIC8vY29uc29sZS5sb2coUkVBQ1RfQVBQX25ncm9rQmFjaylcclxuXHJcbiAgICAgIC8vbCdpZCBxdSdvbiBlbnZvaWUgZW4gcGFyYW1zIGVzdCBsJ2lkIGR1IHNlbGVjdCBkYW5zIGxhIHBhZ2UgY29uY2VybsOpZS4gaWwgZmF1ZHJhIGxlIGZhaXJlIGNvcnJlc3BvbmRyZSBhdSB2cmFpIElEIGVuIGZvbmN0aW9uIGRlIGxhIHBhZ2luYXRpb24gZXQgZHUgdHJpIGRlIGxhIGRhdGF0YWJsZVxyXG4gICAgICBheGlvcy5wdXQoXHJcbiAgICAgICAgXCJodHRwczovLzYzMTY3ZmNlYjkyMC5uZ3Jvay5pby9oYW5kbGVcIiwgXHJcbiAgICAgICAgeyBkYXRhOiB7XCJvcmRlcl9zdGF0ZVwiIDogXCJcIitldmVudC50YXJnZXQudmFsdWV9IH0sIFxyXG4gICAgICAgIHtwYXJhbXM6IHsgaWQ6dGhpcy5wcm9wcy5pZCsxIH0sIGhlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiAnYXBwbGljYXRpb24vanNvbid9fVxyXG4gICAgKVxyXG5cclxuXHJcbiAgICAgIC8vYXhpb3MucHV0KFwiaHR0cHM6Ly9cIitSRUFDVF9BUFBfbmdyb2tCYWNrK1wiLm5ncm9rLmlvL2hhbmRsZVwiLCB7fSlcclxuICAgICAvLyBcInByb3h5XCI6IFwiaHR0cDovLyR7UkVBQ1RfQVBQX25ncm9rQmFja30ubmdyb2suaW9cIixcclxuXHJcblxyXG4gICAgICAvL2F4aW9zLnB1dChcImxvY2FsaG9zdDo1MDAwL2hhbmRsZVwiLCB7fSlcclxuXHJcbiAgICAgIC8qLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eScpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgIH0pKi9cclxuXHJcblxyXG4gICAgICAvKiB2YXIgc3FsID0gXCJVUERBVEUgb3JkZXJzIFNFVCBvcmRlcl9zdGF0ZSA9IDYgV0hFUkUgb3JkZXJfaWQ9MVwiO1xyXG4gICAgICAgIGNvbi5xdWVyeShzcWwsIGZ1bmN0aW9uIChlcnIsIHJlc3VsdCkge1xyXG4gICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmFmZmVjdGVkUm93cyArIFwiIHJlY29yZChzKSB1cGRhdGVkXCIpO1xyXG4gICAgICAgIH0pOyovXHJcbiAgICB9O1xyXG4gIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB7IG9wdGlvbnMsIHZhbHVlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICB2YXIgY3VycmVudElkO1xyXG4gICAgICB2YXIgZXRhdEZyb21TdG9yZTtcclxuICAgICAgdmFyIHZhbDtcclxuXHJcbiAgICAgIGN1cnJlbnRJZCA9IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgIGV0YXRGcm9tU3RvcmUgPSBzdG9yZS5nZXQoJ2V0YXQnK2N1cnJlbnRJZCksXHJcbiAgICAgIHZhbCA9IHZhbHVlO1xyXG5cclxuICAgICAgLy9wb3VyIHNldHRlciBsYSBsaWduZSAxIChwYXMgbGEgMCkgw6AgdW5kZWZpbmVkXHJcbiAgICAgIC8vZXRhdEZyb21TdG9yZS5pZCA9PSAxID8gZXRhdEZyb21TdG9yZSA9IHVuZGVmaW5lZCA6ICcnLFxyXG5cclxuICAgICAgZXRhdEZyb21TdG9yZSA9PSB1bmRlZmluZWQgPyBcclxuICAgICAgc3RvcmUuc2V0KCdldGF0JytjdXJyZW50SWQseyBpZCA6IGN1cnJlbnRJZCwgY2hvaXggOiB2YWx9KSA6IFxyXG4gICAgICB2YWw9ZXRhdEZyb21TdG9yZS5jaG9peDtcclxuICAgICAgLy9jb25zb2xlLmxvZygnZXRhdCcgKyBjdXJyZW50SWQpLFxyXG4gICAgICAvL2NvbnNvbGUubG9nKGV0YXRGcm9tU3RvcmUpXHJcbiAgICAgIC8vY29uc29sZS5sb2coZXRhdEZyb21TdG9yZSA9PSB1bmRlZmluZWQgPyAncGFzIGRcXCdpZCcgOiBldGF0RnJvbVN0b3JlLmlkKSxcclxuXHJcblxyXG5cclxuICAgICAvLyBjb25zb2xlLmxvZygndGhpcycpXHJcbiAgICAgIC8vY29uc29sZS5sb2codGhpcylcclxuXHJcbiAgXHJcblxyXG4gICAgIC8vIDxzZWxlY3Qgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dmFsdWV9PlxyXG5cclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt2YWx9PlxyXG4gICAgICAgICAgICB7b3B0aW9ucy5tYXAoaXRlbSA9PiAoXHJcblxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gXHJcbiAgICAgICAgICAgICAgLypjb25zb2xlLmxvZygnZXRhdCcrY3VycmVudElkKSxcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldGF0RnJvbVN0b3JlKSxcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldGF0RnJvbVN0b3JlID09IHVuZGVmaW5lZCksXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXRhdEZyb21TdG9yZSA9PSB1bmRlZmluZWQgPyAncGFzIGRcXCdpZCcgOiBldGF0RnJvbVN0b3JlLmlkKSxcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldGF0RnJvbVN0b3JlID09IHVuZGVmaW5lZCA/ICdwYXMgZGUgY2hvaXggY2hvaXNpJyA6IGV0YXRGcm9tU3RvcmUuY2hvaXgpLFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwib3B0aW9uXCIpLFxyXG4gICAgICAgICAgICAgIC8vY29uc29sZS5sb2coaXRlbSksXHJcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh7dmFsdWV9KSxcclxuICAgICAgICAgICAgICAvKmNvbnNvbGUubG9nKHRoaXMpLCovXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW0udmFsdWV9IHZhbHVlPXtpdGVtLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8aDE+RmF2b3JpdGUgbGV0dGVyOiB7dmFsdWV9PC9oMT5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICBleHBvcnQgZGVmYXVsdCBTZWxlY3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==