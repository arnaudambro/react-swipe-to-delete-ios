"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports.default = void 0;

var _SwipeToDelete = _interopRequireDefault(require("./SwipeToDelete"));

var _styles = require("./styles");

Object.keys(_styles).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _styles[key];
    }
  });
});
var _default = _SwipeToDelete.default;
exports.default = _default;