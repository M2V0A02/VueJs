<template>
    <div 
        class="page"
        v-for="page in totalPages"
        :key="page"
        :class="{'current-page': page === currentPage}"
        @click="changePage(page)"
    >
        {{page}}
    </div>
</template>

<script>
import { isIntegerKey } from '@vue/shared';

export default {
    props: {
        totalPages:Number,
        currentPage: Number
    },
    methods: {
        changePage(pageNumber) {
            console.log(this.pageNumber)
            this.$emit('update:currentPage', pageNumber);
        }
    }
}
</script>

<style>


.page {
    border: 1px solid black;
    padding: 10px;
}

.current-page{
    border: 2px red solid;
}
</style>