import { resolveComponent, reactive } from "vue"
import EditBox from '@/components/panel/operation/components/editBox/EditBox.vue'
import ComponentBox from "@/components/panel/operation/components/componentBox/componentBox.vue"

export default (slots, name) => {
    const uiTable = resolveComponent('ui-table')
    const uiTColumn = resolveComponent('ui-table-column')

    slots.set(name, () => {

        const data = reactive([
            {
                aa: {
                    label: 'aa',
                },
                bb: {
                    label: 'bb'
                },
                cc: {
                    label: 'cc'
                }
            },
            {
                aa: {
                    label: 'aa'
                },
                bb: {
                    label: 'bb',
                },
                cc: {
                    label: 'cc',
                },
                state: 2
            }
        ])

        // const table=reactive({

        // })

        const filter = (nodeSet, prop, slot = 'default') => {
            for (let node of nodeSet[slot]) {
                if (node.props.prop == prop) return false
            }
            return true
        }

        return <EditBox cName='table'>
            <ComponentBox cName='ui-table'>
                <uiTable data={data}>
                    {Object.keys(data[0]).map((key) => {
                        return <ComponentBox cName='ui-table-column' filter={filter} cProps={{ prop: key, label: key }}>
                            <uiTColumn prop={key} label={key}></uiTColumn>
                        </ComponentBox>
                    })}
                </uiTable>
            </ComponentBox>
        </EditBox>
    })
}