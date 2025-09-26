import React, { useState } from 'react';
import api from '../api/api';

interface Props {
    recipeId: number;
    onRatingAdded?: () => void; // коллбек для обновления рейтинга после добавления
}

const Rating: React.FC<Props> = ({ recipeId, onRatingAdded }) => {
    const [value, setValue] = useState<number>(0);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (value < 1 || value > 5) {
            alert('Rating must be between 1 and 5');
            return;
        }
        setLoading(true);
        try {
            await api.post(`/recipe/${recipeId}/ratings`, { value });
            alert('Rating submitted!');
            setValue(0);
            onRatingAdded?.();
        } catch (err) {
            console.error(err);
            alert('Failed to submit rating');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-4">
            <label className="mr-2 font-semibold">Rate this recipe:</label>
            <select
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                className="border px-2 py-1 rounded mr-2"
                disabled={loading}
            >
                <option value={0}>Select</option>
                {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>{n}</option>
                ))}
            </select>
            <button
                onClick={handleSubmit}
                disabled={loading || value === 0}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
                Submit
            </button>
        </div>
    );
};

export default Rating;
