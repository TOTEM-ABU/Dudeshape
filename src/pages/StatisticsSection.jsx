import React from 'react'

const StatisticsSection = () => {
    return (
        <div className='w-full mt-16 px-4 bg-stone-50 py-16'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-wrap justify-between items-center gap-8 md:gap-12 text-center'>
                    <div className='flex flex-col items-center w-full md:w-auto p-4'>
                        <h1 className='text-4xl md:text-5xl font-bold mb-3 text-stone-900'>
                            <span className='pb-1 border-b-2 border-black inline-block'>100%</span>
                        </h1>
                        <p className='text-gray-600 text-lg'>Organic Products</p>
                    </div>

                    <div className='flex flex-col items-center w-full md:w-auto p-4'>
                        <h1 className='text-4xl md:text-5xl font-bold mb-3 text-stone-900'>
                            <span className='pb-1 border-b-2 border-black inline-block'>2M+</span>
                        </h1>
                        <p className='text-gray-600 text-lg'>Yearly Sales</p>
                    </div>

                    <div className='flex flex-col items-center w-full md:w-auto p-4'>
                        <h1 className='text-4xl md:text-5xl font-bold mb-3 text-stone-900'>
                            <span className='pb-1 border-b-2 border-black inline-block'>1.9M+</span>
                        </h1>

                        <p className='text-gray-600 text-lg'>Happy Customer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatisticsSection