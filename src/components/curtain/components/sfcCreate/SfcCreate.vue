<template>
    <div class="sfc-create" @click.stop>
        <header>
            <div class="sfc-btn-1">
                <button @click="typeTransform(true)">vue</button>
                <button @click="typeTransform(false)">css</button>
            </div>
            <p>{{ fileType ? 'vue' : 'css' }}</p>
            <div class="sfc-btn-2">
                <button @click="downloadVue">下载vue</button>
                <button @click="downloadCss">下载css</button>
                <button @click="downloadAll">全部下载</button>
            </div>
        </header>
        <div class="sfc-editer" v-show="fileType" ref="vueEditer"></div>
        <div class="sfc-editer" v-show="!fileType" ref="cssEditer"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import sfcCreate from '@/components/curtain/components/sfcCreate/sfcCreate'
const vueEditer = ref(null)
const cssEditer = ref(null)
const { fileType, typeTransform, downloadVue, downloadCss, downloadAll } = sfcCreate(vueEditer, cssEditer)
</script>

<style lang="scss" scoped>
@import './scss/index.scss';
</style>