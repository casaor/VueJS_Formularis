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
            contrasena: "",
            confirma: "",
            validate: false 
        }; 
  },

  methods:
  {
    GetValidation(){
      var forms = document.querySelectorAll('.form-control is-invalid1,.is-invalid');
      console.log(forms);
      // for (var i = 0; i < forms.lenght; i++) {
        forms.forEach(form => {
          if (form.className == 'form-control is-invalid1'){
            this.validate = false;
          }else if (form.className == 'is-invalid'){
            this.validate = false;
          }
          return this.validate 
        });
        this.validate = true;c 
    } 
  }

}