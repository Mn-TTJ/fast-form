import { resolveComponent, reactive } from "vue"
import DrogBox from '@/components/panel/operation/components/drogBox/DrogBox.vue'
import EditBox from '@/components/panel/operation/components/editBox/EditBox.vue'
import ComponentBox from "@/components/panel/operation/components/componentBox/componentBox.vue"

export default (slots, name) => {
    const uiRow = resolveComponent('ui-row')
    const uiCol = resolveComponent('ui-col')

    slots.set(name, () => {
        const row = reactive({
            justify: 'flex-start',
            align: 'flex-start'
        })

        const col1 = reactive({
            colCount: 12,
            colOffset: 0
        })

        const col2 = reactive({
            colCount: 12,
            colOffset: 0
        })

        return <EditBox cProps={row} cName={'grid-row'}>
            <ComponentBox cName='ui-row' cProps={row}>
                <uiRow {...row}>
                    <ComponentBox cName='ui-col' cProps={col1}>
                        <uiCol {...col1} >
                            <EditBox cProps={col1} cName={'grid-col'}>
                                <DrogBox></DrogBox>
                            </EditBox>
                        </uiCol>
                    </ComponentBox>
                    <ComponentBox cName='ui-col' cProps={col2}>
                        <uiCol {...col2}>
                            <EditBox cProps={col2} cName={'grid-col'}>
                                <DrogBox></DrogBox>
                            </EditBox>
                        </uiCol>
                    </ComponentBox>
                </uiRow>
            </ComponentBox>
        </EditBox>
    })
}