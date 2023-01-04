<template>
    <div class="menu">
        <Nav @nav-select="changeOverEvent" :icon="icon" :label="label"></Nav>
        <main :class="{ 'menu-change': select == 2 }">
            <div class="menu-site">
                <slot name="one"></slot>
            </div>
            <div class="menu-site">
                <slot name="two"></slot>
            </div>
        </main>
    </div>
</template>

<script setup>
import Nav from '../nav/Nav.vue'
import menu from './menu'
import Props from './props/index';
// eslint-disable-next-line
const props = defineProps(Props);
const { select, changeOverEvent } = menu()
</script>

<style lang="scss" scoped>
@import './scss/index.scss';
</style>