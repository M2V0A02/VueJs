<template>
    <div v-if="posts.length > 0">
        <h3 style="text-align:center">Посты:</h3>
        <post-item
            v-for="post of posts"
            :key="post.id" 
            :post="post" 
            @remove="this.$emit('delete', post);"
        />  
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
    
</style>