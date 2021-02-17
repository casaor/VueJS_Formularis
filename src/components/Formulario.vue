<template>        

    <div class="row justify-content-center">

        <form @submit.prevent="GetValidation" class="needs-validation col-md-6 align-self-center p-4 shadow-sm bg-light" novalidate>
           
            <div class="form-row">

                <validacion :validacion="nombre" :typeValidation="'text'" :classCol="'col-md-6'" :labelInput="'Nombre'">
                    <input type="text" class="form-control" v-model="nombre">
                </validacion>
                                   
                <validacion :validacion="movil" :typeValidation="'number'" :classCol="'col-md-6'" :labelInput="'Móvil'">
                    <input type="number" class="form-control" v-model.number="movil">
                </validacion>

            </div>

            <div class="form-row">

                <validacion :validacion="email" :typeValidation="'email'" :classCol="'col-md-10'" :labelInput="'E-mail'">
                    <input type="email" class="form-control" v-model="email">
                </validacion>

                <validacion :validacion="codigo" :typeValidation="'number'" :classCol="'col-md-2'" :labelInput="'Código Postal'">
                    <input type="number" class="form-control" v-model.number="codigo">
                </validacion>
                
            </div>

            <div class="form-row">

                <validacion :validacion="password" :typeValidation="password" :classCol="'col-md-6'" :labelInput="'Password'">
                    <input type="password" class="form-control" v-model="password">
                </validacion>

                <validacion :validacion="confirma" :typeValidation="password" :classCol="'col-md-6'" :labelInput="'Confirma el password'">
                    <input type="password" class="form-control" v-model="confirma">
                </validacion>

            </div>
                
            <button type="submit" class="btn btn-info">Envía</button>

        </form>

    </div>

</template>

<script type="text/javascript" src="./../Scripts/formulario.js"></script>