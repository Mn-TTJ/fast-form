<template>
    <Card label="常见属性" :col="1">
        <template v-for="(panel, index) in panels" :key="panel.key">
            <section>
                <label>标签页</label>
                <aside><ui-input v-model="panel.label" @blur="setLabel(index)" @keyup.enter="getLabel(index)" />
                </aside>
            </section>
            <section><ui-button @click="delPanel(index)"><label class="del-btn">删除</label></ui-button></section>
        </template>
        <section>
            <ui-button @click="addPanel"><label class="new-btn">新增</label></ui-button>
        </section>
        <section>
            <label>高</label>
            <aside><ui-input v-model="data.height" @blur="setAttr('height')" @keyup.enter="setAttr('height')" /></aside>
        </section>
        <section>
            <label>宽</label>
            <aside><ui-input v-model="data.width" @blur="setAttr('width')" @keyup.enter="setAttr('width')" /></aside>
        </section>
        <section>
            <label>激活窗口</label>
            <aside><ui-input v-model="data.active" @blur="setActive" @keyup.enter="setActive" /></aside>
        </section>
    </Card>
    <class-name v-model="tabs.class"></class-name>
</template>

<script setup>
import { defineExpose } from 'vue';
import Card from '@/components/frame/card/Card.vue';
import ClassName from '../../className/ClassName.vue';
import tabsConf from './tabsConf'
const { tabs, panels, data, reSet, setAttr, setActive, setLabel, addPanel, delPanel } = tabsConf()
defineExpose({ reSet })
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';
</style>