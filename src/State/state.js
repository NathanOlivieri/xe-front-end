import React, {createContext, useContext, useReducer} from 'react'

export const StateContext = createContext()

export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={ useReducer(reducer, initialState) }>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)

export const mainReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_PRIMARY':
            return {
                ...state,
                theme: {
                    ...state.theme,
                    primary: action.newPrimary.primary,
                }
            }
        case 'CHANGE_LANG':
            return {
                ...state,
                app: {
                    language: action.newLanguage
                }
            }
        case 'TOGGLE_MENU':
            return {
                ...state,
                menu: {
                    isOpen: action.toggleMenu
                }
            }
        case 'SET_SCROLL_POS':
            return {
                ...state,
                nav: {
                    scrollPos: action.newScrollPos
                }
            }
        default:
            return state
    }
}