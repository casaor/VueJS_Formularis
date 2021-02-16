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

  // methods:
  // {
  //   checkForm() 
  //   {
  //     this.errors = [];

  //     if (!this.nombre) {
  //       this.errors.push("Campo Nombre requerido.");
  //     }

  //     if (!this.email) {
  //       this.errors.push('Campo Email requerido.');
  //     } else if (!this.validEmail(this.email)) {
  //       this.errors.push('Escribe un email válido.');
  //     }

  //     if(this.confirma.value !== this.password.value){
  //       this.errors.push('El password no coincide')
  //     }

  //     if (!this.errors.length) {
  //       return true;
  //     }

  //   },
    
  //   validEmail(email) 
  //   {
  //     var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //     return re.test(email);
  //   }
    
  // }

}