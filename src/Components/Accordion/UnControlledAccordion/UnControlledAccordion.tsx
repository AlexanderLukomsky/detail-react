import { useState } from 'react'
import { AccordionBody } from '../AccordionBody'
import { AccordionTitle } from './AccordionTitle'
export const UnControlledAccordion = () => {
    const [collapsed, setCollapsed] = useState(false)
    const collapsedMenu = (collapsed: boolean) => { setCollapsed(!collapsed) }
    return (
        <div>
            <AccordionTitle title={!collapsed ? 'Menu Open' : 'Menu Closed'} callback={() => { collapsedMenu(collapsed) }} />
            {!collapsed && <AccordionBody />}
        </div>
    )
}