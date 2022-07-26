<template>
    <h1>
        Vue.js
    </h1>
    <post-form @create="createPost"/>
    <post-list :posts="posts" />
    
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
            
        }
        
    },
        methods: {
            createPost(post){
                this.posts.push(post);
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