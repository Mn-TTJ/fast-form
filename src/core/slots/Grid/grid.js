import { resolveComponent } from "vue"

export default (slots, name) => {
    const uiRow = resolveComponent('ui-row')
    const uiCol = resolveComponent('ui-col')

    console.log(typeof uiRow)
    console.log(typeof uiCol)

    slots.set(name, () => {
        return <uiRow>
            <uiCol>hello</uiCol>
            <uiCol>hello</uiCol>
        </uiRow>
    })
}