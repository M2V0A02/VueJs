<template>
    <h1>
        Vue.js
    </h1>
    <div>
        Поиск
        <my-input
            :value="searchQuery"
            @input="updateQuery"
            placeholder = "Поиск...."
        />
    </div>
    <div class="panel">
        <my-button @click="showModel">Добавить пост</my-button>
        <my-select v-model="selectedSort" :options="sordOptions"></my-select>
    </div>
    
    <my-dialog v-model:show=dialogVisible>
        <post-form @create="createPost"/>
    </my-dialog>
    <post-list @delete="removePost" :posts="sortedAndSearchedPosts" />
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
            selectedSort: '',
            searchQuery: '',
            sordOptions: [
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По содержимому'}
            ]  
        }
    },
    methods: {
        updateQuery(event){
            this.searchQuery = event.target.value;
        },
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
    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
        },
        sortedAndSearchedPosts() {
            return this.sortedPosts.filter(post => post.title.includes(this.searchQuery))
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

    .panel{
        display: flex;
        justify-content: space-between;
        margin: 0 15px;
    }
</style>