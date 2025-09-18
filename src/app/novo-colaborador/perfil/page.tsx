
"use client";
import { useEffect, useState } from "react";

const mockProfile = {
  nome: "Maria Souza",
  cargo: "Analista de Atendimento",
  foto: "https://randomuser.me/api/portraits/women/50.jpg",
  equipe: "Equipe Fernando",
  cursosConcluidos: 12,
  cursosPendentes: 3,
  pontos: 980,
  ranking: 2,
};



import { ArrowRight } from "lucide-react";

const avisos = [
  {
    titulo: "Reunião:",
    texto: "No dia 12/11 haverá uma reunião onde todos os integrantes deverão comparecer.",
    tempo: "há 2 horas",
  },
  {
    titulo: "Palestra - 18/09:",
    texto: "Receberemos Wesley Snipe contar um pouco da sua trajetória.",
    tempo: "há 14 horas",
  },
  {
    titulo: "Eventos:",
    texto: "Venha visitar o estande da Vivo no nosso evento! Teremos demonstrações, brindes e muitas novidades! Acontece nos dias 22 e 23 de Novembro.",
    tempo: "há 2 dias",
  },
];

const stats = [
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm-1-7V7h2v6h-2Zm0 4v-2h2v2h-2Z" fill="#663399"/></svg>
    ),
    label: "cursos completos",
    value: 12,
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm0 18H7V4h10v16Zm-5-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" fill="#663399"/></svg>
    ),
    label: "Horas de treinamento",
    value: 28,
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm-1-7V7h2v6h-2Zm0 4v-2h2v2h-2Z" fill="#663399"/></svg>
    ),
    label: "Pontos acumulados",
    value: 2100,
  },
];



export default function Perfil() {
  const [nome, setNome] = useState("");
  useEffect(() => {
    const nomeSalvo = localStorage.getItem("nomeUsuario") || "usuário";
    setNome(nomeSalvo);
  }, []);
  return (
    <div className="w-full min-h-[80vh] flex flex-col">
      {/* Saudação centralizada */}
      <div className="w-full flex justify-center mt-6 mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#663399] text-center w-full">Olá, {nome}!</h2>
      </div>

      {/* Mural de avisos */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4 text-black">Mural de avisos</h3>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {avisos.map((aviso, i) => (
            <div
              key={i}
              className="min-w-[220px] max-w-xs bg-white rounded-lg shadow p-4 flex flex-col justify-between border border-[#e0d6f7]"
            >
              <div>
                <div className="font-bold text-base text-[#1a1a2e] mb-1">{aviso.titulo}</div>
                <div className="text-sm text-[#333]">{aviso.texto}</div>
              </div>
              <div className="text-xs text-gray-400 text-right mt-2">{aviso.tempo}</div>
            </div>
          ))}
          <button className="flex items-center justify-center min-w-[40px] h-[80px] bg-[#ede9f7] rounded-lg ml-2 hover:bg-[#d1cbe6] transition">
            <ArrowRight className="text-[#663399]" />
          </button>
        </div>
      </div>

      {/* Performance e Feedback */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl mx-auto mb-12">
        <div className="col-span-1 sm:col-span-2 flex flex-col items-center justify-center bg-white rounded-xl shadow p-6 min-h-[120px] cursor-pointer hover:shadow-md transition">
          <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><path d="M4 17l6-6 4 4 6-6" stroke="#663399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="10" stroke="#663399" strokeWidth="2"/></svg>
          <span className="mt-2 font-semibold text-[#663399] text-lg">Minha performance</span>
        </div>
        <div className="col-span-1 sm:col-span-2 flex flex-col items-center justify-center bg-white rounded-xl shadow p-6 min-h-[120px] cursor-pointer hover:shadow-md transition">
          <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="7" rx="2" stroke="#663399" strokeWidth="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#663399" strokeWidth="2"/></svg>
          <span className="mt-2 font-semibold text-[#663399] text-lg">Feedback do mentor</span>
        </div>
      </div>

      {/* Estatísticas e Tarefas */}
      <div className="flex flex-wrap gap-6 justify-center mt-4 mb-8">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-white rounded-full shadow px-6 py-3 min-w-[180px] max-w-xs border border-[#e0d6f7]"
          >
            <div className="flex-shrink-0">{stat.icon}</div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-[#663399]">{stat.value}</span>
              <span className="text-xs text-gray-500">{stat.label}</span>
            </div>
          </div>
        ))}
        <div className="flex items-center gap-2 bg-white rounded-full shadow px-6 py-3 min-w-[140px] max-w-xs border border-[#e0d6f7] cursor-pointer hover:shadow-md transition">
          <span className="font-semibold text-[#663399]">Tarefas</span>
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4" stroke="#663399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="3" y="3" width="18" height="18" rx="2" stroke="#663399" strokeWidth="2"/></svg>
        </div>
      </div>
    </div>
  );
}
