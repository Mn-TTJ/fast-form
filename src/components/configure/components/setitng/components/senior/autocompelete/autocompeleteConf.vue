<template>
    <Card label="常见属性" :col="1">
        <section>
            <label>名字</label>
            <aside><ui-input v-model="name" @blur="setAttr(name, 'name')" @keyup.enter="setAttr(name, 'parser')" />
            </aside>
        </section>
        <section>
            <label>输入提醒</label>
            <aside><ui-input v-model="parser" @blur="setAttr(parser, 'parser')"
                    @keyup.enter="setAttr(parser, 'parser')" />
            </aside>
        </section>
        <section>
            <label>可清除</label>
            <aside><ui-switch v-model="autocompelete.clearable"></ui-switch>
            </aside>
        </section>
        <section>
            <label>禁用</label>
            <aside><ui-switch v-model="autocompelete.disabled"></ui-switch>
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
import autocompeleteConf from './autocompeleteConf.js'
import { defineExpose } from 'vue';
const { autocompelete, name, parser, reSet, setAttr, dataSet } = autocompeleteConf()
defineExpose({ reSet })
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';
</style>