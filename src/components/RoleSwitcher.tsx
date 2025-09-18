
"use client";
import { useRouter, usePathname } from "next/navigation";

import { useState } from "react";
import { Menu } from "lucide-react";

const roles = [
	{ label: "COLABORADOR", path: "/novo-colaborador/perfil" },
	{ label: "GESTOR", path: "/gestor" },
	{ label: "BUDDY", path: "/buddy/cursos" },
];

export default function RoleSwitcher() {
	const router = useRouter();
	const pathname = usePathname();
	const [menuOpen, setMenuOpen] = useState(false);

	// Detect current role by path
	const getActiveRole = () => {
		if (pathname.startsWith("/novo-colaborador")) return "COLABORADOR";
		if (pathname.startsWith("/gestor")) return "GESTOR";
		if (pathname.startsWith("/buddy")) return "BUDDY";
		return "";
	};
	const activeRole = getActiveRole();

	return (
		<>
			{/* Desktop */}
			<div className="hidden sm:flex gap-2 w-full sm:w-auto justify-center overflow-x-auto scrollbar-thin scrollbar-thumb-[#e0d6f7]">
				{roles.map((role) => (
					<button
						key={role.label}
						onClick={() => router.push(role.path)}
						className={`px-4 sm:px-6 py-2 rounded-full font-semibold whitespace-nowrap shadow transition-colors duration-200
							${activeRole === role.label ? "bg-[#663399] text-white" : "border border-[#663399] text-[#663399] bg-white hover:bg-[#ede9f7] hover:text-[#512a8a] hover:shadow-lg"}
						`}
						aria-current={activeRole === role.label ? "page" : undefined}
					>
						{role.label}
					</button>
				))}
			</div>
			{/* Mobile Hamburger */}
					<div className="sm:hidden flex items-center relative">
												<button
													className="p-2 rounded outline-none"
													onClick={() => setMenuOpen((v) => !v)}
													aria-label="Abrir menu de perfis"
												>
													<Menu size={28} color="#663399" />
												</button>
										{menuOpen && (
											<div className="absolute top-full left-0 w-[220px] bg-white shadow-lg rounded-b z-20 animate-fade-in flex flex-col items-center py-4 gap-3 border border-[#e0d6f7] mt-2">
								{roles.map((role) => (
									<button
										key={role.label}
										onClick={() => {
											setMenuOpen(false);
											router.push(role.path);
										}}
										className={`w-11/12 px-6 py-2 rounded-full font-semibold shadow transition-colors duration-200
											${activeRole === role.label ? "bg-[#663399] text-white" : "border border-[#663399] text-[#663399] bg-white hover:bg-[#ede9f7] hover:text-[#512a8a] hover:shadow-lg"}
										`}
										aria-current={activeRole === role.label ? "page" : undefined}
									>
										{role.label}
									</button>
								))}
							</div>
						)}
					</div>
		</>
	);
}
