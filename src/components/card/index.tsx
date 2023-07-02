'use client';

import styled from 'styled-components';
import colors from '@/theme/colors';
import Graphic from '../graphic';
import type { FC } from 'react'
import type { Flow, Graphic as IGraphic, Repo } from '@/lib/types';

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
}

const Card: FC<CardProps> = ({ repo, graphicType, flowType }) => {
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

            <GraphicContent key={repo.id}>
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