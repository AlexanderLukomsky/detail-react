import { ChangeEvent, useRef, useState } from "react"

export default {
    title: 'UncontrolledInput',
}

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState<string>('')
    return <>
        <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => { setValue(e.currentTarget.value) }} />
        <br />  <br />
        <div>
            {value}
        </div>
    </>
}
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)
    return <>
        <input ref={inputRef} type="text" />
        <button onClick={() => {
            const el = inputRef.current as HTMLInputElement
            setValue(el.value)
        }}>GET VALUE</button>
        <br />  <br />
        <div >
            {value}
        </div>
    </>

}