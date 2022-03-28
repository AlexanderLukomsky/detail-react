import { useReducer, useState } from 'react'
import { reducer, toggleCollapsedAC } from './reducer';



export const UnControlledAccordion = () => {
    const [state, collapsedDispatch] = useReducer(reducer, { collapsed: false })
    const collapsedMenu = () => {
        console.log(state.collapsed);
        collapsedDispatch(toggleCollapsedAC())
    }
    return (
        <div>
            <h3 onClick={collapsedMenu}>
                {state.collapsed ? 'Menu Open' : 'Menu Closed'}
            </h3>
            {state.collapsed && <ul>
                <li>123</li>
                <li>123</li>
                <li>123</li>
            </ul>}
        </div>
    )
}