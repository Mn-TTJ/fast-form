import { addComponent } from "@/core/tree/drag"
import { slots } from '@/core/slots/index.js'

export default () => {
    const dropEvent = (event) => {
        const root = event.target
        const name = event.dataTransfer.getData('drag')
        const slot = slots.get(name)
        const target = document.createElement('div')
        addComponent(target, { slot })
        root.appendChild(target)
    }

    return { dropEvent }
}