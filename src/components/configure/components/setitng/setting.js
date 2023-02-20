import { store, setCofNode } from '@/core/store/store.js'
import { shallowRef, watch } from 'vue'
import components from './components/index'

export default function (ele) {
    const confComponent = shallowRef(null)

    const setComponents = new Map(components)
    let name = null

    watch(() => store.cofNode, () => {
        if (!store.cofNode) {
            confComponent.value = null
            name = null
        }
        else {
            if (name !== store.cofNode.name) {
                name = store.cofNode.name
                confComponent.value = setComponents.get(name)
            }
            else ele.value.reSet()
        }
    })

    watch(() => store.editor, () => {
        if (!store.editor) {
            setCofNode({ name: 'default' })
        }
    }, { immediate: true })

    return { confComponent }
}