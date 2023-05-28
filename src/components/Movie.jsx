import React from 'react';
import '../styles/Card.scss';

function Movie(props) {
  const { Title: title, Year: year, imdbID: id, Type: type, Poster: poster } = props;

  return (
    <div
      id={id}
      className='card'
    >
      <div className='card__image'>
        <img
          className=''
          src={poster}
          alt='movies'
        />
        {/* <span className='card__title'>{title}</span> */}
      </div>

      <div className='card__content'>
        <span className='card__title'>{title}</span>

        <div className='card__details'>
          <p>{year}</p>
          <p>{type}</p>
        </div>
      </div>
    </div>
  );
}

export { Movie };
