import Card from '@/components/card';
import { EditorContext } from '@/context/EditorContext'
import { useContext, type FC } from 'react'
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 50px;
`;

interface SliderProps { }

const Slider: FC<SliderProps> = ({ }) => {
    const { graphic, repoData } = useContext(EditorContext)!;
    const graphicType = graphic.indexOf("-") !== -1 ? graphic.substring(
        0,
        graphic.indexOf("-")
    ) : graphic;

    const flowType = graphic.indexOf("-") !== -1 ? graphic.substring(
        graphic.indexOf("-")
    ) : '';

    return (
        <Container>
            <Card
                repo={repoData}
                flowType={flowType as any}
                graphicType={graphicType as any}
            />
        </Container>
    )
}

export default Slider