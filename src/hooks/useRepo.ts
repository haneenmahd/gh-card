import useSWR from "swr";
import { RepoData } from "@/lib/types";

const fetcher = (...args: any) => fetch(args).then(res => res.json());

export default function useRepo(username: string, repo: string) {
    const response = useSWR<RepoData, Error>(`https://api.github.com/repos/${username}/${repo}`, fetcher)

    return response;
}