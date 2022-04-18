import { useState } from "react"

export default {
    title: 'UseState'
}

export const Example = () => {
    const generateDate = () => {
        console.log('generateDate');
        return 1
    }
    console.log('Example');
    const [counter, setCounter] = useState(generateDate)
    //  const [counter2, setCounter2] = useState(() => generateDate())
    const counterChanger = (count: number) => count + 1
    return (
        <div>
            <div>
                {counter}
            </div>
            <button onClick={() => setCounter(counterChanger)}>inc</button>
        </div>
    )
}