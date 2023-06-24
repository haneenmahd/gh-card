import styled from 'styled-components';
import { useState, type FC } from 'react'
import { fontWeight } from '@/theme/font';
import colors from '@/theme/colors';
import PillInput from '../ui/PillInput';
import PillButton from '../ui/PillButton';
import { GitBranch } from 'react-feather';
import icons from '@/theme/icons';
import Section from '../section';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

interface HeroProps { }

const Hero: FC<HeroProps> = ({ }) => {
    const [username, setUsername] = useState('');

    return (
        <Container>
            <Section
                title='(GH) Card'
                description={<>A simple yet powerful tool to create your own GitHub repository card. Customise it and tailor it based on your design requirements.</>}
            />

            <Section
                title='About'
                description={<>
                    Built for both personal and professional usage, designed with personal preferences. Bare-features, <s>minimal</s> boring interface.
                    Switch between different <u>styles</u> and <u>colors</u>. Share animated videos <i>(buy some credits)</i> and images. Private repo? <i>No problem</i>.
                    No onboarding, ads, no ever.
                </>}
            />

            < Section
                title='Join'
                description={<>
                    We are currently in early beta. <u>Send us an email</u> with request to join and we'll try to get back to you eventually.
                </>}
            />
        </Container >
    )
}

export default Hero