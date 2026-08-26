function Header({ userEmail, onLogout }) {
  return (
    <header className="app-header">
      <h2>Moodshot</h2>
      <div>
        <span>Olá, {userEmail}</span>
        <button onClick={onLogout}>Sair</button>
      </div>
    </header>
  )
}

export default Header