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
  }, __jsx(_reusecore_Layout__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 192 45",
    style: "width: 190px;",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, __jsx("path", {
    d: "M1,22.5A21.51,21.51,0,0,1,22.5,1h147a21.5,21.5,0,0,1,0,43H22.5A21.51,21.51,0,0,1,1,22.5Z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 98
    }
  }), __jsx("path", {
    d: "M37.6,30.9h0l-.12.16S37.56,31,37.6,30.9Z",
    style: "fill: rgb(255, 255, 255);",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 204
    }
  }), __jsx("path", {
    d: "M41,20.94A8.23,8.23,0,0,0,32.7,13,8.38,8.38,0,0,0,27,15.25,8.3,8.3,0,0,0,13,21v.06a17.82,17.82,0,0,0,2.41,8.48A22.43,22.43,0,0,0,17,32.09c.22.3.41.54.55.71l.17.21.05.06,0,0h0a2.67,2.67,0,0,0,3.75.25,2.62,2.62,0,0,0,.25-3.71h0l0,0-.1-.11L21.31,29A17.51,17.51,0,0,1,20.07,27a12.74,12.74,0,0,1-1.76-5.9,3,3,0,0,1,6,0,2.72,2.72,0,0,0,.3,1.14,2.66,2.66,0,0,0,5.13-.91V21a3,3,0,0,1,6,0,11.6,11.6,0,0,1-1.2,4.74c-.32.65-.62,1.18-.85,1.55-.11.19-.2.32-.26.41l-.06.08a0,0,0,0,0,0,0l0,0a2.66,2.66,0,0,1,2.08-1A2.63,2.63,0,0,1,38,29.49a2.55,2.55,0,0,1-.43,1.41h0s0,0,0,0a.1.1,0,0,0,0-.05l.12-.17c.1-.14.23-.35.39-.6A21.81,21.81,0,0,0,39.31,28,16.56,16.56,0,0,0,41,21v-.06Z",
    style: "fill: rgb(255, 255, 255);",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 296
    }
  }), __jsx("path", {
    d: "M35.36,26.89a2.71,2.71,0,0,0-2.08,1,2.56,2.56,0,0,0-.57,1.62,2.63,2.63,0,0,0,2.65,2.6,2.69,2.69,0,0,0,2.11-1l.12-.16a2.6,2.6,0,0,0-2.23-4Z",
    style: "fill: rgb(183, 232, 3);",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 1009
    }
  }), __jsx("path", {
    d: "M54.61,21.43a2.4,2.4,0,0,1-.89,2,4,4,0,0,1-2.54.7h-1V27.5h-1V18.93H51.4C53.54,18.93,54.61,19.77,54.61,21.43Zm-4.44,1.84h.9A3.41,3.41,0,0,0,53,22.85a1.6,1.6,0,0,0,.59-1.37A1.49,1.49,0,0,0,53,20.21a2.88,2.88,0,0,0-1.73-.42H50.17Zm11.64,1a3.55,3.55,0,0,1-.8,2.46,2.79,2.79,0,0,1-2.18.88,2.87,2.87,0,0,1-1.53-.41,2.59,2.59,0,0,1-1-1.16,4.05,4.05,0,0,1-.37-1.77,3.54,3.54,0,0,1,.79-2.44A2.75,2.75,0,0,1,58.87,21a2.71,2.71,0,0,1,2.14.9A3.51,3.51,0,0,1,61.81,24.28Zm-4.9,0a3.12,3.12,0,0,0,.49,1.88,2,2,0,0,0,2.9,0,3,3,0,0,0,.5-1.88,3,3,0,0,0-.5-1.85,2,2,0,0,0-2.9,0A3,3,0,0,0,56.91,24.28ZM68.76,27.5l-1.18-3.77c-.07-.23-.21-.75-.41-1.57h0c-.16.69-.29,1.21-.41,1.58L65.5,27.5H64.37l-1.75-6.42h1c.41,1.61.73,2.84.94,3.68A15,15,0,0,1,65,26.47h0c0-.22.11-.51.21-.86s.18-.64.25-.85l1.18-3.68h1l1.15,3.68a12.91,12.91,0,0,1,.45,1.7h0c0-.14.06-.36.13-.65s.48-1.87,1.22-4.73h1L69.91,27.5Zm6.81.12a3,3,0,0,1-2.25-.87,3.35,3.35,0,0,1-.82-2.41,3.69,3.69,0,0,1,.76-2.46A2.55,2.55,0,0,1,75.32,21a2.43,2.43,0,0,1,1.91.8,3.07,3.07,0,0,1,.7,2.09v.61H73.51a2.55,2.55,0,0,0,.56,1.72,2,2,0,0,0,1.53.59,5.15,5.15,0,0,0,2.05-.44v.87a4.77,4.77,0,0,1-1,.32A5.85,5.85,0,0,1,75.57,27.62Zm-.26-5.85a1.59,1.59,0,0,0-1.24.51,2.28,2.28,0,0,0-.54,1.39h3.36a2.13,2.13,0,0,0-.41-1.4A1.45,1.45,0,0,0,75.31,21.77ZM82.52,21a3.61,3.61,0,0,1,.77.07l-.13.9a4,4,0,0,0-.71-.08,1.71,1.71,0,0,0-1.33.63,2.3,2.3,0,0,0-.55,1.57V27.5h-1V21.08h.81l.11,1.19h0a2.72,2.72,0,0,1,.86-1A1.88,1.88,0,0,1,82.52,21Zm4.69,6.66A3,3,0,0,1,85,26.75a3.35,3.35,0,0,1-.82-2.41,3.69,3.69,0,0,1,.76-2.46A2.53,2.53,0,0,1,87,21a2.4,2.4,0,0,1,1.91.8,3,3,0,0,1,.71,2.09v.61H85.14a2.55,2.55,0,0,0,.57,1.72,2,2,0,0,0,1.53.59,5.15,5.15,0,0,0,2.05-.44v.87a4.65,4.65,0,0,1-1,.32A5.66,5.66,0,0,1,87.21,27.62Zm-.27-5.85a1.57,1.57,0,0,0-1.23.51,2.28,2.28,0,0,0-.54,1.39h3.35a2.07,2.07,0,0,0-.41-1.4A1.43,1.43,0,0,0,86.94,21.77Zm8.66,4.87h0a2.29,2.29,0,0,1-2,1,2.4,2.4,0,0,1-2-.86,3.78,3.78,0,0,1-.7-2.45,3.86,3.86,0,0,1,.71-2.47,2.6,2.6,0,0,1,4,.07h.07l0-.46,0-.45V18.38h1V27.5h-.79Zm-1.94.16a1.77,1.77,0,0,0,1.44-.54,2.72,2.72,0,0,0,.45-1.75v-.2a3.18,3.18,0,0,0-.46-1.95,1.7,1.7,0,0,0-1.44-.59,1.52,1.52,0,0,0-1.32.67,3.33,3.33,0,0,0-.45,1.88,3.19,3.19,0,0,0,.45,1.86A1.54,1.54,0,0,0,93.66,26.8Zm11-5.83a2.38,2.38,0,0,1,2,.87,3.75,3.75,0,0,1,.7,2.44,3.81,3.81,0,0,1-.71,2.46,2.35,2.35,0,0,1-2,.88,2.88,2.88,0,0,1-1.15-.23,2.17,2.17,0,0,1-.87-.72h-.07l-.21.83h-.69V18.38h1V20.6c0,.49,0,.94-.05,1.33h.05A2.3,2.3,0,0,1,104.7,21Zm-.15.82a1.69,1.69,0,0,0-1.43.57,3.23,3.23,0,0,0-.44,1.92,3.22,3.22,0,0,0,.45,1.94,1.71,1.71,0,0,0,1.45.58,1.47,1.47,0,0,0,1.33-.65,3.31,3.31,0,0,0,.44-1.88,3.19,3.19,0,0,0-.44-1.87A1.54,1.54,0,0,0,104.55,21.79Zm3.5-.71h1l1.41,3.66a14.72,14.72,0,0,1,.57,1.81h.05c0-.2.15-.54.31-1s.7-2,1.6-4.45h1l-2.76,7.31a3.64,3.64,0,0,1-1,1.54,2,2,0,0,1-1.34.45,3.71,3.71,0,0,1-.88-.1V29.5a3.14,3.14,0,0,0,.72.07,1.48,1.48,0,0,0,1.43-1.12l.36-.91ZM121.9,27.5l-2.06-6.72h0c.07,1.37.11,2.28.11,2.74v4h-1.62V18.93h2.47l2,6.55h0L125,18.93h2.48V27.5h-1.7V23.45c0-.2,0-.42,0-.67s0-.91.08-2h0l-2.21,6.71Zm9-3.29a2.76,2.76,0,0,0,.32,1.47,1.33,1.33,0,0,0,2.07,0,2.79,2.79,0,0,0,.31-1.48,2.73,2.73,0,0,0-.31-1.46,1.17,1.17,0,0,0-1-.48,1.14,1.14,0,0,0-1,.48A2.7,2.7,0,0,0,130.88,24.21Zm4.53,0a3.52,3.52,0,0,1-.84,2.5,3.05,3.05,0,0,1-2.35.91,3.36,3.36,0,0,1-1.67-.41,2.75,2.75,0,0,1-1.1-1.19,4,4,0,0,1-.39-1.81,3.47,3.47,0,0,1,.84-2.49,3,3,0,0,1,2.35-.89,3.26,3.26,0,0,1,1.67.41,2.65,2.65,0,0,1,1.1,1.17A3.94,3.94,0,0,1,135.41,24.21Zm5.13-3.38a2.62,2.62,0,0,1,.61.05L141,22.55a2.58,2.58,0,0,0-.53-.05,1.86,1.86,0,0,0-1.33.44,1.58,1.58,0,0,0-.48,1.23V27.5h-1.78V21h1.35l.26,1.1h.09a2.39,2.39,0,0,1,.82-.88A2,2,0,0,1,140.54,20.83Zm6,6.67-.35-.89h-.05a2.65,2.65,0,0,1-.93.79,3.09,3.09,0,0,1-1.24.22,2,2,0,0,1-1.49-.54,2.08,2.08,0,0,1-.54-1.54,1.73,1.73,0,0,1,.73-1.53,4.19,4.19,0,0,1,2.2-.55l1.14,0v-.29a.89.89,0,0,0-1-1,4.79,4.79,0,0,0-1.85.47l-.59-1.2a5.29,5.29,0,0,1,2.51-.6,3.14,3.14,0,0,1,2,.58,2.1,2.1,0,0,1,.7,1.74V27.5Zm-.53-3-.69,0a2.17,2.17,0,0,0-1.16.28.86.86,0,0,0-.38.78c0,.51.28.76.86.76a1.34,1.34,0,0,0,1-.36A1.25,1.25,0,0,0,146,25Zm5.41,3h-1.79V18.38h1.79Zm1.8-8.24c0-.59.33-.88,1-.88s1,.29,1,.88a.89.89,0,0,1-.25.65,1,1,0,0,1-.73.22C153.51,20.13,153.18,19.84,153.18,19.26ZM155,27.5h-1.78V21H155Zm6.46-1.95a1.8,1.8,0,0,1-.71,1.54,3.44,3.44,0,0,1-2.09.53,7.06,7.06,0,0,1-1.22-.1,4.66,4.66,0,0,1-.94-.28V25.76a5.44,5.44,0,0,0,1.12.39,4.35,4.35,0,0,0,1.1.16c.65,0,1-.19,1-.56a.44.44,0,0,0-.13-.34,1.63,1.63,0,0,0-.44-.3c-.21-.11-.49-.24-.85-.39a5.42,5.42,0,0,1-1.11-.59,1.62,1.62,0,0,1-.51-.61,2.08,2.08,0,0,1-.16-.87,1.53,1.53,0,0,1,.67-1.34,3.28,3.28,0,0,1,1.92-.48,5.54,5.54,0,0,1,2.31.51l-.54,1.29c-.33-.14-.64-.25-.92-.34a2.94,2.94,0,0,0-.88-.14c-.52,0-.79.14-.79.43a.5.5,0,0,0,.25.41,7.16,7.16,0,0,0,1.12.53,4.79,4.79,0,0,1,1.13.58,1.65,1.65,0,0,1,.53.62A1.92,1.92,0,0,1,161.5,25.55Zm1.14,1.11a1,1,0,0,1,.26-.74,1.07,1.07,0,0,1,.77-.25,1,1,0,0,1,.75.25,1,1,0,0,1,.27.74,1,1,0,0,1-.27.74,1.23,1.23,0,0,1-1.51,0A1,1,0,0,1,162.64,26.66Zm3.6-7.4c0-.59.32-.88,1-.88s1,.29,1,.88a.88.88,0,0,1-.24.65,1.06,1.06,0,0,1-.73.22C166.56,20.13,166.24,19.84,166.24,19.26Zm1.86,8.24h-1.79V21h1.79Zm3.3-3.29a2.76,2.76,0,0,0,.32,1.47,1.13,1.13,0,0,0,1,.5,1.12,1.12,0,0,0,1-.49,2.79,2.79,0,0,0,.31-1.48,2.73,2.73,0,0,0-.31-1.46,1.15,1.15,0,0,0-1-.48,1.14,1.14,0,0,0-1,.48A2.7,2.7,0,0,0,171.4,24.21Zm4.53,0a3.52,3.52,0,0,1-.84,2.5,3,3,0,0,1-2.35.91,3.32,3.32,0,0,1-1.66-.41A2.84,2.84,0,0,1,170,26a4,4,0,0,1-.39-1.81,3.47,3.47,0,0,1,.84-2.49,3,3,0,0,1,2.35-.89,3.26,3.26,0,0,1,1.67.41,2.73,2.73,0,0,1,1.11,1.17A4.08,4.08,0,0,1,175.93,24.21Z",
    style: "fill: rgb(255, 255, 255);",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 1197
    }
  })))), __jsx("nav", {
    className: "nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaBars"], {
    className: "mobile-menu-icon",
    onClick: () => setExpand(!expand),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }), __jsx(_utility_ScrollspyMenu__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: `collapsed ${expand ? "is-expanded" : ""}`,
    menuItems: _utility_data_js__WEBPACK_IMPORTED_MODULE_6__["default"].menuItems,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ })

})
//# sourceMappingURL=index.js.811d114864794cbfde2d.hot-update.js.map