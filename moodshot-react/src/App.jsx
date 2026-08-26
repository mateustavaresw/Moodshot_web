import { useState } from 'react'
import Login from './components/Login'
import Home from './components/Home'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState('')

  function handleLoginSuccess(email) {
    setUserEmail(email)
    setIsLoggedIn(true)
  }

  function handleLogout() {
    setIsLoggedIn(false)
    setUserEmail('')
  }

  return (
    <>
      {isLoggedIn ? (
        <Home userEmail={userEmail} onLogout={handleLogout} />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </>
  )
}

export default App