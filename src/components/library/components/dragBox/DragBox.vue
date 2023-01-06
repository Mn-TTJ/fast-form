<template>
    <div class="drag-box" draggable="true" @dragstart="setDragSign(true), dataSet($event)"
        @dragend.prevent="setDragSign(false)">
        <label v-html="icon"></label>
        {{ label }}
    </div>
</template>

<script setup>
import { setDragSign } from '@/core/tree/drag.js'
import Props from './props/index';
import dragBox from './dragBox';
// eslint-disable-next-line
const props = defineProps(Props);
const { dataSet } = dragBox(props)
</script>

<style lang="scss" scoped>
@import './scss/index.scss';
</style>