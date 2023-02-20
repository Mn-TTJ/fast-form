import { store } from "@/core/store/store";
import { onMounted, ref } from "vue";

export default function () {

    let cNode

    const timepicker = ref({})

    const name = ref('')
    const max = ref('23:59:59')
    const min = ref('00:00:00')

    const setAttr = (val, attr) => timepicker.value[attr] = val

    const reSet = () => {
        cNode = store.cofNode
        if (!cNode) console.log("Error,can't find the component")
        timepicker.value = cNode.props
        name.value = timepicker.value.name
        max.value = timepicker.value.max
        min.value = timepicker.value.min
    }

    onMounted(reSet)

    return { timepicker, name, max, min, reSet, setAttr }
}