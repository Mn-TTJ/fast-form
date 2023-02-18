import { slots } from '@/core/slots/index.js'
import { store, setdroger, setRoot } from '@/core/store/store.js'
import { render, reactive, computed, inject } from 'vue'
import { treeMethod } from '@/core/tree/tree.js'
import { pNodeKey, reBuidKey } from '@/core/config/key'
import { isDOM } from '@/core/utils/utils'

export default (props, drogContainer) => {

    const id = Symbol()

    const pNode = inject(pNodeKey, null)

    const dragOverEvent = () => {
        if (props.disabled) return
        setdroger(id)
    }

    const o = reactive({
        'drogBox': true,
        'dragBorder': computed(() => props.border),
        'dragOver': computed(() => store.droger == id),
        'drog-disabled': computed(() => props.disabled)
    })

    const clearNode = () => {
        while (drogContainer.value.firstChild) {
            if (isDOM(drogContainer.value.firstChild)) render(null, drogContainer.value.firstChild)
            drogContainer.value.firstChild.remove()
        }
    }

    const flipNode = (index) => {
        const children = drogContainer.value.children
        let pre = children[index - 1]
        let next = children[index]
        drogContainer.value.removeChild(next)
        drogContainer.value.insertBefore(next, pre)
    }

    const reBuild = (name, props) => {
        treeMethod.setParentNode(pNode)
        const slot = slots.get(name)
        const target = document.createElement('div')
        render(slot(reactive(props)), target)
        drogContainer.value.appendChild(target)
    }

    const setReBuild = inject(reBuidKey, null)

    if (!setReBuild) setRoot(reBuild, clearNode, flipNode)
    else setReBuild(reBuild, clearNode, flipNode)

    const dropEvent = (event) => {
        if (props.disabled) return
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