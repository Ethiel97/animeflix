import { PlayIcon } from '@heroicons/react/outline'
import Link from 'next/link'

export default function Logo() {
    return (
        <Link href='/'>
            <div className='flex flex-wrap text-red-400 items-center justify-center'>
                <PlayIcon className='h-10 self-center' />
                <h1 className='text-3xl font-bold ml-3'>
                    AnimeFlix
                </h1>
            </div>
        </Link>
    )
}
