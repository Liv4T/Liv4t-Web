<template>
     <div class="back row justify-content-center">
          <div class="col-sm-10">
              <div class="card text-center">
                   <div class="card-header fondo">
                     <h4>Mis estudiantes</h4>
                   </div>
              </div>
               <div class="card-body">
                   <div class="row">
                        <div class="col-12 col-md-4">
                            <div>
                                <span>Seleccione el área:</span>
                            </div>
                            <div v-for="(area,k_area) in areas" v-bind:key="k_area" class="area_container" v-bind:class="{ 'area_container-active': (current_area.id==area.id && current_area.id_classroom==area.id_classroom) }" @click="SelectArea(area)">
                                <span>{{area.text}}</span>
                            </div>
                        </div>
                        <div class="col-12 col-md-8">
                            <div class="students_container">
                                <table class="table table-hover center">
                                    <thead>
                                        <tr>
                                            <th class="text-center">Estudiante</th>
                                            <th class="text-center">Progreso</th>
                                            <th class="text-center">Calificación</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody v-if="students.length>0">
                                        <tr v-for="(student,k_student) in students" v-bind:key="k_student">
                                            <td class="student_info">
                                                <div class="student_name">
                                                    <img v-if="student.user_picture" :src="student.user_picture" alt="icon photo" style="width:25px">
                                                    {{student.user_lastname}} {{student.user_name}}
                                                </div>
                                                <small class="student_notify" v-if="student.pending_calification>0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                                                        <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                                                        <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                                                    </svg>
                                                    Actividades pendientes de calificación
                                                </small>
                                            </td>
                                            <td>
                                                {{student.progress}} %
                                            </td>
                                            <td>
                                                {{student.score}} /  {{student.score_base}}
                                            </td>
                                            <td>
                                                <a class="btn btn-primary" :href="`/docente/area/${current_area.id}/curso/${current_area.id_classroom}/estudiante/${student.user_id}`">VER</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody v-if="students.length==0">
                                        <tr>
                                            <td colspan="4">Cargando...</td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                   </div>
               </div>
          </div>
    </div>
</template>
<script>
export default {
    props: [],
    data() {
        return {
            students:[],
            areas:[],
            current_area:{}
        }
    },
    mounted() {
        this.areas = [];
        axios.get('/GetArearByUser').then(response => {
            this.areas = response.data;

            if(this.areas.length>0)
            {
                this.current_area=this.areas[0];
                this.getStudents();
            }
        });
    },
    methods: {
         getStudents()
        {
            this.students = [];
            axios.get(`/api/teacher/area/${this.current_area.id}/classroom/${this.current_area.id_classroom}/student`).then(response => {
                this.students = response.data;
            });
        },
        SelectArea(area){
             this.current_area=area;
             this.getStudents();
        }
    }
}
</script>
<style scoped>
.area_container{
    display: flex;
    padding: 10px;
    border:2px solid #fff1d2;
    border-radius:4px;
    margin-top:10px;
    transition: background 0.8s;
    font-weight: 600;
    font-family: "Century Gothic";
    color:#000;
}
.area_container:hover{
      box-shadow: 0 0 11px rgba(33,33,33,.2);
      cursor: default;
      background: #ffc039 radial-gradient(circle, transparent 1%, white 1%) center/15000%;
      color:#000;
}
.area_container:active {
  background-color: #ffc039;
  background-size: 100%;
  text-decoration: none;
  transition: background 0s;
   color:white;
}
.area_container-active{
     background-color: #ffc039;
     color:#000;
}
.student_info{
    display: flex;
    flex-direction: column;
}
.student_name{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
.student_name>img{
    margin-right: 8px;
}
.student_notify{
    background: #edffff;
    padding: 3px;
    color:#278080;
}
</style>
