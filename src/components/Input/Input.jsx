import React from 'react';

export default function Input({name,id,value,onChange}) {
    return (
        <input type="text" name={name} id={id} value={value} onChange={onChange} placeholder='Search'
            className='w-1/2 border border-black px-2 py-1 text-sm outline-none rounded focus-within:placeholder:text-xs'
        />
    )
}
