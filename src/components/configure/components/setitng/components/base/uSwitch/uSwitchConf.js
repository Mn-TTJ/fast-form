import { store } from "@/core/store/store";
import { onMounted, ref } from "vue";

export default function () {

    let cNode

    const uSwitch = ref({})

    const name = ref('')

    const setAttr = (val, attr) => uSwitch.value[attr] = val

    const reSet = () => {
        cNode = store.cofNode
        if (!cNode) console.log("Error,can't find the component")
        uSwitch.value = cNode.props
        name.value = uSwitch.value.name
    }

    onMounted(reSet)

    return { uSwitch, name, reSet, setAttr }
}