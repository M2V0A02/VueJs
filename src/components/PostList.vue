<template>
    <div class="post" v-for="post in posts">
        <div><strong>Название: </strong>{{post.title}}</div>
        <div><strong>Описание: </strong>{{post.body}}</div>
    </div>
</template>

<script>
import { arrayTypeAnnotation } from '@babel/types';

export default {
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>
    .post{
        border: 2px red solid;
        padding: 25px;
        margin-top:15px;
    }
</style>