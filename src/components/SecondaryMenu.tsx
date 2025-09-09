"use client";
import { useRouter, usePathname } from "next/navigation";

interface MenuItem {
  label: string;
  path: string;
}

interface SecondaryMenuProps {
  items: MenuItem[];
  className?: string;
}

export default function SecondaryMenu({ items, className = "" }: SecondaryMenuProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className={`w-full border-b border-[#d1cbe6] bg-[#f5f3fa] flex justify-center ${className}`}>
      <nav className="grid grid-cols-2 sm:flex w-full max-w-4xl items-center justify-center gap-2 sm:gap-4 px-2 sm:px-0 py-2">
        {items.map((item) => (
          <button
            key={item.path}
            onClick={() => router.push(item.path)}
            className={`flex items-center gap-2 px-4 py-1.5 sm:px-6 sm:py-2 rounded-full font-semibold transition-colors duration-200 whitespace-nowrap shadow-sm
              ${pathname === item.path ? 'bg-[#4b0fa6] text-white' : 'text-[#1a1a2e] bg-white hover:bg-[#ede9f7]'}
            `}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
