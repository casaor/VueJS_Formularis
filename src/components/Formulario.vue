<template>        

    <div class="row justify-content-center">

        <form @submit.prevent="GetValidation" class="needs-validation col-md-6 align-self-center p-4 shadow-sm bg-light" novalidate>
           
            <div class="form-row">

                <validacion :validacion="nombre" :typeValidation="'text'" :classCol="'col-md-6'" :labelInput="'Nombre'" :maxlengthVal="13">
                    <template scope="{_class, _bool, _maxlength}">
                        <input type="text" class="form-control" v-model="nombre" :class="_class" :maxlength="_maxlength" :requi="_bool">
                    </template>
                </validacion>
                                   
                <validacion :validacion="movil" :typeValidation="'number'" :classCol="'col-md-6'" :labelInput="'Móvil'">
                    <template scope="{_class}">
                        <input type="text" class="form-control" v-model.number="movil" :class="_class">
                    </template>
                </validacion>

            </div>

            <div class="form-row">

                <validacion :validacion="email" :typeValidation="'email'" :classCol="'col-md-10'" :labelInput="'E-mail'">
                    <template scope="{_class}">
                        <input type="email" class="form-control" v-model="email" :class="_class">
                    </template>
                </validacion>

                <validacion :validacion="codigo" :typeValidation="'number'" :classCol="'col-md-2'" :labelInput="'Código Postal'">
                    <template scope="{_class}">
                        <input type="text" class="form-control" v-model.number="codigo" :class="_class">
                    </template>
                </validacion>
                
            </div>

            <div class="form-row">

                <validacion :validacion="contrasena" :typeValidation="'password'" :classCol="'col-md-6'" :labelInput="'Password'">
                    <template scope="{_class}">
                        <input type="password" class="form-control" v-model="contrasena" :class="_class">
                    </template>
                </validacion>

                <validacion :validacion="confirma" :compara="contrasena" :typeValidation="'match'" :classCol="'col-md-6'" :labelInput="'Confirma el password'">
                    <template scope="{_class}">
                        <input type="password" class="form-control" v-model="confirma" :class="_class">
                    </template>
                </validacion>

            </div>
                
            <button type="submit" class="btn btn-info">Envía</button>

            <p v-if="validate" class="text-success mt-4">Tu formulario ha sido enviado correctamente</p>

        </form>


    </div>

</template>

<script type="text/javascript" src="./../Scripts/formulario.js"></script>