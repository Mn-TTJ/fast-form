<template>
    <Structure>
        <template #left>
            <Library></Library>
        </template>
        <template #right>
            <Configure></Configure>
        </template>
        <template #nav>
            <Options></Options>
        </template>
        <template #operation>
            <Operation></Operation>
        </template>
        <template #coding>
            <Coding></Coding>
        </template>
    </Structure>
</template>
  
<script setup>
import Structure from '@/components/frame/structure/Structure.vue';
import Library from '@/components/library/Library.vue';
import Configure from '../components/configure/Configure.vue';
import Options from '../components/options/Options.vue';
import Operation from '@/components/panel/operation/Operation.vue';
import Coding from '@/components/panel/coding/Coding.vue';
</script>