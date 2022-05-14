import AnimeThumbnail from './AnimeThumbnail'
import Carousel from 'react-grid-carousel'

const responsive = [
    { breakpoint: 2000, cols: 6 },
    { breakpoint: 1200, cols: 5 },
    { breakpoint: 990, cols: 3 },
    // { breakpoint: 464, cols: 1 },
];

const AnimeByGenresList = ({ data }) => {
    return (
        <div className='mx-2 mb-12'>
            {data.map(({ animes, genre }) => (
                <>
                    {
                        animes.length > 0 && <h3 className='mx-8 text-red-500 text-2xl sm:text-3xl font-bold mt-20 mb-8'>
                            {genre}
                        </h3>
                    }

                    {animes.length > 0 &&
                        <Carousel
                            className='overflow-visible'
                            cols={4}
                            rows={1}
                            gap={14}
                            loop
                            mobileBreakpoint={464} >
                            {animes.map((anime,index) => (
                                <Carousel.Item
                                    key={anime.mal_id+index}
                                    className='rounded-md overflow-visible'
                                    swipeable={true}
                                    draggable={true}
                                    showDots={true}
                                    ssr={true} // means to render carousel on server-side.
                                    infinite={true}
                                    responsive={responsive}>
                                    <AnimeThumbnail key={anime.mal_id} anime={anime} />
                                </Carousel.Item>
                            )
                            )}
                        </Carousel>
                    }
                </>

            ))}

            {/*  <div className=''>
                {heading && <h3 className='mx-8 text-red-500 text-2xl font-bold mt-20 mb-4'>
                    {heading}
                </h3>
                }

                <div
                    className='px-5 my-10 mx-4 sm:grid sm:grid-cols-2 xl:grid-cols-5 gap-8
                 sm:gap-12 3xl:flex flex-wrap justify-center'>
                    {animes.map((anime) => (
                        <AnimeThumbnail key={anime.mal_id} anime={anime} />
                    ))}
                </div>
            </div> */}
        </div>
    )
}

export default AnimeByGenresList
