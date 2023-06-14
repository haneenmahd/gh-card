'use client'

import { SessionProvider } from 'next-auth/react';
import { FC, ReactNode } from 'react';

const Provider: FC<{ children: ReactNode; }> = ({ children }) =>
    <SessionProvider>{children}</SessionProvider>;

export default Provider;