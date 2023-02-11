<template>
    <Card label="常见属性" :col="1">
        <section>
            <label>标签</label>
            <aside><ui-input v-model="label" @blur="setAttr(label, 'label')" @keyup.enter="setAttr(label, 'label')" />
            </aside>
        </section>
        <section>
            <label>大小</label>
            <aside><ui-radio v-model="button.size" :labels="['小', '中', '大']" :values="['small', 'middle', 'large']"
                    :group="Math.floor(Math.random() * 10000) + ''"></ui-radio>
            </aside>
        </section>
        <section>
            <label>药丸</label>
            <aside><ui-switch v-model="button.round"></ui-switch>
            </aside>
        </section>
        <section>
            <label>圆形</label>
            <aside><ui-switch v-model="button.round"></ui-switch>
            </aside>
        </section>
        <section>
            <label>加载</label>
            <aside><ui-switch v-model="button.loading"></ui-switch>
            </aside>
        </section>
        <section>
            <label>去除边框</label>
            <aside><ui-switch v-model="button.text"></ui-switch>
            </aside>
        </section>
        <section>
            <label>禁用</label>
            <aside>
                <ui-switch v-model="button.disabled"></ui-switch>
            </aside>
        </section>
        <section>
            <label>颜色</label>
            <aside>
                <ui-colorpicker v-model="button.color"></ui-colorpicker>
            </aside>
        </section>
    </Card>
</template>

<script setup>
import Card from '@/components/frame/card/Card.vue';
import buttonConf from './buttonConf.js'
import { defineExpose } from 'vue';
const { button, label, reSet, setAttr } = buttonConf()
defineExpose({ reSet })
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';
</style>