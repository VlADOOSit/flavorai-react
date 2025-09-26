import React, { useState } from 'react';
import api from '../api/api';

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await api.post('/auth/register', { login: username, email, password });
            alert('User registered! You can now log in.');
        } catch (err: any) {
            console.error(err);
            alert(err.response?.data?.error || 'Error registering user');
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Register</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} className="border p-2 rounded"/>
                <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="border p-2 rounded"/>
                <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} className="border p-2 rounded"/>
                <button type="submit" className="bg-green-500 text-white p-2 rounded mt-2">Register</button>
            </form>
        </div>
    );
};

export default Register;
