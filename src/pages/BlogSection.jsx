import React from 'react'

const BlogSection = () => {
    return (
        <div className='w-full mt-16 px-4 py-20'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
                    <div className='w-full lg:w-1/2'>
                        <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-stone-900'>
                            The Perfect Beauty Of You
                        </h1>

                        <p className='text-lg text-gray-600 mb-6 max-w-lg'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <p className='text-lg text-gray-600 mb-10 max-w-lg'>
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>

                        <button className='bg-stone-800 text-white text-lg font-semibold py-4 px-10 rounded-sm hover:bg-stone-900 transition-colors'>
                            Shop Now
                        </button>
                    </div>

                    <div className='w-full lg:w-1/2 mt-10 lg:mt-0'>
                        <div className='aspect-w-1 aspect-h-1 lg:aspect-w-4 lg:aspect-h-5 overflow-hidden rounded-lg'>
                            <img
                                src="/public/Rectangle 8.png"
                                alt="Product image"
                                className='w-full h-full object-cover shadow-lg'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSection