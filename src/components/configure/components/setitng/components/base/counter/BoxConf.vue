<template>
    <Card label="常见属性" :col="1">
        <section>
            <label>高</label>
            <aside><ui-input v-model="height" @blur="setAttr(height, 'height')"
                    @keyup.enter="setAttr(height, 'height')" />
            </aside>
        </section>
        <section>
            <label>宽</label>
            <aside><ui-input v-model="width" @blur="setAttr(width, 'width')" @keyup.enter="setAttr(width, 'width')" />
            </aside>
        </section>
        <section>
            <label>内边距</label>
            <aside><ui-input v-model="padding" @blur="setAttr(padding, 'padding')"
                    @keyup.enter="setAttr(padding, 'padding')" />
            </aside>
        </section>
        <section>
            <label>外边距</label>
            <aside><ui-input v-model="margin" @blur="setAttr(margin, 'margin')"
                    @keyup.enter="setAttr(margin, 'margin')" />
            </aside>
        </section>
        <section>
            <label>颜色</label>
            <aside><ui-colorpicker v-model="box.color" /></aside>
        </section>
        <section>
            <label>水平排列</label>
            <aside>
                <ui-switch v-model="box.flex"></ui-switch>
            </aside>
        </section>
    </Card>
</template>

<script setup>
import Card from '@/components/frame/card/Card.vue';
import boxConf from './boxConf'
import { defineExpose } from 'vue';
const { box, height, width, margin, padding, reSet, setAttr } = boxConf()
defineExpose({ reSet })
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';
</style>