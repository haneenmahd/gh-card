import { useContext } from "react";
import RepoInput from "./repo-input";
import styled from "styled-components";
import EditorContext from "@/context/EditorContext";
import Actions from "./actions";
import useRepo from "@/hooks/useRepo";

const Container = styled.div`
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    @media screen and (max-width: 480px) {
        flex-direction: column;
        padding: 0.4rem 0;
    }
`;

export default function Toolbar() {
    const { username, repo, setRepoData, setUsername, setRepo } = useContext(EditorContext)!;
    const { data } = useRepo(username, repo);

    const handleRepoInputUpdate = () => {
        if (username !== '' && repo !== '' && data) setRepoData(data);
    }

    return (
        <Container>
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