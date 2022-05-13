import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import ContentShimmer from 'react-content-shimmer'

const Banner = ({ anime }) => {
    /* const [bannerImage, setBannerImage] = useState('');

    useEffect(() => {
        setBannerImage(anime.images.jpg.large_image_url);
    })
 */
    let bannerImage = anime.trailer.images.maximum_image_url ? anime.trailer.images.maximum_image_url : anime.images.jpg.large_image_url
    /* useEffect(async () => {
        setIsLoading(true);
        const tempAnime = await props?.data;
        setAnime(tempAnime);
        bannerImage = anime.trailer.images.maximum_image_url ? anime.trailer.images.maximum_image_url : anime.images.jpg.large_image_url
        setIsLoading(false);
    }, [])
 */

    return (
        <div>
            {anime ? renderBanner() : shimmer()}
        </div>
    )


    function watchTrailer() {
        console.log(anime.trailer.embed_url)
        if (anime.trailer.embed_url)
            window.open(anime.trailer.url, '_blank')
    }

    function shimmer() {
        return (
            <div>
                <ContentShimmer className='h-[300px] w-[1080px] p-4 mx-4 my-4 bg-cover rounded-md relative' />
            </div>
        )
    }

    function renderBanner() {
        return (<div
            // style={{ backgroundImage: `url(${anime.trailer.images.maximum_image_url})` }}
            className={`p-4 mx-4 my-4 bg-cover rounded-md relative`}>
            <Image
                className='object-cover rounded-md bg-black/100 bg-blend-color'
                objectFit={true}
                layout='responsive'
                // placeholder='blur'
                // blurDataURL='{bannerImage}'
                src={bannerImage}
                height={300}
                width={1080} />

            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/60 rounded-md m-4'>
                <div className='mx-5 flex-col sm:mx-10 sm:flex sm:flex-row items-center space-x-4 sm:space-x-12 justify-between h-[100%]'>
                    <div className='text-white sm:w-[45%] break-words text-bold text-2xl sm:text-3xl md:text-5xl uppercase'>{anime.title}</div>
                    <div onClick={watchTrailer} className='bg-red-500 p-4 text-white font-bold rounded-md cursor-pointer'>
                        Watch now
                    </div>
                </div>
            </div>

        </div>)
    }

}

export default Banner
