import { keyframes } from "styled-components";

const Reject = keyframes`
    10% {
        transform: translateX(-10px);
    }

    30% {
        transform: translateX(10px);
    }

    50% {
        transform: translateX(-5px);
    }

    70% {
        transform: translateX(5px);
    }
`;

export default Reject;