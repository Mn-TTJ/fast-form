import { store } from "@/core/store/store";
import { onMounted, ref } from "vue";

export default function () {

    let cNode

    const timeRange = ref({})

    const name = ref('')
    const max = ref(['23:59:59', '23:59:59'])
    const min = ref(['00:00:00', '00:00:00'])

    const setMax = (index) => timeRange.value.max[index] = max.value[index]
    const setMin = (index) => timeRange.value.min[index] = min.value[index]

    const setAttr = (val, attr) => timeRange.value[attr] = val

    const reSet = () => {
        cNode = store.cofNode
        if (!cNode) console.log("Error,can't find the component")
        timeRange.value = cNode.props
        name.value = timeRange.value.name
        max.value = timeRange.value.max.map(x => x)
        min.value = timeRange.value.min.map(x => x)
    }

    onMounted(reSet)

    return { timeRange, name, max, min, reSet, setAttr, setMax, setMin }
}