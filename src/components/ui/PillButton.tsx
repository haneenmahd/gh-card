import styled from 'styled-components';
import colors from '@/theme/colors';
import type { FC, MouseEventHandler } from 'react';
import { fontWeight } from '@/theme/font';

const Container = styled.button`
    height: 50px;
    width: fit-content;
    display: flex;
    align-items: center;
    padding: 5px 25px;
    gap: 10px;
    margin: 10px 0;
    border-radius: 50px;
    font-weight: ${fontWeight('600')};
    color: ${colors.basic.white};
    background: ${colors.background.cta};
    transition: 200ms;

    @media (hover: hover) {
        &:hover {
            transform: translateY(-2px);
        }
    }

    &:active {
        scale: 0.98;
    }

    &:disabled {
        opacity: 0.5;
    }
`;

interface PillButtonProps {
    label: string;
    action: MouseEventHandler<HTMLButtonElement>;
    icon?: JSX.Element;
    disabled?: boolean;
}

const PillButton: FC<PillButtonProps> = ({ label, action, disabled, icon }) => {
    return (
        <Container
            onClick={action}
            disabled={disabled}>
            {icon && icon}

            {label}
        </Container>
    );
}

export default PillButton
