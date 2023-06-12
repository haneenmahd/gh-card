'use client';

import { useEffect, useRef, useState } from 'react';
import useRepo from '@/hooks/useRepo';
import { AlertCircle, GitFork, Moon, Star, Sun } from 'lucide-react';
import Setting from '@/components/Setting';
import Loader from '@/components/Loader';
import Card from '@/components/Card';
import { ThemeSelection } from '@/lib/types';
import ThemeOption from '@/components/ThemeOption';
import PreviewCard from '@/components/PreviewCard';
import html2canvas from 'html2canvas';

interface pageProps {
    searchParams: {
        username: string;
        repo: string;
    };
}

const Page = async ({ searchParams: { username, repo } }: pageProps) => {
    const { data, error, isLoading } = useRepo(username, repo);
    const previewCardRef = useRef(null);
    const [hideStars, setHideStars] = useState(false);
    const [hideIssues, setHideIssues] = useState(false);
    const [hideForks, setHideForks] = useState(false);
    const [theme, setTheme] = useState<ThemeSelection>("Light");
    const [downloading, setDownloading] = useState(false);

    const handleDownload = () => setDownloading(true);

    useEffect(() => {
        if (downloading && previewCardRef.current) {
            const cardHtmlContent = previewCardRef.current;

            html2canvas(cardHtmlContent, {
                scale: 4,
                useCORS: true
            }).then((canvas) => {
                const link = document.createElement("a");
                link.href = canvas.toDataURL('image/png');
                link.download = (data?.full_name ?? "user/repo") + ".png";
                link.click();
            }).finally(() => setDownloading(false));
        }
    }, [downloading, data?.full_name]);

    if (isLoading) return <Loader />;

    if (error) return <p>Error occured.</p>;

    if (data) {
        return (
            <div className='flex flex-col items-center justify-center'>
                <div className='absolute -top-full p-5' ref={previewCardRef}>
                    <PreviewCard
                        data={data}
                        options={{ hideStars, hideIssues, hideForks }}
                        theme={theme}
                    />
                </div>

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

                <button
                    tabIndex={2}
                    className='z-10 py-2 px-10 mt-10 w-max text-white font-medium bg-gradient-to-b from-black to-black/80 hover:ring-4 ring-black/30 rounded-md outline-none transition-shadow shadow-lg shadow-black/10 invalid:bg-gray-500 outline-2 focus-visible:outline-black'
                    role='button'
                    onClick={handleDownload}
                    disabled={!data || downloading}
                >
                    {downloading ? 'Downloading...' : 'Download Image'}
                </button>
            </div>
        );
    };
}

export default Page;
