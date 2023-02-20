import container from './container'
import base from './base'
import senior from './senior'
import { isForm } from '@/core/config/toSlots/toSlots'
import { treeMethod } from '@/core/tree/tree'
import { store, historyStack } from '@/core/store/store'

const slots = new Map()

const allSlots = [...container, ...base, ...senior]

const slotsBuilder = new Map(allSlots)

const setSlot = (name) => {
    const builder = slotsBuilder.get(name)
    if (builder) builder(slots, name)
}

const reBuild = (tNode, slots) => {
    if (tNode.clearFn) tNode.clearFn()
    slots.forEach((element, index) => {
        setImmediate(() => {
            tNode.reBuildFn(element.slot, element.cProps)
            setImmediate(() => {
                if (tNode.children[index].vNode == 'ui-row') {
                    const col1 = tNode.children[index].slots.default[0]
                    reBuild({
                        clearFn: null,
                        reBuildFn: col1.reBuild,
                        children: col1.slots.default
                    },
                        slots[index].children[0])
                    const col2 = tNode.children[index].slots.default[1]
                    reBuild({
                        clearFn: null,
                        reBuildFn: col2.reBuild,
                        children: col2.slots.default
                    },
                        slots[index].children[1])
                } else if (tNode.children[index].vNode == 'ui-tabs') {
                    tNode.children[index].slots.default.forEach((e, i) => {
                        reBuild({
                            clearFn: null,
                            reBuildFn: e.reBuild,
                            children: e.slots.default
                        },
                            slots[index].children[i])
                    })
                } else if (isForm(slots[index].slot)) {
                    const e = tNode.children[index].slots.default[0]
                    reBuild({
                        clearFn: null,
                        reBuildFn: e.reBuild,
                        children: e.slots.default
                    }, slots[index].children)
                } else {
                    const e = tNode.children[index]
                    reBuild({
                        clearFn: null,
                        reBuildFn: e.reBuild,
                        children: e.slots.default
                    }, slots[index].children)
                }
            })
        })
    });
}

const clear = () => {
    treeMethod.clearChildren()
    store.rootClear()
    const tNode = {
        clearFn: store.rootClear,
        reBuildFn: store.rootReBuild,
        children: treeMethod.getTree(),
        parent: null
    }
    historyStack.setPastStack({ tNode, history: '[]' })
}

export { slots, setSlot, reBuild, clear }