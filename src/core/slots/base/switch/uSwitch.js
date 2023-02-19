import { resolveComponent, reactive, ref } from "vue"
import DrogBox from '@/components/panel/operation/components/drogBox/DrogBox.vue'
import EditBox from '@/components/panel/operation/components/editBox/EditBox.vue'
import ComponentBox from "@/components/panel/operation/components/componentBox/componentBox.vue"

export default (slots, name) => {
    const uiSwitch = resolveComponent('ui-switch')
    const uiBox = resolveComponent('ui-box')

    slots.set(name, (cProps) => {
        if (!cProps) cProps = reactive({
            box: {
                flex: false,
                width: '100%',
                height: 'auto',
                color: '#ffffff',
                padding: '0.1rem',
                margin: '0rem',
                class: []
            },
            switch: {
                name: '',
                disabled: false,
                sm: false,
                lg: false,
                trackColor: '#dcdfe6',
                sliderColor: '#ffffff',
                onColor: '#409eff',
                class: []
            }
        })

        const value = ref(false)

        return <EditBox cProps={cProps.box} cName={'box'}>
            <ComponentBox cName='ui-box' cProps={cProps.box}>
                <uiBox {...cProps.box}>
                    <DrogBox disabled>
                        <EditBox cProps={cProps.switch} cName={'switch'}>
                            <ComponentBox cName='ui-switch' cProps={cProps.switch}>
                                <uiSwitch v-model={value.value}  {...cProps.switch} />
                            </ComponentBox>
                        </EditBox>
                    </DrogBox>
                </uiBox>
            </ComponentBox>
        </EditBox>
    })
}