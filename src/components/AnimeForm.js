import React, { useState, useEffect } from 'react';

const AnimeForm = ({ onSubmit, onCancel, anime }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
    const [viewCount, setViewCount] = useState('');

    useEffect(() => {
        if (anime) {
            setTitle(anime.title || '');
            setDescription(anime.description || '');
            setRating(anime.rating || '');
            setViewCount(anime.viewCount || '');
        } else {
            setTitle('');
            setDescription('');
            setRating('');
            setViewCount('');
        }
    }, [anime]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            title,
            description,
            rating: parseFloat(rating) || 0,
            viewCount: parseInt(viewCount) || 0,
        });
        setTitle('');
        setDescription('');
        setRating('');
        setViewCount('');
    };

    return (
        <form onSubmit={handleSubmit} className="anime-form">
            <div className="form-group">
                <label>タイトル:</label>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    required
                    placeholder="例: Naruto"
                />
            </div>
            <div className="form-group">
                <label>説明:</label>
                <textarea 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    required
                    placeholder="アニメの説明を入力..."
                />
            </div>
            <div className="form-group">
                <label>評価 (0-10):</label>
                <input 
                    type="number" 
                    value={rating} 
                    onChange={(e) => setRating(e.target.value)}
                    min="0"
                    max="10"
                    step="0.1"
                    placeholder="8.5"
                />
            </div>
            <div className="form-group">
                <label>視聴回数:</label>
                <input 
                    type="number" 
                    value={viewCount} 
                    onChange={(e) => setViewCount(e.target.value)}
                    min="0"
                    placeholder="3"
                />
            </div>
            <div className="form-actions">
                <button type="submit" className="btn-submit">
                    {anime ? '更新' : '追加'}
                </button>
                {anime && (
                    <button type="button" onClick={onCancel} className="btn-cancel">
                        キャンセル
                    </button>
                )}
            </div>
        </form>
    );
};

export default AnimeForm;