import { store, setEditor, setCofNode } from '@/core/store/store.js'
import { idKey, editerKey, componentKey } from '@/core/config/key'
import { treeMethod } from '@/core/tree/tree'
import { reactive, ref, computed, watch, onMounted, provide, inject, render } from 'vue'
import { isForm, toSlot } from '@/core/config/toSlots/toSlots'

export default (props, root) => {
    const id = props.reverse ? inject(idKey) : Symbol()

    provide(idKey, id)

    const vNode = ref(null)

    const selectd = () => setEditor(id)

    const distory = () => {
        render(null, root.value)
        root.value.parentNode.removeChild(root.value)
    }

    const turnPreEditer = () => {
        if (vNode.value.parent) {
            setEditor(vNode.value.parent.id)
        }
    }

    const flipNode = (direction) => {
        treeMethod.flipVNode(vNode.value, direction)
    }

    const delNode = () => {
        if (vNode.value.vNode == 'ui-col') {
            treeMethod.clearChildren(vNode.value)
            vNode.value.clear()
        } else if (isForm(toSlot(vNode.value.vNode))) {
            treeMethod.delChild(vNode.value.parent, vNode.value.parent.parent)
            vNode.value.parent.distory()
        } else {
            treeMethod.delChild(vNode.value, vNode.value.parent)
            vNode.value.distory()
        }
        setEditor(null)
    }

    const setVNode = (val) => vNode.value = val
    const getVNode = inject(componentKey, null)

    provide(editerKey, setVNode)

    onMounted(() => {
        selectd()
        if (!vNode.value) vNode.value = getVNode()
        vNode.value.distory = distory
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

    return { s, o, selectd, turnPreEditer, flipNode, delNode }
}