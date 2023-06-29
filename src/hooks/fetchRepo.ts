import { Repo } from "@/lib/types";

export default async function fetchRepo(username: string, repo: string) {
    const response = await fetch(`https://api.github.com/repos/${username}/${repo}`);

    return response.json() as Promise<Repo>;
}