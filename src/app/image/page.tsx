'use client';

import Setting from '@/components/Setting';
import Card from '@/components/Card';
import Loading from './loading';
import useRepo from '@/hooks/useRepo';

interface pageProps {
    searchParams: {
        username: string;
        repo: string;
    };
}

const store = {
    hideForks: false,
    hideIssues: false,
    hideStars: false
}

const Page = async ({ searchParams: { username, repo } }: pageProps) => {
    const { data, error, isLoading } = useRepo(username, repo);

    if (isLoading) return <Loading />;

    if (error) return <p>Error occured.</p>;

    if (data) {
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
                        handleSelected={() => { }}
                    />

                    <Setting
                        label='Hide issues'
                        handleSelected={() => { }}
                    />

                    <Setting
                        label='Hide forks'
                        handleSelected={() => { }}
                    />
                </div>

                <div className='z-0 blur-3xl h-[300px] w-[300px] fixed left-1/2 -bottom-64 md:-bottom-44 -translate-x-1/2 bg-gradient-to-t from-black to-black/10'></div>
            </div>
        );
    };
}

export default Page;
