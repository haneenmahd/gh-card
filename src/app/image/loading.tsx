const loading = ({ }) => {
    return (
        <div className='w-fit mt-3 bg-slate-50 rounded-lg outline-none ring-1 ring-slate-300 overflow-clip shadow-sm'>
            <div className='p-5 bg-gradient-to-b from-white to-slate-50'>
                <div className='flex flex-row'>
                    <div className="h-[50px] w-[50px] rounded-full bg-slate-300 mr-3" />
                    <div className="flex flex-col">
                        <div className='mb-2'>
                            <h3 className='text-2xl font-medium animate-pulse'>next.js</h3>
                            <p className='text-slate-600 animate-pulse'>vercel</p>
                        </div>

                        <div className='flex flex-row gap-5'>
                            <div>
                                <p className='text-zinc-600 animate-pulse'>110k stars</p>
                            </div>

                            <div>
                                <p className='text-zinc-500 animate-pulse'>1,211 issues</p>
                            </div>

                            <div>
                                <p className='text-zinc-400 animate-pulse'>225 forks</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default loading