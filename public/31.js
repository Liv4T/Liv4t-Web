(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/menudocente.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/menudocente.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/notificationComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/notificationComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
<<<<<<< HEAD
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    logout: function logout() {
      axios.post("/logout").then(function (response) {
        if (response.status === 302 || 401) {
          window.location.href = "/login";
        } else {// throw error and go to catch block
        }
      })["catch"](function (error) {});
=======
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      events: []
    };
  },
  created: function created() {},
  mounted: function mounted() {
    var _this = this;

    axios.get('/api/event/today').then(function (response) {
      _this.events = response.data;
      var spanCounter = document.getElementById('span-counter');
      spanCounter.innerHTML = _this.events.length;
    });
  },
  methods: {
    extractHour: function extractHour(date) {
      return "".concat(date).substring(11, 20);
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
    }
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/menudocente.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/menudocente.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/notificationComponent.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/notificationComponent.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
<<<<<<< HEAD
exports.push([module.i, "\n.left {\n    width: 225px;\n    height: auto;\n    background: #f5f5f5;\n    white-space: nowrap;\n    transition: width 0.5s;\n    position: absolute;\n    z-index: 1;\n}\n.left ul {\n    padding: 0;\n    list-style-type: none;\n    text-align: left;\n}\n.left li {\n    width: auto;\n    height: 60px;\n    line-height: 50px;\n    padding-left: 18px;\n}\n.left li:hover {\n    background: #278080;\n    color: white;\n}\n.left .item-menu {\n    height: 50px;\n    overflow: hidden;\n    color: black;\n}\n.left a {\n    color: white;\n    text-decoration: none;\n    font-weight: bold;\n}\nspan.menu {\n    padding-left: 17px;\n}\n.t_search {\n    color: rgb(200, 200, 200);\n    height: 35px;\n    margin-left: 15px;\n    width: 190px;\n}\n.dropdown {\n    position: relative;\n    display: inline-block;\n}\n.dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f5f5f5;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n    z-index: 1;\n}\n.dropdown-content a {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n}\n.dropdown-content a:hover {\n    background: #278080;\n    color: white;\n}\n.dropdown:hover .dropdown-content {\n    display: block;\n}\n.dropdown2 {\n    position: relative;\n}\n.dropdown2-content {\n    display: none;\n    position: absolute;\n    background-color: #f5f5f5;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n    z-index: 1;\n}\n.dropdown2-content a {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n}\n.dropdown2-content a:hover {\n    background: #278080;\n    color: white;\n}\n.dropdown2:hover .dropdown2-content {\n    display: block;\n}\n", ""]);
=======
exports.push([module.i, "\na:not(.md-button):hover{\n   text-decoration: none;\n}\n.navbar a{\n  text-align: left !important;\n}\n.event_container{\n    width: 450px;\n    padding: 5px;\n    max-height: 200px;\n    overflow:auto;\n}\n.event_all a{\n  width:100%;\n  text-align: center !important;\n  padding: 10px;\n  background: #278080;\n  color:white;\n  text-decoration: none;\n}\n.list-group-item-action{\n  text-align: left;\n  width:100%;\n  word-wrap: break-word;\n}\n.list-group-item-action:hover{\n  text-decoration: none;\n  background: #ffc039;\n  font-weight: 600;\n  color:white;\n}\n\n", ""]);
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0

// exports


/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/menudocente.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/menudocente.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/notificationComponent.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/notificationComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


<<<<<<< HEAD
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./menudocente.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/menudocente.vue?vue&type=style&index=0&lang=css&");
=======
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./notificationComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/notificationComponent.vue?vue&type=style&index=0&lang=css&");
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/menudocente.vue?vue&type=template&id=7384d158&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/menudocente.vue?vue&type=template&id=7384d158& ***!
  \**************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/notificationComponent.vue?vue&type=template&id=92f71bd2&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/notificationComponent.vue?vue&type=template&id=92f71bd2& ***!
  \************************************************************************************************************************************************************************************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
<<<<<<< HEAD
  return _c("div", { attrs: { id: "app" } }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "left" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "text-center" }, [
            _c(
              "a",
              {
                staticClass: "btn btn-warning",
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.logout($event)
                  }
                }
              },
              [_vm._v("X Salir")]
            )
          ]),
          _vm._v(" "),
          _c("br")
        ])
      ])
    ])
=======
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "dropdown-menu dropdown-menu-right",
        attrs: { "aria-labelledby": "navbarDropdown" }
      },
      [
        _c("div", { staticClass: "event_container" }, [
          _c(
            "div",
            { staticClass: "list-group" },
            _vm._l(_vm.events, function(event, k_event) {
              return _c(
                "a",
                {
                  key: k_event,
                  staticClass:
                    "list-group-item list-group-item-action text-truncate",
                  attrs: { href: event.hangout }
                },
                [
                  _c("b", [_vm._v(_vm._s(_vm.extractHour(event.dateFrom)))]),
                  _vm._v(
                    " [" +
                      _vm._s(event.area) +
                      " " +
                      _vm._s(event.classroom) +
                      "] " +
                      _vm._s(event.name)
                  )
                ]
              )
            }),
            0
          )
        ]),
        _vm._v(" "),
        _vm._m(1)
      ]
    )
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
<<<<<<< HEAD
    return _c("ul", [
      _c("a", { attrs: { href: "/calendar" } }, [
        _c("li", { staticClass: "item-menu" }, [
          _c("img", {
            attrs: {
              width: "35px",
              src:
                "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/HORARIO_narnja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad",
              alt: ""
            }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "menu" }, [_vm._v("Calendario")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "dropdown" }, [
        _c("a", [
          _c("li", { staticClass: "item-menu" }, [
            _c("img", {
              attrs: {
                width: "35px",
                src:
                  "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/ANUNCIOS_naranja.png?alt=media&token=539c1428-c480-43bf-a132-73be35386940",
                alt: ""
              }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "menu" }, [
              _vm._v("Comunicaciones          ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "dropdown-content" }, [
              _c("a", { attrs: { href: "/mensajes" } }, [
                _c("img", {
                  attrs: {
                    width: "35px",
                    src:
                      "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MENSAJES_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad",
                    alt: ""
                  }
                }),
                _vm._v(
                  "\n                                         Mensajes\n                                     "
                )
              ]),
              _vm._v(" "),
              _c("a", { attrs: { href: "/questions" } }, [
                _c("img", {
                  attrs: {
                    width: "35px",
                    src:
                      "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/FOROS_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad",
                    alt: ""
                  }
                }),
                _vm._v("\n                   Foro\n                 ")
              ]),
              _vm._v(" "),
              _c("a", { attrs: { href: "/chat" } }, [
                _c("img", {
                  attrs: {
                    width: "35px",
                    src:
                      "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/FOROS_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad",
                    alt: ""
                  }
                }),
                _vm._v("\n                   Chat\n                 ")
              ]),
              _vm._v(" "),
              _c("a", { attrs: { href: "/mensajes" } }, [
                _c("img", {
                  attrs: {
                    width: "35px",
                    src:
                      "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/sicologia_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad",
                    alt: ""
                  }
                }),
                _vm._v("\n                   Psicología\n                 ")
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "dropdown2" }, [
        _c("a", [
          _c("li", { staticClass: "item-menu" }, [
            _c("img", {
              attrs: {
                width: "35px",
                src:
                  "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/ANUNCIOS_naranja.png?alt=media&token=539c1428-c480-43bf-a132-73be35386940",
                alt: ""
              }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "menu" }, [
              _vm._v("Académico          ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "dropdown2-content" }, [
              _c("a", { attrs: { href: "/actividad_g" } }, [
                _c("img", {
                  attrs: {
                    width: "35px",
                    src:
                      "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MIS-CURSOS.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad",
                    alt: ""
                  }
                }),
                _vm._v("\n                   Planificación\n                 ")
              ]),
              _vm._v(" "),
              _c("a", { attrs: { href: "/docente/clases" } }, [
                _c("img", {
                  attrs: {
                    width: "35px",
                    src:
                      "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/ACTIVIDADES_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad",
                    alt: ""
                  }
                }),
                _vm._v("\n                   Mis clases\n                 ")
              ]),
              _vm._v(" "),
              _c("a", { attrs: { href: "/docente/estudiantes" } }, [
                _c("img", {
                  attrs: {
                    width: "35px",
                    src:
                      "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/ACTIVIDADES_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad",
                    alt: ""
                  }
                }),
                _vm._v(
                  "\n                   Mis Estudiantes\n                 "
                )
              ]),
              _vm._v(" "),
              _c("a", { attrs: { href: "/repository" } }, [
                _c("img", {
                  attrs: {
                    width: "35px",
                    src:
                      "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/NOTAS_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad",
                    alt: ""
                  }
                }),
                _vm._v("Entregas")
              ]),
              _vm._v(" "),
              _c("a", { attrs: { href: "/notas_d" } }, [
                _c("img", {
                  attrs: {
                    width: "35px",
                    src:
                      "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/NOTAS_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad",
                    alt: ""
                  }
                }),
                _vm._v("\n                   Notas\n                 ")
              ]),
              _vm._v(" "),
              _c("a", { attrs: { href: "/board" } }, [
                _c("img", {
                  attrs: {
                    width: "35px",
                    src:
                      "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/NOTAS_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad",
                    alt: ""
                  }
                }),
                _vm._v("\n                   Pizarra\n                 ")
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "dropdown2" }, [
        _c("a", [
          _c("li", { staticClass: "item-menu" }, [
            _c("img", {
              attrs: {
                width: "35px",
                src:
                  "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/ANUNCIOS_naranja.png?alt=media&token=539c1428-c480-43bf-a132-73be35386940",
                alt: ""
              }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "menu" }, [_vm._v("Mis Electivas")]),
            _vm._v(" "),
            _c("div", { staticClass: "dropdown2-content" }, [
              _c("a", { attrs: { href: "/teacher/lectives/planning" } }, [
                _c("img", {
                  attrs: {
                    width: "35px",
                    src:
                      "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MIS-CURSOS.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad",
                    alt: ""
                  }
                }),
                _vm._v("Planificación")
              ]),
              _vm._v(" "),
              _c("a", { attrs: { href: "/teacher/lectives/courses" } }, [
                _c("img", {
                  attrs: {
                    width: "35px",
                    src:
                      "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/ACTIVIDADES_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad",
                    alt: ""
                  }
                }),
                _vm._v("Mis clases\n                 ")
              ]),
              _vm._v(" "),
              _c("a", { attrs: { href: "/teacher/lectives/students" } }, [
                _c("img", {
                  attrs: {
                    width: "35px",
                    src:
                      "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/ACTIVIDADES_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad",
                    alt: ""
                  }
                }),
                _vm._v("Mis alumnos\n                     ")
              ]),
              _vm._v(" "),
              _c("a", { attrs: { href: "/teacher/lectives/activities" } }, [
                _c("img", {
                  attrs: {
                    width: "35px",
                    src:
                      "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/ACTIVIDADES_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad",
                    alt: ""
                  }
                }),
                _vm._v("Mis actividades")
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("a", { attrs: { href: "/manual" } }, [
        _c("li", { staticClass: "item-menu" }, [
          _c("img", {
            attrs: {
              width: "35px",
              src:
                "https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MANUAL-DE-USUARIO_naranja.png?alt=media&token=bd2488fb-e121-432d-afd2-f223fcc0f29e",
              alt: ""
            }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "menu" }, [_vm._v("Manual de usuario")])
        ])
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          attrs: {
            href: "../../uploads/Terminos _Condiciones_liv4t.pdf",
            target: "_blank"
          }
        },
        [
          _c("li", { staticClass: "item-menu" }, [
            _c("span", { staticClass: "menu" }, [
              _vm._v("Términos y condiciones")
            ])
          ])
        ]
      )
=======
    return _c(
      "a",
      {
        pre: true,
        attrs: {
          id: "navbarDropdown",
          class: "nav-link dropdown-toggle",
          href: "#",
          role: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [
        _c("i", {
          pre: true,
          attrs: { style: "color:#ffc039", class: "fas fa-bell" }
        }),
        _vm._v(" "),
        _c(
          "span",
          {
            pre: true,
            attrs: { id: "span-counter", class: "badge badge-light" }
          },
          [_vm._v("0")]
        ),
        _vm._v(" "),
        _c("span", { pre: true, attrs: { class: "caret" } })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "event_all" }, [
      _c("a", { attrs: { href: "/calendar" } }, [_vm._v("Ver todos")])
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
    ])
  }
]
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/components/menudocente.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/menudocente.vue ***!
  \*************************************************/
=======
/***/ "./resources/js/components/notificationComponent.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/notificationComponent.vue ***!
  \***********************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _menudocente_vue_vue_type_template_id_7384d158___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menudocente.vue?vue&type=template&id=7384d158& */ "./resources/js/components/menudocente.vue?vue&type=template&id=7384d158&");
/* harmony import */ var _menudocente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menudocente.vue?vue&type=script&lang=js& */ "./resources/js/components/menudocente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _menudocente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menudocente.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/menudocente.vue?vue&type=style&index=0&lang=css&");
=======
/* harmony import */ var _notificationComponent_vue_vue_type_template_id_92f71bd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notificationComponent.vue?vue&type=template&id=92f71bd2& */ "./resources/js/components/notificationComponent.vue?vue&type=template&id=92f71bd2&");
/* harmony import */ var _notificationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notificationComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/notificationComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _notificationComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notificationComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/notificationComponent.vue?vue&type=style&index=0&lang=css&");
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
<<<<<<< HEAD
  _menudocente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _menudocente_vue_vue_type_template_id_7384d158___WEBPACK_IMPORTED_MODULE_0__["render"],
  _menudocente_vue_vue_type_template_id_7384d158___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _notificationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _notificationComponent_vue_vue_type_template_id_92f71bd2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _notificationComponent_vue_vue_type_template_id_92f71bd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/components/menudocente.vue"
=======
component.options.__file = "resources/js/components/notificationComponent.vue"
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/components/menudocente.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/menudocente.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
=======
/***/ "./resources/js/components/notificationComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/notificationComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menudocente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./menudocente.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/menudocente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menudocente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/menudocente.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/menudocente.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notificationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./notificationComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/notificationComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notificationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/notificationComponent.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/notificationComponent.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_menudocente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./menudocente.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/menudocente.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_menudocente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_menudocente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_menudocente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_menudocente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_menudocente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/menudocente.vue?vue&type=template&id=7384d158&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/menudocente.vue?vue&type=template&id=7384d158& ***!
  \********************************************************************************/
=======
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notificationComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./notificationComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/notificationComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notificationComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notificationComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notificationComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notificationComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notificationComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/notificationComponent.vue?vue&type=template&id=92f71bd2&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/notificationComponent.vue?vue&type=template&id=92f71bd2& ***!
  \******************************************************************************************/
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_menudocente_vue_vue_type_template_id_7384d158___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./menudocente.vue?vue&type=template&id=7384d158& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/menudocente.vue?vue&type=template&id=7384d158&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_menudocente_vue_vue_type_template_id_7384d158___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_menudocente_vue_vue_type_template_id_7384d158___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notificationComponent_vue_vue_type_template_id_92f71bd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./notificationComponent.vue?vue&type=template&id=92f71bd2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/notificationComponent.vue?vue&type=template&id=92f71bd2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notificationComponent_vue_vue_type_template_id_92f71bd2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notificationComponent_vue_vue_type_template_id_92f71bd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 29908028c636e9b5cef7a214fb1dc6e775ab27d0



/***/ })

}]);