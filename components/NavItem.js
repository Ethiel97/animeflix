import Link from 'next/link'
import React from 'react'

const NavItem = ({ title, link, Icon }) => {
    return (
        <Link href={link}>
            <div className='flex flex-col mx-5 text-xl 
            h-auto transition-all duration-150 
            group overflow-hidden active:text-red-500'>
                <Icon className='h-8 mb-1 duration-200 transform  sm:translate-y-4 sm:group-hover:translate-y-0 sm:group-hover:text-white' />
                <p className='transform duration-[275] opacity-0 translate-y-full 
                sm:group-hover:translate-y-0  
                sm:group-hover:opacity-100 tracking-widest'>{title}</p>
            </div>
        </Link>
    )
}

export default NavItem
