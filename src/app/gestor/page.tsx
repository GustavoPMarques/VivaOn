"use client";
import { useState } from "react";
import { Calendar, ClipboardList, BellDot } from "lucide-react";
import CardInfo from "./_components/CardInfo";

export default function GestorHome() {
  const [reunioes, setReunioes] = useState(3);
  const [tarefaPrazoAmanha, setTarefaPrazoAmanha] = useState(2);
  const [notificacao, setNotificacao] = useState(1);
  return (
    <div
      id="geral-div"
      className="w-full h-full flex flex-col items-center justify-center gap-5"
    >
      <p className="text-3xl font-bold">Olá, Gestor Alfredo!</p>
      <div id="quadros-div" className="flex flex-col w-full h-full gap-3">
        <div id="secao-1-div" className="flex w-full gap-3">
          {/*TODO: Componentizar esse card, facilita na criação dos outros cards 
              Props: header
              Resto do texto pode ser feito dentro do componente exportado
              Ex:
              <CardInfo header="Resumo do dia">
              abababbaba
              bebebebeb
              </CardInfo>
          */}
          <div
            id="resumo-do-dia-div"
            className="flex flex-col bg-white rounded-xl p-3 w-full text-gray-800"
          >
            <div className="w-full flex justify-center">
              <p className="text-xl font-bold">Resumo do Dia</p>
            </div>
            <CardInfo
              icon={Calendar}
              numero={reunioes}
              texto=" Reuniões Hoje"
            />
            <CardInfo
              icon={ClipboardList}
              numero={tarefaPrazoAmanha}
              texto=" Tarefas com prazo AMANHÃ"
            />
            <CardInfo
              icon={BellDot}
              numero={notificacao}
              texto=" Notificações não lidas"
            />
          </div>

          <div
            id="atalhos-rapidos-div"
            className="flex flex-col bg-white rounded-xl p-3 w-full"
          >
            Atalhos Rápidos
          </div>
        </div>

        <div id="secao-2-div" className="flex w-full gap-3">
          <div
            id="indicadores-pessoais-div"
            className="flex flex-col bg-white rounded-xl p-3 w-full"
          >
            Indicadores Pessoais
          </div>
          <div
            id="agenda-interna-div"
            className="flex flex-col bg-white rounded-xl p-3 w-full"
          >
            Agenda Interna
          </div>
        </div>
      </div>
    </div>
  );
}
