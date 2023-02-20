import { store } from "@/core/store/store";
import { onMounted, ref } from "vue";

export default function () {

    let cNode

    const checkbox = ref({})

    const name = ref('')
    const labels = ref(['标签1', '标签2', '标签3'])

    const setAttr = (val, attr) => checkbox.value[attr] = val
    const setLabel = (index) => checkbox.value.labels[index] = labels.value[index]
    const addLabel = () => {
        const len = labels.value.length + 1
        labels.value.push('标签' + len)
        checkbox.value.labels.push('标签' + len)
    }
    const deleteLabel = (index) => {
        labels.value.splice(index, 1)
        checkbox.value.labels.splice(index, 1)
    }

    const reSet = () => {
        cNode = store.cofNode
        if (!cNode) console.log("Error,can't find the component")
        checkbox.value = cNode.props
        name.value = checkbox.value.name
        labels.value = checkbox.value.labels.map(x => x)
    }

    onMounted(reSet)

    return { checkbox, name, labels, reSet, setAttr, setLabel, addLabel, deleteLabel }
}