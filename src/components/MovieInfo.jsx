import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BsArrowLeft } from 'react-icons/bs';
import { GiDualityMask } from 'react-icons/gi';
import { TfiStatsUp } from 'react-icons/tfi';
import { TbLanguage } from 'react-icons/tb';
import { MdOutlineLanguage } from 'react-icons/md';
import { CiCalendarDate } from 'react-icons/ci';
import { GiDirectorChair } from 'react-icons/gi';
import { IoMdTime } from 'react-icons/io';
import { FaTheaterMasks } from 'react-icons/fa';
import { FiAward } from 'react-icons/fi';
import { AiOutlineDollarCircle } from 'react-icons/ai';
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
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${moreInfo.Poster})`, backgroundSize: 'contain', backgroundPosition: 'right' }}
        >
          <img
            src={moreInfo.Poster}
            alt={moreInfo.Title}
          />
          <div className={styles.synopsis}>
            <div className={styles.title}>
              <h2>{moreInfo.Title}</h2>
              <p>{moreInfo?.imdbRating}</p>
            </div>
            <hr />
            <br />
            <p>{moreInfo.Plot}</p>
            <p>
              <GiDualityMask
                size={19}
                style={{ marginRight: '5px', color: 'orange' }}
              />
              <span>Genre: </span>
              {moreInfo?.Genre}
            </p>
            <p>
              <TfiStatsUp
                size={20}
                style={{ marginRight: '5px', color: 'orange' }}
              />
              <span>IMDB Rating: </span>
              {moreInfo?.imdbRating}
            </p>
            <p>
              <TbLanguage
                size={20}
                style={{ marginRight: '5px', color: 'orange' }}
              />
              <span>Language: </span>
              {moreInfo?.Language}
            </p>
            <p>
              <MdOutlineLanguage
                size={20}
                style={{ marginRight: '5px', color: 'orange' }}
              />
              <span>Country: </span>
              {moreInfo?.Country}
            </p>
            <p>
              <CiCalendarDate
                size={20}
                style={{ marginRight: '5px', color: 'orange' }}
              />
              <span>Released: </span>
              {moreInfo?.Released}
            </p>
            <p>
              <IoMdTime
                size={20}
                style={{ marginRight: '5px', color: 'orange' }}
              />
              <span>Runtime: </span>
              {moreInfo?.Runtime}
            </p>
            <p>
              <GiDirectorChair
                size={20}
                style={{ marginRight: '5px', color: 'orange' }}
              />
              <span>Director: </span>
              {moreInfo?.Director}
            </p>
            <p>
              <FaTheaterMasks
                size={20}
                style={{ marginRight: '5px', color: 'orange' }}
              />
              <span>Actors: </span>
              {moreInfo?.Actors}
            </p>
            <p>
              <FiAward
                size={20}
                style={{ marginRight: '5px', color: 'orange' }}
              />
              <span>Awards: </span>
              {moreInfo?.Awards}
            </p>
            <p>
              <AiOutlineDollarCircle
                size={20}
                style={{ marginRight: '5px', color: 'orange' }}
              />
              <span>Box Office: </span>
              {moreInfo?.BoxOffice}
            </p>
          </div>
        </div>
      )}

      <button onClick={() => navigate(-1)}>
        <BsArrowLeft style={{ fontSize: '12px', marginRight: '5px' }} />
        Back
      </button>
    </div>
  );
};

export default MovieInfo;
