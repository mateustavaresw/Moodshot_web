import Header from './Header'
import Slideshow from './Slideshow'

function Home({ userEmail, onLogout }) {
  return (
    <div className="home-container">
      <Header userEmail={userEmail} onLogout={onLogout} />
      <Slideshow />
    </div>
  )
}

export default Home