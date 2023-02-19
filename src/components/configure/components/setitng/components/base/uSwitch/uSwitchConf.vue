<template>
    <Card label="常见属性" :col="1">
        <section>
            <label>名字</label>
            <aside><ui-input v-model="name" @blur="setAttr(name, 'name')" @keyup.enter="setAttr(name, 'name')" />
            </aside>
        </section>
        <section>
            <label>小型</label>
            <aside><ui-switch v-model="uSwitch.sm"></ui-switch>
            </aside>
        </section>
        <section>
            <label>大型</label>
            <aside><ui-switch v-model="uSwitch.lg"></ui-switch>
            </aside>
        </section>
        <section>
            <label>禁用</label>
            <aside>
                <ui-switch v-model="uSwitch.disabled"></ui-switch>
            </aside>
        </section>
        <section>
            <label>关闭颜色</label>
            <aside>
                <ui-colorpicker v-model="uSwitch.trackColor" />
            </aside>
        </section>
        <section>
            <label>滑块颜色</label>
            <aside>
                <ui-colorpicker v-model="uSwitch.sliderColor" />
            </aside>
        </section>
        <section>
            <label>开启颜色</label>
            <aside>
                <ui-colorpicker v-model="uSwitch.onColor" />
            </aside>
        </section>
    </Card>
</template>

<script setup>
import Card from '@/components/frame/card/Card.vue';
import uSwitchConf from './uSwitchConf.js'
import { defineExpose } from 'vue';
const { uSwitch, name, reSet, setAttr } = uSwitchConf()
defineExpose({ reSet })
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';
</style>