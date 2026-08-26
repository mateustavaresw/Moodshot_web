import { useState } from 'react'
import Header from './Header'
import Slideshow from './Slideshow'
import ModosGrid from './ModosGrid'
import Captura from './Captura'
import Footer from './Footer'

function Home({ userEmail, onLogout }) {
  const [modoSelecionado, setModoSelecionado] = useState(null)

  return (
    <div className="home-container">
      <Header userEmail={userEmail} onLogout={onLogout} />
      <Slideshow />
      <ModosGrid onModoSelecionado={setModoSelecionado} />
      <Captura modoSelecionado={modoSelecionado} />
      <Footer />
    </div>
  )
}

export default Home