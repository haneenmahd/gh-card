import { Dispatch, SetStateAction, createContext, useState } from "react";
import type { Graphic } from "@/lib/types";

export const EditorContext = createContext<{
    username: string;
    setUsername: Dispatch<SetStateAction<string>>;
    repo: string;
    setRepo: Dispatch<SetStateAction<string>>;
    graphic: Graphic;
    setGraphic: Dispatch<SetStateAction<Graphic>>;
} | null>(null);

export default function EditorProvider({ children }: { children: React.ReactNode }) {
    const [username, setUsername] = useState('');
    const [repo, setRepo] = useState('');
    const [graphic, setGraphic] = useState<Graphic>('blurred');

    return (
        <EditorContext.Provider value={{
            username,
            setUsername,
            repo,
            setRepo,
            graphic,
            setGraphic
        }}>
            {children}
        </EditorContext.Provider>
    )
}