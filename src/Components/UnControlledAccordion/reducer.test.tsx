import { reducer, StateType, toggleCollapsedAC } from "./reducer";

export const a = '';
test('reducer should be return false', () => {
    //data
    const state: StateType = {
        collapsed: true
    }
    const newState = reducer(state, toggleCollapsedAC())
    expect(newState.collapsed).toBe(false)
})
test('', () => {
    const state: StateType = {
        collapsed: false
    }
    expect(() => {
        reducer(state, toggleCollapsedAC())
    }).not.toThrowError()
})