import { useContext, type FC, forwardRef } from 'react'
import EditorContext from '@/context/EditorContext'
import Card from '@/components/card';
import styled, { css } from 'styled-components';
import { ForwardedRef } from '@/lib/types';

const Container = styled.div<{ $exporting: boolean }>`
    margin-top: 50px;

    // Patching up export issues
    ${({ $exporting }) => $exporting && css`
        position: absolute;
        top: -100vh;
        left: -100vw;

        > div > div > div *:not(:nth-child(2)) {
            margin-bottom: 15px;
        }

        > div > div:first-child *:not(:nth-child(2)) {
            margin-bottom: 15px; 
        }
    `}
`;

interface RepoCardProps {
    exporting: boolean
    ref?: React.Ref<HTMLButtonElement>;
}

// eslint-disable-next-line react/display-name
const RepoCard = forwardRef<HTMLElement, RepoCardProps>(({ exporting }, forwardedRef) => {
    const { graphic, repoData } = useContext(EditorContext)!;
    const graphicType = graphic.indexOf("-") !== -1 ? graphic.substring(
        0,
        graphic.indexOf("-")
    ) : graphic;

    const flowType = graphic.indexOf("-") !== -1 ? graphic.substring(
        graphic.indexOf("-") + 1
    ) : '';

    return (
        <Container
            ref={forwardedRef as ForwardedRef}
            $exporting={exporting}>
            <Card
                repo={repoData}
                flowType={flowType as any}
                graphicType={graphicType as any}
            />
        </Container>
    )
});

export default RepoCard