import React, { useContext } from 'react'
import SearchContext from '../context/SearchContext/SearchContext';

export default function useSearch() {
  return useContext(SearchContext);
}
