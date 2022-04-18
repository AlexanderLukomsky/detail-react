import { useEffect, useState } from "react";

export default {
    title: 'UseEffect/Example'
}
export const Example1 = () => {
    console.log('Example 1');
    const [fake, setFake] = useState(0)
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        console.log('useEffect');
        document.title = counter.toString()
    }, [counter])
    return (
        <div>
            <div>{counter} <button onClick={() => setCounter(counter + 1)}>inc</button></div>
            <div>{fake}  <button onClick={() => setFake(fake + 1)}>inc</button></div>
        </div>
    )
}
export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample');
    const [fake, setFake] = useState(0)
    const [counter, setCounter] = useState(0)
    // useEffect(() => {
    //     console.log('useEffect');
    //     document.title = counter.toString()
    // }, [counter])
    useEffect(() => {
        setTimeout(() => {
            console.log('useEffect');
            document.title = counter.toString()
        }, 1000)
    }, [counter])
    useEffect(() => {
        setInterval(() => {
            setFake(state => state + 1)
        }, 1000)
    }, [])
    return (
        <div>
            <div>{counter} <button onClick={() => setCounter(counter + 1)}>counter + </button></div>
            <div>{fake} <button onClick={() => setFake(fake + 1)}>fake +</button></div>

        </div>
    )
}