<template>

    <div class="form-group" :class="classCol">
        <label class="float-left">{{ labelInput }}</label> 
        <slot v-bind="GetValidation(validacion,typeValidation)"></slot>
        <p v-if="errors" class="warning small float-left">{{ messageError }}</p>
    </div>

</template>

<script type="text/javascript" src="./../Scripts/validacion.js"></script>