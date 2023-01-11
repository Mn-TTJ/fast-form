import grid from './container/grid/grid'
import input from './base/input/input'

const slots = new Map()

const allSlots = [['grid', grid], ['input', input]]

const slotsBuilder = new Map(allSlots)

const setSlot = (name) => {
    const builder = slotsBuilder.get(name)
    if (builder) builder(slots, name)
}

export { slots, setSlot }