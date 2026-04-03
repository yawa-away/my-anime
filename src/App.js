import React, { useState, useEffect } from 'react';
import './App.css';
import AnimeForm from './components/AnimeForm';
import AnimeList from './components/AnimeList';
import { setItem, getItem } from './utils/storage';

function App() {
    const [animes, setAnimes] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('title');

    // ローカルストレージから読み込み
    useEffect(() => {
        const savedAnimes = getItem('animes');
        if (savedAnimes) {
            setAnimes(savedAnimes);
        }
    }, []);

    // ローカルストレージに保存
    useEffect(() => {
        setItem('animes', animes);
    }, [animes]);

    // アニメを追加
    const handleAddAnime = (animeData) => {
        if (editingId) {
            setAnimes(animes.map(anime =>
                anime.id === editingId ? { ...animeData, id: editingId } : anime
            ));
            setEditingId(null);
        } else {
            const newAnime = {
                ...animeData,
                id: Date.now(),
            };
            setAnimes([...animes, newAnime]);
        }
    };

    // アニメを削除
    const handleDeleteAnime = (id) => {
        setAnimes(animes.filter(anime => anime.id !== id));
    };

    // 編集開始
    const handleEditAnime = (id) => {
        setEditingId(id);
    };

    // 編集キャンセル
    const handleCancelEdit = () => {
        setEditingId(null);
    };

    // フィルター＆ソート処理
    const filteredAnimes = animes
        .filter(anime => {
            return anime.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (anime.description && anime.description.toLowerCase().includes(searchTerm.toLowerCase()));
        })
        .sort((a, b) => {
            switch (sortBy) {
                case 'title':
                    return a.title.localeCompare(b.title);
                case 'rating':
                    return (b.rating || 0) - (a.rating || 0);
                case 'viewCount':
                    return (b.viewCount || 0) - (a.viewCount || 0);
                default:
                    return 0;
            }
        });

    const editingAnime = editingId ? animes.find(anime => anime.id === editingId) : null;

    return (
        <div className="app">
            <header className="app-header">
                <h1>🎌 アニメ管理アプリ</h1>
                <p>あなたのアニメコレクションを管理しよう！</p>
            </header>

            <div className="app-container">
                <section className="form-section">
                    <h2>{editingId ? 'アニメを編集' : 'アニメを追加'}</h2>
                    <AnimeForm
                        onSubmit={handleAddAnime}
                        onCancel={handleCancelEdit}
                        anime={editingAnime}
                    />
                </section>

                <section className="filter-section">
                    <h2>検索・フィルター</h2>
                    <div className="filter-controls">
                        <input
                            type="text"
                            placeholder="タイトルで検索..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="sort-select"
                        >
                            <option value="title">タイトル順</option>
                            <option value="rating">評価順（高い順）</option>
                            <option value="viewCount">視聴回数順</option>
                        </select>
                    </div>
                </section>

                <section className="list-section">
                    <h2>アニメ一覧 ({filteredAnimes.length})</h2>
                    {filteredAnimes.length === 0 ? (
                        <p className="no-anime">アニメがありません。追加してみましょう！</p>
                    ) : (
                        <AnimeList
                            animes={filteredAnimes}
                            onDelete={handleDeleteAnime}
                            onEdit={handleEditAnime}
                        />
                    )}
                </section>
            </div>
        </div>
    );
}

export default App;