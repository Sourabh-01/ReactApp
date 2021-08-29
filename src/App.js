import React from 'react'
import { useSelector } from 'react-redux'
import Login from './components/Login'
import { selectUser } from './features/userSlice'
import Register from './components/Register'

const App = () => {
   const user = useSelector(selectUser);
  return (
    <div className="Logout">
    {user ? <Login/>:<Register/>}
    </div>
  )
}

export default App
