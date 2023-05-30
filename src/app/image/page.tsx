import Card from '@/components/Card';
import Loading from './loading';
import Setting from '@/components/Setting';
import PreviewCard from '@/components/PreviewCard';
import type { RepoData } from '@/lib/types';
import timeout from '@/lib/timeout';
import { revalidatePath, revalidateTag } from 'next/cache';

interface pageProps {
    searchParams: {
        username: string;
        name: string;
    };
}

const store = {
    hideForks: false,
    hideIssues: false,
    hideStars: false
}

const Page = async ({ searchParams: { username, name } }: pageProps) => {
    const res = await fetch(`https://api.github.com/repos/${username}/${name}`, {
        next: {
            revalidate: timeout(1)
        }
    });
    const data: RepoData = await res.json();

    async function setHideStars() {
        'use server';
        store.hideStars = true;
        revalidatePath(`/image`)
    }

    async function setHideIssues() {
        'use server';
        store.hideIssues = true;
        revalidatePath(`/image`)
    }

    async function setHideForks() {
        'use server';
        store.hideForks = true;
        revalidatePath(`/image`)
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='p-5'>
                <Card options={{
                    hideForks: store.hideForks,
                    hideIssues: store.hideIssues,
                    hideStars: store.hideStars
                }} data={data} />
            </div>

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

            {/* <button
                tabIndex={2}
                className='z-10 py-2 px-10 mt-10 w-max text-white font-medium bg-gradient-to-b from-black to-black/80 hover:ring-4 ring-black/30 rounded-md outline-none transition-shadow shadow-lg shadow-black/10 invalid:bg-gray-500 outline-2 focus-visible:outline-black'
                role='button'
                onClick={handleDownload}
                disabled={!data || isDownloading}
            >
                {isDownloading ? 'Downloading...' : 'Download Image'}
            </button> */}

            <div className='z-0 blur-3xl h-[300px] w-[300px] fixed left-1/2 -bottom-64 md:-bottom-44 -translate-x-1/2 bg-gradient-to-t from-black to-black/10'></div>
        </div>
    );
};

export default Page;
