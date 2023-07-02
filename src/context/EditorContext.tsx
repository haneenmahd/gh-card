import { Dispatch, SetStateAction, createContext, useState } from "react";
import type { Graphic, Repo } from "@/lib/types";

const EditorContext = createContext<{
    username: string;
    setUsername: Dispatch<SetStateAction<string>>;
    repo: string;
    setRepo: Dispatch<SetStateAction<string>>;
    graphic: Graphic;
    setGraphic: Dispatch<SetStateAction<Graphic>>;
    repoData: Repo;
    setRepoData: Dispatch<SetStateAction<Repo>>;
} | null>(null);

export default EditorContext;