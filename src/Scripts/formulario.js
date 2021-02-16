import Validacion from './../components/Validacion.vue'

export default {

  name: 'App',
  components: {
    Validacion
  },

  data: function () 
    {      
        return { 
            nombre: "",
            movil: "",
            email: "",
            codigo: "",
            password: "",
            confirma: ""
        }; 
  }

}