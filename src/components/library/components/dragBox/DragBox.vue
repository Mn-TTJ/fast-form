<template>
    <div class="drag-box" draggable="true" @dragstart="setDragSign(true)" @dragend.prevent="setDragSign(false)">
        <label v-html="icon"></label>
        {{ label }}
    </div>
</template>

<script setup>
import { setDragSign } from '@/core/tree/drag.js'
import Props from './props/index';
// eslint-disable-next-line
const props = defineProps(Props);
</script>

<style lang="scss" scoped>
@import './scss/index.scss';
</style>