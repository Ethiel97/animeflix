import Logo from './Logo';

import {
    HomeIcon,
    ThumbUpIcon,
    HeartIcon,
} from "@heroicons/react/outline";
import NavItem from './NavItem';
import Searchbar from './Searchbar';

const items = [
    {
        'title': 'Home',
        'link': '/',
        'icon': HomeIcon,
    },
    {
        'title': 'Top',
        'link': '/top',
        'icon': ThumbUpIcon,
    },
    /* {
        'title': 'Recoms',
        'link': '/recommendations',
        'icon': ThumbUpIcon,
    } */
];
export default function Header() {
    return (
        <div className='flex flex-col sm:flex-row m-8 justify-center 
         sm:justify-between items-center cursor-pointer h-auto'>
            <div className='flex justify-between'>
                <Logo />

                <ul className='flex justify-between space-x-4 sm:ml-14'>
                    {items.map(({ link, title, icon }, index) =>
                        <NavItem key={title} link={link} Icon={icon} title={title} />)}
                </ul>
            </div>

            <Searchbar />
        </div>
    )
}
