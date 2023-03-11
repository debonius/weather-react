'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Search;
function Search() {
  return /*#__PURE__*/React.createElement("form", {
    id: "form",
    action: ""
  }, /*#__PURE__*/React.createElement("input", {
    id: "input-city",
    list: "results",
    type: "text",
    placeholder: "search City",
    "aria-label": "form"
  }), /*#__PURE__*/React.createElement("input", {
    id: "btn",
    type: "submit",
    hidden: true
  }));
}
var rootNode = document.getElementById('app');
var root = ReactDOM.createRoot(rootNode);
root.render( /*#__PURE__*/React.createElement(Search, null));