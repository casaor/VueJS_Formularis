<template>

    <div>
        <slot v-bind="GetValidation(validacion,typeValidation)"></slot>

        <p v-if="errors" class="warning">{{ messageError }}</p>

    </div>

</template>

<script type="text/javascript" src="./../Scripts/validacion.js"></script>