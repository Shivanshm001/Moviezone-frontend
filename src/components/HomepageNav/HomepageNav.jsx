
import React from 'react';
import { Link } from 'react-router-dom';

function Li({ title, path }) {
    return (

        <Link to={path}>
            <li
                className={`px-6 py-4 rounded bg-zinc-600 active:bg-zinc-800 text-xl active:text-white text-gray-200 font-semibold`}>
                {title}
            </li>
        </Link>
    );
}

export default function HomepageNav() {

    return (
        <div className='flex place-content-center bg-zinc-500 pt-10 pb-0'>
            <ul className='flex  place-content-center  gap-5 scale-75'>
                <Li title={"Trending"} path={"trending"} />
                <Li title={"New Released"} path={"released"} />
                <Li title={"Action"} path={"action"} />
                <Li title={"Animated"} path={"animated"} />
            </ul>
        </div>
    )
}
