import { UsersType } from "../../App"
import { SelectItemsType } from "../CustomSelect/CustomSelect"
import { AccordionBody } from "./AccordionBody"
import { AccordionTitle } from "./AccordionTitle"
export type AccordionType = {
    title: string
    collapsed: boolean
    onChange: () => void
    items: UsersType[]
    onClickHandler: (value: number) => void
}
export const Accordion = ({ collapsed, title, ...props }: AccordionType) => {
    return (
        <div>
            <AccordionTitle title={title} onChange={props.onChange} />
            {!collapsed && <AccordionBody onClickHandler={props.onClickHandler} items={props.items} />}
        </div>
    )
}