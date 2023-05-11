import React from 'react'
import Rating from '../Rating/Rating';


export default function MovieCardAttribute({ is, text, style }) {
    return (
        <p className={`w-max max-w-full px-4 py-2 bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-transparent text-white
        font-semibold ${style}`}>
            {
                text && is == "rating"
                    ? <span className='flex gap-2' title={`${Math.ceil(Number(text))}/10`}>
                        <Rating votes={Math.ceil(Number(text))} />
                    </span>
                    : text
            }
        </p>
    )
}
