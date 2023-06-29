import styled from "styled-components";
import colors from "@/theme/colors";
import { motion } from "framer-motion";

const Label = styled.label`
    color: ${colors.text.secondary};
`;

export const AlertLabel = styled(motion.label)`
    height: 24px;
    color: ${colors.extras.red};
`;

export default Label;