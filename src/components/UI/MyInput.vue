<template>
  <input :value="value" @input="UpdateInput" class="input" type="text">
</template>

<script>
export default {
    name: "my-input",
    props: {
        value: {String, Number}
    },
    methods: {
        UpdateInput(event){
            this.$emit('update:value', event.target.value);
        }
    }
}
</script>

<style>
.input{
    height: 50px;
    width: 50%;
}
</style>