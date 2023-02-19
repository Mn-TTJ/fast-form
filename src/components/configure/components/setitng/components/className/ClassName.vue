<template>
    <Card label="自定义类名" :col="1">
        <ui-checkbox v-if="labels.length > 0" v-model="mValue" :labels="labels"></ui-checkbox>
        <p v-else>没有可用类</p>
    </Card>
</template>

<script setup>
import Card from '@/components/frame/card/Card.vue'
import className from './className.js'
import Props from './props'
import { computed, defineEmits } from 'vue';
// eslint-disable-next-line
const props = defineProps(Props);
const emits = defineEmits(['update:modelValue'])
const mValue = computed({
    get: () => props.modelValue,
    set: (val) => emits('update:modelValue', val)
})
const { labels } = className()
</script>

<style lang="scss" scoped>
@import './scss/className.scss';
</style>