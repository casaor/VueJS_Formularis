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
            // if(typeValidation === "password"){
            //     let Match matchLongitud = Regex.Match(pass,@"^\w{6,13}\b");
            //     Match matchNumeros = Regex.Match(pass,@"\d");
            //     Match matchEspeciales = Regex.Match(pass,@"[ñÑ\-_¿.#¡]");
            //     Match matchMayusculas = Regex.Match(pass,@"[A-Z]");
            //     if(!matchLongitud.Success){
            //         this.errors = true;
            //         this.messageError = "El password tiene que tener más de 6 carácteres y menos de 13";
            //     }else if(validacion)
            // }
                
        }

    }
}