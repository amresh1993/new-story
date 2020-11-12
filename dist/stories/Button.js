"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

require("./button.css");

/**
 * Primary UI component for user interaction
 */
var Button = function Button(_ref) {
  var primary = _ref.primary,
      _ref$backgroundColor = _ref.backgroundColor,
      backgroundColor = _ref$backgroundColor === void 0 ? "blue" : _ref$backgroundColor,
      size = _ref.size,
      label = _ref.label,
      props = (0, _objectWithoutProperties2.default)(_ref, ["primary", "backgroundColor", "size", "label"]);

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1]; // console.log(props)


  var mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", null, "Count : ", count), /*#__PURE__*/_react.default.createElement("button", Object.assign({
    type: "button",
    className: ['storybook-button', "storybook-button--".concat(size), mode].join(' '),
    style: {
      backgroundColor: "blue",
      color: "#fff"
    },
    onClick: function onClick() {
      // console.log("clicked")
      setCount(function (oldCount) {
        return oldCount + 1;
      });
    }
  }, props), label));
};

exports.Button = Button;
Button.defaultProps = {
  // backgroundColor: null,
  // primary: false,
  size: 'medium' // onClick: undefined,

};