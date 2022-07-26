<template>
  <button class="button">
    <slot>
    </slot>
  </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style>
    .button{
        height: 50px;
        font-size: 1.5em;
        width: 5em;
    }
</style>