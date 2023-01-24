import { store } from '@/core/store/store.js'
import { shallowRef, watch } from 'vue'
import { nodes } from '@/core/tree/tree.js'
import components from './components/index'

export default function (ele) {
    const confComponent = shallowRef(null)

    const setComponents = new Map(components)
    let name = null

    watch(() => store.editor, () => {
        if (!store.editor) confComponent.value = null
        else {
            const node = nodes.get(store.editor)
            if (name != node.vNode.name) {
                name = node.vNode.name
                confComponent.value = setComponents.get(name)
            }
            else ele.value.reSet()
        }
    })

    return { confComponent }
}