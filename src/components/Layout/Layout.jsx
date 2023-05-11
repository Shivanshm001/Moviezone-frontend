import React from 'react'
import { Outlet } from 'react-router-dom';

//Components
import Navbar from '../NavBar/Navbar';


export default function Layout() {
    return (
        <div>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </div>
    )
}
