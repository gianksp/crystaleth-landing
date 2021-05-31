webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/sections/Navigation/utility/ScrollspyMenu.js":
/*!**********************************************************!*\
  !*** ./src/sections/Navigation/utility/ScrollspyMenu.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/giancarlosanchez/Desktop/crystaleth-landing/src/sections/Navigation/utility/ScrollspyMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const ScrollspyMenu = _ref => {
  let {
    menuItems
  } = _ref,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["menuItems"]);

  const addAllClasses = [""];

  if (props.className) {
    addAllClasses.push(props.className);
  }

  return __jsx("ul", {
    className: addAllClasses.join(" "),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, menuItems.map((menu, index) => __jsx("li", {
    key: index,
    className: menu.subItems !== undefined ? "nav-item has-dropdown" : "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    activeClass: "nav-active",
    to: menu.path,
    spy: true,
    smooth: true,
    offset: parseInt(menu.offset),
    duration: 700,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, menu.name), menu.subItems !== undefined && __jsx("ul", {
    key: index,
    className: "dropdown",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx("li", {
    key: 100,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://github",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 19
    }
  }, "Github")))))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "nav__button",
    onClick: () => location.href = "http://app.crystaleth.finance",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, "App")));
};

/* harmony default export */ __webpack_exports__["default"] = (ScrollspyMenu);

/***/ })

})
//# sourceMappingURL=index.js.fb10b6c103c6276d065d.hot-update.js.map