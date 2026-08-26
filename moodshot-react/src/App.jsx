import { useState } from 'react'
import Login from './components/Login'
import Home from './components/Home'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
      {isLoggedIn ? <Home /> : <Login onLoginSuccess={() => setIsLoggedIn(true)} />}
    </>
  )
}

export default App