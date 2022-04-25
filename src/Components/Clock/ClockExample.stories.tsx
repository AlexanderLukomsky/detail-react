import { useState } from "react"
import { Clock } from "./Clock"
export default {
    title: 'UseEffect/Clock'
}
export const AnalogOrDigitalClock = () => {
    const [mode, setMode] = useState<'digital' | 'analog'>('digital')
    return (
        <div>
            <Clock setClockMode={setMode} mode={mode} />
        </div>
    )
}