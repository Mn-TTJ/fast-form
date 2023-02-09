import { store, setEditor, setCofNode } from '@/core/store/store.js'
import { reactive, computed, watch, onMounted, provide, inject } from 'vue'
import { idKey } from '@/core/config/key'

export default (props) => {
    const id = props.reverse ? inject(idKey) : Symbol()

    provide(idKey, id)

    const selectd = () => setEditor(id)

    onMounted(() => {
        selectd()
    })

    watch(() => store.editor, () => {
        if (store.editor == id) setCofNode({ name: props.cName, props: props.cProps })
    })

    const o = reactive({
        'edit-box': true,
        'edit-select': computed(() => id == store.editor)
    })

    const s = reactive({
        'edit-box-handle': true,
        'edit-show ': computed(() => id == store.editor)
    })

    return { s, o, selectd }
}