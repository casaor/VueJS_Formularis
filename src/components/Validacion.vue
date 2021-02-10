<template>

    <p v-if="errors.length">
        
        <b>Por favor, corrige los siguientes errores:</b>

        <ul>
            <li v-for="error in errors" v-text="error" :key="error">{{ error }}</li>
        </ul>

    </p>

</template>

<script type="text/javascript" src="./../Scripts/validacion.js"></script>