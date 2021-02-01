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
        value: 444
      }, {
        name: 'B',
        value: 333
      }, {
        name: 'C',
        value: 222
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
      console.log("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZz");
      console.log(event.target.value);
      console.log(event.target.value == "Select…");
      console.log(event.target.value === "Select…");
      var orderState = event.target.value == "Select…" ? null : event.target.value;
      console.log(orderState); //console.log(REACT_APP_ngrokBack)
      //l'id qu'on envoie en params est l'id du select dans la page concernée. il faudra le faire correspondre au vrai ID en fonction de la pagination et du tri de la datatable

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.put("https://63167fceb920.ngrok.io/handle", {
        "order_state": orderState
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWxlY3Rkcm9wLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJTZWxlY3QiLCJvcHRpb25zIiwibmFtZSIsInZhbHVlIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInN0b3JlIiwic2V0IiwicHJvcHMiLCJpZCIsImNob2l4Iiwib3JkZXJTdGF0ZSIsImF4aW9zIiwicHV0IiwicGFyYW1zIiwiaGVhZGVycyIsInN0YXRlIiwiY3VycmVudElkIiwiZXRhdEZyb21TdG9yZSIsInZhbCIsImdldCIsInVuZGVmaW5lZCIsImhhbmRsZUNoYW5nZSIsIm1hcCIsIml0ZW0iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUs7QUFHTDtBQUNBOztBQUNBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWixFLENBQ0E7QUFFQTs7SUFDTUMsTTs7Ozs7Ozs7Ozs7Ozs7OztnVUFDTTtBQUNOQyxhQUFPLEVBQUUsQ0FDUDtBQUNFQyxZQUFJLEVBQUUsU0FEUjtBQUVFQyxhQUFLLEVBQUU7QUFGVCxPQURPLEVBS1A7QUFDRUQsWUFBSSxFQUFFLEdBRFI7QUFFRUMsYUFBSyxFQUFFO0FBRlQsT0FMTyxFQVNQO0FBQ0VELFlBQUksRUFBRSxHQURSO0FBRUVDLGFBQUssRUFBRTtBQUZULE9BVE8sRUFhUDtBQUNFRCxZQUFJLEVBQUUsR0FEUjtBQUVFQyxhQUFLLEVBQUU7QUFGVCxPQWJPLENBREg7QUFtQk5BLFdBQUssRUFBRTtBQW5CRCxLOzt1VUF5Qk8sVUFBQ0MsS0FBRCxFQUFXO0FBQ3hCLFlBQUtDLFFBQUwsQ0FBYztBQUFFRixhQUFLLEVBQUVDLEtBQUssQ0FBQ0UsTUFBTixDQUFhSDtBQUF0QixPQUFkLEVBRHdCLENBRXpCO0FBQ0M7OztBQUNBSSxzREFBSyxDQUFDQyxHQUFOLENBQVUsU0FBTyxNQUFLQyxLQUFMLENBQVdDLEVBQTVCLEVBQWdDO0FBQUVBLFVBQUUsRUFBRyxNQUFLRCxLQUFMLENBQVdDLEVBQWxCO0FBQXNCQyxhQUFLLEVBQUdQLEtBQUssQ0FBQ0UsTUFBTixDQUFhSDtBQUEzQyxPQUFoQztBQUNBTCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxzQ0FBWjtBQUNBRCxhQUFPLENBQUNDLEdBQVIsQ0FBWUssS0FBSyxDQUFDRSxNQUFOLENBQWFILEtBQXpCO0FBQ0FMLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSyxLQUFLLENBQUNFLE1BQU4sQ0FBYUgsS0FBYixJQUFzQixTQUFsQztBQUNBTCxhQUFPLENBQUNDLEdBQVIsQ0FBWUssS0FBSyxDQUFDRSxNQUFOLENBQWFILEtBQWIsS0FBdUIsU0FBbkM7QUFFQSxVQUFJUyxVQUFVLEdBQUlSLEtBQUssQ0FBQ0UsTUFBTixDQUFhSCxLQUFiLElBQXNCLFNBQXZCLEdBQW9DLElBQXBDLEdBQTJDQyxLQUFLLENBQUNFLE1BQU4sQ0FBYUgsS0FBekU7QUFDQUwsYUFBTyxDQUFDQyxHQUFSLENBQVlhLFVBQVosRUFYd0IsQ0FjeEI7QUFFQTs7QUFDQUMsa0RBQUssQ0FBQ0MsR0FBTixDQUNFLHNDQURGLEVBRUU7QUFBQyx1QkFBZ0JGO0FBQWpCLE9BRkYsRUFHRTtBQUFDRyxjQUFNLEVBQUU7QUFBRUwsWUFBRSxFQUFDLE1BQUtELEtBQUwsQ0FBV0MsRUFBWCxHQUFjO0FBQW5CLFNBQVQ7QUFBaUNNLGVBQU8sRUFBRTtBQUFDLDBCQUFnQjtBQUFqQjtBQUExQyxPQUhGLEVBakJ3QixDQXdCeEI7QUFDRDtBQUdDOztBQUVBO0FBQ047QUFDQTtBQUNBOztBQUdNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDSyxLOzs7Ozs7OzZCQUVRO0FBQUEsd0JBQ29CLEtBQUtDLEtBRHpCO0FBQUEsVUFDQ2hCLE9BREQsZUFDQ0EsT0FERDtBQUFBLFVBQ1VFLEtBRFYsZUFDVUEsS0FEVjtBQUVQLFVBQUllLFNBQUo7QUFDQSxVQUFJQyxhQUFKO0FBQ0EsVUFBSUMsR0FBSjtBQUVBRixlQUFTLEdBQUcsS0FBS1QsS0FBTCxDQUFXQyxFQUF2QixFQUNBUyxhQUFhLEdBQUdaLGdEQUFLLENBQUNjLEdBQU4sQ0FBVSxTQUFPSCxTQUFqQixDQURoQixFQUVBRSxHQUFHLEdBQUdqQixLQUZOLENBTk8sQ0FVUDtBQUNBOztBQUVBZ0IsbUJBQWEsSUFBSUcsU0FBakIsR0FDQWYsZ0RBQUssQ0FBQ0MsR0FBTixDQUFVLFNBQU9VLFNBQWpCLEVBQTJCO0FBQUVSLFVBQUUsRUFBR1EsU0FBUDtBQUFrQlAsYUFBSyxFQUFHUztBQUExQixPQUEzQixDQURBLEdBRUFBLEdBQUcsR0FBQ0QsYUFBYSxDQUFDUixLQUZsQixDQWJPLENBZ0JQO0FBQ0E7QUFDQTtBQUlEO0FBQ0M7QUFJRDs7QUFHQywwQkFDRSwrREFBQyw4Q0FBRDtBQUFBLGdDQUNFO0FBQVEsa0JBQVEsRUFBRSxLQUFLWSxZQUF2QjtBQUFxQyxlQUFLLEVBQUVILEdBQTVDO0FBQUEsb0JBQ0duQixPQUFPLENBQUN1QixHQUFSLENBQVksVUFBQUMsSUFBSTtBQUFBO0FBQUE7O0FBS2Y7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2M7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFBeUIscUJBQUssRUFBRUEsSUFBSSxDQUFDdEIsS0FBckM7QUFBQSwwQkFDR3NCLElBQUksQ0FBQ3ZCO0FBRFIsaUJBQWF1QixJQUFJLENBQUN0QixLQUFsQjtBQWZlO0FBQUEsV0FBaEI7QUFESCxVQURGLGVBc0JFO0FBQUEsMENBQXNCQSxLQUF0QjtBQUFBLFVBdEJGO0FBQUEsUUFERjtBQTBCRDs7OztFQTdIZ0J1Qiw0Q0FBSyxDQUFDQyxTOztBQStIVjNCLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRiMDE3ZjUzZDI0YmQ1NjNlNjNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnc3RvcmUtanMnO1xyXG5cclxuLypjb25zdCBkb3RlbnYgPSByZXF1aXJlKCdkb3RlbnYnKTtcclxuY29uc3QgbmV4dCA9IHJlcXVpcmUoJ25leHQnKTtcclxuZG90ZW52LmNvbmZpZygpO1xyXG5jb25zdCBkZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nO1xyXG5jb25zdCBhcHAgPSBuZXh0KHsgZGV2IH0pO1xyXG5jb25zdCB7IFJFQUNUX0FQUF9uZ3Jva0JhY2sgfSA9IHByb2Nlc3MuZW52O1xyXG5cclxuYXBwLnByZXBhcmUoKS50aGVuKCgpID0+IHtcclxuICBjb25zb2xlLmxvZyhcImluIGFwcCBwcmVwYXJlXCIpXHJcbiAgY29uc29sZS5sb2coUkVBQ1RfQVBQX25ncm9rQmFjaylcclxufSk7Ki8vL1xyXG5cclxuXHJcbi8vY29uc3Qge1JFQUNUX0FQUF9uZ3Jva0JhY2t9ID0gcHJvY2Vzcy5lbnY7XHJcbi8vY29uc3Qgbmdyb2tCYWNrID0gUkVBQ1RfQVBQX25ncm9rQmFjaztcclxuY29uc29sZS5sb2coJ1lBVEFBQUFBQUFBQUFBQUFBQUFBQUFBQScpXHJcbi8vY29uc29sZS5sb2coIFJFQUNUX0FQUF9uZ3Jva0JhY2sgKTtcclxuXHJcbi8vY2xhc3MgU2VsZWN0IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcbmNsYXNzIFNlbGVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ1NlbGVjdOKApicsXHJcbiAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICdBJyxcclxuICAgICAgICAgIHZhbHVlOiA0NDQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAnQicsXHJcbiAgICAgICAgICB2YWx1ZTogMzMzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ0MnLFxyXG4gICAgICAgICAgdmFsdWU6IDIyMixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICB2YWx1ZTogJz8nLFxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgXHJcbiAgXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcy5pZClcclxuICAgICAgLy9jb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgIHN0b3JlLnNldCgnZXRhdCcrdGhpcy5wcm9wcy5pZCwgeyBpZCA6IHRoaXMucHJvcHMuaWQsIGNob2l4IDogZXZlbnQudGFyZ2V0LnZhbHVlfSlcclxuICAgICAgY29uc29sZS5sb2coXCJaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWnpcIilcclxuICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUgPT0gXCJTZWxlY3TigKZcIilcclxuICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlID09PSBcIlNlbGVjdOKAplwiKVxyXG5cclxuICAgICAgdmFyIG9yZGVyU3RhdGUgPSAoZXZlbnQudGFyZ2V0LnZhbHVlID09IFwiU2VsZWN04oCmXCIpID8gbnVsbCA6IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgY29uc29sZS5sb2cob3JkZXJTdGF0ZSlcclxuXHJcblxyXG4gICAgICAvL2NvbnNvbGUubG9nKFJFQUNUX0FQUF9uZ3Jva0JhY2spXHJcblxyXG4gICAgICAvL2wnaWQgcXUnb24gZW52b2llIGVuIHBhcmFtcyBlc3QgbCdpZCBkdSBzZWxlY3QgZGFucyBsYSBwYWdlIGNvbmNlcm7DqWUuIGlsIGZhdWRyYSBsZSBmYWlyZSBjb3JyZXNwb25kcmUgYXUgdnJhaSBJRCBlbiBmb25jdGlvbiBkZSBsYSBwYWdpbmF0aW9uIGV0IGR1IHRyaSBkZSBsYSBkYXRhdGFibGVcclxuICAgICAgYXhpb3MucHV0KFxyXG4gICAgICAgIFwiaHR0cHM6Ly82MzE2N2ZjZWI5MjAubmdyb2suaW8vaGFuZGxlXCIsIFxyXG4gICAgICAgIHtcIm9yZGVyX3N0YXRlXCIgOiBvcmRlclN0YXRlfSwgXHJcbiAgICAgICAge3BhcmFtczogeyBpZDp0aGlzLnByb3BzLmlkKzEgfSwgaGVhZGVyczoge1wiQ29udGVudC1UeXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJ319XHJcbiAgICApXHJcblxyXG5cclxuICAgICAgLy9heGlvcy5wdXQoXCJodHRwczovL1wiK1JFQUNUX0FQUF9uZ3Jva0JhY2srXCIubmdyb2suaW8vaGFuZGxlXCIsIHt9KVxyXG4gICAgIC8vIFwicHJveHlcIjogXCJodHRwOi8vJHtSRUFDVF9BUFBfbmdyb2tCYWNrfS5uZ3Jvay5pb1wiLFxyXG5cclxuXHJcbiAgICAgIC8vYXhpb3MucHV0KFwibG9jYWxob3N0OjUwMDAvaGFuZGxlXCIsIHt9KVxyXG5cclxuICAgICAgLyoudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3l5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5JylcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgfSkqL1xyXG5cclxuXHJcbiAgICAgIC8qIHZhciBzcWwgPSBcIlVQREFURSBvcmRlcnMgU0VUIG9yZGVyX3N0YXRlID0gNiBXSEVSRSBvcmRlcl9pZD0xXCI7XHJcbiAgICAgICAgY29uLnF1ZXJ5KHNxbCwgZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7XHJcbiAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuYWZmZWN0ZWRSb3dzICsgXCIgcmVjb3JkKHMpIHVwZGF0ZWRcIik7XHJcbiAgICAgICAgfSk7Ki9cclxuICAgIH07XHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHsgb3B0aW9ucywgdmFsdWUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgIHZhciBjdXJyZW50SWQ7XHJcbiAgICAgIHZhciBldGF0RnJvbVN0b3JlO1xyXG4gICAgICB2YXIgdmFsO1xyXG5cclxuICAgICAgY3VycmVudElkID0gdGhpcy5wcm9wcy5pZCxcclxuICAgICAgZXRhdEZyb21TdG9yZSA9IHN0b3JlLmdldCgnZXRhdCcrY3VycmVudElkKSxcclxuICAgICAgdmFsID0gdmFsdWU7XHJcblxyXG4gICAgICAvL3BvdXIgc2V0dGVyIGxhIGxpZ25lIDEgKHBhcyBsYSAwKSDDoCB1bmRlZmluZWRcclxuICAgICAgLy9ldGF0RnJvbVN0b3JlLmlkID09IDEgPyBldGF0RnJvbVN0b3JlID0gdW5kZWZpbmVkIDogJycsXHJcblxyXG4gICAgICBldGF0RnJvbVN0b3JlID09IHVuZGVmaW5lZCA/IFxyXG4gICAgICBzdG9yZS5zZXQoJ2V0YXQnK2N1cnJlbnRJZCx7IGlkIDogY3VycmVudElkLCBjaG9peCA6IHZhbH0pIDogXHJcbiAgICAgIHZhbD1ldGF0RnJvbVN0b3JlLmNob2l4O1xyXG4gICAgICAvL2NvbnNvbGUubG9nKCdldGF0JyArIGN1cnJlbnRJZCksXHJcbiAgICAgIC8vY29uc29sZS5sb2coZXRhdEZyb21TdG9yZSlcclxuICAgICAgLy9jb25zb2xlLmxvZyhldGF0RnJvbVN0b3JlID09IHVuZGVmaW5lZCA/ICdwYXMgZFxcJ2lkJyA6IGV0YXRGcm9tU3RvcmUuaWQpLFxyXG5cclxuXHJcblxyXG4gICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzJylcclxuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzKVxyXG5cclxuICBcclxuXHJcbiAgICAgLy8gPHNlbGVjdCBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt2YWx1ZX0+XHJcblxyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3ZhbH0+XHJcbiAgICAgICAgICAgIHtvcHRpb25zLm1hcChpdGVtID0+IChcclxuXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiBcclxuICAgICAgICAgICAgICAvKmNvbnNvbGUubG9nKCdldGF0JytjdXJyZW50SWQpLFxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV0YXRGcm9tU3RvcmUpLFxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV0YXRGcm9tU3RvcmUgPT0gdW5kZWZpbmVkKSxcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldGF0RnJvbVN0b3JlID09IHVuZGVmaW5lZCA/ICdwYXMgZFxcJ2lkJyA6IGV0YXRGcm9tU3RvcmUuaWQpLFxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV0YXRGcm9tU3RvcmUgPT0gdW5kZWZpbmVkID8gJ3BhcyBkZSBjaG9peCBjaG9pc2knIDogZXRhdEZyb21TdG9yZS5jaG9peCksXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJvcHRpb25cIiksXHJcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhpdGVtKSxcclxuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHt2YWx1ZX0pLFxyXG4gICAgICAgICAgICAgIC8qY29uc29sZS5sb2codGhpcyksKi9cclxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aXRlbS52YWx1ZX0gdmFsdWU9e2l0ZW0udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDxoMT5GYXZvcml0ZSBsZXR0ZXI6IHt2YWx1ZX08L2gxPlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGV4cG9ydCBkZWZhdWx0IFNlbGVjdDsiXSwic291cmNlUm9vdCI6IiJ9