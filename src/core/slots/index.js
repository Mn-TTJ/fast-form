import grid from './Grid/grid'

const slots = new Map()

const allSlots = [['grid', grid]]

const slotsBuilder = new Map(allSlots)

const setSlot = (name) => {
    const builder = slotsBuilder.get(name)
    if (builder) builder(slots, name)
}

export { slots, setSlot }