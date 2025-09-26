import React, { useState } from 'react';
import api from '../api/api';
import { Recipe } from '../types';
import RecipeCard from '../components/RecipeCard';

const SearchRecipe: React.FC = () => {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await api.get('/recipe/search', { params: { name: query } });
            setRecipes(res.data);
        } catch (err) {
            console.error(err);
            alert('Error searching recipes');
        }
    };

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Search Recipes</h1>
            <form onSubmit={handleSearch} className="flex gap-2 mb-4">
                <input
                    placeholder="Enter recipe name"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    className="border p-2 rounded flex-1"
                />
                <button type="submit" className="bg-purple-500 text-white p-2 rounded">Search</button>
            </form>
            {recipes.map(r => <RecipeCard key={r.id} recipe={r} />)}
        </div>
    );
};

export default SearchRecipe;
