<template>
    <h1>
        Vue.js
    </h1>
    <my-button @click="showModel">Добавить пост</my-button>
    <my-dialog v-model:show=dialogVisible>
        <post-form @create="createPost"/>
    </my-dialog>
    <post-list @delete="removePost" :posts="posts" />
    
</template>
<script>
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
export default { 
    components:{
        PostList, PostForm
    },
    data() {
        return {
            posts: [
                {id: 1, title: 'JavaScript', body: 'Описание JS'},
                {id: 2, title: 'HTML', body: 'Описание HTML'},
                {id: 3, title: 'CSS', body: 'Описание CSS'},
                {id: 4, title: 'DRR', body: 'Описание DRR'}
            ],
            dialogVisible: false,   
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

    

    

</style>