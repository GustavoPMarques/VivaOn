

import NavBar from "@/components/NavBar";
import SecondaryMenu from "@/components/SecondaryMenu";
import RoleSwitcher from "@/components/RoleSwitcher";

const secondaryMenuItems = [
	{ label: "PERFIL", path: "/novo-colaborador/perfil" },
	{ label: "CURSOS", path: "/novo-colaborador/cursos" },
	{ label: "INFORMAÇÕES", path: "/novo-colaborador/informacoes" },
	{ label: "RANKING", path: "/novo-colaborador/ranking" },
];

export default function NovoColaboradorLayout({ children }: { children: React.ReactNode }) {
		return (
			<div className="min-h-screen bg-[#f5f3fa]">
				<NavBar />
				<RoleSwitcher />
				<SecondaryMenu items={secondaryMenuItems} />
				<main className="max-w-6xl mx-auto w-full px-2 sm:px-8 py-6">{children}</main>
			</div>
		);
}
