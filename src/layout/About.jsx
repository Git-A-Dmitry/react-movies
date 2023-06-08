import React from 'react';
import deadpool from '../deadpool.jpg';
import styles from '../styles/About.module.scss';

const About = () => {
  return (
    <div className={styles.container}>
      <h2 style={{ color: '#fff' }}>About The App</h2>
      <br />
      <div className={styles.content}>
        <div className={styles.text}>
          <p>This movie app was born out of the unwavering love and passion for the world of cinema by its creator, a dedicated developer who wanted to share this passion with fellow movie enthusiasts.</p>
          <p>Driven by the belief that movies have the power to inspire, entertain, and evoke a wide range of emotions, the developer poured their heart and soul into crafting a user-friendly and visually appealing website.</p>
          <p>The developer's dedication to his craft shines through in every aspect of this app. From the meticulously designed movie cards on the home page to the search functionality and the insightful article in the About section, every feature has been carefully curated to enhance your movie journey.</p>
          <p>One of the highlights of the website is the search functionality that allows you to effortlessly find specific movies. In addition to the basic information, it also provides additional details, including cast and crew information, genre, awards, and more, allowing you to delve deeper into your favorite films.</p>
        </div>
        <img
          src={deadpool}
          alt='deadpool'
        />
      </div>
    </div>
  );
};

export default About;
