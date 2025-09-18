"use client";
import { useState } from "react";
import EquipeCard from "./EquipeCard";
import { User } from "lucide-react";

const equipesMock = [
  { nome: "EQUIPE FERNANDO", pessoas: 7, foto: "https://randomuser.me/api/portraits/men/32.jpg", desempenho: 80 },
  { nome: "EQUIPE HENRIQUE", pessoas: 9, foto: "https://randomuser.me/api/portraits/men/33.jpg", desempenho: 60 },
  { nome: "EQUIPE TÂNIA", pessoas: 5, foto: "https://randomuser.me/api/portraits/women/44.jpg", desempenho: 90 },
  { nome: "EQUIPE MARCOS", pessoas: 6, foto: "https://randomuser.me/api/portraits/men/34.jpg", desempenho: 70 },
  { nome: "EQUIPE GABRIELA", pessoas: 11, foto: "https://randomuser.me/api/portraits/women/45.jpg", desempenho: 50 },
  { nome: "EQUIPE CLEBERSON", pessoas: 8, foto: "https://randomuser.me/api/portraits/men/35.jpg", desempenho: 75 },
  { nome: "EQUIPE LARISSA", pessoas: 10, foto: "https://randomuser.me/api/portraits/women/60.jpg", desempenho: 65 },
  { nome: "EQUIPE EDUARDO", pessoas: 12, foto: "https://randomuser.me/api/portraits/men/61.jpg", desempenho: 85 },
];

export default function ColaboradoresPage() {
  const [equipeSelecionada, setEquipeSelecionada] = useState<number | null>(0); // Inicia com a primeira equipe selecionada


  // Mock de detalhes para cada equipe (poderia ser um objeto separado, mas para exemplo, indexa pelo nome)
  const detalhesEquipes = [
    {
      desempenho: 80,
      concluidas: 90,
      pendentes: 10,
      total: 120,
      membros: [
        { nome: "Maria Souza", foto: "https://randomuser.me/api/portraits/women/50.jpg", pts: 980 },
        { nome: "João Pereira", foto: "https://randomuser.me/api/portraits/men/51.jpg", pts: 935 },
        { nome: "Ana Lima", foto: "https://randomuser.me/api/portraits/women/52.jpg", pts: 905 },
        { nome: "Diogo Jota", foto: "https://randomuser.me/api/portraits/men/53.jpg", pts: 860 },
        { nome: "Lucas Martins", foto: "https://randomuser.me/api/portraits/men/60.jpg", pts: 870 },
        { nome: "Fernanda Dias", foto: "https://randomuser.me/api/portraits/women/61.jpg", pts: 890 },
      ],
    },
    {
      desempenho: 60,
      concluidas: 70,
      pendentes: 30,
      total: 100,
      membros: [
        { nome: "Carlos Silva", foto: "https://randomuser.me/api/portraits/men/54.jpg", pts: 800 },
        { nome: "Paula Lima", foto: "https://randomuser.me/api/portraits/women/55.jpg", pts: 780 },
        { nome: "Rafael Costa", foto: "https://randomuser.me/api/portraits/men/62.jpg", pts: 810 },
        { nome: "Juliana Alves", foto: "https://randomuser.me/api/portraits/women/63.jpg", pts: 790 },
      ],
    },
    {
      desempenho: 90,
      concluidas: 110,
      pendentes: 12,
      total: 122,
      membros: [
        { nome: "Tânia Souza", foto: "https://randomuser.me/api/portraits/women/56.jpg", pts: 1000 },
        { nome: "Bruno Rocha", foto: "https://randomuser.me/api/portraits/men/64.jpg", pts: 950 },
        { nome: "Patrícia Melo", foto: "https://randomuser.me/api/portraits/women/65.jpg", pts: 920 },
        { nome: "Felipe Torres", foto: "https://randomuser.me/api/portraits/men/66.jpg", pts: 910 },
        { nome: "Amanda Reis", foto: "https://randomuser.me/api/portraits/women/67.jpg", pts: 940 },
      ],
    },
    {
      desempenho: 70,
      concluidas: 80,
      pendentes: 20,
      total: 100,
      membros: [
        { nome: "Marcos Paulo", foto: "https://randomuser.me/api/portraits/men/57.jpg", pts: 850 },
        { nome: "Sofia Nunes", foto: "https://randomuser.me/api/portraits/women/68.jpg", pts: 830 },
        { nome: "Ricardo Lopes", foto: "https://randomuser.me/api/portraits/men/69.jpg", pts: 820 },
        { nome: "Beatriz Ramos", foto: "https://randomuser.me/api/portraits/women/70.jpg", pts: 810 },
        { nome: "Gabriel Souza", foto: "https://randomuser.me/api/portraits/men/71.jpg", pts: 800 },
      ],
    },
    {
      desempenho: 50,
      concluidas: 60,
      pendentes: 60,
      total: 120,
      membros: [
        { nome: "Gabriela Lima", foto: "https://randomuser.me/api/portraits/women/58.jpg", pts: 700 },
        { nome: "Pedro Henrique", foto: "https://randomuser.me/api/portraits/men/72.jpg", pts: 720 },
        { nome: "Larissa Silva", foto: "https://randomuser.me/api/portraits/women/73.jpg", pts: 710 },
        { nome: "Vinícius Dias", foto: "https://randomuser.me/api/portraits/men/74.jpg", pts: 730 },
      ],
    },
    {
      desempenho: 75,
      concluidas: 90,
      pendentes: 30,
      total: 120,
      membros: [
        { nome: "Cleberson Souza", foto: "https://randomuser.me/api/portraits/men/59.jpg", pts: 900 },
        { nome: "Tatiane Moura", foto: "https://randomuser.me/api/portraits/women/75.jpg", pts: 880 },
        { nome: "Eduardo Lima", foto: "https://randomuser.me/api/portraits/men/76.jpg", pts: 860 },
        { nome: "Camila Rocha", foto: "https://randomuser.me/api/portraits/women/77.jpg", pts: 870 },
        { nome: "Roberto Alves", foto: "https://randomuser.me/api/portraits/men/78.jpg", pts: 850 },
      ],
    },
    {
      desempenho: 65,
      concluidas: 85,
      pendentes: 25,
      total: 110,
      membros: [
        { nome: "Larissa Costa", foto: "https://randomuser.me/api/portraits/women/79.jpg", pts: 800 },
        { nome: "Lucas Almeida", foto: "https://randomuser.me/api/portraits/men/80.jpg", pts: 820 },
        { nome: "Mariana Souza", foto: "https://randomuser.me/api/portraits/women/81.jpg", pts: 810 },
        { nome: "Thiago Silva", foto: "https://randomuser.me/api/portraits/men/82.jpg", pts: 830 },
        { nome: "Patrícia Gomes", foto: "https://randomuser.me/api/portraits/women/83.jpg", pts: 840 },
      ],
    },
    {
      desempenho: 85,
      concluidas: 100,
      pendentes: 15,
      total: 115,
      membros: [
        { nome: "Eduardo Martins", foto: "https://randomuser.me/api/portraits/men/84.jpg", pts: 950 },
        { nome: "Renata Dias", foto: "https://randomuser.me/api/portraits/women/85.jpg", pts: 940 },
        { nome: "Bruna Lima", foto: "https://randomuser.me/api/portraits/women/86.jpg", pts: 930 },
        { nome: "Felipe Souza", foto: "https://randomuser.me/api/portraits/men/87.jpg", pts: 920 },
        { nome: "Aline Torres", foto: "https://randomuser.me/api/portraits/women/88.jpg", pts: 910 },
        { nome: "Ricardo Ramos", foto: "https://randomuser.me/api/portraits/men/89.jpg", pts: 900 },
      ],
    },
  ];


  // Seleciona os detalhes da equipe selecionada
  const equipe = equipeSelecionada !== null ? equipesMock[equipeSelecionada] : null;
  const detalhesEquipe = equipeSelecionada !== null ? detalhesEquipes[equipeSelecionada] : null;
  const R = 46;
  const circunferencia = 2 * Math.PI * R;
  const offset = detalhesEquipe ? circunferencia - (detalhesEquipe.desempenho / 100) * circunferencia : 0;

  return (
    <>
      
        <style>{`
          @keyframes fadein { from { opacity: 0; } to { opacity: 1; } }
          @keyframes slideup { from { transform: translateY(40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
          .animate-fadein { animation: fadein 0.3s ease; }
          .animate-slideup { animation: slideup 0.4s cubic-bezier(.4,1.7,.6,1) 0.05s both; }
        `}</style>
        <div className="p-8">
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full max-w-6xl">
          {equipesMock.map((equipe, index) => (
            <div
              key={index}
              onClick={() => setEquipeSelecionada(index)}
              className="cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-xl rounded-2xl"
            >
              <EquipeCard
                nome={equipe.nome}
                pessoas={equipe.pessoas}
                foto={equipe.foto}
                desempenho={equipe.desempenho}
                selecionada={equipeSelecionada === index}
              />
            </div>
          ))}
        </div>
        {/* Overlay de detalhes da equipe selecionada */}
        {equipeSelecionada !== null && equipe && detalhesEquipe && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 overflow-y-auto animate-fadein">
            <div className="relative bg-[#663399] rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 w-full max-w-4xl mx-2 sm:mx-4 flex flex-col gap-6 sm:gap-8 border border-white/10 animate-slideup">
              {/* Botão fechar */}
              <button
                onClick={() => setEquipeSelecionada(null)}
                className="fixed top-4 right-4 sm:absolute sm:top-6 sm:right-6 text-white text-2xl font-bold bg-black/40 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/60 transition border-2 border-white shadow-lg"
                style={{ zIndex: 50 }}
                aria-label="Fechar"
              >×</button>
              <div className="flex flex-col-reverse lg:flex-row gap-6 sm:gap-8 items-center lg:items-start flex-wrap mt-0">
                {/* Gráfico circular e nome */}
                <div className="flex flex-col items-center gap-2 sm:gap-4 min-w-[140px] sm:min-w-[180px]">
                  <div className="relative">
                    <svg width="100" height="100" className="sm:hidden">
                      <circle cx="50" cy="50" r="44" stroke="#fff3" strokeWidth="8" fill="none" />
                      <circle
                        cx="50" cy="50" r="44"
                        stroke="#00e6ff"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={2 * Math.PI * 44}
                        strokeDashoffset={2 * Math.PI * 44 * (1 - detalhesEquipe.desempenho / 100)}
                        strokeLinecap="round"
                        style={{ transition: 'stroke-dashoffset 0.5s' }}
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                    <svg width="120" height="120" className="hidden sm:block">
                      <circle cx="60" cy="60" r="54" stroke="#fff3" strokeWidth="8" fill="none" />
                      <circle
                        cx="60" cy="60" r="54"
                        stroke="#00e6ff"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={2 * Math.PI * 54}
                        strokeDashoffset={2 * Math.PI * 54 * (1 - detalhesEquipe.desempenho / 100)}
                        strokeLinecap="round"
                        style={{ transition: 'stroke-dashoffset 0.5s' }}
                        transform="rotate(-90 60 60)"
                      />
                    </svg>
                    <span className="absolute text-white font-bold text-base sm:text-lg left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">EQUIPE</span>
                  </div>
                  <span className="text-white text-lg sm:text-xl font-bold mt-2 text-center">{equipe.nome}</span>
                  <div className="flex gap-2 sm:gap-4 mt-2 flex-wrap justify-center">
                    <span className="flex items-center gap-1 sm:gap-2 text-white/80 text-xs sm:text-sm"><span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#b388ff] inline-block"></span>Concluídas</span>
                    <span className="flex items-center gap-1 sm:gap-2 text-white/80 text-xs sm:text-sm"><span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#00e6ff] inline-block"></span>Pendentes</span>
                  </div>
                </div>
                {/* Membros e métricas */}
                <div className="flex-1 w-full min-w-[220px]">
                  <div className="grid grid-cols-1 gap-2 sm:gap-4">
                    {detalhesEquipe.membros.map((membro, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-white/10 rounded-lg p-2 sm:p-3">
                        <img src={membro.foto} alt={membro.nome} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white object-cover" />
                        <div className="flex-1 w-full">
                          <div className="text-white font-semibold text-sm sm:text-base text-center sm:text-left">{membro.nome}</div>
                          <div className="flex gap-2 sm:gap-4 mt-1 flex-wrap justify-center sm:justify-start">
                            {/* Gráficos circulares mockados */}
                            <div className="flex flex-col items-center">
                              <svg width="32" height="32" className="sm:hidden">
                                <circle cx="16" cy="16" r="12" stroke="#fff3" strokeWidth="4" fill="none" />
                                <circle cx="16" cy="16" r="12" stroke="#b388ff" strokeWidth="4" fill="none" strokeDasharray={2 * Math.PI * 12} strokeDashoffset={2 * Math.PI * 12 * 0.5} strokeLinecap="round" />
                              </svg>
                              <svg width="40" height="40" className="hidden sm:block">
                                <circle cx="20" cy="20" r="16" stroke="#fff3" strokeWidth="4" fill="none" />
                                <circle cx="20" cy="20" r="16" stroke="#b388ff" strokeWidth="4" fill="none" strokeDasharray={2 * Math.PI * 16} strokeDashoffset={2 * Math.PI * 16 * 0.5} strokeLinecap="round" />
                              </svg>
                              <span className="text-[9px] sm:text-[10px] text-white/80">50%</span>
                              <span className="text-[9px] sm:text-[10px] text-white/60">Concluído</span>
                            </div>
                            <div className="flex flex-col items-center">
                              <svg width="32" height="32" className="sm:hidden">
                                <circle cx="16" cy="16" r="12" stroke="#fff3" strokeWidth="4" fill="none" />
                                <circle cx="16" cy="16" r="12" stroke="#00e6ff" strokeWidth="4" fill="none" strokeDasharray={2 * Math.PI * 12} strokeDashoffset={2 * Math.PI * 12 * 0.3} strokeLinecap="round" />
                              </svg>
                              <svg width="40" height="40" className="hidden sm:block">
                                <circle cx="20" cy="20" r="16" stroke="#fff3" strokeWidth="4" fill="none" />
                                <circle cx="20" cy="20" r="16" stroke="#00e6ff" strokeWidth="4" fill="none" strokeDasharray={2 * Math.PI * 16} strokeDashoffset={2 * Math.PI * 16 * 0.3} strokeLinecap="round" />
                              </svg>
                              <span className="text-[9px] sm:text-[10px] text-white/80">70%</span>
                              <span className="text-[9px] sm:text-[10px] text-white/60">Engajamento</span>
                            </div>
                            <div className="flex flex-col items-center">
                              <svg width="32" height="32" className="sm:hidden">
                                <circle cx="16" cy="16" r="12" stroke="#fff3" strokeWidth="4" fill="none" />
                                <circle cx="16" cy="16" r="12" stroke="#fff" strokeWidth="4" fill="none" strokeDasharray={2 * Math.PI * 12} strokeDashoffset={2 * Math.PI * 12 * 0.2} strokeLinecap="round" />
                              </svg>
                              <svg width="40" height="40" className="hidden sm:block">
                                <circle cx="20" cy="20" r="16" stroke="#fff3" strokeWidth="4" fill="none" />
                                <circle cx="20" cy="20" r="16" stroke="#fff" strokeWidth="4" fill="none" strokeDasharray={2 * Math.PI * 16} strokeDashoffset={2 * Math.PI * 16 * 0.2} strokeLinecap="round" />
                              </svg>
                              <span className="text-[9px] sm:text-[10px] text-white/80">12/15</span>
                              <span className="text-[9px] sm:text-[10px] text-white/60">Tarefas feitas</span>
                            </div>
                          </div>
                        </div>
                        <span className="font-bold text-white text-base sm:text-lg ml-2">{membro.pts} pts</span>
                      </div>
                    ))}
                  </div>
                  {/* Cards de totais */}
                  <div className="flex flex-row gap-2 sm:gap-4 mt-4 sm:mt-8 justify-center items-center flex-wrap">
                    <div className="bg-white/90 rounded-lg p-3 sm:p-4 min-w-[90px] sm:min-w-[100px] text-center shadow">
                      <div className="text-gray-700 text-xs sm:text-sm">Total</div>
                      <div className="text-xl sm:text-2xl font-bold text-[#7b2ff2]">{detalhesEquipe.total}</div>
                    </div>
                    <div className="bg-white/90 rounded-lg p-3 sm:p-4 min-w-[90px] sm:min-w-[100px] text-center shadow">
                      <div className="text-gray-700 text-xs sm:text-sm">Concluídas</div>
                      <div className="text-xl sm:text-2xl font-bold text-[#b388ff]">{detalhesEquipe.concluidas}</div>
                    </div>
                    <div className="bg-white/90 rounded-lg p-3 sm:p-4 min-w-[90px] sm:min-w-[100px] text-center shadow">
                      <div className="text-gray-700 text-xs sm:text-sm">Pendentes</div>
                      <div className="text-xl sm:text-2xl font-bold text-[#00e6ff]">{detalhesEquipe.pendentes}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
}