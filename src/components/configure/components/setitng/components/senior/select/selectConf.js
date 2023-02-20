import { store, setCurtain, turnOnCurtain } from "@/core/store/store";
import { onMounted, ref } from "vue";
import Coding from '@/components/curtain/components/coding/Coding.vue'

export default function () {

    let cNode

    const select = ref({})

    const name = ref('')

    const setAttr = (val, attr) => select.value[attr] = val

    const tips = `value:值,hasChild:是否有下一级,children:下一级`
    const editCallBack = (val) => {
        select.value.dataSet = val
        turnOnCurtain(false)
    }

    const dataSet = () => {
        setCurtain(<Coding json preSet={select.value.dataSet} tips={tips} mode='json' callBack={editCallBack} />)
        turnOnCurtain(true)
    }

    const reSet = () => {
        cNode = store.cofNode
        if (!cNode) console.log("Error,can't find the component")
        select.value = cNode.props
        name.value = select.value.name
    }

    onMounted(reSet)

    return { select, name, reSet, setAttr, dataSet }
}