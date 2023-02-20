<template>
    <div class="json-import" @click.stop>
        <div class="upload">
            <ui-button size=large @click="upload"><label>上传</label></ui-button>
        </div>
    </div>
</template>

<script setup>
import jsonImport from './jsonImport.js';
const { upload } = jsonImport()
</script>

<style lang="scss" scoped>
@import './scss/index.scss';
</style>