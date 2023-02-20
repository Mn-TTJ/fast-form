<template>
    <div class="tips">
        <p>空空如也~~</p>
        <p>只建议使用一个</p>
    </div>
</template>

<script setup>
import tipsConf from './tipsConf.js'
import { defineExpose } from 'vue';
const { reSet } = tipsConf()
defineExpose({ reSet })
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';
</style>