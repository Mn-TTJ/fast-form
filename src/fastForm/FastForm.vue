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
    </Structure>
    <Curtain></Curtain>
    <ui-tips ref="tips"></ui-tips>
</template>
  
<script setup>
import Structure from '@/components/frame/structure/Structure.vue';
import Library from '@/components/library/Library.vue';
import Configure from '../components/configure/Configure.vue';
import Options from '../components/options/Options.vue';
import Operation from '@/components/panel/operation/Operation.vue';
import Curtain from '../components/curtain/Curtain.vue';
import fastForm from './fastForm'
import { ref } from 'vue';
const tips = ref(null)
fastForm(tips)
</script>