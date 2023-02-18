<template>
    <div :class="o" droppable="true" @dragover.prevent.stop="dragOverEvent" @drop.prevent.stop="dropEvent"
        ref="dorpContainer">
        <slot></slot>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import drogBox from './drogBox'
import Props from './props/index';
// eslint-disable-next-line
const props = defineProps(Props)
const dorpContainer = ref(null)
const { dropEvent, dragOverEvent, o } = drogBox(props, dorpContainer)
</script>

<style lang="scss" scoped>
@import './scss/index.scss';
</style>