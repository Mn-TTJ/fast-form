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
        <button><label>&#xe60b;</label>
            <p>导入css</p>
        </button>
        <div class="a" v-html="`<style>${css}</style>`"></div>
    </div>
</template>

<script setup>
import global from './global'
const { checkName, useForm, customCss, css } = global()
</script>

<style lang="scss" scoped>
@import './scss/global.scss';
</style>