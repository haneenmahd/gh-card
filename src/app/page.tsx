import Image from 'next/image';
import { redirect } from 'next/navigation';
import Balancer from 'react-wrap-balancer';
import { Newsreader } from 'next/font/google';

const newsreader = Newsreader({ style: 'italic', subsets: ['latin'] });

interface UserData {
  login: string
  avatar_url: string
  description: string
  html_url: string
}

export default async function page() {
  const res = await fetch('https://api.github.com/users/haneenmahd', {
    next: {
      revalidate: 24 * 60 * 60 * 60 // after every day
    }
  });

  const data: UserData = await res.json();

  async function generateImage(formData: FormData) {
    'use server';
    const username = formData.get('repo-username');
    const name = formData.get('repo-name');
    const isValid = name !== '' && username !== '';

    if (isValid) {
      redirect(`/image?username=${username}&name=${name}`);
    }
  }

  return (
    <div className='flex flex-col justify-between min-h-screen max-w-screen py-20 sm:gap-10 md:gap-0'>
      <main className='z-10'>
        <div className='text-center px-3'>
          <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tighter font-bold text-black/80">
            <Balancer>Quickly generate GitHub repository card</Balancer>
          </h1>
          <p className='text-base md:text-sm leading-relaxed md:leading-normal mt-3 md:mt-5 text-gray-500'>
            <Balancer>Write down your name and repository to download the card</Balancer>
          </p>
        </div>

        <form
          action={generateImage}
          className='mt-3 py-5 flex flex-col items-center justify-center'>
          <fieldset className='flex flex-col md:flex-row gap-5 lg:gap-10 md:gap-5'>
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
                tabIndex={1}
              />
            </fieldset>
          </fieldset>

          <button
            tabIndex={2}
            className='py-2 px-10 mt-10 w-max text-white font-medium bg-gradient-to-b from-black to-black/80 hover:ring-4 ring-black/30 rounded-md outline-none transition-shadow shadow-lg shadow-black/10 invalid:bg-gray-500 outline-2 focus-visible:outline-black'
            role='button'>
            Generate
          </button>
        </form>
      </main>

      <footer className='h-full w-full text-sm md:text-base flex flex-col gap-4 items-center justify-end z-10'>
        <div className='flex flex-col gap-2 items-center md:flex-row'>
          <p className={`${newsreader.className} italic tracking-tighter text-gray-500`}>
            Crafted by
          </p>

          <a
            tabIndex={3}
            href={data.html_url}
            target='_blank'
            className='w-fit flex flex-row items-center justify-center p-1 pr-2 ring-1 ring-gray-200 rounded-2xl bg-white/50 hover:bg-slate-50 shadow-sm transition-colors focus-visible:outline-black focus-visible:bg-black/5'>
            <Image
              className='max-w-[20px] h-fit rounded-full mr-2'
              height={20}
              width={20}
              src={data.avatar_url}
              alt={`Avatar for ${data.login}`}
            />

            <div className='text-sm font-medium'>{data.login}</div>
          </a>
        </div>

        <p className='text-xs text-black/40'>Copyright 2023 Haneen Mahdin</p>
      </footer>

      <div className='blur-3xl h-[300px] w-[300px] fixed left-1/2 -bottom-64 md:-bottom-44 -translate-x-1/2 bg-gradient-to-t from-black to-black/10'></div>
    </div>
  )
}
