import React from 'react';

const AnimeList = () => {
    const animes = [
        { title: 'Naruto', episodes: 220 },
        { title: 'One Piece', episodes: 1000 },
        { title: 'My Hero Academia', episodes: 100 },
    ];

    return (
        <div>
            <h1>Anime List</h1>
            <ul>
                {animes.map((anime, index) => (
                    <li key={index}>{anime.title} - {anime.episodes} episodes</li>
                ))}
            </ul>
        </div>
    );
};

export default AnimeList;