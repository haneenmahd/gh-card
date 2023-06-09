'use client';

import { LucideIcon } from 'lucide-react';
import { useEffect, useState } from "react";

interface SettingProps {
    icon: LucideIcon;
    handleSelected: (state: boolean) => void;
}

export default function Setting({ icon, handleSelected }: SettingProps) {
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        handleSelected(selected);
    }, [selected, handleSelected]);

    return (
        <div
            className={`flex items-center justify-between border-r-[1px] last:border-r-0 p-3 transition-colors select-none cursor-pointer ${selected ? 'bg-black hover:bg-black/90 text-gray-300 border-gray-700' : 'hover:bg-slate-100'}`}
            onClick={() => setSelected(!selected)}>
            {icon({
                size: 14
            })}
        </div>
    )
}