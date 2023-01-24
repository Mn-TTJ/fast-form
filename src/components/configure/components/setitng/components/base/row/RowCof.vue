<template>
    <Card label="常见属性" :col="1">
        <section>
            <label>唯一名称</label>
            <aside><ui-input /></aside>
        </section>
        <section>
            <label>对齐方式</label>
            <aside><ui-radio tick :labels="['居左', '居中', '居右']" /></aside>
        </section>
        <section>
            <label>列间距</label>
            <aside><ui-input /></aside>
        </section>
    </Card>
</template>

<script setup>
import { defineExpose } from 'vue';
import Card from '@/components/frame/card/Card.vue';
import rowCof from './rowCof';
const { reSet } = rowCof()
defineExpose(reSet)
</script>

<style lang="scss" scoped>
@import '../scss/index.scss';
</style>