
import { keyboard } from "@testing-library/user-event/dist/keyboard"
import { useState, KeyboardEvent, useEffect, useRef, } from "react"
import s from './CustomSelect.module.scss'
export type SelectItemsType = {
    title: string
    id: string
}
type CustomSelectPropsType = {
    items: SelectItemsType[]
    showSelectedItem: (item: SelectItemsType) => void
    selectedItem: SelectItemsType
}
export const CustomSelect = ({ items, ...props }: CustomSelectPropsType) => {
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