import { createContext, useReducer } from "react"
import { useEffect } from "react"
import Cookies from "js-cookie"

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch(action.type) {
        case "LOGIN": 
            return {
                ...state,
                user: action.payload
            }
        case "LOGOUT":
            return {
                ...state,
                user: null
            }
        default: 
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const[state, dispatch] = useReducer(authReducer, {
        user: null
    })

    useEffect(() => {
        // Check if token exists in localStorage
        const token = Cookies.get('token')
    
        if (token) {
          dispatch({ type: "LOGIN", payload: token });
        }
      }, [])

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}