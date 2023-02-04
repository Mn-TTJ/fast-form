import { inject, provide, onBeforeUnmount } from 'vue'
import { pNodeKey, idKey } from '@/core/config/key'
import { treeNode, treeMethod } from '@/core/tree/tree.js'
import { setDelNode } from '@/core/store/store'
export default function (props) {

    let pNode = inject(pNodeKey, null)

    let id = props.reverse ? Symbol() : inject(idKey)

    if (!pNode) pNode = treeMethod.getParentNode()

    if (props.filter && (!props.filter(pNode.slots, props.cProps.prop, props.cSlot))) return {}

    const node = new treeNode(id, props.cName, props.cProps)
    treeMethod.pushNode(node, pNode, props.cSlot)

    onBeforeUnmount(() => {
        setDelNode(node, pNode)
    }),

        provide(pNodeKey, node)
    provide(idKey, id)
}