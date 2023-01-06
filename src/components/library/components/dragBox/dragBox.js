import { setSlot } from "../../../../core/slots"

export default (props) => {
    setSlot(props.name)

    const dataSet = (event) => {
        event.dataTransfer.setData('drag', props.name)
    }

    return { dataSet }
}