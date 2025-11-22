import React from 'react'

const FacebookIcon = (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M19 0H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h7.584V14.475H10.12V11.5h2.464V9.32c0-2.433 1.485-3.766 3.65-3.766 1.034 0 1.928.077 2.193.111v2.536h-1.503c-1.18 0-1.41.562-1.41 1.385V11.5h2.813l-.48 2.975H15.428v9.525H19c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5z" /></svg>
);
const TwitterIcon = (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.795-1.574 2.16-2.72.955.57 2.005.974 3.12 1.265-1.02.607-2.19.986-3.414 1.26-.96.96-2.342 1.558-3.954 1.558-3.045 0-5.513-2.468-5.513-5.513 0-.43.048-.847.138-1.25.048-.204.098-.408.15-.612C9.407 8.356 5.86 6.32 3.425 3.16.89 7.684.58 9.24.58 9.53c0 1.91.97 3.593 2.443 4.587-.796-.026-1.545-.245-2.2-.605v.068c0 2.66 1.895 4.88 4.404 5.39-.44.119-.89.17-1.35.17-.32 0-.64-.032-.95-.088.7 2.186 2.736 3.774 5.15 3.815-1.884 1.47-4.266 2.355-6.84 2.355-.44 0-.88-.026-1.31-.078C2.08 22.868 4.67 24 7.42 24c8.423 0 13.033-6.974 13.033-13.033 0-.2.005-.4.01-.6.897-.65 1.677-1.46 2.3-2.39z" /></svg>
);
const InstagramIcon = (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-3.565 0-4.008.016-5.418.077C5.176.15 4.14 1.18 4.067 2.592c-.06 1.41-.077 1.853-.077 5.418s.017 4.008.077 5.418c.074 1.412 1.108 2.446 2.52 2.52c1.41.06 1.853.077 5.418.077s4.008-.016 5.418-.077c1.412-.074 2.446-1.108 2.52-2.52.06-1.41.077-1.853.077-5.418s-.016-4.008-.077-5.418c-.074-1.412-1.108-2.446-2.52-2.52C16.008.016 15.565 0 12 0zm0 4.156c2.478 0 2.77.01 3.748.053 1.01.043 1.637.52 1.96 1.848.32 1.328.307 1.62.307 3.518s-.013 2.19-.307 3.518c-.323 1.328-.95 1.805-1.96 1.848-1.01.043-1.27.053-3.748.053s-2.738-.01-3.748-.053c-1.01-.043-1.637-.52-1.96-1.848-.32-1.328-.307-1.62-.307-3.518s.013-2.19.307-3.518c.323-1.328.95-1.805 1.96-1.848C9.23 4.166 9.522 4.156 12 4.156zM12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 2.768a1.732 1.732 0 1 1 0 3.464 1.732 1.732 0 0 1 0-3.464zm6.46-4.228a1.144 1.144 0 1 0 0 2.288 1.144 1.144 0 0 0 0-2.288z" /></svg>
);


const Footer = () => {
    return (
        <footer className='w-full bg-gray-50'>
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-16 px-4 border-b border-gray-200'>

                <h1 className='text-2xl md:text-3xl font-bold mb-6 md:mb-0 text-stone-900'>
                    Subscribe to Get Our Latest News
                </h1>

                <div className='flex'>
                    <input
                        type="email"
                        placeholder="Enter email"
                        className='p-4 w-72 focus:outline-none bg-white border-none'
                    />
                    <button
                        className='bg-stone-800 text-white px-6 py-4 font-semibold hover:bg-stone-900 transition-colors'
                    >
                        Subscribe
                    </button>
                </div>
            </div>

            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-x-16 gap-y-10 py-16 px-4 text-gray-700'>
                <div className='col-span-1 md:col-span-2 pr-6'>
                    <p className='font-bold text-2xl border-b-2 border-black tracking-wider cursor-pointer inline-block mb-6 text-stone-900'>
                        Dudeshape
                    </p>
                    <p className='text-sm leading-relaxed max-w-sm'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                    </p>
                </div>

                <div className='col-span-1'>
                    <h3 className='text-lg font-semibold mb-6 text-stone-900'>Quick Link</h3>
                    <ul className='space-y-3'>
                        <li><a href="#" className='text-sm hover:text-black transition-colors'>Home</a></li>
                        <li><a href="#" className='text-sm hover:text-black transition-colors'>Products</a></li>
                        <li><a href="#" className='text-sm hover:text-black transition-colors'>About Us</a></li>
                        <li><a href="#" className='text-sm hover:text-black transition-colors'>Contact Us</a></li>
                    </ul>
                </div>

                <div className='col-span-1'>
                    <h3 className='text-lg font-semibold mb-6 text-stone-900'>Contact Us</h3>
                    <ul className='space-y-3'>
                        <li className='text-sm'>oyasimnaeem@email.com</li>
                        <li className='text-sm'>+123456789</li>
                    </ul>

                    <div className='flex gap-4 mt-6'>
                        <a href="#" className='text-gray-500 hover:text-black transition-colors'>
                            <FacebookIcon className='w-5 h-5' />
                        </a>
                        <a href="#" className='text-gray-500 hover:text-black transition-colors'>
                            <TwitterIcon className='w-5 h-5' />
                        </a>
                        <a href="#" className='text-gray-500 hover:text-black transition-colors'>
                            <InstagramIcon className='w-5 h-5' />
                        </a>
                    </div>
                </div>
            </div>

            <div className='w-full bg-gray-200 py-3 text-center text-xs text-gray-500'>
                © {new Date().getFullYear()} Dudeshape. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer