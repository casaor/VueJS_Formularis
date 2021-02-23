export default {
    data: function () 
    {      
        return { 
            errors: false,
            messageError:"",
            require: false,
        };
    },

    props: ["validacion","typeValidation","classCol","labelInput", "_bool", "_maxlength", "maxlengthVal", "compara"],

    methods: 
    {
        AddClass()
        {
            if (this.validacion === ""){
                return "is-invalid1";
            }
            
        },
        AddMin(max)
        {
            return max;
        }

    },
    beforeUpdate (){
            if(this.typeValidation === "text"){
                if(this.validacion === ""){
                    this.errors = true;
                    this.messageError = "El campo no puede estar vacío";
                }else if(this.validacion.length < 6 || this.validacion.length > 13){
                    this.errors = true;
                    this.messageError = "El nombre debe contener entre 6 y 13 carácteres";
                }else{
                    this.errors = false;
                }
            }else if(this.typeValidation === "number"){
                if(this.validacion === ""){
                    this.errors = true;
                    this.messageError = "El campo no puede estar vacío";
                }else if(isNaN(this.validacion)){
                    this.errors = true;
                    this.messageError = "Este campo debe ser numérico";
                }else{
                    this.errors = false;
                }
            }else if(this.typeValidation === "email"){
                if(this.validacion === ""){
                    this.errors = true;
                    this.messageError = "El campo no puede estar vacío";
                }else if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.validacion)){
                    this.errors = false;
                }else{
                    this.errors = true;
                    this.messageError = "El formato de email no es válido";
                }
            }else if(this.typeValidation === "password"){
                if(this.validacion === ""){
                    this.errors = true;
                    this.messageError = "El campo no puede estar vacío";
                }else if(this.validacion.length < 6 || this.validacion.length > 13){
                    this.errors = true;
                    this.messageError = "El password debe contener entre 6 y 13 carácteres";
                }else if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(this.validacion)){
                    this.errors = false;
                }else{
                    this.errors = true;
                    this.messageError = "El password debe contener mayúsculas, minúsculas y algún número";
                }
            }else if(this.typeValidation === "match"){
                if(this.validacion === ""){
                    this.errors = true;
                    this.messageError = "El campo no puede estar vacío";
                }else if(this.validacion != this.compara) {
                    this.errors = true;
                    this.messageError = "El password no coincide";
                }else{
                    this.errors = false;
            }
        }
    }
}