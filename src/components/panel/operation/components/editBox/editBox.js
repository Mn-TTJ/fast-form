import { store, setEditor } from '@/core/store/store.js'
import { reactive, computed, onMounted, provide, inject } from 'vue'
import { node, addNode } from '@/core/tree/tree.js'

export default (props) => {
    const id = Symbol()
    provide('pid', id)
    const pId = props.pId ? props.pId : inject('pid', null)

    const Node = new node(true)
    Node.cNode = props.cNode
    addNode(id, Node, pId, -1)

    const selectd = () => setEditor(id)

    onMounted(() => {
        selectd()
    })

    const o = reactive({
        'edit-box': true,
        'edit-border': computed(() => id == store.editor)
    })

    const s = reactive({
        'edit-box-handle': true,
        'edit-show ': computed(() => id == store.editor)
    })

    return { s, o, selectd }
}