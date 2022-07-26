<template>
    <div>
        <h3>Посты:</h3>
        <post-item v-for="post in posts" :post="post" />  
        
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