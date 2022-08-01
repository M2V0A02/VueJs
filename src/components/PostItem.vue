<template>
    <div class="post">
        <div class="post-content">
            <div><strong>Название: </strong>{{post.title}}</div>
            <div><strong>Описание: </strong>{{post.body}}</div>
            <my-button @click="this.$emit('remove', post);" class="post-button">Удалить</my-button>
            <my-button @click="$router.push(`/post/${post.id}`)">Открыть</my-button>
        </div>
        
    </div>
    
</template>

<script>

export default {
    components:{
        
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