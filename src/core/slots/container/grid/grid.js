import { resolveComponent, reactive } from "vue"
import DrogBox from '@/components/panel/operation/components/drogBox/DrogBox.vue'
import EditBox from '@/components/panel/operation/components/editBox/EditBox.vue'

export default (slots, name) => {
    const uiRow = resolveComponent('ui-row')
    const uiCol = resolveComponent('ui-col')

    slots.set(name, (pId) => {
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

        return <EditBox cNode={uiRow} pId={pId} cProps={row}>
            <uiRow {...row}>
                <uiCol {...col1} >
                    <EditBox cNode={uiCol} pointer={1} cProps={col1}>
                        <DrogBox></DrogBox>
                    </EditBox>
                </uiCol>
                <uiCol {...col2}>
                    <EditBox cNode={uiCol} pointer={1} cProps={col2}>
                        <DrogBox></DrogBox>
                    </EditBox>
                </uiCol>
            </uiRow>
        </EditBox>
    })
}