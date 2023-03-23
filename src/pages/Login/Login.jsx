import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../api/auth';
import { useDispatch } from 'react-redux';
import { login } from '../../feature/auttSlice/authSlice';




const schema = yup.object({
    email: yup.string().email('Email harus valid').required('Email harus diisi'),
    password: yup.string().min(8, 'Password minimal 8 karakter').required('Password harus diisi')
}).required();

const Login = () => {
    const {register, handleSubmit, formState : {errors}, setError} = useForm({
        resolver : yupResolver(schema)
    })
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onSubmit =async (form) => {
        console.log(form,"hi");
        const {data } =await loginUser(form)
        console.log(data);
        if(data.error){
            setError("password", {type : "invalidCredential", message : data.message})
        }else {
            const { user, token} = data
            console.log(user);
            dispatch(login({user, token}))
            navigate('/product')
        }
    }

    return (
        <>
            <div className="w-full h-screen font-sans bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100 background-animate">
                <div className="container flex items-center justify-center flex-1 h-full mx-auto">
                    <div className="w-full max-w-lg">
                        <div className="leading-loose">
                            <form className="max-w-sm p-10  m-auto rounded-xl shadow-2xl bg-white/25" onSubmit={handleSubmit(onSubmit)}>
                                <p className="mb-8 text-2xl font-semibold text-center text-slate-500">
                                    Login
                                </p>
                                <div className="mb-2">
                                    <div className=" relative ">
                                        <input type="text" id="login-with-bg-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="email" {...register("email")} isInvalid={errors.email}/>
                                    <span className='text-red-500'>{errors.email?.message}</span>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <div className=" relative ">
                                        <input type="password" id="login-with-bg-password" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="password" {...register("password")} isInvalid={errors.password} />
                                        <span  className='text-red-500'>{errors.password?.message}</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <button type="submit" className="py-2 px-4  bg-indigo-600 hover:bg-white  focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white hover:text-indigo-600 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        Validate
                                    </button>
                                </div>
                                <div className="text-center flex flex-row justify-center gap-3 mt-4">
                                    <Link to={'/register'} className="right-0 inline-block text-sm align-baseline font-semibold text-500 hover:text-white">
                                        Create an account
                                    </Link>
                                    <Link to={'/forgot-password'} className="right-0 inline-block text-sm align-baseline font-semibold text-500 hover:text-white">
                                        Forgot password?
                                    </Link>
                                    <Link to={'/'} className="right-0 inline-block text-sm align-baseline font-semibold text-500 hover:text-white">
                                        Back To Home
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login