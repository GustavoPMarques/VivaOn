import { User } from "lucide-react";

interface EquipeCardProps {
  nome: string;
  pessoas: number;
  foto: string;
  desempenho: number; // 0-100
  selecionada?: boolean;
  onClick?: () => void;
}

export default function EquipeCard({ nome, pessoas, foto, desempenho, selecionada, onClick }: EquipeCardProps) {
  const R = 40; // raio do círculo
  const circ = 2 * Math.PI * R;
  const offset = circ * (1 - desempenho / 100);
  return (
    <button
      className={`flex flex-col items-center justify-center bg-white rounded-2xl shadow p-2 w-48 h-48 m-2 border-2 transition-all duration-200 whitespace-normal break-words ${
        selecionada
          ? 'border-[#2196f3] ring-2 ring-[#2196f3]/30 scale-105'
          : 'border-[#e0e0e0] hover:border-[#2196f3]'
      }`}
      onClick={onClick}
      style={{ outline: 'none' }}
    >
      <div className="flex flex-col items-center w-full">
        {/* Barra de desempenho circular com foto centralizada */}
        <div className="relative w-24 h-24 mb-2 flex-shrink-0">
          <svg width="96" height="96">
            <circle cx="48" cy="48" r={R} stroke="#e0e0e0" strokeWidth="4" fill="none" />
            <circle
              cx="48" cy="48" r={R}
              stroke="#2196f3"
              strokeWidth="4"
              fill="none"
              strokeDasharray={circ}
              strokeDashoffset={offset}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 0.5s' }}
              transform="rotate(-90 48 48)"
            />
          </svg>
          <img
            src={foto}
            alt={nome}
            className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full object-cover border-4 border-white shadow -translate-x-1/2 -translate-y-1/2"
            style={{ boxShadow: '0 2px 8px #0001' }}
          />
        </div>
        <span className="font-bold text-sm text-center w-full break-words mt-1 text-gray-800">{nome}</span>
        <span className="text-xs text-gray-500">{pessoas} pessoas</span>
      </div>
    </button>
  );
}
