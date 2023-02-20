<template>
    <div class="options">
        <section>
            <button :class="{ 'disabled': !hasPast }" @click="toPast">&#xe67a;</button>
            <button :class="{ 'disabled': !hasNext }" @click="toNext">&#xe67f;</button>
            <button class="option-tree-btn" @click="() => { turnOnCurtain(true); setCurtain(Tree) }">&#xebb3;</button>
            <button @click="preserve">&#xeb47;</button>
        </section>
        <section>
            <button v-for="(option, index) in OPTIONS" :key="index" v-html="option.label"
                @click="option.event"></button>
        </section>
    </div>
</template>

<script setup>
import OPTIONS from '../../core/config/options/options';
import { turnOnCurtain, setCurtain } from '@/core/store/store.js'
import Tree from '../curtain/components/tree/Tree.vue';
import options from './options'
const { hasPast, hasNext, toPast, toNext, preserve } = options()
</script>

<style lang="scss" scoped>
@import './scss/index.scss';
</style>