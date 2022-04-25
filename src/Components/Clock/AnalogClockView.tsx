type PropsType = {
    date: Date
}
export const AnalogClockView = ({ date, ...props }: PropsType) => {
    const secondsRotation = ` translate(0, -50%) rotate(${date.getSeconds() * 6}deg)`
    const minuteRotation = date.getMinutes() * 6;
    const currentHour = date.getHours() % 12
    const hourRotation = currentHour * 30;
    const styles = {
        clockFace: {
            boxSizing: "border-box",
            width: "300px",
            height: "300px",
            borderRadius: "150px",
            border: "5px solid black",
            position: 'relative',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        } as React.CSSProperties,
        hand: {
            position: "absolute",
            transformOrigin: "50% 100%",
            backgroundColor: "black",

        } as React.CSSProperties,
        hoursStyle: {
            width: "7px",
            height: "85px",
            transform: `translate(0, -50%) rotate(${hourRotation}deg)`,
            transition: `all ${hourRotation ? 100 : 0}ms cubic-bezier(1, 0.25, 0.63, 1.85)`,
        } as React.CSSProperties,
        secondsStyle: {
            width: "3px",
            height: "140px",
            backgroundColor: "red",
            transform: secondsRotation
        } as React.CSSProperties,
        minutesStyle: {
            width: "5px",
            height: "120px",
            transform: `translate(0, -50%) rotate(${minuteRotation}deg)`,
            transition: `all ${minuteRotation ? 100 : 0}ms cubic-bezier(1, 0.25, 0.63, 1.85)`
        } as React.CSSProperties
    }

    return (
        <div>
            <div style={styles.clockFace} >
                <div
                    style={{ ...styles.hand, ...styles.hoursStyle }}
                />
                <div
                    style={{ ...styles.hand, ...styles.minutesStyle }}
                />
                <div
                    style={{ ...styles.hand, ...styles.secondsStyle }}
                />

            </div>
        </div>
    )
}

//*

