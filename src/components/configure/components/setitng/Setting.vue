<template>
    <component :is="confComponent" ref="ele"></component>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import setting from './setting';
const ele = ref(null)
const { confComponent } = setting(ele)
</script>