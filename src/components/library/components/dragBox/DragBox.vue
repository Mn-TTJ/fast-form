<template>
    <div class="drag-box" draggable="true" @dragstart="dataSet($event)" @dragend="setdroger(null)">
        <label v-html="icon"></label>
        {{ label }}
    </div>
</template>

<script setup>
import Props from './props/index';
import { setdroger } from '@/core/store/store.js'
import dragBox from './dragBox';
// eslint-disable-next-line
const props = defineProps(Props);
const { dataSet } = dragBox(props)
</script>

<style lang="scss" scoped>
@import './scss/index.scss';
</style>