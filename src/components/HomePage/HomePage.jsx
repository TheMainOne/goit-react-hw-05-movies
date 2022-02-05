const HomePage = ({ errorMessage, trendingMovies }) => {
  console.log(errorMessage);
  console.log(trendingMovies);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies ? (
          trendingMovies.map(movie => (
            <li key={movie.id}>{movie.original_title}</li>
          ))
        ) : (
          <h2>Error. Something went wrong</h2>
        )}
      </ul>
    </>
  );
};

export default HomePage;
