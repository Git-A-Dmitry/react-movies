import { Movie } from './Movie';

function Movies(props) {
  const { movies = [] } = props;

  return (
    <div
      id='#movies'
      className='movies'
    >
      {movies.length ? (
        movies.map((movie) => (
          <Movie
            key={movie.imdbID}
            {...movie}
          />
        ))
      ) : (
        <div className='movies__heading'>
          <h5>Movie not found</h5>
        </div>
      )}
    </div>
  );
}

export { Movies };
