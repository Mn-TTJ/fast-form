<template>
    <Card label="常见属性" :col="1">
        <section>
            <label>标题</label>
            <aside>
                <ui-input v-model="title" @blur="setAttr(title, 'title')" @keyup.enter="setAttr(title, 'title')" />
            </aside>
        </section>
        <section>
            <label>圆角</label>
            <aside><ui-input v-model="radius" @blur="setAttr(radius, 'radius')"
                    @keyup.enter="setAttr(radius, 'radius')" /></aside>
        </section>
        <section>
            <label>居左</label>
            <aside> <ui-switch v-model="card.left"></ui-switch>
            </aside>
        </section>
        <section>
            <label>打开</label>
            <aside><ui-switch v-model="card.unActive"></ui-switch>
            </aside>
        </section>
        <section>
            <label>阴影</label>
            <aside><ui-radio tick group="shadow" :labels="['常驻', '取消', '悬浮']" :values="['auto', 'none', 'hover']"
                    v-model="card.shadow" />
            </aside>
        </section>
        <section>
            <label>表头颜色</label>
            <aside><ui-colorpicker v-model="card.hColor" /></aside>
        </section>
        <section>
            <label>卡片颜色</label>
            <aside><ui-colorpicker v-model="card.bColor" /></aside>
        </section>
        <section>
            <label>标题颜色</label>
            <aside><ui-colorpicker v-model="card.tColor" /></aside>
        </section>
    </Card>
</template>

<script setup>
import Card from '@/components/frame/card/Card.vue';
import flodCardConf from './flodCardConf'
import { defineExpose } from 'vue';
const { card, radius, title, reSet, setAttr } = flodCardConf()
defineExpose({ reSet })
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';
</style>