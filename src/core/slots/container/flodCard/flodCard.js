import { resolveComponent, reactive } from "vue"
import DrogBox from '@/components/panel/operation/components/drogBox/DrogBox.vue'
import EditBox from '@/components/panel/operation/components/editBox/EditBox.vue'
import ComponentBox from "@/components/panel/operation/components/componentBox/componentBox.vue"

export default (slots, name) => {
    const uiFlodCard = resolveComponent('ui-flod-card')

    slots.set(name, (cProps) => {
        if (!cProps) cProps = reactive({
            card: {
                unActive: false,
                radius: '0.2rem',
                title: '标题',
                tColor: '#606266',
                hColor: '#ffffff',
                bColor: '#ffffff',
                left: false,
                shadow: 'auto'
            }
        })

        return <EditBox cProps={cProps} cName={'card'}>
            <ComponentBox cName='ui-flod-card' cProps={cProps.card}>
                <uiFlodCard {...cProps.card}>
                    <DrogBox></DrogBox>
                </uiFlodCard>
            </ComponentBox>
        </EditBox>
    })
}