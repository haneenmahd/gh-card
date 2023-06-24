import Image from 'next/image';
import styled from 'styled-components';
import Icon from '@/assets/img/icon.jpeg';
import type { FC } from 'react'
import Link from '../link';

const Container = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
`;

interface NavBarProps { }

const NavBar: FC<NavBarProps> = ({ }) => {
    return (
        <Container>
            <Image src={Icon} alt="logo" width={40} height={40} />

            <Link href="/">Login</Link>
        </Container>
    )
}

export default NavBar