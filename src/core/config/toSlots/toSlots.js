const Slots = new Map([
    ['ui-row', 'grid'],
    ['ui-box', 'box'],
    ['ui-drawr', 'drawer'],
    ['ui-edit-dialog', 'dialog'],
    ['ui-flod-card', 'card'],
    ['ui-table', 'table'],
    ['ui-tabs', 'tabs'],
    ['ui-button', 'button'],
    ['ui-checkbox', 'checkbox'],
    ['ui-code', 'code'],
    ['ui-colorpicker', 'colorpicker'],
    ['ui-counter', 'counter'],
    ['ui-datepicker', 'datepicker'],
    ['ui-dateRange', 'dateRange'],
    ['ui-input', 'input'],
    ['ui-line', 'line'],
    ['ui-radio', 'radio'],
    ['ui-switch', 'switch'],
    ['ui-text', 'text'],
    ['ui-textarea', 'textarea'],
    ['ui-timeRange', 'timeRange'],
    ['ui-timepicker', 'timepicker'],
    ['ui-autocompelete', 'autocompelete'],
    ['ui-select', 'select'],
    ['ui-tips', 'tips'],
    ['ui-upload', 'upload']
])

const Form = new Set([
    'button',
    'checkbox',
    'code',
    'colorpicker',
    'counter',
    'datepicker',
    'dateRange',
    'input',
    'radio',
    'switch',
    'text',
    'textarea',
    'timeRange',
    'timepicker',
    'autocompelete',
    'select'])

export const toSlot = (name) => Slots.get(name)

export const isForm = (slot) => Form.has(slot)

export const toSlots = (vNodes) => {
    const renderSlots = new Array()
    vNodes.forEach(element => {
        let slot = Slots.get(element.vNode)
        let cProps = {}
        let children = []
        if (slot == 'grid') {
            const col1 = element.slots.default[0]
            const col2 = element.slots.default[1]
            cProps.row = element.props
            cProps.col1 = col1.props
            cProps.col2 = col2.props
            children.push(toSlots(col1.slots.default))
            children.push(toSlots(col2.slots.default))
        } else if (slot == 'tabs') {
            cProps.tabs = element.props
            cProps.panels = new Array()
            element.slots.default.forEach((e) => {
                cProps.panels.push(Object.assign(e.props, { cName: 'ui-tab-panel' }))
                children.push(toSlots(e.slots.default))
            })
        }
        else if (slot == 'box') {
            if (element.slots.default.length == 1) {
                const vNode = Slots.get(element.slots.default[0].vNode)
                if (Form.has(vNode)) {
                    slot = vNode
                    cProps.box = element.props
                    cProps[vNode] = element.slots.default[0].props
                    children = (toSlots(element.slots.default[0].slots.default))
                } else {
                    cProps[slot] = element.props
                    children = toSlots(element.slots.default)
                }
            } else {
                cProps[slot] = element.props
                children = toSlots(element.slots.default)
            }
        }
        else if (slot == 'table') {
            cProps.table = element.props
            cProps.columns = element.slots.default.map(x => x.props)
        } else {
            cProps[slot] = element.props
            children = toSlots(element.slots.default)
        }
        renderSlots.push({ slot, cProps, children })
    });
    return renderSlots
}