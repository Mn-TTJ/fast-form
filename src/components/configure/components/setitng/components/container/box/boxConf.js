import { store } from "@/core/store/store";
import { onMounted, ref } from "vue";
export default function () {

    let cNode

    const box = ref({})

    const height = ref('auto')

    const width = ref('100%')

    const margin = ref('0rem')

    const padding = ref('0rem')

    const setAttr = (val, attr) => box.value[attr] = val

    const reSet = () => {
        cNode = store.cofNode
        if (!cNode) console.log("Error,can't find the component")
        box.value = cNode.props
        height.value = box.value.height
        width.value = box.value.width
        margin.value = box.value.margin
        padding.value = box.value.padding
    }

    onMounted(reSet)

    return { box, height, width, margin, padding, reSet, setAttr }
}