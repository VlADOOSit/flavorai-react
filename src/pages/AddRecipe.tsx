import React, { useState } from 'react';
import api from '../api/api';

const AddRecipe: React.FC = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await api.post('/recipe', {
                title,
                description,
                ingredients: ingredients.split(','),
                instructions,
            });
            alert('Recipe added!');
        } catch (err) {
            console.error(err);
            alert('Error adding recipe');
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Add Recipe</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} className="border p-2 rounded"/>
                <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} className="border p-2 rounded"/>
                <input placeholder="Ingredients (comma separated)" value={ingredients} onChange={e => setIngredients(e.target.value)} className="border p-2 rounded"/>
                <textarea placeholder="Instructions" value={instructions} onChange={e => setInstructions(e.target.value)} className="border p-2 rounded"/>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">Add Recipe</button>
            </form>
        </div>
    );
};

export default AddRecipe;
