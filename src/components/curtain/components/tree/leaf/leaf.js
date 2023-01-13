import { reactive } from 'vue'

export default function (props) {
    const isExpand = reactive(new Array(props.leaves.length).fill(true))

    const selectNode = (index) => {
        isExpand[index] = !isExpand[index]
    }

    return { isExpand, selectNode }
}