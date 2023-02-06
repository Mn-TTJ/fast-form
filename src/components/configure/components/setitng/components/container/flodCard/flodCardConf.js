import { store } from "@/core/store/store";
import { onMounted, ref } from "vue";
export default function () {

    let cNode

    const card = ref({})

    const radius = ref('0.2rem')

    const title = ref('标题')

    const setAttr = (val, attr) => card.value[attr] = val

    const reSet = () => {
        cNode = store.cofNode
        if (!cNode) console.log("Error,can't find the component")
        card.value = cNode.props.card
        radius.value = card.value.radius
        title.value = card.value.title
    }

    onMounted(reSet)

    return { card, radius, title, reSet, setAttr }
}