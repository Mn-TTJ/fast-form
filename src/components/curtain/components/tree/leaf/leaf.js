import { reactive } from 'vue'
import { setEditor } from '@/core/store/store'

export default function (props) {
    const isExpand = reactive(new Array(props.leaves.length).fill(true))

    const selectNode = (index) => isExpand[index] = !isExpand[index]

    const selectEditor = (id) => setEditor(id)

    return { isExpand, selectNode, selectEditor }
}