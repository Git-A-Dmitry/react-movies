import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/MovieInfo.module.scss';

const MovieInfo = (props) => {
  const { id } = useParams();

  const [moreInfo, setMoreInfo] = useState();

  // prettier-ignore
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?apikey=5f5a59ab&i=${id}`)
      .then((response) => setMoreInfo(response.data));
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
              Genre: <span>{moreInfo?.Genre}</span>
            </p>
            <p>
              IMDB Rating: <span>{moreInfo?.imdbRating}</span>
            </p>
            <p>
              Language: <span>{moreInfo?.Language}</span>
            </p>
            <p>
              Country: <span>{moreInfo?.Country}</span>
            </p>
            <p>
              Released: <span>{moreInfo?.Released}</span>
            </p>
            <p>
              Runtime: <span>{moreInfo?.Runtime}</span>
            </p>
            <p>
              Director: <span>{moreInfo?.Director}</span>
            </p>
            <p>
              Actors: <span>{moreInfo?.Actors}</span>
            </p>
            <p>
              Awards: <span>{moreInfo?.Awards}</span>
            </p>
            <p>
              Box Office: <span>{moreInfo?.BoxOffice}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieInfo;
