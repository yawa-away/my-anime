import React, { useState } from 'react';

const FilterSort = ({ animeList }) => {
    const [filter, setFilter] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    const filteredAnime = animeList.filter(anime => 
        anime.title.toLowerCase().includes(filter.toLowerCase())
    );

    const sortedAnime = filteredAnime.sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.title.localeCompare(b.title);
        } else {
            return b.title.localeCompare(a.title);
        }
    });

    return (
        <div>
            <input
                type="text"
                placeholder="Filter by title"
                value={filter}
                onChange={e => setFilter(e.target.value)}
            />
            <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
            <ul>
                {sortedAnime.map(anime => (
                    <li key={anime.id}>{anime.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default FilterSort;