<template>
    <div :class=o @click.stop="selectd" @drop.prevent.stop>
        <slot></slot>
        <div :class=s @click.stop>
            <label @click="turnPreEditer">&#xe605;</label>
            <label>&#xe60d;</label>
            <label>&#xe610;</label>
            <label>&#xe645;</label>
        </div>
    </div>
</template>

<script setup>
import editBox from './editBox';
import Props from './props/index';
// eslint-disable-next-line
const props = defineProps(Props)
const { s, o, selectd, turnPreEditer } = editBox(props)
</script>

<style lang="scss" scoped>
@import './scss/index.scss';
</style>