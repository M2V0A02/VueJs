<template>
    <div class="modal" v-if="show" @click.stop="closeDialog">
        <div @click.stop class="modal-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import dialogMixin from '@/mixins/dialogMixin';

export default {
    name: "my-dialog",
    mixins: [dialogMixin]
}
</script>

<style>
    .modal{
        left:0;
        top:0;
        position: absolute;
        background: rgba(0, 0, 0, 0.5);
        height: 100%;
        width: 100%;
    }

    .modal-content{
        padding: 25px;
        background: white;
        max-width: 500px;
        margin:5px auto 0 auto;
    }

</style>