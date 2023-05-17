import Image from 'next/image'
import type { FC } from 'react'

interface pageProps {
    searchParams: {
        username: string
        name: string
    }
}

interface RepoData {
    name: string
    full_name: string
    owner: {
        login: string
        avatar_url: string
        html_url: string
    }
    stargazers_count: number
    watchers_count: number
    language: string
    forks_count: number
    open_issues_count: number
    topics: string[]
    license: {
        banner_url: string
    }
}


const page = async ({ searchParams: { username, name } }: pageProps) => {
    const res = await fetch(`https://api.github.com/repos/${username}/${name}`, {
        cache: 'no-cache'
    });
    const data: RepoData = await res.json();

    return (
        <div className='w-fit mt-3 bg-slate-50 rounded-lg outline-none ring-1 ring-slate-300 overflow-clip shadow-sm'>
            <div className='h-[200px] w-[300px] bg-slate-500 overflow-hidden'>
                <Image
                    height={200}
                    width={300}
                    src={data.license.banner_url}
                    alt={`Banner for ${data.full_name}`}
                />
            </div>

            <div className='p-5 bg-gradient-to-b from-white to-slate-50'>
                <div className='flex flex-row'>
                    <div className="h-[50px] w-[50px] rounded-full bg-slate-300 mr-3 overflow-hidden">
                        <Image
                            height={50}
                            width={50}
                            src={data.owner.avatar_url}
                            alt={`Avatar for ${data.owner.login}`}
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className='mb-2'>
                            <h3 className='text-2xl font-medium'>{data.name}</h3>
                            <p className='text-slate-600'>{data.owner.login}</p>
                        </div>

                        <div className='flex flex-row gap-5'>
                            <div>
                                <p className='text-zinc-600'>{data.stargazers_count} stars</p>
                            </div>

                            <div>
                                <p className='text-zinc-500'>{data.open_issues_count} issues</p>
                            </div>

                            <div>
                                <p className='text-zinc-400'>{data.forks_count} forks</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page