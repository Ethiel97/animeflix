import { PlayIcon } from '@heroicons/react/outline'
import React from 'react'

export default function Logo() {
    return (
        <div className='flex flex-wrap text-red-400 items-center justify-center'>
            <PlayIcon className='h-10 self-center' />
            <h1 className='text-3xl font-bold ml-3'>
                AnimeFlix
            </h1>
        </div>
    )
}
