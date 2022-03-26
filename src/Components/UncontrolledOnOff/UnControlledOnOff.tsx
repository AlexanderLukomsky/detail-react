import { useState } from "react";
export type PropsType = {
    defaultMode: boolean
}
export const UnControlledOnOff = (props: PropsType) => {
    const [on, setOn] = useState<boolean>(props.defaultMode);
    const switchOn = () => {
        setOn(true)
    }
    const switchOff = () => {
        setOn(false)
    }
    const onStyle = {
        backgroundColor: on ? 'green' : 'white',
        width: '150px', height: '45px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '5px', border: '1px solid black'
    }
    const offStyle = { ...onStyle, backgroundColor: !on ? 'red' : 'white' }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div onClick={switchOn} style={onStyle} >
                On
            </div>
            <div onClick={switchOff} style={offStyle}>
                Off
            </div>
            <div className="OnOff__circle" style={{ backgroundColor: on ? 'green' : 'red' }}>
            </div>
        </div>
    )
}