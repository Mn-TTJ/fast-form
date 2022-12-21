<template>
    <div class="operation" :class="{ 'dragover': dragSign }" droppable="true" @dragover.prevent
        @drop.prevent="dropEvent">
    </div>
</template>

<script setup>
import { dragSign } from '@/core/tree/drag.js'
import operation from './operation'
const { dropEvent } = operation()
</script>

<style lang="scss" scoped>
@import './scss/index.scss';
</style>