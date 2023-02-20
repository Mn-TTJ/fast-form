import { store, setCurtain, turnOnCurtain } from "@/core/store/store";
import { onMounted, ref } from "vue";
import Coding from '@/components/curtain/components/coding/Coding.vue'

export default function () {

    let cNode

    const code = ref({})

    const tips = 'html代码'
    const editCallBack = (val) => {
        code.value.code = val
        turnOnCurtain(false)
    }

    const dataSet = () => {
        setCurtain(<Coding preSet={code.value.code} tips={tips} mode='html' callBack={editCallBack} />)
        turnOnCurtain(true)
    }

    const reSet = () => {
        cNode = store.cofNode
        if (!cNode) console.log("Error,can't find the component")
        code.value = cNode.props
    }

    onMounted(reSet)

    return { reSet, dataSet }
}