import React from 'react';
import { Link } from 'react-router-dom';


export default function Logo() {
    return (
        <div className='cursor-pointer hover:scale-90 transition-all duration-100 ease-in-out'>
            <Link to={"/"} className='w-min'>
                <span className='font-bold text-white text-base md:text-xl'>Movie<span className='text-black ml-0.5'>Zone</span></span>
            </Link>
        </div>
    )
}
