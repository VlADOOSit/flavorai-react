import React from 'react';
import { Recipe } from '../types';
import { Link } from 'react-router-dom';

interface Props {
    recipe: Recipe;
}

const RecipeCard: React.FC<Props> = ({ recipe }) => {
    return (
        <Link to={`/recipe/${recipe.id}`} className="block">
            <div className="border rounded p-4 shadow mb-4 hover:shadow-lg transition-shadow duration-200">
                <h2 className="text-xl font-bold">{recipe.title}</h2>
                <p className="text-gray-700">{recipe.description}</p>
            </div>
        </Link>
    );
};

export default RecipeCard;
