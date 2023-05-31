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
    <div className={styles['movie-info']}>
      {/* <h2>Movie Info</h2> */}

      {moreInfo && (
        <div className={styles.content}>
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
              Rated: <span>{moreInfo?.Rated}</span>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieInfo;
