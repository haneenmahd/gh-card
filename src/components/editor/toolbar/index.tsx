import styled from "styled-components";
import RepoInput from "./repo-input";
import { useState } from "react";
import Actions from "./actions";

const Container = styled.div`
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
    width: max-content;
    height: 100%;

    @media screen and (max-width: 480px) {
        display: none;
    }
`;

export default function Toolbar() {
    const [username, setUsername] = useState('');
    const [repo, setRepo] = useState('');

    return (
        <Container>
            <Spacer />

            <RepoInput
                setUsername={setUsername}
                setRepo={setRepo}
            />

            <Actions
                animateAction={console.log}
                shareAction={console.log}
                exportAction={console.log}
            />
        </Container>
    )
}