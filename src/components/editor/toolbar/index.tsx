import { useContext, useEffect, useState } from "react";
import RepoInput from "./repo-input";
import styled from "styled-components";
import EditorContext from "@/context/EditorContext";
import Label, { AlertLabel } from "../label";
import fetchRepo from "@/hooks/fetchRepo";
import { motion, AnimatePresence } from "framer-motion";

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
    const { username, repo, setRepo, repoData, setRepoData, setUsername } = useContext(EditorContext)!;
    const [error, setError] = useState('');

    const handleRepoInputUpdate = async () => {
        if (username !== '' && repo !== '') {
            const data = await fetchRepo(username, repo);

            setRepoData(previousData => {
                if (data.id !== null && data.id !== undefined) return { ...data, currentRequestStatus: 'success' };
                return { ...previousData, currentRequestStatus: 'failed' };
            });
        }
    }

    useEffect(() => {
        if (repoData.currentRequestStatus === 'failed') {
            setError('Could not find the repository!');
            return;
        } else {
            setError('');
            return;
        }
    }, [repoData]);

    return (
        <Container>
            <Label>Enter your username and repository</Label>
            <RepoInput
                setUsername={setUsername}
                setRepo={setRepo}
                onUpdate={handleRepoInputUpdate}
            />

            <div style={{ height: 24 }}>
                <AnimatePresence>
                    {error !== '' &&
                        <AlertLabel
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}>
                            {error}
                        </AlertLabel>
                    }
                </AnimatePresence>
            </div>
        </Container>
    )
}