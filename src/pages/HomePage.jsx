import React from 'react'

const HomePage = () => {
    return (
        <div className='flex justify-between items-center min-h-[80vh] bg-stone-50'>
            <div className='w-full lg:w-1/2 p-16'>
                <h1 className='text-6xl font-bold leading-tight mb-6'>Get Your Best Cosmetic Products Here</h1>
                <p className='text-lg text-gray-600 mb-10 max-w-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                <div className='flex w-full max-w-md mb-8 border border-gray-300'>
                    <input
                        type="search"
                        placeholder="Search..."
                        className='p-4 w-full focus:outline-none'
                    />
                    <button className='bg-stone-700 w-16 flex items-center justify-center text-white'>
                        <img src="/svg/Search.svg" alt="" />
                    </button>
                </div>
                <button className='bg-stone-700 text-white text-lg font-semibold py-4 px-10 hover:bg-stone-900 transition-colors'>
                    Shop Now
                </button>
            </div>
            <div className='hidden lg:block lg:w-1/2 relative min-h-[80vh] overflow-hidden'>
                <img src="/HomeSection.png" alt="Cosmetic Products" className='absolute inset-0 w-full h-full object-cover' />
            </div>
        </div>
    )
}

export default HomePage