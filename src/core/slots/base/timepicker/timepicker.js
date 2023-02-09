import { resolveComponent, reactive } from "vue"
import DrogBox from '@/components/panel/operation/components/drogBox/DrogBox.vue'
import EditBox from '@/components/panel/operation/components/editBox/EditBox.vue'
import ComponentBox from "@/components/panel/operation/components/componentBox/componentBox.vue"

export default (slots, name) => {
    const uiTimepicker = resolveComponent('ui-timepicker')
    const uiBox = resolveComponent('ui-box')

    slots.set(name, (cProps) => {
        if (!cProps) cProps = reactive({
            box: {
                flex: false,
                width: '100%',
                height: 'auto',
                color: '#ffffff',
                padding: '0.1rem',
                margin: '0rem'
            },
            timepicker: {
                name: '',
                disabled: false,
                min: '00:00:00',
                max: '23:59:59'
            }
        })

        return <EditBox cProps={cProps.box} cName={'box'}>
            <ComponentBox cName='ui-box' cProps={cProps.box}>
                <uiBox {...cProps.box}>
                    <DrogBox disabled>
                        <EditBox cProps={cProps.timepicker} cName={'timepicker'}>
                            <ComponentBox cName='ui-timepicker' cProps={cProps.timepicker}>
                                <uiTimepicker  {...cProps.timepicker} />
                            </ComponentBox>
                        </EditBox>
                    </DrogBox>
                </uiBox>
            </ComponentBox>
        </EditBox>
    })
}