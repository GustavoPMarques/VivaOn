
"use client";
import { useState } from "react";
import { Search, BookOpen } from "lucide-react";

const cursosMock = [
  {
    titulo: "Introdução à Vivo",
    duracao: "2h",
    status: "Concluído",
    progresso: 100,
    cor: "#22c55e",
  },
  {
    titulo: "Atendimento ao cliente",
    duracao: "1h",
    status: "Em andamento",
    progresso: 71,
    cor: "#a3e635",
  },
  {
    titulo: "Produtos e Serviços",
    duracao: "1h",
    status: "Não iniciado",
    progresso: 0,
    cor: "#a3a3a3",
  },
  {
    titulo: "Compliance e Ética",
    duracao: "1h30min",
    status: "Concluído",
    progresso: 100,
    cor: "#22c55e",
  },
  {
    titulo: "Comunicação Eficaz",
    duracao: "2h",
    status: "Em andamento",
    progresso: 45,
    cor: "#facc15",
  },
  {
    titulo: "Gestão do Tempo",
    duracao: "1h15min",
    status: "Não iniciado",
    progresso: 0,
    cor: "#a3a3a3",
  },
  {
    titulo: "Excelência no Atendimento",
    duracao: "2h",
    status: "Concluído",
    progresso: 100,
    cor: "#22c55e",
  },
];


type Status = "Concluído" | "Em andamento" | "Não iniciado";
const statusColors: Record<Status, string> = {
  "Concluído": "text-green-600",
  "Em andamento": "text-yellow-600",
  "Não iniciado": "text-gray-500",
};
const statusBg: Record<Status, string> = {
  "Concluído": "bg-green-100",
  "Em andamento": "bg-yellow-100",
  "Não iniciado": "bg-gray-100",
};

export default function Cursos() {
  const [tab, setTab] = useState("Todos");
  const [busca, setBusca] = useState("");

  const cursosFiltrados = cursosMock.filter(curso => {
    if (tab === "Em andamento" && curso.status !== "Em andamento") return false;
    if (busca && !curso.titulo.toLowerCase().includes(busca.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="w-full min-h-[80vh] flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-black">Meus cursos</h2>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="flex bg-[#ede9f7] rounded-full p-1 gap-1">
            <button
              className={`px-5 py-1.5 rounded-full font-semibold text-sm transition-colors ${tab === "Todos" ? "bg-[#663399] text-white" : "text-[#663399] hover:bg-[#d1cbe6]"}`}
              onClick={() => setTab("Todos")}
            >
              Todos
            </button>
            <button
              className={`px-5 py-1.5 rounded-full font-semibold text-sm transition-colors ${tab === "Em andamento" ? "bg-[#663399] text-white" : "text-[#663399] hover:bg-[#d1cbe6]"}`}
              onClick={() => setTab("Em andamento")}
            >
              Em andamento
            </button>
          </div>
          <div className="relative ml-2 w-full max-w-[200px]">
            <input
              type="text"
              placeholder="Pesquisar"
              value={busca}
              onChange={e => setBusca(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-full border border-[#e0d6f7] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#663399]/30"
            />
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-[#663399] w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full">
        {cursosFiltrados.length === 0 && (
          <div className="text-center text-gray-500 py-12">Nenhum curso encontrado.</div>
        )}
        {cursosFiltrados.map((curso, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-xl shadow px-4 py-4 gap-4 border border-[#e0d6f7] transition hover:shadow-md"
          >
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#ede9f7]">
                <BookOpen className="text-[#663399] w-7 h-7" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-base text-[#1a1a2e]">{curso.titulo}</span>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>{curso.duracao}</span>
                  <span className={`px-2 py-0.5 rounded-full font-medium ${statusColors[curso.status as Status]} ${statusBg[curso.status as Status]}`}>{curso.status}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end w-full sm:w-1/3 mt-2 sm:mt-0">
              <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                <div
                  className="h-2 rounded-full transition-all"
                  style={{ width: `${curso.progresso}%`, background: curso.cor }}
                />
              </div>
              <span className="text-xs font-semibold text-gray-500">{curso.progresso}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
