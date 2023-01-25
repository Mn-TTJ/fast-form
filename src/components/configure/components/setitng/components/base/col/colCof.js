import { nodes } from "@/core/tree/tree";
import { store } from "@/core/store/store";
import { ref, onMounted } from "vue";
export default function () {

    let colCount = ref(0)
    let colOffset = ref(0)

    let getColCount = ref(null)
    let getColOffset = ref(null)

    let cNode

    const setNumber = (name, attr) => {
        let last = attr.value
        return () => {
            const num = parseFloat(attr.value)
            if (isNaN(num)) attr.value = last
            else {
                last = num,
                    attr.value = num
                cNode.props[name] = num
            }
        }
    }

    const reSet = () => {
        cNode = nodes.get(store.editor)
        if (!cNode) console.log("Error,can't find the component")
        colCount.value = cNode.props.colCount
        colOffset.value = cNode.props.colOffset
        getColCount.value = setNumber('colCount', colCount)
        getColOffset.value = setNumber('colOffset', colOffset)
    }

    onMounted(reSet)

    return { colOffset, colCount, reSet, getColCount, getColOffset }
}