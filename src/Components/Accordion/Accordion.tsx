
import { AccordionBody } from "./AccordionBody"
import { AccordionTitle } from "./AccordionTitle"
type AccordionType = {
    title: string
    collapsed: boolean
    onChange: () => void
}
export const Accordion = ({ collapsed, title, ...props }: AccordionType) => {
    return (
        <div>
            <AccordionTitle title={title} onChange={props.onChange} />
            {!collapsed && <AccordionBody />}
        </div>
    )
}