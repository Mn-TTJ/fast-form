<template>
    <Card label="常见属性" :col="1">
        <section>
            <label>列数</label>
            <aside><ui-input v-model="colCount" @blur="getColCount" @keyup.enter="getColCount" /></aside>
        </section>
        <section>
            <label>偏移量</label>
            <aside><ui-input v-model="colOffset" @blur="getColOffset" @keyup.enter="getColOffset" /></aside>
        </section>
    </Card>
    <class-name v-model="col.class"></class-name>
</template>

<script setup>
import Card from '@/components/frame/card/Card.vue';
import ClassName from '../../className/ClassName.vue';
import colConf from './colConf.js'
import { defineExpose } from 'vue';
const { col, colOffset, colCount, reSet, getColCount, getColOffset } = colConf()
defineExpose({ reSet })
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';
</style>