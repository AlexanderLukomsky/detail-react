import { useState } from "react"
import { CustomSelect } from "../../Components/CustomSelect/CustomSelect"

export default {
    title: 'Custom Select',
}
export const Select = () => {
    const items = [{ title: 'React', id: '1' }, { title: 'JS', id: '2' }, { title: 'TS', id: '3' }, { title: 'HTML', id: '4' }]
    const [value, setValue] = useState(items[0])
    return <CustomSelect
        items={items}
        selectedItem={value}
        showSelectedItem={setValue} />
}