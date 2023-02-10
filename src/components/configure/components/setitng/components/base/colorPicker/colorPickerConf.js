import { store } from "@/core/store/store";
import { onMounted, ref } from "vue";

export default function () {

    let cNode

    const colorpicker = ref({})

    const name = ref('')

    const setAttr = (val, attr) => colorpicker.value[attr] = val

    const reSet = () => {
        cNode = store.cofNode
        if (!cNode) console.log("Error,can't find the component")
        colorpicker.value = cNode.props
        name.value = colorpicker.value.name
    }

    onMounted(reSet)

    return { colorpicker, name, reSet, setAttr }
}