import React, { useEffect, useState } from 'react';
import api from '../api/api';
import { Recipe } from '../types';
import RecipeCard from '../components/RecipeCard';

const RecipesList: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        api.get('/recipe')
            .then(res => setRecipes(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">All Recipes</h1>
            {recipes.map(r => <RecipeCard key={r.id} recipe={r} />)}
        </div>
    );
};

export default RecipesList;
