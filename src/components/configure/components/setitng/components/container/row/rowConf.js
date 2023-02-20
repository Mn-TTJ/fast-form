import { store } from "@/core/store/store";
import { ref, onMounted, watch } from "vue";
export default function () {
    let justify = ref('flex-start')
    let align = ref('flex-start')

    let cNode

    let row = ref({})

    const reSet = () => {
        cNode = store.cofNode
        if (!cNode) console.log("Error,can't find the component")
        row.value = cNode.props
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

    return { row, justify, align, reSet }
}