import styled from 'styled-components';
import { useState, type FC } from 'react'
import { fontWeight } from '@/theme/font';
import colors from '@/theme/colors';
import PillInput from '../ui/PillInput';
import PillButton from '../ui/PillButton';
import { GitBranch } from 'react-feather';
import icons from '@/theme/icons';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const Heading = styled.h1`
    font-weight: ${fontWeight('600')};
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    max-width: clamp(50vw, 65vw, 70vw);
    color: ${colors.text.primary};
`;

const Description = styled.p`
    font-weight: ${fontWeight('350')};
    font-size: clamp(0.5rem, 2.5vw, 1.25rem);
    max-width: clamp(50vw, 65vw, 70vw);
    color: ${colors.text.secondary};
`;

interface HeroProps { }

const Hero: FC<HeroProps> = ({ }) => {
    const [username, setUsername] = useState('');

    return (
        <Container>
            <Heading>Showcase your OSS projects with beautiful cards</Heading>
            <Description>Get started by searching for your GitHub username and finding your repository.</Description>

            <PillInput
                label='github.com'
                placeholder='Enter your username'
                value={username}
                onChange={setUsername}
            />

            <PillButton
                label='Search for repositories'
                icon={icons.gitBranch}
                action={console.log}
            />
        </Container>
    )
}

export default Hero