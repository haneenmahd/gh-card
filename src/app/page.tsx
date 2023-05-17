import { redirect } from 'next/navigation';
import Balancer from 'react-wrap-balancer';

export default function page() {
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
    <div className='w-screen py-20'>
      <div className='text-center'>
        <h1 className="leading-tight tracking-tighter text-4xl md:text-6xl font-bold text-black/80">
          <Balancer>Generate GitHub Badge in seconds</Balancer>
        </h1>
        <p className='text-sm leading-relaxed md:leading-normal md:text-base mt-3 md:mt-5 text-gray-500'>
          <Balancer>Write down your name and repository to download the badge</Balancer>
        </p>
      </div>

      <form
        action={generateImage}
        className='mt-3 py-5 flex flex-col items-center justify-center'>
        <fieldset className='flex flex-col md:flex-row gap-5 lg:gap-10 md:gap-5'>
          <fieldset className='flex flex-col'>
            <label
              className='text-gray-500'
              htmlFor='repo-username'>
              Username
            </label>
            <input
              id='repo-username'
              name='repo-username'
              className='p-2 mt-3 bg-slate-50 rounded-md outline-none ring-1 ring-slate-300 focus:ring-slate-400 transition-shadow'
              placeholder='haneenmahd'
              type='text'
            />
          </fieldset>

          <fieldset className='flex flex-col'>
            <label
              className='text-gray-500'
              htmlFor='repo-name'>
              Repository
            </label>
            <input
              id='repo-name'
              name='repo-name'
              className='p-2 mt-3 bg-slate-50 rounded-md outline-none ring-1 ring-slate-300 focus:ring-slate-400 transition-shadow'
              placeholder='tfl'
              type='text'
            />
          </fieldset>
        </fieldset>

        <button
          className='py-2 px-10 mt-10 w-max text-white bg-black rounded-md outline-none hover:bg-black/70 transition-colors shadow-lg shadow-black/10 invalid:bg-gray-500'
          role='submit'>
          Generate
        </button>
      </form>
    </div>
  )
}
