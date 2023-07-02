import styled from "styled-components";
import Action from "./Action";
import icons from "@/theme/icons";
import { saveToDisk } from "@/lib/card";
import { useContext, useRef } from "react";
import EditorContext from "@/context/EditorContext";
import RepoCard from "../../repo-card";
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
    const { username, repo } = useContext(EditorContext)!;

    const handleSave = async () => {
        const cardHtmlContent = cardRef.current!;

        await saveToDisk(cardHtmlContent, { username, repo });
    }

    return (
        <>
            <RepoCard ref={cardRef as ForwardedRef} exporting={true} />

            <Container>
                <Action
                    icon={icons.save}
                    action={handleSave}
                />

                <Action
                    icon={icons.share}
                    action={console.log}
                />

                <Action
                    icon={icons.play}
                    action={console.log}
                    disabled
                />
            </Container>
        </>
    )
}