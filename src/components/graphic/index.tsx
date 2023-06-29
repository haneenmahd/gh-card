import Basic from "./basic";
import Flow from "./flow";
import Grid from "./grid";
import Rectangles from "./rectangles";
import type { Flow as IFlow, Graphic } from "@/lib/types";

interface GraphicProps {
    type: Graphic;
    childProps: {
        primaryColor: string;
        secondaryColor: string;
        tertiaryColor: string;
        type: IFlow;
    };
}

export default function Graphic({ type, childProps }: GraphicProps) {
    switch (type) {
        case 'basic':
            return <Basic />;
        // fix the destructuring of data from string
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