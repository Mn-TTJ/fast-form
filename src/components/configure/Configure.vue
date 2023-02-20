<template>
    <Menu :icon="['&#xe892;', '&#xe62f;']" :label="['组件设置', '全局设置']">
        <template #one>
            <Setting></Setting>
        </template>
        <template #two>
            <Global></Global>
        </template>
    </Menu>
</template>

<script setup>
import Menu from '../frame/menu/Menu.vue';
import Setting from './components/setitng/Setting.vue';
import Global from './components/global/Global.vue';
</script>