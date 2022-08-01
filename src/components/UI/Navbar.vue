<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div>
        <my-button @click="$router.push('/posts')">Пользователь</my-button>
        <my-button style="" @click="$router.push('/about')">О сайте</my-button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .navbar{
        display: flex;
        justify-content: space-between;
    }
</style>