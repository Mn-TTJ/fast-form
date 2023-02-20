<template>
    <Card label="常见属性" :col="1">
        <section>
            <label>宽</label>
            <aside><ui-input v-model="width" @blur="setAttr(width, 'width')" @keyup.enter="setAttr(width, 'width')" />
            </aside>
        </section>
        <section>
            <label>高</label>
            <aside><ui-input v-model="height" @blur="setAttr(height, 'height')" @keyup.enter="setAttr(height, 'height')" />
            </aside>
        </section>
        <section>
            <label>圆角</label>
            <aside><ui-input v-model="radius" @blur="setAttr(radius, 'radius')" @keyup.enter="setAttr(radius, 'radius')" />
            </aside>
        </section>
        <section>
            <label>阴影</label>
            <aside><ui-switch v-model="dialog.shadow"></ui-switch></aside>
        </section>
        <section>
            <label>消除幕布</label>
            <aside><ui-switch v-model="dialog.panelOnly"></ui-switch></aside>
        </section>
        <section>
            <label>颜色</label>
            <aside><ui-colorpicker v-model="dialog.color" /></aside>
        </section>
        <section>
            <label>标题</label>
            <aside>
                <ui-input v-model="title" @blur="setAttr(title, 'title')" @keyup.enter="setAttr(title, 'title')" />
            </aside>
        </section>
    </Card>
    <class-name v-model="dialog.class"></class-name>
</template>

<script setup>
import Card from '@/components/frame/card/Card.vue';
import ClassName from '../../className/ClassName.vue';
import dialogConf from './dialogConf'
import { defineExpose } from 'vue';
const { dialog, radius, width, height, title, reSet, setAttr } = dialogConf()
defineExpose({ reSet })
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';
</style>