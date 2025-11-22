import React from 'react'

const CardComponent = ({ imgSrc, title, description, price }) => {
    const formattedPrice = `$${price}`;

    return (
        <div className='w-[600px] rounded-lg overflow-hidden shadow-xl bg-white'>
            <div className='h-[480px] bg-stone-100 flex justify-center items-center'>
                <img
                    src={imgSrc}
                    alt={title}
                    className='h-full w-full object-cover transform -rotate-3'
                />
            </div>

            <div className='p-10'>

                <h2 className='text-3xl font-bold mb-4 text-stone-900'>
                    {title}
                </h2>

                <p className='text-base text-gray-600 mb-8 leading-relaxed'>
                    {description}
                </p>

                <div className='flex items-center justify-between'>

                    <div className='flex gap-3'>
                        <button className='bg-stone-800 text-white font-medium py-3 px-6 rounded-md hover:bg-stone-900 transition-colors text-base'>
                            Buy Now
                        </button>
                        <button className='border border-gray-300 text-stone-800 font-medium py-3 px-6 rounded-md hover:bg-gray-100 transition-colors text-base'>
                            Add To Cart
                        </button>
                    </div>

                    <p className='text-2xl font-bold text-stone-900'>{formattedPrice}</p>
                </div>
            </div>
        </div>
    )
}

export default CardComponent