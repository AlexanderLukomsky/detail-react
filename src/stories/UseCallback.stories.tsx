import React, { useCallback, useMemo, useState } from "react";

export default {
    title: 'UseCallback'
}
const Book = (props: { books: string[], addBook: () => void }) => {
    console.log('Book');
    return <div>
        {props.books.map((b, i) => <div key={i}>{b}</div>)}
        <button onClick={props.addBook}>+ books</button>
    </div>
}
const BooksWrapper = React.memo(Book)

export const UseCallback = () => {
    console.log('UseCallback');
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['JS', 'CSS', 'HTML'])
    const newBooks = useMemo(() => { return books.filter(b => b.toLowerCase().indexOf("s") > -1) }, [books])
    const addBookMemo = useMemo(() =>
        () => setBooks([...books, `SCSS ${new Date().getTime()}`])
        , [books])
    const addBook = useCallback(() => {
        setBooks([...books, `SCSS ${new Date().getTime()}`])
    }, [books])
    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+++</button>
            {counter}
            <BooksWrapper books={newBooks} addBook={addBook} />
        </div>
    )
}
