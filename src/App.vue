<template>
    <h1>
        Vue.js
    </h1>
    <form class="posts-form" action="" @submit.prevent>
        <h4 class="posts-form__title">Создание поста</h4>
        <input 
            v-bind:value="title"
            @input="title = $event.target.value"
            class="posts-form__input"
            type="text"
            name="title"
            placeholder="Название"
        >
        <input v-bind:value="body" @input="body = $event.target.value" class="posts-form__input" type="text" name="body" placeholder="Имя">
        <button @click="createPost" class="posts-form__button">Создать</button>
    </form>
    <div class="post" v-for="post in posts">
        <div><strong>Название: </strong>{{post.title}}</div>
        <div><strong>Описание: </strong>{{post.body}}</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            posts: [
                {id: 1, title: 'JavaScript', body: 'Описание JS'},
                {id: 2, title: 'HTML', body: 'Описание HTML'},
                {id: 3, title: 'CSS', body: 'Описание CSS'},
                {id: 4, title: 'DRR', body: 'Описание DRR'}
            ],
            title: '',
            body: ''
            
        }
        
    },
    methods: {
        
        createPost() {
            const newPost = {
                id: Date.now(),
                title: this.title,
                body: this.body,
            }
            this.posts.push(newPost);
        }
    }
}
</script>

<style>
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    .post{
        border: 2px red solid;
        padding: 25px;
        margin-top:15px;
    }

    .posts-form{
        display: flex;
        flex-direction: column;
    }

    .posts-form__title{
        font-size: 2em;
        text-align: center;
    }

    .posts-form__input{
        width: 100%;
        margin: 15px auto;
        height: 50px;
        width: 50%;
    }

    .posts-form__button{
        height: 50px;
        font-size: 1.5em;
        width: 50%;
        margin: 15px auto;
    }

</style>