import { useEffect, useState, KeyboardEvent } from "react";

export default {
    title: 'UseEffect/Example'
}
export const Example1 = () => {
    const [fake, setFake] = useState(0)
    const [counter, setCounter] = useState(0)
    useEffect(() => {
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
    const [fake, setFake] = useState(0)
    const [counter, setCounter] = useState(0)
    // useEffect(() => {
    //     console.log('useEffect');
    //     document.title = counter.toString()
    // }, [counter])
    useEffect(() => {
        setTimeout(() => {
            document.title = counter.toString()
        }, 1000)
    }, [counter])
    useEffect(() => {
        const id = setInterval(() => {
            console.log('tick');
            setFake(state => state + 1)
        }, 1000)
        return () => {
            clearInterval(id)
        }
    }, [])
    return (
        <div>
            <div>{counter} <button onClick={() => setCounter(counter + 1)}>counter + </button></div>
            <div>{fake} <button onClick={() => setFake(fake + 1)}>fake +</button></div>

        </div>
    )
}
export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(0)
    console.log('SetTimeoutExample');
    useEffect(() => {
        console.log(`useEffect ${counter}`);
        return () => {
            console.log(`clear effect ${counter}`);
        }
    }, [counter])
    const increase = (number: number) => number + 1
    return (
        <div>
            counter: {counter}
            <div>
                <button onClick={() => setCounter(increase)}>+</button>
            </div>
        </div>
    )
}


