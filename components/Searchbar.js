import React from 'react'
import { useState } from 'react';
import { useRouter } from "next/router";
import { useDebouncedCallback } from 'use-debounce';

import {
    SearchIcon
} from "@heroicons/react/outline";

const Searchbar = () => {
    const router = useRouter();
    const [query, setQuery] = useState('');

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            redirectToSearchPage();
        }
    }

    const debounced = useDebouncedCallback(
        // function
        (value) => {
            setQuery(value)
            redirectToSearchPage();
        },
        // delay in ms
        3000
    );

    const redirectToSearchPage = () => {
        if (query.length > 0) {
            router.push(`/search?query=${query}`);
        }
    }
    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    return (
        <div className='rounded-md focus:ring flex items-center h-auto p-4 border-[2] w-1/3 bg-[#0f2834]/40' >
            <SearchIcon className='opacity-60 h-5' />

            <input
                onKeyDown={handleKeyDown}
                value={query} onChange={(e) => debounced.callback(e.target.value)}
                placeholder='search your anime'
                className='border-0 text-xl focus:outline-none text-white ml-12 bg-transparent' />
        </div>
    )
}

export default Searchbar