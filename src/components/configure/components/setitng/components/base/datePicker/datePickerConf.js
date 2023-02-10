import { store } from "@/core/store/store";
import { onMounted, ref } from "vue";

export default function () {

    let cNode

    const datePicker = ref({})

    const name = ref('')

    const setAttr = (val, attr) => datePicker.value[attr] = val

    const reSet = () => {
        cNode = store.cofNode
        if (!cNode) console.log("Error,can't find the component")
        datePicker.value = cNode.props
        name.value = datePicker.value.name
    }

    onMounted(reSet)

    return { datePicker, name, reSet, setAttr }
}