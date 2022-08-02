<template>
    <h1>
        Vue.js
    </h1>
    <div>
        Поиск
        <input
            v-model="searchQuery"
            placeholder = "Поиск...."
        />
    </div>
    <div class="panel">
        <my-select v-model="selectedSort" :options="sordOptions"></my-select>
    </div>
    <post-list @delete="removePost" :posts="sortedAndSearchedPosts" />
</template>
<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import Pagination from "@/components/Pagination";
import {ref} from 'vue';
import {usePosts} from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";

export default { 
    components:{
        PostList,
        PostForm,
        Pagination
    },
    data() {
        return {
            dialogVisible: false,
            sordOptions: [
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По содержимому'}
            ]  
        }
    },
    setup(props) {
        const {posts, totalPages, isPostLoading} = usePosts(10);
        const {sortedPosts, selectedSort} = useSortedPosts(posts);
        const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts);

        return {
            totalPages,
            selectedSort,
            isPostLoading,
            sortedAndSearchedPosts,
            searchQuery
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