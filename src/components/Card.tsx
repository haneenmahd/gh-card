"use client";

import Image from 'next/image';
import formatter from '@/lib/formatter';
import { motion, AnimatePresence } from 'framer-motion';
import type { FC } from 'react';
import type { RepoData, ThemeSelection } from '@/lib/types';
import themeSelection from '@/theme/themes';
import cn from '@/lib/cn';

interface CardProps {
    data: RepoData;
    options: {
        hideStars: boolean;
        hideIssues: boolean;
        hideForks: boolean;
    };
    theme: ThemeSelection;
}

const Card: FC<CardProps> = ({ data, options, theme }) => {
    const colors = {
        container: themeSelection(theme).background.container,
        card: themeSelection(theme).background.card,
        author: themeSelection(theme).text.author,
        repoName: themeSelection(theme).text.repoName,
        repoDescription: themeSelection(theme).text.repoDescription,
        stars: themeSelection(theme).text.stars,
        issues: themeSelection(theme).text.issues,
        forks: themeSelection(theme).text.forks,
    }

    return (
        <motion.div className={cn('text-left w-[400px] mt-3 rounded-lg outline-none ring-1 ring-slate-300 overflow-clip shadow-sm', colors.container)}>
            <div className={cn('p-5 bg-gradient-to-b', colors.card)}>
                <div className='flex flex-col'>
                    <div className='w-fit flex flex-row items-center justify-center p-1 pr-2 ring-1 ring-gray-200 rounded-2xl'>
                        <div className='relative w-[20px] h-[20px]'>
                            <Image
                                height={20}
                                width={20}
                                className='rounded-full mr-2'
                                src={data.owner.avatar_url}
                                alt={`Avatar for ${data.owner.login}`}
                            />
                        </div>

                        <h3 className={`ml-2 text-sm font-medium ${colors.author}`}>{data.owner.login}</h3>
                    </div>

                    <div className='my-2'>
                        <h3 className={cn('text-2xl font-medium', colors.repoName)}>{data.name}</h3>
                        <p className={cn('mt-1', colors.repoDescription)}>{data.description}</p>
                    </div>

                    <div className='flex flex-row gap-5'>
                        <AnimatePresence>
                            {!options.hideStars ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                >
                                    <p className={cn(colors.stars)}>
                                        {formatter(data.stargazers_count)} stars
                                    </p>
                                </motion.div>
                            ) : null}
                        </AnimatePresence>

                        <AnimatePresence>
                            {!options.hideIssues ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                >
                                    <p className={cn(colors.issues)}>
                                        {formatter(data.open_issues_count)} issues
                                    </p>
                                </motion.div>
                            ) : null}
                        </AnimatePresence>

                        <AnimatePresence>
                            {!options.hideForks ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                >
                                    <p className={cn(colors.forks)}>
                                        {formatter(data.forks_count)} forks
                                    </p>
                                </motion.div>
                            ) : null}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Card;
