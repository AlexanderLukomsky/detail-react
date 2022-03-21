import { useState } from "react";
type UnControlledOnOffType = {
    switchOn: (onOff: boolean) => void
}
export const UnControlledOnOff = (props: UnControlledOnOffType) => {
    const [on, setOn] = useState<boolean>(false);
    const switchOn = () => {
        setOn(true)
        props.switchOn(true)
    }
    const switchOff = () => {
        setOn(false)
        props.switchOn(false)
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