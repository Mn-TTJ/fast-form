<template>
  <Home>
    <template #left>
      <Library></Library>
    </template>
    <template #right>
      hello world
    </template>
    <template #nav>
      hello world
    </template>
    <template #operation>
      <Operation></Operation>
    </template>
    <template #coding>
      <Coding></Coding>
    </template>
  </Home>
</template>

<script setup>
import Home from './home/Home.vue';
import Library from './components/library/Library.vue';
import Operation from './components/panel/operation/Operation.vue';
import Coding from './components/panel/coding/Coding.vue';
</script>

<style lang="scss">
@import './assets/scss/index.scss';
</style>