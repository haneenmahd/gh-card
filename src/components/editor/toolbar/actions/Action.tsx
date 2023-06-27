import colors from "@/theme/colors";
import { fontWeight } from "@/theme/font";
import styled from "styled-components";

const Container = styled.div<{ disabled?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${({ disabled }) => disabled && `opacity: 0.5;`}

    &:hover {
        label {
            bottom: 0;
            opacity: 1;
            scale: 1;
        }
    }
`;

const Label = styled.label`
    display: none;
    position: relative;
    bottom: -30px;
    opacity: 0;
    scale: 0.8;
    font-size: 16px;
    color: ${colors.text.secondary};
    font-weight: ${fontWeight('350')};
    transition: all 0.2s ease-in-out;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 8px;
    border: none;
    background: ${colors.text.primary};
    color: ${colors.basic.white};
    box-shadow: 0 4px 0 0 ${colors.text.secondary};
    transition: opacity 200ms, box-shadow 150ms, scale 120ms;

    &:hover {
        opacity: 0.9;
    }

    &:active {
        scale: 0.95;
        box-shadow: 0 1px 0 0 ${colors.text.tertiary};
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