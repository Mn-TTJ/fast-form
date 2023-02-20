import { store } from "@/core/store/store";
import { ref, onMounted } from "vue";
import { setNumber } from '@/core/utils/utils'
export default function () {

    let colCount = ref(0)
    let colOffset = ref(0)

    let getColCount = ref(null)
    let getColOffset = ref(null)

    let cNode = null

    let col = ref({})

    const reSet = () => {
        cNode = store.cofNode
        if (!cNode) console.log("Error,can't find the component")
        col.value = cNode.props
        colCount.value = cNode.props.colCount
        colOffset.value = cNode.props.colOffset
        getColCount.value = setNumber('colCount', colCount, cNode)
        getColOffset.value = setNumber('colOffset', colOffset, cNode)
    }

    onMounted(reSet)

    return { col, colOffset, colCount, reSet, getColCount, getColOffset }
}