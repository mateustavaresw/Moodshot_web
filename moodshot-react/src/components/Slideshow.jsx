import { useState, useEffect } from 'react'

const slides = [
  { cor: '#4a1a7a', modo: 'Alegria', legenda: 'Esse sorriso não tem preço.' },
  { cor: '#0a3a6a', modo: 'Calma', legenda: 'Respira. Esse momento é seu.' },
  { cor: '#6a1a1a', modo: 'Intensidade', legenda: 'Você foi além do que imaginou.' },
  { cor: '#1a5a1a', modo: 'Natureza', legenda: 'Conexão com o que realmente importa.' },
  { cor: '#4a3000', modo: 'Nostalgia', legenda: 'Alguns momentos merecem ser eternos.' },
]

function Slideshow() {
  const [slideAtual, setSlideAtual] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideAtual((atual) => (atual + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  function proximo() {
    setSlideAtual((atual) => (atual + 1) % slides.length)
  }

  function anterior() {
    setSlideAtual((atual) => (atual - 1 + slides.length) % slides.length)
  }

  const slide = slides[slideAtual]

return (
  <section className="secao">
    <span className="eyebrow">Live feed</span>
    <h2>Modos em destaque</h2>

    <div className="viewfinder">
      <span className="corner corner-tl"></span>
      <span className="corner corner-tr"></span>
      <span className="corner corner-bl"></span>
      <span className="corner corner-br"></span>

      <div className="slideshow" style={{ background: slide.cor }}>
        <p className="slide-modo">Modo {slide.modo}</p>
        <p className="slide-legenda">"{slide.legenda}"</p>
        <p className="exif-line">ISO 400 · f/2.8 · MODO: {slide.modo.toUpperCase()}</p>
      </div>
    </div>

    <div className="slide-botoes">
      <button onClick={anterior}>&#8592; Anterior</button>
      <span>{slideAtual + 1} / {slides.length}</span>
      <button onClick={proximo}>Próximo &#8594;</button>
    </div>
  </section>
)
}

export default Slideshow