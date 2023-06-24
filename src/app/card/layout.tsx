'use client';

import colors from '@/theme/colors';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background: ${colors.background.gray};
    min-height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function CardLayout({ children }: { children: React.ReactNode }) {
    return (
        <Container>
            {children}
        </Container>
    )
}