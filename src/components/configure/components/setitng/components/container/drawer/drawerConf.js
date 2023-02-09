import { store } from "@/core/store/store";
import { onMounted, ref, watch } from "vue";
export default function () {

    let cNode

    const drawer = ref({})

    const altitude = ref('600px')

    const direction = ref(4)

    const setAttr = (val, attr) => drawer.value[attr] = val

    const setDirection = (right, bottom, top) => {
        if (top) {
            direction.value = 1
            return
        }
        if (bottom) {
            direction.value = 2
            return
        }
        if (right) {
            direction.value = 3
            return
        }
        direction.value = 4
        return
    }

    const setDirectionR = () => {
        if (direction.value == 4) {
            drawer.value.top = true
            drawer.value.bottom = false
            drawer.value.right = false
        }
        if (direction.value == 3) {
            drawer.value.top = false
            drawer.value.bottom = false
            drawer.value.right = true
        }
        if (direction.value == 2) {
            drawer.value.top = false
            drawer.value.bottom = true
            drawer.value.right = false
        }
        if (direction.value == 1) {
            drawer.value.top = false
            drawer.value.bottom = false
            drawer.value.right = false
        }
    }

    const reSet = () => {
        cNode = store.cofNode
        if (!cNode) console.log("Error,can't find the component")
        drawer.value = cNode.props.drawer
        altitude.value = drawer.value.altitude
        setDirection(drawer.value.right, drawer.value.bottom, drawer.value.top)
    }

    watch(direction, () => setDirectionR)

    onMounted(reSet)

    return { drawer, altitude, direction, reSet, setAttr }
}