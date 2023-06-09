const App = ({ movies }) => {
  return (
    <div>
      <h1>Must Watch Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
