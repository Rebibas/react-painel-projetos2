import StatusBadge from "./StatusBadge";
import TecnologiaTag from "./TecnologiaTag";

function ProjetoCard({
  titulo,
  descricao,
  responsavel,
  status,
  tecnologias,
  destaque,
}) {
  return (
    <article className={destaque ? "card card--destaque" : "card"}>
      {destaque && <strong className="card__selo">Projeto em destaque</strong>}

      <header className="card__topo">
        <h3>{titulo}</h3>
        <StatusBadge status={status} />
      </header>

      <p className="card__descricao">{descricao}</p>
      <p className="card__responsavel">Responsável: {responsavel}</p>

      <ul className="card__tags">
        {tecnologias.map((tecnologia) => (
          <li key={tecnologia}>
            <TecnologiaTag nome={tecnologia} />
          </li>
        ))}
      </ul>
    </article>
  );
}

export default ProjetoCard;
