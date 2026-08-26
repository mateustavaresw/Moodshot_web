function ModoCard({ modo, selecionado, onSelecionar }) {
  return (
    <div
      className={`modo-card ${selecionado ? 'selecionado' : ''}`}
      style={{ '--accent': modo.cor }}
      onClick={onSelecionar}
    >
      <div className="modo-swatch" style={{ background: modo.cor }}></div>
      <p className="nome">{modo.nome}</p>
    </div>
  )
}

export default ModoCard