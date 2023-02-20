<template>
    <Card label="常见属性" :col="1">
        <section>
            <label>名字</label>
            <aside><ui-input v-model="name" @blur="setAttr(name, 'name')" @keyup.enter="setAttr(name, 'parser')" />
            </aside>
        </section>
        <section>
            <label>嵌套</label>
            <aside><ui-switch v-model="select.multiple"></ui-switch>
            </aside>
        </section>
        <section>
            <label>禁用</label>
            <aside><ui-switch v-model="select.disabled"></ui-switch>
            </aside>
        </section>
    </Card>
    <Card label="数据收集" :col="1">
        <section>
            <ui-button @click="dataSet"><label class="new-btn">数据设置</label></ui-button>
        </section>
    </Card>
    <class-name v-model="select.class"></class-name>
</template>

<script setup>
import Card from '@/components/frame/card/Card.vue';
import ClassName from '../../className/ClassName.vue';
import selectConf from './selectConf.js'
import { defineExpose } from 'vue';
const { select, name, reSet, setAttr, dataSet } = selectConf()
defineExpose({ reSet })
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';
</style>