<template>
    <Card label="常见属性" :col="1">
        <section>
            <label>水平对齐</label>
            <aside><ui-radio tick group="justify" :labels="['居左', '居中', '居右']"
                    :values="['flex-start', 'center', 'flex-end']" v-model="justify" /></aside>
        </section>
        <section>
            <label>垂直对齐</label>
            <aside><ui-radio tick group="align" :labels="['居左', '居中', '居右']"
                    :values="['flex-start', 'center', 'flex-end']" v-model="align" /></aside>
        </section>
    </Card>
</template>

<script setup>
import { defineExpose } from 'vue';
import Card from '@/components/frame/card/Card.vue';
import rowConf from './rowConf';
const { justify, align, reSet } = rowConf()
defineExpose({ reSet })
</script>

<style lang="scss" scoped>
@import '../scss/index.scss';
</style>