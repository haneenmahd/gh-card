export interface RepoData {
    name: string
    description: string
    full_name: string
    owner: {
        login: string
        avatar_url: string
        html_url: string
    }
    stargazers_count: number
    watchers_count: number
    language: string
    forks_count: number
    open_issues_count: number
    topics: string[]
    license: {
        banner_url: string
    }
}