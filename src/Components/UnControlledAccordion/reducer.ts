export type ToggleCollapsedACType = ReturnType<typeof toggleCollapsedAC>
export type StateType = {
    collapsed: boolean
}
type ActionType = ToggleCollapsedACType
export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'TOGGLE-COLLAPSED': return { ...state, collapsed: !state.collapsed }
        default: return state
    }
}
export const toggleCollapsedAC = () => {
    return {
        type: 'TOGGLE-COLLAPSED'
    } as const
}