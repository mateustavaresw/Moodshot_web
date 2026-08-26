function Header({ userName, onLogout }) {
  return (
    <header className="app-header">
      <div className="brand">
        <img src="/apexxon-logo.png" alt="Logo do grupo" className="brand-logo" />
        <h2>Moodshot</h2>
      </div>
      <div>
        <span>Olá, {userName}</span>
        <button onClick={onLogout}>Sair</button>
      </div>
    </header>
  )
}

export default Header