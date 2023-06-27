import styled from "styled-components";
import RepoInput from "./repo-input";
import { useContext, useEffect, useState } from "react";
import Actions from "./actions";
import { EditorContext } from "@/context/EditorContext";
import useRepo from "@/hooks/useRepo";

const Container = styled.div`
    position: fixed;
    top: 0;
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-right: 2rem;

    @media screen and (max-width: 480px) {
        flex-direction: column;
        padding-right: 0;
    }
`;

const Spacer = styled.div`
    width: 10%;
    height: 100%;

    @media screen and (max-width: 480px) {
        display: none;
    }
`;

export default function Toolbar() {
    const { username, repo, setRepoData, setUsername, setRepo } = useContext(EditorContext)!;
    const { data, error } = useRepo(username, repo);

    const handleRepoInputUpdate = () => {
        if (username !== '' && repo !== '' && data) setRepoData(data);
    }

    if (error) {
        return <>Error occured while loading the data :(.</>;
    }

    return (
        <Container>
            <Spacer />

            <RepoInput
                setUsername={setUsername}
                setRepo={setRepo}
                onUpdate={handleRepoInputUpdate}
            />

            <Actions
                animateAction={console.log}
                shareAction={console.log}
                exportAction={console.log}
            />
        </Container>
    )
}