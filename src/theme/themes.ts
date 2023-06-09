import { Theme, ThemeSelection } from "@/lib/types"

const Themes: Record<string, Theme> = {
  Light: {
    text: {
      author: 'text-black',
      repoName: 'text-black',
      repoDescription: 'text-slate-400',
      stars: 'text-yellow-600',
      forks: 'text-zinc-500',
      issues: 'text-zinc-400'
    },
    background: {
      container: 'bg-slate-50',
      card: 'from-white to-slate-50'
    }
  },
  Dark: {
    text: {
      author: 'text-white',
      repoName: 'text-white',
      repoDescription: 'text-white/70',
      stars: 'text-yellow-600',
      forks: 'text-white/60',
      issues: 'text-white/60'
    },
    background: {
      container: 'bg-black',
      card: 'from-black to-white'
    }
  }
};

const themeSelection = (selection: ThemeSelection) => {
  const theme = Themes[selection];

  if (!theme) {
    return Themes['Light'];
  }

  return theme;
}

export default themeSelection;