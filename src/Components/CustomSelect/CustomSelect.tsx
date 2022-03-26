import { useState } from "react"
import s from './CustomSelect.module.scss'
export type SelectItemsType = {
    title: string
    id: string
}
type CustomSelectPropsType = {
    items: SelectItemsType[]
    changeSetSelectItems: (id: string) => void
    selectValue: string
}
export const CustomSelect = ({ items, ...props }: CustomSelectPropsType) => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const changeSetSelectItems = (id: string) => {
        props.changeSetSelectItems(id)
        setCollapsed(true)
    }
    return (
        <div className={s.wrapper}>
            <div className={s.select}>
                <h3 className={s.select__title} onClick={() => { setCollapsed(!collapsed) }}>{props.selectValue}</h3>
                {!collapsed && <ul className={s.select__list}>
                    {
                        items.map(i => <li className={s.select__item}
                            key={i.id} id={i.id}
                            //   onMouseEnter={() => { console.log(i.id); }}
                            onClick={() => { changeSetSelectItems(i.id) }}
                        >
                            {i.title}
                        </li>)
                    }
                </ul>}
            </div>
        </div>
    )
}