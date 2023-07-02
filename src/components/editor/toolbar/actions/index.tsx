import styled from "styled-components";
import Action from "./Action";
import icons from "@/theme/icons";
import { saveToDisk, shareCard } from "@/lib/card";
import { useContext, useRef } from "react";
import EditorContext from "@/context/EditorContext";
import RepoCard from "../../repo-card";
import { Toaster as ToastProvider } from "react-hot-toast";
import { ForwardedRef } from "@/lib/types";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

interface ActionsProps { }

export default function Actions({ }: ActionsProps) {
    const cardRef = useRef<HTMLDivElement>();
    const { username, repo, graphic } = useContext(EditorContext)!;

    const handleSave = async () => {
        const cardHtmlContent = cardRef.current!;

        await saveToDisk(cardHtmlContent, { username, repo });
    }

    const handleShare = () => {
        const graphicType = graphic.indexOf("-") !== -1 ? graphic.substring(
            0,
            graphic.indexOf("-")
        ) : graphic;

        const flowType = graphic.indexOf("-") !== -1 ? graphic.substring(
            graphic.indexOf("-") + 1
        ) : '';

        shareCard({
            username,
            repo,
            graphicType: graphicType as any,
            flowType: flowType as any
        });
    }

    return (
        <div>
            <RepoCard ref={cardRef as ForwardedRef} exporting={true} />

            <Container>
                <Action
                    icon={icons.save}
                    action={handleSave}
                />

                <Action
                    icon={icons.share}
                    action={handleShare}
                />

                <Action
                    icon={icons.play}
                    action={() => { }}
                    disabled
                />

                <ToastProvider position="bottom-center" />
            </Container>
        </div>
    )
}