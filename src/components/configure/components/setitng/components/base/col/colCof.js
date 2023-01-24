import { nodes } from "@/core/tree/tree";
import { store } from "@/core/store/store";
import { ref, onMounted } from "vue";
export default function () {

    let colCount = ref(0)
    let name = ref('')

    let cNode

    const reSet = () => {
        cNode = nodes.get(store.editor)
        if (!cNode) console.log("Error,can't find the component")
        colCount.value = cNode.props.colCount
        name.value = cNode.props.name
    }

    const inputProps = (attr, name) => cNode.props[name] = attr

    const getNumber = (attr, name) => {
        attr = +attr
        if (isNaN(attr)) {
            attr = 12
            colCount.value = 12
        }
        inputProps(attr, name)
    }

    const getString = inputProps

    onMounted(reSet)

    return { name, colCount, reSet, getNumber, getString }
}