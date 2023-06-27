import styled from "styled-components";
import Action from "./Action";
import icons from "@/theme/icons";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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
                icon={icons.save}
                action={exportAction}
            />

            <Action
                icon={icons.share}
                action={shareAction}
            />

            <Action
                icon={icons.play}
                action={animateAction}
            />
        </Container>
    )
}