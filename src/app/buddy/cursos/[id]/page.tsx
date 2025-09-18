"use client";
import { useParams, useRouter } from "next/navigation";

const cursosMock = [
  {
    id: "1",
    titulo: "Cibersegurança",
    descricao: "Aprenda os fundamentos de segurança digital.",
    detalhes: "Curso completo sobre proteção de dados, ameaças digitais e boas práticas de segurança.",
    imagem: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
  },
  {
    id: "2",
    titulo: "IA para análise de dados",
    descricao: "Explore técnicas de inteligência artificial.",
    detalhes: "Descubra como usar IA para extrair insights de grandes volumes de dados.",
    imagem: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
  },
  {
    id: "3",
    titulo: "Influência global da tecnologia",
    descricao: "Entenda os impactos tecnologia no mundo.",
    detalhes: "Analise como a tecnologia transforma sociedades e mercados globais.",
    imagem: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    id: "4",
    titulo: "Evolução da tecnologia",
    descricao: "Acompanhe o progresso tecnológico.",
    detalhes: "Veja as principais inovações e tendências do setor de tecnologia.",
    imagem: "https://cdn-icons-png.flaticon.com/512/4149/4149643.png",
  },
  {
    id: "5",
    titulo: "Organização no trabalho",
    descricao: "Melhore sua produtividade.",
    detalhes: "Dicas e ferramentas para organizar tarefas e equipes de forma eficiente.",
    imagem: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png",
  },
  {
    id: "6",
    titulo: "IOT nas grandes cidades",
    descricao: "Descubra o impacto do IoT.",
    detalhes: "Como a Internet das Coisas está mudando o cotidiano urbano.",
    imagem: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
  },
];
  

const equipesMock = [
  "Equipe Fernando",
  "Equipe Henrique",
  "Equipe Tânia",
  "Equipe Marcos",
  "Equipe Gabriela",
  "Equipe Cleberson",
  "Equipe Larissa",
  "Equipe Eduardo",
];

export default function CursoDetalhe() {
  const params = useParams();
  const router = useRouter();
  const curso = cursosMock.find((c) => c.id === params.id);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-6">
      <div className="bg-white rounded-xl shadow p-6 max-w-lg w-full">
        <button
          onClick={() => router.push('/buddy/cursos')}
          className="self-start mb-4 px-4 py-1 rounded bg-[#ede9f7] text-[#663399] font-semibold hover:bg-[#d1c4e9] transition"
        >
          ← Voltar para cursos
        </button>
        {curso?.imagem && (
          <img src={curso.imagem} alt={curso.titulo} className="w-24 h-24 object-contain mb-4 rounded-lg bg-[#f3eaff]" />
        )}
        <h1 className="text-2xl font-bold text-[#663399] mb-2 text-center">{curso?.titulo}</h1>
        <p className="text-gray-700 mb-4 text-center">{curso?.detalhes}</p>
        <label className="block font-semibold mb-2">Atribuir para equipe:</label>
        <select className="w-full p-2 rounded border mb-4">
          <option value="">Selecione uma equipe</option>
          {equipesMock.map((equipe, idx) => (
            <option key={idx} value={equipe}>{equipe}</option>
          ))}
        </select>
        <button className="w-full bg-[#663399] text-white font-bold py-2 rounded hover:bg-[#512b7e] transition">Atribuir</button>
      </div>
    </div>
  );
}
