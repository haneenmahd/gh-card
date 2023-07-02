import '../styles/globals.css'
import styled from 'styled-components';
import Toolbar from '@/components/editor/toolbar';
import EditorProvider from '@/context/EditorProvider';
import font from '@/theme/font';
import Customisation from '@/components/editor/customisation';
import Actions from '@/components/editor/toolbar/actions';
import colors from '@/theme/colors';
import RepoCard from '@/components/editor/repo-card';

const Container = styled.div`
    position: relative;
    min-height: 100vh;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    padding: 2rem 0;
    background: ${colors.text.quarternary}10;
`;

export default function Editor() {
    return (
        <EditorProvider>
            <Container className={font.className}>
                <Toolbar />

                <RepoCard />

                <Customisation />

                <Actions
                    animateAction={console.log}
                    shareAction={console.log}
                    exportAction={console.log}
                />
            </Container>
        </EditorProvider>
    );
}