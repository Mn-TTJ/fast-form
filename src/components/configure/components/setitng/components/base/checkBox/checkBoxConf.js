import { store } from "@/core/store/store";
import { onMounted, ref } from "vue";

export default function () {

    let cNode

    const checkBox = ref({})

    const name = ref('')
    const labels = ref(['标签1', '标签2', '标签3'])

    const setAttr = (val, attr) => checkBox.value[attr] = val
    const setLabel = (index) => checkBox.value.labels[index] = labels.value[index]
    const addLabel = () => {
        const len = labels.value.length + 1
        labels.value.push('标签' + len)
        checkBox.value.labels.push('标签' + len)
    }
    const deleteLabel = (index) => {
        labels.value.splice(index, 1)
        checkBox.value.labels.splice(index, 1)
    }

    const reSet = () => {
        cNode = store.cofNode
        if (!cNode) console.log("Error,can't find the component")
        checkBox.value = cNode.props
        name.value = checkBox.value.name
        labels.value = checkBox.value.labels.map(x => x)
    }

    onMounted(reSet)

    return { checkBox, name, labels, reSet, setAttr, setLabel, addLabel, deleteLabel }
}