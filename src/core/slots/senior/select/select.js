import { resolveComponent, reactive, ref } from "vue"
import DrogBox from '@/components/panel/operation/components/drogBox/DrogBox.vue'
import EditBox from '@/components/panel/operation/components/editBox/EditBox.vue'
import ComponentBox from "@/components/panel/operation/components/componentBox/componentBox.vue"

export default (slots, name) => {
    const uiSelect = resolveComponent('ui-select')
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
            select: {
                name: '',
                disabled: false,
                dataSet: [{ value: '标签1', hasChild: false, children: [] }, { value: '标签2', hasChild: false, children: [] }, { value: '标签3', hasChild: true, children: [{ value: '标签4', hasChild: false, children: [] }, { value: '标签5', hasChild: false, children: [] }] }],
                multiple: true,
                lazy: false,
                callBack: null,
                class: []
            }
        })

        const value = ref(null)

        return <EditBox cProps={cProps.box} cName={'box'}>
            <ComponentBox cName='ui-box' cProps={cProps.box}>
                <uiBox {...cProps.box}>
                    <DrogBox disabled>
                        <EditBox cProps={cProps.select} cName={'select'}>
                            <ComponentBox cName='ui-select' cProps={cProps.select}>
                                <uiSelect v-model={value.value}  {...cProps.select} />
                            </ComponentBox>
                        </EditBox>
                    </DrogBox>
                </uiBox>
            </ComponentBox>
        </EditBox>
    })
}