import { store } from "@/core/store/store";
import { onMounted, ref } from "vue";

export default function () {

    let cNode

    const line = ref({})

    const thick = ref('1px')
    const len = ref('100%')
    const space = ref('0.5rem')

    const setAttr = (val, attr) => line.value[attr] = val

    const reSet = () => {
        cNode = store.cofNode
        if (!cNode) console.log("Error,can't find the component")
        line.value = cNode.props
        thick.value = line.value.thick
        len.value = line.value.len
        space.value = line.value.space
    }

    onMounted(reSet)

    return { line, thick, len, space, reSet, setAttr }
}