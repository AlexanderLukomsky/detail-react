import { ChangeEvent, FormEvent, useState } from "react"

export default {
    title: 'Controlled Select'
}
export const ControlledSelect = () => {
    const [value, setValue] = useState<string>('')
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => { setValue(e.currentTarget.value) }
    return <>
        <select value={value} onChange={onChange}>
            <option value=''>None</option>
            <option value="1">First</option>
            <option value="2">Second</option>
            <option value="3">Third</option>
        </select>
    </>
}
