import React from 'react'
import Healthy from '../../assets/healthy.svg'
import Discount from '../../assets/discount.svg'
import Quality from '../../assets/quality.svg'
import Saving from '../../assets/saving.svg'
import Faster from '../../assets/faster.svg'
import Spoon from '../../assets/spoon.svg'
import { Link } from 'react-router-dom'
import 'aos/dist/aos.css';
import AOS from 'aos'



AOS.init();
const Home = () => {
    const card = [
        {
            desc: 'Unbeatable discounts for your budget-friendly meals!',
            svg: Discount,
        },
        {
            desc: 'Healthy and delicious - nourish your body with us!',
            svg: Healthy,
        },
        {
            desc: 'Great value for your money - save more with us!',
            svg: Saving,
        },
        {
            desc: 'Fast delivery at your doorstep! 30 minute guarantee',
            svg: Faster,
        },
        {
            desc: 'Endless choices to satisfy your cravings!',
            svg: Spoon,
        },
        {
            desc: 'Experience the finest quality, every time.',
            svg: Quality,
        },
    ]
    return (
        <div>
            {/* herosection */}
            <section className='max-w-screen-xl'>
                <div className=" w-full px-4 py-20 sm:py-20 sm:px-6 lg:py-22 lg:px-8 bg-gradient-to-bl from-gray-700 via-gray-900 to-black">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <img alt="Food-Delivery" src="https://imageio.forbes.com/specials-images/imageserve/5fe16bf53ba69575bb1cd088/0x0.jpg?format=jpg&crop=8995,6000,x0,y0,safe&width=1200" className="absolute inset-0 h-full w-full object-cover transition duration-300 ease-in-out hover:scale-110" />
                        </div>
                        <div className="lg:py-24">
                            <h2 className="text-4xl font-bold sm:text-4xl text-white">Order your <span className='animated-text '>favorite meals</span> with just a few clicks!</h2>
                            <p className="mt-4 text-gray-400">
                                Welcome to our online food ordering platform, where you can easily browse through a wide variety of delicious meals and place your order with just a few clicks.
                            </p>
                            <div className='flex flex-col md:flex-row md:justify-center gap-2 mt-6'>
                                <Link to={'/product'} className="mt-8 px-8 py-3 text-sm font-medium text-white btn btn-outline btn-secondary ">
                                    Order Now
                                </Link>
                                <Link to={'/login'} className="mt-8 px-12 py-3 text-sm font-medium text-white btn btn-outline btn-accent">
                                    Sign in
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end */}
                {/* Container */}
                <div className='mx-auto max-w-screen-xl pt-16 pb-8'>
                    <h1 className='flex text-3xl md:text-4xl text-slate-700 px-4 font-bold  justify-center items-center pb-10'>Order your cravings and let us do the rest!</h1>
                    <div data-aos="fade-up"
                        data-aos-duration="2000" className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 gap-4'>
                        {
                            card.map((el, i) => {
                                return (
                                    <>
                                        <div key={i} className="relative flex rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8 cursor-pointer" href="#">
                                            <div className="pt-4 text-gray-500 flex justify-center sm:flex-col sm:items-center md:flex-col">
                                                <img data-aos="fade-up" src={el.svg} alt="Logo" className='w-32 h-32 ' />
                                                <h3 data-aos="fade-down" className="mt-4 text-xl font-bold text-gray-900 sm:text-2xl">
                                                    {el.desc}
                                                </h3>
                                            </div>

                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
            {/* end */}

        </div>
    )
}

export default Home