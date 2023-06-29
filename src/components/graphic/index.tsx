import Basic from "./basic";
import Flow from "./flow";
import Grid from "./grid";
import Rectangles from "./rectangles";

interface GraphicProps {
    type: 'basic' | 'flow' | 'grid' | 'rectangles';
    childProps: {
        primaryColor: string;
        secondaryColor: string;
        tertiaryColor: string;
        type: 's-letter' | 'r-letter' | 'plus-levitated' | 'green-head';
    };
}

export default function Graphic({ type, childProps }: GraphicProps) {
    switch (type) {
        case 'basic':
            return <Basic />;
        case 'flow':
            return <Flow type={childProps.type} />;
        case 'grid':
            return <Grid />;
        case 'rectangles':
            return (
                <Rectangles
                    primaryColor={childProps.primaryColor}
                    secondaryColor={childProps.secondaryColor}
                    tertiaryColor={childProps.tertiaryColor}
                />
            )
    }
}