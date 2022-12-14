import React, { useState } from 'react';

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
    <div className='row'>
      <div className='col s12'>
        <div className='input-field'>
          <input //
            style={{ fontSize: '2rem' }}
            className='validate'
            placeholder='search'
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKey}
          />

          <button className='btn search-btn blue-grey darken-3' onClick={() => searchMovies(search, type)}>
            Search
          </button>
        </div>

        <div>
          <label>
            <input //
              name='type'
              type='radio'
              data-type='all'
              onChange={handleFilter}
              checked={type === 'all'}
            />
            <span>All</span>
          </label>

          <label>
            <input //
              name='type'
              type='radio'
              data-type='movie'
              onChange={handleFilter}
              checked={type === 'movie'}
            />
            <span>Movies</span>
          </label>

          <label>
            <input //
              name='type'
              type='radio'
              data-type='series'
              onChange={handleFilter}
              checked={type === 'series'}
            />
            <span>Series</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export { Search };
