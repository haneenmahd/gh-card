import Image from "next/image";

interface SettingProps {
    label: string
    handleSelected: () => void;
}

/**
 * The way this works is that it has local state of selected and it also allows modifying any state in the upper tree.
 */
export default function Setting({ label, handleSelected }: SettingProps) {
    return (
        <div
            // className={`flex items-center justify-between border-b-[1px] last:border-b-0 p-3 transition-colors select-none ${selected ? 'bg-black hover:bg-black/90 text-gray-300 border-gray-700' : 'hover:bg-slate-100'}`}
            onClick={handleSelected}>
            <p>{label}</p>

            <Image
                height={18}
                width={18}
                src="data:image/svg+xml,%3csvg stroke-width='1.5' id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3e%3cdefs%3e%3cstyle%3e.cls-judrlayd7aszxcwxsgi3q-1%7bfill:none%3bstroke:%23969696FF%3bstroke-miterlimit:10%3b%3b%7d%3c/style%3e%3c/defs%3e%3ccircle class='cls-judrlayd7aszxcwxsgi3q-1' cx='12' cy='12' r='10.5'/%3e%3cpolyline class='cls-judrlayd7aszxcwxsgi3q-1' points='6.27 12 10.09 15.82 17.73 8.18'/%3e%3c/svg%3e"
                alt="Check mark"
            // className={`transition-transform ${selected ? 'scale-100' : 'scale-0'}`}
            />
        </div>
    )
}