import styled from "styled-components";
import RepoInput from "./repo-input";
import Label, { AlertLabel } from "../label";
import { fetchRepo } from "@/lib/repo";
import { AnimatePresence } from "framer-motion";
import EditorContext from "@/context/EditorContext";
import { useContext, useEffect, useState } from "react";
import { Loader } from "react-feather";
import { motion } from 'framer-motion';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 10px;

    @media screen and (max-width: 480px) {
        flex-direction: column;
    }
`;

export default function Toolbar() {
    const { username, repo, setRepo, repoData, setRepoData, setUsername } = useContext(EditorContext)!;
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleRepoInputUpdate = async () => {
        if (username !== '' && repo !== '') {
            setLoading(true);
            const data = await fetchRepo(username, repo);

            setRepoData(previousData => {
                if (data.id !== null && data.id !== undefined) return { ...data, currentRequestStatus: 'success' };
                return { ...previousData, currentRequestStatus: 'failed' };
            });
            setLoading(false);
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

            {isLoading && (
                <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: 100,
                        repeatType: 'loop'
                    }}>
                    <Loader />
                </motion.div>
            )}

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