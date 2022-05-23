import AnimeThumbnail from './AnimeThumbnail'
import Carousel from 'react-grid-carousel'
import ContentShimmer from 'react-content-shimmer'
import Image from 'next/image'
import noAnime from '../assets/images/no-data.svg'

const AnimeList = ({ animes, loading }) => {
    const responsive = [
        { breakpoint: 2000, cols: 6, rows: 3 },
        { breakpoint: 1200, cols: 5, rows: 2 },
        { breakpoint: 990, cols: 4, rows: 2 },
        // { breakpoint: 464, cols: 1 },
    ];

    const renderShimmer = () => {
        return <>
            {
                <Carousel
                    cols={5}
                    rows={1}
                    gap={8}
                    loop
                    mobileBreakpoint={464}>

                    {new Array(10).fill(0).map((_, index) => (
                        <Carousel.Item
                            className='rounded-md overflow-visible'
                            swipeable={true}
                            draggable={true}
                            showDots={true}
                            ssr={false} // means to render carousel on server-side.
                            infinite={true}
                            key={index * 2}
                            responsive={responsive}>

                            <p>loading</p>
                            {/* <ContentShimmer
                                key={index} size={{ height: 313, width: 332 }}
                                rounded={"7px"}
                            /> */}
                        </Carousel.Item>
                    ))}
                </Carousel>
            }
        </>
    }

    const renderAnimes = () => {
        return (
            <Carousel
                className='overflow-visible'
                cols={4}
                rows={1}
                gap={8}
                loop
                mobileBreakpoint={464} >
                {animes.map((anime, index) => (
                    <Carousel.Item
                        className='rounded-md overflow-visible'
                        swipeable={true}
                        draggable={true}
                        showDots={true}
                        key={anime.mal_id + index * 3}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        responsive={responsive}>
                        <AnimeThumbnail key={anime.mal_id} anime={anime} />
                    </Carousel.Item>
                )
                )}
            </Carousel>
        )
    }

    const noData = () => {
        return (
            <div className='flex flex-col items-center justify-center'>
                <h3 className='mx-4 text-red-500 text-2xl sm:text-3xl font-bold mt-20 mb-8'>
                    No anime found
                </h3>

                <Image
                    className='object-cover rounded-md mt-4 w-[20%]'
                    alt={'No anime found'}
                    layout='intrinsic'
                    src={noAnime}
                />
            </div>
        )
    }

    const render = () => {
        if (loading) {
            return renderShimmer()
        }

        else if (animes && animes.length <= 0) {
            return noData();
        }

        return renderAnimes();
    }

    return render();
}

export default AnimeList
