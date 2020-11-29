webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg'; //const Index = () => (

var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      open: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleSelection", function (resources) {
      var idsFromResources = resources.selection.map(function (product) {
        return product.id;
      });

      _this.setState({
        open: false
      }); //console.log(resources)


      console.log(idsFromResources);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Page"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__["TitleBar"], {
          title: "Sample App",
          primaryAction: {
            content: 'Select products',
            onAction: function onAction() {
              return _this2.setState({
                open: true
              });
            }
          }
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__["ResourcePicker"], {
          resourceType: "Product",
          showVariants: false,
          open: this.state.open,
          onSelection: function onSelection(resources) {
            return _this2.handleSelection(resources);
          },
          onCancel: function onCancel() {
            return _this2.setState({
              open: false
            });
          }
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Layout"], {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["EmptyState"], {
            heading: "Discount your products temporarily",
            action: {
              content: 'Select products',
              //onAction: () => console.log('clicked'),
              onAction: function onAction() {
                return _this2.setState({
                  open: true
                });
              }
            },
            image: img,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("p", {
              children: "Select products to change their price temporarily."
            })
          })
        })]
      });
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW1nIiwiSW5kZXgiLCJvcGVuIiwicmVzb3VyY2VzIiwiaWRzRnJvbVJlc291cmNlcyIsInNlbGVjdGlvbiIsIm1hcCIsInByb2R1Y3QiLCJpZCIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbnRlbnQiLCJvbkFjdGlvbiIsInN0YXRlIiwiaGFuZGxlU2VsZWN0aW9uIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLEdBQUcsR0FBRyxtRUFBWixDLENBRU07O0lBQ01DLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0s7QUFBRUMsVUFBSSxFQUFFO0FBQVIsSzs7ME5Ba0NXLFVBQUNDLFNBQUQsRUFBZTtBQUMvQixVQUFNQyxnQkFBZ0IsR0FBR0QsU0FBUyxDQUFDRSxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixVQUFDQyxPQUFEO0FBQUEsZUFBYUEsT0FBTyxDQUFDQyxFQUFyQjtBQUFBLE9BQXhCLENBQXpCOztBQUNBLFlBQUtDLFFBQUwsQ0FBYztBQUFFUCxZQUFJLEVBQUU7QUFBUixPQUFkLEVBRitCLENBRy9COzs7QUFDQVEsYUFBTyxDQUFDQyxHQUFSLENBQVlQLGdCQUFaO0FBQ0QsSzs7Ozs7Ozs2QkF0Q087QUFBQTs7QUFDUCwwQkFDTCwrREFBQyxxREFBRDtBQUFBLGdDQUNFLDhEQUFDLGtFQUFEO0FBQ0YsZUFBSyxFQUFDLFlBREo7QUFFRix1QkFBYSxFQUFFO0FBQ2JRLG1CQUFPLEVBQUUsaUJBREk7QUFFYkMsb0JBQVEsRUFBRTtBQUFBLHFCQUFNLE1BQUksQ0FBQ0osUUFBTCxDQUFjO0FBQUVQLG9CQUFJLEVBQUU7QUFBUixlQUFkLENBQU47QUFBQTtBQUZHO0FBRmIsVUFERixlQVFGLDhEQUFDLHdFQUFEO0FBQ00sc0JBQVksRUFBQyxTQURuQjtBQUVNLHNCQUFZLEVBQUUsS0FGcEI7QUFHTSxjQUFJLEVBQUUsS0FBS1ksS0FBTCxDQUFXWixJQUh2QjtBQUlNLHFCQUFXLEVBQUUscUJBQUNDLFNBQUQ7QUFBQSxtQkFBZSxNQUFJLENBQUNZLGVBQUwsQ0FBcUJaLFNBQXJCLENBQWY7QUFBQSxXQUpuQjtBQUtNLGtCQUFRLEVBQUU7QUFBQSxtQkFBTSxNQUFJLENBQUNNLFFBQUwsQ0FBYztBQUFFUCxrQkFBSSxFQUFFO0FBQVIsYUFBZCxDQUFOO0FBQUE7QUFMaEIsVUFSRSxlQWVFLDhEQUFDLHVEQUFEO0FBQUEsaUNBQ0UsOERBQUMsMkRBQUQ7QUFDRSxtQkFBTyxFQUFDLG9DQURWO0FBRUUsa0JBQU0sRUFBRTtBQUNOVSxxQkFBTyxFQUFFLGlCQURIO0FBRU47QUFDQUMsc0JBQVEsRUFBRTtBQUFBLHVCQUFNLE1BQUksQ0FBQ0osUUFBTCxDQUFjO0FBQUVQLHNCQUFJLEVBQUU7QUFBUixpQkFBZCxDQUFOO0FBQUE7QUFISixhQUZWO0FBT0UsaUJBQUssRUFBRUYsR0FQVDtBQUFBLG1DQVNFO0FBQUE7QUFBQTtBQVRGO0FBREYsVUFmRjtBQUFBLFFBREs7QUErQkE7Ozs7RUFsQ2VnQiw2Q0FBSyxDQUFDQyxTOztBQTBDakJoQixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mZWFhYzU2MDA4N2MxY2NkYmM1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW1wdHlTdGF0ZSwgTGF5b3V0LCBQYWdlIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCB7IFJlc291cmNlUGlja2VyLCBUaXRsZUJhciB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3QnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5jb25zdCBpbWcgPSAnaHR0cHM6Ly9jZG4uc2hvcGlmeS5jb20vcy9maWxlcy8xLzA3NTcvOTk1NS9maWxlcy9lbXB0eS1zdGF0ZS5zdmcnO1xyXG5cclxuICAgICAgLy9jb25zdCBJbmRleCA9ICgpID0+IChcclxuICAgICAgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgICAgICBzdGF0ZSA9IHsgb3BlbjogZmFsc2UgfTtcclxuICAgICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgIDxQYWdlPlxyXG4gICAgICAgIDxUaXRsZUJhclxyXG4gICAgICB0aXRsZT1cIlNhbXBsZSBBcHBcIlxyXG4gICAgICBwcmltYXJ5QWN0aW9uPXt7XHJcbiAgICAgICAgY29udGVudDogJ1NlbGVjdCBwcm9kdWN0cycsXHJcbiAgICAgICAgb25BY3Rpb246ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pLFxyXG4gICAgICB9fVxyXG4gICAgLz5cclxuICAgIDxSZXNvdXJjZVBpY2tlclxyXG4gICAgICAgICAgcmVzb3VyY2VUeXBlPVwiUHJvZHVjdFwiXHJcbiAgICAgICAgICBzaG93VmFyaWFudHM9e2ZhbHNlfVxyXG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxyXG4gICAgICAgICAgb25TZWxlY3Rpb249eyhyZXNvdXJjZXMpID0+IHRoaXMuaGFuZGxlU2VsZWN0aW9uKHJlc291cmNlcyl9XHJcbiAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgIDxFbXB0eVN0YXRlXHJcbiAgICAgICAgICAgIGhlYWRpbmc9XCJEaXNjb3VudCB5b3VyIHByb2R1Y3RzIHRlbXBvcmFyaWx5XCJcclxuICAgICAgICAgICAgYWN0aW9uPXt7XHJcbiAgICAgICAgICAgICAgY29udGVudDogJ1NlbGVjdCBwcm9kdWN0cycsXHJcbiAgICAgICAgICAgICAgLy9vbkFjdGlvbjogKCkgPT4gY29uc29sZS5sb2coJ2NsaWNrZWQnKSxcclxuICAgICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSksXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGltYWdlPXtpbWd9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwPlNlbGVjdCBwcm9kdWN0cyB0byBjaGFuZ2UgdGhlaXIgcHJpY2UgdGVtcG9yYXJpbHkuPC9wPlxyXG4gICAgICAgICAgPC9FbXB0eVN0YXRlPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICA8L1BhZ2U+XHJcbiAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaGFuZGxlU2VsZWN0aW9uID0gKHJlc291cmNlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpZHNGcm9tUmVzb3VyY2VzID0gcmVzb3VyY2VzLnNlbGVjdGlvbi5tYXAoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSlcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNvdXJjZXMpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkc0Zyb21SZXNvdXJjZXMpXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==