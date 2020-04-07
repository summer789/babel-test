"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _set = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set"));

var _setTimeout2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set-timeout"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var fn = function fn(a, b) {
  return a + b;
};

var str = 'str';
var str2 = "".concat(str, "\u2019aaa");
var p = new _promise["default"](function (resolve, reject) {
  (0, _setTimeout2["default"])(function () {
    resolve();
  }, 200);
});
var set = new _set["default"]([1, 2, 3]);
var bool = (0, _includes["default"])(str2).call(str2, 'str');
var array = [1, 2, 4];
var item = (0, _find["default"])(array).call(array, function (item) {
  return item === 1;
}); // str2.padStart(2);

console.log(item);
console.log(bool);