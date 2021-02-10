<template>        

    <div class="row justify-content-center">

        <form @submit.prevent="checkForm" class="needs-validation col-md-6 align-self-center p-4 shadow-sm bg-light" novalidate>
            <div class="form-row">
                <div class="form-group col-md-6">
                        <label class="float-left">Nombre</label>
                        <input type="text" class="form-control" v-model="nombre" minLength=6 maxLength=13 required>
                    </div>
                    
                    <div class="form-group col-md-6">
                        <label class="float-left">Móvil</label>
                        <input type="number" class="form-control" v-model.number="movil" required>
                    </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-10">
                    <label class="float-left">Email</label>
                    <input type="email" class="form-control" v-model="email" required>
                </div>
                <div class="form-group col-md-2">
                    <label class="float-left">Código Postal</label>
                    <input type="number" class="form-control" v-model.number="codigo" required>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label class="float-left">Password</label>
                    <input type="password" class="form-control" v-model="password" minLength=6 maxLength=13 pattern="^[_a-zA-Z0-9\-]{5,15}$" required>
                </div>
                <div class="form-group col-md-6">
                    <label class="float-left">Confirmar Password</label>
                    <input type="password" class="form-control" v-model="confirma" v-on:blur="validate" minLength=6 maxLength=13 pattern="^[_a-zA-Z0-9\-]{5,15}$" required>
                </div>
            </div>
                
            <button type="submit" v-on:click="checkForm" class="btn btn-info">Envía</button>

        </form>

         <validacion>
            <slot name="errors"></slot>        
        </validacion>

    </div>

</template>

<script type="text/javascript" src="./../Scripts/formulario.js"></script>