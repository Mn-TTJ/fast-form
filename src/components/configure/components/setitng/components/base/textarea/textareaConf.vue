<template>
    <Card label="常见属性" :col="1">
        <section>
            <label>名字</label>
            <aside><ui-input v-model="name" @blur="setAttr(name, 'name')" @keyup.enter="setAttr(name, 'name')" />
            </aside>
        </section>
        <section>
            <label>输入提示</label>
            <aside><ui-input v-model="parser" @blur="setAttr(parser, 'parser')"
                    @keyup.enter="setAttr(parser, 'parser')" />
            </aside>
        </section>
        <section>
            <label>最小字数</label>
            <aside><ui-input v-model="min" @blur="setMin" @keyup.enter="setMin" />
            </aside>
        </section>
        <section>
            <label>最大字数</label>
            <aside><ui-input v-model="max" @blur="setMax" @keyup.enter="setMax" />
            </aside>
        </section>
        <section>
            <label>最小行数</label>
            <aside><ui-input v-model="minRow" @blur="setMinRow" @keyup.enter="setMinRow" />
            </aside>
        </section>
        <section>
            <label>最大行数</label>
            <aside><ui-input v-model="maxRow" @blur="setMaxRow" @keyup.enter="setMaxRow" />
            </aside>
        </section>
        <section>
            <label>禁用</label>
            <aside>
                <ui-switch v-model="textarea.disabled"></ui-switch>
            </aside>
        </section>
        <section>
            <label>可伸缩</label>
            <aside>
                <ui-switch v-model="textarea.resizable"></ui-switch>
            </aside>
        </section>
    </Card>
</template>

<script setup>
import Card from '@/components/frame/card/Card.vue';
import textareaConf from './textareaConf.js'
import { defineExpose } from 'vue';
const { textarea, name, parser, max, min, maxRow, minRow, reSet, setAttr, setMax, setMin, setMaxRow, setMinRow } = textareaConf()
defineExpose({ reSet })
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';
</style>