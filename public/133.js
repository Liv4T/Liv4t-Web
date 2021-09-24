(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[133],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/clasesCliente.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/clasesCliente.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['user'],
  data: function data() {
    return {
      areas: [],
      id_area_selected: null,
      id_tutor: null,
      id_trimestre: null,
      trimestres: [],
      clases: [],
      activities: [],
      showStudent: false,
      activityId: null,
      weekly_id: null
    };
  },
  mounted: function mounted() {
    this.getArea();
  },
  watch: {
    id_trimestre: function id_trimestre(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.getCycles();
      }
    },
    id_area_selected: function id_area_selected(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.getCycles();
      }
    }
  },
  methods: {
    getArea: function getArea() {
      var _this = this;

      axios.get("/getTrimestres").then(function (response) {
        _this.trimestres = response.data;
      });
      axios.get('getAreaByClient').then(function (response) {
        _this.areas = response.data;
      });
    },
    setArea: function setArea(value) {
      var data = JSON.parse(value);
      this.id_area_selected = data.id_area;
      this.id_tutor = data.id_tutor;
    },
    setTrim: function setTrim(id_trimestre) {
      this.id_trimestre = id_trimestre;
    },
    getCycles: function getCycles() {
      var _this2 = this;

      axios.get("getTutorCycle/".concat(this.id_tutor, "/").concat(this.id_trimestre, "/").concat(this.id_area_selected)).then(function (response) {
        _this2.clases = response.data;
      });
    },
    getClass: function getClass(data) {
      var _this3 = this;

      axios.get("getClass/".concat(data.id)).then(function (response) {
        _this3.activities = response.data;
      });
    },
    backTable: function backTable() {
      this.activities = [];
    },
    getActivity: function getActivity(data) {
      this.weekly_id = data.id_weekly_plan;
      this.activityId = data.id;
      this.showStudent = true;
    },
    backPage: function backPage() {
      this.showStudent = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/clasesCliente.vue?vue&type=template&id=688cbe94&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/clasesCliente.vue?vue&type=template&id=688cbe94& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "back" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-sm-10", attrs: { id: "crud" } }, [
        _vm.showStudent === false
          ? _c("div", { staticClass: "card" }, [
              _c("h3", { staticClass: "card-header fondo" }, [
                _vm._v("Mis Clases")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "select",
                  {
                    staticClass: "form-control",
                    on: {
                      change: function(e) {
                        return _vm.setArea(e.target.value)
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { default: "" } }, [
                      _vm._v("Seleccionar...")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.areas, function(area, key) {
                      return _c(
                        "option",
                        { key: key, domProps: { value: JSON.stringify(area) } },
                        [_vm._v(_vm._s(area.area_name))]
                      )
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.id_area_selected !== null,
                        expression: "id_area_selected !== null"
                      }
                    ],
                    staticClass: "mt-2"
                  },
                  [
                    _c(
                      "div",
                      { attrs: { id: "accordion" } },
                      _vm._l(_vm.trimestres, function(trimestre, key) {
                        return _c("div", { key: key, staticClass: "card" }, [
                          _c(
                            "div",
                            {
                              staticClass: "card-header",
                              attrs: { id: "heading" + key }
                            },
                            [
                              _c("h5", { staticClass: "mb-0" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-link",
                                    attrs: {
                                      "data-toggle": "collapse",
                                      "data-target": "#collapse" + key,
                                      "aria-expanded": "true",
                                      "aria-controls": "collapse" + key
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.setTrim(trimestre.id)
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                            " +
                                        _vm._s(trimestre.nombre) +
                                        "\n                                        "
                                    )
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "collapse hide",
                              attrs: {
                                id: "collapse" + key,
                                "aria-labelledby": "heading" + key,
                                "data-parent": "#accordion"
                              }
                            },
                            [
                              _c("div", { staticClass: "card-body" }, [
                                _vm.activities.length === 0
                                  ? _c(
                                      "table",
                                      {
                                        staticClass:
                                          "table table-striped table-hover"
                                      },
                                      [
                                        _vm._m(0, true),
                                        _vm._v(" "),
                                        _vm._l(_vm.clases, function(
                                          clase,
                                          key
                                        ) {
                                          return _c("tbody", { key: key }, [
                                            _c("tr", [
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(clase.driving_question)
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _c(
                                                  "button",
                                                  {
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.getClass(
                                                          clase
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [_vm._v("Ir a Clase")]
                                                )
                                              ])
                                            ])
                                          ])
                                        })
                                      ],
                                      2
                                    )
                                  : _c("div", [
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-success mb-2",
                                          on: { click: _vm.backTable }
                                        },
                                        [_vm._v("Volver")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "table",
                                        {
                                          staticClass:
                                            "table table-striped table-hover"
                                        },
                                        [
                                          _vm._m(1, true),
                                          _vm._v(" "),
                                          _vm._l(_vm.activities, function(
                                            activity,
                                            key
                                          ) {
                                            return _c("tbody", { key: key }, [
                                              _c("tr", [
                                                _c("td", [
                                                  _vm._v(_vm._s(activity.name))
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _c(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-primary",
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.getActivity(
                                                            activity
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [_vm._v("Acceder")]
                                                  )
                                                ])
                                              ])
                                            ])
                                          })
                                        ],
                                        2
                                      )
                                    ])
                              ])
                            ]
                          )
                        ])
                      }),
                      0
                    )
                  ]
                )
              ])
            ])
          : _vm.showStudent === true
          ? _c(
              "div",
              [
                _c("student-module", {
                  attrs: {
                    clasId: _vm.weekly_id,
                    cleanClasId: _vm.backPage,
                    moduleId: _vm.activityId
                  }
                })
              ],
              1
            )
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Ciclo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Acción")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Clase")]),
        _vm._v(" "),
        _c("th", [_vm._v("Acción")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/clasesCliente.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/clasesCliente.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clasesCliente_vue_vue_type_template_id_688cbe94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clasesCliente.vue?vue&type=template&id=688cbe94& */ "./resources/js/components/clasesCliente.vue?vue&type=template&id=688cbe94&");
/* harmony import */ var _clasesCliente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clasesCliente.vue?vue&type=script&lang=js& */ "./resources/js/components/clasesCliente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _clasesCliente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _clasesCliente_vue_vue_type_template_id_688cbe94___WEBPACK_IMPORTED_MODULE_0__["render"],
  _clasesCliente_vue_vue_type_template_id_688cbe94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/clasesCliente.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/clasesCliente.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/clasesCliente.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_clasesCliente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./clasesCliente.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/clasesCliente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_clasesCliente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/clasesCliente.vue?vue&type=template&id=688cbe94&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/clasesCliente.vue?vue&type=template&id=688cbe94& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_clasesCliente_vue_vue_type_template_id_688cbe94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./clasesCliente.vue?vue&type=template&id=688cbe94& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/clasesCliente.vue?vue&type=template&id=688cbe94&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_clasesCliente_vue_vue_type_template_id_688cbe94___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_clasesCliente_vue_vue_type_template_id_688cbe94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);