import { useContext } from "react";
import RepoInput from "./repo-input";
import styled from "styled-components";
import EditorContext from "@/context/EditorContext";
import Actions from "./actions";
import useRepo from "@/hooks/useRepo";
import Label from "../label";

const Container = styled.div`
    padding: 1rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 10px;

    @media screen and (max-width: 480px) {
        flex-direction: column;
        padding: 0.4rem 0;
    }
`;

export default function Toolbar() {
    const { username, repo, setRepoData, setUsername } = useContext(EditorContext)!;
    const { data } = useRepo(username, repo);

    const handleRepoInputUpdate = () => {
        if (username !== '' && repo !== '' && data) setRepoData(data);
    }

    return (
        <Container>
            <Label>Enter your username and repository</Label>
            <RepoInput
                setUsername={setUsername}
                onUpdate={handleRepoInputUpdate}
            />
        </Container>
    )
}