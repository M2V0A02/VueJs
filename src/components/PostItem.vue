<template>
    <div class="post">
        <div class="post-content">
            <div><strong>Название: </strong>{{post.title}}</div>
            <div><strong>Описание: </strong>{{post.body}}</div>
        </div>
        <my-button-vue class="post-button">Удалить</my-button-vue>
    </div>
    
</template>

<script>
import MyButtonVue from './UI/MyButton.vue'
export default {
    components:{
        MyButtonVue
    },
    props: {
        post:{
            type: Object,
            require: true
        }
    }
}
</script>

<style>
    .post{
        border: 2px red solid;
        padding: 25px;
        margin-top:15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .post-button{
        
    }
</style>