'use client';

import { useState } from 'react';
import useRepo from '@/hooks/useRepo';
import { AlertCircle, GitFork, Moon, Star, Sun } from 'lucide-react';
import Setting from '@/components/Setting';
import Loader from '@/components/Loader';
import Card from '@/components/Card';
import { ThemeSelection } from '@/lib/types';
import ThemeOption from '@/components/ThemeOption';

interface pageProps {
    searchParams: {
        username: string;
        repo: string;
    };
}

const Page = async ({ searchParams: { username, repo } }: pageProps) => {
    const { data, error, isLoading } = useRepo(username, repo);
    const [hideStars, setHideStars] = useState(false);
    const [hideIssues, setHideIssues] = useState(false);
    const [hideForks, setHideForks] = useState(false);
    const [theme, setTheme] = useState<ThemeSelection>("Light");

    if (isLoading) return <Loader />;

    if (error) return <p>Error occured.</p>;

    if (data) {
        return (
            <div className='flex flex-col items-center justify-center'>
                <div className='p-5'>
                    <Card
                        data={data}
                        options={{ hideStars, hideIssues, hideForks }}
                        theme={theme}
                    />
                </div>

                <div className='flex flex-col items-center justify-center mt-5'>
                    <h3 className='text-sm text-slate-500'>Choose your theme</h3>
                    <div className='p-1 gap-1 flex items-center z-10 w-max mt-3 bg-slate-50 rounded-3xl outline-none ring-1 ring-slate-300 overflow-clip shadow-sm text-slate-600'>
                        <ThemeOption
                            name="Light"
                            icon={(p) => <Sun {...p} />}
                            selectedTheme={theme}
                            handleSelected={setTheme}
                        />

                        <ThemeOption
                            name="Dark"
                            icon={(p) => <Moon {...p} />}
                            selectedTheme={theme}
                            handleSelected={setTheme}
                        />
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center mt-5'>
                    <h3 className='text-sm text-slate-500'>You can hide stars, issues and forks</h3>
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
