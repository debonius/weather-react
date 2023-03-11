'use strict';

function App() {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Search, null), /*#__PURE__*/React.createElement(Today, null), /*#__PURE__*/React.createElement(City, null), /*#__PURE__*/React.createElement(Temperature, null), /*#__PURE__*/React.createElement(Panel, null));
}
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
function Today() {
  return /*#__PURE__*/React.createElement("div", {
    "class": "current-date"
  }, /*#__PURE__*/React.createElement("span", {
    id: "time",
    "class": "time"
  }), /*#__PURE__*/React.createElement("span", {
    id: "date",
    "class": "date"
  }));
}
function City() {
  return /*#__PURE__*/React.createElement("div", {
    "class": "city"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "icon"
  }, /*#__PURE__*/React.createElement("img", {
    "class": "weather-icon",
    id: "weather-icon",
    src: "",
    alt: "weather icon"
  }), /*#__PURE__*/React.createElement("span", {
    id: "description",
    "class": "desc"
  }, "no data")), /*#__PURE__*/React.createElement("h1", {
    "class": "location"
  }, "Service unavailable"));
}
function Temperature() {
  return /*#__PURE__*/React.createElement("div", {
    "class": "temp"
  }, /*#__PURE__*/React.createElement("span", {
    "class": "max"
  }, "no data"), /*#__PURE__*/React.createElement("span", {
    "class": "c"
  }, "no data"), /*#__PURE__*/React.createElement("span", {
    id: "feel",
    "class": "feel"
  }, "no data"), /*#__PURE__*/React.createElement("span", {
    "class": "min"
  }, "no data"));
}
function Humidity() {
  return /*#__PURE__*/React.createElement("div", {
    "class": "info-box"
  }, /*#__PURE__*/React.createElement("img", {
    "class": "info-box__icon",
    src: "./images/hum.png",
    alt: "humidity"
  }), /*#__PURE__*/React.createElement("span", {
    "class": "info-box__label"
  }, "humidity"), /*#__PURE__*/React.createElement("span", {
    "class": "humidity"
  }));
}
function Wind() {
  return /*#__PURE__*/React.createElement("div", {
    "class": "info-box"
  }, /*#__PURE__*/React.createElement("img", {
    "class": "info-box__icon",
    src: "./images/wind.png",
    alt: "wind"
  }), /*#__PURE__*/React.createElement("span", {
    "class": "info-box__label"
  }, "wind"), /*#__PURE__*/React.createElement("span", {
    "class": "wind"
  }));
}
function Pressure() {
  return /*#__PURE__*/React.createElement("div", {
    "class": "info-box"
  }, /*#__PURE__*/React.createElement("img", {
    "class": "info-box__icon",
    src: "./images/pres.png",
    alt: "pressure"
  }), /*#__PURE__*/React.createElement("span", {
    "class": "info-box__label"
  }, "pressure"), /*#__PURE__*/React.createElement("span", {
    "class": "pressure"
  }));
}
function Sunrise() {
  return /*#__PURE__*/React.createElement("div", {
    "class": "day info-box"
  }, /*#__PURE__*/React.createElement("img", {
    "class": "info-box__icon sun-icon",
    src: "./images/sun.png",
    alt: "sunrise and sunset"
  }), /*#__PURE__*/React.createElement("span", {
    "class": "sunrise"
  }, "no data"), /*#__PURE__*/React.createElement("span", {
    "class": "sunset"
  }, "no data"));
}
function Panel() {
  return /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement(Humidity, null), /*#__PURE__*/React.createElement(Wind, null), /*#__PURE__*/React.createElement(Pressure, null), /*#__PURE__*/React.createElement(Sunrise, null));
}
var rootNode = document.getElementById('app');
var root = ReactDOM.createRoot(rootNode);
root.render( /*#__PURE__*/React.createElement(App, null));