import { store, setCurtain, turnOnCurtain } from "@/core/store/store";
import { onMounted, ref } from "vue";
import { setNumber } from '@/core/utils/utils'
import Coding from '@/components/curtain/components/coding/Coding.vue'

export default function () {

    let cNode

    const text = ref({})

    const fontSize = ref('1rem')
    const fontWeight = ref('400')
    const row = ref(100)

    const setRow = ref(null)

    const setAttr = (val, attr) => text.value[attr] = val

    const tips = '随意'
    const editCallBack = (val) => {
        text.value.text = val
        turnOnCurtain(false)
    }

    const dataSet = () => {
        setCurtain(<Coding preSet={text.value.text} tips={tips} mode='text' callBack={editCallBack} />)
        turnOnCurtain(true)
    }

    const reSet = () => {
        cNode = store.cofNode
        if (!cNode) console.log("Error,can't find the component")
        text.value = cNode.props
        fontSize.value = text.value.fontSize
        fontWeight.value = text.value.fontWeight
        row.value = text.value.row
        setRow.value = setNumber('row', row, cNode)
    }
    onMounted(reSet)

    return { text, fontSize, fontWeight, row, reSet, setAttr, dataSet, setRow }
}