import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { useDebounce } from '../custom_hooks'


import {
    SearchIcon
} from "@heroicons/react/outline";

const Searchbar = () => {
    const router = useRouter();
    const [query, setQuery] = useState('');

    //write a use effect hook to clear the query if the current page is not search
    useEffect(() => {
        if (router.pathname !== '/search') {
            setQuery('');
        }
    }, [router.pathname])

    useDebounce(() => {
        // function which will be running on effect, 
        // in our case when something changes in search box.
        redirectToSearchPage()
    },
        // time to wait before effect runs
        680,
        // this is the dependency, if it changes it will trigger 
        // the debounce again
        [query]
    )

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            redirectToSearchPage();
        }
    }

    const redirectToSearchPage = () => {
        if (query && query.length > 0) {
            router.push(`/search?query=${query}`);
        }
    }

    return (
        <div className='rounded-md focus:ring flex items-center h-auto p-4 border-[2] w-1/3 bg-[#152232]/40' >
            <SearchIcon className='opacity-60 h-7 w-10' />

            <input
                onKeyDown={handleKeyDown}
                value={query} onChange={(e) => setQuery(e.target.value)}
                placeholder='Type naruto'
                className='border-0 text-xl font-bold focus:outline-none text-white ml-5 bg-transparent' />
        </div>
    )
}

export default Searchbar
