<template>
    <Card label="常见属性" :col="1">
        <section><label>启用边框</label>
            <aside><ui-switch v-model="border"></ui-switch></aside>
        </section>
        <section>
            <label>限高</label>
            <aside><ui-input v-model="height" @blur="setTableAttr(height, 'height')"
                    @keyup.enter="setTableAttr(height, 'height')" /></aside>
        </section>
        <template v-for="(column, index) in columns" :key="column.prop">
            <p>{{ column.prop }}列</p>
            <section>
                <label>标题</label>
                <aside><ui-input v-model="column.label" @blur="setColumsAtrr(column.label, 'label', index)"
                        @keyup.enter="setColumsAtrr(column.label, 'label', index)" />
                </aside>
            </section>
            <section>
                <label>宽度</label>
                <aside><ui-input v-model="column.width" @blur="setColumsAtrr(column.width, 'width', index)"
                        @keyup.enter="setColumsAtrr(column.width, 'width', index)" />
                </aside>
            </section>
        </template>
    </Card>
    <Card label="数据收集" :col="1">
        <section>
            <ui-button @click="dataSet"><label class="new-btn">数据设置</label></ui-button>
        </section>
    </Card>
    <class-name v-model="table.class"></class-name>
</template>

<script setup>
import { defineExpose } from 'vue';
import Card from '@/components/frame/card/Card.vue';
import ClassName from '../../className/ClassName.vue';
import tableConf from './tableConf'
const { table, border, height, columns, reSet, setTableAttr, setColumsAtrr, dataSet } = tableConf()
defineExpose({ reSet })
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';
</style>