<template>
    <Card label="数据收集" :col="1">
        <section>
            <ui-button @click="dataSet"><label class="new-btn">数据设置</label></ui-button>
        </section>
    </Card>
</template>

<script setup>
import Card from '@/components/frame/card/Card.vue';
import codeConf from './codeConf.js'
import { defineExpose } from 'vue';
const { reSet, dataSet } = codeConf()
defineExpose({ reSet })
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';
</style>