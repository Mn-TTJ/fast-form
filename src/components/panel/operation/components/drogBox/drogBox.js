import { slots } from '@/core/slots/index.js'
import { store, setdroger } from '@/core/store/store.js'
import { render, reactive, computed, inject } from 'vue'
import { treeMethod } from '@/core/tree/tree.js'
import { pNodeKey } from '@/core/config/key'

export default (props) => {

    const id = Symbol()

    const pNode = inject(pNodeKey, null)

    const dragOverEvent = () => setdroger(id)

    const o = reactive({
        'drogBox': true,
        'dragBorder': computed(() => props.border),
        'dragOver': computed(() => store.droger == id),
    })

    const dropEvent = (event) => {
        treeMethod.setParentNode(pNode)
        const root = event.target
        const name = event.dataTransfer.getData('drag')
        const slot = slots.get(name)
        const target = document.createElement('div')
        render(slot(), target)
        root.appendChild(target)
    }

    return { dropEvent, dragOverEvent, o }
}