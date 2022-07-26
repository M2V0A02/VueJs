<template>
    <form class="posts-form" action="" @submit.prevent>
        <h4 class="posts-form__title">Создание поста</h4>
        <my-input
            class="posts-form__input" 
            v-model:value="post.title"
            type="text"
            name="title"
            placeholder="Название"
        />
        <my-input class="posts-form__input" v-model:value="post.body"  type="text" name="body" placeholder="Имя" />
        <my-button style="margin: 15px auto;" @click="createPost" class="posts-form__button">Создать</my-button>
    </form>
</template>

<script>

export default {
    components:{
        
    },
    data() {
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        
        createPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: ''
            }
        }
    }
}
</script>

<style>
    .posts-form{
        display: flex;
        flex-direction: column;
    }

    .posts-form__title{
        font-size: 2em;
        text-align: center;
    }

    .posts-form__input{
        margin: 15px auto;
    }

    
</style>