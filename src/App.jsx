import React from 'react'

//Components
import { Routes, Route } from 'react-router-dom';
//Layout components
import Layout from './components/Layout/Layout';

//Render components

import Homepage from './components/Homepage/Homepage';
import SearchedMovies from './components/SearchedMovies/SearchedMovies';
import SingleMovie from './components/SingleMovie/SingleMovie';
import DisplayMovies from './components/DisplayMovies/DisplayMovies';


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route path='/' element={<Homepage />}>

            <Route path='/trending' element={<DisplayMovies type={"trending"} />} />
            <Route path='/action' element={<DisplayMovies type={"action"} />} />
            <Route path='/animated' element={<DisplayMovies type={"animated"} />} />
            <Route path='/released' element={<DisplayMovies type={"released"} />} />
            
          </Route>

          <Route path="/:id" element={<SingleMovie />} />
          <Route path='/search/:movie' element={<SearchedMovies />} />
        </Route>
      </Routes>
    </div>
  )
}
