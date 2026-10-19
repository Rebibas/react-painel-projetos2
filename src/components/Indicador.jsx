function Indicador({ rotulo, valor }) {
  return (
    <div className="indicador">
      <dd className="indicador__valor">{valor}</dd>
      <dt className="indicador__rotulo">{rotulo}</dt>
    </div>
  );
}

export default Indicador;
