<template>
    <div class="global">
        <button @click="useForm"><label>&#xe6ec;</label>
            <p>启用form组件</p>
        </button>
        <button @click="checkName"><label>&#xe626;</label>
            <p>检查表单命名</p>
        </button>
        <button @click="customCss"><label>&#xe607;</label>
            <p>自定义css</p>
        </button>
        <button @click="setCss"><label>&#xe60b;</label>
            <p>导入css</p>
        </button>
        <div class="couter-btn">
            <div class="operation-btn" @click="setSpace(false, false)">&#xeb79;</div>
            <p>上下间隔:&nbsp;{{ vertical }}&nbsp;px</p>
            <div class="operation-btn" @click="setSpace(false, true)">&#xe727;</div>
        </div>
        <div class="couter-btn">
            <div class="operation-btn" @click="setSpace(true, false)">&#xeb79;</div>
            <p>左右间隔:&nbsp;{{ horizontal }}&nbsp;px</p>
            <div class="operation-btn" @click="setSpace(true, true)">&#xe727;</div>
        </div>
        <div v-html="`<style>${css}</style>`"></div>
    </div>
</template>

<script setup>
import global from './global'
import { store, setSpace } from '@/core/store/store.js'
import { computed } from 'vue'
const horizontal = computed(() => store.horizontal)
const vertical = computed(() => store.vertical)
const { checkName, useForm, customCss, setCss, css } = global()
</script>

<style lang="scss" scoped>
@import './scss/global.scss';
</style>