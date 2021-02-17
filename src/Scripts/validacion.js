export default {
    data: function () 
    {      
        return { 
            errors: false,
            messageError:""
        };
    },

    props: ["validacion","typeValidation","classCol","labelInput"],

    methods: 
    {
        GetValidation (validacion,typeValidation){
            if(typeValidation === "text"){
                if(validacion.length < 6 || validacion.length > 13){
                    this.errors = true;
                    this.messageError = "El nombre debe contener entre 6 y 13 carácteres";
                }else{
                    this.errors = false;
                }
            }
            else if(typeValidation === "number"){
                if(isNaN(validacion)){
                    this.errors = true;
                    this.messageError = "Este campo debe ser numérico";
                }else{
                    this.errors = false;
                }
            }
            else if(typeValidation === "email"){
                if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(validacion)){
                    this.errors = true;
                    this.messageError = "El formato de email no es válido";
                }else{
                    this.errors = false;
                }
            }
            else if(typeValidation === "password"){
                if(validacion.length < 6 || validacion.length > 13){
                    this.errors = true;
                    this.messageError = "El password debe contener entre 6 y 13 carácteres";
                }else if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(validacion)){
                    this.errors = true;
                    this.messageError = "El password debe contener mayúsculas, minúsculas y algún número";
                }else{
                    this.errors = false;
                }
            }
                
        }

    }
}