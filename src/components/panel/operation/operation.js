import { addComponent } from "@/core/tree/drag"

export default () => {
    const dropEvent = (event) => {
        const root = event.target
        const target = document.createElement('div')
        addComponent(target, { slot: () => <p>hello world</p> })
        root.appendChild(target)
    }

    return { dropEvent }
}