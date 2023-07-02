import { Repo } from "@/lib/types";

export async function fetchRepo(username: string, repo: string) {
    const response = await fetch(`https://api.github.com/repos/${username}/${repo}`);

    return response.json() as Promise<Repo>;
}