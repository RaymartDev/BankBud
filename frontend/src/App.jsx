import Pages from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';

const App = () => {
  const { user } = useAuthContext()
  
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path='/'
          element={user ? <Pages.Home /> : <Pages.Landing />} />
        <Route 
          path='/login'
          element={user ? <Navigate to="/" /> : <Pages.Login />} />
        <Route 
          path='/register'
          element={user ? <Navigate to="/" /> : <Pages.Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
