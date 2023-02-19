import { reBuild } from '@/core/slots'
import { treeMethod } from '@/core/tree/tree'
import { toSlots } from '@/core/config/toSlots/toSlots'
import { store, historyStack } from '@/core/store/store'
export default function () {
    const clickEvent = (json) => {
        const history = json
        treeMethod.clearChildren()
        const tNode = {
            clearFn: store.rootClear,
            reBuildFn: store.rootReBuild,
            children: treeMethod.getTree(),
            parent: null
        }
        historyStack.setPastStack({ tNode, history })
        reBuild(tNode, toSlots(JSON.parse(history)))
    }

    return { clickEvent }
}