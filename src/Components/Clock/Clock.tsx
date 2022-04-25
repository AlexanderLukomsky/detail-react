import { useEffect, useState } from "react"

export const Clock = () => {
    const [date, setDate] = useState(new Date())
    const [convertAMPM, setConvertAMPM] = useState<'AM' | 'PM'>('AM')
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
    const convertHoursFormat = (time: number) => {
        return convertAMPM === 'AM' ? time : time % 12
    }
    //*
    const secondHandRotations = 0;
    const secondsRotation = date.getSeconds() * 6 + (secondHandRotations * 360);
    const minuteRotation = date.getMinutes() * 6;
    const currentHour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
    const hourRotation = currentHour * 30;
    const styles = {
        clockFace: {
            boxSizing: "border-box",
            width: "300px",
            height: "300px",
            borderRadius: "150px",
            border: "15px solid black",
            position: 'relative',
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        } as React.CSSProperties,
        hand: {
            transition: "all 100ms cubic-bezier(1, 0.25, 0.63, 1.85)",
            position: "absolute",
            transformOrigin: "50% 100%",
            backgroundColor: "black",

        } as React.CSSProperties,

    }
    const hoursStyle = {
        width: "9px",
        height: "80px",
        borderRadius: " 5px",
        transform: `translate(0, -50%) rotate(${hourRotation}deg)`,
        transition: `all ${hourRotation ? 100 : 0}ms cubic-bezier(1, 0.25, 0.63, 1.85)`,
    } as React.CSSProperties
    const secondsStyle = {
        width: "5px",
        height: "120px",
        backgroundColor: "red",
        borderRadius: "3px",
        transform: `translate(0, -50%) rotate(${secondsRotation}deg)`
    } as React.CSSProperties
    const minutesStyle = {
        width: "7px",
        height: "100px",
        borderRadius: "4px",
        transform: `translate(0, -50%) rotate(${minuteRotation}deg)`,
        transition: `all ${minuteRotation ? 100 : 0}ms cubic-bezier(1, 0.25, 0.63, 1.85)`
    } as React.CSSProperties

    return (
        <div>
            <div style={styles.clockFace} >
                <div
                    style={{ ...styles.hand, ...hoursStyle }}
                />
                <div
                    style={{ ...styles.hand, ...minutesStyle }}
                />
                <div
                    style={{ ...styles.hand, ...secondsStyle }}
                />

            </div>
            <div>
                <button onClick={() => { setConvertAMPM(convertAMPM === 'AM' ? 'PM' : 'AM') }}>Conver Time Format</button>
                {convertHoursFormat(date.getHours())}:{timeConverter(date.getMinutes())}:{timeConverter(date.getSeconds())}
            </div>
        </div>


    )
}