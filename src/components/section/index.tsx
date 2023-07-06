import styled from 'styled-components';
import type { FC } from 'react'
import colors from '@/theme/colors';
import { fontWeight } from '@/theme/font';

const Container = styled.section`
    width: 100%;
    font-weight: ${fontWeight('500')};
`;

const Title = styled.div`
    color: ${colors.text.primary};
    font-size: 16px;
`;

const Description = styled.div`
    color: ${colors.text.secondary};
    font-size: 16px;
    line-height: 160%;
`;

interface SectionProps {
    title: string;
    description: JSX.Element;
}

const Section: FC<SectionProps> = ({ title, description }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Container>
    )
}

export default Section