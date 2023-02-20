<template>
    <Card label="常见属性" :col="1">
        <section>
            <label>名字</label>
            <aside><ui-input v-model="name" @blur="setAttr(name, 'name')" @keyup.enter="setAttr(name, 'name')" />
            </aside>
        </section>
        <section>
            <label>星期</label>
            <aside><ui-switch v-model="datePicker.week"></ui-switch>
            </aside>
        </section>
        <section>
            <label>禁用</label>
            <aside>
                <ui-switch v-model="datePicker.disabled"></ui-switch>
            </aside>
        </section>
    </Card>
    <class-name v-model="datePicker.class"></class-name>
</template>

<script setup>
import Card from '@/components/frame/card/Card.vue';
import ClassName from '../../className/ClassName.vue';
import datePickerConf from './datePickerConf.js'
import { defineExpose } from 'vue';
const { datePicker, name, reSet, setAttr } = datePickerConf()
defineExpose({ reSet })
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';
</style>