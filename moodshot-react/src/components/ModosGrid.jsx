import { useState } from 'react'
import ModoCard from './ModoCard'

const modos = [
  { nome: 'Alegria', legenda: 'Esse sorriso não tem preço.', filtro: 'Saturação alta, tons quentes' },
  { nome: 'Calma', legenda: 'Respira. Esse momento é seu.', filtro: 'Tons frios, baixo contraste' },
  { nome: 'Intensidade', legenda: 'Você foi além do que imaginou.', filtro: 'Alto contraste, nitidez máxima' },
  { nome: 'Natureza', legenda: 'Conexão com o que importa.', filtro: 'Tons verdes, luz natural' },
  { nome: 'Nostalgia', legenda: 'Alguns momentos merecem ser eternos.', filtro: 'Sépia, grain vintage' },
]

function ModosGrid({ onModoSelecionado }) {
  const [indiceSelecionado, setIndiceSelecionado] = useState(null)

  function selecionar(indice) {
    setIndiceSelecionado(indice)
    onModoSelecionado(modos[indice])
  }

  return (
    <section className="secao">
      <h2>Escolha um modo</h2>
      <div className="modos-grid">
        {modos.map((modo, indice) => (
          <ModoCard
            key={modo.nome}
            modo={modo}
            selecionado={indice === indiceSelecionado}
            onSelecionar={() => selecionar(indice)}
          />
        ))}
      </div>
    </section>
  )
}

export default ModosGrid