<template>
    <div class="operation">
        <DrogBox class="opeartion-drogBox" :border="false"></DrogBox>
    </div>
</template>

<script setup>
import DrogBox from './components/drogBox/DrogBox.vue';
import operation from './operation';
operation()
</script>

<style lang="scss" scoped>
@import './scss/index.scss';
</style>