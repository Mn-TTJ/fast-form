<template>
    <div class="json-export" @click.stop>
        <div class="json-export-panel" ref="panel"></div>
        <section>
            <ui-button @click="download"><label>&#xe647;</label><label>保存</label></ui-button>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import jsonExport from './jsonExport.js'
const panel = ref(null)
const { download } = jsonExport(panel)
</script>

<style lang="scss" scoped>
@import './scss/index.scss';
</style>