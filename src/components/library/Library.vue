<template>
    <div class="library">
        <Nav @nav-select="changeOverEvent"></Nav>
        <main :class="{ 'library-change': select == 2 }">
            <div class="components">
                <Card v-for="card in cardConfig" :key="card.label" :label="card.label">
                    <DragBox v-for="component in card.components" :key="component.label" :label="component.label"
                        :icon="component.icon"></DragBox>
                </Card>
            </div>
            <div class="layout">
                <Layout></Layout>
                <Layout></Layout>
                <Layout></Layout>
            </div>
        </main>
    </div>
</template>

<script setup>
import Nav from './components/nav/Nav.vue';
import Card from './components/card/Card.vue';
import DragBox from './components/dragBox/DragBox.vue';
import cardConfig from '@/core/config/card'
import Layout from './components/layout/Layout.vue'
import library from './library'
const { select, changeOverEvent } = library()
</script>

<style lang="scss" scoped>
@import './scss/index.scss';
</style>