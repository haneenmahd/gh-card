'use client';

import styled from 'styled-components';
import type { FC } from 'react'
import useSWR from 'swr';
import Card from '@/components/card';
import { Repo } from '@/lib/types';

const Container = styled.div``;

interface pageProps { }

const fetcher = (...args: [RequestInfo | URL, RequestInit]) => fetch(...args).then(res => res.json())

const Page: FC<pageProps> = ({ }) => {
    const { data, error, isLoading } = useSWR<Repo>('https://api.github.com/repos/vercel/next.js', fetcher);

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Failed to load data.</div>
    if (!data) return <div>No data found in the response</div>

    return (
        <Container>
            <Card
                repo={data}
            />
        </Container>
    )
}

export default Page