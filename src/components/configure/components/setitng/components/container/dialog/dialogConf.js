import { store } from "@/core/store/store";
import { onMounted, ref } from "vue";
export default function () {

    let cNode

    const dialog = ref({})

    const radius = ref('0.2rem')

    const width = ref('20rem')

    const height = ref('auto')

    const title = ref('标题')

    const setAttr = (val, attr) => dialog.value[attr] = val

    const reSet = () => {
        cNode = store.cofNode
        if (!cNode) console.log("Error,can't find the component")
        dialog.value = cNode.props.dialog
        radius.value = dialog.value.radius
        width.value = dialog.value.width
        height.value = dialog.value.height
        title.value = dialog.value.title
    }

    onMounted(reSet)

    return { dialog, radius, width, height, title, reSet, setAttr }
}