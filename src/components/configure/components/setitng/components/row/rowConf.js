import { nodes } from '@/core/tree/tree.js'
import { store } from '@/core/store/store.js'

export default function () {
    const node = nodes.get(store.editor)

    const name = node.props.name
}