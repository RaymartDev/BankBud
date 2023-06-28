import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Landing from './pages/Landing'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import './assets/css/main.css'

const App = () => {
  const { user } = useAuthContext()
  
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path='/'
          element={user ? <Home /> : <Landing />} />
        <Route 
          path='/login'
          element={user ? <Navigate to="/" /> : <Login />} />
        <Route 
          path='/register'
          element={user ? <Navigate to="/" /> : <Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
