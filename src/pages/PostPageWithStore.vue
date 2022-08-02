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
        <my-select v-model:modelValue="pageSelectedSort" :options="sordOptions"></my-select>
    </div>
    
    <my-dialog v-model:show=dialogVisible>
        <post-form @create="createPost"/>
    </my-dialog>
    <post-list @delete="removePost" :posts="this.sortedAndSearchedPosts" />
    <div v-if="isPostLoading">Идет загрузка</div>
    <div v-intersection="this.loadingPosts" ref="observer"></div>
</template>
<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import Pagination from "@/components/Pagination";
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default { 
    components:{
        PostList,
        PostForm,
        Pagination
    },
    data() {
        return {
            dialogVisible: false,
            pageSelectedSort: ''
        }
    },
    methods: {
        ...mapMutations({
            setPage: 'post/setPage',
            setPost: 'post/setPosts',
            setSearchQuery: 'post/setSearchQuery',
            setSelectedSort: 'post/setSelectedSort'
        }),
        ...mapActions({
            loadingPosts: 'post/loadingPosts',
            fetchPosts: 'post/fetchPosts'
        }),
        updateQuery(event){
            this.setSearchQuery(event.target.value)
        },
        createPost(post){
            this.setPost([...this.posts, post])
        },
        removePost(post){
            this.setPost(this.posts.filter(p => p.id !== post.id))
        },
        showModel(){
            this.dialogVisible = true;
        },
        
    },
    mounted() {
        

    },
    computed: {
        ...mapState({
            posts: state => state.post.posts,
            isPostLoading: state => state.post.isPostLoading, 
            selectedSort: state => state.post.selectedSort,
            limit: state => state.post.limit,
            pageNumber: state => state.post.pageNumber,
            totalPages: state => state.post.totalPages,
            searchQuery: state => state.post.searchQuery,
            sordOptions: state => state.post.sordOptions
        }),
        ...mapGetters({
            sortedPosts: 'post/sortedPosts',
            sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
        })
        
    },
    watch: {
        pageSelectedSort() {
            this.setSelectedSort(this.pageSelectedSort);
        },
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