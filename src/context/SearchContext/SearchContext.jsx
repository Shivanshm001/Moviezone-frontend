import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:5000"
});

const SearchContext = createContext({});
const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState({});
    const [searchError, setSearchError] = useState('');
    const [page, setPage] = useState(1);


    // useEffect(() => {
    //     async function searchNextPage() {
    //         try {
    //             const response = await api.get(`/search/?name=${searchTerm}&page=${page}`);
    //             response?.data && setSearchResults(response.data);
    //         } catch (error) {
    //             setSearchError(error);
    //         }
    //     };
    //     searchNextPage();
    // }, [page]);


    async function handleSearch(e) {
        e.preventDefault();
        try {
            const response = await api.get(`/search/?name=${searchTerm}&page=1`);
            response?.data && setSearchResults(response.data);
        } catch (error) {
            setSearchError(error);
        }
    }
    return (
        <SearchContext.Provider value={{ searchTerm, page, setPage, setSearchTerm, searchResults, searchError, handleSearch }}>
            {children}
        </SearchContext.Provider>
    )
}


export default SearchContext;
export {
    SearchProvider
}