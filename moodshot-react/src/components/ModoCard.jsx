function ModoCard({ modo, selecionado, onSelecionar }) {
  return (
    <div
      className={`modo-card ${selecionado ? 'selecionado' : ''}`}
      onClick={onSelecionar}
    >
      <p className="nome">{modo.nome}</p>
    </div>
  )
}

export default ModoCard