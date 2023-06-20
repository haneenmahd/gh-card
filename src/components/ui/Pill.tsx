import styled from 'styled-components'
import type { FC } from 'react'
import typography from '@/theme/typography';
import colors from '@/theme/colors';
import { Action } from '@/lib/types';

const Container = styled.button`
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px 4px 4px;
    gap: 5px;
    height: 23px;

    border: 2px solid #1B1F23;
    border-radius: 35px;
    
    &:hover {
        color: ${colors.basic.white};
        background: ${colors.text.primary};
    }
`;

const Label = styled.div.attrs({
    role: 'navigation'
})`
    font-size: ${typography.label3};
`;

interface PillProps {
    icon: JSX.Element;
    label: string;
    action: Action;
}

const Pill: FC<PillProps> = ({ icon, label, action }) => {
    return (
        <Container onClick={action}>
            {icon}

            <Label>{label}</Label>
        </Container>
    )
}

export default Pill