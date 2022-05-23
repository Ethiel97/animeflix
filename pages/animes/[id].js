import { getAnimeCharacters, getSingleAnime, getSingleCharacter } from "../../network/requests"
import Image from 'next/image'
import Banner from '../../components/Banner';
import { AnimePropItem } from "../../components/utils";
import { HeartIcon, StarIcon } from "@heroicons/react/solid";
import { Character } from "../../components/Character";


const keysToIgnore = [
    'title', 'title_english', 'mal_id',
    'title_japanese', 'popularity', 'url', 'synopsis',
    'members', 'url', 'rating', 'rank'
];

const CharacterList = ({ characters }) => {
    return (
        <div>
            <h2 className='text-2xl text-white mb-10'>Characters & voice actors</h2>
            <div className='relative grid lg:grid-cols-2 gap-4 w-full h-full mb-20'>
                {characters.map(character => (
                    <Character key={character.mal_id} character={character} />
                ))}
            </div>
        </div>

    )
}

const AnimeDetail = ({ anime: { anime, characters } }) => {
    return (
        <div>
            <Banner anime={anime} />

            <div className="px-[12px] md:px-[40px] grid grid-cols-1 justify-items-center gap-[70px] md:grid-cols-[250px_1fr] md:gap-[18px]">
                <div className='transition duration-200 min-w-[230px] w-[230px] h-[300px] block mt-[-98px] md:mt-[-60px] sm:hover:scale-105'>
                    <Image
                        className='object-fill rounded-md h-full w-full'
                        objectFit={true}
                        layout='responsive'
                        src={anime.images.jpg.large_image_url}
                        alt={anime.title}
                        height={300}
                        width={230} />
                </div>

                <div className='grid auto-rows-min text-white py-4 px-6'>
                    <span className='opacity-80 text-xl'>
                        Rank #{anime?.rank ?? 'N/A'}
                    </span>
                    <p className="italic text-sm text-white opacity-80">
                        {anime.rating ?? "N/A"}
                    </p>
                    <h1 className='my-4 text-3xl md:text-4xl'>
                        {anime.title ?? "N/A"}
                    </h1>
                    <span>Sypnosis</span>
                    <p className="text-white opacity-80 md:text-xl text-base">
                        {anime.synopsis ?? "N/A"}
                    </p>
                </div>
            </div>

            <div className="px-[12px] md:px-[40px] grid grid-cols-none md:grid-cols-[250px_auto] md:mt-[50px] md:gap-[18px]">
                <aside>
                    <div className='space-y-4'>
                        <div className='p-2 rounded-md bg-[#152232]/80'>
                            <AnimePropItem label='Rank' text={anime.score} >
                                <StarIcon className='text-yellow-500 w-5' />
                            </AnimePropItem>
                        </div>
                        <div className='p-2 rounded-md bg-[#152232]/80'>
                            <AnimePropItem label='Rating' text={anime.popularity}>
                                <HeartIcon className='text-red-500 w-5' />
                            </AnimePropItem>
                        </div>
                    </div>

                    <div className='p-2 mt-4 rounded-md bg-[#152232]/80'>
                        {
                            Object.keys(anime).map((key, index) => {
                                if (anime[key] && (typeof anime[key] === 'string' || typeof anime[key] === 'number')
                                    && !keysToIgnore.includes(key)) {
                                    return <AnimePropItem key={index} label={key} text={anime[key]} />
                                }
                            })
                            //loop over the anime props which are string and display them using the AnimePropItem component
                        }
                    </div>
                </aside>

                {<CharacterList characters={characters} />}
            </div>
        </div>
    )
}

export default AnimeDetail


export async function getServerSideProps(context) {
    const { id } = context.query;
    const animeRes = await getSingleAnime(id)

    //get anime character data
    const characters = await getAnimeCharacters(id)

    return {
        props: {
            anime: {
                anime: animeRes.data,
                characters: characters?.data?.length > 10 ? characters.data.slice(0, 10) : characters.data
            }
        }
    }
}
