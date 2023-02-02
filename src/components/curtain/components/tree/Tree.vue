<template>
    <div class="tree" @click.stop>
        <Leaf :leaves="componentTree"></Leaf>
    </div>
</template>

<script setup>
import Leaf from './leaf/Leaf.vue';
// import tree from './tree.js'
// const { componentTree } = tree() 
</script>

<style lang="scss" scoped>
@import './scss/index.scss';
</style>