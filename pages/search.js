import React, { useState, useEffect } from 'react'
import AnimeList from '../components/AnimeList'
import { searchAnimes } from '../network/requests'
import { useRouter } from 'next/router'

const search = () => {

    let router = useRouter();
    const [loading, setLoading] = useState(true);
    const [animes, setAnimes] = useState([]);


    //search animes by query from the url in useEffect hook
    useEffect(() => {
        const query = router.query.query;
        if (query) {
            searchAnimes(query).then(res => {
                setAnimes(res.data);
                setLoading(false);
            }).catch(error => {
                setLoading(false)
                setAnimes([])
            })
        }
    }, [router.query.query])


    return (
        <div className='mx-4 mb-12'>
            <h3 className='text-2xl mx-4 my-4 text-red-500'>Search results for: {router.query.query}</h3>
            <AnimeList loading={loading} animes={animes} />
        </div>
    )
}

export default search

/*  */