import Header from './Header'

function Home({ userEmail, onLogout }) {
  return (
    <div className="home-container">
      <Header userEmail={userEmail} onLogout={onLogout} />
    </div>
  )
}

export default Home