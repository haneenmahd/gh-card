import '../styles/globals.css'
import styled from 'styled-components';
import Toolbar from '@/components/editor/toolbar';
import EditorProvider from '@/context/EditorProvider';
import Slider from '@/components/editor/slider';
import font from '@/theme/font';
import Customisation from '@/components/editor/customisation';

const Container = styled.div`
    position: relative;
    min-height: 100vh;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`;

export default function Editor() {
    return (
        <EditorProvider>
            <Container className={font.className}>
                <Toolbar />

                <Customisation />

                <Slider />
            </Container>
        </EditorProvider>
    );
}