import { useEffect, useState } from "react";
export default {
    title: 'UseEffect/windowKeyPress'
}
export const KeyTrackerExample = () => {
    const [text, setText] = useState('')

    useEffect(() => {
        const handler = (e: any) => {
            console.log(e);
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler)

        return () => {
            console.log('remove');
            window.removeEventListener('keypress', handler)
        }
    }, [text])
    return (
        <div>
            <div>
                {text}
            </div>
        </div>

    )
}