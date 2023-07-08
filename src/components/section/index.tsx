import styled, { css, keyframes } from 'styled-components';
import type { FC } from 'react'
import colors from '@/theme/colors';
import { fontWeight } from '@/theme/font';

const BackgroundAnimation = keyframes`
    0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 200% 50%;
	}
`;

const Container = styled.section`
    width: 100%;
    font-weight: ${fontWeight('500')};
`;

const Title = styled.div<{ highlight?: boolean; }>`
    color: ${colors.text.primary};
  font-size: 16px;

  ${({ highlight }) =>
        highlight &&
        css`
      color: transparent;
      background: linear-gradient(
        90deg,
        rgba(255, 0, 0, 1) 0%,
        rgba(255, 154, 0, 1) 10%,
        rgba(208, 222, 33, 1) 20%,
        rgba(79, 220, 74, 1) 30%,
        rgba(63, 218, 216, 1) 40%,
        rgba(47, 201, 226, 1) 50%,
        rgba(28, 127, 238, 1) 60%,
        rgba(95, 21, 242, 1) 70%,
        rgba(186, 12, 248, 1) 80%,
        rgba(251, 7, 217, 1) 90%,
        rgba(255, 0, 0, 1) 100%
      );
      background-clip: text;
      -webkit-background-clip: text;
      background-size: 200% 100%;
      background-position: 100% 0;
      background-blend-mode: overlay;
      background-repeat: repeat;
      animation: ${BackgroundAnimation} 10s linear infinite forwards;
    `}
`;

const Description = styled.div`
    color: ${colors.text.secondary};
    font-size: 16px;
    line-height: 160%;

    a {
        transition: color 150ms;
    }

    a:hover {
        color: ${colors.text.quarternary};
    }
`;

interface SectionProps {
    title: string;
    description: JSX.Element;
    highlight?: boolean;
}

const Section: FC<SectionProps> = ({ title, description, highlight }) => {
    return (
        <Container>
            <Title highlight={highlight}>{title}</Title>
            <Description>{description}</Description>
        </Container>
    )
}

export default Section