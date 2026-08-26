function Header({ userName, onLogout }) {
  return (
    <header className="app-header">
      <h2>Moodshot</h2>
      <div>
        <span>Olá, {userName}</span>
        <button onClick={onLogout}>Sair</button>
      </div>
    </header>
  )
}

export default Header