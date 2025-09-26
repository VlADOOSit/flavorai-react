import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getToken, clearToken } from '../api/auth';

const Header: React.FC = () => {
    const navigate = useNavigate();
    const token = getToken();

    const handleLogout = () => {
        clearToken();
        navigate('/login');
    };

    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="flex gap-4 items-center">
                <Link to="/" className="font-bold hover:underline">Home</Link>
                {token && <Link to="/add" className="hover:underline">Add Recipe</Link>}
                <Link to="/search" className="hover:underline">Search</Link>
            </div>
            <div>
                {token ? (
                    <>
                        <span className="mr-4">Logged in</span>
                        <button onClick={handleLogout} className="bg-red-500 px-2 py-1 rounded">Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="mr-4 hover:underline">Login</Link>
                        <Link to="/register" className="hover:underline">Register</Link>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
