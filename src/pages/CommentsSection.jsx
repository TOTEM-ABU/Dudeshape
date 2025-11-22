import React from 'react'

const CommentsSection = () => {
    const review = {
        rating: 4,
        title: "Amazing Cosmetic",
        comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        name: "Rusmin Islam",
        designation: "Designer"
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.968 6.046h6.388c.969 0 1.371 1.24.588 1.81l-5.183 3.78 1.968 6.046c.3.921-.755 1.688-1.54 1.14l-5.183-3.78-5.183 3.78c-.785.548-1.84-.219-1.54-1.14l1.968-6.046L.182 10.783c-.783-.57-.381-1.81.588-1.81h6.388l1.968-6.046z" />
                </svg>
            );
        }
        return stars;
    };

    return (
        <div className='w-full mt-16 px-4 py-20 bg-white'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col lg:flex-row items-start justify-between gap-12'>

                    <div className='w-full lg:w-1/2 mt-0'>
                        <div className='overflow-hidden rounded-lg'>
                            <img
                                src="/Woman.png"
                                alt="Sharh bergan shaxs"
                                className='w-full h-full object-cover shadow-lg'
                            />
                        </div>
                    </div>

                    <div className='w-full lg:w-1/2'>

                        <h4 className='text-3xl font-bold mb-2 text-stone-900'>
                            {review.title}
                        </h4>

                        <div className='flex gap-1 mb-6'>
                            {renderStars(review.rating)}
                        </div>

                        <p className='text-lg text-gray-700 mb-8 max-w-full'>
                            <span className='text-4xl text-green-500 font-serif mr-2'>“</span>
                            {review.comment}
                            <span className='text-4xl text-green-500 font-serif ml-2'>”</span>
                        </p>

                        <h5 className='text-xl font-bold text-stone-900 mt-4'>
                            {review.name}
                        </h5>
                        <p className='text-gray-600 text-base mb-8'>
                            {review.designation}
                        </p>

                        <div className='flex gap-3'>
                            <button className='w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors'>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <button className='w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors'>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentsSection