import React from 'react'
import { Outlet } from 'react-router-dom'
import Waves from '../../assets/wave.svg'
const Account = () => {
    return (
        <div>
            <div className='mx-auto p-10 pt-32  max-w-screen-xl bg-cover h-screen sm:h-screen ' style={{ backgroundImage: `url(${Waves})` }}>
                <Outlet/>
            </div>
        </div>
    )
}

export default Account