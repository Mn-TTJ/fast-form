import { resolveComponent, reactive } from "vue"
import DrogBox from '@/components/panel/operation/components/drogBox/DrogBox.vue'
import EditBox from '@/components/panel/operation/components/editBox/EditBox.vue'
import ComponentBox from "@/components/panel/operation/components/componentBox/componentBox.vue"

export default (slots, name) => {
    const uiRow = resolveComponent('ui-row')
    const uiCol = resolveComponent('ui-col')

    slots.set(name, (cProps) => {
        if (!cProps) cProps = reactive({
            row: reactive({
                justify: 'flex-start',
                align: 'flex-start'
            }), col1: reactive({
                colCount: 12,
                colOffset: 0
            }), col2: reactive({
                colCount: 12,
                colOffset: 0
            })
        })

        return <EditBox cProps={cProps.row} cName={'grid-row'}>
            <ComponentBox cName='ui-row' cProps={cProps.row}>
                <uiRow {...cProps.row}>
                    <ComponentBox cName='ui-col' cProps={cProps.col1} reverse>
                        <uiCol {...cProps.col1} >
                            <EditBox cProps={cProps.col1} cName={'grid-col'} reverse>
                                <DrogBox></DrogBox>
                            </EditBox>
                        </uiCol>
                    </ComponentBox>
                    <ComponentBox cName='ui-col' cProps={cProps.col2} reverse>
                        <uiCol {...cProps.col2}>
                            <EditBox cProps={cProps.col2} cName={'grid-col'} reverse>
                                <DrogBox></DrogBox>
                            </EditBox>
                        </uiCol>
                    </ComponentBox>
                </uiRow>
            </ComponentBox>
        </EditBox>
    })
}