<template>
    <Card label="常见属性" :col="1">
        <section>
            <label>高/宽</label>
            <aside><ui-input v-model="altitude" @blur="setAttr(altitude, 'altitude')"
                    @keyup.enter="setAttr(altitude, 'altitude')" />
            </aside>
        </section>
        <section>
            <label>颜色</label>
            <aside><ui-colorpicker v-model="drawer.color" /></aside>
        </section>
        <section>
            <label>方向</label>
            <aside><ui-radio tick group="shadow" :labels="['上', '下', '左', '右']" :values="[1, 2, 3, 4]"
                    v-model="direction" />
            </aside>
        </section>
    </Card>
</template>

<script setup>
import Card from '@/components/frame/card/Card.vue';
import drawerConf from './drawerConf'
import { defineExpose } from 'vue';
const { drawer, altitude, direction, reSet, setAttr } = drawerConf()
defineExpose({ reSet })
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';
</style>