import React from "react";
import { useState } from "react"

export default {
    title: 'React Memo'
}

const NewMessagesCount = (props: { count: number }) => {
    console.log('count');
    return <h4>{props.count}</h4>
}
const Users = (props: { users: string[] }) => {
    console.log('users');
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
const UsersWrapper = React.memo(Users)
const NewMessagesCountWrapper = React.memo(NewMessagesCount)
export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Alex', 'Jora', 'Roma', 'Petya', 'Egor'])
    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+++</button>
            <button onClick={() => { setUsers([`New user: ${new Date().getTime()}`, ...users]) }}>set users</button>
            <NewMessagesCountWrapper count={counter} />
            <UsersWrapper users={users} />
        </div>
    )
}