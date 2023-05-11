
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import MovieCard from '../MovieCard/MovieCard';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import SectionHeading from '../SectionHeading/SectionHeading';


export default function DisplayMovies({ type }) {
    const [movieResult, setMovieResult] = useState({});
    const [error, setError] = useState('');
    const { movies, page, total_pages } = movieResult;
    useEffect(() => {
        async function getMovie() {
            try {
                const response = await axios.get(`/api/v1/${type}`, {
                    baseURL: 'http://localhost:5000',
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                Object.keys(response?.data) && setMovieResult(response.data)

            } catch (error) {
                console.log(error);
                setError(error?.message);
            }
        }
        getMovie();
    }, [type])
    return (
        <div className='py-8 bg-gray-200  w-full'>
            <div className='p-4 mb-16'>
                <SectionHeading title={type} />
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-content-center h-full gap-12 px-8'>
                {
                    (movieResult && Array.isArray(movies)) &&
                    movies.map((m) => <MovieCard movie={m} key={m.id} />)
                }
            </div>
        </div>
    )
}
