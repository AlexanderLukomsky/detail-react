import { useMemo } from "@storybook/addons"
import React from "react"
import { useState } from "react"

export default {
    title: "UseMemo"
}
export const ExampleDifficultCounting = () => {
    const [a, setA] = useState<number>(1)
    const [b, setB] = useState<number>(5)
    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        const tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 1000000) {
                fake++
                const fakeValue = Math.random()
            }
            resultA = resultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }
    return (
        <>
            <input type="text" value={a} onChange={(e) => { setA(Number(e.currentTarget.value)) }} />
            <input type="text" value={b} onChange={(e) => { setB(+e.currentTarget.value) }} />

            <div>
                result: {resultA}
            </div>
            <div>
                result: {resultB}
            </div>
        </>
    )
}



const Users = (props: { users: string[] }) => {
    console.log('users');
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
const UsersWrapper = React.memo(Users)

export const HelpsForReactMemo = () => {
    console.log('HelpsForReactMemo');
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Alex', 'Jora', 'Roma', 'Petya', 'Egor'])
    const newArr = useMemo(() => { return users.filter(u => u.toLowerCase().indexOf("o") > -1) }, [users])

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+++</button>
            {counter}
            <UsersWrapper users={newArr} />
            {counter > 2 &&
                <button onClick={() => {
                    setUsers([...users, `Oleg ${new Date().getTime()}`])
                }}>+ user</button>}
        </div>
    )
}