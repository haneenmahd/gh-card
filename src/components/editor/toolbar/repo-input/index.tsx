import colors from '@/theme/colors';
import { fontWeight } from '@/theme/font';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const RoundedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  border: 1px solid ${colors.text.quarternary}40;
  padding: 5px;
`;

const Seperator = styled.div`
  font-size: 20px;
  font-weight: ${fontWeight('500')};
  color: ${colors.text.tertiary};
  padding-left: 0.2rem;
`;

interface RoundedInputProps {
  inputWidth: number;
}

const RoundedInput = styled.input.attrs({
  type: "text",
  autoCapitalize: "off",
  autoComplete: "off",
  spellCheck: "false"
}) <RoundedInputProps>`
  font-size: 16px;
  width: 80px;
  border: none;
  outline: none;
  padding-left: 5px;
  color: ${colors.text.secondary};
  transition: color 200ms,width 200ms cubic-bezier(0.64, 0.06, 0.08, 1.01);

  &:focus {
    color: ${colors.text.primary};
  }

  @media screen and (min-width: 767px) {
    min-width: 50px;
    width: ${({ inputWidth }) => inputWidth}px;
  }
`;

interface RepoInputProps {
  setUsername: (username: string) => void;
  setRepo: (repo: string) => void;
}

export default function RepoInput({ setUsername, setRepo }: RepoInputProps) {
  const [usernameLength, setUsernameLength] = useState(0);
  const [repositoryLength, setRepositoryLength] = useState(0);

  return (
    <Container>
      <RoundedContainer>
        <RoundedInput
          placeholder='user'
          inputWidth={(usernameLength * 7) + 30}
          onChange={e => {
            setUsername(e.target.value);
            setUsernameLength(e.target.value.trim().length);

          }} />
        <Seperator>/</Seperator>
        <RoundedInput
          placeholder='repo'
          inputWidth={(repositoryLength * 7) + 30}
          onChange={e => {
            setRepo(e.target.value);
            setRepositoryLength(e.target.value.trim().length);
          }} />
      </RoundedContainer>
    </Container>
  );
}