import { useEffect, useState } from "react"

export const Clock = () => {
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
    const timeConverter = (time: number) => time < 10 ? `0${time}` : time
    return (
        <div>
            {timeConverter(date.getHours())}:{timeConverter(date.getMinutes())}:{timeConverter(date.getSeconds())}
        </div>
    )
}