"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Delete = exports.Content = exports.Container = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

var deletingCss = (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  transition: all ", "ms ease-out;\n  max-height: 0;\n  * {\n    outline: none;\n  }\n"])), function (_ref) {
  var transitionDuration = _ref.transitionDuration;
  return transitionDuration;
});

var Container = _styledComponents.default.div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  height: ", "px;\n  max-height: ", "px;\n  width: auto;\n  position: relative;\n  box-sizing: border-box;\n  ", "\n  *, *:before, *:after {\n    box-sizing: border-box;\n  }\n  overflow: hidden;\n"])), function (_ref2) {
  var heightProp = _ref2.heightProp;
  return heightProp;
}, function (_ref3) {
  var heightProp = _ref3.heightProp;
  return heightProp + 10;
}, function (props) {
  return props.deleting && deletingCss;
});

exports.Container = Container;

var Content = _styledComponents.default.div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  height: 100%;\n  width: auto;\n  position: relative;\n  transform: ", " translateX(", "px);\n  ", "\n"])), function (props) {
  return props.deleting && 'scale(0)';
}, function (_ref4) {
  var translate = _ref4.translate,
      rtl = _ref4.rtl;
  return (rtl ? 1 : 1) * translate;
}, function (props) {
  return props.transition && "transition: transform ".concat(props.transitionDuration, "ms ease-out");
});

exports.Content = Content;

var Delete = _styledComponents.default.div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n  position: absolute;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  background: ", ";\n  font-weight: 400;\n  display: inline-flex;\n  justify-content: flex-start;\n  align-items: center;\n  button {\n    width: ", "px;\n    transition: margin ", "ms ease-in-out;\n   ", ";\n    text-align: center;\n    height: 100%;\n    background: transparent;\n    border: none;\n    color: white;\n    font-size: 1rem;\n    cursor: pointer;\n  }\n"])), function (_ref5) {
  var deleteColor = _ref5.deleteColor;
  return deleteColor;
}, function (_ref6) {
  var deleteWidth = _ref6.deleteWidth;
  return deleteWidth;
}, function (_ref7) {
  var transitionDuration = _ref7.transitionDuration;
  return transitionDuration;
}, function (_ref8) {
  var buttonMargin = _ref8.buttonMargin,
      rtl = _ref8.rtl;
  return "margin-".concat(rtl ? 'right' : 'left', ": ").concat(buttonMargin, "px");
});

exports.Delete = Delete;