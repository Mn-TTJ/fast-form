<template>
    <div :class="o" droppable="true" @dragover.prevent.stop="dragOverEvent" @drop.prevent.stop="dropEvent">
    </div>
</template>

<script setup>
import drogBox from './drogBox'
import Props from './props/index';
// eslint-disable-next-line
const props = defineProps(Props)
const { dropEvent, dragOverEvent, o } = drogBox(props)
</script>

<style lang="scss" scoped>
@import './scss/index.scss';
</style>