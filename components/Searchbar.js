import React from 'react'
import { useState } from 'react';

import {
    SearchIcon
} from "@heroicons/react/outline";

const Searchbar = () => {
    const [query, setQuery] = useState('query');

    return (
        <div className='rounded-md focus:ring flex items-center h-auto p-4 border-[2] w-1/3 bg-[#0f2834]' >
            <SearchIcon className='opacity-60 h-5' />

            <input onChange={(e) => setQuery(e.target.value)}
            placeholder='search your anime'
                className='border-0 text-xl focus:outline-none text-white ml-12 bg-transparent' />
        </div>
    )
}

export default Searchbar
