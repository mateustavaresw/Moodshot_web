import { useState } from 'react'
import Login from './components/Login'
import Home from './components/Home'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState('')

  function handleLoginSuccess(email, nome) {
    setUserName(nome)
    setIsLoggedIn(true)
  }

  function handleLogout() {
    setIsLoggedIn(false)
    setUserName('')
  }

  return (
    <>
      {isLoggedIn ? (
        <Home userName={userName} onLogout={handleLogout} />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </>
  )
}

export default App