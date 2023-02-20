import { resolveComponent, reactive } from "vue"
import EditBox from '@/components/panel/operation/components/editBox/EditBox.vue'
import ComponentBox from "@/components/panel/operation/components/componentBox/componentBox.vue"
import { treeMethod } from "@/core/tree/tree"

export default (slots, name) => {
    const uiTable = resolveComponent('ui-table')
    const uiTColumn = resolveComponent('ui-table-column')

    slots.set(name, (cProps) => {

        if (!cProps) cProps = reactive({
            table: {
                border: true,
                height: 'auto',
                class: [],
                data: [
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
                    }
                ]
            },
            columns: [{ prop: 'aa', label: 'aa', width: 'auto' }, { prop: 'bb', label: 'bb', width: 'auto' }, { prop: 'cc', label: 'cc', width: 'auto' }]
        })

        const filter = (nodeSet, prop, slot = 'default') => {
            for (let node of nodeSet[slot]) {
                if (node.props.prop == prop) return false
            }
            return true
        }

        const reSort = (node) => {
            const sortArr = cProps.columns.map((column) => {
                return column.prop
            })
            treeMethod.reSortChild(node.slots.default, 'prop', sortArr)
        }

        return <EditBox cName='table' cProps={cProps}>
            <ComponentBox cName='ui-table' cProps={cProps.table} reSort={reSort} key={cProps.key}>
                <uiTable {...cProps.table}>
                    {cProps.columns.map((column) => {
                        return <ComponentBox cName='ui-table-column' filter={filter} cProps={column} key={column.prop} disEidt>
                            <uiTColumn {...column}></uiTColumn>
                        </ComponentBox>
                    })}
                </uiTable>
            </ComponentBox>
        </EditBox>
    })
}