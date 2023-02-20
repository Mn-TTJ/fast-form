<template>
    <Card label="常见属性" :col="1">
        <section>
            <label>名字</label>
            <aside><ui-input v-model="name" @blur="setAttr(name, 'name')" @keyup.enter="setAttr(name, 'name')" />
            </aside>
        </section>
        <section>
            <label>按钮</label>
            <aside><ui-input v-model="text" @blur="setAttr(text, 'text')" @keyup.enter="setAttr(text, 'text')" />
            </aside>
        </section>
        <section>
            <label>类型</label>
            <aside><ui-input v-model="accept" @blur="setAttr(accept, 'accept')" @keyup.enter="setAttr(accept, 'accept')" />
            </aside>
        </section>
        <section>
            <label>上限</label>
            <aside><ui-input v-model="max" @blur="setMax" @keyup.enter="setMax" />
            </aside>
        </section>
        <section>
            <label>禁用</label>
            <aside><ui-switch v-model="upload.disabled"></ui-switch>
            </aside>
        </section>
        <section>
            <label>覆盖</label>
            <aside><ui-switch v-model="upload.cover"></ui-switch>
            </aside>
        </section>
        <section>
            <label>多选</label>
            <aside><ui-switch v-model="upload.multiple"></ui-switch>
            </aside>
        </section>
        <section>
            <label>照片墙</label>
            <aside><ui-switch v-model="upload.picture"></ui-switch>
            </aside>
        </section>
    </Card>
    <class-name v-model="upload.class"></class-name>
</template>

<script setup>
import Card from '@/components/frame/card/Card.vue';
import ClassName from '../../className/ClassName.vue';
import uploadConf from './uploadConf.js'
import { defineExpose } from 'vue';
const { upload, name, text, accept, max, reSet, setAttr, setMax } = uploadConf()
defineExpose({ reSet })
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';
</style>