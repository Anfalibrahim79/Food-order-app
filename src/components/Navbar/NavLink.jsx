import React from 'react'

const NavLink = ({ href, children }) => {
    return (
        <div>
            <a className="text-gray-700  hover:text-white dark:hover:text-white px-3 py-2 rounded-md text-sm md:text-lg cursor-pointer font-medium" href={href}>
                {children}
            </a>
        </div>
    )
}

export default NavLink