<template>
    <div class="layout-box" @click="clickEvent(json)">
        <div class="layout-image" :style="{ 'backgroundImage': 'url(' + image + ')' }">
        </div>
        <label>{{ label }}</label>
    </div>
</template>

<script setup>
import layout from './layout'
import Props from './props'
// eslint-disable-next-line
const props = defineProps(Props);
const { clickEvent } = layout()
</script>

<style lang="scss" scoped>
@import './scss/index.scss';
</style>