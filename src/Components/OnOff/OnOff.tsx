type OnOffType = {
    on: boolean
    setOn: (on: boolean) => void
}
export const OnOff = ({ on, setOn }: OnOffType) => {
    const onStyle = {
        backgroundColor: on ? 'green' : 'white',
        width: '150px', height: '45px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '5px', border: '1px solid black'
    }
    const offStyle = { ...onStyle, backgroundColor: !on ? 'red' : 'white' }
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <div onClick={() => { setOn(true) }} style={onStyle} >
                On
            </div>
            <div onClick={() => { setOn(false) }} style={offStyle}>
                Off
            </div>
            <div className="OnOff__circle" style={{ backgroundColor: on ? 'green' : 'red' }}>
            </div>
        </div>
    )
}