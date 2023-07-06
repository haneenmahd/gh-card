import styled from 'styled-components';
import { useState, type FC } from 'react'
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
                    We are currently in early beta and some features are still <u>work in progress</u>. So if you have any suggestions or feature requests, just <u><a href='mailto:haneen.business@skiff.com'>send us an email</a></u>.
                </>}
            />
        </Container >
    )
}

export default Hero