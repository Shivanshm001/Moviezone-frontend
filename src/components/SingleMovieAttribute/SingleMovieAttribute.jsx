import React from 'react'
import Rating from '../Rating/Rating';


export default function MovieCardAttribute({ is, text, style }) {
    return (
        <div className='relative border-b border-gray-400 my-2 mx-1 p-2'>
            <p className='first-letter:capitalize font-bold text-xs'>{is} :</p>
            <p className={`w-max max-w-full py-1 font-semibold ${style}`}>
                {
                    text && is == "rating"
                        ? <span className='flex gap-2' title={`${Math.ceil(Number(text))}/10`}>
                            <Rating votes={Math.ceil(Number(text))} />
                        </span>
                        : text
                }
            </p>
        </div>
    )
}