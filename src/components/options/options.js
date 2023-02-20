import { computed } from "vue";
import { store, historyStack } from "@/core/store/store";
import { reBuild } from "@/core/slots";
import { toSlots } from "@/core/config/toSlots/toSlots";
import { treeMethod } from '@/core/tree/tree'

export default function () {
    const hasPast = computed(() => store.pastStack.length > 1)
    const hasNext = computed(() => store.nextStack.length > 0)

    const toPast = () => {
        if (!hasPast.value) return
        const past = historyStack.toPackStack()
        treeMethod.clearChildren(past.parent)
        reBuild(past.tNode, toSlots(JSON.parse(past.history)))
    }

    const toNext = () => {
        if (!hasNext.value) return
        const next = historyStack.toNextStack()
        treeMethod.clearChildren(next.parent)
        reBuild(next.tNode, toSlots(JSON.parse(next.history)))
    }

    const preserve = () => {
        const tNode = {
            clearFn: store.rootClear,
            reBuildFn: store.rootReBuild,
            children: treeMethod.getTree(),
            parent: null
        }
        const history = treeMethod.toJson()
        historyStack.setPastStack({ tNode, history })
        store.tips({ text: '保存成功', color: '#008B8B', auto: true })
    }

    return { hasPast, hasNext, toPast, toNext, preserve }
}