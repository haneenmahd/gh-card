"use client";

import Image from 'next/image';
import formatter from '@/lib/formatter';
import { motion, AnimatePresence } from 'framer-motion';
import type { FC } from 'react';
import type { RepoData, ThemeSelection } from '@/lib/types';
import { isDarkTheme, isLightTheme, themeSelection } from '@/theme/themes';
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
    const classes = {
        container: cn('text-left w-[400px] mt-3 rounded-lg outline-none ring-1 ring-slate-300 overflow-clip shadow-sm', {
            'bg-slate-50': isLightTheme(theme),
            'bg-black': isDarkTheme(theme)
        }),
        card: cn('p-5 bg-gradient-to-b', {
            'from-white to-slate-50': isLightTheme(theme),
            'from-black to-white/30': isDarkTheme(theme)
        }),
        authorCapsule: cn('w-fit flex flex-row items-center justify-center p-1 pr-2 border rounded-2xl', {
            'border-gray-200': isLightTheme(theme),
            'border-white/20': isDarkTheme(theme)
        }),
        author: cn('ml-2 text-sm font-medium', {
            'text-gray-500': isLightTheme(theme),
            'text-white/75': isDarkTheme(theme)
        }),
        repoName: cn('text-2xl font-medium', {
            'text-black': isLightTheme(theme),
            'text-white': isDarkTheme(theme)
        }),
        repoDescription: cn('mt-1', {
            'text-gray-500': isLightTheme(theme),
            'text-white/80': isDarkTheme(theme)
        }),
        stars: themeSelection(theme).text.stars,
        issues: themeSelection(theme).text.issues,
        forks: themeSelection(theme).text.forks,
    }

    return (
        <motion.div className={classes.container}>
            <div className={classes.card}>
                <div className='flex flex-col'>
                    <div className={classes.authorCapsule}>
                        <div className='relative w-[20px] h-[20px]'>
                            <Image
                                height={20}
                                width={20}
                                className='rounded-full mr-2'
                                src={data.owner.avatar_url}
                                alt={`Avatar for ${data.owner.login}`}
                            />
                        </div>

                        <h3 className={classes.author}>{data.owner.login}</h3>
                    </div>

                    <div className='my-2'>
                        <h3 className={classes.repoName}>{data.name}</h3>
                        <p className={classes.repoDescription}>{data.description}</p>
                    </div>

                    <div className='flex flex-row gap-5'>
                        <AnimatePresence>
                            {!options.hideStars ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}>
                                    <p className='text-yellow-500'>
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
                                    exit={{ scale: 0, opacity: 0 }}>
                                    <p className='text-yellow-600'>
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
                                    exit={{ scale: 0, opacity: 0 }}>
                                    <p className='text-yellow-700'>
                                        {formatter(data.forks_count)} forks
                                    </p>
                                </motion.div>
                            ) : null}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </motion.div >
    );
};

export default Card;
