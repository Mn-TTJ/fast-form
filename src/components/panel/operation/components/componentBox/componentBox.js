import { inject, provide, onMounted, onBeforeUnmount, onBeforeUpdate, nextTick } from 'vue'
import { pNodeKey, idKey, editerKey, componentKey, reBuidKey } from '@/core/config/key'
import { treeNode, treeMethod } from '@/core/tree/tree.js'
import { setDelNode } from '@/core/store/store'
export default function (props) {

    let pNode = inject(pNodeKey, null)

    let id = props.reverse ? Symbol() : inject(idKey)

    if (!pNode) pNode = treeMethod.getParentNode()

    if (props.filter && (!props.filter(pNode.slots, props.cProps.prop, props.cSlot))) return {}

    const node = new treeNode(id, props.cName, props.cProps)
    treeMethod.pushNode(node, pNode, props.cSlot)
    const getVNode = () => node

    const setReBuild = (reBuild, clear, flip) => { node.reBuild = reBuild, node.clear = clear, node.flip = flip }
    provide(reBuidKey, setReBuild)

    if (props.reverse && !props.disEidt) {
        provide(componentKey, getVNode)
    }

    onMounted(() => {
        if (!props.reverse && !props.disEidt) {
            const setVNode = inject(editerKey)
            setVNode(node)
        }
    })

    onBeforeUnmount(() => {
        setDelNode(node, pNode)
    })

    onBeforeUpdate(() => {
        if (props.reSort) nextTick(() => props.reSort(node))
    })

    provide(pNodeKey, node)
    provide(idKey, id)
}