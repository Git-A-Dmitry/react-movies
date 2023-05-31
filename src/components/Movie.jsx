import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Card.scss';

function Movie(props) {
  const { Title: title, Year: year, imdbID: id, Type: type, Poster: poster } = props;

  const navigate = useNavigate();

  // const handleClick = () => {
  //   props.setInfo(id);
  // };

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
          onClick={() => navigate(`/info/${id}`)}
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

      <Link
        to={`/info/${id}`}
        // onClick={() => props.setInfo(id)}
        // onClick={handleClick}
      >
        More
      </Link>
    </div>
  );
}

export { Movie };
