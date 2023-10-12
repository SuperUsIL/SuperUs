import React from 'react';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';
import { useSelector } from "react-redux";
import Offers from '../pages/Offers';
import Navigation from '../cmps/Nav';

// import NotFound from '../pages/NotFound';
import {
    Route, Navigate, BrowserRouter, Routes
} from 'react-router-dom';

// This component decides what to render based on the authentication status
const ProtectedRoute = ({ element: Component, ...rest }) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    return isAuthenticated ? Component : <Navigate to="/signin" replace />;
};

const RouterConfig = () => {
    return (
        <BrowserRouter>
            <div className="app-container">
                <nav className="navigation">
                    <Navigation />
                </nav>

                {/* your routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route
                        path="/profile"
                        element={<ProtectedRoute element={<Profile />} />}
                    />
                    <Route
                        path="/offers"
                        element={<ProtectedRoute element={<Offers />} />}
                    />

                    {/* <Route path="*" element={<NotFound />} /> */}
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default RouterConfig;
