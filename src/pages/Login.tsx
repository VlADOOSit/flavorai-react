import React, { useState } from 'react';
import api from '../api/api';
import { setToken } from '../api/auth';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await api.post('/auth/login', { email, password });
            setToken(res.data.accessToken);
            navigate('/');
        } catch (err: any) {
            console.error(err);
            alert(err.response?.data?.error || 'Error logging in');
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="border p-2 rounded"/>
                <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} className="border p-2 rounded"/>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">Login</button>
            </form>
        </div>
    );
};

export default Login;
