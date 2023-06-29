import html2canvas from "html2canvas"
import { Flow, Graphic } from "./types";

export const saveToDisk = async (element: HTMLElement, { username, repo }: { username: string, repo: string }) => {
    const canvas = await html2canvas(element);
    const image = canvas.toDataURL("image/png");

    const link = document.createElement('a');
    link.href = image;
    link.download = `${username}/${repo}.png`;
    link.click();
}

interface CardSharingOptions {
    username: string
    repo: string
    graphicType: Graphic
    flowType: Flow
}

/**
 * Consumes the data and provides a unique link that forwards them to the direct card
 */
export const shareCard = async ({ username, repo, graphicType, flowType }: CardSharingOptions) => {
    const baseUrl = 'https://gh-card.vercel.app';
    const url = new URL(baseUrl);
    url.searchParams.set('username', username);
    url.searchParams.set('repo', repo);
    url.searchParams.set('graphicType', graphicType);
    url.searchParams.set('flowType', flowType);

    return url;
}