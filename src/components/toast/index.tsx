import { toast } from "react-hot-toast";

const presentToast = (message: string) => {
    toast.custom((t) => (
        <div
            className={`
            ${t.visible ? 'animate-enter' : 'animate-exit scale-[0.9] opacity-0 transition-opacity'} 
            max-w-xs w-full bg-white shadow-lg rounded-full pointer-events-auto flex ring-1 ring-black ring-opacity-5 overflow-hidden`}>
            <div className="flex-1 w-0 p-2">
                <div className="flex items-start">
                    <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-gray-900">
                            {message}
                        </p>
                    </div>
                </div>
            </div>
            <div className="rounded-full m-1 flex border-l border-gray-200 bg-black hover:bg-black/70 transition-colors">
                <button
                    onClick={() => toast.dismiss(t.id)}
                    className="w-full border border-transparent rounded-none rounded-r-lg py-1 px-2 flex items-center justify-center text-sm font-medium text-white hover:text-white/90"
                >
                    Close
                </button>
            </div>
        </div>
    ))
}

export default presentToast;