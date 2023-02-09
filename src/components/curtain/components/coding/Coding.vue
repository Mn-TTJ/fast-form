<template>
    <div class="coding" @click.stop>
        <div class="code-box" ref="codeBox"></div>
        <section>
            <aside>
                <h5>格式：</h5>
                <div class="code-tips" ref="codeTips"></div>
            </aside>
            <aside>
                <ui-button @click="getContent">保存编辑</ui-button>
            </aside>
        </section>
    </div>
</template>

<script setup>
import coding from './coding'
import Props from './props/index'
import { ref } from 'vue'
// eslint-disable-next-line
const props = defineProps(Props)
const codeBox = ref(null)
const codeTips = ref(null)
const { getContent } = coding(codeBox, codeTips, props)
</script>

<style lang="scss" scoped>
@import './scss/index.scss';
</style>