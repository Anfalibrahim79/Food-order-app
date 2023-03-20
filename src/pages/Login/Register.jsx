import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className="w-full h-screen font-sans bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100 background-animate">
            <div className="container flex items-center justify-center flex-1 h-full mx-auto">
                <div className="w-full max-w-lg">
                    <div className="leading-loose">
                        <form className="max-w-sm p-10 m-auto rounded shadow-xl bg-white/25">
                            <h2 className="mb-8 text-2xl font-light text-center text-slate-500 ">
                                Register
                            </h2>
                            <div className="mb-2">
                                <div className=" relative ">
                                    <input type="text" id="register-with-bg-fullname" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Full Name" />
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className=" relative ">
                                    <input type="text" id="register-with-bg-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email" />
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className=" relative ">
                                    <input type="text" id="register-with-bg-password" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Password" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-10">
                                <button type="submit" className="py-2 px-4  bg-indigo-600 hover:bg-white focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white hover:text-indigo-600 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Create Account
                                </button>
                            </div>
                            <div className='flex items-center flex-col mt-5'>
                                <p className="text-sm text-gray-600 mb-3">
                                    Already have an account? <Link to="/login" className='font-bold hover:text-white'>Login</Link>
                                </p>
                                <Link to={'/'} className="right-0 inline-block text-sm font-semibold align-baseline text-gray-600 hover:text-white">
                                    Back To Home
                                </Link>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register