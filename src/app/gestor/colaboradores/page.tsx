"use client";
import EquipeCard, { Equipe } from "./EquipeCard";

const equipesMock: Equipe[] = [
  {
    nome: "EQUIPE FERNANDO",
    pessoas: 7,
    foto: "https://randomuser.me/api/portraits/men/32.jpg",
    desempenho: 80,
    detalhes: {
      desempenho: 80,
      concluidas: 90,
      pendentes: 10,
      total: 120,
      membros: [
        {
          nome: "Maria Souza",
          foto: "https://randomuser.me/api/portraits/women/50.jpg",
          pts: 980,
        },
        {
          nome: "João Pereira",
          foto: "https://randomuser.me/api/portraits/men/51.jpg",
          pts: 935,
        },
        {
          nome: "Ana Lima",
          foto: "https://randomuser.me/api/portraits/women/52.jpg",
          pts: 905,
        },
        {
          nome: "Diogo Jota",
          foto: "https://randomuser.me/api/portraits/men/53.jpg",
          pts: 860,
        },
        {
          nome: "Lucas Martins",
          foto: "https://randomuser.me/api/portraits/men/60.jpg",
          pts: 870,
        },
        {
          nome: "Fernanda Dias",
          foto: "https://randomuser.me/api/portraits/women/61.jpg",
          pts: 890,
        },
      ],
    },
  },
  {
    nome: "EQUIPE HENRIQUE",
    pessoas: 9,
    foto: "https://randomuser.me/api/portraits/men/33.jpg",
    desempenho: 60,
    detalhes: {
      desempenho: 60,
      concluidas: 70,
      pendentes: 30,
      total: 100,
      membros: [
        {
          nome: "Carlos Silva",
          foto: "https://randomuser.me/api/portraits/men/54.jpg",
          pts: 800,
        },
        {
          nome: "Paula Lima",
          foto: "https://randomuser.me/api/portraits/women/55.jpg",
          pts: 780,
        },
        {
          nome: "Rafael Costa",
          foto: "https://randomuser.me/api/portraits/men/62.jpg",
          pts: 810,
        },
        {
          nome: "Juliana Alves",
          foto: "https://randomuser.me/api/portraits/women/63.jpg",
          pts: 790,
        },
      ],
    },
  },
  {
    nome: "EQUIPE RENATO",
    pessoas: 8,
    foto: "https://randomuser.me/api/portraits/men/90.jpg",
    desempenho: 78,
    detalhes: {
      desempenho: 78,
      concluidas: 88,
      pendentes: 12,
      total: 120,
      membros: [
        {
          nome: "Renato Silva",
          foto: "https://randomuser.me/api/portraits/men/91.jpg",
          pts: 870,
        },
        {
          nome: "Mariana Castro",
          foto: "https://randomuser.me/api/portraits/women/92.jpg",
          pts: 860,
        },
        {
          nome: "Victor Hugo",
          foto: "https://randomuser.me/api/portraits/men/93.jpg",
          pts: 850,
        },
        {
          nome: "Patrícia Rocha",
          foto: "https://randomuser.me/api/portraits/women/94.jpg",
          pts: 845,
        },
      ],
    },
  },
  {
    nome: "EQUIPE CLARA",
    pessoas: 6,
    foto: "https://randomuser.me/api/portraits/women/95.jpg",
    desempenho: 82,
    detalhes: {
      desempenho: 82,
      concluidas: 95,
      pendentes: 18,
      total: 113,
      membros: [
        {
          nome: "Clara Souza",
          foto: "https://randomuser.me/api/portraits/women/96.jpg",
          pts: 910,
        },
        {
          nome: "Lucas Pereira",
          foto: "https://randomuser.me/api/portraits/men/97.jpg",
          pts: 900,
        },
        {
          nome: "Julia Martins",
          foto: "https://randomuser.me/api/portraits/women/98.jpg",
          pts: 890,
        },
      ],
    },
  },
  {
    nome: "EQUIPE FELIPE",
    pessoas: 7,
    foto: "https://randomuser.me/api/portraits/men/99.jpg",
    desempenho: 69,
    detalhes: {
      desempenho: 69,
      concluidas: 75,
      pendentes: 33,
      total: 108,
      membros: [
        {
          nome: "Felipe Torres",
          foto: "https://randomuser.me/api/portraits/men/71.jpg",
          pts: 850,
        },
        {
          nome: "Amanda Lima",
          foto: "https://randomuser.me/api/portraits/women/28.jpg",
          pts: 830,
        },
        {
          nome: "Bruno Costa",
          foto: "https://randomuser.me/api/portraits/men/25.jpg",
          pts: 820,
        },
      ],
    },
  },
];

export default function ColaboradoresPage() {
  return (
    <div className="p-8">
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full max-w-6xl">
          {equipesMock.map((equipe, index) => (
            <EquipeCard key={index} equipe={equipe} />
          ))}
        </div>
      </div>
    </div>
  );
}
