"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _lib = _interopRequireDefault(require("../lib"));

var itemHeight = 50;

var color = function color() {
  return Math.ceil(Math.random() * 250);
};

var App =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(App, _React$Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(App)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      items: [{
        content: 'Item 1',
        color: "rgba(".concat(color(), ", ").concat(color(), ", ").concat(color(), ", 1)")
      }, {
        content: 'Item 2',
        color: "rgba(".concat(color(), ", ").concat(color(), ", ").concat(color(), ", 1)")
      }, {
        content: 'Item 3',
        color: "rgba(".concat(color(), ", ").concat(color(), ", ").concat(color(), ", 1)")
      }, {
        content: 'Item 4',
        color: "rgba(".concat(color(), ", ").concat(color(), ", ").concat(color(), ", 1)")
      }, {
        content: 'Item 5',
        color: "rgba(".concat(color(), ", ").concat(color(), ", ").concat(color(), ", 1)")
      }, {
        content: 'Item 6',
        color: "rgba(".concat(color(), ", ").concat(color(), ", ").concat(color(), ", 1)")
      }, {
        content: 'Item 7',
        color: "rgba(".concat(color(), ", ").concat(color(), ", ").concat(color(), ", 1)")
      }, {
        content: 'Item 8',
        color: "rgba(".concat(color(), ", ").concat(color(), ", ").concat(color(), ", 1)")
      }, {
        content: 'Item 9',
        color: "rgba(".concat(color(), ", ").concat(color(), ", ").concat(color(), ", 1)")
      }, {
        content: 'Item 10',
        color: "rgba(".concat(color(), ", ").concat(color(), ", ").concat(color(), ", 1)")
      }, {
        content: 'Item 11',
        color: "rgba(".concat(color(), ", ").concat(color(), ", ").concat(color(), ", 1)")
      }, {
        content: 'Item 12',
        color: "rgba(".concat(color(), ", ").concat(color(), ", ").concat(color(), ", 1)")
      }, {
        content: 'Item 13',
        color: "rgba(".concat(color(), ", ").concat(color(), ", ").concat(color(), ", 1)")
      }, {
        content: 'Item 14',
        color: "rgba(".concat(color(), ", ").concat(color(), ", ").concat(color(), ", 1)")
      }]
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleDelete", function (itemToDelete) {
      return _this.setState(function (_ref) {
        var items = _ref.items;
        return {
          items: items.filter(function (item) {
            return item !== itemToDelete;
          })
        };
      });
    });
    return _this;
  }

  (0, _createClass2.default)(App, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement(_styles.Container, null, _react.default.createElement(_styles.GlobalStyle, null), this.state.items.map(function (item) {
        return _react.default.createElement(_lib.default, {
          key: item.content,
          height: itemHeight,
          onDelete: function onDelete() {
            return _this2.handleDelete(item);
          }
        }, _react.default.createElement(_styles.Item, {
          itemHeight: itemHeight
        }, _react.default.createElement(_styles.Dot, {
          itemHeight: itemHeight,
          color: item.color
        }), _react.default.createElement("span", null, item.content)));
      }));
    }
  }]);
  return App;
}(_react.default.Component);

var _default = App;
exports.default = _default;