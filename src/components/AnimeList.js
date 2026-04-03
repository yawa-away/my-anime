import React from 'react';

const AnimeList = ({ animes, onDelete, onEdit }) => {
    return (
        <div className="anime-list">
            {animes.map((anime) => (
                <div key={anime.id} className="anime-item">
                    <h3>{anime.title}</h3>
                    <p><strong>説明:</strong> {anime.description}</p>
                    {anime.rating && <p><strong>評価:</strong> {anime.rating}/10</p>}
                    {anime.viewCount && <p><strong>視聴回数:</strong> {anime.viewCount}</p>}
                    <div className="anime-actions">
                        <button onClick={() => onEdit(anime.id)} className="btn-edit">編集</button>
                        <button onClick={() => onDelete(anime.id)} className="btn-delete">削除</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AnimeList;