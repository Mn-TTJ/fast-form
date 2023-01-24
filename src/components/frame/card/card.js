import { ref } from "vue"

export default () => {
    const expand = ref(true)

    const setExpand = () => expand.value = !expand.value

    return {
        expand, setExpand
    }
}