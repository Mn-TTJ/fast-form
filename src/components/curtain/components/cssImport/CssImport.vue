<template>
    <div class="css-import" @click.stop>
        <div class="upload">
            <ui-button size=large @click="upload"><label>上传</label></ui-button>
        </div>
    </div>
</template>

<script setup>
import cssImport from './cssImport.js';
const { upload } = cssImport()
</script>

<style lang="scss" scoped>
@import './scss/index.scss';
</style>