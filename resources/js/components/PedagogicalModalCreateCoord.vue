<template>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Creación de Salidas Pedagogicas</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label>Nombre de la Actividad</label>
                        <input type="text" class="form-control" v-model="name_activity"/>
                    </div>

                    <div class="form-group">
                        <label for="selectClass">Grado</label>
                        <multiselect name="selectClass" v-model="grade" :options="newGradeOptions" :multiple="false"
                            :close-on-select="false" :clear-on-select="false"
                            :preserve-search="true" placeholder="Seleccione una"
                            label="text" track-by="id" :preselect-first="true">
                            <template slot="selection" slot-scope="{ values, isOpen }">
                                <span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">
                                    {{ values.length }}
                                    opciones
                                    selecionadas
                                </span>
                            </template>
                        </multiselect>
                    </div>

                    <div class="form-group">
                        <label>Lugar</label>
                        <input type="text" class="form-control" v-model="place"/>
                    </div>

                    <div class="form-group">
                        <label>Fecha de Salida</label>
                        <input type="datetime-local" class="form-control" v-model="departure_time"/>
                    </div>

                    <div class="form-group">
                        <label>Fecha de Llegada</label>
                        <input type="datetime-local" class="form-control" v-model="time_arrival"/>
                    </div>

                    <div class="form-group">
                        <label>Descripción</label>
                        <textarea class="form-control" v-model="description"/>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary" v-on:click="savePedagogic">Guardar Cambios</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['gradeOptions'],
    data(){
        return{
            name_activity: '',
            grade: {},
            place: '',
            departure_time: '',
            time_arrival: '',
            description: '',
            permission: false,
            newGradeOptions:[]
        }
    },
    watch:{
        gradeOptions(newVal, oldVal){
            if(newVal !== oldVal){
                newVal.forEach((element)=>{
                    this.newGradeOptions.push({
                        id:element.id_grade,
                        id_classroom: element.id_grade,
                        text: element.grade
                    })
                })
            }
        }
    },
    methods:{
        savePedagogic(){
            axios.post(`pedagogic`,{
                name_activity: this.name_activity,
                grade: this.grade.text,
                id_classroom: this.grade.id_classroom,
                place: this.place,
                departure_time: this.departure_time,
                time_arrival: this.time_arrival,
                description: this.description,
            }).then((response)=>{
                toastr.success(response.data)
                window.location = "/pedagogic";
            }).catch((error)=>{
                toastr.info('Ha ocurrido algo, intenta de nuevo mas tarde');
                console.log(error)
            })
        }
    }
}
</script>