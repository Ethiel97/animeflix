import Head from 'next/head'
import Image from 'next/image'
import AnimeByGenresList from '../components/AnimeByGenreList';
import Banner from '../components/Banner';

import { getAnimes, getAnimeGenres, getRandomAnime } from '../network/requests';

export default function Home({ animes, animesByGenre, randomAnime }) {
  return (
    <>
      <Banner anime={randomAnime} />
      <AnimeByGenresList data={animesByGenre} />
    </>
  )
}

export async function getServerSideProps(context) {
  const genresData = await getAnimeGenres();
  const animesData = await getAnimes()
  const randomAnimeData = await getRandomAnime();

  const genreNames = genresData.data.map(genre => genre.name)

  //get all the anime whose genres name property are in the genreNames array in a new array of objects with a genre property and animes property
  const animesByGenre = genreNames.map(genre => {
    const animes = animesData.data.filter(anime => anime.genres.some(animeGenre => animeGenre.name.toLowerCase().includes(genre.toLowerCase())))
    return { genre, animes }
  })

  // console.log('ANIME BY GENRES', animesByGenre)

  return {
    props: {
      animes: animesData.data,
      animesByGenre: animesByGenre.slice(0, 15),
      randomAnime: randomAnimeData.data,
      /*   randomAnime: (async function () {
          const randomAnime = await getRandomAnime();
          return {
            randomAnime: randomAnime.data,
          }
        })(), */
    }
  }
}

