import styled from 'styled-components';
import colors from '@/theme/colors';
import type { FC } from 'react';

const Container = styled.div`
    height: 50px;
    width: fit-content;
    display: flex;
    align-items: center;
    padding: 5px;
    gap: 10px;
    margin: 10px 0;
    border: 2px solid ${colors.text.quinary};
    border-radius: 50px;
    transition: 200ms;

    &:focus-within {
        border-color: ${colors.text.quarternary};
    }
`;

const Label = styled.label`
    padding: 5px 10px;
    color: ${colors.text.secondary};
    border: 2px solid ${colors.text.quarternary};
    border-radius: 20px;
`;

const Input = styled.input`
    outline: none;
    background: none;
`;

interface PillInputProps {
    label: string;
    value: string;
    onChange: (newValue: string) => void;
    placeholder?: string;
}

const PillInput: FC<PillInputProps> = ({ value, onChange, label, placeholder }) => {
    const inputId = `input-${label}-${placeholder}`;
    return (
        <Container>
            <Label htmlFor={inputId}>{label}</Label>
            <Input
                id={inputId}
                value={value}
                onChange={e => onChange(e.target.value)}
                placeholder={placeholder ?? `Please enter your ${label}`}
            />
        </Container>
    );
}

export default PillInput
