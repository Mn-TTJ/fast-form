<template>
    <Card label="常见属性" :col="1">
        <section>
            <label>名字</label>
            <aside><ui-input v-model="name" @blur="setAttr(name, 'name')" @keyup.enter="setAttr(name, 'name')" />
            </aside>
        </section>
        <section>
            <label>星期</label>
            <aside><ui-switch v-model="dateRange.week"></ui-switch>
            </aside>
        </section>
        <section>
            <label>禁用</label>
            <aside>
                <ui-switch v-model="dateRange.disabled"></ui-switch>
            </aside>
        </section>
    </Card>
</template>

<script setup>
import Card from '@/components/frame/card/Card.vue';
import dateRangeConf from './dateRangeConf.js'
import { defineExpose } from 'vue';
const { dateRange, name, reSet, setAttr } = dateRangeConf()
defineExpose({ reSet })
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';
</style>