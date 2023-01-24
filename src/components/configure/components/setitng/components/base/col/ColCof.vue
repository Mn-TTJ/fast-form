<template>
    <Card label="常见属性" :col="1">
        <section>
            <label>唯一名称</label>
            <aside><ui-input v-model="name" @blur="getString(name, 'name')" /></aside>
        </section>
        <section>
            <label>列数</label>
            <aside><ui-input v-model="colCount" @blur="getNumber(colCount, 'colCount')" /></aside>
        </section>
        <section>
            <label>偏移量</label>
            <aside><ui-input /></aside>
        </section>
    </Card>
</template>

<script setup>
import Card from '@/components/frame/card/Card.vue';
import colCof from './colCof.js'
import { defineExpose } from 'vue';
const { name, colCount, reSet, getNumber, getString } = colCof()
defineExpose({ reSet })
</script>

<style lang="scss" scoped>
@import '../scss/index.scss';
</style>