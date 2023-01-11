import { resolveComponent } from "vue"
import DrogBox from '@/components/panel/operation/components/drogBox/DrogBox.vue'
import EditBox from '@/components/panel/operation/components/editBox/EditBox.vue'

export default (slots, name) => {
    const uiRow = resolveComponent('ui-row')
    const uiCol = resolveComponent('ui-col')

    slots.set(name, (pId) => {
        return <EditBox cNode={uiRow} pId={pId}>
            <uiRow>
                <uiCol colCount={12}>
                    <EditBox cNode={uiCol} pointer={1}>
                        <DrogBox></DrogBox>
                    </EditBox>
                </uiCol>
                <uiCol colCount={12}>
                    <EditBox cNode={uiCol} pointer={1}>
                        <DrogBox></DrogBox>
                    </EditBox>
                </uiCol>
            </uiRow>
        </EditBox>
    }
    )
}