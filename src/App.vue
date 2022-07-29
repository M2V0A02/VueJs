<template>
    <h1>
        Vue.js
    </h1>
    <my-button @click="fetchPosts">Получить посты</my-button>
    <my-button @click="showModel">Добавить пост</my-button>
    <my-dialog v-model:show=dialogVisible>
        <post-form @create="createPost"/>
    </my-dialog>
    <post-list @delete="removePost" :posts="posts" />
    <div v-if="isPostLoading">Идет загрузка</div>
</template>
<script>
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import axios from 'axios';
export default { 
    components:{
        PostList, PostForm
    },
    data() {
        return {
            posts: [],
            dialogVisible: false,
            isPostLoading: true,   
        }
    },
    methods: {
        createPost(post){
            this.posts.push(post);
        },
        removePost(post){
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showModel(){
            this.dialogVisible = true;
        },
        async fetchPosts() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                this.posts = response.data;
                this.isPostLoading = false;
            } catch(e) {
                console.log('Ошибка')
            } finally {
                this.isPostLoading = false;
            }
        },
    },
    mounted() {
        this.fetchPosts();
    }
    
}
</script>

<style>
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

</style>