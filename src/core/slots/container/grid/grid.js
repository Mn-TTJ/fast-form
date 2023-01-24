import { resolveComponent, reactive } from "vue"
import DrogBox from '@/components/panel/operation/components/drogBox/DrogBox.vue'
import EditBox from '@/components/panel/operation/components/editBox/EditBox.vue'

export default (slots, name) => {
    const uiRow = resolveComponent('ui-row')
    const uiCol = resolveComponent('ui-col')

    slots.set(name, (pId) => {
        const children1 = reactive({
            colCount: 12
        })

        const children2 = reactive({
            colCount: 12
        })

        return <EditBox cNode={uiRow} pId={pId}>
            <uiRow>
                <uiCol colCount={children1.colCount} >
                    <EditBox cNode={uiCol} pointer={1} cProps={children1}>
                        <DrogBox></DrogBox>
                    </EditBox>
                </uiCol>
                <uiCol colCount={children2.colCount}>
                    <EditBox cNode={uiCol} pointer={1} cProps={children2}>
                        <DrogBox></DrogBox>
                    </EditBox>
                </uiCol>
            </uiRow>
        </EditBox>
    }
    )
}