import { store, setEditor } from '@/core/store/store.js'
import { reactive, computed, onMounted, provide, inject } from 'vue'
import { node, addNode } from '@/core/tree/tree.js'

export default (props) => {
    const id = Symbol()
    provide('pid', id)
    const pId = props.pId ? props.pId : inject('pid', null)

    const Node = new node(true)
    Node.vNode = props.cNode
    Node.pointer = props.pointer
    Node.props = props.cProps
    addNode(id, Node, pId)

    const selectd = () => setEditor(id)

    onMounted(() => {
        selectd()
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