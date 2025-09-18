const equipesMock = [
  { nome: "Equipe 1", membros: 7, tarefas: 8 },
  { nome: "Equipe 2", membros: 7, tarefas: 8 },
  { nome: "Equipe 3", membros: 7, tarefas: 8 },
];

export default function BuddyEquipes() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#f5f5fa] p-4">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start justify-center">
        {/* Equipes */}
        <div className="flex flex-row md:flex-col gap-6 flex-1 justify-center md:justify-start">
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            {equipesMock.map((equipe, idx) => (
              <div key={idx} className="bg-white rounded-xl flex flex-col items-center p-6 shadow border border-[#ede9f7] min-w-[180px] max-w-[220px] w-full">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="#660099" className="mb-2">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05C15.64 13.36 17 14.28 17 15.5V19h7v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
                <div className="text-gray-700 text-sm mb-1">{equipe.membros} membros</div>
                <div className="text-gray-400 text-xs mb-2">{equipe.tarefas} tarefas ativas</div>
                <button className="text-[#660099] font-semibold text-sm hover:underline">Ver Detalhes</button>
              </div>
            ))}
          </div>
        </div>
        {/* Atalhos rápidos */}
        <div className="flex flex-col gap-4 w-full max-w-xs mt-8 md:mt-0">
          <h2 className="font-bold text-lg mb-2 text-black">Atalhos Rápidos</h2>
          <button className="bg-[#660099] text-white font-bold py-2 rounded mb-1 hover:bg-[#512b7e] transition">+Nova equipe</button>
          <button className="bg-[#660099] text-white font-bold py-2 rounded mb-1 hover:bg-[#512b7e] transition">+Membro</button>
          <button className="bg-[#660099] text-white font-bold py-2 rounded hover:bg-[#512b7e] transition">Relatório</button>
        </div>
      </div>
    </div>
  );
}
