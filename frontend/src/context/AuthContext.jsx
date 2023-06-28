import { createContext, useReducer } from "react"
import { useEffect } from "react"

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
        const token = localStorage.getItem("user");
    
        if (token) {
          dispatch({ type: "LOGIN", payload: decodedToken.user });
        }
      }, [])

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}