"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [nome, setNome] = useState("");
  const [perfil, setPerfil] = useState("");
  const router = useRouter();

  function handleEntrar() {
    if (!nome || !perfil) return;
    localStorage.setItem("nomeUsuario", nome);
    if (perfil === "colaborador") {
      router.push("/novo-colaborador");
    }
    if (perfil === "buddy") {
      router.push("/buddy");
    }
    if (perfil === "gestor") {
      router.push("/gestor");
    }
    // Adicione outros redirecionamentos para outros perfis se desejar
  }

  const perfis = [
    {
      id: "colaborador",
      label: "Novo colaborador",
      desc: "Acesse cursos, chat com mentor e acompanhe seu progresso",
      icon: (
        <svg width="48" height="48" fill="#663399" viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.5-1.8 4.5-4.5S14.7 3 12 3 7.5 4.8 7.5 7.5 9.3 12 12 12zm0 1.5c-3 0-9 1.5-9 4.5V21h18v-3c0-3-6-4.5-9-4.5z" /></svg>
      ),
    },
    {
      id: "Buddy",
      label: "Buddy",
      desc: "Acompanhe colaboradores e se comunique com gestores",
      icon: (
        <svg width="48" height="48" fill="#663399" viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.5-1.8 4.5-4.5S14.7 3 12 3 7.5 4.8 7.5 7.5 9.3 12 12 12zm0 1.5c-3 0-9 1.5-9 4.5V21h18v-3c0-3-6-4.5-9-4.5z" /><rect x="8" y="16" width="8" height="2" rx="1" fill="#663399" /></svg>
      ),
    },
    {
      id: "gestor",
      label: "Gestor",
      desc: "Gerencie equipes e acompanhe rankings de desempenho",
      icon: (
        <svg width="48" height="48" fill="#663399" viewBox="0 0 24 24"><path d="M20 8h-3V4a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v4H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zm-9 10H7v-4h4v4zm6 0h-4v-6h4v6z" /></svg>
      ),
    },
  ];

  return (
  <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Linhas decorativas de fundo */}
      <svg
        className="hidden md:block absolute left-0 top-0 h-full w-auto z-0"
        width="220" height="100%" viewBox="0 0 220 1200" fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
  <polyline points="0,0 110,300 0,1200" stroke="#7c3aed" strokeWidth="2" fill="none"/>
  <polyline points="40,0 150,400 40,1200" stroke="#7c3aed" strokeWidth="1.2" fill="none"/>
  <polyline points="80,0 190,500 80,1200" stroke="#7c3aed" strokeWidth="0.8" fill="none"/>
      </svg>
      <svg
        className="hidden md:block absolute right-0 top-0 h-full w-auto z-0"
        width="220" height="100%" viewBox="0 0 220 1200" fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
  <polyline points="220,0 110,300 220,1200" stroke="#7c3aed" strokeWidth="2" fill="none"/>
  <polyline points="180,0 70,400 180,1200" stroke="#7c3aed" strokeWidth="1.2" fill="none"/>
  <polyline points="140,0 30,500 140,1200" stroke="#7c3aed" strokeWidth="0.8" fill="none"/>
      </svg>
      {/* Header */}
      <header className="flex items-center justify-center pt-6 sm:pt-8 pb-8 px-4 sm:px-12">
        <div className="text-center">
          <div className="text-[56px] sm:text-[80px] font-extrabold tracking-wide text-[#663399] leading-none">vivo</div>
          <span className="block font-normal text-[28px] sm:text-[36px] text-[#663399] mt-2">Onboarding</span>
        </div>
      </header>

      {/* Conteúdo principal */}
  <main className="max-w-3xl mx-auto px-4 py-8 flex flex-col items-center relative z-10">
        <h1 className="text-2xl sm:text-3xl font-medium mb-6 text-center">Bem-vindo à plataforma de integração</h1>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={e => setNome(e.target.value)}
          className="w-full max-w-xs sm:max-w-md text-lg sm:text-xl px-4 py-2 border-2 border-[#663399] rounded-lg mb-8 outline-none text-[#663399] bg-[#f8f8f8c5]"
        />
        <h2 className="text-lg sm:text-xl font-normal mb-6">selecione o seu perfil</h2>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mb-9 w-full justify-center items-center">
          {perfis.map(p => (
            <div
              key={p.id}
              onClick={() => setPerfil(p.id)}
              className={`bg-white ${perfil === p.id ? 'border-2 border-[#663399]' : 'border border-[#e0d6f7]'} rounded-2xl shadow-md p-6 w-full max-w-xs min-h-[220px] flex-1 flex flex-col items-center cursor-pointer transition-colors duration-200 hover:bg-[#ede9f7] hover:shadow-lg`}
            >
              {p.icon}
              <div className="font-semibold text-base sm:text-lg mt-3 mb-1 text-[#663399]">{p.label}</div>
              <div className="text-xs sm:text-sm text-gray-500 text-center">{p.desc}</div>
            </div>
          ))}
        </div>
        <button
          className="bg-[#663399] text-white font-semibold text-lg sm:text-xl rounded-md py-3 w-full max-w-md shadow-md transition-colors duration-200 mt-2 disabled:opacity-60 disabled:cursor-not-allowed hover:bg-[#512a8a] hover:shadow-lg"
          disabled={!nome || !perfil}
          onClick={handleEntrar}
        >
          Entrar na plataforma
        </button>
      </main>
    </div>
  );
}
