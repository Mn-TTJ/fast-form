<template>
    <Menu :icon="['&#xe61e;', '&#xe61a;']" :label="['组件库', '表单布局']">
        <template #one>
            <Card v-for="card in cardConfig" :key="card.label" :label="card.label">
                <DragBox v-for="component in card.components" :key="component.label" :label="component.label"
                    :icon="component.icon" :name="component.name"></DragBox>
            </Card>
        </template>
        <template #two>
            <Layout></Layout>
            <Layout></Layout>
            <Layout></Layout>
        </template>
    </Menu>
</template>

<script setup>
import Menu from '../frame/menu/Menu.vue';
import Card from './components/card/Card.vue';
import DragBox from './components/dragBox/DragBox.vue';
import cardConfig from '@/core/config/card'
import Layout from './components/layout/Layout.vue'
</script>