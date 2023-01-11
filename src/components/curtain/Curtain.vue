<template>
    <div v-show="store.curtainSwicth" class="curtain" @click="turnOnCurtain(false)">
        <component :is="store.curtainComponent"></component>
    </div>
</template>

<script setup>
import { store, turnOnCurtain, } from '@/core/store/store.js'
</script>

<style lang="scss" scoped>
@import './scss/index.scss';
</style>