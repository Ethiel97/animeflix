import Image from 'next/image'
import { useRouter } from "next/router";
import {
    PlayIcon, ThumbUpIcon
} from '@heroicons/react/outline'
import { AnimeProp } from './utils';

const AnimeThumbnail = ({ anime }) => {

    const router = useRouter();
    const watchTrailer = () => {
        console.log(anime.trailer.embed_url)
        if (anime.trailer.embed_url)
            window.open(anime.trailer.url, '_blank')
    }


    return (
        <div onClick={() => { router.push(`/animes/${anime.mal_id}`) }}
            className='group transform transition duration-200 ease-in-out w-[302px] sm:hover:scale-95'>
            <div className=' cursor-pointer transform hover:z-50 relative' >
                {/* anime image */}
                <Image
                    className='object-fill rounded-md'
                    layout='responsive'
                    quality={100}
                    src={anime.images.jpg.large_image_url}
                    alt={anime.title}
                    height={1020}
                    width={1080} />

                {/* thumbnail mask */}
                <div className='absolute w-full top-0 left-0 right-0 bottom-0 bg-black/40 rounded-md'>
                    <div className='flex justify-between mt-3 ml-3 mr-3'>
                        {/* anime year */}
                        <div className='text-black text-sm text-center
                     font-bold p-2  rounded-sm bg-slate-200/60 w-14'>{anime.year || '-'}</div>

                        <PlayIcon className='w-14 h-8' onClick={watchTrailer} />
                    </div>

                </div>
            </div>

            {/* anime title */}
            <div className='mt-3'>
                <h3 className='text-white truncate duration-100 ease-in-out 
                sm:group-hover:text-red-500 text-xl font-bold'>
                    {anime.title}
                </h3>

                <div className='flex justify-start space-x-4 mt-2'>
                    <AnimeProp text={anime.type.toUpperCase()} >
                        <PlayIcon className='text-white w-5' />
                    </AnimeProp>
                    <AnimeProp text={anime.score} >
                        <ThumbUpIcon className='text-white w-5' />
                    </AnimeProp>
                </div>
                {/*  <p className='truncate max-w-md'> {result.overview}   </p>

                <h2 className='mt-1 text-2-xl transition-all
                 duration-100 ease-in-out group-hover:font-bold'>
                    {result.title || result.original_name}
                </h2>

                <p className='flex items-center opacity-0 group-hover:opacity-100'>
                    {result.media_type && `${result.media_type} • `}
                    {result.release_date || result.first_air_date} • {" "}
                    <ThumbUpIcon className='h-5 mx-2' /> {result.vote_count}
                </p> */}
            </div>
        </div>
    )




}

export default AnimeThumbnail
