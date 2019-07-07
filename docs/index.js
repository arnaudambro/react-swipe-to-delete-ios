"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _App = _interopRequireDefault(require("./demo/App"));

var render = function render() {
  return _reactDom.default.render(_react.default.createElement(_App.default, null), document.getElementById('root'));
};

render();

if (module.hot) {
  module.hot.accept(['./demo/App'], function () {
    render();
  });
}