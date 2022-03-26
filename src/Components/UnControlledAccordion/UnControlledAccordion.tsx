import { useState } from 'react'

export const UnControlledAccordion = () => {
    const [collapsed, setCollapsed] = useState(false)
    const collapsedMenu = (collapsed: boolean) => { setCollapsed(!collapsed) }
    return (
        <div>
            <h3 onClick={() => { collapsedMenu(collapsed) }}>
                {!collapsed ? 'Menu Open' : 'Menu Closed'}
            </h3>
            {!collapsed && <ul>
                <li>123</li>
                <li>123</li>
                <li>123</li>
            </ul>}
        </div>
    )
}