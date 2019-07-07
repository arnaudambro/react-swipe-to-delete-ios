"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cursorPosition = void 0;

var cursorPosition = function cursorPosition(event) {
  return event.touches ? event.touches[0].clientX : event.clientX;
};

exports.cursorPosition = cursorPosition;