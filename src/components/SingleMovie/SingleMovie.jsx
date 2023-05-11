import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SingleMovieAttribute from '../SingleMovieAttribute/SingleMovieAttribute';
import SectionHeading from '../SectionHeading/SectionHeading';

const rupee = new Intl.NumberFormat('en-IN', {
    currency: 'INR',
    style: 'currency',
})
export default function SingleMovie() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    useEffect(() => {
        async function getMovie() {
            const response = await axios.get(`/movie/${id}`, {
                baseURL: 'http://localhost:5000',
                headers: { 'Content-Type': 'application/json' },
            });
            setMovie(response?.data?.movie)
        }
        getMovie();
        console.log(movie);
    }, [id])
    const release_date = new Date(movie.release_date).toDateString().slice(0, 15)
    return (
        <section className='bg-gray-200 h-screen w-full flex justify-center items-center flex-col'>
            <h1 className='text-2xl font-semibold my-4 w-max pb-2 text-center border-b-2 border-gray-400'>{movie.title}</h1>
            <div className='group grid grid-cols-1 md:flex justify-center items-center'>
                <div className='px-4 py-2 hidden group-hover:block '>
                    <SingleMovieAttribute is={"Number of votes"} text={movie.vote_count} />
                    <SingleMovieAttribute is={"rating"} text={movie.vote_average} style={"text-sm"} />
                    <SingleMovieAttribute is={"revenue"} text={rupee.format(movie.revenue)} />
                    <SingleMovieAttribute is={"release date"} text={release_date} />
                </div>
                <div className='shadow-lg shadow-red-500 w-max'>
                    <a href={movie.homepage} title={`${movie.title} | Homepage`}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='w-[350px] h-min'/>
                    </a>
                </div>
                <div className='md:w-[30%] group-hover:flex  justify-center items-center px-4 hidden transition-all duration-500 h-full'>
                    <h1 className='font-semibold text-xl drop-shadow-lg shadow-red-500'>{movie.overview}</h1>
                </div>
            </div>
        </section>
    )
}
