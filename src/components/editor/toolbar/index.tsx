import { useContext } from "react";
import RepoInput from "./repo-input";
import styled from "styled-components";
import EditorContext from "@/context/EditorContext";
import Label from "../label";
import fetchRepo from "@/hooks/fetchRepo";

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
    const { username, repo, setRepo, setRepoData, setUsername } = useContext(EditorContext)!;

    const handleRepoInputUpdate = async () => {
        if (username !== '' && repo !== '') {
            const data = await fetchRepo(username, repo);

            setRepoData((previousData => {
                if (data.id !== null && data.id !== undefined) {
                    console.log('id', data.id)
                    return data;
                }

                return previousData;
            }));
        }
    }

    return (
        <Container>
            <Label>Enter your username and repository</Label>
            <RepoInput
                setUsername={setUsername}
                setRepo={setRepo}
                onUpdate={handleRepoInputUpdate}
            />
        </Container>
    )
}