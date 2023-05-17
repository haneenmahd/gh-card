import Image from 'next/image';
import { redirect } from 'next/navigation';
import Balancer from 'react-wrap-balancer';

interface UserData {
  login: string
  avatar_url: string
  description: string
  url: string
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
    <div className='flex flex-col justify-between h-screen w-screen py-20'>
      <main>
        <div className='text-center px-3'>
          <h1 className="text-3xl md:text-4xl lg:text-6xl leading-tight tracking-tighter font-bold text-black/80">
            <Balancer>Generate GitHub Badge in seconds</Balancer>
          </h1>
          <p className='text-base md:text-sm leading-relaxed md:leading-normal mt-3 md:mt-5 text-gray-500'>
            <Balancer>Write down your name and repository to download the badge</Balancer>
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
              />
            </fieldset>
          </fieldset>

          <button
            className='py-2 px-10 mt-10 w-max text-white bg-black rounded-md outline-none hover:bg-black/70 transition-colors shadow-lg shadow-black/10 invalid:bg-gray-500'
            role='submit'>
            Generate
          </button>
        </form>
      </main>

      <footer className='w-full text-sm md:text-base flex flex-col gap-2 md:flex-row items-center justify-end'>
        <p className='text-gray-500'>Crafted by</p>

        <a
          href={data.url}
          target='_blank'
          className='w-fit flex flex-row items-center justify-center p-1 pr-2 ring-1 ring-gray-200 rounded-2xl hover:bg-slate-50'>
          <Image
            className='max-w-[20px] h-fit rounded-full mr-2'
            height={20}
            width={20}
            src={data.avatar_url}
            alt={`Avatar for ${data.login}`}
          />

          <h3 className='text-sm font-medium'>{data.login}</h3>
        </a>
      </footer>
    </div>
  )
}
