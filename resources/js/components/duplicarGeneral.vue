<template>
<div>
  <head>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/solid.css"
      integrity="sha384-ioUrHig76ITq4aEJ67dHzTvqjsAP/7IzgwE7lgJcg2r7BRNGYSK0LwSmROzYtgzs"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/brands.css"
      integrity="sha384-i2PyM6FMpVnxjRPi0KW/xIS7hkeSznkllv+Hx/MtYDaHA5VcF0yL3KVlvzp8bWjQ"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/fontawesome.css"
      integrity="sha384-sri+NftO+0hcisDKgr287Y/1LVnInHJ1l+XC7+FOabmTTIK0HnE2ID+xxvJ21c5J"
      crossorigin="anonymous"
    />
  </head>
  <div>
    <div class="back">
      <div class="col-md-10 mx-auto">
        <div class="custom-card text-center">
          <h3 class="card-header fondo">Duplicar planificación general</h3>
          <form v-show="trimestre == false">
            <form-wizard
              title
              subtitle
              color="#ffc107"
              next-button-text="Siguiente"
              back-button-text="Atrás"
              finish-button-text="Guardar y enviar"
              @on-complete="createCourses"
            >
              <tab-content title="Anual">
                <div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <select class="form-control" v-model="materia" required>
                        <option
                          :value="option.id+'/'+option.id_classroom "
                          v-for="(option, key) in myOptions" :key="key"
                        >
                          {{
                          option.text
                          }}
                        </option>
                      </select>
                    </div>
                    <div class="col-md-4">
                      <a
                        href="#"
                        class="btn btn-warning"
                        v-on:click.prevent="duplicar(materia)"
                      >Duplicar</a>
                    </div>
                  </div>
                  <div class="form-group mx-auto" v-for="(option,k) in fillC.achievements" :key="k">
                    <div align="center">
                      <strong>
                        Logro {{ k+1 }}
                        <input
                          type="number"
                          style="width:50px;"
                          v-model="option.percentage"
                          required
                        />%
                      </strong>
                    </div>
                    <textarea
                      name="welcome"
                      class="form-control"
                      v-model="option.achievement"
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
              </tab-content>
              <tab-content title="Trimestral">
                <div class="form-group row mx-auto" v-for="(input, t) in inputToIterate" :key="t">
                  <div class="col-md-6">
                    <label for="logro1">Logro</label> 
                    <input
                        type="text"
                        name="logro1"
                        class="form-control"
                        v-model="input.logro"
                        placeholder="Logro"
                        required
                      />                                           
                  </div>
                  <div class="col-md-6" v-for="(ind, key) in input.unit_name" :key="key">
                    
                    <label for="name">Indicador de Logro</label>
                      <input
                        type="text"
                        name="objetive1"
                        class="form-control"
                        v-model="ind.indicador"
                        placeholder="Nombre de la unidad"
                        required
                      />
                    </div>           
                    <div class="col-md-6">
                      <label for="name">Contenidos</label>
                      <textarea
                        name="competences"
                        class="form-control"
                        v-model="input.content"
                        placeholder="Es la explicacion o sintesis de la unidad."
                        required
                      ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <!-- <div class="modal-footer">
                  <a submit="createCourses" class="btn btn-warning float-right">Guardar</a>
                </div>-->
              </tab-content>
            </form-wizard>
          </form>
          <h2 v-show="trimestre == true">La planificación anual y trimestral ya fue creada</h2>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="progressModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Progreso de Duplicación</h5>            
        </div>
        <div class="modal-body">
          <div v-show="loading === true">
            <div class="alert alert-info" role="alert">
              Cargando
            </div>
          </div>
          <div v-show="loading === false">              
            <div class="alert alert-success" role="alert">
              Duplicación Completa
            </div>
          </div>
        </div>          
      </div>
    </div>
  </div>
</div>
</template>
<script>
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();
$(function () {
  // Get the form fields and hidden div
  var checkbox = $("#gridCheck1");
  var hidden = $("#hidden_fields1");

  hidden.hide();

  checkbox.change(function () {
    if (checkbox.is(":checked")) {
      // Show the hidden fields.
      hidden.show();
    } else {
      hidden.hide();
    }
  });
});
import VueFormWizard from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
Vue.use(VueFormWizard);
export default {
  props: ["id_area", "id_classroom","rol"],
  data() {
    return {
      inputs: [
        {
          name: "",
          contenido: "",
        },
      ],
      inputs1: [
        {
          logro: "",
          porcentaje: "",
        },
      ],
      newTrimestre: [],
      newLogro1: "",
      newLogro2: "",
      newLogro3: "",
      newLogro4: "",
      newTrimestre: [],
      newLogro: [],
      trimestre: false,
      loading:true,
      logro_1: "",
      logro_2: "",
      logro_3: "",
      logro_4: "",
      fillC: [],
      anual: [],
      newAnual: [],
      materia: "",
      myOptions: [],
      errors: [],
      inputToIterate:[{
        content: "",
        id: "",
        logro: "",
        unit_name: ""
      }]
    };
  },
  mounted() {
    var urlsel =
      window.location.origin +
      "/coursePlanification/" +
      this.id_area +
      "/" +
      this.id_classroom;
    axios.get(urlsel).then((response) => {
      this.fillC = response.data;
      if (this.fillC.quaterly.length > 0) {        
        this.trimestre = true;                
      } else {
        this.trimestre = false;
      }
    });
    var url = window.location.origin + "/GetArearByUser";
    axios.get(url).then((response) => {
      this.myOptions = response.data;
    });
  },
  methods: {
    getMenu() {
      if(this.rol){
        window.location = "duplicarGeneral"
      }else{
        window.location = "/actividad_g";
      }
      
    },
    add(index) {
      this.inputs.push({ name: "", contenido: "" });
    },
    remove(index) {
      this.inputs.splice(index, 1);
    },
    add1(index) {
      this.inputs1.push({ logro: "", porcentaje: "" });
    },
    remove1(index) {
      this.inputs1.splice(index, 1);
    },
    duplicar(id) {
      this.fillC = [];
      this.inputToIterate = [];
      var urlsel = window.location.origin + "/coursePlanification/" + id;
      axios.get(urlsel).then((response) => {
        this.fillC = response.data;
        this.fillC.quaterly.forEach((el)=>{
          this.inputToIterate.push({
            content: el.content,
            id: el.id,
            logro: el.logro,
            unit_name: JSON.parse(el.unit_name)
          })
        })
      });
    },

    createCourses() {
      this.newLogro = [];
      this.newTrimestre = [];
      var url = window.location.origin + "/Courses";

      if (this.fillC.quaterly.length >= 1) {
        for (let i = 0; i < this.fillC.quaterly.length; i++) {
          this.newTrimestre.push(this.fillC.quaterly[i]);
        }
      }
      if (this.fillC.achievements.length >= 1) {
        for (let i = 0; i < this.fillC.achievements.length; i++) {
          this.newLogro.push(this.fillC.achievements[i]);
        }
      }
      $('#progressModal').modal('show');
      axios
        .post(url, {
          //Cursos generales
          id_area: this.id_area,
          id_classroom: this.id_classroom,
          logros: this.newLogro,
          trimestres: this.newTrimestre,
          duplicate: 1,
        })
        .then((response) => {
          this.errors = [];
          this.loading = false;
          toastr.success("Nuevo plan general creado exitosamente");
          this.getMenu();
        })
        .catch((error) => {
          this.errors = error.response.data;
        });

        setTimeout(function(){ 
          $('#progressModal').modal('hide');
          $('#exampleModal').modal('hide');
        }, 2000);
    },
    updateCourses() {
      window.location = "/actividad_g";
    },
    editNames(clas) {
      //   var urlr = "showClass/" + clas;
      //   axios.get(urlr).then(response => {
      //     this.fillS = response.data;
      //   });
      $("#createZ").modal("show");
    },
  },
};
</script>
<style></style>
