import { treeMethod } from '@/core/tree/tree.js'
export default function () {
    const componentTree = treeMethod.getComponentTree()

    return { componentTree }
}