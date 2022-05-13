
import AnimeByGenresList from '../components/AnimeByGenreList';
import { getTopAnimes, getAnimeGenres } from '../network/requests';

export default function Top({ topAnimesByGenre }) {
    return (
        <div>
            <AnimeByGenresList data={topAnimesByGenre} />
        </div>
    )
}

export async function getServerSideProps(context) {
    // console.log('context', context)

    const genresData = await getAnimeGenres();
    const topAnimesData = await getTopAnimes()

    const genreNames = genresData.data.map(genre => genre.name)

    //get all the anime whose genres name property are in the genreNames array in a new array of objects with a genre property and animes property
    const animesByGenre = genreNames.map(genre => {
        const animes = topAnimesData.data.filter(anime => anime.genres.some(animeGenre => animeGenre.name.toLowerCase().includes(genre.toLowerCase())))
        return { genre, animes }
    })

    return {
        props: {
            topAnimesByGenre: animesByGenre,
        }
    }
}
