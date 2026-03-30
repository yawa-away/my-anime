import React from 'react';

const AnimeItem = ({ anime }) => {
    return (
        <div className="anime-item">
            <h3>{anime.title}</h3>
            <img src={anime.imageUrl} alt={anime.title} />
            <p>{anime.description}</p>
            <p>Genre: {anime.genre.join(', ')}</p>
            <p>Rating: {anime.rating}</p>
        </div>
    );
};

export default AnimeItem;