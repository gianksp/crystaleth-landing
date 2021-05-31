webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/sections/Navigation/index.js":
/*!******************************************!*\
  !*** ./src/sections/Navigation/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _reusecore_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reusecore/Layout */ "./src/reusecore/Layout/index.js");
/* harmony import */ var _assets_images_icon_crystal_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/icon_crystal.svg */ "./src/assets/images/icon_crystal.svg");
/* harmony import */ var _assets_images_icon_crystal_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_icon_crystal_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_moralis_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/moralis.png */ "./src/assets/images/moralis.png");
/* harmony import */ var _assets_images_moralis_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_moralis_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utility_data_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utility/data.js */ "./src/sections/Navigation/utility/data.js");
/* harmony import */ var _utility_ScrollspyMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utility/ScrollspyMenu */ "./src/sections/Navigation/utility/ScrollspyMenu.js");
/* harmony import */ var _navigation_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation.style */ "./src/sections/Navigation/navigation.style.js");
var _jsxFileName = "/Users/giancarlosanchez/Desktop/crystaleth-landing/src/sections/Navigation/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const Navigation = () => {
  const {
    0: expand,
    1: setExpand
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [scrolled, setScrolled] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const header = document.getElementById("navbar");
    const handleScroll = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); //[expand, scroll]

  return __jsx(_navigation_style__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "navbar",
    className: `nav-block`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(_reusecore_Layout__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "navbar-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: _assets_images_icon_crystal_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "prime app landing",
    height: 90,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }), __jsx("h2", {
    className: "logo-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, "CRYSTAL ETH"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "https://moralis.io",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: _assets_images_moralis_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "powered by moralis",
    height: 80,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }))), __jsx("nav", {
    className: "nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaBars"], {
    className: "mobile-menu-icon",
    onClick: () => setExpand(!expand),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }), __jsx(_utility_ScrollspyMenu__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: `collapsed ${expand ? "is-expanded" : ""}`,
    menuItems: _utility_data_js__WEBPACK_IMPORTED_MODULE_6__["default"].menuItems,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ })

})
//# sourceMappingURL=index.js.8e8877f20b2714304aee.hot-update.js.map