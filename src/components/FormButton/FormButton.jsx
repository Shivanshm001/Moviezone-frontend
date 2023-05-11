import React from 'react';

export default function FormButton({ type, onClick, icon, disabled }) {
    return (
        <button type={type} onClick={onClick} disabled={disabled} className='absolute border border-black border-l-gray-300 bg-gray-100 right-0  px-3 rounded  h-full hover:bg-gray-200 transition-all duration-100 ease-in-out'>
            {icon}
        </button>
    )
}
