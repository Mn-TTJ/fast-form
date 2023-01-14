<template>
    <component :is="confComponent"></component>
</template>

<script setup>
import setting from './setting';
const { confComponent } = setting()
</script>