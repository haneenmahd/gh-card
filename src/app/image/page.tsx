'use client';

import Setting from '@/components/Setting';
import Card from '@/components/Card';
import useSWR from 'swr';
import useRepo from '@/hooks/useRepo';
import { AlertCircle, GitFork, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import Loader from '@/components/Loader';
import PreviewCard from '@/components/PreviewCard';

interface pageProps {
    searchParams: {
        username: string;
        repo: string;
    };
}

const Page = async ({ searchParams: { username, repo } }: pageProps) => {
    const fetcher = () => fetch(`https://api.github.com/repos/${username}/${repo}`, {
        next: {
            revalidate: 60 * 60 * 60 // after every hour
        }
    }).then(res => res.json());

    const { data, error, isLoading } = useSWR('data', fetcher);
    const [hideStars, setHideStars] = useState(false);
    const [hideIssues, setHideIssues] = useState(false);
    const [hideForks, setHideForks] = useState(false);

    if (isLoading) return <Loader />;

    if (error) return <p>Error occured.</p>;

    if (data) {
        return (
            <div className='flex flex-col items-center justify-center'>
                <div className='p-5'>
                    <PreviewCard options={{ hideStars, hideIssues, hideForks }} data={data} />
                </div>

                <div className='flex flex-col items-center justify-center mt-5'>
                    <h3 className='text-sm text-slate-500'>You can hide stars, issues and forks.</h3>
                    <div className='flex items-center z-10 w-max mt-3 bg-slate-50 rounded-lg outline-none ring-1 ring-slate-300 overflow-clip shadow-sm text-slate-600'>
                        <Setting
                            icon={(p) => <Star {...p} />}
                            handleSelected={setHideStars}
                        />

                        <Setting
                            icon={(p) => <AlertCircle {...p} />}
                            handleSelected={setHideIssues}
                        />

                        <Setting
                            icon={(p) => <GitFork {...p} />}
                            handleSelected={setHideForks}
                        />
                    </div>
                </div>
            </div>
        );
    };
}

export default Page;
