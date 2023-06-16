'use client'

import Balancer from 'react-wrap-balancer';
import GitHubConnect from '@/components/GitHubConnect';

export default async function Page() {
  return (
    <div className='flex flex-col justify-between min-h-screen max-w-screen py-20 sm:gap-10 md:gap-0'>
      <main className='z-10'>
        <div className='flex flex-col items-center text-center px-3'>
          <GitHubConnect />

          <h1 className="text-3xl max-w-4xl md:text-5xl lg:text-6xl leading-tight tracking-tighter font-bold text-black/80">
            <Balancer>Quickly generate GitHub repository card</Balancer>
          </h1>

          <p className='text-base md:text-base leading-relaxed md:leading-normal mt-3 md:mt-5 text-gray-500'>
            <Balancer>Write down your name and repository to download the card</Balancer>
          </p>
        </div>

        <form
          className='mt-3 py-5 flex flex-col items-center justify-center'>
          <fieldset className='flex flex-col gap-5'>
            <fieldset className='flex flex-col'>
              <label
                className='text-gray-500 text-sm md:text-base'
                htmlFor='repo-username'>
                Username
              </label>
              <input
                id='repo-username'
                name='repo-username'
                className='p-2 mt-3 bg-slate-50 rounded-md outline-none ring-1 ring-slate-300 focus:ring-slate-400 transition-shadow'
                placeholder='haneenmahd'
                type='text'
                autoCapitalize='off'
                autoComplete='off'
                tabIndex={0}
              />
            </fieldset>

            <fieldset className='flex flex-col'>
              <label
                className='text-gray-500 text-sm md:text-base'
                htmlFor='repo-name'>
                Repository
              </label>
              <input
                id='repo-name'
                name='repo-name'
                className='p-2 mt-3 bg-slate-50 rounded-md outline-none ring-1 ring-slate-300 focus:ring-slate-400 transition-shadow'
                placeholder='tfl'
                type='text'
                autoCapitalize='off'
                autoComplete='off'
                tabIndex={0}
              />
            </fieldset>
          </fieldset>

          <button
            tabIndex={0}
            className='py-2 px-10 mt-10 w-max text-white font-medium bg-gradient-to-b from-black to-black/80 hover:ring-4 ring-black/30 rounded-md outline-none transition-shadow shadow-lg shadow-black/10 invalid:bg-gray-500 outline-2 focus-visible:outline-black'
            role='button'>
            Generate
          </button>
        </form>
      </main >

      <footer className='h-full w-full text-sm md:text-base flex flex-col gap-4 items-center justify-end z-10'>
        <p className='text-xs text-gray-500'>Copyright 2023 Haneen Mahdin</p>
      </footer>

      <div className='blur-3xl h-[300px] w-[300px] fixed left-1/2 -bottom-64 md:-bottom-44 -translate-x-1/2 bg-gradient-to-t from-black to-black/10'></div>
    </div >
  )
}
