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
    <!-- <div class="page__wrapper">
        <pagination style="margin:0 auto" :totalPages="totalPages" v-model:currentPage="pageNumber"></pagination>
    </div> -->
    <div ref="observer"></div>
</template>
<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import Pagination from "@/components/Pagination";
import axios from 'axios';
export default { 
    components:{
        PostList,
        PostForm,
        Pagination
    },
    data() {
        return {
            posts: [],
            dialogVisible: false,
            isPostLoading: true, 
            selectedSort: '',
            limit: 10,
            pageNumber: 1,
            totalPages: 0,
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
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _limit: this.limit,
                        _page: this.pageNumber 
                    }
                });
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                this.posts = response.data;
                this.isPostLoading = false;
            } catch(e) {
                console.log('Ошибка')
            } finally {
                this.isPostLoading = false;
            }
        },
        async LoadingPosts() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _limit: this.limit,
                        _page: this.pageNumber 
                    }
                });
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                this.posts = [...this.posts, ...response.data];
                this.pageNumber += 1;
            } catch(e) {
                console.log('Ошибка')
            } finally {
            }
        },
    },
    mounted() {
        const options = {
            rootMargin: '0px',
            threshold: 1.0
        }
        const callback = (entries, observer) => {
            if (entries[0].isIntersecting) {
                this.LoadingPosts();
            }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.observer);
    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
        },
        sortedAndSearchedPosts() {
            return this.sortedPosts.filter(post => post.title.includes(this.searchQuery))
        }
    },
    watch: {
        pageNumber() {
            //this.fetchPosts();
        }
    }
}
</script>

<style>
    

    .panel{
        display: flex;
        justify-content: space-between;
        margin: 0 15px;
    }

    .page__wrapper {
    display: flex;
    margin-top: 15px;
    justify-content: center;
}
</style>