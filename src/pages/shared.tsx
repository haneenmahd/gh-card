import '../styles/globals.css';
import { GetServerSidePropsContext } from "next";
import { ForwardedRef, Repo } from "@/lib/types";
import { AlertLabel } from "@/components/editor/label";
import Card from "@/components/card";
import fetchRepo from "@/hooks/fetchRepo";
import colors from "@/theme/colors";
import styled from "styled-components";
import font from "@/theme/font";
import { useRef } from 'react';

const Container = styled.div`
    position: relative;
    min-height: 100vh;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${colors.text.quarternary}10;
`;

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { username, repo, graphicType, flowType } = context.query;
    const repoData = await fetchRepo(username as string, repo as string);

    return {
        props: {
            repoData,
            options: {
                graphicType,
                flowType
            }
        }
    }
}

interface SharedProps {
    repoData: Repo;
    options: {
        graphicType: string;
        flowType: string;
    }
}

export default function Shared({ repoData, options }: SharedProps) {
    if (!repoData) {
        return <AlertLabel>Failed to load repository data</AlertLabel>
    }

    return (
        <Container className={font.className}>
            <Card
                repo={repoData}
                graphicType={options.graphicType as any}
                flowType={options.flowType as any}
                useHoverEffects
            />
        </Container>
    )
}