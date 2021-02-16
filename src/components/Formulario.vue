<template>        

    <div class="row justify-content-center">

        <form @submit.prevent="GetValidation" class="needs-validation col-md-6 align-self-center p-4 shadow-sm bg-light" novalidate>
            <div class="form-row">
                    <div class="form-group col-md-6">
                        <label class="float-left">Nombre</label>
                        <validacion :validacion="nombre" :typeValidation="'text'">
                            <input type="text" class="form-control" v-model="nombre">
                        </validacion>
                    </div>
                    
                    <div class="form-group col-md-6">
                        <label class="float-left">Móvil</label>
                        <validacion :validacion="movil" :typeValidation="number">
                            <input type="number" class="form-control" v-model.number="movil">
                        </validacion>
                    </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-10">
                    <label class="float-left">Email</label>
                    <validacion :validacion="email" :typeValidation="'text'">
                        <input type="email" class="form-control" v-model="email">
                    </validacion>
                </div>
                <div class="form-group col-md-2">
                    <label class="float-left">Código Postal</label>
                    <validacion :validacion="codigo" :typeValidation="number">
                        <input type="number" class="form-control" v-model.number="codigo">
                    </validacion>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label class="float-left">Password</label>
                    <validacion :validacion="password" :typeValidation="password">
                        <input type="password" class="form-control" v-model="password">
                    </validacion>
                </div>
                <div class="form-group col-md-6">
                    <label class="float-left">Confirmar Password</label>
                    <validacion :validacion="confirma" :typeValidation="password">
                        <input type="password" class="form-control" v-model="confirma">
                    </validacion>
                </div>
            </div>
                
            <button type="submit" v-on:click="GetValidation" class="btn btn-info">Envía</button>

        </form>

         <validacion></validacion>

    </div>

</template>

<script type="text/javascript" src="./../Scripts/formulario.js"></script>