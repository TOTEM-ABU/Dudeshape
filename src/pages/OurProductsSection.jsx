import { CardComponent } from '../components'

const products = [
    {
        id: 1,
        imgSrc: '/public/pump-bottle-02 1.png',
        title: 'Cosmetic products',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy',
        price: 120
    },
    {
        id: 1,
        imgSrc: '/public/jar-15 1.png',
        title: 'Cosmetic products',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy',
        price: 120
    }
]

const OurProductsSection = () => {
    return (
        <div className='w-full mt-16 px-4'>
            <div className='max-w-7xl mx-auto'>

                <div className='flex flex-col md:flex-row justify-between items-start mb-10'>
                    <div>
                        <h1 className='text-4xl md:text-5xl font-bold mb-4 text-stone-900'>Our Popular Product</h1>
                        <p className='text-base md:text-lg text-gray-600 max-w-2xl'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                        </p>
                    </div>

                    <a href="#" className='flex items-center gap-2 group cursor-pointer mt-4 md:mt-0'>
                        <span className='text-lg font-medium border-b border-black group-hover:border-stone-800 transition-colors'>
                            Discover Our Products
                        </span>
                        <svg className='w-5 h-5 transform translate-x-0 group-hover:translate-x-1 transition-transform' fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </a>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 justify-items-center'>

                    <CardComponent
                        imgSrc={products[0].imgSrc}
                        title={products[0].title}
                        description={products[0].description}
                        price={products[0].price}
                    />

                    <CardComponent
                        imgSrc={products[1].imgSrc}
                        title={products[1].title}
                        description={products[1].description}
                        price={products[1].price}
                    />
                </div>
            </div>
        </div>
    )
}

export default OurProductsSection