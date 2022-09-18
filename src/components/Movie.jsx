import React from 'react';

function Movie(props) {
  const { Title: title, Year: year, imdbID: id, Type: type, Poster: poster } = props;

  return (
    <div id={id} className='card movie card'>
      <div className='card-image waves-effect waves-block waves-light'>
        <img className='activator' src={poster} alt='movies' />
        <span className='card-title activator'>{title}</span>
      </div>
      <div className='card-content'>
        {/* <span className='card-title activator'>{title}</span> */}
        <p>
          {year} <span className='right'>{type}</span>
        </p>
      </div>
    </div>
  );
}

export { Movie };
