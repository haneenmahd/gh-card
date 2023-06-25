import { MouseEventHandler } from "react"

export interface Repo {
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

export interface Theme {
  text: {
    repoName: string
    repoDescription: string
    author: string
    stars: string
    forks: string
    issues: string
  }
  background: {
    container: string
    card: string
  }
}

export type ThemeSelection = "Light" | "Dark";

export type Action = MouseEventHandler;