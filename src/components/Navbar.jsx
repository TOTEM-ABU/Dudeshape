import React from 'react'

const Navbar = () => {
    return (
        <nav className='w-full bg-stone-50'>
            <div className='max-w-7xl mx-auto flex items-center justify-between py-6 px-4'>

                <p className='font-bold text-2xl border-b-2 border-black tracking-wider cursor-pointer'>
                    Dudeshape
                </p>

                <div className='hidden md:flex gap-12 text-gray-700 text-lg'>
                    <a href="#" className='hover:text-black transition-colors'>Home</a>
                    <a href="#" className='hover:text-black transition-colors'>Products</a>
                    <a href="#" className='hover:text-black transition-colors'>About Us</a>
                    <a href="#" className='hover:text-black transition-colors'>Contact Us</a>
                </div>

                <div className='flex items-center gap-6'>
                    <img src="/svg/Profile.svg" alt="Profile icon" className='w-6 h-6 cursor-pointer' />
                    <img src="/svg/Buy.svg" alt="Buy icon" className='w-6 h-6 cursor-pointer' />
                    <img src="/svg/Menu.svg" alt="Menu icon" className='w-6 h-6 cursor-pointer' />
                </div>
            </div>
        </nav>
    )
}

export default Navbar