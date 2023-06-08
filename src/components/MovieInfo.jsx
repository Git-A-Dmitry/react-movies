import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineRollback } from 'react-icons/ai';
import styles from '../styles/MovieInfo.module.scss';

const API_KEY = process.env.REACT_APP_API_KEY;

const MovieInfo = (props) => {
  const { id } = useParams();

  const [moreInfo, setMoreInfo] = useState();
  const navigate = useNavigate();

  // prettier-ignore
  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`).then((response) => setMoreInfo(response.data));
  }, [id]);

  return (
    <div
      className={styles['movie-info']}
      // style={{ backgroundImage: `url(${moreInfo.Poster})` }}
    >
      {moreInfo && (
        <div
          className={styles.content}
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${moreInfo.Poster})` }}
        >
          <img
            src={moreInfo.Poster}
            alt={moreInfo.Title}
          />
          <div className={styles.synopsis}>
            <h2>{moreInfo.Title}</h2>
            <hr />
            <br />
            <p>{moreInfo.Plot}</p>
            <p>
              <span>Genre: </span>
              {moreInfo?.Genre}
            </p>
            <p>
              <span>IMDB Rating: </span>
              {moreInfo?.imdbRating}
            </p>
            <p>
              <span>Language: </span>
              {moreInfo?.Language}
            </p>
            <p>
              <span>Country: </span>
              {moreInfo?.Country}
            </p>
            <p>
              <span>Released: </span>
              {moreInfo?.Released}
            </p>
            <p>
              <span>Runtime: </span>
              {moreInfo?.Runtime}
            </p>
            <p>
              <span>Director: </span>
              {moreInfo?.Director}
            </p>
            <p>
              <span>Actors: </span>
              {moreInfo?.Actors}
            </p>
            <p>
              <span>Awards: </span>
              {moreInfo?.Awards}
            </p>
            <p>
              <span>Box Office: </span>
              {moreInfo?.BoxOffice}
            </p>
          </div>
        </div>
      )}

      <button onClick={() => navigate(-1)}>
        <AiOutlineRollback />
        Back
      </button>
    </div>
  );
};

export default MovieInfo;
