import { nodes } from "@/core/tree/tree";
import { store } from "@/core/store/store";
import { ref, onMounted, watch } from "vue";
export default function () {
    let justify = ref('flex-start')
    let align = ref('flex-start')

    let cNode

    const reSet = () => {
        cNode = nodes.get(store.editor)
        if (!cNode) console.log("Error,can't find the component")
        justify.value = cNode.props.justify
        align.value = cNode.props.align
    }

    watch(justify, () => {
        cNode.props.justify = justify.value
    })

    watch(align, () => {
        cNode.props.align = align.value
    })

    onMounted(reSet)

    return { justify, align, reSet }
}