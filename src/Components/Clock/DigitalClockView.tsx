import { useState } from "react"

type PropsType = {
    date: Date
}
export const DigitalClockView = ({ date, ...props }: PropsType) => {
    const [convertAMPM, setConvertAMPM] = useState<'AM' | 'PM'>('AM')
    const convertHoursFormat = (time: number) => convertAMPM === 'AM' ? time : time % 12
    const MinutesAndSecondsFormatConvert = (time: number) => time < 10 ? `0${time}` : time
    return (
        <div>
            <div>
                <span style={{ paddingRight: "15px" }}>
                    {convertHoursFormat(date.getHours())}:
                    {MinutesAndSecondsFormatConvert(date.getMinutes())}:
                    {MinutesAndSecondsFormatConvert(date.getSeconds())}
                </span>
                <button onClick={() => { setConvertAMPM(convertAMPM === 'AM' ? 'PM' : 'AM') }}>Convert time format</button>
            </div>
            <br /><br /><br />
        </div>
    )
}
