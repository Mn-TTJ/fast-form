<template>
    <Card label="常见属性" :col="1">
        <section>
            <label>字体大小</label>
            <aside><ui-input v-model="fontSize" @blur="setAttr(fontSize, 'fontSize')"
                    @keyup.enter="setAttr(fontSize, 'fontSize')" />
            </aside>
        </section>
        <section>
            <label>字体粗细</label>
            <aside><ui-input v-model="fontWeight" @blur="setAttr(fontWeight, 'fontWeight')"
                    @keyup.enter="setAttr(fontWeight, 'fontWeight')" />
            </aside>
        </section>
        <section>
            <label>行数限制</label>
            <aside><ui-input v-model="row" @blur="setRow" @keyup.enter="setRow" />
            </aside>
        </section>
        <section>
            <label>对齐</label>
            <aside><ui-radio v-model="text.align" :labels="['左', '右']" :values="['left', 'center']"
                    :group="Math.floor(Math.random() * 10000) + ''"></ui-radio>
            </aside>
        </section>
        <section>
            <label>超出省略</label>
            <aside>
                <ui-switch v-model="text.ellipsis"></ui-switch>
            </aside>
        </section>
        <section>
            <label>非预处理</label>
            <aside>
                <ui-switch v-model="text.pre"></ui-switch>
            </aside>
        </section>
        <section>
            <label>字母断句</label>
            <aside>
                <ui-switch v-model="text.wrap"></ui-switch>
            </aside>
        </section>
        <section>
            <label>颜色</label>
            <aside>
                <ui-colorpicker v-model="text.color"></ui-colorpicker>
            </aside>
        </section>
    </Card>
    <Card label="数据收集" :col="1">
        <section>
            <ui-button @click="dataSet"><label class="new-btn">数据设置</label></ui-button>
        </section>
    </Card>
</template>

<script setup>
import Card from '@/components/frame/card/Card.vue';
import textConf from './textConf.js'
import { defineExpose } from 'vue';
const { text, fontSize, fontWeight, row, reSet, setAttr, setRow, dataSet } = textConf()
defineExpose({ reSet })
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';
</style>