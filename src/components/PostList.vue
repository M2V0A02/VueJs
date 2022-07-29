<template>
    <div v-if="posts.length > 0">
        <h3 style="text-align:center">Посты:</h3>
        <div class="posts">
            <transition-group name="post-list">
            <post-item
                v-for="post of posts"
                :key="post.id" 
                :post="post" 
                @remove="this.$emit('delete', post);"
                class="post-item"
            />  
        </transition-group>
        </div>
    </div>
    <div v-else>
        <h3 style="text-align:center">Постов нет</h3>
    </div>
</template>

<script>
import { arrayTypeAnnotation } from '@babel/types';
import PostItem from "@/components/PostItem";
export default {
    components:{
            PostItem
    },
    props: {
        
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>
    .post-item {
    display: inline-block;
    margin-right: 10px;
    }
    .post-list-enter-active, .post-list-leave-active {
    transition: all 1s;
    }
    .post-list-enter, .post-list-leave-to /* .list-leave-active до версии 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
    }
    .post-list-move {
    transition: transform 1s;
    }
    .posts{
        display: flex;
        flex-direction: column;
    }
</style>