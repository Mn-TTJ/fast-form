import container from './container'
import base from './base'

const slots = new Map()

const allSlots = [...container, ...base]

const slotsBuilder = new Map(allSlots)

const setSlot = (name) => {
    const builder = slotsBuilder.get(name)
    if (builder) builder(slots, name)
}

export { slots, setSlot }