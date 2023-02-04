<template>
    <div class="leaf" v-for="(leaf, index) in leaves" :key="index">
        <div class="leaf-ndoe" @click="selectNode(index), selectEditor(leaf.id)">{{ leaf.vNode }}</div>
        <div class="leaf-children" v-show="isExpand[index]"><form-leaf v-if="leaf.children && leaf.children.length > 0"
                :leaves="leaf.children"></form-leaf></div>
    </div>
</template>

<script>
export default {
    name: 'form-leaf'
}
</script>

<script setup>
import leaf from './leaf';
import Props from './props/index';
// eslint-disable-next-line
const props = defineProps(Props)
const { isExpand, selectNode, selectEditor } = leaf(props)
</script>

<style lang="scss" scoped>
@import './scss/index.scss';
</style>