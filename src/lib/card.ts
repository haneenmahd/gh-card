import html2canvas from "html2canvas";
import { Flow, Graphic } from "./types";
import presentToast from "@/components/toast";

export const saveToDisk = async (element: HTMLElement, { username, repo }: { username: string, repo: string }) => {
    const canvas = await html2canvas(element, { scale: 4, logging: false });
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
 * Animations are already displayed in the webpage. There is no customisation available
 * for animations right now. We will add this later.
 * 
 * The cards will be interactive and 3D have effects.
 */
export const shareCard = ({ username, repo, graphicType, flowType }: CardSharingOptions) => {
    const baseUrl = 'https://gh-card.vercel.app/shared';
    const url = new URL(baseUrl);
    url.searchParams.set('username', username);
    url.searchParams.set('repo', repo);
    url.searchParams.set('graphicType', graphicType);
    url.searchParams.set('flowType', flowType);

    copyLinkToClipboard(url.toString());
}

export const copyLinkToClipboard = async (link: string) => {
    await navigator.clipboard.writeText(link);

    presentToast('Copied URL to clipboard');
}