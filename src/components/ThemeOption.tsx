'use client';

import type { LucideIcon } from 'lucide-react';
import type { ThemeSelection } from '@/lib/types';

interface ThemeOptionProps {
    icon: LucideIcon;
    name: ThemeSelection;
    selectedTheme: ThemeSelection;
    handleSelected: (state: ThemeSelection) => void;
}

export default function ThemeOption({ name, icon, selectedTheme, handleSelected }: ThemeOptionProps) {
    return (
        <div
            className={`rounded-full flex items-center justify-between border p-3 transition-colors select-none cursor-pointer ${selectedTheme === name ? 'bg-black hover:bg-black/90 text-gray-300 border-gray-700' : 'hover:bg-slate-100'}`}
            onClick={() => handleSelected(name)}>
            {icon({
                size: 14
            })}
        </div>
    )
}