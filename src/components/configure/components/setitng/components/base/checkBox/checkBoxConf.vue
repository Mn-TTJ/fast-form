<template>
    <Card label="常见属性" :col="1">
        <section>
            <label>名字</label>
            <aside><ui-input v-model="name" @blur="setAttr(name, 'name')" @keyup.enter="setAttr(name, 'name')" />
            </aside>
        </section>
        <section>
            <label>全选</label>
            <aside>
                <ui-switch v-model="checkbox.all"></ui-switch>
            </aside>
        </section>
        <section>
            <label>边框</label>
            <aside>
                <ui-switch v-model="checkbox.hasBorder"></ui-switch>
            </aside>
        </section>
        <section>
            <label>禁用</label>
            <aside>
                <ui-switch v-model="checkbox.disabled"></ui-switch>
            </aside>
        </section>
    </Card>
    <Card label="数据设置" :col="1">
        <template v-for="(label, index) in checkbox.labels" :key="label+index">
            <section>
                <label>标签</label>
                <aside><ui-input v-model="labels[index]" @blur="setLabel(index)" @keyup.enter="setLabel(index)" />
                </aside>
            </section>
            <section class="radio-btn"><ui-button class="radio-del-btn" @click="deleteLabel(index)">删除</ui-button>
            </section>
        </template>
        <section class="radio-btn">
            <ui-button class="radio-new-btn" @click="addLabel">添加</ui-button>
        </section>
    </Card>
    <class-name v-model="checkbox.class"></class-name>
</template>

<script setup>
import Card from '@/components/frame/card/Card.vue';
import ClassName from '../../className/ClassName.vue';
import checkBoxConf from './checkBoxConf.js'
import { defineExpose } from 'vue';
const { checkbox, name, labels, reSet, setAttr, setLabel, addLabel, deleteLabel } = checkBoxConf()
defineExpose({ reSet })
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';
</style>