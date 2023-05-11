import React from 'react';
import HomepageNav from '../HomepageNav/HomepageNav';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function Homepage() {
    const location = useLocation();
    return (
        <div>
            <HomepageNav />
            <div>
                {
                    location.pathname === "/"
                        ? <Navigate to={"/trending"} replace={true} />
                        : <Outlet />
                }
            </div>
        </div>
    )
}
