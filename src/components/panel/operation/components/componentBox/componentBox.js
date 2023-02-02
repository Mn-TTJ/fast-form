import { inject, provide } from 'vue'
import { pNodeKey, idKey } from '@/core/config/key'
import { treeNode, treeMethod } from '@/core/tree/tree.js'
export default function (props) {
    let pNode = inject(pNodeKey, null)

    let id = props.reverse ? Symbol() : inject(idKey)

    if (!pNode) pNode = treeMethod.getParentNode()

    const node = new treeNode(id, props.cName, props.cProps)
    treeMethod.pushNode(node, pNode, props.cSlot)

    provide(pNodeKey, node)
    provide(idKey, id)
}