import { useEffect, useState } from "react"

export default {
    title: 'UseEffect/clock'
}
export const Clock = () => {
    const [hours, setHouts] = useState(new Date().getHours())
    const [minut, setMinut] = useState(new Date().getMinutes().toString())
    const [seconds, setSeconds] = useState(new Date().getSeconds().toString())
    const minutHandler = () => {
        const minutArr = new Date().getMinutes().toString().split('')
        if (minutArr.length === 1) {
            return `0${new Date().getMinutes()}`
        }
        return new Date().getMinutes().toString()
    }
    const secondHandler = () => {
        const secondArr = new Date().getSeconds().toString().split('')
        if (secondArr.length === 1) {
            return `0${new Date().getSeconds()}`
        }
        return new Date().getSeconds().toString()
    }
    useEffect(() => {
        console.log('hours');
        setHouts(new Date().getHours())
    }, [minut])
    useEffect(() => {
        console.log(seconds);
        setMinut(minutHandler)
        setTimeout(() => {
            setSeconds(secondHandler)

        }, 1000)
    }, [seconds])
    return (
        <div>
            {hours}:{minut}:{seconds}
        </div>
    )
}