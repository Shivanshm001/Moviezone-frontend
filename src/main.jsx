import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SearchProvider } from './context/SearchContext/SearchContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </SearchProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
