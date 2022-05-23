import Link from 'next/link'
import { useRouter } from "next/router";

const NavItem = ({ title, link, Icon }) => {
    const router = useRouter();
    return (
        <Link
            className={router.pathname == link ? "text-red-500" : ""}
            href={link}>
            <div className='flex flex-col justify-center mx-5 text-xl 
            h-auto transition-all duration-150 
            group overflow-hidden active:text-red-500'>
                <Icon className='h-8 mb-1 duration-200 transform  sm:translate-y-4 sm:group-hover:translate-y-0 sm:group-hover:text-white' />
                <p className='transform duration-[275] opacity-0 hidden sm:block sm:translate-y-full 
                sm:group-hover:translate-y-0  
                sm:group-hover:opacity-100 tracking-widest'>{title}</p>
            </div>
        </Link>
    )
}

export default NavItem
