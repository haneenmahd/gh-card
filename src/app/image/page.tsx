'use client';

import Card from '@/components/Card';
import { RepoData } from '@/lib/types';
import html2canvas from 'html2canvas';
import Loading from './loading';
import { useEffect, useRef, useState } from 'react';
import Setting from '@/components/Setting';
import PreviewCard from '@/components/PreviewCard';

interface pageProps {
    searchParams: {
        username: string;
        name: string;
    };
}

const Page = ({ searchParams: { username, name } }: pageProps) => {
    const htmlContentRef = useRef(null);
    const [isDownloading, setDownloading] = useState(false);
    const [data, setData] = useState<RepoData | null>(null);
    const [hideStars, setHideStars] = useState(false);
    const [hideIssues, setHideIssues] = useState(false);
    const [hideForks, setHideForks] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api.github.com/repos/${username}/${name}`, {
                next: {
                    revalidate: 60 * 60 * 60 // after every hour
                }
            });
            const data: RepoData = await res.json();
            setData(data);
        };

        fetchData();
    }, [username, name]);

    const handleDownload = () => {
        setDownloading(true);
    };

    useEffect(() => {
        if (isDownloading) {
            const htmlContent = htmlContentRef.current;

            html2canvas(htmlContent!, {
                scale: 4,
                useCORS: true
            }).then((canvas) => {
                const link = document.createElement('a');
                link.href = canvas.toDataURL('image/png');
                link.download = 'my_image.png';
                link.click();
            })
                .finally(() => setDownloading(false));
        }
    }, [isDownloading]);

    if (!data) return <Loading />;

    return (
        <div className='flex flex-col items-center justify-center'>
            {data && (
                <div className='p-5'>
                    <Card options={{
                        hideForks,
                        hideIssues,
                        hideStars
                    }} data={data} />
                </div>
            )}

            {data && (
                <div ref={htmlContentRef} className={`absolute -top-full p-44 bg-gradient-to-b from-gray-100 to-gray-500 ${isDownloading ? 'block' : 'hidden'}`}>
                    <PreviewCard options={{
                        hideForks,
                        hideIssues,
                        hideStars
                    }} data={data} />

                    <p className='font-medium text-gray-300 mt-5 text-center'>
                        Card.
                    </p>
                </div>
            )}

            <div className='z-10 w-96 mt-3 bg-slate-50 rounded-lg outline-none ring-1 ring-slate-300 overflow-clip shadow-sm text-slate-600'>
                <Setting
                    label='Hide stars'
                    handleSelected={setHideStars}
                />

                <Setting
                    label='Hide issues'
                    handleSelected={setHideIssues}
                />

                <Setting
                    label='Hide forks'
                    handleSelected={setHideForks}
                />
            </div>

            <button
                tabIndex={2}
                className='z-10 py-2 px-10 mt-10 w-max text-white font-medium bg-gradient-to-b from-black to-black/80 hover:ring-4 ring-black/30 rounded-md outline-none transition-shadow shadow-lg shadow-black/10 invalid:bg-gray-500 outline-2 focus-visible:outline-black'
                role='button'
                onClick={handleDownload}
                disabled={!data || isDownloading}
            >
                {isDownloading ? 'Downloading...' : 'Download Image'}
            </button>

            <div className='z-0 blur-3xl h-[300px] w-[300px] fixed left-1/2 -bottom-64 md:-bottom-44 -translate-x-1/2 bg-gradient-to-t from-black to-black/10'></div>
        </div>
    );
};

export default Page;
