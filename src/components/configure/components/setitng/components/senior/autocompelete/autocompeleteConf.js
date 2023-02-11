import { store, setCurtain, turnOnCurtain } from "@/core/store/store";
import { onMounted, ref } from "vue";
import Coding from '@/components/curtain/components/coding/Coding.vue'

export default function () {

    let cNode

    const autocompelete = ref({})

    const name = ref('')
    const parser = ref('输入')

    const setAttr = (val, attr) => autocompelete.value[attr] = val

    const tips = '数组JSON'
    const editCallBack = (val) => {
        autocompelete.value.tips = val
        turnOnCurtain(false)
    }

    const dataSet = () => {
        setCurtain(<Coding json preSet={autocompelete.value.tips} tips={tips} mode='json' callBack={editCallBack} />)
        turnOnCurtain(true)
    }

    const reSet = () => {
        cNode = store.cofNode
        if (!cNode) console.log("Error,can't find the component")
        autocompelete.value = cNode.props
        name.value = autocompelete.value.name
        parser.value = autocompelete.value.parser
    }

    onMounted(reSet)

    return { autocompelete, name, parser, reSet, setAttr, dataSet }
}