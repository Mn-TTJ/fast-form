import RowCof from './components/row/RowCof.vue'
import { store } from '@/core/store/store.js'
import { shallowRef, watch } from 'vue'
import { nodes } from '@/core/tree/tree.js'

export default function () {
    const confComponent = shallowRef(null)

    const setComponents = new Map([
        ['ui-row', RowCof]
    ])

    watch(() => store.editor, () => {
        if (!store.editor) confComponent.value = null
        else {
            const node = nodes.get(store.editor)
            confComponent.value = setComponents.get(node.vNode.name)
        }
    })

    return { confComponent }
}