import { getComponentTree } from '@/core/tree/tree.js'
export default function () {
    const componentTree = getComponentTree()

    return { componentTree }
}