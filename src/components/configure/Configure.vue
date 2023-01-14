<template>
    <Menu :icon="['&#xe892;', '&#xe612;']" :label="['组件设置', '数据源']">
        <template #one>
            <Setting></Setting>
        </template>
        <template #two>
            <div>hello</div>
        </template>
    </Menu>
</template>

<script setup>
import Menu from '../frame/menu/Menu.vue';
import Setting from './components/setitng/Setting.vue';
</script>