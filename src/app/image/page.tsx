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
    description: string
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
        next: {
            revalidate: 4 * 60 * 60
        }
    });
    const data: RepoData = await res.json();

    return (
        <div className='w-fit mt-3 bg-slate-50 rounded-lg outline-none ring-1 ring-slate-300 overflow-clip shadow-sm'>
            <div className='p-5 bg-gradient-to-b from-white to-slate-50'>
                <div className="flex flex-col">
                    <div className='w-fit flex flex-row items-center justify-center p-1 pr-2 ring-1 ring-gray-200 rounded-2xl'>
                        <Image
                            className='max-w-[20px] h-fit rounded-full mr-2'
                            height={20}
                            width={20}
                            src={data.owner.avatar_url}
                            alt={`Avatar for ${data.owner.login}`}
                        />

                        <h3 className='text-sm font-medium'>{data.owner.login}</h3>
                    </div>

                    <div className='my-2'>
                        <h3 className='text-2xl font-medium'>{data.name}</h3>
                        <p className='mt-1 text-slate-400'>{data.description}</p>
                    </div>

                    <div className='flex flex-row gap-5'>
                        <div>
                            <p className='text-yellow-600'>
                                {formatter(data.stargazers_count)} stars
                            </p>
                        </div>

                        <div>
                            <p className='text-zinc-500'>
                                {formatter(data.open_issues_count)} issues
                            </p>
                        </div>

                        <div>
                            <p className='text-zinc-400'>
                                {formatter(data.forks_count)} forks
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default page