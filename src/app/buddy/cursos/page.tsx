
import Link from "next/link";

const cursosMock = [
  {
    id: "1",
    titulo: "Cibersegurança",
    descricao: "Aprenda os fundamentos de segurança digital.",
    imagem: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
  },
  {
    id: "2",
    titulo: "IA para análise de dados",
    descricao: "Explore técnicas de inteligência artificial.",
    imagem: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
  },
  {
    id: "3",
    titulo: "Influência global da tecnologia",
    descricao: "Entenda os impactos tecnologia no mundo.",
    imagem: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    id: "4",
    titulo: "Evolução da tecnologia",
    descricao: "Acompanhe o progresso tecnológico.",
    imagem: "https://cdn-icons-png.flaticon.com/512/4149/4149643.png",
  },
  {
    id: "5",
    titulo: "Organização no trabalho",
    descricao: "Melhore sua produtividade.",
    imagem: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png",
  },
  {
    id: "6",
    titulo: "IOT nas grandes cidades",
    descricao: "Descubra o impacto do IoT.",
    imagem: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
  },
];

export default function BuddyCursos() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cursosMock.map((curso) => (
          <div key={curso.id} className="bg-white rounded-xl shadow p-4 flex flex-col items-center border border-[#ede9f7]">
            <img src={curso.imagem} alt={curso.titulo} className="w-20 h-20 object-contain mb-4 rounded-lg bg-[#f3eaff]" />
            <h2 className="text-lg font-bold text-[#663399] text-center mb-1">{curso.titulo}</h2>
            <p className="text-gray-700 text-center text-sm mb-4 min-h-[40px]">{curso.descricao}</p>
            <Link href={`/buddy/cursos/${curso.id}`} className="w-full">
              <button className="w-full bg-[#663399] text-white font-bold py-2 rounded hover:bg-[#512b7e] transition">ATRIBUIR</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
