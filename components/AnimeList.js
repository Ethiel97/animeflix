import React from 'react'
import AnimeThumbnail from './AnimeThumbnail'
import Carousel from 'react-grid-carousel'
import ContentShimmer from 'react-content-shimmer'


const responsive = [
    { breakpoint: 2000, cols: 6, rows: 3 },
    { breakpoint: 1200, cols: 5, rows: 2 },
    { breakpoint: 990, cols: 3, rows: 2 },
    // { breakpoint: 464, cols: 1 },
];

const AnimeList = ({ animes, loading }) => {

    const renderShimmer = () => {
        return (
            <>
                {
                    <Carousel
                        className='overflow-visible'
                        cols={4}
                        rows={1}
                        gap={14}
                        loop
                        mobileBreakpoint={464}>

                        {new Array(10).fill(0).map((_, index) => (
                            <Carousel.Item
                                className='rounded-md overflow-visible'
                                swipeable={true}
                                draggable={true}
                                showDots={true}
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}
                                key={index}
                                responsive={responsive}>
                                <ContentShimmer key={index + index}
                                    size={{ height: 313, width: 332 }}
                                    rounded={"7px"}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                }
            </>
        )
    }

    const renderAnimes = () => {
        {
            //render animes if animes list is not empty otherwise render text for empty list
            return animes.length > 0 ? (
                <Carousel
                    className='overflow-visible'
                    cols={4}
                    rows={1}
                    gap={14}
                    loop
                    mobileBreakpoint={464} >
                    {animes.map((anime, index) => (
                        <Carousel.Item
                            className='rounded-md overflow-visible'
                            swipeable={true}
                            draggable={true}
                            showDots={true}
                            key={anime.mal_id + index}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            responsive={responsive}>
                            <AnimeThumbnail key={anime.mal_id} anime={anime} />
                        </Carousel.Item>
                    )
                    )}
                </Carousel>
            ) : (
                <>
                    <h3 className='mx-8 text-red-500 text-2xl sm:text-3xl font-bold mt-20 mb-8'>
                        No anime found
                    </h3>
                </>
            )

        }
    }
    return (
        <div>
            {loading ? renderShimmer() : renderAnimes()}
        </div>
    )
}

export default AnimeList
