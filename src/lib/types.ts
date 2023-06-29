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
  language: string
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

export type Graphic = 'basic' | 'flow-s-letter' | 'flow-r-letter' | 'flow-plus-levitated' | 'flow-green-head' | 'grid' | 'rectangles';