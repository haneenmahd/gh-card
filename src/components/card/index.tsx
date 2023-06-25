'use client';

import styled from 'styled-components';
import type { FC } from 'react'
import { Repo } from '@/lib/types';

const Container = styled.div`
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
    transition: 300ms;

    *::selection {
        background: #0D25FF;
    }
`;

const Info = styled.div`
    padding: 2rem;
`;

const RepoName = styled.div`
    color: #0D25FF;
    font-size: 63.723px;
    line-height: 126.5%;
    letter-spacing: -2.23px;
`;

const RepoDescription = styled.div`
    color: #0D25FF;
    font-size: 23.896px;
    line-height: 126.5%;
    letter-spacing: -0.836px;
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
    border: 1.328px solid #0D25FF;
    background: #FFF;
`;

const RepoAuthorName = styled.div`
    color: #0D25FF;
    font-size: 15.931px;
    font-weight: 450;
    line-height: 126.5%;
    letter-spacing: -0.558px;
    text-transform: uppercase;
`;

const RepoDivider = styled.div`
    height: 10.6px;
    width: 10.6px;
    background-color: #0D25FF;
`;

const RepoStars = styled.div`
    color: #0D25FF;
    font-size: 15.931px;
    font-weight: 450;
    line-height: 126.5%;
    letter-spacing: -0.558px;
    text-transform: uppercase;
`;

const GraphicContent = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
`;

interface BlurredCircleProps {
    x: number;
    y: number;
}

const BlurredCircle = styled.div<BlurredCircleProps>`
    position: relative;
    top: ${p => p.y}px;
    left: ${p => p.x}px;
    width: 119px;
    height: 121px;
    flex-shrink: 0;
    border-radius: 121px;
    background: #5462E0;
    filter: blur(80px);
    transform: translate3d(0,0,0);
`;

interface CardProps {
    repo: Repo;
}

const Card: FC<CardProps> = ({ repo }) => {
    return (
        <Container>
            <Info>
                <RepoName>{repo.name}</RepoName>
                <RepoDescription>{repo.description}</RepoDescription>

                <RepoExtraInfo>
                    <RepoAuthorName>{repo.owner.login}</RepoAuthorName>

                    <RepoDivider />

                    <RepoStars>{repo.stargazers_count.toLocaleString('en-US')} Stars</RepoStars>
                </RepoExtraInfo>
            </Info>

            <GraphicContent>
                <BlurredCircle
                    x={0}
                    y={200}
                />

                <BlurredCircle
                    x={-100}
                    y={100}
                />

                <BlurredCircle
                    x={-200}
                    y={0}
                />
            </GraphicContent>
        </Container>
    )
}

export default Card