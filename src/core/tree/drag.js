import { ref, h, render } from "vue";
import EidtBox from '@/components/panel/operation/components/editBox/EditBox.vue'

export const dragSign = ref(false)

export const setDragSign = (sign) => dragSign.value = sign

export const addComponent = (target, { props, slot }) => {
    if (!props) props = []
    render(h(EidtBox, {
        ...props
    }, slot), target)
}