import { ChangeEvent, useState } from "react"
export default {
    title: 'Controlled Input and Checkbox',
}
export const ControlledInput = () => {
    const [value, setValue] = useState<string>('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return <>
        <input type="text" onChange={onChangeHandler} value={value} />
        <br /><br />
        <div>
            {value}
        </div>
    </>

}
export const ControlledCheckbox = () => {
    const [value, setValue] = useState<boolean>(true)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }
    return <>
        <input type="checkbox" onChange={onChangeHandler} checked={value} />
        <br /><br />
        <div>
            {`${value}`}
        </div>
    </>

}
