import { store } from "@/core/store/store";
import { onMounted, ref } from "vue";

export default function () {

    let cNode

    const button = ref({})

    const label = ref('')

    const setAttr = (val, attr) => button.value[attr] = val

    const reSet = () => {
        cNode = store.cofNode
        if (!cNode) console.log("Error,can't find the component")
        button.value = cNode.props
        label.value = button.value.label
    }

    onMounted(reSet)

    return { button, label, reSet, setAttr }
}