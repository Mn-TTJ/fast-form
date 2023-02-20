const mValues = new Map([
    ['ui-input', {
        name: 'input',
        default: '\'\''
    }],
    ['ui-textarea', {
        name: 'textarea',
        default: '\'\''
    }],
    ['ui-counter', {
        name: 'counter',
        default: '0'
    }],
    ['ui-radio', {
        name: 'radio',
        default: '\'\''
    }],
    ['ui-checkbox', {
        name: 'checkbox',
        default: '[]'
    }],
    ['ui-timepicker', {
        name: 'timepicker',
        default: '\'00:00:00\''
    }],
    ['ui-timeRange', {
        name: 'timeRange',
        default: '[\'00:00:00\',\'00:00:00\']'
    }],
    ['ui-dateRange', {
        name: 'dateRange',
        default: '[\'2022-1-1\',\'2022-1-1\']'
    }],
    ['ui-datepicker', {
        name: 'datepicker',
        default: '\'2022-1-1\''
    }],
    ['ui-switch', {
        name: 'uSwitch',
        default: 'false'
    }],
    ['ui-colorpicker', {
        name: 'colorpicker',
        default: '#000000'
    }],
    ['ui-autocompelete', {
        name: 'autocompelete',
        default: '\'\''
    }],
    ['ui-select', {
        name: 'select',
        default: '\'\''
    }],
])

export const getMValue = (name) => {
    if (!mValues.has(name)) return null
    return (mValues.get(name))
} 