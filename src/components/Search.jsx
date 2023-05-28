import React, { useState } from 'react';
import '../styles/Search.scss';

const Search = (props) => {
  const { searchMovies } = props;

  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      searchMovies(search, type);
    }
  };

  const handleFilter = (event) => {
    setType(event.target.dataset.type);
    searchMovies(search, event.target.dataset.type);
  };

  return (
    <div className='search'>
      <div className='search__wrapper'>
        <div className='search__input'>
          <input
            className='validate'
            // placeholder='search'
            type='search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKey}
          />

          <button onClick={() => searchMovies(search, type)}>Search</button>
        </div>

        <div className='search__radio'>
          <label>
            <input
              name='type'
              type='radio'
              data-type='all'
              onChange={handleFilter}
              checked={type === 'all'}
            />
            <span className='radio-text'>All</span>
          </label>

          <label>
            <input
              name='type'
              type='radio'
              data-type='movie'
              onChange={handleFilter}
              checked={type === 'movie'}
            />
            <span className='radio-text'>Movies</span>
          </label>

          <label>
            <input
              name='type'
              type='radio'
              data-type='series'
              onChange={handleFilter}
              checked={type === 'series'}
            />
            <span className='radio-text'>Series</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export { Search };
