<template>
    <h1>
        Vue.js
    </h1>
    <div class="buttons">
        <button v-on:click="addLike">Увеличить лайки</button>
        <button v-on:click="addDislike">Увеличить дизлайки</button>
    </div>
    <div>
        Работает <span class="likes"><strong>Кол-во лайков {{ likes}} и дизлайков {{ dislikes}} </strong></span>
    </div>    
</template>
<script>
export default {
    data() {
        return {
            likes: 0,
            dislikes: 5,
        }
    },
    methods: {
        addLike() {
            this.likes++;
        },
        addDislike() {
            this.dislikes++;
        }
    }
}
</script>

<style>

</style>