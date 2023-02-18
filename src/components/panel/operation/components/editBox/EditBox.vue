<template>
    <div :class=o @click.stop="selectd" @drop.prevent.stop ref="root">
        <slot></slot>
        <div :class=s @click.stop>
            <label @click="turnPreEditer">&#xe605;</label>
            <label @click="flipNode(true)">&#xe60d;</label>
            <label @click="flipNode(false)">&#xe610;</label>
            <label @click="delNode">&#xe645;</label>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import editBox from './editBox';
import Props from './props/index';
// eslint-disable-next-line
const props = defineProps(Props)
const root = ref(null)
const { s, o, selectd, turnPreEditer, flipNode, delNode } = editBox(props, root)
</script>

<style lang="scss" scoped>
@import './scss/index.scss';
</style>