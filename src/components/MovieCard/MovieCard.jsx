import React from 'react';
import { Link } from 'react-router-dom';

import MovieCardAttribute from '../MovieCardAttribute/MovieCardAttribute';

export default function MovieCard({ movie }) {
    return (
        <div className='relative my-auto group transition-all duration-150 ease-linear hover:scale-90 w-min overflow-hidden shadow-lg shadow-gray-600'>
            <Link to={`/${movie.id}`}>
                <div className=' h-full w-[300px] max-w-[300px]'>

                    <div className='absolute w-full top-0 group-hover:block transition-all duration-150 ease-in-out hidden  overflow-hidden'>
                        <MovieCardAttribute is={"title"} text={movie.title} style={""} />
                        <MovieCardAttribute is={"release_date"} text={movie.release_date} style={"text-xs"} />
                        <MovieCardAttribute is={"rating"} text={movie.vote_average} style={"text-xs"} />
                    </div>
                    <div className=' overflow-hidden'>
                        <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
                    </div>

                </div>
            </Link>
        </div>
    )
}
