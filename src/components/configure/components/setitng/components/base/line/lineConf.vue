<template>
    <Card label="常见属性" :col="1">
        <section>
            <label>粗细</label>
            <aside><ui-input v-model="thick" @blur="setAttr(thick, 'thick')" @keyup.enter="setAttr(thick, 'thick')" />
            </aside>
        </section>
        <section>
            <label>长度</label>
            <aside><ui-input v-model="len" @blur="setAttr(len, 'len')" @keyup.enter="setAttr(len, 'len')" />
            </aside>
        </section>
        <section>
            <label>间隔</label>
            <aside><ui-input v-model="space" @blur="setAttr(space, 'space')" @keyup.enter="setAttr(space, 'space')" />
            </aside>
        </section>
        <section>
            <label>竖直</label>
            <aside><ui-switch v-model="line.vertical"></ui-switch>
            </aside>
        </section>
        <section>
            <label>虚线</label>
            <aside><ui-switch v-model="line.dashed"></ui-switch>
            </aside>
        </section>
        <section>
            <label>颜色</label>
            <aside>
                <ui-colorpicker v-model="line.color"></ui-colorpicker>
            </aside>
        </section>
    </Card>
    <class-name v-model="line.class"></class-name>
</template>

<script setup>
import Card from '@/components/frame/card/Card.vue';
import ClassName from '../../className/ClassName.vue';
import lineConf from './lineConf.js'
import { defineExpose } from 'vue';
const { line, thick, len, space, reSet, setAttr } = lineConf()
defineExpose({ reSet })
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';
</style>