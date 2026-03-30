import React, { useState } from 'react';

const AnimeForm = ({ onSubmit, anime }) => {
    const [title, setTitle] = useState(anime ? anime.title : '');
    const [description, setDescription] = useState(anime ? anime.description : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, description });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    required
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    required
                />
            </div>
            <button type="submit">{anime ? 'Update' : 'Add'} Anime</button>
        </form>
    );
};

export default AnimeForm;