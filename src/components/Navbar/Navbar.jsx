import React from 'react'
import useSearch from '../../hooks/useSearch';
import { GoSearch } from 'react-icons/go'
import Input from '../Input/Input';
import FormButton from '../FormButton/FormButton';
import Logo from '../Logo/Logo';
//Components

export default function Navbar() {
  const { searchTerm, setSearchTerm, handleSearch } = useSearch();
  return (
    <nav className='shadow shadow-black'>
      <div className='flex p-4 gap-2 w-full place-content-between items-center bg-black bg-opacity-70'>
        <Logo />
        <div className='relative w-1/2'>
          <form onSubmit={handleSearch} className='flex justify-end items-center gap-2'>
            <Input id={"search"} name={"search"} onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />
            <FormButton disabled={false} icon={<GoSearch />} />
          </form>
        </div>
      </div>
    </nav>
  )
}
