import React, { useMemo } from "react"
import { useState } from "react"
import { KeyboardEvent, useEffect, useRef, } from "react"
import s from '../Components/CustomSelect/CustomSelect.module.scss'
export default {
    title: "UseMemoSelect"
}
const CS1 = React.memo(CustomSelect)
const CS2 = React.memo(CustomSelect1)
const CS3 = React.memo(CustomSelect2)
export const useMemoSelect = () => {


    const [items, setItems] = useState([{ title: 'Minsk', id: '1' }, { title: 'Grodno', id: '2' }, { title: 'Vitebsk', id: '3' }, { title: 'mgv', id: '4' }])
    const [value, setValue] = useState(items[0])
    const cs1_item = items.filter(el => el.title.toLowerCase().indexOf('m') > -1)
    const cs2_item = useMemo(() => { return items.filter(el => el.title.toLowerCase().indexOf('g') > -1) }, [items])
    const cs3_item = useMemo(() => { return items.filter(el => el.title.toLowerCase().indexOf('v') > -1) }, [items])
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <h3>counter: {counter}</h3>
            <button onClick={() => {
                let newCount = counter
                setCounter(newCount + 1)
            }}>inc</button>
            <button onClick={() => {
                setItems([...items, { title: 'mgvmgv', id: `12${new Date().getTime() + Math.random()}` }])
            }}>setItems</button>
            <div>
                <h3>CS1</h3>
                <CS1
                    items={cs1_item}
                    selectedItem={value}
                    showSelectedItem={setValue} />
            </div>
            <div>
                <h3>CS2</h3>
                <CS2
                    items={cs2_item}
                    selectedItem={value}
                    showSelectedItem={setValue} />
            </div>
            <div>
                <h3>CS3</h3>
                <CS3
                    items={cs3_item}
                    selectedItem={value}
                    showSelectedItem={setValue} />
            </div>
        </div>
    )

}
//*


export type SelectItemsType = {
    title: string
    id: string
}
type CustomSelectPropsType = {
    items: SelectItemsType[]
    showSelectedItem: (item: SelectItemsType) => void
    selectedItem: SelectItemsType
}

function CustomSelect({ items, ...props }: CustomSelectPropsType) {
    console.log('cs')
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [hoveredElement, setHoveredElement] = useState(props.selectedItem)
    const toggleList = (item: SelectItemsType) => {
        props.showSelectedItem(item)
        setCollapsed(!collapsed)
    }
    useEffect(() => {
        setHoveredElement(props.selectedItem)
    }, [props.selectedItem])
    const onKeyUpHandler = (e: KeyboardEvent<HTMLUListElement>) => {
        if (e.key === 'Escape') {
            setCollapsed(true);
            return
        }
        if (e.key === 'ArrowDown') {
            console.log('object');
            for (let i = 0; i < items.length; i++) {
                if (hoveredElement.id === items[i].id) {
                    if (i === items.length - 1) {
                        props.showSelectedItem(items[0])
                        return
                    }
                    props.showSelectedItem(items[i + 1])
                    return
                }
            }
        }
        if (e.key === 'ArrowUp') {
            console.log('object');
            for (let i = 0; i < items.length; i++) {
                if (hoveredElement.id === items[i].id) {

                    if (i === 0) {
                        props.showSelectedItem(items[items.length - 1])
                        return
                    }
                    props.showSelectedItem(items[i - 1])
                    return
                }
            }

        }
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLUListElement>) => {
        if (e.key === 'Enter') {
            props.showSelectedItem(hoveredElement)
            setCollapsed(!collapsed)
        }
    }
    const targEl = useRef<HTMLUListElement>(null)
    useEffect(() => {
        const t = targEl.current as HTMLUListElement
        t.focus()
    }, [collapsed])
    return (
        <div className={s.wrapper} >
            <div className={s.select}>
                <h3 className={s.select__title} onClick={() => {
                    setCollapsed(!collapsed)
                }}>{props.selectedItem.title}</h3>
                <ul className={s.select__list} ref={targEl} onKeyPress={(e) => onKeyPressHandler(e)} onKeyUp={onKeyUpHandler} tabIndex={0} style={{ display: collapsed ? 'none' : 'flex' }}>
                    {
                        items.map(i => <li className={s.select__item + ' ' + (hoveredElement.id === i.id ? s.selected : '')}
                            key={i.id} id={i.id}
                            onClick={() => { toggleList(i) }}
                            onMouseEnter={() => { setHoveredElement(i) }}
                        >
                            {i.title}
                        </li>)
                    }
                </ul>

            </div>
        </div>
    )
}
function CustomSelect1({ items, ...props }: CustomSelectPropsType) {
    console.log('cs1')
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [hoveredElement, setHoveredElement] = useState(props.selectedItem)
    const toggleList = (item: SelectItemsType) => {
        props.showSelectedItem(item)
        setCollapsed(!collapsed)
    }
    useEffect(() => {
        setHoveredElement(props.selectedItem)
    }, [props.selectedItem])
    const onKeyUpHandler = (e: KeyboardEvent<HTMLUListElement>) => {
        if (e.key === 'Escape') {
            setCollapsed(true);
            return
        }
        if (e.key === 'ArrowDown') {
            console.log('object');
            for (let i = 0; i < items.length; i++) {
                if (hoveredElement.id === items[i].id) {
                    if (i === items.length - 1) {
                        props.showSelectedItem(items[0])
                        return
                    }
                    props.showSelectedItem(items[i + 1])
                    return
                }
            }
        }
        if (e.key === 'ArrowUp') {
            console.log('object');
            for (let i = 0; i < items.length; i++) {
                if (hoveredElement.id === items[i].id) {

                    if (i === 0) {
                        props.showSelectedItem(items[items.length - 1])
                        return
                    }
                    props.showSelectedItem(items[i - 1])
                    return
                }
            }

        }
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLUListElement>) => {
        if (e.key === 'Enter') {
            props.showSelectedItem(hoveredElement)
            setCollapsed(!collapsed)
        }
    }
    const targEl = useRef<HTMLUListElement>(null)
    useEffect(() => {
        const t = targEl.current as HTMLUListElement
        t.focus()
    }, [collapsed])
    return (
        <div className={s.wrapper} >
            <div className={s.select}>
                <h3 className={s.select__title} onClick={() => {
                    setCollapsed(!collapsed)
                }}>{props.selectedItem.title}</h3>
                <ul className={s.select__list} ref={targEl} onKeyPress={(e) => onKeyPressHandler(e)} onKeyUp={onKeyUpHandler} tabIndex={0} style={{ display: collapsed ? 'none' : 'flex' }}>
                    {
                        items.map(i => <li className={s.select__item + ' ' + (hoveredElement.id === i.id ? s.selected : '')}
                            key={i.id} id={i.id}
                            onClick={() => { toggleList(i) }}
                            onMouseEnter={() => { setHoveredElement(i) }}
                        >
                            {i.title}
                        </li>)
                    }
                </ul>

            </div>
        </div>
    )
}
function CustomSelect2({ items, ...props }: CustomSelectPropsType) {
    console.log('cs2')
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [hoveredElement, setHoveredElement] = useState(props.selectedItem)
    const toggleList = (item: SelectItemsType) => {
        props.showSelectedItem(item)
        setCollapsed(!collapsed)
    }
    useEffect(() => {
        setHoveredElement(props.selectedItem)
    }, [props.selectedItem])
    const onKeyUpHandler = (e: KeyboardEvent<HTMLUListElement>) => {
        if (e.key === 'Escape') {
            setCollapsed(true);
            return
        }
        if (e.key === 'ArrowDown') {
            console.log('object');
            for (let i = 0; i < items.length; i++) {
                if (hoveredElement.id === items[i].id) {
                    if (i === items.length - 1) {
                        props.showSelectedItem(items[0])
                        return
                    }
                    props.showSelectedItem(items[i + 1])
                    return
                }
            }
        }
        if (e.key === 'ArrowUp') {
            console.log('object');
            for (let i = 0; i < items.length; i++) {
                if (hoveredElement.id === items[i].id) {

                    if (i === 0) {
                        props.showSelectedItem(items[items.length - 1])
                        return
                    }
                    props.showSelectedItem(items[i - 1])
                    return
                }
            }

        }
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLUListElement>) => {
        if (e.key === 'Enter') {
            props.showSelectedItem(hoveredElement)
            setCollapsed(!collapsed)
        }
    }
    const targEl = useRef<HTMLUListElement>(null)
    useEffect(() => {
        const t = targEl.current as HTMLUListElement
        t.focus()
    }, [collapsed])
    return (
        <div className={s.wrapper} >
            <div className={s.select}>
                <h3 className={s.select__title} onClick={() => {
                    setCollapsed(!collapsed)
                }}>{props.selectedItem.title}</h3>
                <ul className={s.select__list} ref={targEl} onKeyPress={(e) => onKeyPressHandler(e)} onKeyUp={onKeyUpHandler} tabIndex={0} style={{ display: collapsed ? 'none' : 'flex' }}>
                    {
                        items.map(i => <li className={s.select__item + ' ' + (hoveredElement.id === i.id ? s.selected : '')}
                            key={i.id} id={i.id}
                            onClick={() => { toggleList(i) }}
                            onMouseEnter={() => { setHoveredElement(i) }}
                        >
                            {i.title}
                        </li>)
                    }
                </ul>

            </div>
        </div>
    )
}
