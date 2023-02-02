import grid from './container/grid/grid'
import tabs from './container/tabs/tabs'
import table from './container/table/table'
import input from './base/input/input'
import textarea from './base/textarea/textarea'

const slots = new Map()

const allSlots = [['grid', grid], ['input', input], ['tabs', tabs], ['table', table], ['textarea', textarea]]

const slotsBuilder = new Map(allSlots)

const setSlot = (name) => {
    const builder = slotsBuilder.get(name)
    if (builder) builder(slots, name)
}

export { slots, setSlot }