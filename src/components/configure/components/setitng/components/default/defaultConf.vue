<template>
    <div class="default">
        <p>选择组件编辑~~</p>
    </div>
</template>

<script setup>
import defaultConf from './defaultConf'
import { defineExpose } from 'vue';
const { reSet } = defaultConf()
defineExpose({ reSet })
</script>

<style lang="scss" scoped>
@import './scss/default.scss';
</style>