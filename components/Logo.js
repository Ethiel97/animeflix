import { PlayIcon } from '@heroicons/react/outline'
import Link from 'next/link'

export default function Logo() {
    return (
        <Link href='/'>
            <div className='flex flex-wrap text-red-400 items-center justify-center'>
                <PlayIcon className='h-10 self-center' />
                <h1 className='text-2xl sm:text-3xl font-bold sm:ml-3'>
                    AnimeInfo
                </h1>
            </div>
        </Link>
    )
}
