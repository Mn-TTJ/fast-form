<template>
    <Card label="常见属性" :col="1">
        <section>
            <label>名字</label>
            <aside><ui-input v-model="name" @blur="setAttr(name, 'name')" @keyup.enter="setAttr(name, 'name')" />
            </aside>
        </section>
        <section>
            <label>增值</label>
            <aside><ui-input v-model="skip" @blur="setSkip" @keyup.enter="setSkip" />
            </aside>
        </section>
        <section>
            <label>禁用</label>
            <aside>
                <ui-switch v-model="counter.disabled"></ui-switch>
            </aside>
        </section>
        <section>
            <label>小尺寸</label>
            <aside>
                <ui-switch v-model="counter.sm"></ui-switch>
            </aside>
        </section>
        <section>
            <label>大尺寸</label>
            <aside>
                <ui-switch v-model="counter.lg"></ui-switch>
            </aside>
        </section>
    </Card>
</template>

<script setup>
import Card from '@/components/frame/card/Card.vue';
import counterConf from './counterConf.js'
import { defineExpose } from 'vue';
const { counter, name, skip, reSet, setAttr, setSkip } = counterConf()
defineExpose({ reSet })
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';
</style>