import React, { useState } from 'react'
import Logo from '../../assets/logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { GrBasket } from 'react-icons/gr'
import { CgProfile } from 'react-icons/cg'
import NavLink from './NavLink'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isAuth, setIsAuth] = useState(false)
    const navigation = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "Product",
            href: '/product'
        }
    ]
    return (
        <div>
            <header className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 fixed w-full md:h-14 shadow-lg z-20">
                <div className="px-6 mx-auto w-full">
                    <div className='flex items-center justify-between'>


                        <div className=" flex items-center">
                            <Link to={'/'} className="flex-shrink-0">
                                <img className="w-14 h-14 md:w-12 md:h-12 p-1 hover:transition-all hover:scale-75" src={Logo} alt="Logo" />
                            </Link>
                            <div className="hidden md:block">
                                <div className="flex mx-auto items-baseline ml-10 space-x-4">
                                   <Link to={'/product'}>
                                        Product
                                   </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex ">
                            <div className="flex items-center gap-8  md:ml-6">
                                <div className='flex items-center cursor-pointer text-2xl md:text-3xl'>
                                    <GrBasket />
                                    <div className="absolute top-2 w-4 h-4 rounded-full bg-cyan-500 flex items-center justify-center">
                                        <p className="text-sm text-white font-semibold">0</p>
                                    </div>
                                </div>
                                <div className='items-center hidden md:block'>
                                    {
                                        !isAuth ? <div className="dropdown dropdown-bottom dropdown-end">
                                            <label tabIndex={0} className="btn m-1"><CgProfile /></label>
                                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                                <li><Link to={'/account/profile'}>Profile</Link></li>
                                                <hr />
                                                <li><Link to={'/account/address'}>Address</Link></li>
                                                <hr />
                                                <li><Link to={'/account/order-history'}>Order History</Link></li>
                                                <hr />
                                                <li><Link to={'/'}>Logout</Link></li>
                                            </ul>
                                        </div> :
                                            <Link to={'/login'} className="inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75" href="/">
                                                <span className="block rounded-full bg-white px-8 py-2 text-sm font-medium hover:bg-transparent">
                                                    Login
                                                </span>
                                            </Link>
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="flex -mr-2 md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 dark:text-white hover:text-black-500 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                                {
                                    isOpen ? <GrClose /> : <GiHamburgerMenu />
                                }

                            </button>
                        </div>
                    </div>
                </div>
                <div className={`${isOpen ? 'block' : 'hidden'}`}>
                    <div className="px-6 py-2 items-center">
                        {
                            !isAuth ? <ul className='flex flex-col gap-2 items-center'>

                                <li><Link to={'/'}>Home</Link></li>
                                <li><Link to={'/product'}>Products</Link></li>
                                <li><Link to={'/account/profile'}>Profile</Link></li>
                                <li><Link to={'/account/address'}>Address</Link></li>
                                <li><Link to={'/account/order-history'}>Order History</Link></li>
                                <li><Link to={'/'}>Logout</Link></li>
                            </ul> :
                                <Link to={'/login'} className="inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75" href="/">
                                    <span className="block rounded-full bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
                                        Login
                                    </span>
                                </Link>
                        }
                    </div>
                </div>
            </header>
        </div>

    )
}

export default Navbar