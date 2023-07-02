import colors from "@/theme/colors";
import styled, { css } from "styled-components";
import Reject from "@/animations/Reject";

const Container = styled.div<{ disabled?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${({ disabled }) => disabled && css`
    opacity: 0.5;

    * {
        cursor: not-allowed;

        &:active {
            animation: ${Reject} 250ms ease;
        }
    }
    `}
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 30px;
    border: none;
    background: ${colors.basic.white};
    border: 1px solid ${colors.text.quarternary}40;
    box-shadow: 0 2px 4px 0 ${colors.text.quarternary}10;
    transition: opacity 200ms, box-shadow 150ms, scale 120ms;

    svg {
        fill: ${colors.basic.black};
    }

    &:hover {
        scale: 0.9;
    }

    &:active {
        scale: 0.95;
        box-shadow: 0 1px 0 0 ${colors.text.quarternary}40;
    }
`;

interface ActionProps {
    icon: JSX.Element;
    action: () => void;
    disabled?: boolean;
}

export default function Action({ icon, action, disabled }: ActionProps) {
    return (
        <Container disabled={disabled}>
            <Button onClick={action}>{icon}</Button>
        </Container>
    )
}