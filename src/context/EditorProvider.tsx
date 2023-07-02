import { useState } from "react";
import EditorContext from "./EditorContext";
import type { Graphic, Repo } from "@/lib/types";

export default function EditorProvider({ children }: { children: React.ReactNode }) {
    const [username, setUsername] = useState('');
    const [repo, setRepo] = useState('');
    const [graphic, setGraphic] = useState<Graphic>('basic');
    const [repoData, setRepoData] = useState<Repo>({
        id: 0,
        name: "next.js",
        full_name: "vercel/next.js",
        owner: {
            login: "vercel",
            avatar_url: "https://avatars.githubusercontent.com/u/14985020?v=4",
            html_url: "https://github.com/vercel",
        },
        description: "The React Framework",
        stargazers_count: 108223,
        language: "JavaScript",
        currentRequestStatus: "success"
    })

    return (
        <EditorContext.Provider value={{
            username,
            setUsername,
            repo,
            setRepo,
            graphic,
            setGraphic,
            repoData,
            setRepoData
        }}>
            {children}
        </EditorContext.Provider>
    )
}