import { useState, useEffect } from 'react'
import AnimeList from '../components/AnimeList'
import { getAnimes, searchAnimes } from '../network/requests'
import { useRouter } from 'next/router'

const Search = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        //define iife to avoid scope issues
        (async () => {
            try {
                const res = await searchAnimes(router.query.query);
                setAnimes(res.data);
            } catch (e) {
                console.log(e);
            }
            finally {
                setLoading(false);
            }
        })();

    }, [router.query.query])


    return (
        <div className='mx-4 mb-12'>
            <h3 className='text-2xl mx-4 my-4 text-red-500'>Search results for: {router.query.query}</h3>
            <AnimeList loading={loading} animes={animes} />
        </div>
    )
}

export default Search

/*  */
