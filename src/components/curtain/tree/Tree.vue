<template>
    <div class="tree" @click.stop></div>
</template>

<script setup>
import tree from './tree.js'
tree() 
</script>

<style lang="scss" scoped>
@import './scss/index.scss';
</style>