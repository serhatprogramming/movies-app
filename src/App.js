import Movie from "./components/Movie";

const App = ({ movies }) => {
  return (
    <div>
      <h1>Must Watch Movies</h1>
      <ul>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default App;
