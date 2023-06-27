import colors from '@/theme/colors';
import styled from 'styled-components';
import { fontWeight } from '@/theme/font';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  height: 36px;
  max-width: 300px;
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

const RoundedInput = styled.input.attrs({
  type: "text",
  spellCheck: "false"
})`
  font-size: 16px;
  width: 100%;
  background: none;
  border: none;
  outline: none;
  padding-left: 5px;
  color: ${colors.text.primary};
  transition: color 200ms,width 200ms cubic-bezier(0.64, 0.06, 0.08, 1.01);
  
  &:first-child {
    color: ${colors.text.secondary};

    &:focus {
      color: ${colors.text.primary};
    }
  }

  &::placeholder {
    color: ${colors.text.quarternary};
  }
`;

interface RepoInputProps {
  setUsername: (username: string) => void;
  onUpdate: () => void;
}

export default function RepoInput({ setUsername, onUpdate }: RepoInputProps) {
  return (
    <Container>
      <RoundedContainer>
        <RoundedInput
          placeholder='vercel'
          onChange={e => setUsername(e.target.value)}
          onBlur={onUpdate}
        />
        <Seperator>/</Seperator>
        <RoundedInput
          placeholder='next.js'
          onChange={e => (e.target.value)}
          onBlur={onUpdate}
        />
      </RoundedContainer>
    </Container>
  );
}