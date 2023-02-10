<template>
    <Card label="常见属性" :col="1">
        <section>
            <label>名字</label>
            <aside><ui-input v-model="name" @blur="setAttr(name, 'name')" @keyup.enter="setAttr(name, 'name')" />
            </aside>
        </section>
        <section>
            <label>最小值1</label>
            <aside><ui-input v-model="min[0]" @blur="setMin(0)" @keyup.enter="setMin(0)" />
            </aside>
        </section>
        <section>
            <label>最小值2</label>
            <aside><ui-input v-model="min[1]" @blur="setMin(1)" @keyup.enter="setMin(1)" />
            </aside>
        </section>
        <section>
            <label>最大值1</label>
            <aside><ui-input v-model="max[0]" @blur="setMax(0)" @keyup.enter="setMax(0)" />
            </aside>
        </section>
        <section>
            <label>最大值2</label>
            <aside><ui-input v-model="max[1]" @blur="setMax(1)" @keyup.enter="setMax(1)" />
            </aside>
        </section>
        <section>
            <label>禁用</label>
            <aside>
                <ui-switch v-model="timeRange.disabled"></ui-switch>
            </aside>
        </section>
    </Card>
</template>

<script setup>
import Card from '@/components/frame/card/Card.vue';
import timeRangeConf from './timeRangeConf.js'
import { defineExpose } from 'vue';
const { timeRange, name, max, min, reSet, setAttr, setMax, setMin } = timeRangeConf()
defineExpose({ reSet })
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';
</style>