"use client"
function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
  const a = (angle - 90) * Math.PI / 180.0;
  return {
    x: cx + (r * Math.cos(a)),
    y: cy + (r * Math.sin(a)),
  };
}

function EquipeCircle({ ranking }: { ranking: ColaboradorRanking[] }) {
  const total = ranking.reduce((acc, c) => acc + c.pontos, 0) || 1;
  let startAngle = 0;
  const R = 70, CX = 80, CY = 80;
  const paths = ranking.map((colab, i) => {
    const percent = colab.pontos / total;
    const angle = percent * 360;
    const endAngle = startAngle + angle;
    const start = polarToCartesian(CX, CY, R, startAngle);
    const end = polarToCartesian(CX, CY, R, endAngle);
    const largeArc = angle > 180 ? 1 : 0;
    const d = [
      `M ${start.x} ${start.y}`,
      `A ${R} ${R} 0 ${largeArc} 1 ${end.x} ${end.y}`
    ].join(' ');
    const color = equipeColors[i % equipeColors.length];
    const el = <path key={i} d={d} stroke={color} strokeWidth="10" fill="none" />;
    startAngle = endAngle;
    return el;
  });
  return (
    <svg width="160" height="160" viewBox="0 0 160 160">
      <circle cx="80" cy="80" r="70" stroke="#e0d6f7" strokeWidth="10" fill="none" />
      {paths}
      <text x="50%" y="54%" textAnchor="middle" fontSize="1.5em" fontWeight="bold" fill="#1a1a2e">EQUIPE</text>
    </svg>
  );
}

import { Star, User } from "lucide-react";
import { useEffect, useState } from "react";


const equipeColors = ["#0ea5e9", "#f59e42", "#be185d", "#22c55e"];

interface ColaboradorRanking {
  nome: string;
  pontos: number;
  foto: string;
  cor: string;
}

function CircularProgress({ value, color, label }: { value: number; color: string; label: string }) {
  const R = 38;
  const C = 2 * Math.PI * R;
  const offset = C * (1 - value / 100);
  return (
    <div className="flex flex-col items-center">
      <svg width="90" height="90" className="mb-1">
        <circle cx="45" cy="45" r={R} stroke="#e0d6f7" strokeWidth="6" fill="none" />
        <circle
          cx="45" cy="45" r={R}
          stroke={color}
          strokeWidth="6"
          fill="none"
          strokeDasharray={C}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.5s' }}
        />
        <text x="50%" y="54%" textAnchor="middle" fontSize="1.5em" fontWeight="bold" fill="#663399">{label}</text>
      </svg>
    </div>
  );
}



// Get user name from localStorage (set on login)
function useUserInfo() {
  const [nome, setNome] = useState<string>("");
  useEffect(() => {
    // Ajuste a chave conforme o que é salvo no login
    const nomeSalvo = localStorage.getItem("nomeUsuario") || "Colaborador";
    setNome(nomeSalvo);
  }, []);
  return nome;
}

// Mock user data
const user = {
  pontos: 1200,
  concluido: 80,
  engajamento: 90,
  tarefas: 18,
  totalTarefas: 20,
};

// Mock ranking data (last entry is the logged-in user, name replaced dynamically)
const ranking: ColaboradorRanking[] = [
  { nome: "Ana", pontos: 1800, foto: "https://randomuser.me/api/portraits/women/44.jpg", cor: "text-[#0ea5e9]" },
  { nome: "Bruno", pontos: 1500, foto: "https://randomuser.me/api/portraits/men/45.jpg", cor: "text-[#f59e42]" },
  { nome: "Carla", pontos: 1300, foto: "https://randomuser.me/api/portraits/women/46.jpg", cor: "text-[#be185d]" },
  { nome: "__USUARIO_LOGADO__", pontos: 1200, foto: "https://randomuser.me/api/portraits/men/47.jpg", cor: "text-[#22c55e]" },
];

const placeholderFoto = "https://randomuser.me/api/portraits/men/47.jpg";

export default function Ranking() {
  const nomeUsuario = useUserInfo();
  // Atualiza o nome do usuário no ranking
  const rankingFinal = ranking.map((colab) =>
    colab.nome === "__USUARIO_LOGADO__" ? { ...colab, nome: nomeUsuario } : colab
  );
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center gap-8 py-6">
      {/* Perfil e progresso */}
      <div className="flex flex-col items-center gap-2">
        <img src={placeholderFoto} alt={nomeUsuario} className="w-28 h-28 rounded-full object-cover border-4 border-[#ede9f7] shadow" />
        <span className="text-2xl font-bold text-[#1a1a2e] mt-2">{nomeUsuario}</span>
        <span className="text-[#663399] font-semibold -mt-1 mb-2">{user.pontos} pontos</span>
        <div className="flex flex-row gap-8 mt-2">
          <div className="flex flex-col items-center">
            <CircularProgress value={user.concluido} color="#663399" label={`${user.concluido}%`} />
            <span className="font-semibold text-sm mt-1">Concluido</span>
          </div>
          <div className="flex flex-col items-center">
            <CircularProgress value={user.engajamento} color="#663399" label={`${user.engajamento}%`} />
            <span className="font-semibold text-sm mt-1">Engajamento</span>
          </div>
          <div className="flex flex-col items-center">
            <CircularProgress value={Math.round((user.tarefas / user.totalTarefas) * 100)} color="#663399" label={`${user.tarefas}/${user.totalTarefas}`} />
            <span className="font-semibold text-sm mt-1">Tarefas feitas</span>
          </div>
        </div>
      </div>

      <hr className="w-full max-w-2xl border-t-2 border-[#663399] my-4 opacity-60" />

      {/* Ranking de Onboarding */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl items-center justify-center">
        <div className="flex flex-col items-center w-full md:w-1/3">
          <span className="text-xl font-bold mb-2 text-[#1a1a2e]">Ranking de Onboarding</span>
          <EquipeCircle ranking={rankingFinal} />
        </div>



        <div className="flex-1 flex flex-col gap-4 w-full">
          {rankingFinal.map((colab, i) => (
            <div key={i} className="flex items-center gap-4 bg-white rounded-xl shadow px-4 py-3 border border-[#e0d6f7]">
              <img src={colab.foto} alt={colab.nome} className="w-12 h-12 rounded-full object-cover border-2 border-[#ede9f7]" />
              <span className={`font-semibold text-base ${colab.cor}`}>{colab.nome}</span>
              <div className="flex gap-1 ml-2">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className={`w-5 h-5 ${idx < (5 - i) ? 'text-orange-400 fill-orange-400' : 'text-gray-300'}`} fill={idx < (5 - i) ? '#f59e42' : 'none'} />
                ))}
              </div>
              <span className="ml-auto font-bold text-[#1a1a2e]">{colab.pontos} pts</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
