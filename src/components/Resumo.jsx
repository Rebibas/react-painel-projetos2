import Indicador from "./Indicador";

function Resumo({ total, concluidos, emDesenvolvimento }) {
  return (
    <dl className="resumo">
      <Indicador rotulo="projetos no total" valor={total} />
      <Indicador rotulo="concluídos" valor={concluidos} />
      <Indicador rotulo="em desenvolvimento" valor={emDesenvolvimento} />
    </dl>
  );
}

export default Resumo;
