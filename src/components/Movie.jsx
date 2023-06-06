import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Card.scss';

function Movie(props) {
  const { Title: title, Year: year, imdbID: id, Type: type, Poster: poster } = props;

  const navigate = useNavigate();

  return (
    <div
      id={id}
      className='card'
    >
      <div className='card__image'>
        <motion.img
          className=''
          src={poster}
          alt={title}
          onClick={() => navigate(`/info/${id}`)}
          whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
        />
        {/* <span className='card__title'>{title}</span> */}
      </div>

      <p className='card__title'>{title}</p>

      <div className='card__content'>
        {/* <span className='card__title'>{title}</span> */}

        <div className='card__details'>
          <p>{year}</p>
          <p>{type}</p>
        </div>
      </div>

      {/* <Link to={`/info/${id}`}>More</Link> */}
    </div>
  );
}

export { Movie };
