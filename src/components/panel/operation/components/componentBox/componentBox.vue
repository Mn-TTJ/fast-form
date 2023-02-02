<template>
    <slot></slot>
</template>

<script setup>
import componentBox from './componentBox'
import Props from './props/index'
// eslint-disable-next-line
const props = defineProps(Props)
componentBox(props)
</script>