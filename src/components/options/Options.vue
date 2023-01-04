<template>
    <div class="options">
        <section>
            <button>&#xe67a;</button>
            <button>&#xe67f;</button>
            <button class="option-tree-btn">&#xebb3;</button>
        </section>
        <section>
            <button v-for="(option, index) in options" :key="index" v-html="option.label"
                @click="option.event"></button>
        </section>
    </div>
</template>

<script setup>
import options from '../../core/config/options/options';
</script>

<style lang="scss" scoped>
@import './scss/index.scss';
</style>