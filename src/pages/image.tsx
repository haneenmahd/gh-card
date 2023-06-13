import '../styles/globals.css';
import { useEffect, useRef, useState } from 'react';
import { AlertCircle, GitFork, Moon, Star, Sun } from 'lucide-react';
import Setting from '@/components/Setting';
import Card from '@/components/Card';
import ThemeOption from '@/components/ThemeOption';
import PreviewCard from '@/components/PreviewCard';
import html2canvas from 'html2canvas';
import timeout from '@/lib/timeout';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import type { RepoData, ThemeSelection } from '@/lib/types';

export const getServerSideProps: GetServerSideProps<{
    data: RepoData
}> = async (context) => {
    const { username, repo } = context.query;
    const response = await fetch(`https://api.github.com/repos/${username}/${repo}`, {
        next: { revalidate: timeout(60) }
    });
    const data = await response.json();

    return {
        props: {
            data
        }
    }
}

const Page = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
                link.download = (props.data?.full_name ?? "user/repo") + ".png";
                link.click();
            }).finally(() => setDownloading(false));
        }
    }, [downloading, props.data?.full_name]);

    if (props.data) {
        return (
            <div className="p-5 w-screen h-screen flex flex-col items-center justify-center">
                <div className='flex flex-col items-center justify-center'>
                    <div className='absolute -top-full p-5' ref={previewCardRef}>
                        <PreviewCard
                            data={props.data}
                            options={{ hideStars, hideIssues, hideForks }}
                            theme={theme}
                        />
                    </div>

                    <div className='p-5'>
                        <Card
                            data={props.data}
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
                        disabled={!props.data || downloading}
                    >
                        {downloading ? 'Downloading...' : 'Download Image'}
                    </button>
                </div>
            </div>
        );
    };
}

export default Page;
