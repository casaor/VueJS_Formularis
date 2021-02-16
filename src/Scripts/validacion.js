export default {
    data: function () 
    {      
        return { 
            errors: false,
            messageError:""
        };
    },

    props: ["validacion","typeValidation"],

    methods: 
    {
        GetValidation(validacion,typeValidation){
            if(typeValidation === "text"){
                if(validacion === ""){
                    this.errors = true;
                    this.messageError = "El campo no puede estar vacío";
                }else{
                    this.errors = false;
                }
            }
            if(typeValidation === "number"){
                if(validacion === !isNaN){
                    this.errors = true;
                    this.messageError = "Este campo es numérico";
                }else if(validacion === ""){
                    this.errors = true;
                    this.messageError = "El campo no puede estar vacío";
                }else{
                    this.errors = false;
                }
            }
            if(typeValidation === "email"){
                if(validacion === ""){
                    this.errors = true;
                    this.messageError = "El campo no puede estar vacío";
                }else if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(validacion)){
                    this.errors = true;
                    this.messageError = "El formato de email no es válido";
                }else{
                    this.errors = false;
                }
            }
            if(typeValidation === "password"){
                if(validacion === ""){
                    this.errors = true;
                    this.messageError = "El campo no puede estar vacío";
                }else if(validacion.lenght < 6 || validacion.lenght > 13){
                    this.errors = true;
                    this.messageError = "El password debe contener más de 6 y menos de 13 carácteres";
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