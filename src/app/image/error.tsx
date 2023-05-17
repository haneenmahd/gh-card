'use client';

const error = ({ error, reset }: {
    error: Error
    reset: () => void
}) => (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
        <p className="text-center">An error occured while generating image.</p>

        <button
            className='py-2 px-10 mt-5 w-max bg-black text-white ring-1 ring-black rounded-md hover:bg-white hover:text-black transition-colors'
            onClick={reset}>
            Try again.
        </button>
    </div>
)

export default error;