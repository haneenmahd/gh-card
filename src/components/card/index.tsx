'use client';

import styled, { css } from 'styled-components';
import colors from '@/theme/colors';
import Graphic from '../graphic';
import { useRef, type FC, MouseEventHandler, useState } from 'react'
import type { Flow, Graphic as IGraphic, Repo } from '@/lib/types';

const Container = styled.div<{ useHoverEffects: boolean; }>`
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    width: 646.522px;
    height: 407.673px;
    border-radius: 12px;
    border: 1px solid #E1E1E1;
    background: #FFF;
    transition-duration: 150ms;
    box-shadow: 0 2px 4px ${colors.text.quarternary}10;

    *::selection {
        background: ${colors.text.primary};
    }

    @media screen and (max-width: 768px) {
        width: 477px;
        height: 300px;
    }

    @media screen and (max-width: 480px) {
        width: 365.7px;
        height: 230px;
    }

    @media screen and (max-width: 400px) {
        width: 318px;
        height: 200px;
    }

    ${({ useHoverEffects }) => useHoverEffects && css`
        cursor: pointer;
        user-select: none;

        &:active {
            scale: 0.98;
        }
    `}
`;

const Info = styled.div`
    padding: 2rem;
    z-index: 1;

    @media screen and (max-width: 480px) {
        padding: 1rem;
    }
`;

const RepoName = styled.div`
    color: ${colors.text.primary};
    font-size: 63.723px;
    line-height: 126.5%;
    letter-spacing: -2.23px;

    @media screen and (max-width: 480px) {
        font-size: 40px;
    }
`;

const RepoDescription = styled.div`
    color: ${colors.text.primary};
    font-size: 23.896px;
    line-height: 126.5%;
    letter-spacing: -0.836px;

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

const RepoExtraInfo = styled.div`
    max-width: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    min-width: 225.685px;
    height: 29.206px;
    flex-shrink: 0;
    border-radius: 3.983px;
    border: 1.328px solid ${colors.text.primary};
    background: #ffffff20;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);

    @media screen and (max-width: 480px) {
        min-width: 165.685px;
        height: 23px;
        font-size: 12px;
        padding-left: 0.35rem;
    }
`;

const RepoAuthorName = styled.div`
    color: ${colors.text.primary};
    font-size: 15.931px;
    font-weight: 450;
    line-height: 126.5%;
    letter-spacing: -0.558px;
    text-transform: uppercase;

    @media screen and (max-width: 480px) {
        font-size: 12px;
    }
`;

const RepoDivider = styled.div`
    height: 10.6px;
    width: 10.6px;
    background-color: ${colors.text.primary};

    @media screen and (max-width: 480px) {
        height: 6px;
        width: 6px;
    }
`;

const RepoStars = styled.div`
    color: ${colors.text.primary};
    font-size: 15.931px;
    font-weight: 450;
    line-height: 126.5%;
    letter-spacing: -0.558px;
    text-transform: uppercase;

    @media screen and (max-width: 480px) {
        font-size: 12px;
    }
`;

const GraphicContent = styled.div`
    z-index: 0;
    position: absolute;
    bottom: 0;
    right: 0;

    @media screen and (max-width: 480px) {
        bottom: -50px;
        right: -40px;

        svg {
            height: 200px;
            width: 200px;
        }
    }
`;

interface CardProps {
    repo: Repo;
    graphicType: IGraphic;
    flowType: Flow;
    useHoverEffects?: boolean;
}

const Card: FC<CardProps> = ({ repo, graphicType, flowType, useHoverEffects }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [animationId, setAnimationId] = useState(0);

    const handleMouseMove: MouseEventHandler = (e) => {
        const card = cardRef.current!;
        const bounds = card.getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const leftX = mouseX - bounds.x;
        const topY = mouseY - bounds.y;
        const center = {
            x: leftX - bounds.width / 2,
            y: topY - bounds.height / 2
        }
        const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

        card.style.transform = `
            scale3d(1.1, 1.1, 1.1)
            rotate3d(
            ${-center.y / 50},
            ${-center.x / 50},
            0,
            ${Math.log(distance) * 3}deg
            )
        `;
    }

    const handleMouseLeave = () => {
        const card = cardRef.current!;
        card.style.transform = 'scale3d(1, 1, 1) rotate3d(0, 0, 0, 0deg)';
    }

    const forceUpdateAnimation = () => {
        setAnimationId(id => id + 1);
    }

    return (
        <Container
            ref={cardRef}
            onMouseMove={useHoverEffects ? handleMouseMove : undefined}
            onMouseLeave={useHoverEffects ? handleMouseLeave : undefined}
            onClick={useHoverEffects ? forceUpdateAnimation : undefined}
            useHoverEffects={useHoverEffects ? true : false}>
            <Info>
                <RepoName>{repo.name}</RepoName>
                <RepoDescription>{repo.description}</RepoDescription>

                <RepoExtraInfo>
                    <RepoAuthorName>{repo.owner.login}</RepoAuthorName>

                    <RepoDivider />

                    <RepoStars>{repo.stargazers_count.toLocaleString('en-US')} Stars</RepoStars>
                </RepoExtraInfo>
            </Info>

            <GraphicContent key={useHoverEffects ? animationId : repo.id}>
                <Graphic
                    type={graphicType}
                    childProps={{
                        primaryColor: colors.extras.blue1,
                        secondaryColor: colors.extras.blue2,
                        tertiaryColor: colors.extras.blue3,
                        type: flowType
                    }}
                />
            </GraphicContent>
        </Container>
    )
}

export default Card