import { MouseEventHandler, RefObject } from "react"

export interface Repo {
  id: number
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

  currentRequestStatus: 'failed' | 'success';
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

export type Flow = 's-letter' | 'r-letter' | 'plus-levitated' | 'green-head';

// fixing type issues on forward ref
export type ForwardedRef = ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined;