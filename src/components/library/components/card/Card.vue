<template>
    <div class="card">
        <header @click="setExpand">
            <label>{{ label }}</label>
        </header>
        <main :class="{ 'card-expand': expand }">
            <div class="card-btns">
                <slot></slot>
            </div>
        </main>
    </div>
</template>

<script setup>
import card from './card'
import Props from './props/index'
// eslint-disable-next-line
const props = defineProps(Props);
const { expand, setExpand } = card()
</script>

<style lang="scss" scoped>
@import './scss/index.scss'
</style>