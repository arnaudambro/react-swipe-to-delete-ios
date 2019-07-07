"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dot = exports.Item = exports.Container = exports.GlobalStyle = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  height: ", "px;\n  line-height: ", "px;\n  border-bottom: 1px solid grey;\n  padding-left: 10px;\n  background: white;\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  height: ", "px;\n  width: ", "px;\n  margin-right: ", "px;\n  background-color: ", ";\n  border-radius: 50%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  body, html {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n    color: #111;\n    font-family: sans-serif;\n    box-sizing: border-box;\n    position: relative;\n  }\n\n  body {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    min-height: 750px;\n  }\n\n  a#back-to-github {\n    position: absolute;\n    width: 200px;\n    background: #111;\n    color: white;\n    height: 30px;\n    top: 35px;\n    right: -50px;\n    transform: rotate(45deg);\n    text-align: center;\n    line-height: 30px;\n    text-decoration: none;\n  }\n\n  #root {\n    max-width: 100%;\n    width: 300px;\n    border: 1px solid #111;\n    max-height: 400px;\n    overflow: auto;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject());
exports.GlobalStyle = GlobalStyle;

var Container = _styledComponents.default.div(_templateObject2());

exports.Container = Container;

var Dot = _styledComponents.default.div(_templateObject3(), function (_ref) {
  var itemHeight = _ref.itemHeight;
  return itemHeight * 0.5;
}, function (_ref2) {
  var itemHeight = _ref2.itemHeight;
  return itemHeight * 0.5;
}, function (_ref3) {
  var itemHeight = _ref3.itemHeight;
  return itemHeight;
}, function (_ref4) {
  var color = _ref4.color;
  return color;
});

exports.Dot = Dot;

var Item = _styledComponents.default.span(_templateObject4(), function (_ref5) {
  var itemHeight = _ref5.itemHeight;
  return itemHeight;
}, function (_ref6) {
  var itemHeight = _ref6.itemHeight;
  return itemHeight;
});

exports.Item = Item;