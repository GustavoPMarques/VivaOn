
"use client";
import { useState } from "react";
import { Search, Mail, Gift, Home, FileText, User, Lock, BookOpen, Users } from "lucide-react";

const politicas = [
  { icon: <BookOpen className="w-6 h-6 text-[#663399]" />, label: "Código de conduta" },
  { icon: <Home className="w-6 h-6 text-[#663399]" />, label: "Política de home office" },
  { icon: <Mail className="w-6 h-6 text-[#663399]" />, label: "Política de uso de e-mail e internet" },
  { icon: <Gift className="w-6 h-6 text-[#663399]" />, label: "Benefícios" },
];

const contatos = [
  { nome: "RH", email: "rh@vivo.com.br", fone: "(11) 99999-9999" },
  { nome: "TI/Suporte Técnico", email: "suporte@vivo.com.br", fone: "Ramal 1234" },
  { nome: "Ouvidoria/ Ética", email: "acessar canal", fone: "(11) 99999-9999" },
];

const docs = [
  { icon: <FileText className="w-6 h-6 text-[#663399]" />, label: "Manual do Colaborador" },
  { icon: <Lock className="w-6 h-6 text-[#663399]" />, label: "Política de Segurança" },
  { icon: <FileText className="w-6 h-6 text-[#663399]" />, label: "Banco de Horas e Jornada de Trabalho" },
  { icon: <Users className="w-6 h-6 text-[#663399]" />, label: "FAQ – Perguntas Frequentes" },
];

export default function Informacoes() {
  const [busca, setBusca] = useState("");

  // Filtros simples para busca
  const politicasFiltradas = politicas.filter(p => p.label.toLowerCase().includes(busca.toLowerCase()));
  const docsFiltrados = docs.filter(d => d.label.toLowerCase().includes(busca.toLowerCase()));
  const contatosFiltrados = contatos.filter(c =>
    c.nome.toLowerCase().includes(busca.toLowerCase()) ||
    c.email.toLowerCase().includes(busca.toLowerCase()) ||
    c.fone.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="w-full min-h-[80vh] flex flex-col gap-8">
      <h2 className="text-xl sm:text-2xl font-bold text-black mb-2">Informações</h2>
      <div className="w-full max-w-2xl mx-auto">
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Procurar política, contato, documento..."
            value={busca}
            onChange={e => setBusca(e.target.value)}
            className="w-full pl-10 pr-3 py-2 rounded-lg border border-[#e0d6f7] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#663399]/30 shadow"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#663399] w-5 h-5" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl mx-auto">
        {/* Políticas */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4 text-black">Política da empresa</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {politicasFiltradas.length === 0 && <span className="text-gray-400 col-span-2">Nenhuma política encontrada.</span>}
            {politicasFiltradas.map((p, i) => (
              <button key={i} className="flex flex-col items-center justify-center gap-2 bg-white rounded-xl shadow p-5 border border-[#e0d6f7] hover:shadow-md transition">
                {p.icon}
                <span className="font-medium text-[#1a1a2e] text-center text-sm">{p.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Documentos */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4 text-black">Documentos e recursos úteis</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {docsFiltrados.length === 0 && <span className="text-gray-400 col-span-2">Nenhum documento encontrado.</span>}
            {docsFiltrados.map((d, i) => (
              <button key={i} className="flex flex-col items-center justify-center gap-2 bg-white rounded-xl shadow p-5 border border-[#e0d6f7] hover:shadow-md transition">
                {d.icon}
                <span className="font-medium text-[#1a1a2e] text-center text-sm">{d.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contatos importantes */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl mx-auto">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4 text-black">Contatos importantes</h3>
          <div className="bg-white rounded-xl shadow p-5 border border-[#e0d6f7] flex flex-col gap-4">
            {contatosFiltrados.length === 0 && <span className="text-gray-400">Nenhum contato encontrado.</span>}
            {contatosFiltrados.map((c, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b last:border-b-0 pb-3 last:pb-0">
                <div className="flex items-center gap-3">
                  <User className="w-7 h-7 text-[#663399]" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-[#1a1a2e] text-sm">{c.nome}</span>
                    <span className="text-xs text-gray-500">{c.email}</span>
                    <span className="text-xs text-gray-500">{c.fone}</span>
                  </div>
                </div>
                <button className="bg-[#663399] text-white px-4 py-1.5 rounded-full font-semibold text-xs shadow hover:bg-[#4b2178] transition">Entre em contato</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
