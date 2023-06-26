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
    margin-top: 10px;
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
    transition: box-shadow 200ms;

    &:hover {
        box-shadow: 0 3px 0 0 ${colors.text.tertiary};
    }

    &:active {
        scale: 0.98;
    }
`;

interface ActionProps {
    label: string;
    icon: JSX.Element;
    action: () => void;
    disabled?: boolean;
}

export default function Action({ label, icon, action, disabled }: ActionProps) {
    const buttonId = `action-btn-${label}`;

    return (
        <Container disabled={disabled}>
            <Label htmlFor={buttonId}>{label}</Label>

            <Button id={buttonId} onClick={action}>{icon}</Button>
        </Container>
    )
}