import { slots } from '@/core/slots/index.js'
import { store, setdroger } from '@/core/store/store.js'
import { render, reactive, computed, provide, inject } from 'vue'
import { node, addNode } from '@/core/tree/tree.js'

export default (props) => {
    const id = Symbol()
    provide('pid', id)

    const pId = inject('pid', null)

    const Node = new node(false)
    addNode(id, Node, pId, -1)

    const dragOverEvent = () => setdroger(id)

    const o = reactive({
        'drogBox': true,
        'dragBorder': computed(() => props.border),
        'dragOver': computed(() => store.droger == id),
    })

    const dropEvent = (event) => {
        const root = event.target
        const name = event.dataTransfer.getData('drag')
        const slot = slots.get(name)
        const target = document.createElement('div')
        render(slot(id), target)
        root.appendChild(target)
    }

    return { dropEvent, dragOverEvent, o }
}