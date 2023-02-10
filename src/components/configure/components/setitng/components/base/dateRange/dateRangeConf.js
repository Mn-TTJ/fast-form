import { store } from "@/core/store/store";
import { onMounted, ref } from "vue";

export default function () {

    let cNode

    const dateRange = ref({})

    const name = ref('')

    const setAttr = (val, attr) => dateRange.value[attr] = val

    const reSet = () => {
        cNode = store.cofNode
        if (!cNode) console.log("Error,can't find the component")
        dateRange.value = cNode.props
        name.value = dateRange.value.name
    }

    onMounted(reSet)

    return { dateRange, name, reSet, setAttr }
}