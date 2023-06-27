import Card from '@/components/card';
import { EditorContext } from '@/context/EditorContext'
import { useContext, type FC } from 'react'
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 50px;
`;

interface SliderProps {

}

const Slider: FC<SliderProps> = ({ }) => {
    const { graphic, repoData } = useContext(EditorContext)!;
    const graphicType = graphic.substring(
        0,
        graphic.indexOf('-') + 1
    );
    const flowType = graphic.substring(
        graphic.indexOf("flow-") + 1
    );

    return (
        <Container>
            <Card
                repo={repoData}
                flowType={flowType}
                graphicType={graphicType}
            />
        </Container>
    )
}

export default Slider