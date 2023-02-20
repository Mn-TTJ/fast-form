import { store } from "@/core/store/store";
import { onMounted, ref } from "vue";

export default function () {

    let cNode

    const radio = ref({})

    const name = ref('')
    const group = ref('' + Math.floor(Math.random() * 10000))
    const labels = ref(['标签1', '标签2', '标签3'])
    const values = ref(['1', '2', '3'])

    const setAttr = (val, attr) => radio.value[attr] = val
    const setLabel = (index) => radio.value.labels[index] = labels.value[index]
    const setValue = (index) => radio.value.values[index] = values.value[index]
    const addLabel = () => {
        const len = labels.value.length + 1
        labels.value.push('标签' + len)
        values.value.push('' + len)
        radio.value.labels.push('标签' + len)
        radio.value.values.push('' + len)
    }
    const deleteLabel = (index) => {
        labels.value.splice(index, 1)
        values.value.splice(index, 1)
        radio.value.labels.splice(index, 1)
        radio.value.values.splice(index, 1)
    }

    const reSet = () => {
        cNode = store.cofNode
        if (!cNode) console.log("Error,can't find the component")
        radio.value = cNode.props
        name.value = radio.value.name
        group.value = radio.value.group
        labels.value = radio.value.labels.map(x => x)
        values.value = radio.value.values.map(x => x)
    }

    onMounted(reSet)

    return { radio, name, group, labels, values, reSet, setAttr, setLabel, setValue, addLabel, deleteLabel }
}