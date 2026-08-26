import { useState } from 'react'

function Captura({ modoSelecionado }) {
  const [historico, setHistorico] = useState(() => {
    const salvo = localStorage.getItem('moodshot_capturas')
    return salvo ? JSON.parse(salvo) : []
  })
  const [resultado, setResultado] = useState(null)
  const [flash, setFlash] = useState(false)

  function capturarFoto() {
    if (!modoSelecionado) {
      alert('Selecione um modo antes de capturar!')
      return
    }

    const intensidade = Math.round(Math.random() * 40 + 60)

    const novaCaptura = {
      id: Date.now(),
      modo: modoSelecionado.nome,
      legenda: modoSelecionado.legenda,
      filtro: modoSelecionado.filtro,
      cor: modoSelecionado.cor,
      intensidade,
      data: new Date().toLocaleString('pt-BR'),
    }

    const novoHistorico = [novaCaptura, ...historico]
    setHistorico(novoHistorico)
    setResultado(novaCaptura)
    localStorage.setItem('moodshot_capturas', JSON.stringify(novoHistorico))

    setFlash(true)
    setTimeout(() => setFlash(false), 200)
  }

  return (
    <>
      {flash && <div className="camera-flash"></div>}

      <section className="secao">
        <h2>Simular captura</h2>
        <p>Selecione um modo acima e clique em capturar:</p>
        <button onClick={capturarFoto}>Capturar foto</button>

        {resultado && (
          <div id="resultado" style={{ borderLeftColor: resultado.cor }}>
            <p><strong>Modo:</strong> {resultado.modo}</p>
            <p><strong>Legenda gerada:</strong> {resultado.legenda}</p>
            <p><strong>Filtros aplicados:</strong> {resultado.filtro}</p>
            <p><strong>Intensidade aplicada:</strong> {resultado.intensidade}%</p>
          </div>
        )}

        {historico.length > 0 && (
          <div className="historico">
            <h3>Histórico de capturas ({historico.length})</h3>
            <ul>
              {historico.map((item) => (
                <li key={item.id}>
                  <span className="dot" style={{ background: item.cor }}></span>
                  {item.modo} — {item.intensidade}% — {item.data}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </>
  )
}

export default Captura