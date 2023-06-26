import styled from "styled-components";
import Action from "./Action";
import icons from "@/theme/icons";

const Container = styled.div`
    display: flex;
    gap: 10px;
`;

interface ActionsProps {
    exportAction: () => void;
    shareAction: () => void;
    animateAction: () => void;
}

export default function Actions({ exportAction, shareAction, animateAction }: ActionsProps) {
    return (
        <Container>
            <Action
                label="Export"
                icon={icons.save}
                action={exportAction}
            />

            <Action
                label="Share"
                icon={icons.share}
                action={shareAction}
            />

            <Action
                label="Animate"
                icon={icons.play}
                action={animateAction}
            />
        </Container>
    )
}