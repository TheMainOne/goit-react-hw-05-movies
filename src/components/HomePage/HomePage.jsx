const HomePage = ({ errorMessage, trendingMovies }) => {
  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies &&
          trendingMovies.map(movie => (
            <li key={movie.id}>{movie.original_title}</li>
          ))}
        {errorMessage && <h2>Error. Something went wrong</h2>}
      </ul>
    </>
  );
};

export default HomePage;
