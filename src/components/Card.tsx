import Image from 'next/image'
import formatter from '@/lib/formatter';
import { motion, AnimatePresence } from 'framer-motion';
import type { FC } from 'react'
import type { RepoData } from '@/lib/types'

interface CardProps {
    data: RepoData
    options: {
        hideStars: boolean
        hideIssues: boolean
        hideForks: boolean
    }
}

const Card: FC<CardProps> = ({ data, options }) => {
    return (
        <motion.div className='w-[400px] mt-3 bg-slate-50 rounded-lg outline-none ring-1 ring-slate-300 overflow-clip shadow-sm'>
            <div className='p-5 bg-gradient-to-b from-white to-slate-50'>
                <div className="flex flex-col">
                    <div className='w-fit flex flex-row items-center justify-center p-1 pr-2 ring-1 ring-gray-200 rounded-2xl'>
                        <Image
                            className='w-[20px] h-fit rounded-full mr-2'
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
                        <AnimatePresence>
                            {!options.hideStars ?
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}>
                                    <p className='text-yellow-600'>
                                        {formatter(data.stargazers_count)} stars
                                    </p>
                                </motion.div>
                                : null}
                        </AnimatePresence>

                        <AnimatePresence>
                            {!options.hideIssues ?
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}>
                                    <p className='text-zinc-500'>
                                        {formatter(data.open_issues_count)} issues
                                    </p>
                                </motion.div>
                                : null}
                        </AnimatePresence>

                        <AnimatePresence>
                            {!options.hideForks ?
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}>
                                    <p className='text-zinc-400'>
                                        {formatter(data.forks_count)} forks
                                    </p>
                                </motion.div>
                                : null}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Card