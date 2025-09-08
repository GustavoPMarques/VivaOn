
"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function NovoColaboradorLayout({ children }: { children: React.ReactNode }) {
	const [nome, setNome] = useState<string>("");
	const [menuOpen, setMenuOpen] = useState(false);
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		const nomeSalvo = localStorage.getItem("nomeUsuario") || "";
		setNome(nomeSalvo);
	}, []);

	return (
		<div className="min-h-screen bg-[#f5f3fa]">
			<nav className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 px-4 sm:px-8 py-3 bg-[#f5f3fa] shadow-sm w-full relative">
				<div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-between sm:justify-start">
					<div className="flex items-center gap-2 sm:gap-4">
												<span
													className="text-[32px] sm:text-[40px] font-extrabold text-[#663399] leading-none cursor-pointer transition-colors duration-200 hover:text-[#4b2178] focus:text-[#4b2178]"
													onClick={() => router.push("/")}
													tabIndex={0}
													role="button"
													aria-label="Voltar para a página inicial"
												>
													vivo
												</span>

					</div>
					{/* Menu hamburguer para mobile */}
					<button
						className="sm:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#663399]"
						onClick={() => setMenuOpen((v) => !v)}
						aria-label="Abrir menu"
					>
						<svg width="28" height="28" fill="#663399" viewBox="0 0 24 24">
							<rect y="4" width="24" height="3" rx="1.5" />
							<rect y="10.5" width="24" height="3" rx="1.5" />
							<rect y="17" width="24" height="3" rx="1.5" />
						</svg>
					</button>
				</div>
				{/* Menu normal em telas grandes */}
				<div className="hidden sm:flex gap-2 w-full sm:w-auto justify-center overflow-x-auto scrollbar-thin scrollbar-thumb-[#e0d6f7] pb-1">
					<button className="bg-[#663399] text-white px-4 sm:px-6 py-2 rounded-full font-semibold shadow whitespace-nowrap transition-colors duration-200 hover:bg-[#512a8a] hover:shadow-lg">COLABORADOR</button>
					<button className="border border-[#663399] text-[#663399] px-4 sm:px-6 py-2 rounded-full font-semibold bg-white whitespace-nowrap transition-colors duration-200 hover:bg-[#ede9f7] hover:text-[#512a8a] hover:shadow-lg">GESTOR</button>
					<button className="border border-[#663399] text-[#663399] px-4 sm:px-6 py-2 rounded-full font-semibold bg-white whitespace-nowrap transition-colors duration-200 hover:bg-[#ede9f7] hover:text-[#512a8a] hover:shadow-lg">BUDDY</button>
				</div>
				<div className="hidden sm:block text-[#663399] font-semibold text-base sm:text-lg w-full sm:w-auto text-center sm:text-right">
					Olá, {nome || "usuário"}
				</div>
				{/* Menu mobile dropdown */}
				{menuOpen && (
					<div className="sm:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b z-20 animate-fade-in flex flex-col items-center py-4 gap-3">
						<button className="bg-[#663399] text-white px-6 py-2 rounded-full font-semibold shadow w-11/12 transition-colors duration-200 hover:bg-[#512a8a] hover:shadow-lg">COLABORADOR</button>
						<button className="border border-[#663399] text-[#663399] px-6 py-2 rounded-full font-semibold bg-white w-11/12 transition-colors duration-200 hover:bg-[#ede9f7] hover:text-[#512a8a] hover:shadow-lg">GESTOR</button>
						<button className="border border-[#663399] text-[#663399] px-6 py-2 rounded-full font-semibold bg-white w-11/12 transition-colors duration-200 hover:bg-[#ede9f7] hover:text-[#512a8a] hover:shadow-lg">BUDDY</button>
						<div className="text-[#663399] font-semibold text-base text-center w-full pt-2">Olá, {nome || "usuário"}</div>
					</div>
				)}
			</nav>
									{/* Menu secundário */}
												<div className="w-full border-b border-[#d1cbe6] bg-[#f5f3fa] flex justify-center">
														<nav
															  className="grid grid-cols-2 sm:flex w-full max-w-4xl items-center justify-center gap-2 sm:gap-4 px-2 sm:px-0 py-2"
														>
																<button
												onClick={() => router.push('/novo-colaborador/perfil')}
												className={`flex items-center gap-2 px-4 py-1.5 sm:px-6 sm:py-2 rounded-full font-semibold transition-colors duration-200 whitespace-nowrap shadow-sm
													${pathname === '/novo-colaborador/perfil' ? 'bg-[#4b0fa6] text-white' : 'text-[#1a1a2e] bg-white hover:bg-[#ede9f7]'}
												`}
											>
												<svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.5-1.8 4.5-4.5S14.7 3 12 3 7.5 4.8 7.5 7.5 9.3 12 12 12zm0 1.5c-3 0-9 1.5-9 4.5V21h18v-3c0-3-6-4.5-9-4.5z" fill="#fff"/></svg>
												PERFIL
											</button>
											<button
												onClick={() => router.push('/novo-colaborador/cursos')}
												className={`flex items-center gap-2 px-4 py-1.5 sm:px-6 sm:py-2 rounded-full font-semibold transition-colors duration-200 whitespace-nowrap shadow-sm
													${pathname === '/novo-colaborador/cursos' ? 'bg-[#4b0fa6] text-white' : 'text-[#1a1a2e] bg-white hover:bg-[#ede9f7]'}
												`}
											>
												<svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="2" stroke="#1a1a2e" strokeWidth="2"/><text x="6" y="16" fontSize="7" fill="#1a1a2e">VOD</text></svg>
												CURSOS
											</button>
											<button
												onClick={() => router.push('/novo-colaborador/informacoes')}
												className={`flex items-center gap-2 px-4 py-1.5 sm:px-6 sm:py-2 rounded-full font-semibold transition-colors duration-200 whitespace-nowrap shadow-sm
													${pathname === '/novo-colaborador/informacoes' ? 'bg-[#4b0fa6] text-white' : 'text-[#1a1a2e] bg-white hover:bg-[#ede9f7]'}
												`}
											>
												<svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#1a1a2e" strokeWidth="2"/><text x="9" y="16" fontSize="12" fill="#1a1a2e">i</text></svg>
												INFORMAÇÕES
											</button>
											<button
												onClick={() => router.push('/novo-colaborador/ranking')}
												className={`flex items-center gap-2 px-4 py-1.5 sm:px-6 sm:py-2 rounded-full font-semibold transition-colors duration-200 whitespace-nowrap shadow-sm
													${pathname === '/novo-colaborador/ranking' ? 'bg-[#4b0fa6] text-white' : 'text-[#1a1a2e] bg-white hover:bg-[#ede9f7]'}
												`}
											>
												<svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="17" cy="7" r="2" stroke="#1a1a2e" strokeWidth="2"/><path d="M17 9v8M7 21v-4a4 4 0 014-4h2a4 4 0 014 4v4" stroke="#1a1a2e" strokeWidth="2"/><circle cx="7" cy="7" r="2" stroke="#1a1a2e" strokeWidth="2"/></svg>
												RANKING
											</button>
										</nav>
									</div>
						<main className="max-w-6xl mx-auto w-full px-2 sm:px-8 py-6">{children}</main>
		</div>
	);
}
