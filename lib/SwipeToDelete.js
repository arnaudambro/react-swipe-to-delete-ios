"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("./helpers");

var _styles = require("./styles");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SwipeToDelete = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(SwipeToDelete, _React$Component);

  var _super = _createSuper(SwipeToDelete);

  function SwipeToDelete() {
    var _this;

    (0, _classCallCheck2.default)(this, SwipeToDelete);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      touching: null,
      translate: 0,
      deleting: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onMouseDown", function (e) {
      if (_this.props.disabled) return;
      if (_this.state.touching) return;
      _this.startTouchPosition = (0, _helpers.cursorPosition)(e);
      _this.initTranslate = _this.state.translate;

      _this.setState({
        touching: true
      }, function () {
        _this.addEventListenerToMoveAndUp();
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "addEventListenerToMoveAndUp", function () {
      var remove = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (remove) {
        window.removeEventListener('mousemove', _this.onMouseMove);
        window.removeEventListener('touchmove', _this.onMouseMove);
        window.removeEventListener('mouseup', _this.onMouseUp);
        window.removeEventListener('touchend', _this.onMouseUp);
      } else {
        window.addEventListener('mousemove', _this.onMouseMove);
        window.addEventListener('touchmove', _this.onMouseMove);
        window.addEventListener('mouseup', _this.onMouseUp);
        window.addEventListener('touchend', _this.onMouseUp);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onMouseMove", function (e) {
      var rtl = _this.props.rtl;

      if (!_this.state.touching) {
        return (0, _helpers.cursorPosition)(e);
      }

      if (!rtl && (0, _helpers.cursorPosition)(e) > _this.startTouchPosition - _this.initTranslate || rtl && (0, _helpers.cursorPosition)(e) < _this.startTouchPosition - _this.initTranslate) {
        _this.setState({
          translate: 0
        });

        return;
      }

      _this.setState({
        translate: (0, _helpers.cursorPosition)(e) - _this.startTouchPosition + _this.initTranslate
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onMouseUp", function () {
      _this.startTouchPosition = null;
      var _this$props = _this.props,
          deleteWidth = _this$props.deleteWidth,
          rtl = _this$props.rtl;
      var newState = {
        touching: false
      };
      var acceptableMove = -deleteWidth * 0.7;
      var showDelete = (rtl ? -1 : 1) * _this.state.translate < acceptableMove;
      var notShowDelete = (rtl ? -1 : 1) * _this.state.translate >= acceptableMove;
      var deleteWithoutConfirm = (rtl ? 1 : -1) * _this.state.translate >= _this.deleteWithoutConfirmThreshold;
      if (deleteWithoutConfirm) newState.translate = -_this.containerWidth;
      if (notShowDelete) newState.translate = 0;
      if (showDelete && !deleteWithoutConfirm) newState.translate = (rtl ? 1 : -1) * deleteWidth;

      _this.setState(newState, function () {
        if (deleteWithoutConfirm) _this.onDeleteClick();
      });

      _this.addEventListenerToMoveAndUp(true);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onDeleteClick", function () {
      var _this$props2 = _this.props,
          transitionDuration = _this$props2.transitionDuration,
          onDelete = _this$props2.onDelete;

      _this.setState({
        deleting: true
      }, function () {
        window.setTimeout(function () {
          onDelete();
        }, transitionDuration);
      });
    });
    return _this;
  }

  (0, _createClass2.default)(SwipeToDelete, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // to get ref dimensions
      this.forceUpdate();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.addEventListenerToMoveAndUp(true);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          translate = _this$state.translate,
          touching = _this$state.touching,
          deleting = _this$state.deleting;
      var _this$props3 = this.props,
          deleteWidth = _this$props3.deleteWidth,
          transitionDuration = _this$props3.transitionDuration,
          deleteText = _this$props3.deleteText,
          deleteComponent = _this$props3.deleteComponent,
          deleteColor = _this$props3.deleteColor,
          height = _this$props3.height,
          rtl = _this$props3.rtl;
      var cssParams = {
        deleteWidth: deleteWidth,
        transitionDuration: transitionDuration,
        deleteColor: deleteColor,
        heightProp: height,
        rtl: rtl
      };
      var shiftDelete = -translate >= this.deleteWithoutConfirmThreshold;
      return /*#__PURE__*/_react.default.createElement(_styles.Container, (0, _extends2.default)({
        deleting: deleting,
        id: "delete-container"
      }, cssParams, {
        ref: function ref(c) {
          if (c) {
            _this2.container = c;
            _this2.containerWidth = c.getBoundingClientRect().width;
            _this2.deleteWithoutConfirmThreshold = _this2.containerWidth * 0.75;
          }
        }
      }), /*#__PURE__*/_react.default.createElement(_styles.Delete, (0, _extends2.default)({
        id: "delete",
        buttonMargin: shiftDelete ? this.containerWidth + translate : this.containerWidth - deleteWidth
      }, cssParams), /*#__PURE__*/_react.default.createElement("button", {
        id: "delete-button",
        onClick: this.onDeleteClick
      }, deleteComponent ? deleteComponent : deleteText)), /*#__PURE__*/_react.default.createElement(_styles.Content, (0, _extends2.default)({}, cssParams, {
        id: "delete-content",
        deleting: deleting,
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onMouseDown,
        translate: translate,
        transition: !touching
      }), this.props.children));
    }
  }]);
  return SwipeToDelete;
}(_react.default.Component);

SwipeToDelete.propTypes = {
  onDelete: _propTypes.default.func.isRequired,
  height: _propTypes.default.number.isRequired,
  transitionDuration: _propTypes.default.number,
  deleteWidth: _propTypes.default.number,
  deleteColor: _propTypes.default.string,
  deleteText: _propTypes.default.string,
  deleteComponent: _propTypes.default.node,
  disabled: _propTypes.default.bool,
  rtl: _propTypes.default.bool
};
SwipeToDelete.defaultProps = {
  transitionDuration: 250,
  deleteWidth: 75,
  deleteColor: 'rgba(252, 58, 48, 1.00)',
  deleteText: 'Delete',
  disabled: false,
  rtl: false
};
var _default = SwipeToDelete;
exports.default = _default;