import { onMounted } from 'vue'
import { reBuild } from '@/core/slots'
import { toSlots } from '@/core/config/toSlots/toSlots'
import { store, historyStack } from '@/core/store/store'
import { treeMethod } from '@/core/tree/tree'
export default function () {
    onMounted(() => {
        let history = localStorage.getItem('slots')
        if (!history) history = JSON.stringify(toSlots([]))
        const tNode = {
            clearFn: store.rootClear,
            reBuildFn: store.rootReBuild,
            children: treeMethod.getTree(),
            parent: null
        }
        reBuild(tNode, toSlots(JSON.parse(history)))
        historyStack.setPastStack({ tNode, history })
    })
}