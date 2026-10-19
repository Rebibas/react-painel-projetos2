import "./App.css";
import Cabecalho from "./components/Cabecalho";
import Secao from "./components/Secao";
import Resumo from "./components/Resumo";
import ProjetoCard from "./components/ProjetoCard";
import Rodape from "./components/Rodape";

const projetos = [
  {
    id: 1,
    titulo: "Sistema de Estoque",
    descricao: "Controle de produtos e movimentações.",
    responsavel: "Ana",
    status: "Concluído",
    tecnologias: ["React", "Node.js", "PostgreSQL"],
    destaque: true,
  },
  {
    id: 2,
    titulo: "Agenda de Monitorias",
    descricao: "Marcação de horários entre alunos e monitores.",
    responsavel: "Bruno",
    status: "Em desenvolvimento",
    tecnologias: ["React", "Firebase"],
    destaque: false,
  },
  {
    id: 3,
    titulo: "Biblioteca Comunitária",
    descricao: "Empréstimo e devolução de livros do bairro.",
    responsavel: "Carla",
    status: "Concluído",
    tecnologias: ["React", "Express", "MongoDB"],
    destaque: false,
  },
  {
    id: 4,
    titulo: "Diário de Estudos",
    descricao: "Registro de metas, horas e anotações por matéria.",
    responsavel: "Diego",
    status: "Planejamento",
    tecnologias: ["React", "Tailwind"],
    destaque: false,
  },
  {
    id: 5,
    titulo: "Mapa de Reciclagem",
    descricao: "Pontos de coleta seletiva da cidade em um só lugar.",
    responsavel: "Elisa",
    status: "Em desenvolvimento",
    tecnologias: ["React", "Leaflet", "Node.js"],
    destaque: true,
  },
  {
    id: 6,
    titulo: "Quiz de Programação",
    descricao: "Perguntas rápidas para revisar lógica e JavaScript.",
    responsavel: "Felipe",
    status: "Concluído",
    tecnologias: ["React", "JavaScript"],
    destaque: false,
  },
];

function App() {
  const total = projetos.length;
  const concluidos = projetos.filter(
    (projeto) => projeto.status === "Concluído"
  ).length;
  const emDesenvolvimento = projetos.filter(
    (projeto) => projeto.status === "Em desenvolvimento"
  ).length;

  return (
    <div className="pagina">
      <Cabecalho
        titulo="Projetos da turma"
        subtitulo="Tudo o que a turma construiu durante o curso, com quem fez e o que usou."
      />

      <main>
        <Secao titulo="Resumo">
          <Resumo
            total={total}
            concluidos={concluidos}
            emDesenvolvimento={emDesenvolvimento}
          />
        </Secao>

        <Secao titulo="Projetos">
          <div className="grade">
            {projetos.map((projeto) => (
              <ProjetoCard
                key={projeto.id}
                titulo={projeto.titulo}
                descricao={projeto.descricao}
                responsavel={projeto.responsavel}
                status={projeto.status}
                tecnologias={projeto.tecnologias}
                destaque={projeto.destaque}
              />
            ))}
          </div>
        </Secao>
      </main>

      <Rodape texto="Painel feito com componentes e props em React." />
    </div>
  );
}

export default App;
