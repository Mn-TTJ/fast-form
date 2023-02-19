<template>
    <div class="preview" @click.stop ref="root">
    </div>
</template>

<script setup>
import { ref } from 'vue'
import preview from './preview'
const root = ref(null)
preview(root)
</script>

<style lang="scss" scoped>
@import './scss/index.scss';
</style>

<style lang="scss">
.preview-render {
    height: 100%;
    width: 100%;
    overflow: auto;

    &::-webkit-scrollbar {
        display: none;
    }
}
</style>