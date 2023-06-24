import styled from 'styled-components';
import type { FC } from 'react'
import colors from '@/theme/colors';
import { ExternalLink } from '../link';

const Container = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    color: ${colors.text.secondary};
    border-top: 1px solid ${colors.text.quarternary}50;
    padding-top: 1rem;
    margin-top: 1rem;
`;

const Text = styled.div``;

interface FooterProps { }

const Footer: FC<FooterProps> = ({ }) => {
    return (
        <Container>
            <Text><i>v0.01</i></Text>
            <Text>Crafted by
                <ExternalLink href='https://haneenmahdin.vercel.app'>Haneen</ExternalLink>
            </Text>
        </Container>
    )
}

export default Footer