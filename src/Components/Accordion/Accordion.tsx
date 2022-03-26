
import { UsersType } from "../../App"
import { AccordionBody } from "./AccordionBody"
import { AccordionTitle } from "./AccordionTitle"
export type AccordionType = {
    title: string
    collapsed: boolean
    onChange: () => void
    items: UsersType[]
}
export const Accordion = ({ collapsed, title, ...props }: AccordionType) => {
    return (
        <div>
            <AccordionTitle title={title} onChange={props.onChange} />
            {!collapsed && <AccordionBody items={props.items} />}
        </div>
    )
}