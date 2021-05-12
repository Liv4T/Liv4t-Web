<template> 
    <div class="mb-3 text-center">
        <a href="/perfil_d" class="btn btn-sm btn-secondary">
            Mi Perfil
        </a>

        <div class="dropdown">
            <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" id="comunication" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Comunicaciones
            </button>
            <div class="dropdown-menu" aria-labelledby="comunication">
                <a class="dropdown-item" href="/mensajes">Mensajes</a>
                <a class="dropdown-item" href="/chat">Chat</a>
            </div>
        </div>

        <a href="/governmentMembers" class="btn btn-sm btn-secondary">
            Quienes lo Conforman
        </a>

        <a href="/legislation" class="btn btn-sm btn-secondary">
            Legislación
        </a>

        <a href="/staments" class="btn btn-sm btn-secondary">
            Estamentos Escolares
        </a>

        <a href="/schoolGobernment" class="btn btn-sm btn-secondary">
            Actas y Circulares
        </a>

        <a href="/manual" class="btn btn-sm btn-secondary">
            PEI Y Manual de Convivencia
        </a>
    </div>
</template>
<script>
export default {
  methods: {
    logout: function () {
      axios
        .post("logout")
        .then((response) => {
          if (response.status === 302 || 401) {
            window.location.href = "/login";
          } else {
            // throw error and go to catch block
          }
        })
        .catch((error) => {});
    },
  },
};
</script>
