<template>
    <div :class=o @click.stop="selectd">
        <slot></slot>
        <div :class=s>
            <label>&#xe605;</label>
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
const { s, o, selectd } = editBox(props)
</script>

<style lang="scss" scoped>
@import './scss/index.scss';
</style>