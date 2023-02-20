<template>
    <Card label="常见属性" :col="1">
        <section>
            <label>名字</label>
            <aside><ui-input v-model="name" @blur="setAttr(name, 'name')" @keyup.enter="setAttr(name, 'name')" />
            </aside>
        </section>
        <section>
            <label>最小值</label>
            <aside><ui-input v-model="min" @blur="setAttr(min, 'min')" @keyup.enter="setAttr(min, 'min')" />
            </aside>
        </section>
        <section>
            <label>最大值</label>
            <aside><ui-input v-model="max" @blur="setAttr(max, 'max')" @keyup.enter="setAttr(max, 'max')" />
            </aside>
        </section>
        <section>
            <label>禁用</label>
            <aside>
                <ui-switch v-model="timepicker.disabled"></ui-switch>
            </aside>
        </section>
    </Card>
    <class-name v-model="timepicker.class"></class-name>
</template>

<script setup>
import Card from '@/components/frame/card/Card.vue';
import ClassName from '../../className/ClassName.vue';
import timepickerConf from './timePickerConf.js'
import { defineExpose } from 'vue';
const { timepicker, name, max, min, reSet, setAttr } = timepickerConf()
defineExpose({ reSet })
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';
</style>