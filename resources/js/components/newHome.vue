<template>
    <div>
        <div>
            <nav class="navbar navbar-expand-md navbar-light">
                <ul class="navbar-nav mr-sm-6 justify-content-start">
                    <li class="margin-logo">
                        <img class="logo-liv4t" thumbnail fluid src="../assets/img/home6.png"  alt="4"></img>
                    </li>
                    <li class="nav-pad">
                        <a class="color-nav" href="">Programas</a>
                    </li>
                    <li class="nav-pad">
                        <a class="color-nav" href="">Qué es</a>
                    </li>
                    <li class="nav-pad">
                        <a class="color-nav" href="">Contáctanos</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="col fondo1">

        </div>
        <div class="row fondo2">
            <div class="col-md-5"></div>
            <div class="col-md-7">
                <div class="row">
                    <div class="col-lg-6">
                        <img class="img-dim" src="../assets/img/home4.png" alt="" style="margin-top: -60px"> 
                    </div>
                    <div class="col-lg-6">
                        <img class="img-dim" src="../assets/img/home3.png" alt=""> 
                    </div>
                    <div class="col-lg-6 img-pos">
                        <label class="text-img-pos"><b>Liv4T Skool</b> es una plataforma educativa de comunicación y gestión de contenidos que apoya los procesos administrativos y pedagógicos, y que permite conexión remota y seguimiento. Diseñada por profesores y administradores escolares.</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="col fondo3">
            <div>
                <img class="logo-liv4t-old" thumbnail fluid src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/LOGO_LIV4T_SKOOL.png?alt=media&token=e0a74c90-0f0d-4932-863a-827b5f87ed0c">
            </div>
            <div>
                <label class="text-fondo3">Roles para Estudiantes, Docentes, Administrativos y Padres de Familia</label>
            </div>
            <div>
                <label class="text-fondo3">Módulo Psicología</label>
            </div>
            <div>
                <label class="text-fondo3">Módulo de Gobierno Escolar</label>
            </div>
            <div>
                <label class="text-fondo3">Reportes Personalizados</label>
            </div>
            <div>
                <label class="text-fondo3">Banco de Contenidos y Recursos Pedagógicos</label>
            </div>
            <div>
                <label class="text-fondo3">Módulo de Electivas</label>
            </div>
            <div>
                <label class="text-fondo3">Módulo de Tutorías</label>
            </div>
        </div>
        <div class="col fondo4">
            <div class="container" style="padding-top:100px;">
                <div>
                    <a class="text-virtualiza"><img class="img-virtualiza" src="../assets/img/home7.1.png" alt="">Planeación Académica</a>
                </div>
                <div>
                    <a class="text-virtualiza"><img class="img-virtualiza" src="../assets/img/home7.2.png" alt="">Gestión Administrativa</a>
                </div>
                <div>
                    <a class="text-virtualiza"><img class="img-virtualiza" src="../assets/img/home7.3.png" alt="">Comunicación Instantanea y Segura</a>
                </div>
                <div>
                    <a class="text-virtualiza"><img class="img-virtualiza" src="../assets/img/home7.4.png" alt="">Apoyo a la Formación Integral</a>
                </div>
                <div>
                    <a class="text-virtualiza"><img class="img-virtualiza" src="../assets/img/home7.5.png" alt="">Enseñanza Sincrónica y Asincrónica</a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div>
                    <img src="../assets/img/home12.png" alt="">
                </div>
                <div>
                    <p class="text-porque">Liv4T Skool da roles diversos que le permitirán evaluar, analizar y llevar un adecuado seguimiento de docentes y estudiantes, permitiendo el analisis de procesos, cotenidos, actividades y rendiiento.</p>
                    <p class="text-porque">Permite comunicación constante a través de chat o correos electrónicos en los diferentes estamentos de la institución.</p>
                    <p class="text-porque">Articula los aspectos administrativos del colegio en función de los aprendizajes de los estudiantes.</p>
                </div>
            </div>
            <div class="col-lg-6">
                <img src="../assets/img/home11.png" alt="">
            </div>
        </div>
        <div class="fondo5">
        </div>
        <div class="text-center">
            <label class="form-tittle-text">TU COLEGIO A UN CLIC</label>
            <p class="line-yellow-form"></p>
            <br>
        </div>
        <div class="row centrado fondo-gris-form">
            <div class="col-lg-6">
                <div class="text-center margin-b">
                    <label style="font-size: 48px; font-family: Nunito;">INSCRÍBETE</label>
                    <p class="line-yellow-form2"></p>
                </div>
                <div class="text-center margin-b">
                    <label style="font-size: 36px; font-family: Nunito;">inscripciones@liv4t.com</label>
                </div>
                <div class="text-center margin-b">
                    <a href=""><i class="fab fa-facebook" style="font-size: 50px; color: black;"></i></a>
                    <a href=""><i class="fab fa-instagram" style="font-size: 50px; color: black;"></i></a>
                </div>
            </div>
             <div class="col-lg-6">
                <form v-on:submit.prevent="createContact">
                    <div class="form-group">
                        <input type="text" class="form-control" name="name" id="name" v-model="name" placeholder="Nombre Completo" required>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" name="email" id="email" v-model="email" placeholder="Correo Electrónico" required>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" name="phone" id="phone" v-model="phone" placeholder="Teléfono" required>
                    </div>
                    <div class="form-group" style="margin-bottom:0;">
                        <textarea type="textarea" class="form-control" name="message" id="message" v-model="message" placeholder="Mensaje" size="lg" rows="8" required></textarea>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" required>
                        <label class="form-check-label text-terms" for="gridCheck">
                            Acepto Políticas de datos y términos y condiciones
                        </label>
                    </div>
                    <div>
                        <button type="submit" class="btn btn-primary text-center btn-form">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="text-center">
            <div>
                <label class="margin-b" style="font-size: 48px; font-weight:900; font-family: Nunito;">Recibe todas las novedades de nuestra comunidad</label>
            </div>
            <div>
                <form v-on:submit.prevent="suscribe">
                    <div class="row centrado2">
                        <div class="col-lg-8">
                            <input type="text" class="form-control" v-model="email_novedades" placeholder="Ingresa tu e-mail">
                        </div>
                        <div class="col-lg-3" style="text-align: left;">
                            <button type="submit" class="btn btn-primary btn-form2">INGRESAR</button>
                        </div>
                        <div class="form-check" style="margin-left: 25px;">
                            <input class="form-check-input" type="checkbox" id="gridCheck" required>
                            <label class="form-check-label text-terms" for="gridCheck">
                                Acepto Políticas de datos y términos y condiciones
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
</template>
<script>
import Vue from "vue";

export default {
    data() {
        return {
            name: "",
            email: "",
            phone: "",
            email_novedades: "",
        };
    },
    computed: {},
    methods: {
        
    }
};
</script>
<style>
.logo-liv4t{
    height: 100px !important;
}
.logo-liv4t-old{
    height: 200px !important;
    margin-left: 180px;
}
.margin-logo{
    margin-right: 250px !important;
}
.color-nav{
    color: black;
    font-size: 24px !important;
    text-decoration: none !important;
    font-family: Nunito;
}
.nav-pad{
    padding-top: 20px;
}
.fondo1 {
    background-image: url("../assets/img/home1.png");
    background-repeat: no-repeat;
    height: 600px;
}
.fondo2{
    background-image: url("../assets/img/home2.1.png");
    background-repeat: no-repeat;
    height: 600px;
}
.logo-fondo2{
    background-image: url("../assets/img/home4.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 230px;
}
.img-dim{
    width: 800px;
    height: 600px !important;
}
.img-pos{
   background-image: url("../assets/img/home5.png");
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    height: 450px;
    top: 105px;
    left: -295px;
    max-width: 950px;
    width: 950px;
}
.text-img-pos{
    top: 100px;
    position: absolute;
    padding: 70px 60px 70px 225px;
    font-size: 28px;
    text-align: justify;
    font-family: Nunito;
    line-height: 30px;
    font-weight: 400;
}
.fondo3{
    background-image: url("../assets/img/home7.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 600px;
}
.text-fondo3{
    font-weight: 900;
    font-size: 26px;
    font-family: Nunito;
    margin-left: 20px;
    margin-bottom: 1.5rem;
}
.fondo4{
    background-image: url("../assets/img/home8.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 680px;
}
.img-virtualiza{
    height: 110px !important;
}
.text-virtualiza{
    color: black;
    font-size: 30px !important;
    text-decoration: none !important;
    font-family: Nunito;
}
.text-porque{
    color: black;
    font-size: 24px !important;
    text-decoration: none !important;
    font-family: Nunito;
    line-height: 25px;
    text-align: justify;
    padding: 10px 10px 10px 30px;
}
.fondo5{
    background-image: url("../assets/img/home13.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 680px;
    margin-bottom: 3rem;
}
.centrado{
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    padding: 50px;
}
.centrado2{
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    padding: 20px 20px 20px 70px;
}
.line-yellow-form{
    border-bottom: 7px solid rgb(248, 207, 26);
    max-width: 380px;
    padding: 0;
    margin: 2px auto 0 auto !important;
}
.line-yellow-form2{
    border-bottom: 4px solid rgb(248, 207, 26);
    max-width: 300px;
    padding: 0;
    margin: 2px auto 0 auto !important;
}
.fondo-gris-form{
    background-color: #dddddd; 
    border-radius: 30px;
    margin-bottom: 4rem;
    border: 2px solid black;
}
.form-tittle-text{
    font-size: 56px;
    font-weight: 900;
    font-family: Nunito;
}
.margin-b{
    margin-bottom: 2rem;
}
.btn-form{
    left: 35%;
    font-size: 40px;
    width: 60%;
    padding: 0;
    margin: 0;
    border: 0;
    letter-spacing: 0.11em;
    border-radius: 15px;
    font-family: Nunito;
}
.text-terms{
    color: #7e7e7e !important; 
    margin-bottom:1rem;
    font-size: 16px;
    font-family: Nunito;
}
.btn-form2{
    font-size: 25px;
    padding: 0px 8px 0px 8px !important;
    letter-spacing: 0.11em;
    border-radius: 10px;
    height: 35px;
    font-family: Nunito;
}

</style>