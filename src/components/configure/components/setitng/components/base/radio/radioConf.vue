<template>
    <Card label="常见属性" :col="1">
        <section>
            <label>名字</label>
            <aside><ui-input v-model="name" @blur="setAttr(name, 'name')" @keyup.enter="setAttr(name, 'name')" />
            </aside>
        </section>
        <section>
            <label>组名</label>
            <aside><ui-input v-model="group" @blur="setAttr(group, 'group')" @keyup.enter="setAttr(group, 'group')" />
            </aside>
        </section>
        <section>
            <label>圆形</label>
            <aside>
                <ui-switch v-model="radio.circular"></ui-switch>
            </aside>
        </section>
        <section>
            <label>打勾</label>
            <aside>
                <ui-switch v-model="radio.tick"></ui-switch>
            </aside>
        </section>
        <section>
            <label>无边框</label>
            <aside>
                <ui-switch v-model="radio.noBorder"></ui-switch>
            </aside>
        </section>
        <section>
            <label>按钮型</label>
            <aside>
                <ui-switch v-model="radio.btn"></ui-switch>
            </aside>
        </section>
        <section>
            <label>按钮变化</label>
            <aside>
                <ui-switch v-model="radio.full"></ui-switch>
            </aside>
        </section>
        <section>
            <label>禁用</label>
            <aside>
                <ui-switch v-model="radio.disabled"></ui-switch>
            </aside>
        </section>
    </Card>
    <Card label="数据设置" :col="1">
        <template v-for="(label, index) in radio.labels" :key="label+index">
            <section>
                <label>标签</label>
                <aside><ui-input v-model="labels[index]" @blur="setLabel(index)" @keyup.enter="setLabel(index)" />
                </aside>
            </section>
            <section>
                <label>值</label>
                <aside><ui-input v-model="values[index]" @blur="setValue(index)" @keyup.enter="setValue(index)" />
                </aside>
            </section>
            <section class="radio-btn"><ui-button class="radio-del-btn" @click="deleteLabel(index)">删除</ui-button>
            </section>
        </template>
        <section class="radio-btn">
            <ui-button class="radio-new-btn" @click="addLabel">添加</ui-button>
        </section>
    </Card>
</template>

<script setup>
import Card from '@/components/frame/card/Card.vue';
import radioConf from './radioConf.js'
import { defineExpose } from 'vue';
const { radio, name, group, labels, values, reSet, setAttr, setLabel, setValue, addLabel, deleteLabel } = radioConf()
defineExpose({ reSet })
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';
</style>