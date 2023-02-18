import { store, turnOnCurtain, historyStack } from '@/core/store/store.js'
import { reBuild } from '@/core/slots'
import { treeMethod } from '@/core/tree/tree'
import { toSlots } from '@/core/config/toSlots/toSlots'

export default function () {
    const upload = () => {
        const input = document.createElement('input')
        input.setAttribute('type', 'file')
        input.setAttribute('accept', 'application/json')
        input.click()
        input.onchange = () => {
            const reader = new FileReader()
            reader.readAsText(input.files[0], "UTF-8")
            reader.onload = ((e) => {
                const history = e.target.result
                treeMethod.clearChildren()
                const tNode = {
                    clearFn: store.rootClear,
                    reBuildFn: store.rootReBuild,
                    children: treeMethod.getTree(),
                    parent: null
                }
                historyStack.setPastStack({ tNode, history })
                reBuild(tNode, toSlots(JSON.parse(history)))
                input.remove()
                turnOnCurtain(false)
            })
        }
    }

    return { upload }
}