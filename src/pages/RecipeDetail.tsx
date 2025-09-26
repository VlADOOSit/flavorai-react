import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/api';
import { Recipe } from '../types';
import Rating from "../components/Rating";

const RecipeDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [averageRating, setAverageRating] = useState<string>('Loading...');

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const res = await api.get(`/recipe/${id}`);
                setRecipe(res.data);
            } catch (err) {
                console.error(err);
                alert('Error fetching recipe');
            }
        };

        const fetchAverageRating = async () => {
            try {
                const res = await api.get(`/recipe/${id}/ratings/avg`);
                console.log(res.data.avgRating)
                setAverageRating(res.data.avgRating);
            } catch (err) {
                console.error(err);
                setAverageRating('No ratings');
            }
        };

        fetchRecipe();
        fetchAverageRating();
    }, [id]);

    const fetchAverageRating = async () => {
        try {
            const res = await api.get(`/recipe/${id}/ratings/avg`);
            setAverageRating(res.data.avgRating.toFixed(1));
        } catch (err) {
            console.error(err);
            setAverageRating('No ratings');
        }
    };

    if (!recipe) return <p className="p-4">Loading...</p>;

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-2">{recipe.title}</h1>
            <p className="text-gray-700 mb-2">{recipe.description}</p>
            <p className="mb-2"><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
            <p className="mb-2"><strong>Instructions:</strong> {recipe.instructions}</p>
            <p className="text-yellow-600 font-semibold mb-2">Rating: {averageRating}</p>

            <Rating recipeId={recipe.id} onRatingAdded={fetchAverageRating} />
        </div>
    );
};

export default RecipeDetail;
