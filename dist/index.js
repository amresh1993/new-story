"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _Button = require("./stories/Button");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./index.css");

var _App = _interopRequireDefault(require("./App"));

var _reportWebVitals = _interopRequireDefault(require("./reportWebVitals"));

// export {Button};
_reactDom.default.render(
/*#__PURE__*/
//   <React.StrictMode>
_react.default.createElement(_Button.Button, {
  label: "Increment"
}), //   </React.StrictMode>,
document.getElementById('root')); // // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();