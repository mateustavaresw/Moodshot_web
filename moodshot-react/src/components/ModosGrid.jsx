import { useState } from 'react'
import ModoCard from './ModoCard'

const modos = [
  { nome: 'Alegria', legenda: 'Esse sorriso não tem preço.', filtro: 'Saturação alta, tons quentes', cor: '#a855f7' },
  { nome: 'Calma', legenda: 'Respira. Esse momento é seu.', filtro: 'Tons frios, baixo contraste', cor: '#38bdf8' },
  { nome: 'Intensidade', legenda: 'Você foi além do que imaginou.', filtro: 'Alto contraste, nitidez máxima', cor: '#f87171' },
  { nome: 'Natureza', legenda: 'Conexão com o que importa.', filtro: 'Tons verdes, luz natural', cor: '#4ade80' },
  { nome: 'Nostalgia', legenda: 'Alguns momentos merecem ser eternos.', filtro: 'Sépia, grain vintage', cor: '#fbbf24' },
]

function ModosGrid({ onModoSelecionado }) {
  const [indiceSelecionado, setIndiceSelecionado] = useState(null)

  function selecionar(indice) {
    setIndiceSelecionado(indice)
    onModoSelecionado(modos[indice])
  }

return (
  <section className="secao">
    <span className="eyebrow">{modos.length} modos disponíveis</span>
    <h2>Escolha um modo</h2>
    <div className="grid-frame">
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
    </div>
  </section>
)
}

export default ModosGrid