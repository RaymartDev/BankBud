import { createContext, useReducer } from "react"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

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
          // Decode the token with JWT
          const decodedToken = decodeToken(token);
    
          // Dispatch the LOGIN action with the decoded user data
          dispatch({ type: "LOGIN", payload: decodedToken.user });
        }
      }, [])

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

// Function to decode the JWT token
const decodeToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.SECRET)
    return decoded
  } catch (error) {
    console.error("Error decoding token:", error)
    return null
  }
}