import { GitBranch, GitHub, Pause, Play, Save, Share2 } from "react-feather"
import typography from "./typography"

const icons = {
    github: <GitHub size={typography.icon1} />,
    gitBranch: <GitBranch size={typography.icon1} />,
    save: <Save size={typography.icon1} />,
    share: <Share2 size={typography.icon1} />,
    play: <Play size={typography.icon1} />,
    pause: <Pause size={typography.icon1} />
}

export default icons