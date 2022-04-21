<template>
  <div class="back" v-if="showComponent === 'inicio'">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card">
          <h3 class="card-header fondo text-center">
              Ciclo
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </h3>
          <div class="float-right" style="padding:10px">
            <a v-on:click="backPage" class="btn btn-warning float-left">
              Volver
            </a>

            <a
              class="btn btn-warning float-right"
              v-on:click="showSection('create_class',current_course.id_lective_planification,current_course.id_weekly_plan, null)"
            >Crear Clase</a>
          </div>


        <div class="card-body">
          <div class="accordion" id="accordionExample">
            <div class="card" v-for="(course, t) in courses" :key="t">

              <div class="card-header" :id="'heading' +t">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    :data-target="'#collapse' +t"
                    aria-expanded="true"
                    :aria-controls="'collapse' +t"
                  >Clase {{ t+1 }}</button>
                </h2>
              </div><!--card-header-->

              <div
                  :id="'collapse' +t"
                  class="collapse show"
                  :aria-labelledby="'heading' +t"
                  data-parent="#accordionExample">
                <div class="card-body">
                  <div class="form-group text-center">
                    <strong for="name">Nombre</strong>
                    <div style="font-weight: bold;">{{ course.name }}</div>
                    </div>
                    <div class="form-group text-center">
                      <strong for="name">Descripción</strong>
                      <p>{{course.description }}</p>
                    </div>
                    <div class="form-group text-center"  v-for="(item_content, t_c) in course.content" :key="t_c">
                      <strong v-if="item_content.content_type === 'DOCUMENT'">Documento</strong>
                      <strong v-else-if="item_content.content_type === 'LINK'">Enlace</strong>
                      <strong v-else-if="item_content.content_type === 'VIDEO'">Video</strong>
                      <p>{{item_content.description}}</p>
                      <a v-if="item_content.content_type === 'DOCUMENT' && item_content.content"  v-bind:href="item_content.content" target="_blank" class="form-control" type="text"><i class="fa fa-file-download"></i> Descargar</a>
                      <a v-if="item_content.content_type === 'LINK' && item_content.content"  v-bind:href="item_content.content" target="_blank" class="form-control" type="text"><i class="fa fa-link"></i> Abrir</a>
                      <a v-if="item_content.content_type === 'VIDEO' && item_content.content"  v-bind:href="item_content.content" target="_blank" class="form-control" type="text"><i class="fa fa-link"></i> Abrir youtube</a>
                      <iframe  v-if="item_content.content_type === 'VIDEO' && item_content.content" width="100%" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                        v-bind:src="'https://www.youtube.com/embed/'+item_content.content">
                      </iframe>
                    </div>
                    <div class="modal-footer">
                        <a class="btn btn-warning" v-on:click="showSection('create_activity',current_course.id_lective_planification,current_course.id_weekly_plan, course.id_class)"
                        >Crear Actividad</a>
                        <a class="btn btn-warning" v-on:click="showSection('edit_class',current_course.id_lective_planification,current_course.id_weekly_plan,course.id_class)"
                        >Editar Clase</a>
                        <a class="btn btn-warning" v-on:click="viewDelete(course.id_class,course.name)"
                        >Eliminar Clase</a>
                    </div><!--END FOOTER-->
                  </div><!--END CART BODY-->
                </div>
              </div>
            </div><!--accordion-->
          </div><!--CARD body-->
        </div><!--CARD-->
      </div>
    </div>
    <div class="modal fade" id="deleteC">
        <div class="modal-sm modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">
                    <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group row text-center">
                        <label for="name">Esta seguro que desea eliminar {{ delName }} ?</label>
                    </div>
                    <div class="modal-footer">
                        <a class="btn btn-danger float-right" href v-on:click.prevent="deleteClass(delId)">Si</a>
                        <a class="btn btn-warning" href v-on:click.prevent="deleteC()">Cancelar</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  <div v-else-if="showComponent === 'create_class'">
    <lectives-teacher-courses-edit :id_lective_planification="id_lective_planification" :id_weekly_plan="id_weekly_plan" :back="showSection"></lectives-teacher-courses-edit>
  </div>
  <div v-else-if="showComponent === 'create_activity'">
    <lectives-teacher-activity :id_lective_planification="id_lective_planification" :id_weekly_plan="id_weekly_plan" :id_course="id_class" :back="showSection"></lectives-teacher-activity>
  </div>
  <div v-else-if="showComponent === 'edit_class'">
    <lectives-edit-class :id_lective_planification="id_lective_planification" :id_weekly_plan="id_weekly_plan" :id_class="id_class" :back="showSection"></lectives-edit-class>
  </div>
</template>
<script>
export default {
  props:["current_course","courses", "backPage"],
  data() {
    return {
      showComponent:'inicio',
      id_lective_planification: null,
      id_weekly_plan: null,
      id_class: null,
      delName: "",
      delId: "",
    };
  },
  created() {},
  mounted() {
      console.log("cursos", this.courses);
  },
  methods: {
     showSection(data, id_lective_planification, id_weekly_plan, id_class){
      this.showComponent = data;
      this.id_weekly_plan = id_weekly_plan;
      this.id_lective_planification = id_lective_planification;
      this.id_class = id_class;
    },
    returnPage() {
        window.location = "/teacher/lectives/courses";
    },
    deleteClass(id_class){
        var url = "/api/lectives/delete/class/"+id_class;
        axios.put(url).then((response) => {
            toastr.success("Clase eliminada correctamente");
            this.returnPage();
        });
    },
    deletC() {
        $("#deleteC").modal("hide");
    },
    viewDelete(id, name) {
            this.delName = name;
            this.delId = id;
            $("#deleteC").modal("show");
        },
  },
};
</script>
<style>
.background2 {
  background: url(../assets/img/Fondo5.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
}
 iframe:not(.md-image){
    height:300px !important;
}
</style>
