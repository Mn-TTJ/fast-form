import container from './container'
import base from './base'
import senior from './senior'

const slots = new Map()

const allSlots = [...container, ...base, ...senior]

const slotsBuilder = new Map(allSlots)

const setSlot = (name) => {
    const builder = slotsBuilder.get(name)
    if (builder) builder(slots, name)
}

export { slots, setSlot }