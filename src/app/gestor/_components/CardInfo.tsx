interface CardInfoProps {
  icon: React.ElementType;
  numero: number;
  texto: string;
}

const CardInfo = ({ icon: Icon, numero, texto }: CardInfoProps) => {
  return (
    <div className="flex gap-3 items-center p-3  text-lg font-semibold">
      <Icon className="text-[var(--cor-vivo)]" />
      <p>
        {numero} {texto}
      </p>
    </div>
  );
};

export default CardInfo;
