import { store, setEditor, setCofNode } from '@/core/store/store.js'
import { reactive, ref, computed, watch, onMounted, provide, inject } from 'vue'
import { idKey, editerKey, componentKey } from '@/core/config/key'

export default (props) => {
    const id = props.reverse ? inject(idKey) : Symbol()

    provide(idKey, id)

    const vNode = ref(null)

    const selectd = () => setEditor(id)

    const turnPreEditer = () => {
        if (vNode.value.parent) {
            setEditor(vNode.value.parent.id)
        }
    }

    const setVNode = (val) => vNode.value = val
    const getVNode = inject(componentKey, null)

    provide(editerKey, setVNode)

    onMounted(() => {
        selectd()
        if (!vNode.value) vNode.value = getVNode()
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

    return { s, o, selectd, turnPreEditer }
}