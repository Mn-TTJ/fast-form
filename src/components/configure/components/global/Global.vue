<template>
    <div class="global">
        <button @click="useForm">启用form组件</button>
        <button @click="checkName">检查表单命名</button>
        <button>自定义css</button>
        <button>可用事件</button>
    </div>
</template>

<script setup>
import global from './global'
const { checkName, useForm } = global()
</script>

<style lang="scss" scoped>
@import './scss/global.scss';
</style>