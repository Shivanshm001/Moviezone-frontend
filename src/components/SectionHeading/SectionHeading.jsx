import React from 'react'
import { FaDotCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';


export default function SectionHeading({ title,page }) {
    return (
        <div className='flex gap-2 justify-start items-baseline w-full  max-w-full px-4 py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-transparent  font-semibold '>
            <IconContext.Provider value={{ className:`text-base text-zinc-500 ${page === "movie"?"hidden":""}` }}>
                <FaDotCircle />
            </IconContext.Provider>
            <p className={"first-letter:capitalize text-zinc-200 tracking-wide text-2xl"}>
                {title === "released"? `New released`: title}
            </p>
        </div>
    )
}
