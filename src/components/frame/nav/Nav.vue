<template>
    <div class="library-nav">
        <button :class="{ 'nav-select': select == 1 }" ref="btn1" @click="changeOverEvent(1)"><label
                v-html="icon[0]"></label><label v-html="label[0]"></label></button>
        <button :class="{ 'nav-select': select == 2 }" ref="btn2" @click="changeOverEvent(2)"><label
                v-html="icon[1]"></label><label v-html="label[1]"></label></button>
        <span ref="line" :style="{ width, left }"></span>
    </div>
</template>

<script setup>
import nav from './nav'
import { ref, defineEmits } from 'vue';
import Props from './props/index';
// eslint-disable-next-line
const props = defineProps(Props);
const btn1 = ref(null)
const btn2 = ref(null)
const line = ref(null)
const emits = defineEmits(['navSelect'])
const { select, width, left, changeOverEvent } = nav(btn1, btn2, line, emits)
</script>

<style lang="scss" scoped>
@import './scss/index.scss';
</style>