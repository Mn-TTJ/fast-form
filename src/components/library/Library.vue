<template>
    <Menu :icon="['&#xe61e;', '&#xe61a;']" :label="['组件库', '表单布局']">
        <template #one>
            <Card v-for="card in cardConfig" :key="card.label" :label="card.label" :col="2">
                <DragBox v-for="component in card.components" :key="component.label" :label="component.label"
                    :icon="component.icon" :name="component.name"></DragBox>
            </Card>
        </template>
        <template #two>
            <Layout v-for="(layout, index) in layoutConf" :key="index" :label="layout.label" :image="layout.image"
                :json="layout.json"></Layout>
        </template>
    </Menu>
</template>

<script setup>
import Menu from '../frame/menu/Menu.vue';
import Card from '../frame/card/Card.vue';
import DragBox from './components/dragBox/DragBox.vue';
import cardConfig from '@/core/config/card'
import Layout from './components/layout/Layout.vue'
import layoutConf from '@/core/config/layout/layout.conf';
</script>