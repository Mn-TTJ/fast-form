import { resolveComponent, reactive, ref } from "vue"
import DrogBox from '@/components/panel/operation/components/drogBox/DrogBox.vue'
import EditBox from '@/components/panel/operation/components/editBox/EditBox.vue'
import ComponentBox from "@/components/panel/operation/components/componentBox/componentBox.vue"

export default (slots, name) => {
    const uiCounter = resolveComponent('ui-counter')
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
            counter: {
                name: '',
                disabled: false,
                skip: 1,
                sm: false,
                lg: false,
                class: []
            }
        })

        const value = ref(1)

        return <EditBox cProps={cProps.box} cName={'box'}>
            <ComponentBox cName='ui-box' cProps={cProps.box}>
                <uiBox {...cProps.box}>
                    <DrogBox disabled>
                        <EditBox cProps={cProps.counter} cName={'counter'}>
                            <ComponentBox cName='ui-counter' cProps={cProps.counter}>
                                <uiCounter v-model={value.value} {...cProps.counter} />
                            </ComponentBox>
                        </EditBox>
                    </DrogBox>
                </uiBox>
            </ComponentBox>
        </EditBox>
    })
}