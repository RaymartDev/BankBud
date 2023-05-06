import { createContext, useReducer } from "react"

export const BankContext = createContext()

export const bankReducer = (state, action) => {
    switch(action.type) {
        case "SET_BALANCE": 
            return {
                ...state,
                balance: action.payload
            }
        case "DEPOSIT_BALANCE":
            return {
                ...state,
                balance: state.balance + action.payload
            }
        case "WITHDRAW_BALANCE":
            return {
                ...state,
                balance: state.balance - action.payload
            }
        default: 
            return state
    }
}

export const BankContextProvider = ({ children }) => {
    const[state, dispatch] = useReducer(bankReducer, {
        bank: null
    })

    return (
        <BankContext.Provider value={{...state, dispatch}}>
            {children}
        </BankContext.Provider>
    )
}