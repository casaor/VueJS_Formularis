<template>

    <div class="form-group" :class="classCol" >
        <label class="float-left" >{{ labelInput }}</label> 
        <slot :_class="AddClass()" :_maxlength="AddMin(maxlengthVal)" :_bool="(this.require ? 'true' : 'false')"></slot>

        <div v-if="errors">
            <p class="small text-danger" :class="{'is-invalid': errors, 'is-valid': !errors}"> {{ messageError }}</p>
        </div>
    </div>

</template>

<script type="text/javascript" src="./../Scripts/validacion.js"></script>