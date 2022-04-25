import { useEffect, useState } from "react"
import { AnalogClockView } from "./AnalogClockView"
import { DigitalClockView } from "./DigitalClockView"
type PropsType = {
    setClockMode: (mode: 'digital' | 'analog') => void
    mode: 'digital' | 'analog'
}


export const Clock = (props: PropsType) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const id = setInterval(() => {
            console.log('tick');
            setDate(new Date())
        }, 1000)

        return () => {
            console.log('clear interval');
            clearInterval(id)
        }
    }, [])
    switch (props.mode) {
        case 'analog':
            return (
                <div>
                    <button onClick={() => { props.setClockMode('digital') }}>digital</button>
                    <AnalogClockView date={date} />
                </div>
            )
        case 'digital':
        default:
            return (
                <div>
                    <button onClick={() => { props.setClockMode('analog') }}>analog</button>
                    <DigitalClockView date={date} />
                </div>
            )
    }
}
